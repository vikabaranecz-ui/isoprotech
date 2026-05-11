# seo-audit

**Version:** 1.0.0 | **Author:** Alireza Rezvani | **License:** MIT | **Updated:** 2026-03-06

## Role
Diagnose and fix SEO issues to improve ISOPROTECH's organic search visibility in the Antwerp region.

**Triggers:** "SEO audit", "waarom ranken we niet", "meta tags", "SEO check", "technische SEO"  
**Not this skill:** AI search visibility → use `ai-seo`; Scaled page creation → use `programmatic-seo` (if available)

## First: Load Context
Read `marketing-context/SKILL.md` for priority keywords, target geography, and content goals.

## Audit Structure

### Intake (Ask First)
1. Site context: business type, SEO goals, priority keywords
2. Current state: known issues, traffic baseline, recent changes (migration, redesign)
3. Scope: full site vs. specific pages, do we have GA/Search Console access?

### Three Audit Dimensions

**1. Technical SEO**
- Crawlability (robots.txt, sitemap.xml, canonicals)
- Core Web Vitals (LCP < 2.5s, CLS < 0.1, INP < 200ms)
- Mobile-friendliness
- HTTPS, redirects, 404s
- Structured data / schema markup presence
- Bot allowances for AI crawlers (GPTBot, PerplexityBot, ClaudeBot)

**2. On-Page SEO**
- Title tags (unique, keyword-first, 50–60 chars)
- Meta descriptions (unique, benefit-driven, 150–160 chars)
- H1 (one per page, matches search intent)
- H2/H3 hierarchy (keywords in headers)
- Image alt text
- Internal linking (2–4 contextual links per page)

**3. Content**
- Keyword coverage vs. target list from `marketing-context`
- Thin content (< 300 words on service pages)
- Duplicate or near-duplicate content
- E-E-A-T signals (author, expertise, trust)
- Local SEO: NAP consistency, Google Business Profile, local schema

## Issue Format
For each finding:
```
Issue: [what's broken]
SEO Impact: High / Medium / Low
Discovery: [how found]
Fix: [specific action]
Priority: Critical / High / Quick Win / Long-term
```

## Output Structure
1. **Executive Summary** — 3–5 priority issues + quick wins
2. **Technical findings**
3. **On-page findings**
4. **Content findings**
5. **Action plan** — Critical fixes → High impact → Quick wins → Long-term

## ISOPROTECH-Specific Checks
- Local schema (LocalBusiness, Service) on all service pages
- FAQ schema on /faq/ and service pages
- City pages thin content check (/regio/[city])
- Sitemap includes all /diensten/, /regio/, /blog/ pages
- robots.txt allows all AI bots
- Google Business Profile listing verified and complete

## Related Skills
- `ai-seo` — AI answer engine visibility
- `content-strategy` — topical authority gaps
- `page-cro` — conversion issues on high-traffic pages
- `content-production` — fix thin/weak content
