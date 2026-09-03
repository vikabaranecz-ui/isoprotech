#!/usr/bin/env python3
"""Dual-geo Google Ads Keyword Planner collection for the weekly SEO automation.

Collects Belgium-wide demand for market context and Antwerp Province demand as a
local proxy for ISOPROTECH's service area. The local scope is intentionally a
proxy, not a claim that the business serves every location in the province.
"""

import os
from collections import Counter

import requests

LOCAL_GEO_NAME = os.getenv("SEO_LOCAL_GEO_NAME", "Antwerp").strip()
LOCAL_GEO_COUNTRY = os.getenv("SEO_LOCAL_GEO_COUNTRY", "BE").strip().upper()
LOCAL_GEO_TARGET_TYPE = os.getenv("SEO_LOCAL_GEO_TARGET_TYPE", "Province").strip()
NATIONAL_GEO_RESOURCE = os.getenv("SEO_NATIONAL_GEO_RESOURCE", "geoTargetConstants/2056").strip()
LANGUAGE_RESOURCE = os.getenv("SEO_KEYWORD_LANGUAGE_RESOURCE", "languageConstants/1010").strip()
REQUEST_TIMEOUT = 60


def _headers(access_token, collector):
    headers = {
        "Authorization": f"Bearer {access_token}",
        "developer-token": collector.GOOGLE_ADS_DEVELOPER_TOKEN,
        "Content-Type": "application/json",
    }
    if collector.GOOGLE_ADS_LOGIN_CUSTOMER_ID:
        headers["login-customer-id"] = collector.GOOGLE_ADS_LOGIN_CUSTOMER_ID
    return headers


def _gaql_string(value):
    return str(value).replace("\\", "\\\\").replace("'", "\\'")


def _search_geo_candidates(access_token, collector, name, country_code):
    url = (
        f"https://googleads.googleapis.com/{collector.GOOGLE_ADS_API_VERSION}/customers/"
        f"{collector.GOOGLE_ADS_CUSTOMER_ID}/googleAds:search"
    )
    query = (
        "SELECT geo_target_constant.resource_name, geo_target_constant.id, "
        "geo_target_constant.name, geo_target_constant.canonical_name, "
        "geo_target_constant.country_code, geo_target_constant.target_type, "
        "geo_target_constant.status "
        "FROM geo_target_constant "
        f"WHERE geo_target_constant.name = '{_gaql_string(name)}' "
        f"AND geo_target_constant.country_code = '{_gaql_string(country_code)}'"
    )
    response = requests.post(
        url,
        headers=_headers(access_token, collector),
        json={"query": query},
        timeout=REQUEST_TIMEOUT,
    )
    if response.status_code >= 400:
        raise RuntimeError(f"Geo lookup HTTP {response.status_code}: {response.text[:1200]}")

    candidates = []
    for row in response.json().get("results", []):
        geo = row.get("geoTargetConstant") or row.get("geo_target_constant") or {}
        if not geo:
            continue
        candidates.append({
            "resource_name": geo.get("resourceName") or geo.get("resource_name"),
            "id": geo.get("id"),
            "name": geo.get("name"),
            "canonical_name": geo.get("canonicalName") or geo.get("canonical_name"),
            "country_code": geo.get("countryCode") or geo.get("country_code"),
            "target_type": geo.get("targetType") or geo.get("target_type"),
            "status": geo.get("status"),
        })
    return candidates


def _resolve_local_geo(access_token, collector):
    candidates = _search_geo_candidates(
        access_token,
        collector,
        LOCAL_GEO_NAME,
        LOCAL_GEO_COUNTRY,
    )
    enabled = [c for c in candidates if c.get("status") in {None, "", "ENABLED"}]
    exact_type = [
        c for c in enabled
        if str(c.get("target_type") or "").casefold() == LOCAL_GEO_TARGET_TYPE.casefold()
    ]
    if not exact_type:
        available = ", ".join(
            sorted({str(c.get("target_type") or "unknown") for c in enabled})
        ) or "none"
        raise RuntimeError(
            f"Could not resolve enabled {LOCAL_GEO_TARGET_TYPE} geo target for "
            f"{LOCAL_GEO_NAME}, {LOCAL_GEO_COUNTRY}. Available target types: {available}"
        )
    exact_type.sort(key=lambda c: str(c.get("canonical_name") or c.get("name") or ""))
    chosen = exact_type[0]
    if not chosen.get("resource_name"):
        raise RuntimeError(f"Resolved local geo target has no resource name: {chosen}")
    return chosen


def _parse_ideas(data, profile, collector):
    ideas = []
    for result in data.get("results", []):
        metrics = result.get("keywordIdeaMetrics", {}) or {}
        text = result.get("text", "")
        disposition, reason = collector.classify_keyword(text, profile)
        ideas.append({
            "keyword": text,
            "avg_monthly_searches": metrics.get("avgMonthlySearches", 0),
            "competition": metrics.get("competition"),
            "competition_index": metrics.get("competitionIndex"),
            "low_top_of_page_bid_micros": metrics.get("lowTopOfPageBidMicros"),
            "high_top_of_page_bid_micros": metrics.get("highTopOfPageBidMicros"),
            "classifier": disposition,
            "classifier_reason": reason,
        })
    ideas.sort(key=lambda x: int(x.get("avg_monthly_searches") or 0), reverse=True)
    return ideas


