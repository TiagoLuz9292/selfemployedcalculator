# FreelanceCalc — Post Pre-Launch SEO Audit
*Written: 2026-05-30 — run after PRE-LAUNCH-PLAN.md was fully executed*

Current state: **95 static pages, build passes, all internal linking done.**

This audit identifies what can still be improved for maximum SEO quality and fastest possible indexation.

---

## Issues Found — Ranked by Impact

---

### 🔴 HIGH IMPACT

#### 1. Stale site description says "20 tools" — now 23
**File:** `src/data/site.ts`
**Problem:** `description` field still says "20 tools built for independent contractors". Google uses this in sitelinks and OG previews.
**Fix:** Update to "23 free calculators" or drop the count entirely so it doesn't go stale again.

#### 2. Comparison pages have no structured data (JSON-LD)
**Files:** `src/app/compare/[slug]/page.tsx`
**Problem:** Calculator pages emit `SoftwareApplication` + `FAQPage` JSON-LD. Comparison pages emit nothing. Google uses structured data to understand page content and generate rich results.
**Fix:** Add a `Table` or `ItemList` JSON-LD to each comparison, and optionally a `Review` or `Article` schema. Minimum: add `ItemList` listing the compared entities.

#### 3. Comparison pages have no FAQs
**Files:** `src/data/comparisons.ts`, `src/app/compare/[slug]/page.tsx`
**Problem:** Calculator pages have 4-6 FAQs with `FAQPage` JSON-LD. Comparison pages have none. FAQ markup is one of the most reliable ways to get Google sitelinks / extended snippets.
**Fix:** Add `faqs: { question: string; answer: string }[]` to the `Comparison` type and add 3-4 FAQs to each comparison. Render with `<FaqSection>` + `buildFaqSchema`.

#### 4. New calculators missing from KeyTermsBlock SLUG_TERMS map
**File:** `src/components/content/KeyTermsBlock.tsx`
**Problem:** `1099-tax-calculator`, `salary-to-freelance-rate-calculator`, and `freelance-tax-deduction-calculator` are not in `SLUG_TERMS`. These pages will not show the Key Terms glossary links section, losing valuable internal links to glossary pages.
**Fix:** Add entries for all 3 new calculators to `SLUG_TERMS`.

#### 5. Glossary terms have no comparison cross-links
**File:** `src/data/glossary.ts`
**Problem:** Glossary terms link to calculators (`relatedSlugs`) and related terms (`relatedTerms`) but never to comparison pages. The `self-employment-tax` term page has no link to `freshbooks-vs-quickbooks-self-employed`. The `invoice` term has no link to `bonsai-vs-freshbooks`.
**Fix:** Add `relatedComparisonSlugs?: string[]` to `GlossaryTerm` type and wire up relevant comparisons to each of the 20 glossary terms. Update glossary term page template to render them.

---

### 🟡 MEDIUM IMPACT

#### 6. Glossary term page has no structured data
**File:** `src/app/glossary/[term]/page.tsx`
**Problem:** Glossary pages have no JSON-LD. They are ideal candidates for `DefinedTerm` schema — a specific Schema.org type Google uses to understand glossary/definition pages.
**Fix:** Add `DefinedTerm` JSON-LD to glossary term pages (name, description, inDefinedTermSet).

#### 7. Category pages have no intro content — thin for SEO
**File:** `src/app/category/[slug]/page.tsx`
**Problem:** Category pages show a heading, category description (1-2 sentences), and a grid of tools. That's ~100 words. Google may consider these thin content pages.
**Fix:** The `CategoryMeta` type already has an optional `intro` field. Check if `categories.ts` populates it; if not, add 2-3 paragraph intros. Render it on the category page above the tool grid.

#### 8. Blog posts missing `dateModified` — only have `datePublished`
**File:** `src/app/blog/[slug]/page.tsx`
**Problem:** The Article JSON-LD only sets `datePublished`. Google uses `dateModified` to understand freshness. The 3 new tax posts (2026 dates) will benefit from this when refreshed in 2027.
**Fix:** Add `dateModified` to Article schema — can default to `datePublished` on first publication, updated when content is revised.

#### 9. `compare/page.tsx` keywords are stale — doesn't include new comparisons
**File:** `src/app/compare/page.tsx`
**Problem:** The comparison listing page has hardcoded keywords that don't include `fiverr-vs-upwork`, `freshbooks-vs-wave`, or `toggl-vs-harvest`.
**Fix:** Update the keywords array or make them dynamic from `comparisons` data.

#### 10. Footer disclaimer is a TODO placeholder
**File:** `src/components/layout/Footer.tsx` (line ~128)
**Problem:** There's a `{/* TODO: Add a niche-appropriate disclaimer here */}` comment. A financial disclaimer ("not financial advice, for educational purposes only") is important for AdSense approval on financial content.
**Fix:** Add: "FreelanceCalc provides educational tools only. Nothing on this site constitutes financial, tax, or legal advice. Consult a qualified professional for your specific situation."

