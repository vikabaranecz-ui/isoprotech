#!/usr/bin/env python3

import json
import os
import re
import sys
from collections import Counter, defaultdict
from datetime import date, timedelta
from pathlib import Path
from urllib.parse import quote, urljoin, urlparse
import xml.etree.ElementTree as ET

import requests
from bs4 import BeautifulSoup

BASE_URL = os.getenv("SEO_BASE_URL", "https://www.isoprotech.be").rstrip("/")
GSC_SITE_URL = os.getenv("GSC_SITE_URL", "https://www.isoprotech.be/")
GOOGLE_ADS_CUSTOMER_ID = re.sub(r"\D", "", os.getenv("GOOGLE_ADS_CUSTOMER_ID", ""))
GOOGLE_ADS_LOGIN_CUSTOMER_ID = re.sub(r"\D", "", os.getenv("GOOGLE_ADS_LOGIN_CUSTOMER_ID", ""))
GOOGLE_ADS_DEVELOPER_TOKEN = os.getenv("GOOGLE_ADS_DEVELOPER_TOKEN", "")
GOOGLE_ADS_API_VERSION = os.getenv("GOOGLE_ADS_API_VERSION", "v25")
OUTPUT = Path(os.getenv("SEO_WEEKLY_OUTPUT", "seo-weekly-context.json"))
PROFILE_PATH = Path(os.getenv("SEO_BUSINESS_PROFILE", "isoprotech-2/seo/business_profile.json"))
TIMEOUT = 20

SEEDS = [
    "dakisolatie",
    "dak isoleren",
    "PIR isolatie",
    "sarkingdak",
    "gevelisolatie",
    "EPS isolatie",
    "crepi",
    "spuitkurk",
]


def load_profile():
    return json.loads(PROFILE_PATH.read_text(encoding="utf-8"))


def get_adc_info():
    raw = os.getenv("GOOGLE_ADC_JSON", "").strip()
    if not raw:
        return None
    try:
        return json.loads(raw)
    except json.JSONDecodeError as exc:
        raise RuntimeError(f"GOOGLE_ADC_JSON is not valid JSON: {exc}") from exc


def get_google_access_token():
    info = get_adc_info()
    if not info:
        return None, "GOOGLE_ADC_JSON missing"
    required = ["client_id", "client_secret", "refresh_token"]
    missing = [k for k in required if not info.get(k)]
    if missing:
        return None, f"GOOGLE_ADC_JSON missing fields: {', '.join(missing)}"
    response = requests.post(
        "https://oauth2.googleapis.com/token",
        data={
            "client_id": info["client_id"],
            "client_secret": info["client_secret"],
            "refresh_token": info["refresh_token"],
            "grant_type": "refresh_token",
        },
        timeout=TIMEOUT,
    )
    if response.status_code >= 400:
        return None, f"OAuth refresh failed: HTTP {response.status_code}: {response.text[:500]}"
    return response.json().get("access_token"), None


def gsc_query(access_token, start_date, end_date, dimensions=None, row_limit=25000):
    site = quote(GSC_SITE_URL, safe="")
    url = f"https://www.googleapis.com/webmasters/v3/sites/{site}/searchAnalytics/query"
    body = {
        "startDate": start_date.isoformat(),
        "endDate": end_date.isoformat(),
        "rowLimit": row_limit,
        "dataState": "final",
    }
    if dimensions:
        body["dimensions"] = dimensions
    response = requests.post(
        url,
        headers={"Authorization": f"Bearer {access_token}", "Content-Type": "application/json"},
        json=body,
        timeout=TIMEOUT,
    )
    if response.status_code >= 400:
        raise RuntimeError(f"GSC HTTP {response.status_code}: {response.text[:1000]}")
    return response.json().get("rows", [])


def summarize_gsc(rows):
    if not rows:
        return {"clicks": 0, "impressions": 0, "ctr": 0.0, "position": None}
    if len(rows) == 1 and not rows[0].get("keys"):
        r = rows[0]
        return {
            "clicks": r.get("clicks", 0),
            "impressions": r.get("impressions", 0),
            "ctr": r.get("ctr", 0),
            "position": r.get("position"),
        }
    clicks = sum(r.get("clicks", 0) for r in rows)
    impressions = sum(r.get("impressions", 0) for r in rows)
    ctr = clicks / impressions if impressions else 0
    weighted_pos_num = sum((r.get("position") or 0) * r.get("impressions", 0) for r in rows)
    position = weighted_pos_num / impressions if impressions else None
    return {"clicks": clicks, "impressions": impressions, "ctr": ctr, "position": position}


