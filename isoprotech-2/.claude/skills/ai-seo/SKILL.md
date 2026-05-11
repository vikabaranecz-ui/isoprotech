# ai-seo

**Version:** 1.0.0 | **Author:** Alireza Rezvani | **License:** MIT | **Updated:** 2026-03-06

## Role
Get ISOPROTECH cited and recommended by AI search platforms: ChatGPT, Perplexity, Google AI Overviews, Claude, Gemini, Copilot.

**Key distinction:** Traditional SEO gets you ranked. AI SEO gets you cited. Different games, different rules.

**Triggers:** "AI Overviews", "ChatGPT noemt ons niet", "Perplexity", "AI zoekmachines", "answer engine"

## Three Pillars of AI Citability

### 1. Structure (Extractable)
Content must be self-contained in answerable chunks:
- **Definition blocks** — first 300 words should define the topic clearly
- **Numbered steps** — for any process (hoe werkt dakisolatie?)
- **Comparison tables** — EPS vs PIR, spuitkurk vs crepi
- **FAQ blocks** — with FAQ schema markup
- **Attribution-included statistics** — "Tot 30% besparing (ISOPROTECH, 2024)"
- **Expert quote blocks** — named specialists with credentials

AI won't find an answer buried deep in long narrative prose.

### 2. Authority (Citable)
- Domain authority and backlink profile
- Named authors with credentials on blog posts
- Original proprietary data (our own project stats, local pricing)
- Recency signals (date-stamped content, updated pages)
- Citation chains (link to and be linked from credible sources)

### 3. Presence (Discoverable)
- **robots.txt** must allow: `GPTBot`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`, `Applebot-Extended`
- Clean crawlability, no blocks on service pages
- Schema markup (`Service`, `FAQPage`, `LocalBusiness`)
- Canonical signals correct
- HTTPS throughout

## Three Operating Modes

### Mode 1 — AI Visibility Audit
- Check if ISOPROTECH appears when asking AI about "dakisolatie antwerpen"
- Map current presence across ChatGPT, Perplexity, Google AI Overviews
- Identify content gaps preventing citation

### Mode 2 — Content Optimization
Restructure existing pages for extractability:
- Add definition block in first 300 words
- Convert buried answers to FAQ format
- Add comparison tables where multiple options exist
- Ensure every key stat is attributed and dated

### Mode 3 — Monitoring
- Track AI citations weekly (manual spot checks)
- Log which queries trigger ISOPROTECH mentions
- Identify new gaps as AI models update

## ISOPROTECH-Specific Opportunities
| Query AI Might Answer | Content Needed |
|---|---|
| "beste isolatiebedrijf antwerpen" | AuthorPage + reviews + LocalBusiness schema |
| "hoeveel kost dakisolatie belgie" | Price guide with ranges + FAQ schema |
| "welke premies voor gevelisolatie" | Structured subsidy guide (steps + amounts) |
| "eps of pir isolatie" | Comparison table with pros/cons |
| "asbestverwijdering vergunning" | Step-by-step guide with regulation references |

## robots.txt — Required Additions
```
User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /
```

## Related Skills
- `seo-audit` — traditional SEO foundation (do this first)
- `content-production` — write the extractable content
- `schema-markup` — implement structured data
