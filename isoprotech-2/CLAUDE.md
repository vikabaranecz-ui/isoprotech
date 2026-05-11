# ISOPROTECH — Claude Instructions

## Project Overview
Next.js 14 (App Router) website for **ISOPROTECH**, a Belgian insulation and facade renovation company based in Antwerp. The site targets Dutch-speaking homeowners in the Antwerp region.

**Tech stack:** Next.js 14, TypeScript, Tailwind CSS, React Hook Form + Zod, Resend (email), Vercel  
**Language:** Dutch (Belgian) — all user-facing content in Dutch, "u" form  
**Primary goal:** Generate offerte-aanvragen (quote requests) via contact form and phone

## Project Structure
```
isoprotech-2/
├── src/
│   ├── app/           # Next.js App Router pages
│   ├── components/    # UI, layout, forms, calculators, SEO
│   ├── content/       # Static data: services, cities, faqs, blog, reviews
│   └── lib/           # calculator, seo, form, tracking, constants
├── public/images/     # All images local (no CDN)
└── .claude/skills/    # Marketing skills (see below)
```

## Key Files
- `src/lib/constants.ts` — BRAND info, colors, images, social links
- `src/content/services.ts` — All services with SEO metadata
- `src/content/cities.ts` — City/region pages
- `src/content/blog.ts` — Blog articles
- `src/app/api/contact/route.ts` — Contact form handler

## Development Commands
```bash
cd isoprotech-2
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
```

---

## Marketing Skills

Marketing work uses a set of specialist skills in `.claude/skills/`. Always start with the router.

### Quick Start
**Step 1:** Tell Claude what you need (e.g., "Write a blog post about dakisolatie premies")  
**Step 2:** Claude reads `marketing-ops/SKILL.md` to route to the right specialist  
**Step 3:** The specialist reads `marketing-context/SKILL.md` for brand context  
**Step 4:** Task is executed with ISOPROTECH's voice, goals, and audience in mind

### Available Skills

| Skill | Trigger | Purpose |
|---|---|---|
| `marketing-ops` | Start here for any marketing task | Routes to the right specialist, orchestrates campaigns |
| `marketing-context` | Brand foundation | Brand voice, personas, keywords, proof points — read this first |
| `content-production` | "Schrijf een blog post", "draft een artikel" | Blog posts, service page copy, guides |
| `content-strategy` | "Content plan", "wat moet ik schrijven" | Content pillars, topic clusters, editorial calendar |
| `seo-audit` | "SEO audit", "waarom ranken we niet" | Technical SEO, on-page, local SEO diagnostics |
| `ai-seo` | "AI Overviews", "ChatGPT noemt ons niet" | AI search engine citability (ChatGPT, Perplexity, etc.) |
| `copywriting` | "Herschrijf deze pagina", "betere CTA" | Conversion copy for pages, headlines, CTAs |
| `page-cro` | "Pagina converteert niet", "meer aanvragen" | Conversion rate optimization |
| `social-content` | "Instagram post", "Reels idee" | Instagram/Facebook content creation |

### Skill Source
Skills adapted from [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills/tree/main/marketing-skill) and customized for ISOPROTECH.