def collect_gsc(access_token):
    today = date.today()
    end = today - timedelta(days=2)  # GSC final data often lags; avoid unstable newest day
    current_start = end - timedelta(days=27)
    previous_end = current_start - timedelta(days=1)
    previous_start = previous_end - timedelta(days=27)
    start_90 = end - timedelta(days=89)

    result = {
        "site": GSC_SITE_URL,
        "periods": {
            "current_28d": [current_start.isoformat(), end.isoformat()],
            "previous_28d": [previous_start.isoformat(), previous_end.isoformat()],
            "context_90d": [start_90.isoformat(), end.isoformat()],
        },
    }

    current_summary_rows = gsc_query(access_token, current_start, end)
    previous_summary_rows = gsc_query(access_token, previous_start, previous_end)
    context_summary_rows = gsc_query(access_token, start_90, end)

    result["summary"] = {
        "current_28d": summarize_gsc(current_summary_rows),
        "previous_28d": summarize_gsc(previous_summary_rows),
        "context_90d": summarize_gsc(context_summary_rows),
    }

    def clean_rows(rows, key_names):
        output = []
        for row in rows:
            keys = row.get("keys", [])
            item = {name: keys[i] if i < len(keys) else None for i, name in enumerate(key_names)}
            item.update({
                "clicks": row.get("clicks", 0),
                "impressions": row.get("impressions", 0),
                "ctr": row.get("ctr", 0),
                "position": row.get("position"),
            })
            output.append(item)
        return output

    result["current_pages"] = clean_rows(gsc_query(access_token, current_start, end, ["page"], 5000), ["page"])
    result["previous_pages"] = clean_rows(gsc_query(access_token, previous_start, previous_end, ["page"], 5000), ["page"])
    result["current_queries"] = clean_rows(gsc_query(access_token, current_start, end, ["query"], 5000), ["query"])
    result["current_query_pages"] = clean_rows(gsc_query(access_token, current_start, end, ["query", "page"], 10000), ["query", "page"])
    result["context_90d_query_pages"] = clean_rows(gsc_query(access_token, start_90, end, ["query", "page"], 15000), ["query", "page"])

    # Calculate page deltas for Claude so it can focus on meaningful changes.
    prev = {row["page"]: row for row in result["previous_pages"]}
    deltas = []
    for cur in result["current_pages"]:
        old = prev.get(cur["page"], {"clicks": 0, "impressions": 0, "position": None, "ctr": 0})
        deltas.append({
            "page": cur["page"],
            "clicks_current": cur["clicks"],
            "clicks_previous": old["clicks"],
            "click_delta": cur["clicks"] - old["clicks"],
            "impressions_current": cur["impressions"],
            "impressions_previous": old["impressions"],
            "impression_delta": cur["impressions"] - old["impressions"],
            "position_current": cur["position"],
            "position_previous": old["position"],
        })
    result["page_deltas"] = sorted(deltas, key=lambda x: abs(x["impression_delta"]), reverse=True)[:100]

    # Cannibalization signal: one query appearing on multiple URLs with meaningful impressions.
    query_pages = defaultdict(list)
    for row in result["current_query_pages"]:
        if row["impressions"] >= 10:
            query_pages[row["query"]].append(row)
    cannibalization = []
    for query, rows in query_pages.items():
        if len(rows) >= 2:
            rows = sorted(rows, key=lambda r: r["impressions"], reverse=True)
            cannibalization.append({"query": query, "pages": rows[:5]})
    result["cannibalization_signals"] = sorted(
        cannibalization,
        key=lambda x: sum(r["impressions"] for r in x["pages"]),
        reverse=True,
    )[:100]
    return result


def fetch_sitemap_urls():
    sitemap_url = f"{BASE_URL}/sitemap.xml"
    response = requests.get(sitemap_url, timeout=TIMEOUT, headers={"User-Agent": "ISOPROTECH-SEO-Audit/1.0"})
    response.raise_for_status()
    root = ET.fromstring(response.text)
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    locs = [el.text.strip() for el in root.findall(".//sm:loc", ns) if el.text]
    if not locs:
        locs = [el.text.strip() for el in root.findall(".//loc") if el.text]
    return sitemap_url, locs


