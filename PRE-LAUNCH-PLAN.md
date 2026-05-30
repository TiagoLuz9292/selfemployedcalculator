# FreelanceCalc — Pre-Launch Plan (4 Days Before Domain)
*Written: 2026-05-30 | Use this alongside FREELANCECALC-PLAN.md*

Everything in this document can be done locally without a domain or deployment.
Goal: site is in the best possible SEO shape on day of launch.

---

## Audit findings — what's missing right now

### Internal linking (broken, same issue k8scalc had before fix)
- `CalculatorMeta` type has `relatedSlugs` (calc→calc only). No `relatedComparisonSlugs`.
- `Comparison` type has `relatedCalcSlugs` but no `relatedComparisonSlugs`.
- Calculator page renders related calcs only — no comparison cross-links.
- Comparison page renders related calcs only — no comparison cross-links.
- Blog `PostFrontmatter` has no `relatedCalcSlugs` or `relatedComparisonSlugs` fields.
- Blog page has `PartnerBlock` but no Related Tools section at all.

### Missing high-value calculators
- `1099-tax-calculator` — "1099 tax calculator" is a top US freelance tax query
- `salary-to-hourly-calculator` — millions search "what is $80k salary as hourly rate"
- `freelance-tax-deduction-calculator` — leads directly to TurboTax/H&R Block affiliate

### Missing high-value comparison pages
- `freshbooks-vs-wave` — Wave is free; enormous "free invoicing software" search volume
- `fiverr-vs-upwork` — biggest platform comparison query in the freelance niche
- `toggl-vs-harvest` — time tracking tools, directly relevant to billable hours calculator

### Missing critical blog posts (must be indexed before tax season)
- Self-employment tax complete guide 2026
- Freelance tax deductions complete list 2026
- Quarterly tax deadlines 2026

---

## Day 1 — Internal Linking Overhaul

**Priority: Highest. Every page needs cross-links before launch.**

### Step 1: Update types
Add `relatedComparisonSlugs?: string[]` to `CalculatorMeta` in `src/types/calculator.ts`.
Add `relatedComparisonSlugs?: string[]` to `Comparison` in `src/data/comparisons.ts`.
Add `relatedCalcSlugs?: string[]`, `relatedComparisonSlugs?: string[]` to `PostFrontmatter` in `src/lib/content/mdx.ts`.

### Step 2: Add comparison cross-links to all 20 calculators in calculators.ts
| Calculator | relatedComparisonSlugs |
|---|---|
| freelance-hourly-rate-calculator | hourly-vs-project-pricing, freelance-vs-full-time-salary |
| day-rate-calculator | hourly-vs-project-pricing |
| project-quote-calculator | hourly-vs-project-pricing, bonsai-vs-freshbooks |
| retainer-rate-calculator | hourly-vs-project-pricing, bonsai-vs-freshbooks |
| value-based-pricing-calculator | hourly-vs-project-pricing |
| self-employment-tax-calculator | freelance-vs-full-time-salary, freshbooks-vs-quickbooks-self-employed |
| freelance-take-home-pay-calculator | freelance-vs-full-time-salary |
| quarterly-tax-calculator | freshbooks-vs-quickbooks-self-employed |
| vat-calculator-freelancer | wise-vs-paypal-freelancers, freshbooks-vs-quickbooks-self-employed |
| profit-margin-calculator | hourly-vs-project-pricing |
| billable-hours-calculator | hourly-vs-project-pricing |
| utilization-rate-calculator | hourly-vs-project-pricing |
| break-even-calculator | freelance-vs-full-time-salary |
| client-profitability-calculator | bonsai-vs-freshbooks |
| late-payment-interest-calculator | bonsai-vs-freshbooks, wise-vs-paypal-freelancers |
| invoice-total-calculator | freshbooks-vs-quickbooks-self-employed, bonsai-vs-freshbooks, wise-vs-paypal-freelancers |
| emergency-fund-calculator | freelance-vs-full-time-salary |
| savings-rate-calculator | freelance-vs-full-time-salary |
| retirement-contribution-calculator | freelance-vs-full-time-salary |
| freelance-income-goal-calculator | freelance-vs-full-time-salary, hourly-vs-project-pricing |

