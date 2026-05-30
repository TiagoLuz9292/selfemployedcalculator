# FreelanceCalc — Pre-Launch Plan (4 Days Before Domain)
*Written: 2026-05-30 | Completed: 2026-05-30 | Use this alongside FREELANCECALC-PLAN.md*

**STATUS: ALL 4 DAYS COMPLETE ✅ — committed 79f1b8a, pushed to master**

---

## What was done (completed 2026-05-30)

### Day 1 — Internal Linking ✅ DONE
- ✅ `CalculatorMeta` type: added `relatedComparisonSlugs?: string[]`
- ✅ `Comparison` type: added `relatedComparisonSlugs?: string[]`
- ✅ `PostFrontmatter` in mdx.ts: added `relatedCalcSlugs` and `relatedComparisonSlugs`
- ✅ All 23 calculators: `relatedComparisonSlugs` wired
- ✅ All 9 comparisons: `relatedComparisonSlugs` wired
- ✅ Calculator page template: renders "Related Comparisons" section
- ✅ Comparison page template: renders "Related Comparisons" section
- ✅ Blog page template: renders "Related Tools" section (calculators + comparisons)
- ✅ All 20 original blog posts: frontmatter updated with relatedCalcSlugs + relatedComparisonSlugs

### Day 2 — New Calculators ✅ DONE
- ✅ `1099-tax-calculator` — federal + state tax on 1099 income with quarterly payment amounts
- ✅ `salary-to-freelance-rate-calculator` — converts employee salary to required freelance rate
- ✅ `freelance-tax-deduction-calculator` — estimates deductions and tax savings from 14 expense types
- ✅ All 3 registered in CalculatorShell.tsx with working logic files

### Day 3 — New Comparisons ✅ DONE
- ✅ `freshbooks-vs-wave` — paid vs free invoicing ("free invoicing software" search volume)
- ✅ `fiverr-vs-upwork` — biggest freelance platform comparison query
- ✅ `toggl-vs-harvest` — time tracking tools comparison

### Day 4 — Critical Blog Posts + Audit ✅ DONE
- ✅ `self-employment-tax-guide-2026.mdx` — complete SE tax guide, targeting "self employment tax 2026"
- ✅ `freelance-tax-deductions-complete-list-2026.mdx` — 27 deductions, "what can freelancers deduct"
- ✅ `quarterly-tax-deadlines-2026.mdx` — exact 2026 dates, safe harbor, payment methods
- ✅ Build passes: **95 static pages**, zero errors

---

## Final State (as of 2026-05-30)

| Metric | Before | After |
|---|---|---|
| Calculators | 20 | 23 |
| Blog posts | 20 | 23 |
| Comparison pages | 6 | 9 |
| Internal links: calc→comparison | 0 | All 23 wired |
| Internal links: blog→tools | 0 | All 23 wired |
| Internal links: comp→comp | 0 | All 9 wired |
| Static pages | 86 | 95 |
| Build status | ✅ Passes | ✅ Passes |

---

## Still to do when domain arrives (Phase 0 checklist)

- [ ] Purchase domain (freelancecalc.io or alternative)
- [ ] Create Vercel project, connect GitHub repo
- [ ] Set environment variables in Vercel:
  ```
  NEXT_PUBLIC_SITE_URL=https://freelancecalc.io
  NEXT_PUBLIC_ADS_ENABLED=false
  INDEXNOW_KEY=<generate UUID hex>
  CLARITY_TAG_ID=<from clarity.microsoft.com>
  ```
- [ ] Verify domain, wait for DNS propagation
- [ ] Submit sitemap to Google Search Console: `https://freelancecalc.io/sitemap.xml`
- [ ] Add BingSiteAuth.xml to /public/, submit to Bing Webmaster Tools
- [ ] Generate IndexNow key, add as env var, create `/public/<key>.txt`
- [ ] Apply to AdSense (publisher ID → layout.tsx)
- [ ] Apply to affiliate programs (FreshBooks, QuickBooks, Bonsai, Wise, Deel, HoneyBook, TurboTax, H&R Block)
- [ ] Replace placeholder URLs in `src/data/affiliates.ts` with real tracking URLs
- [ ] Review About, Contact, Privacy Policy pages for any TODO placeholders
- [ ] Set up Microsoft Clarity (free heatmaps — add CLARITY_TAG_ID)

---

## Remaining SEO gaps (identified in post-completion audit — see separate audit report)

*See the section below for issues found in the full audit after completion.*
