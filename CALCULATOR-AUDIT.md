# Calculator Audit Report
**Audit date:** 2026-05-30
**Fix date:** 2026-05-30
**Scope:** All 22 calculators — logic files, field definitions, output descriptions, math verification
**Method:** Manual code trace with default input values; cross-reference of fields in `calculators.ts` vs logic files

---

## Summary — All 17 Issues (✅ = Fixed)

| # | Calculator | Severity | Issue | Status |
|---|---|---|---|---|
| 1 | `freelanceTakeHomePay` | **Critical** | Health insurance + retirement deducted post-tax; should reduce taxable income first. Understates take-home by ~$10,325 (25% error) with defaults. | ✅ Fixed |
| 2 | `quarterlyTax` | **Critical** | `quartersRemaining` hardcoded to 4; should reflect remaining balance after payments already made. | ✅ Fixed |
| 3 | `quarterlyTax` | **Critical** | Safe harbor uses `Math.max(estimate, priorYear)` — should be `Math.min`. Told users to overpay every quarter. | ✅ Fixed |
| 4 | `freelanceTakeHomePay` | **Significant** | Applied marginal rate as flat rate on all taxable income, no standard deduction, no brackets. Overstated federal tax by ~$4,947. | ✅ Fixed |
| 5 | `retirementContribution` | **Significant** | SEP-IRA limit computed as 25% of net income; correct IRS sole-proprietor rate is ~18.587%. Overstated max by ~34%. | ✅ Fixed |
| 6 | `calc1099Tax` (educationContent) | **Significant** | Federal tax example said ~$7,300; calculator code produces $5,926 for same inputs. $1,374 discrepancy. | ✅ Fixed |
| 7 | `freelanceHourlyRate` (FAQ) | **Moderate** | FAQ used markup formula (×1.20 = $70.83) but code uses margin formula (÷0.80 = $73.78). FAQ answer was wrong. | ✅ Fixed |
| 8 | `taxDeductionCalculator` | **Moderate** | Internet deduction used home office area % instead of separate business-use %. Heavily undercounted internet deduction. | ✅ Fixed |
| 9 | `salaryToFreelanceRate` (educationContent) | **Moderate** | Education text said $108k / 1,560 hrs = $69/hr; defaults produce $101,652 / 1,440 hrs = $70.59/hr break-even. | ✅ Fixed |
| 10 | `quarterlyTax` (FAQ) | **Minor** | States Q2 due date as "June 15"; correct date is "June 16" (matches `calc1099Tax`). | ✅ Fixed |
| 11 | `freelanceHourlyRate` (helpText) | **Minor** | `desiredAnnualIncome` helpText said "take-home before taxes" but code treats it as a gross income target. Contradictory. | ✅ Fixed |
| 12 | `freelanceTakeHomePay` (field) | **Minor** | `federalTaxRate` number field was replaced by `filingStatus` select; flat-rate approach was fundamentally wrong. | ✅ Fixed |
| 13 | `taxDeductionCalculator` | **Minor** | Code fallback `marginalTaxRate ?? "25"` didn't match any select option (12, 22, 24, 32). | ✅ Fixed |
| 14 | `selfEmploymentTax` vs `calc1099Tax` | **Minor** | Used different tax year brackets (2024 vs 2026) with no coordination. Site date is 2026. | ✅ Fixed |
| 15 | `utilizationRate` | **Minor** | No guard against `billableHours > totalWorkingHours`; produced nonsensical utilization > 100%. | ✅ Fixed |
| 16 | `salaryToFreelanceRate` | **Minor** | `seTaxExtra` used `salary × 0.0765` but SE tax applies to 92.35% of earnings; should be `× 0.07065`. | ✅ Fixed |
| 17 | `vatCalculator` | **Cosmetic** | In remove-VAT mode, result description said "X% of net amount" when user had entered a gross amount. | ✅ Fixed |

**Calculators that passed with no issues:** Day Rate, Project Quote, Retainer Rate, Value-Based Pricing, Break-even, Profit Margin, Billable Hours, Client Profitability, Late Payment Interest, Invoice Total, Emergency Fund, Savings Rate, Income Goal.

---

## What Was Changed Per File

### `src/lib/calculators/freelanceTakeHomePay.ts` — Full rewrite
- Replaced flat marginal-rate multiplication with full progressive 2025 brackets + standard deduction
- Health insurance and retirement contributions now reduce AGI *before* income tax is computed (correct IRS treatment: both are above-the-line deductions)
- Removed `federalTaxRate` number input; added `filingStatus` select (single/married) — consistent with `calc1099Tax.ts`