### Step 3: Add comparison cross-links to all 6 comparisons in comparisons.ts
| Comparison | relatedComparisonSlugs |
|---|---|
| freshbooks-vs-quickbooks-self-employed | bonsai-vs-freshbooks |
| bonsai-vs-freshbooks | freshbooks-vs-quickbooks-self-employed |
| wise-vs-paypal-freelancers | deel-vs-remote-contractors |
| hourly-vs-project-pricing | freelance-vs-full-time-salary |
| freelance-vs-full-time-salary | hourly-vs-project-pricing |
| deel-vs-remote-contractors | wise-vs-paypal-freelancers |

### Step 4: Update calculator page template
In `src/app/calculators/[slug]/page.tsx`:
- Import `getComparisonBySlug` from `@/data/comparisons`
- Resolve `calc.relatedComparisonSlugs` → comparison objects
- Render "Related Comparisons" section after RelatedTools

### Step 5: Update comparison page template
In `src/app/compare/[slug]/page.tsx`:
- Import `getComparisonBySlug`
- Resolve `comp.relatedComparisonSlugs` → comparison objects
- Render "Related Comparisons" section after Related Calculators

### Step 6: Blog post related tools
In `src/lib/content/mdx.ts`:
- Add `relatedCalcSlugs?: string[]` and `relatedComparisonSlugs?: string[]` to `PostFrontmatter`
- Parse them in `getPostMeta` and `getPost`

In `src/app/blog/[slug]/page.tsx`:
- Import `getCalculatorBySlug` and `getComparisonBySlug`
- Resolve related tools from post frontmatter
- Render "Related Tools" section before PartnerBlock (calculators + comparisons)

### Step 7: Add frontmatter to all 20 blog posts
| Post | relatedCalcSlugs | relatedComparisonSlugs |
|---|---|---|
| how-to-pay-quarterly-taxes-freelancer | quarterly-tax-calculator, self-employment-tax-calculator | freshbooks-vs-quickbooks-self-employed |
| how-to-calculate-freelance-hourly-rate | freelance-hourly-rate-calculator, billable-hours-calculator | hourly-vs-project-pricing |
| how-to-price-a-freelance-project | project-quote-calculator, value-based-pricing-calculator | hourly-vs-project-pricing |
| how-to-raise-freelance-rates | freelance-hourly-rate-calculator, freelance-income-goal-calculator | hourly-vs-project-pricing |
| how-to-set-a-day-rate-consultant | day-rate-calculator, retainer-rate-calculator | hourly-vs-project-pricing |
| how-to-track-freelance-profit-margin | profit-margin-calculator, client-profitability-calculator | hourly-vs-project-pricing |
| how-to-handle-late-payments-freelance | late-payment-interest-calculator, invoice-total-calculator | bonsai-vs-freshbooks |
| best-invoicing-software-freelancers | invoice-total-calculator | freshbooks-vs-quickbooks-self-employed, bonsai-vs-freshbooks |
| freelance-vs-full-time-salary-comparison | freelance-take-home-pay-calculator, self-employment-tax-calculator | freelance-vs-full-time-salary |
| value-based-pricing-freelance-guide | value-based-pricing-calculator, project-quote-calculator | hourly-vs-project-pricing |
| retainer-agreements-freelancers-guide | retainer-rate-calculator, client-profitability-calculator | bonsai-vs-freshbooks |
| irregular-income-budgeting-guide | savings-rate-calculator, emergency-fund-calculator | freelance-vs-full-time-salary |
| how-to-save-for-retirement-freelancer | retirement-contribution-calculator, freelance-take-home-pay-calculator | freelance-vs-full-time-salary |
| emergency-fund-calculator-freelancers | emergency-fund-calculator, savings-rate-calculator | freelance-vs-full-time-salary |
| freelance-break-even-guide | break-even-calculator, profit-margin-calculator | freelance-vs-full-time-salary |
| client-profitability-guide | client-profitability-calculator, project-quote-calculator | bonsai-vs-freshbooks |
| what-is-a-good-freelance-utilization-rate | utilization-rate-calculator, billable-hours-calculator | hourly-vs-project-pricing |
| vat-guide-for-freelancers | vat-calculator-freelancer, invoice-total-calculator | wise-vs-paypal-freelancers |
| wise-vs-paypal-international-freelancers | invoice-total-calculator, vat-calculator-freelancer | wise-vs-paypal-freelancers, deel-vs-remote-contractors |
| deel-vs-remote-international-contractors | invoice-total-calculator, freelance-take-home-pay-calculator | deel-vs-remote-contractors, wise-vs-paypal-freelancers |

