#!/usr/bin/env python3
import json
import os
from pathlib import Path

RAW = Path(os.getenv("SEO_WEEKLY_RAW", "seo-weekly-context.json"))
OUT = Path(os.getenv("SEO_WEEKLY_COMPACT", "seo-weekly-context-compact.json"))
TARGETS = Path(os.getenv("SEO_KEYWORD_TARGETS", "isoprotech-2/seo/keyword_targets.json"))
GROWTH = Path(os.getenv("SEO_GROWTH_STRATEGY", "isoprotech-2/seo/growth_strategy.json"))


def num(value):
    return value if isinstance(value, (int, float)) else 0


def top_rows(rows, key="impressions", limit=50):
    return sorted(rows or [], key=lambda r: num(r.get(key)), reverse=True)[:limit]


def summarize_rows(rows):
    rows = rows or []
    clicks = sum(num(r.get("clicks")) for r in rows)
    impressions = sum(num(r.get("impressions")) for r in rows)
    weighted_pos = sum(num(r.get("position")) * num(r.get("impressions")) for r in rows)
    return {
        "clicks": clicks,
        "impressions": impressions,
        "ctr": (clicks / impressions) if impressions else 0,
        "position": (weighted_pos / impressions) if impressions else None,
    }


def brand_split(rows):
    brand = []
    nonbrand = []
    for row in rows or []:
        query = str(row.get("query") or "").lower()
        (brand if "isoprotech" in query else nonbrand).append(row)
    return {
        "brand": summarize_rows(brand),
        "nonbrand": summarize_rows(nonbrand),
        "note": "Based only on rows returned by GSC; top-row truncation may apply.",
    }


def compact_site(site):
    if not isinstance(site, dict) or site.get("error"):
        return site
    pages = site.get("pages") or []
    page_basics = []
    duplicate_brand_titles = []
    for p in pages:
        title = p.get("title", "")
        entry = {
            "url": p.get("url"),
            "status": p.get("status"),
            "redirected": p.get("redirected"),
            "title": title,
            "title_length": p.get("title_length"),
            "meta_description": p.get("meta_description"),
            "meta_description_length": p.get("meta_description_length"),
            "canonical": p.get("canonical"),
            "h1s": p.get("h1s"),
            "text_length": p.get("text_length"),
        }
        page_basics.append(entry)
        if title.upper().count("ISOPROTECH") > 1:
            duplicate_brand_titles.append({"url": p.get("url"), "title": title})
    return {
        "sitemap_url": site.get("sitemap_url"),
        "url_count": site.get("url_count"),
        "issue_counts": site.get("issue_counts"),
        "issues": (site.get("issues") or [])[:60],
        "duplicate_brand_titles": duplicate_brand_titles,
        "page_basics": page_basics,
        "top_internal_targets": (site.get("top_internal_targets") or [])[:30],
    }


def target_scoreboard(current_queries):
    if not TARGETS.exists():
        return {"error": f"Target file missing: {TARGETS}"}
    cfg = json.loads(TARGETS.read_text(encoding="utf-8"))
    lookup = {str(r.get("query") or "").strip().lower(): r for r in current_queries or []}
    rows = []
    for target in cfg.get("targets", []):
        query = str(target.get("query") or "").strip()
        gsc = lookup.get(query.lower())
        rows.append({
            "query": query,
            "cluster": target.get("cluster"),
            "priority": target.get("priority"),
            "position": gsc.get("position") if gsc else None,
            "impressions": gsc.get("impressions", 0) if gsc else 0,
            "clicks": gsc.get("clicks", 0) if gsc else 0,
            "ctr": gsc.get("ctr", 0) if gsc else 0,
            "seen_in_current_28d": bool(gsc),
        })

    def count_at(limit):
        return sum(1 for r in rows if isinstance(r.get("position"), (int, float)) and r["position"] <= limit)

    return {
        "deadline": cfg.get("deadline"),
        "target_count": cfg.get("target_count", 40),
        "target_position": cfg.get("target_position", 5),
        "top3": count_at(3),
        "top5": count_at(5),
        "top10": count_at(10),
        "top20": count_at(20),
        "not_seen_current_28d": sum(1 for r in rows if not r["seen_in_current_28d"]),
        "targets": rows,
        "supporting_topic_pool": cfg.get("supporting_topic_pool", []),
        "note": "Exact-query scoreboard from GSC rows returned for the current 28d. Missing rows are not assumed to rank nowhere; verify if needed.",
    }


