# ISOPROTECH — Production Rebuild: Audit + Architecture

## 1. AUDIT: Current Codebase Failures

### Critical

| # | Issue | Impact |
|---|-------|--------|
| 1 | **Fake contact form** — `setSent(true)` toggles UI, no data goes anywhere | Zero leads captured. The business literally cannot receive inquiries through the site. |
| 2 | **Hash routing** — all URLs are `/#/path` | Google cannot crawl or index any interior page. The site is effectively a single-page dead end for search. |
| 3 | **Zero SEO metadata** — no `<title>`, no meta description, no schema | No search ranking possible. Entire site is invisible to search engines. |
| 4 | **1083-line single file** — everything in one JSX | Unmaintainable, untestable, no code splitting, no lazy loading. |

### Serious

| # | Issue | Impact |
|---|-------|--------|
| 5 | **Calculator false precision** — roof calc shows exact EUR for vague inputs | Users get a "total" that implies accuracy but is built on unvalidated assumptions. Damages trust when real quote differs by 40%. |
| 6 | **No form validation** — no required fields, no format checks, no error states | Users can submit empty forms (not that it matters since nothing submits). |
| 7 | **No privacy consent** — GDPR requires explicit opt-in before data collection | Legal liability in Belgium. |
| 8 | **No tracking hooks** — no GTM dataLayer, no form-submit events | Cannot measure conversion. Cannot optimize ads. |
| 9 | **Inaccessible navigation** — divs as buttons, no aria labels, no keyboard nav | Fails WCAG, poor mobile UX, legal risk. |
| 10 | **City pages are templates** — same text with {city.name} interpolated | Google penalizes thin/duplicate content. 20 near-identical pages hurt rather than help. |

### Moderate

| # | Issue | Impact |
|---|-------|--------|
| 11 | **No image optimization** — raw URLs to one.com CDN, no srcset, no lazy loading | Slow LCP, poor Core Web Vitals. |
| 12 | **Inline styles everywhere** — no CSS extraction, no reuse | Bundle bloat, no caching, hard to maintain. |
| 13 | **No error boundaries** — any component crash kills entire site | Fragile in production. |
| 14 | **Reviews lack verification** — no Google link, no date, no service context | Weaker trust signal than it should be. |
| 15 | **Blog articles are string arrays** — no markdown, no headings, no internal links | Cannot rank for article keywords. Poor reading experience. |

---

## 2. TARGET ARCHITECTURE

### Tech Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | **Next.js 14 (App Router)** | SSR/SSG for SEO, file-based routing, API routes for form |
| Styling | **Tailwind CSS** | Utility-first, purged output, fast iteration |
| Forms | **React Hook Form + Zod** | Validation, error states, controlled submission |
| Email | **Resend / Nodemailer** via API route | Production form submission |
| Analytics | **GTM + GA4 dataLayer** | Conversion tracking |
| Spam | **Honeypot + rate limiting** | No visible CAPTCHA needed |
| Schema | **JSON-LD injected per page** | Structured data for rich results |
| CMS | **MDX for blog** | Markdown with components, static generation |
| Images | **next/image** | Automatic optimization, WebP, lazy loading |
| Deploy | **Vercel** | Edge functions, ISR, analytics |

### Folder Structure