#### 11. `EducationBlock` TODO — auto-link glossary terms in body text
**File:** `src/components/content/EducationBlock.tsx`
**Problem:** There's a TODO comment to auto-link glossary terms within education block body text. Currently, when education blocks mention "self-employment tax" or "billable hours", those phrases are plain text with no link to the glossary page.
**Fix:** Implement term auto-linking. Parse the body text and replace exact glossary term names with links. Medium complexity but high SEO value — creates organic internal links from long-form content to glossary pages without manual work.

#### 12. `site.ts` description doesn't include "1099" — a top keyword
**File:** `src/data/site.ts`
**Problem:** The site description mentions "hourly rates, taxes, invoices, project quotes, profit margins" but not "1099" which is the most-searched term for self-employment tax.
**Fix:** Add "1099 tax calculator" to the site description and/or keywords array.

---

### 🟢 LOWER IMPACT (but quick wins)

#### 13. `api/og` doesn't use `tag` parameter on calculator pages
**File:** `src/lib/seo/metadata.ts`
**Problem:** `buildCalculatorMetadata` generates OG image URLs but doesn't pass the `tag` parameter (e.g., "Income & Tax"). The OG images will all show the default tag.
**Fix:** Pass `&tag=${encodeURIComponent(calc.category)}` in the OG image URL for calculator pages.

#### 14. Missing `og:image` on comparison and glossary pages
**Files:** `src/lib/seo/metadata.ts` → `buildPageMetadata`
**Problem:** `buildPageMetadata` (used by comparison, glossary, category, blog listing pages) doesn't add an OG image — only the Twitter card gets one. Comparisons and glossary pages shared on social will show no preview image.
**Fix:** Add the OG image to `buildPageMetadata` using the same `api/og` URL with the page title.

#### 15. `siteConfig.keywords` is stale — missing new calculator types
**File:** `src/data/site.ts`
**Problem:** The global keywords array doesn't include "1099 tax calculator", "tax deduction calculator", "salary to freelance rate calculator", "fiverr vs upwork", etc.
**Fix:** Update the keywords array to reflect the full 23-calculator scope.

#### 16. Header TOP_CALCULATORS doesn't include new tax calculators
**File:** `src/components/layout/Header.tsx`
**Problem:** The nav dropdown shows 5 calculators — none of the new high-value ones (1099 tax, tax deductions). The nav is a strong internal linking signal.
**Fix:** Replace one or two existing entries with `1099-tax-calculator` and `freelance-tax-deduction-calculator`.

#### 17. No `HowTo` JSON-LD on key calculators
**Problem:** Google shows `HowTo` rich results for step-by-step instructions. The hourly rate calculator, self-employment tax calculator, and quarterly tax calculator all have educational content that could be structured as `HowTo` steps.
**Fix:** Add `HowTo` schema to the 3-5 most important calculators. This is a medium-effort, potentially high-reward addition for rich result eligibility.

---

## Summary Table

| # | Issue | Impact | Effort | Priority |
|---|---|---|---|---|
| 1 | Stale "20 tools" in site description | High | 1 min | Do now |
| 2 | Comparison pages: no JSON-LD | High | 30 min | Do now |
| 3 | Comparison pages: no FAQs | High | 2 hrs | This week |
| 4 | New calcs missing from KeyTermsBlock | High | 5 min | Do now |
| 5 | Glossary: no comparison cross-links | High | 30 min | This week |
| 6 | Glossary: no DefinedTerm JSON-LD | Medium | 20 min | This week |
| 7 | Category pages: thin content | Medium | 1 hr | Before launch |
| 8 | Blog: missing dateModified | Medium | 10 min | Before launch |
| 9 | Compare listing: stale keywords | Medium | 5 min | Do now |
| 10 | Footer: missing disclaimer | Medium | 5 min | Before launch (AdSense) |
| 11 | EducationBlock: no term auto-linking | Medium | 2 hrs | Post-launch |
| 12 | site.ts: "1099" not in description | Medium | 2 min | Do now |
| 13 | OG tag param not used on calcs | Low | 10 min | Before launch |
| 14 | Missing og:image on compare/glossary | Low | 15 min | Before launch |
| 15 | siteConfig keywords stale | Low | 5 min | Do now |
| 16 | Header nav: new calcs missing | Low | 5 min | Do now |
| 17 | No HowTo schema on key calculators | Low | 1 hr | Post-launch |

---

## Instant wins (under 5 minutes each, do immediately)

1. `src/data/site.ts` — update description + keywords
2. `src/components/content/KeyTermsBlock.tsx` — add 3 new calculators to SLUG_TERMS
3. `src/app/compare/page.tsx` — update keywords
4. `src/components/layout/Header.tsx` — add 1099 + deduction calculator to nav
5. `src/components/layout/Footer.tsx` — add financial disclaimer

## What to implement before domain arrives

6. Comparison page FAQs + JSON-LD (biggest SEO gap remaining)
7. Glossary comparison cross-links + DefinedTerm JSON-LD
8. OG images on comparison and glossary pages
9. Category page intro content (check if `intro` field is populated)

## Post-launch (first 30 days)

10. EducationBlock term auto-linking
11. HowTo schema on top 5 calculators
12. dateModified on blog posts