def compact_gsc(gsc):
    if not isinstance(gsc, dict) or gsc.get("error"):
        return gsc
    current_queries = gsc.get("current_queries") or []
    current_query_pages = gsc.get("current_query_pages") or []
    context_90d_query_pages = gsc.get("context_90d_query_pages") or []
    zero_click_opportunities = [
        r for r in current_query_pages
        if num(r.get("clicks")) == 0
        and num(r.get("impressions")) >= 5
        and 0 < num(r.get("position")) <= 20
    ]
    zero_click_opportunities.sort(
        key=lambda r: (num(r.get("impressions")), -num(r.get("position"))),
        reverse=True,
    )
    page_deltas = gsc.get("page_deltas") or []
    page_deltas = sorted(
        page_deltas,
        key=lambda r: (
            abs(num(r.get("click_delta"))),
            abs(num(r.get("impression_delta"))),
        ),
        reverse=True,
    )[:30]
    return {
        "site": gsc.get("site"),
        "periods": gsc.get("periods"),
        "summary": gsc.get("summary"),
        "growth_scoreboard": target_scoreboard(current_queries),
        "brand_nonbrand_current_returned_rows": brand_split(current_queries),
        "brand_nonbrand_90d_returned_query_page_rows": brand_split(context_90d_query_pages),
        "page_deltas_top": page_deltas,
        "top_current_pages": top_rows(gsc.get("current_pages"), "impressions", 30),
        "top_current_queries": top_rows(current_queries, "impressions", 60),
        "zero_click_page1_2_opportunities": zero_click_opportunities[:60],
        "top_current_query_pages": top_rows(current_query_pages, "impressions", 60),
        "top_90d_query_pages": top_rows(context_90d_query_pages, "impressions", 60),
        "cannibalization_signals": (gsc.get("cannibalization_signals") or [])[:20],
    }


def compact_ads_scope(scope):
    if not isinstance(scope, dict) or scope.get("error"):
        return scope
    ideas = scope.get("ideas") or []
    keep = [i for i in ideas if i.get("classifier") == "KEEP"]
    review = [i for i in ideas if i.get("classifier") == "REVIEW"]
    exclude = [i for i in ideas if i.get("classifier") == "EXCLUDE"]
    return {
        "label": scope.get("label"),
        "geo": scope.get("geo"),
        "geo_target_constants": scope.get("geo_target_constants"),
        "counts": scope.get("counts"),
        "top_keep": top_rows(keep, "avg_monthly_searches", 40),
        "top_review": top_rows(review, "avg_monthly_searches", 20),
        "top_exclude_examples": top_rows(exclude, "avg_monthly_searches", 10),
    }


def compact_ads(ads):
    if not isinstance(ads, dict) or ads.get("error"):
        return ads

    # Backward compatibility with older raw artifacts that contain one geo only.
    if "national" not in ads and "local" not in ads:
        ideas = ads.get("ideas") or []
        keep = [i for i in ideas if i.get("classifier") == "KEEP"]
        review = [i for i in ideas if i.get("classifier") == "REVIEW"]
        exclude = [i for i in ideas if i.get("classifier") == "EXCLUDE"]
        return {
            "warning": ads.get("warning"),
            "seeds": ads.get("seeds"),
            "language": ads.get("language"),
            "geo": ads.get("geo"),
            "counts": ads.get("counts"),
            "top_keep": top_rows(keep, "avg_monthly_searches", 40),
            "top_review": top_rows(review, "avg_monthly_searches", 20),
            "top_exclude_examples": top_rows(exclude, "avg_monthly_searches", 10),
        }

    comparisons = ads.get("local_vs_national") or []
    usable = [r for r in comparisons if r.get("classifier") != "EXCLUDE"]
    return {
        "warning": ads.get("warning"),
        "geo_priority_rule": ads.get("geo_priority_rule"),
        "seeds": ads.get("seeds"),
        "language": ads.get("language"),
        "local": compact_ads_scope(ads.get("local")),
        "national": compact_ads_scope(ads.get("national")),
        "local_vs_national_top_local": top_rows(usable, "local_avg_monthly_searches", 50),
        "local_vs_national_top_national_context": top_rows(usable, "national_avg_monthly_searches", 30),
        "note": (
            "Local volume is the primary Keyword Planner signal for service-area prioritization. "
            "National volume is supporting market context; combine both with GSC before changing pages."
        ),
    }


def main():
    raw = json.loads(RAW.read_text(encoding="utf-8"))
    growth = json.loads(GROWTH.read_text(encoding="utf-8")) if GROWTH.exists() else None
    compact = {
        "generated_at": raw.get("generated_at"),
        "base_url": raw.get("base_url"),
        "business_profile_path": raw.get("business_profile_path"),
        "growth_strategy": growth,
        "keyword_targets_path": str(TARGETS),
        "data_quality_notes": raw.get("data_quality_notes"),
        "site_audit": compact_site(raw.get("site_audit")),
        "gsc": compact_gsc(raw.get("gsc")),
        "google_ads": compact_ads(raw.get("google_ads")),
        "cost_control_note": (
            "This is the compact decision context. Do not read the full raw artifact unless "
            "a critical fact is missing or a source failed."
        ),
    }
    OUT.write_text(json.dumps(compact, ensure_ascii=False, separators=(",", ":")) + "\n", encoding="utf-8")
    print(f"Wrote compact context {OUT} ({OUT.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