```
isoprotech/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout + global SEO
│   │   ├── page.tsx                # Homepage
│   │   ├── diensten/
│   │   │   ├── page.tsx            # Service overview
│   │   │   └── [slug]/page.tsx     # Individual service
│   │   ├── realisaties/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── faq/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx            # Blog index
│   │   │   └── [slug]/page.tsx     # Blog article
│   │   ├── calculator/
│   │   │   ├── page.tsx            # Calculator with tabs
│   │   │   └── dak/page.tsx        # Direct dak URL
│   │   ├── regio/
│   │   │   └── [city]/page.tsx     # City pages
│   │   ├── privacy/page.tsx
│   │   ├── not-found.tsx           # 404
│   │   └── api/
│   │       └── contact/route.ts    # Form handler
│   ├── components/
│   │   ├── ui/                     # Primitives (Button, Input, Card)
│   │   ├── layout/                 # Navbar, Footer, Breadcrumb
│   │   ├── sections/               # Hero, Steps, Reviews, USP
│   │   ├── forms/                  # ContactForm, QuoteForm
│   │   ├── calculators/            # GevelCalc, DakCalc, shared
│   │   └── seo/                    # JsonLd, PageMeta
│   ├── content/
│   │   ├── services.ts             # Service data
│   │   ├── cities.ts               # City data with unique content
│   │   ├── projects.ts             # Project portfolio
│   │   ├── reviews.ts              # Verified reviews
│   │   ├── faqs.ts                 # FAQ data
│   │   └── blog/                   # MDX articles
│   ├── lib/
│   │   ├── calculator.ts           # Calculator pricing logic
│   │   ├── seo.ts                  # Meta/schema generators
│   │   ├── form.ts                 # Validation schemas
│   │   ├── tracking.ts             # GTM dataLayer events
│   │   └── constants.ts            # Brand info, config
│   └── styles/
│       └── globals.css             # Tailwind + custom properties
└── public/
    ├── images/
    └── robots.txt, sitemap.xml
```

---

## 3. CONVERSION STRATEGY PER PAGE

| Page | Primary CTA | Secondary CTA | Trust Element |
|------|-------------|---------------|---------------|
| Home | "Gratis inspectie" form | Phone/WhatsApp | Reviews + USP bar |
| Service | "Offerte voor [dienst]" form | Calculator link | Benefits + process |
| City | "Offerte in [stad]" | Phone | Local project refs |
| Calculator | "Exacte offerte aanvragen" | Phone | Disclaimer + range |
| Blog | Inline CTA card | Related services | Author/date |
| FAQ | Contact link per answer | Calculator | Schema rich results |
| Contact | Full form | All channels | Map + hours |

---

## 4. CALCULATOR INTEGRITY RULES

### Problem with current approach
The calculators present a single number (e.g. "€ 14.832") suggesting engineering-level precision from inputs like "120 m² wall area". In reality, every real quote differs by 20-40% based on site conditions, access, wall state, windows, etc.

### Solution: Honest range-based estimates

1. Show **price ranges** not single numbers: "€ 11.500 – € 16.200"
2. Label clearly: "Indicatieve prijsvork — niet bindend"
3. Simplify inputs to only factors that meaningfully affect price
4. Remove false-precision inputs (exact plint length when we don't know the house)
5. Show per-m² market range for context
6. Always end with "Vraag een gratis inspectie voor een exacte prijs"

---

## 5. FORM ARCHITECTURE

```
ContactForm
├── React Hook Form (useForm)
├── Zod schema validation
│   ├── name: min 2 chars
│   ├── phone: Belgian format
│   ├── email: valid email
│   ├── service: required selection
│   ├── message: optional
│   └── privacy: must be true
├── Honeypot field (hidden)
├── States: idle → submitting → success → error
├── On submit:
│   ├── POST /api/contact
│   ├── Server validates again
│   ├── Send email via Resend
│   ├── Push GTM event
│   └── Return success/error
└── Accessibility
    ├── aria-invalid on errors
    ├── aria-describedby for error messages
    ├── focus management on error
    └── live region for success
```

---

## 6. SEO PER PAGE TYPE

| Page | Title Pattern | Schema |
|------|--------------|--------|
| Home | Isoprotech — Dak- en gevelisolatie Antwerpen | LocalBusiness + AggregateRating |
| Service | {Dienst} Antwerpen — Isoprotech | Service + FAQ (if applicable) |
| City | {Dienst} {Stad} — Isoprotech | LocalBusiness + areaServed |
| Blog | {Title} — Isoprotech Blog | BlogPosting + breadcrumb |
| FAQ | FAQ — Isoprotech | FAQPage schema |
| Calculator | Prijscalculator — Isoprotech | WebApplication |
| Contact | Contact — Isoprotech | LocalBusiness + ContactPoint |
