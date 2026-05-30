# Blog Articles Audit Report
**Audit date:** 2026-05-30
**Scope:** All 23 blog articles — factual accuracy, tax/legal values, pricing, platform information
**Context:** May 2026; 2026 IRS values confirmed via ChatGPT deep research (see TAX-VALUES-VERIFY-2026.md)

---

## Summary — Issues by Priority

| # | Article | Severity | Issue |
|---|---|---|---|
| 1 | `self-employment-tax-guide-2026` | **Critical** | SS wage base stated as $176,100 (2025 value). Confirmed 2026 value: $184,500. Appears twice. |
| 2 | `quarterly-tax-deadlines-2026` | **Critical** | Q2 due date states June 16. Confirmed 2026 Q2 is June 15 (June 15 is a Monday in 2026). Appears twice in article. |
| 3 | `self-employment-tax-guide-2026` | **Critical** | Q2 date also states June 16. Should be June 15. |
| 4 | `self-employment-tax-guide-2026` | **Significant** | SEP-IRA stated as "25% of net SE income, up to $69,000/year". Correct 2026: ~20% effective rate (IRS Pub. 560 formula), $72,000 cap. |
| 5 | `freelance-tax-deductions-complete-list-2026` | **Significant** | SEP-IRA "25% of net SE income, maximum $69,000 for 2024". Correct 2026: ~20%, $72,000 cap. |
| 6 | `freelance-tax-deductions-complete-list-2026` | **Significant** | Solo 401(k): "$23,000 in 2024, or $30,500 if 50+". Correct 2026: $24,500 employee; $32,500 if 50-59/64+; $35,750 if 60-63. |
| 7 | `freelance-tax-deductions-complete-list-2026` | **Significant** | Business mileage rate: "$0.67/mile in 2024". The 2025 IRS rate is $0.70/mile; 2026 rate unconfirmed. |
| 8 | `how-to-save-for-retirement-freelancer` | **Significant** | SEP-IRA: "25%... capped at $69,000 in 2024". Solo 401k: "$23,000 (2024)… $7,500 catch-up". All stale. Correct 2026: ~20%, $72k; $24,500; $8k catch-up 50-59/64+; $11,250 catch-up 60-63. |
| 9 | `how-to-save-for-retirement-freelancer` | **Significant** | Contribution comparison table uses wrong 25% formula and 2024 limits — entire table incorrect. SEP values overstated; Solo 401k uses old $23k deferral. Crossover point wrong ($276k → ~$254k). |
| 10 | `best-invoicing-software-freelancers` | **Significant** | FreshBooks: "$17/month Lite… Plus at $30/month". Correct 2026 regular prices: $23/mo Lite, $43/mo Plus. |
| 11 | `best-invoicing-software-freelancers` | **Significant** | Bonsai: "$21/month (Starter). Professional plan at $32/month" — plans restructured 2024. No Starter/Professional. Now Basic $15 (no contracts), Essentials $25 (with contracts), Premium $39. |
| 12 | `best-invoicing-software-freelancers` | **Significant** | "QuickBooks Self-Employed" — product discontinued/rebranded to QuickBooks Solopreneur 2024. Price "$15/month" likely stale (~$20/mo). |
| 13 | `best-invoicing-software-freelancers` | **Significant** | Wave: payment processing stated as "2.9% + $0.30" — confirmed live is 2.9% + $0.60. |
| 14 | `emergency-fund-calculator-freelancers` | **Minor** | HYSA rates described as "4-5% APY (2024)". Year reference stale. May 2026 rates differ. |
| 15 | `how-to-set-a-day-rate-consultant` | **Minor** | Rate table labeled "UK, 2024" — should be "2025/2026". Rates themselves are directionally reasonable. |
| 16 | `vat-guide-for-freelancers` | **Minor** | UK VAT threshold described as "2024/25 threshold" — still correct value (£90,000) but year label stale. |
| 17 | `wise-vs-paypal-international-freelancers` | **Minor** | Wise transfer fee stated as "0.4-1.5%". Live site shows "from 0.57%". Lower bound 0.4% may be outdated. |