def audit_page(url, session):
    try:
        response = session.get(url, timeout=TIMEOUT, allow_redirects=True)
    except Exception as exc:
        return {"url": url, "error": str(exc)}

    content_type = response.headers.get("content-type", "")
    item = {
        "url": url,
        "status": response.status_code,
        "final_url": response.url,
        "redirected": response.url.rstrip("/") != url.rstrip("/"),
        "content_type": content_type,
    }
    if "text/html" not in content_type:
        return item

    soup = BeautifulSoup(response.text, "html.parser")
    title = soup.title.get_text(" ", strip=True) if soup.title else ""
    meta_desc_tag = soup.find("meta", attrs={"name": re.compile("^description$", re.I)})
    robots_tag = soup.find("meta", attrs={"name": re.compile("^robots$", re.I)})
    canonical_tag = soup.find("link", attrs={"rel": lambda v: v and "canonical" in v})
    h1s = [x.get_text(" ", strip=True) for x in soup.find_all("h1")]
    h2s = [x.get_text(" ", strip=True) for x in soup.find_all("h2")]
    text = " ".join(soup.stripped_strings)

    internal_links = []
    for a in soup.find_all("a", href=True):
        absolute = urljoin(response.url, a["href"])
        parsed = urlparse(absolute)
        if parsed.netloc in {"www.isoprotech.be", "isoprotech.be"}:
            internal_links.append({
                "href": parsed.path or "/",
                "anchor": a.get_text(" ", strip=True)[:160],
            })

    item.update({
        "title": title,
        "title_length": len(title),
        "meta_description": meta_desc_tag.get("content", "").strip() if meta_desc_tag else "",
        "meta_description_length": len(meta_desc_tag.get("content", "").strip()) if meta_desc_tag else 0,
        "robots": robots_tag.get("content", "").strip() if robots_tag else "",
        "canonical": canonical_tag.get("href", "").strip() if canonical_tag else "",
        "h1s": h1s,
        "h2_count": len(h2s),
        "text_length": len(text),
        "internal_links": internal_links,
    })
    return item


def collect_site_audit(profile):
    sitemap_url, urls = fetch_sitemap_urls()
    session = requests.Session()
    session.headers.update({"User-Agent": "ISOPROTECH-SEO-Audit/1.0"})
    pages = [audit_page(url, session) for url in urls]

    excluded = [x.lower() for x in profile.get("not_offered", []) + profile.get("excluded_materials_as_service", [])]
    issues = []
    link_targets = Counter()

    for page in pages:
        if page.get("error"):
            issues.append({"type": "fetch_error", "url": page["url"], "detail": page["error"]})
            continue
        if page.get("status") != 200:
            issues.append({"type": "non_200", "url": page["url"], "detail": page.get("status")})
        if page.get("redirected"):
            issues.append({"type": "sitemap_redirect", "url": page["url"], "detail": page.get("final_url")})
        if not page.get("title"):
            issues.append({"type": "missing_title", "url": page["url"]})
        if page.get("title_length", 0) > 65:
            issues.append({"type": "long_title", "url": page["url"], "detail": page.get("title")})
        if not page.get("meta_description"):
            issues.append({"type": "missing_meta_description", "url": page["url"]})
        if page.get("meta_description_length", 0) > 170:
            issues.append({"type": "long_meta_description", "url": page["url"], "detail": page.get("meta_description")})
        if len(page.get("h1s", [])) != 1:
            issues.append({"type": "h1_count", "url": page["url"], "detail": len(page.get("h1s", []))})
        if not page.get("canonical"):
            issues.append({"type": "missing_canonical", "url": page["url"]})
        elif page.get("canonical", "").rstrip("/") != page.get("final_url", page["url"]).rstrip("/"):
            issues.append({"type": "canonical_mismatch", "url": page["url"], "detail": page.get("canonical")})
        if "noindex" in page.get("robots", "").lower() and page["url"] in urls:
            issues.append({"type": "sitemap_noindex", "url": page["url"]})
        if page.get("text_length", 0) < 500:
            issues.append({"type": "thin_html_signal", "url": page["url"], "detail": page.get("text_length")})
        haystack = " ".join([page.get("title", ""), page.get("meta_description", ""), *page.get("h1s", [])]).lower()
        matched = [term for term in excluded if term in haystack]
        if matched:
            issues.append({"type": "excluded_service_or_material_signal", "url": page["url"], "detail": sorted(set(matched))})
        for link in page.get("internal_links", []):
            link_targets[link["href"]] += 1

    return {
        "sitemap_url": sitemap_url,
        "url_count": len(urls),
        "pages": pages,
        "issues": issues,
        "issue_counts": dict(Counter(i["type"] for i in issues)),
        "top_internal_targets": link_targets.most_common(100),
    }


