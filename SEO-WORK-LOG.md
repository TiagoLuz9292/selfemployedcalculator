# SEO Work Log — FreelanceCalc

Chronological record of all SEO improvements applied post-launch.

---

## Session 1 — SEO Audit + Full Fix Pass

### Structured Data
- Added `FAQPage` JSON-LD to all 9 comparison pages (4 FAQs each) — rich result eligibility
- Added `DefinedTerm` JSON-LD to all 20 glossary term pages — Google reads these as authoritative definitions
- Added `HowTo` JSON-LD to top 5 calculators: hourly rate, self-employment tax, 1099 tax, quarterly tax, take-home pay
- Added `dateModified` to blog `Article` schema (was missing)
- OG images now generated dynamically for comparison, glossary, and blog listing pages via `/api/og`
- Calculator OG images now pass `category` as tag for richer image design

### Internal Linking
- Added `relatedComparisonSlugs` field to all 20 glossary terms — comparison pages now surface from every glossary page
- Comparison cross-links rendered on glossary term pages (new "Related Comparisons" section)
- `EducationBlock` auto-links 16 glossary terms on first occurrence in any calculator education block (zero maintenance — applies to all future calculators automatically)
- 3 new calculators added to `KeyTermsBlock` glossary cross-links

### Content
- FAQs written for all 9 comparison pages (4 per page, covers common search queries)
- Category page intros expanded from 1 sentence to 3-sentence explanations, rendered as card blocks
- Site description updated: "20 tools" → "23 free calculators"
- Header nav updated — 1099 tax + tax deductions added to nav (navigation links are strong SEO signals)
- Compare page keywords updated with new comparison slugs

### Affiliate / Monetisation
- `PartnerBlock` removed from 4 navigation/listing pages: `/calculators`, `/compare`, `/blog`, `/category/[slug]`
  - Reason: navigation pages with affiliate blocks signal thin affiliate intent to Google quality raters
- `StickyPartnerBar` removed entirely from blog posts and glossary pages
  - Reason: sticky overlays classified as intrusive interstitials under Page Experience algorithm; conflicts with AdSense policy
- `PartnerBlock` retained on: individual calculator pages, individual comparison pages, blog posts, glossary terms, homepage
- All affiliate URLs remain placeholder until programs approved — see `AFFILIATE-SETUP.md`
- `rel="sponsored"` already present on all affiliate links — do not remove

### Footer
- Financial disclaimer added — required for AdSense approval on financial content

---

## Pending (post-launch)

- Replace placeholder affiliate URLs once programs approve — see `AFFILIATE-SETUP.md`
- Monitor Search Console for which pages reach position 10–20 first and prioritise backlinks for those
- Add `HowTo` schema to remaining calculators once top 5 are confirmed working in rich results