**Articles with no issues (13 of 23):**
how-to-pay-quarterly-taxes-freelancer, how-to-raise-freelance-rates, how-to-price-a-freelance-project, value-based-pricing-freelance-guide, retainer-agreements-freelancers-guide, how-to-calculate-freelance-hourly-rate, freelance-vs-full-time-salary-comparison, how-to-handle-late-payments-freelance, irregular-income-budgeting-guide, how-to-track-freelance-profit-margin, freelance-break-even-guide, client-profitability-guide, what-is-a-good-freelance-utilization-rate, deel-vs-remote-international-contractors.

---

## Detailed Findings Per Article

---

### self-employment-tax-guide-2026.mdx — ISSUES

**Issue 1 — Critical: SS wage base wrong**
Article states: "Social Security: 12.4% on net earnings up to $176,100" and "Total: 15.3% on the first $176,100; 2.9% above that"
Correct 2026 value (confirmed IRS/SSA): **$184,500**. The $176,100 figure is the 2025 wage base.

**Issue 2 — Critical: Q2 due date wrong**
Article states: "Q2: June 16, 2026 (Apr–May income)"
Confirmed 2026 Q2 date: **June 15** (June 15 falls on a Monday in 2026 — no shift needed).

**Issue 3 — Significant: SEP-IRA rate and limit stale**
Article states: "up to 25% of net SE income in a SEP-IRA, up to $69,000/year"
Correct 2026: IRS effective rate for sole proprietors is ~**20%** of net SE income (after deducting half SE tax per IRS Pub. 560), capped at **$72,000**.

---

### quarterly-tax-deadlines-2026.mdx — ISSUES

**Issue 1 — Critical: Q2 date wrong (appears twice)**
- Table row: "Q2 | April 1 – May 31 | **June 16, 2026**"
- Practical calendar: "**June 16, 2026** — Q2 payment"
Correct: **June 15, 2026** (Monday; no shift applies in 2026).

---

### freelance-tax-deductions-complete-list-2026.mdx — ISSUES

**Issue 1 — Significant: SEP-IRA limit stale**
"SEP-IRA: Up to 25% of net self-employment income, maximum $69,000 for 2024"
Correct 2026: **~20% of net SE income** (IRS effective rate), max **$72,000**

**Issue 2 — Significant: Solo 401(k) limits stale**
"employee contribution (up to $23,000 in 2024, or $30,500 if 50+)"
Correct 2026: **$24,500** employee; catch-up **$8,000** for ages 50-59 and 64+ = **$32,500**; enhanced catch-up **$11,250** for ages 60-63 = **$35,750**

**Issue 3 — Significant: Mileage rate stale**
"standard mileage rate: $0.67/mile in 2024 (rate adjusts annually)"
Confirmed 2025 rate: **$0.70/mile**. 2026 rate not yet confirmed (announced ~December 2025). Update to 2025 value and note 2026 should be checked.

---

### how-to-save-for-retirement-freelancer.mdx — ISSUES

**Issue 1 — Significant: All retirement limits stale**
SEP-IRA: "contribute up to 25% of net self-employment income, capped at $69,000 in 2024"
Correct 2026: **~20% effective rate, $72,000 cap**

Solo 401(k): "Employee contribution: up to $23,000 (2024), plus $7,500 catch-up if age 50+"
Correct 2026: **$24,500 employee**; catch-up **$8,000** (50-59/64+); enhanced catch-up **$11,250** (60-63)
Total stated as "$69,000 (or $76,500 with catch-up)" — correct 2026: **$72,000 (or $80,000 with standard catch-up)**

**Issue 2 — Significant: Contribution comparison table entirely wrong**
The table uses the incorrect 25% formula AND 2024 dollar amounts. With the correct 2026 values:

| Net Income | SEP-IRA Max (2026, correct formula) | Solo 401(k) Max (2026) |
|---|---|---|
| $30,000 | ~$5,574 | ~$30,074 |
| $60,000 | ~$11,148 | ~$35,648 |
| $100,000 | ~$18,587 | ~$43,087 |
| $150,000 | ~$27,881 | ~$52,381 |
| ~$254,000+ | $72,000 | $72,000 |