---

## Day 2 — Add 3 New High-Priority Calculators

### Calculator 1: 1099 Tax Calculator
- **Slug:** `1099-tax-calculator`
- **Category:** income-tax
- **Why:** "1099 tax calculator" is searched far more than "self-employment tax calculator". Same math, different entry point.
- **Fields:** gross 1099 income, filing status, state (optional), business deductions, other income
- **Key insight:** Label it as "1099" throughout — this is the term freelancers and gig workers actually use
- **Affiliate:** QuickBooks Self-Employed (TurboTax integration)
- **relatedSlugs:** self-employment-tax-calculator, quarterly-tax-calculator, freelance-take-home-pay-calculator
- **relatedComparisonSlugs:** freshbooks-vs-quickbooks-self-employed

### Calculator 2: Salary to Freelance Rate Converter
- **Slug:** `salary-to-freelance-rate-calculator`
- **Category:** rate-pricing
- **Why:** Employees considering going freelance search "what hourly rate equals my salary". Massive top-of-funnel traffic.
- **Fields:** current annual salary, employer benefits value (health insurance, retirement, etc.), desired vacation weeks, billable hours/week
- **Output:** minimum freelance rate to match take-home, recommended rate with buffer, break-even rate
- **relatedSlugs:** freelance-hourly-rate-calculator, freelance-take-home-pay-calculator, freelance-vs-full-time-salary
- **relatedComparisonSlugs:** freelance-vs-full-time-salary

### Calculator 3: Freelance Tax Deductions Calculator
- **Slug:** `freelance-tax-deduction-calculator`
- **Category:** income-tax
- **Why:** "what can I deduct as a freelancer" is one of the top freelance tax queries. Naturally leads to tax software affiliates.
- **Fields:** home office (sq ft or percentage), internet bill, phone bill, software subscriptions, professional development, equipment, travel, health insurance premium, retirement contributions
- **Output:** total estimated deductions, estimated tax savings, effective income after deductions
- **Affiliate hook:** "Use TurboTax Self-Employed to automatically find all your deductions"
- **relatedSlugs:** self-employment-tax-calculator, quarterly-tax-calculator, retirement-contribution-calculator
- **relatedComparisonSlugs:** freshbooks-vs-quickbooks-self-employed

---

## Day 3 — Add 3 New Comparison Pages

### Comparison 1: FreshBooks vs Wave
- **Slug:** `freshbooks-vs-wave`
- **Why:** Wave is completely free — this comparison gets enormous "free invoicing software" search volume
- **Key angle:** Wave is free but limited; FreshBooks costs money but has time tracking, proposals, double-entry accounting
- **Verdict:** Wave for absolute beginners or side-hustlers. FreshBooks once you're billing $3,000+/month.
- **relatedCalcSlugs:** invoice-total-calculator, profit-margin-calculator
- **relatedComparisonSlugs:** freshbooks-vs-quickbooks-self-employed, bonsai-vs-freshbooks

### Comparison 2: Fiverr vs Upwork
- **Slug:** `fiverr-vs-upwork`
- **Why:** Highest search volume comparison in the entire freelance niche. Anyone starting freelancing searches this.
- **Key angle:** Fiverr = packaged services/gigs, you set the price; Upwork = hourly/project bids, client posts jobs
- **Verdict:** Fiverr for productised services (logos, copywriting, video editing). Upwork for ongoing technical/consulting work.
- **relatedCalcSlugs:** freelance-hourly-rate-calculator, project-quote-calculator, client-profitability-calculator
- **relatedComparisonSlugs:** hourly-vs-project-pricing

