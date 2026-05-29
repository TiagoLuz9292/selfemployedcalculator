# SEO Site Blueprint — Spin-Up Instructions

This folder is a ready-to-use template for a new niche SEO calculator site.
Stack: Next.js 16 / App Router / Tailwind v4 / Vercel. All content is data-driven — no CMS.

Read this file fully before touching any code. Every step is listed in order.

---

## Step 1 — Copy the blueprint

```bash
cp -r websites/blueprint websites/<sitename>
cd websites/<sitename>
npm install
```

---

## Step 2 — Fill in site identity (do these first, everything else depends on them)

| File | What to change |
|---|---|
| `src/data/site.ts` | name, tagline, description, url (DOMAIN.com), twitterHandle, keywords |
| `src/app/api/og/route.tsx` | `SITE_NAME` and `SITE_DOMAIN` constants at the top |
| `src/app/about/page.tsx` | metadata description, all TODO sections |
| `src/app/contact/page.tsx` | `CONTACT_EMAIL` constant |
| `src/app/privacy-policy/page.tsx` | `SITE_NAME`, `CONTACT_EMAIL`, `SITE_URL` constants |
| `src/components/layout/Header.tsx` | `TOP_CALCULATORS` array — set 4-6 slugs |
| `src/app/layout.tsx` | `CLARITY_TAG_ID` — get from https://clarity.microsoft.com |
| `package.json` | `name` field |

---

## Step 3 — Generate IndexNow key

```bash
python3 -c "import uuid; print(uuid.uuid4().hex.upper())"
```

1. Copy the output key (e.g. `ABC123...`)
2. Create `public/<key>.txt` containing just the key string
3. Add `INDEXNOW_KEY=<key>` to your Vercel env vars (and `.env.local`)

---

## Step 4 — Fill in content data

Work through these files in order. Each empty array auto-generates pages once populated.

### `src/data/categories.ts`
Define your niche's categories first — calculator slugs reference these.

### `src/data/calculators.ts`
Each entry generates a page at `/calculators/[slug]`. Required fields: slug, name, shortName,
description, longDescription, category (must match a category slug), keywords, fields, faqs,
educationContent, relatedSlugs.

For the calculator logic, create `src/lib/calculators/<name>.ts` for each calculator.
Copy the pattern from `tradefeecalc/src/lib/calculators/` or `k8scalc/src/lib/calculators/`.

### `src/data/comparisons.ts`
Each entry generates a page at `/compare/[slug]`.

### `src/data/glossary.ts`
Each entry generates a page at `/glossary/[slug]`.

### `src/data/affiliates.ts`
Add affiliate links as you get approved. Keys must be added to `PARTNER_NAMES` in Footer.tsx
and `EXCHANGE_META` in AffiliateBlock.tsx if you want display names.

---

## Step 5 — Add calculator pages (dynamic route already exists)

The route `src/app/calculators/[slug]/page.tsx` does NOT exist in the blueprint — copy it
from the most recent working site and adapt:

```bash
cp -r websites/tradefeecalc/src/app/calculators websites/<sitename>/src/app/
cp -r websites/tradefeecalc/src/app/compare websites/<sitename>/src/app/
cp -r websites/tradefeecalc/src/app/glossary websites/<sitename>/src/app/
cp -r websites/tradefeecalc/src/app/blog websites/<sitename>/src/app/
cp -r websites/tradefeecalc/src/app/category websites/<sitename>/src/app/
```

These pages are data-driven and require no changes beyond what's in `src/data/`.

---

## Step 6 — Home page niche copy

In `src/app/page.tsx`, replace all `TODO` and `NICHE_*` placeholders:
- Hero H1 and subheadline
- Feature card descriptions
- `FEATURED_SLUGS` array (6-8 key calculator slugs)
- SEO footer text (3 paragraphs, keyword-rich)

---

## Step 7 — Blog content

Add `.mdx` files to `content/blog/`. Each file needs frontmatter:

```mdx
---
title: "Post Title"
description: "150-160 char meta description"
date: "2026-01-01"
category: "category-slug"
keywords: ["keyword1", "keyword2"]
featured: false
---

Post content here...
```

Update `src/lib/content/relatedPosts.ts` to map your categories to relevant post slugs.

---

## Step 8 — AdSense setup

1. Apply for AdSense at https://adsense.google.com once the site has meaningful traffic
2. Get your publisher ID (`ca-pub-XXXXXXXXXXXXXXXX`)
3. Add the AdSense script to `src/app/layout.tsx` (see k8scalc or tradefeecalc for example)
4. Add `google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0` to `public/ads.txt`
5. Once approved, set `NEXT_PUBLIC_ADS_ENABLED=true` and add real ad units to `AdSlot.tsx`

---

## Step 9 — Deploy to Vercel

1. Create new Vercel project, connect GitHub repo
2. Set env vars: `NEXT_PUBLIC_SITE_URL`, `INDEXNOW_KEY`, optionally `CRON_SECRET`
3. Deploy

---

## Step 10 — Search engine setup (after first deploy)

1. **Google Search Console:** Add property → verify → submit `https://DOMAIN.com/sitemap.xml`
2. **Bing Webmaster Tools:**
   - Add site (use domain WITHOUT www — matches canonical)
   - Verify via XML file: create `public/BingSiteAuth.xml` from the code Bing gives you
   - Submit sitemap: `https://DOMAIN.com/sitemap.xml`
3. **Trigger IndexNow:** `curl https://DOMAIN.com/api/indexnow`
   - Expected response: `{"submitted": N, "bing": 200, "indexnow": 200}`

---

## Design system (do not change)

GitHub dark terminal aesthetic — keep consistent across all sites:
- Background `#0d1117`, card `#161b22`, border `#30363d`
- Primary blue `#58a6ff`, success green `#3fb950`, amber `#d29922`
- Fonts: Geist Sans + Geist Mono
- Tailwind v4 — no `tailwind.config.js`, configured via `@tailwindcss/postcss`

---

## Architecture reference

```
src/
  app/
    [route]/page.tsx        ← static pages + dynamic [slug] pages
    api/indexnow/route.ts   ← IndexNow submission (call after deploys)
    api/og/route.tsx        ← OG image generation
    sitemap.ts              ← dynamic sitemap (auto-includes all data)
    robots.ts
    layout.tsx              ← global layout, Analytics, Clarity, AdSense
  components/
    calculators/            ← CalculatorShell, InputField, ResultCard, ShareButton
    content/                ← EducationBlock, FaqSection, RelatedPosts, RelatedTools
    layout/                 ← Header (update TOP_CALCULATORS), Footer
    monetization/           ← AdSlot, AffiliateBlock
    seo/                    ← Breadcrumbs, JsonLd
    ui/                     ← shadcn-style primitives (button, badge, input, etc.)
  data/                     ← fill in per niche (START HERE)
  lib/
    calculators/            ← calculation logic (create per niche)
    content/mdx.ts          ← reads content/blog/*.mdx
    seo/                    ← metadata builder, JSON-LD schemas
  types/                    ← TypeScript interfaces (don't change)
content/
  blog/*.mdx                ← blog posts
public/
  <indexnow-key>.txt        ← IndexNow verification
  BingSiteAuth.xml          ← Bing WMT verification (add after Step 10)
  ads.txt                   ← AdSense publisher ID
```

---

## Key commands

```bash
npm run dev      # dev server on localhost:3000
npm run build    # production build (catches TS errors)
npm run lint     # ESLint
```