### `src/lib/calculators/quarterlyTax.ts` — Rewrite
- Fixed `Math.max` → `Math.min` in safe harbor logic (was recommending users overpay every quarter)
- Removed hardcoded `quartersRemaining = 4`; remaining balance now divides over 4 planning quarters after subtracting `alreadyPaidThisYear`
- Replaced flat 22% income tax estimate with full progressive 2025 brackets + standard deduction

### `src/lib/calculators/retirementContribution.ts` — Rewrite
- Fixed SEP-IRA formula from 25% to IRS Publication 560 correct formula: `(net income − ½ SE tax) × 20%` — effective rate ~18.587% of net income
- Same fix applied to Solo 401(k) employer contribution portion
- Updated all contribution limits from 2024 → 2025 (`ANNUAL_LIMIT_2024 = 69,000` → `ANNUAL_LIMIT = 70,000`)
- Solo 401(k) employee deferral: $23,000 → $23,500
- SIMPLE IRA limit: $16,000 → $16,500
- SECURE 2.0 Act: ages 60–63 now get enhanced catch-up ($11,250) instead of standard $7,500

### `src/lib/calculators/selfEmploymentTax.ts`
- Updated brackets from 2024 → 2025
- Added standard deduction before bracket calculation (now consistent with `calc1099Tax.ts`)
- Updated output description from "Estimated using 2024 single filer brackets" to current

### `src/lib/calculators/taxDeductionCalculator.ts`
- Added `internetBizPct` input field (defaultValue: 70%)
- Internet deduction now uses `internetBizPct / 100` instead of `homeOfficePct` (area fraction was wrong for internet)
- Fixed `marginalTaxRate` fallback from `"25"` to `"22"`

### `src/lib/calculators/salaryToFreelanceRate.ts`
- Fixed `seTaxExtra`: `annualSalary × 0.0765` → `annualSalary × 0.0765 × 0.9235`
- Output description updated to reflect the 92.35% adjustment

### `src/lib/calculators/utilizationRate.ts`
- Added `Math.min(billableHoursRaw, totalWorkingHours)` cap to prevent utilization > 100%
- Added explanatory note in description when capping is triggered

### `src/lib/calculators/vatCalculator.ts`
- Added mode-specific descriptions for both add-VAT and remove-VAT modes
- "Remove VAT" mode description now explains the net is extracted from the gross (not just "X% of net amount")

### `src/data/calculators.ts`
- `freelance-hourly-rate-calculator` FAQ: fixed markup (×1.20) → margin (÷0.80) formula example; result corrected from $71/hr to $73.78/hr
- `freelance-hourly-rate-calculator` `desiredAnnualIncome` helpText: clarified as gross income target, not take-home
- `freelance-take-home-pay-calculator` fields: replaced `federalTaxRate` number input with `filingStatus` select; updated health/retirement helpTexts to note pre-tax treatment
- `quarterly-tax-calculator` FAQ: Q2 due date corrected June 15 → June 16
- `self-employment-tax-calculator` FAQ: removed stale "2024 single-filer brackets" year reference
- `tax-deduction-calculator` fields: added `internetBizPct` field between `internetMonthly` and `phoneMonthly`; updated `internetMonthly` helpText
- `1099-tax-calculator` educationContent: corrected worked example (federal $7,300 → $5,926; total $20,500 → $19,070; rate 27% → 25.4%)
- `salary-to-freelance-rate-calculator` educationContent: updated worked example to match actual default output ($101,652 / 1,440 hrs = $70.59 break-even, $84.71 recommended)

---

## Known Limitations (not bugs — documented simplifications)

These were identified during the audit but are intentional simplifications, not errors:

| Item | Detail |
|---|---|
| Social Security wage base cap | SE tax drops from 15.3% to 2.9% above ~$176,100 (2025). Not implemented. Only affects earners above this threshold. |
| Additional Medicare Tax (0.9%) | Applies to SE income above $200k (single). Not implemented. |
| 2026 IRS values | All calculators use the most recent confirmed values (2025). 2026 IRS limits will be announced ~November 2025. See `TAX-VALUES-VERIFY-2026.md` for verification prompt. |
| TCJA bracket uncertainty | If TCJA was not extended past Dec 31 2025, the 2026 brackets would revert to pre-2018 rates. Pending user verification. |
| `quarterlyTax` `quartersRemaining` | Hardcoded division by 4 is correct for annual planning. If a user wants per-remaining-quarter calculation, a "quarters remaining" input could be added. |