Old table values were wrong on both columns. The crossover point also changes from "$276,000+" to approximately "$254,000+".

**Issue 3 — Significant: Wrong claim about SEP-IRA at lower income**
Article claims: "At lower income levels (under $50,000 net), the 25% limit is generous relative to the Solo 401(k) employee contribution cap."
With the corrected formula: at $50k income, SEP max ≈ $9,290 — far below the Solo 401(k) employee-only contribution of $24,500. Solo 401(k) wins decisively at ALL income levels below ~$254k. The statement is factually wrong.

---

### best-invoicing-software-freelancers.mdx — ISSUES

**Issue 1 — Significant: FreshBooks pricing stale**
"starts at $17/month (Lite, up to 5 clients). Plus plan at $30/month"
Confirmed 2026 regular prices: Lite **$23/month**, Plus **$43/month**

**Issue 2 — Significant: Bonsai plans restructured, pricing wrong**
"starts at $21/month (Starter). Recommended Professional plan at $32/month"
Bonsai restructured plans in 2024 — no more Starter/Professional:
- Basic: $15/mo — **does NOT include contracts or proposals**
- Essentials: $25/mo — includes contracts, proposals, invoicing (this is the relevant plan)
- Premium: $39/mo

**Issue 3 — Significant: QuickBooks product name wrong**
Article still uses "QuickBooks Self-Employed" — product was discontinued and rebranded to **QuickBooks Solopreneur** in 2024. Price listed as "$15/month; $25/month with TurboTax bundle" — likely stale (~$20/mo for Solopreneur, unconfirmed via live fetch).

**Issue 4 — Significant: Wave payment processing fee wrong**
"paid only through payment processing fees (2.9% + $0.30 for credit cards)"
Confirmed 2026 Wave fee: **2.9% + $0.60** per transaction

---

### emergency-fund-calculator-freelancers.mdx — MINOR

**Issue — Minor: HYSA rates stale year reference**
"Current rates (2024) are 4-5% APY"
Remove "(2024)" year reference. As of May 2026, HYSA rates depend on Fed funds rate; the specific range may differ from 2024.

---

### how-to-set-a-day-rate-consultant.mdx — MINOR

**Issue — Minor: Rate table year label stale**
Table labeled "Day Rate Standards by Industry (UK, 2024)"
Should be "UK, 2025/2026". The rates themselves are directionally reasonable but should be updated when better 2026 data is available.

---

### vat-guide-for-freelancers.mdx — MINOR

**Issue — Minor: Year reference stale**
"£90,000 in any rolling 12-month period (2024/25 threshold)"
The value £90,000 is still correct for 2026. Remove "(2024/25 threshold)" and replace with a non-year-specific phrasing.

---

### wise-vs-paypal-international-freelancers.mdx — MINOR

**Issue — Minor: Wise fee range lower bound potentially stale**
"transparent, separate transfer fee of 0.4-1.5%"
Live Wise pricing page (verified 2026-05-30) states "from 0.57%". The 0.4% lower bound may be outdated. Note: the PayPal fees in this article (3.49% + $0.49) are already using the correct current values.

---

## Priority Fix Order

1. **`self-employment-tax-guide-2026.mdx`** — SS wage base ($176k→$184.5k), Q2 date (Jun 16→15), SEP-IRA (25%/$69k → 20%/$72k)
2. **`quarterly-tax-deadlines-2026.mdx`** — Q2 date June 16→15 (twice)
3. **`freelance-tax-deductions-complete-list-2026.mdx`** — SEP-IRA, Solo 401k, mileage rate
4. **`how-to-save-for-retirement-freelancer.mdx`** — Full retirement section rewrite (all limits + table)
5. **`best-invoicing-software-freelancers.mdx`** — FreshBooks price, Bonsai plans, QuickBooks name, Wave fee
6. **`emergency-fund-calculator-freelancers.mdx`** — HYSA year reference
7. **`how-to-set-a-day-rate-consultant.mdx`** — Table year label
8. **`vat-guide-for-freelancers.mdx`** — Threshold year reference
9. **`wise-vs-paypal-international-freelancers.mdx`** — Wise fee lower bound