def _generate_ideas(access_token, profile, collector, geo_resources):
    url = (
        f"https://googleads.googleapis.com/{collector.GOOGLE_ADS_API_VERSION}/customers/"
        f"{collector.GOOGLE_ADS_CUSTOMER_ID}:generateKeywordIdeas"
    )
    body = {
        "language": LANGUAGE_RESOURCE,
        "geoTargetConstants": geo_resources,
        "includeAdultKeywords": False,
        "keywordPlanNetwork": "GOOGLE_SEARCH",
        "keywordSeed": {"keywords": collector.SEEDS},
    }
    response = requests.post(
        url,
        headers=_headers(access_token, collector),
        json=body,
        timeout=REQUEST_TIMEOUT,
    )
    if response.status_code >= 400:
        raise RuntimeError(f"Google Ads HTTP {response.status_code}: {response.text[:1500]}")
    return _parse_ideas(response.json(), profile, collector)


def _scope(label, geo_description, geo_targets, ideas):
    return {
        "label": label,
        "geo": geo_description,
        "geo_target_constants": geo_targets,
        "ideas": ideas[:250],
        "counts": dict(Counter(i["classifier"] for i in ideas)),
    }


def _merge_scopes(national_ideas, local_ideas):
    national = {str(i.get("keyword") or "").casefold(): i for i in national_ideas}
    local = {str(i.get("keyword") or "").casefold(): i for i in local_ideas}
    rows = []
    for key in set(national) | set(local):
        n = national.get(key) or {}
        l = local.get(key) or {}
        keyword = l.get("keyword") or n.get("keyword") or key
        n_volume = int(n.get("avg_monthly_searches") or 0)
        l_volume = int(l.get("avg_monthly_searches") or 0)
        base = l or n
        rows.append({
            "keyword": keyword,
            "classifier": base.get("classifier"),
            "classifier_reason": base.get("classifier_reason"),
            "local_avg_monthly_searches": l_volume,
            "national_avg_monthly_searches": n_volume,
            "local_share_of_national": round(l_volume / n_volume, 4) if n_volume else None,
            "local_competition": l.get("competition"),
            "national_competition": n.get("competition"),
            "local_competition_index": l.get("competition_index"),
            "national_competition_index": n.get("competition_index"),
            "local_low_top_of_page_bid_micros": l.get("low_top_of_page_bid_micros"),
            "local_high_top_of_page_bid_micros": l.get("high_top_of_page_bid_micros"),
            "national_low_top_of_page_bid_micros": n.get("low_top_of_page_bid_micros"),
            "national_high_top_of_page_bid_micros": n.get("high_top_of_page_bid_micros"),
        })
    rows.sort(
        key=lambda x: (
            int(x.get("local_avg_monthly_searches") or 0),
            int(x.get("national_avg_monthly_searches") or 0),
        ),
        reverse=True,
    )
    return rows


def collect_google_ads_dual_geo(access_token, profile, collector):
    if not collector.GOOGLE_ADS_CUSTOMER_ID or not collector.GOOGLE_ADS_DEVELOPER_TOKEN:
        return {"error": "Google Ads secrets missing"}

    try:
        national_ideas = _generate_ideas(
            access_token,
            profile,
            collector,
            [NATIONAL_GEO_RESOURCE],
        )
    except Exception as exc:
        return {"error": f"Belgium Keyword Planner collection failed: {exc}"}

    national_scope = _scope(
        "Belgium market context",
        "Belgium (2056)",
        [{"resource_name": NATIONAL_GEO_RESOURCE, "name": "Belgium", "target_type": "Country"}],
        national_ideas,
    )

    local_error = None
    local_target = None
    local_ideas = []
    try:
        local_target = _resolve_local_geo(access_token, collector)
        local_ideas = _generate_ideas(
            access_token,
            profile,
            collector,
            [local_target["resource_name"]],
        )
    except Exception as exc:
        local_error = str(exc)

    if local_error:
        local_scope = {
            "error": local_error,
            "label": "Antwerp local demand",
            "geo": f"{LOCAL_GEO_NAME} {LOCAL_GEO_TARGET_TYPE} ({LOCAL_GEO_COUNTRY})",
        }
    else:
        local_scope = _scope(
            "Antwerp local demand",
            f"{local_target.get('canonical_name') or local_target.get('name')} "
            f"({local_target.get('target_type')})",
            [local_target],
            local_ideas,
        )

    return {
        "warning": "Google Ads competition is paid-ad competition, not SEO difficulty.",
        "geo_priority_rule": (
            "Use Antwerp local demand as the primary Keyword Planner signal for service-area SEO. "
            "Use Belgium demand for market breadth and content discovery. Antwerp Province is a "
            "geographic proxy, not proof of exact demand inside ISOPROTECH's 20-25 km service radius; "
            "combine it with GSC and the business-profile service-area rules."
        ),
        "seeds": collector.SEEDS,
        "language": "Dutch (1010)",
        "national": national_scope,
        "local": local_scope,
        "local_vs_national": _merge_scopes(national_ideas, local_ideas)[:250],
    }