### Comparison 3: Toggl Track vs Harvest
- **Slug:** `toggl-vs-harvest`
- **Why:** Time tracking is directly connected to billable hours calculator. Both have affiliate programs.
- **Key angle:** Toggl = clean, simple, generous free plan; Harvest = invoicing built-in, better for billing clients
- **Verdict:** Toggl if you just need to track time. Harvest if you need to turn tracked time into invoices.
- **relatedCalcSlugs:** billable-hours-calculator, utilization-rate-calculator, client-profitability-calculator
- **relatedComparisonSlugs:** freshbooks-vs-quickbooks-self-employed, bonsai-vs-freshbooks

---

## Day 4 — 3 Critical Blog Posts + Final Audit

### Blog Post 1: Self-Employment Tax Guide 2026
- **Filename:** `self-employment-tax-guide-2026.mdx`
- **Target keyword:** "self employment tax 2026", "self employment tax rate 2026"
- **Why critical:** This is one of the top 5 freelance tax queries. Must be indexed before January 2027.
- **Content:** What SE tax is (15.3% on net earnings), how it's calculated, the deduction for half of SE tax, how quarterly payments work, 2026 thresholds, examples with real numbers
- **relatedCalcSlugs:** self-employment-tax-calculator, quarterly-tax-calculator, freelance-take-home-pay-calculator
- **relatedComparisonSlugs:** freshbooks-vs-quickbooks-self-employed

### Blog Post 2: Freelance Tax Deductions 2026
- **Filename:** `freelance-tax-deductions-complete-list-2026.mdx`
- **Target keyword:** "freelance tax deductions 2026", "what can freelancers deduct"
- **Why critical:** Evergreen + year-specific variant. Leads to TurboTax/H&R Block affiliate.
- **Content:** 20+ deductions with eligibility rules — home office (simplified vs actual), internet, phone, health insurance, retirement contributions, equipment (Section 179), professional development, travel, software, professional services
- **relatedCalcSlugs:** freelance-tax-deduction-calculator, self-employment-tax-calculator, retirement-contribution-calculator
- **relatedComparisonSlugs:** freshbooks-vs-quickbooks-self-employed

### Blog Post 3: Quarterly Tax Deadlines 2026
- **Filename:** `quarterly-tax-deadlines-2026.mdx`
- **Target keyword:** "quarterly tax deadlines 2026 freelancer", "estimated tax due dates 2026"
- **Why critical:** Searched every quarter by millions of freelancers. Refresh annually — this is a recurring traffic asset.
- **Content:** The 4 due dates (April 15, June 16, Sept 15, Jan 15 2027), safe harbor rules, how to calculate each payment, what happens if you miss, state deadlines (note that state deadlines vary)
- **relatedCalcSlugs:** quarterly-tax-calculator, self-employment-tax-calculator
- **relatedComparisonSlugs:** freshbooks-vs-quickbooks-self-employed

### Final Audit Checklist (Day 4 afternoon)
- [ ] `npm run build` passes with zero errors
- [ ] All 23+ calculators resolve correctly (no broken related slugs)
- [ ] All 9+ comparison pages resolve correctly
- [ ] All 23 blog posts have `relatedCalcSlugs` frontmatter
- [ ] Internal links render on calculator pages (Related Comparisons section visible)
- [ ] Internal links render on comparison pages (Related Comparisons section visible)
- [ ] Internal links render on blog posts (Related Tools section visible)
- [ ] All glossary terms link to relevant calculators
- [ ] Sitemap generates all pages correctly
- [ ] No TypeScript errors
- [ ] Page titles and meta descriptions are set on all pages
- [ ] All 20 calculator logic functions return sensible results for default inputs

---

## End-of-4-Days Target State

| Metric | Before | After |
|---|---|---|
| Calculators | 20 | 23 |
| Blog posts | 20 | 23 |
| Comparison pages | 6 | 9 |
| Internal links: calc→comparison | 0 | All 23 wired |
| Internal links: blog→tools | 0 | All 23 wired |
| Internal links: comp→comp | 0 | All 9 wired |
| Build status | Passes | Passes |

At launch: 23 calculators + 23 blog posts + 9 comparisons + 23 glossary terms = **78 indexed pages** targeting a broad spread of high-intent freelance financial queries, all internally linked for maximum SEO equity flow.

---

*Execute in order: Day 1 first (internal linking) because it touches the most files and everything else builds on top of it.*