def classify_keyword(text, profile):
    q = text.lower().strip()
    purchase = profile.get("purchase_intent_exclusions", [])
    not_offered = profile.get("not_offered", [])
    excluded_materials = profile.get("excluded_materials_as_service", [])
    if any(term.lower() in q for term in purchase):
        return "EXCLUDE", "purchase_or_DIY_intent"
    if any(term.lower() in q for term in not_offered):
        return "EXCLUDE", "service_not_offered"

    comparison_markers = [" vs ", " of ", "beste ", "welke ", "verschil"]
    if any(term.lower() in q for term in excluded_materials) and not any(m in q for m in comparison_markers):
        return "EXCLUDE", "material_not_offered_as_service"

    confirmed = []
    for service, data in profile.get("services", {}).items():
        if not isinstance(data, dict) or not data.get("offered"):
            continue
        confirmed.extend(data.get("methods", []))
        confirmed.append(service)
    if any(term.lower() in q for term in confirmed):
        # Bare material terms remain review unless service intent is obvious.
        if q in {"pir", "pir isolatie", "pir platen", "pir isolatieplaten", "eps", "eps isolatie", "eps platen"}:
            return "REVIEW", "generic_material_term"
        return "KEEP", "confirmed_service_or_method"

    if any(term.lower() in q for term in profile.get("problem_intents", [])):
        return "REVIEW", "problem_intent_requires_context"
    return "REVIEW", "needs_semantic_review"


def collect_google_ads(access_token, profile):
    if not GOOGLE_ADS_CUSTOMER_ID or not GOOGLE_ADS_DEVELOPER_TOKEN:
        return {"error": "Google Ads secrets missing"}
    url = (
        f"https://googleads.googleapis.com/{GOOGLE_ADS_API_VERSION}/customers/"
        f"{GOOGLE_ADS_CUSTOMER_ID}:generateKeywordIdeas"
    )
    headers = {
        "Authorization": f"Bearer {access_token}",
        "developer-token": GOOGLE_ADS_DEVELOPER_TOKEN,
        "Content-Type": "application/json",
    }
    if GOOGLE_ADS_LOGIN_CUSTOMER_ID:
        headers["login-customer-id"] = GOOGLE_ADS_LOGIN_CUSTOMER_ID
    body = {
        "language": "languageConstants/1010",
        "geoTargetConstants": ["geoTargetConstants/2056"],
        "includeAdultKeywords": False,
        "keywordPlanNetwork": "GOOGLE_SEARCH",
        "keywordSeed": {"keywords": SEEDS},
    }
    response = requests.post(url, headers=headers, json=body, timeout=60)
    if response.status_code >= 400:
        return {"error": f"Google Ads HTTP {response.status_code}: {response.text[:1500]}"}
    data = response.json()
    ideas = []
    for result in data.get("results", []):
        metrics = result.get("keywordIdeaMetrics", {}) or {}
        text = result.get("text", "")
        disposition, reason = classify_keyword(text, profile)
        ideas.append({
            "keyword": text,
            "avg_monthly_searches": metrics.get("avgMonthlySearches", 0),
            "competition": metrics.get("competition"),
            "competition_index": metrics.get("competitionIndex"),
            "classifier": disposition,
            "classifier_reason": reason,
        })
    ideas.sort(key=lambda x: x.get("avg_monthly_searches") or 0, reverse=True)
    return {
        "warning": "Google Ads competition is paid-ad competition, not SEO difficulty.",
        "seeds": SEEDS,
        "language": "Dutch (1010)",
        "geo": "Belgium (2056)",
        "ideas": ideas[:250],
        "counts": dict(Counter(i["classifier"] for i in ideas)),
    }


def main():
    profile = load_profile()
    access_token, token_error = get_google_access_token()

    output = {
        "generated_at": date.today().isoformat(),
        "base_url": BASE_URL,
        "business_profile_path": str(PROFILE_PATH),
        "data_quality_notes": [],
    }

    try:
        output["site_audit"] = collect_site_audit(profile)
    except Exception as exc:
        output["site_audit"] = {"error": str(exc)}

    if access_token:
        try:
            output["gsc"] = collect_gsc(access_token)
        except Exception as exc:
            output["gsc"] = {"error": str(exc)}
        try:
            output["google_ads"] = collect_google_ads(access_token, profile)
        except Exception as exc:
            output["google_ads"] = {"error": str(exc)}
    else:
        output["gsc"] = {"error": token_error}
        output["google_ads"] = {"error": token_error}

    output["data_quality_notes"].extend([
        "GSC search analytics returns top rows and does not guarantee every possible row.",
        "The site audit inspects server-returned HTML and sitemap URLs; it does not prove Google indexing status.",
        "Google Ads competition is PPC competition, not organic SEO difficulty.",
    ])

    OUTPUT.write_text(json.dumps(output, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {OUTPUT}")

    errors = []
    for section in ["site_audit", "gsc", "google_ads"]:
        if isinstance(output.get(section), dict) and output[section].get("error"):
            errors.append(f"{section}: {output[section]['error']}")
    if errors:
        print("Data collection warnings:", file=sys.stderr)
        for err in errors:
            print(f"- {err}", file=sys.stderr)


if __name__ == "__main__":
    main()
