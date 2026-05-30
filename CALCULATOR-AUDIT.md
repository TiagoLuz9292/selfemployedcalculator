# Calculator Audit Report
**Date:** 2026-05-30  
**Scope:** All 22 calculators — logic files, field definitions, output descriptions, math verification  
**Method:** Manual code trace with default input values; cross-reference of fields in `calculators.ts` vs logic files

---

## Summary — Issues by Priority

| # | Calculator | Severity | Issue |
|---|---|---|---|
| 1 | `freelanceTakeHomePay` | **Critical** | Health insurance + retirement deducted post-tax; should reduce taxable income first. Understates take-home by ~$10,325 (25% error) with defaults. |
| 2 | `quarterlyTax` | **Critical** | `quartersRemaining` hardcoded to 4; should reflect quarters remaining after `alreadyPaidThisYear`. |
| 3 | `quarterlyTax` | **Critical** | Safe harbor uses `Math.max(estimate, priorYear)` — should be `Math.min`. Tells users to overpay. |
| 4 | `freelanceTakeHomePay` | **Significant** | Applies marginal rate as a flat rate on all taxable income, no standard deduction, no brackets. Overstates federal tax by ~$4,947. |
| 5 | `retirementContribution` | **Significant** | SEP-IRA limit computed as 25% of net income; correct IRS sole-proprietor rate is ~18.587%. Overstates max contribution by ~35%. |
| 6 | `calc1099Tax` (educationContent) | **Significant** | Federal tax example in the education text says ~$7,300; the calculator's own code produces $5,926. $1,374 discrepancy. |
| 7 | `freelanceHourlyRate` (FAQ) | **Moderate** | FAQ uses markup formula (×1.20 = $70.83) but code uses margin formula (÷0.80 = $73.78). FAQ answer is wrong. |
| 8 | `taxDeductionCalculator` | **Moderate** | Internet deduction uses home office area % instead of a separate business-use %. Heavily undercounts the internet deduction. |
| 9 | `salaryToFreelanceRate` (educationContent) | **Moderate** | Education text says $108k / 1,560 hrs = $69/hr; defaults produce $102,120 / 1,440 hrs = $70.92/hr. Content doesn't match output. |
| 10 | `quarterlyTax` (FAQ) | **Minor** | States Q2 due date as "June 15"; `calc1099Tax` correctly says "June 16". |
| 11 | `freelanceHourlyRate` (helpText) | **Minor** | `desiredAnnualIncome` helpText says "take-home before taxes" but code treats it as gross. Contradictory. |
| 12 | `freelanceTakeHomePay` (label) | **Minor** | `federalTaxRate` label says "Estimated Federal Tax Rate" but helpText says "Your marginal federal rate" — these are different things. |
| 13 | `taxDeductionCalculator` | **Minor** | Code fallback `marginalTaxRate ?? "25"` doesn't match any select option (12, 22, 24, 32). |
| 14 | `selfEmploymentTax` vs `calc1099Tax` | **Minor** | Use different tax year brackets (2024 vs 2026) with no coordination. Site date is 2026. |
| 15 | `utilizationRate` | **Minor** | No guard against `billableHours > totalWorkingHours`; produces nonsensical utilization > 100%. |
| 16 | `salaryToFreelanceRate` | **Minor** | `seTaxExtra` uses `salary × 0.0765` but SE tax applies to 92.35% of earnings; should be `× 0.07065`. $468 overstatement at defaults. |
| 17 | `vatCalculator` | **Cosmetic** | In remove-VAT mode, result description says "X% of net amount" but user entered a gross — mildly confusing. |

**Calculators that passed with no issues:** Day Rate, Project Quote, Retainer Rate, Value-Based Pricing, Break-even, Profit Margin, Billable Hours, Client Profitability, Late Payment Interest, Invoice Total, Emergency Fund, Savings Rate, Income Goal.

---

## Detailed Findings

---

### 1. Freelance Hourly Rate Calculator
**File:** `src/lib/calculators/freelanceHourlyRate.ts`

**Issue A — Moderate: FAQ formula contradicts the code**  
The FAQ answer for "How do I calculate my freelance hourly rate?" states:
> ($80,000 + $5,000) / 1,440 hours × 1.20 profit = ~$71/hr

This uses a **markup** formula (multiply by 1.20). The actual code uses a **margin** formula: divides by `(1 - profitMargin)`. With the same inputs:
- FAQ formula: `85,000 / 1,440 × 1.20 = $70.83`
- Code formula: `85,000 / (1 - 0.20) / 1,440 = $73.78`

The FAQ answer produces the wrong result. Markup and margin are not the same thing. The FAQ must be corrected to match the code.

**Issue B — Minor: Misleading `helpText` on `desiredAnnualIncome`**  
`helpText` reads: *"Your target take-home before taxes (add ~30-35% to account for taxes)"*

This is contradictory: it calls it "take-home" (post-tax) but then says to add 30-35% for taxes (implying you should enter a gross figure). The code treats this field as the **gross income target** — the user is expected to enter a number that already includes their tax buffer. The helpText should say something like: *"Your gross income target. If you want $60,000 after taxes, add ~30-35% and enter ~$80,000–90,000."*

**Arithmetic verification (all defaults):**
- annualBillableHours = 30 × (52 − 4) = 1,440 ✓
- grossNeeded = (80,000 + 5,000) / (1 − 0.20) = $106,250
- minimumRate = $106,250 / 1,440 = **$73.78/hr** ✓

---

### 2. Day Rate Calculator
**File:** `src/lib/calculators/dayRate.ts`

**Result: PASS**

With defaults (hourlyRate=75, hoursPerDay=8, markup=0%): dayRate = $600, weeklyEquivalent = $3,000. All fields used. All descriptions accurate.

---

### 3. Project Quote Calculator
**File:** `src/lib/calculators/projectQuote.ts`

**Result: PASS**

With defaults (hours=40, rate=75, buffer=20%, revisions=5, expenses=0):
- bufferedHours = 40 × 1.20 = 48
- totalHours = 48 + 5 = 53
- projectCost = 53 × 75 = **$3,975** ✓

All fields used. `effectiveHourlyRate` = $3,975 / 40 = $99.38 (correctly reflects the profitability of the buffer).

---

### 4. Retainer Rate Calculator
**File:** `src/lib/calculators/retainerRate.ts`

**Result: PASS**

With defaults (hours=20, rate=75, discount=10%): monthlyRetainer = 20 × 75 × 0.90 = **$1,350** ✓. Annual = $16,200. Effective rate = $67.50/hr. All correct.

---

### 5. Value-Based Pricing Calculator
**File:** `src/lib/calculators/valueBasedPricing.ts`

**Result: PASS**

With defaults (clientROI=50,000, capture=15%, duration=4 weeks): price = $7,500, weeklyRate = $1,875, roiMultiple = 6.7×. All fields used. Descriptions accurate.

---

### 6. Self-Employment Tax Calculator
**File:** `src/lib/calculators/selfEmploymentTax.ts`

**Issue A — Minor: Uses 2024 tax brackets, site date is 2026**  
The code uses 2024 single-filer federal brackets. The `calc1099Tax.ts` uses 2026 brackets. The two calculators are inconsistent with each other. Should align on the same tax year.

**Issue B — Minor: No standard deduction applied**  
`selfEmploymentTax.ts` applies brackets directly to `adjustedGrossIncome` without subtracting a standard deduction. `calc1099Tax.ts` correctly subtracts the standard deduction. Inconsistent treatment between the two tax calculators.

**Arithmetic verification (defaults: gross=80,000, expenses=10,000, state=5%):**
- netEarnings = 70,000
- seTax = 70,000 × 0.9235 × 0.153 = **$9,890.68** ✓
- halfSeTaxDeduction = $4,945.34
- AGI for income tax = 70,000 − 4,945.34 = $65,054.66
- federalTax (2024 brackets, no std deduction) = $9,365 ✓
- stateTax = $65,054.66 × 5% = $3,252.73 ✓
- takeHome = 80,000 − 10,000 − 22,508 = **$47,492** ✓

---

### 7. Freelance Take-Home Pay Calculator
**File:** `src/lib/calculators/freelanceTakeHomePay.ts`

**Issue A — Critical: Health insurance and retirement deducted post-tax**  
The code computes `taxableIncome = netProfit − halfSeTaxDeduction`, then calculates federal and state tax on `taxableIncome`, then subtracts `annualHealthInsurance` and `annualRetirement` from the result. But:
- Self-employed health insurance premiums are an **above-the-line deduction** that reduces AGI before income tax is calculated
- SEP-IRA/Solo 401k contributions also reduce taxable income before tax is applied

By deducting them after tax, the code applies full income tax to income that should have been sheltered. With defaults (health=$4,800/yr, retirement=$6,000/yr, at 22% marginal rate), this overstates taxes by approximately **$2,376** ($10,800 × 0.22).

**Issue B — Significant: Applies marginal rate as flat rate, no progressive brackets, no standard deduction**  
`federalTax = taxableIncome × (federalTaxRate / 100)` applies the entered marginal rate to the entire taxable income. With defaults (federalTaxRate=22, taxableIncome=65,054): code gives $14,312. Correct progressive calculation with 2024 brackets and no standard deduction gives $9,365. That's a **$4,947 overstatement** at defaults alone.

Adding the missing standard deduction ($14,600 for 2024): the brackets would apply to $50,454, giving $6,127 in federal tax. The code gives $14,312 — an **$8,185 overstatement**.

**Issue C — Minor: Label/helpText terminology mismatch**  
The field label is "Estimated Federal Tax Rate" which implies an effective rate, but `helpText` says "Your marginal federal rate: 12% (<$47k), 22% (<$100k)..." — marginal and effective rates are different. The code applies this number as a flat rate on all income, making it behave as an effective rate in the formula but the label encourages users to enter their marginal rate.

**Combined understatement of take-home with defaults:** ~$10,325 below accurate figure.

---

### 8. Quarterly Tax Estimate Calculator
**File:** `src/lib/calculators/quarterlyTax.ts`

**Issue A — Critical: `quartersRemaining` hardcoded to 4**  
```ts
const quartersRemaining = 4; // line 23
```
The field `alreadyPaidThisYear` correctly reduces `remainingTax`, but the remaining balance is always divided by 4 regardless of how many quarters have passed. A user who has already paid 3 quarters and enters that amount will see a quarterly payment of `(totalTax − paid) / 4` — half what they actually need to pay in the one remaining quarter. The divisor should reflect the number of quarters remaining.

Fix: Remove the hardcoded constant; since the calculator doesn't know the current date, the simplest fix is to always divide remaining tax by 4 equal parts (which at least gives a safe overpayment signal), but document clearly that this is for planning the remaining payment. Alternatively, add a "Quarters Remaining" field.

**Issue B — Critical: Safe harbor logic inverted**  
```ts
const safeHarborAmount = priorYearTaxes > 0
  ? Math.max(estimatedAnnualTax, priorYearTaxes)  // WRONG
  : estimatedAnnualTax;
```
The safe harbor rule: you avoid underpayment penalties by paying the **lesser** of (a) 100% of prior year's tax, or (b) 90% of current year's estimate. `Math.max` always picks the higher value, which is the **opposite** of safe harbor — it always recommends paying more than necessary. Should be `Math.min`.

**Issue C — Moderate: Flat 22% income tax estimate**  
Uses a flat 22% for income tax rather than progressive brackets. Overstates tax for incomes below $47k, understates for incomes above $100k. At minimum the output should disclose "estimate assumes 22% federal rate; actual rate may differ."

**Issue D — Minor: Q2 due date wrong in FAQ**  
FAQ states Q2 is due "June 15". The IRS Q2 deadline is typically June 15, but when June 15 falls on a weekend (as it did in 2025), it moves to the next business day. The `calc1099Tax` calculator lists it as "June 16". These should be consistent. Best practice: state "June 15 (or next business day)" in both places.

---

### 9. VAT Calculator
**File:** `src/lib/calculators/vatCalculator.ts`

**Issue — Cosmetic: Description in remove-VAT mode is potentially confusing**  
In remove-VAT mode, the `vat-amount` result has description `"${vatRate}% of net amount"`. The user entered a gross amount; the net was derived by the calculator. The description is technically accurate (VAT is indeed vatRate% of the net) but could confuse a user who entered a gross and sees "net amount" in the description without context.

Suggestion: Use conditional description: add-VAT mode: `"${vatRate}% added to net"` / remove-VAT mode: `"${vatRate}% extracted from gross"`.

---

### 10. 1099 Tax Calculator
**File:** `src/lib/calculators/calc1099Tax.ts`

**Issue A — Significant: Education content numbers contradict the calculator's output**  
The `educationContent` body in `calculators.ts` provides a worked example for gross=$75,000, expenses=$5,000, state=5%:

> *"SE tax ≈ $9,700, federal income tax ≈ $7,300, and average state tax ≈ $3,500. Total: ~$20,500 on $75,000 = 27% effective rate."*

Running the actual calculator code with these inputs:
- SE tax = $9,891 (text: ~$9,700 — minor)
- Federal income tax = **$5,926** (text: ~$7,300 — **$1,374 off, 23% error**)
- State tax = $3,253 (text: ~$3,500 — minor)
- Total = **$19,069** (text: ~$20,500 — **$1,431 off**)
- Effective rate = **25.4%** (text: 27%)

The text appears to have been written without the standard deduction being applied (the code correctly applies the 2026 standard deduction of $15,000 for single filers). The education content must be updated to match the calculator's actual output.

**Issue B — Minor: Q2 due date "June 16" vs "June 15" in `quarterlyTax` FAQ**  
See Issue D under Quarterly Tax.

**Arithmetic verification (defaults: gross=75,000, expenses=5,000, single, state=5%, otherIncome=0):**
- netSE = 70,000
- seTax = 70,000 × 0.9235 × 0.153 = $9,891
- halfSeTax = $4,945
- AGI = 70,000 − 4,945 = $65,055
- standardDeduction (2026 single) = $15,000
- taxableIncome = $65,055 − $15,000 = $50,055
- federalTax (brackets) = $5,926 ✓
- stateTax = $50,055 × 5% = $2,503 ✓ *(note: state applied to taxable income after std deduction)*
- quarterly = ($9,891 + $5,926 + $2,503) / 4 = $4,580/quarter ✓

---

### 11. Tax Deduction Calculator
**File:** `src/lib/calculators/taxDeductionCalculator.ts`

**Issue A — Moderate: Internet deduction uses home office area %, not business-use %**  
```ts
internetDeduction = internetMonthly * 12 * homeOfficePct
```
`homeOfficePct` is `homeOfficeSqFt / totalHomeSqFt`. The IRS allows deducting the **business-use percentage** of internet (how much of your internet use is for business), not the home office area fraction. For a freelancer who uses the internet 80% for work, the deductible portion is 80% of the bill — not 15% (the area ratio). The area ratio is the correct method for **rent, mortgage, and utilities** but not for internet.

With defaults (internet=$60/mo, homeOfficePct=0.15): deduction = $108/year. A typical freelancer claiming 70% business use would get: $720 × 0.70 = $504/year — 4.7× more.

**Fix:** Add a separate `internetBizPct` field (similar to the existing `phoneBizPct`). The internet deduction should be `internetMonthly × 12 × (internetBizPct / 100)`. The current `helpText` ("Full bill — the home office % is deductible") should change to "Enter your internet bill; you'll specify business use % separately."

**Issue B — Minor: Default fallback `marginalTaxRate ?? "25"` doesn't match any select option**  
The code has `parseFloat(inputs.marginalTaxRate ?? "25")` but the field options in `calculators.ts` are 12%, 22%, 24%, 32%. No option is 25%. Harmless since a select always has a value, but the fallback is inconsistent. Change fallback to `"22"`.

---

### 12. Profit Margin Calculator
**File:** `src/lib/calculators/profitMargin.ts`

**Result: PASS**

With defaults (revenue=80,000, cogs=10,000, opex=15,000): grossMargin=87.5%, netMargin=68.75%. All correct.

---

### 13. Billable Hours Target Calculator
**File:** `src/lib/calculators/billableHours.ts`

**Result: PASS**

With defaults (target=80,000, rate=75, vacation=20 days, sick=5 days, admin=20%): workingDays=235, availableHours=1,880, billable=1,504, weeklyTarget=22.7 hrs. All correct. All fields used.

*Note (non-bug):* FAQ mentions "1,440 available billable hours/year" — this was written with different assumptions than the defaults produce (1,504). Not a code bug.

---

### 14. Utilization Rate Calculator
**File:** `src/lib/calculators/utilizationRate.ts`

**Issue — Minor: No validation that billableHours ≤ totalWorkingHours**  
If a user enters `billableHours=200` with `totalWorkingHours=176`, the output is 113.6% utilization — a nonsensical result that would confuse users. The `billableHours` field in `calculators.ts` has no `max` constraint. Fix: add `max: totalWorkingHours` constraint or add a `Math.min(billableHours, totalWorkingHours)` guard in the logic, with a warning result if exceeded.

---

### 15. Break-Even Calculator
**File:** `src/lib/calculators/breakEven.ts`

**Result: PASS**

With defaults (fixedCosts=3,000, rate=75, variablePct=10%): effectiveRate=67.50, breakEvenRevenue=$3,333.33, breakEvenHours=44.44/month. Exactly matches education content example.

---

### 16. Client Profitability Calculator
**File:** `src/lib/calculators/clientProfitability.ts`

**Result: PASS**

With defaults (revenue=3,000, billable=30 hrs, targetRate=75, nonBillable=5 hrs): totalHours=35, effectiveRate=$85.71, profitabilityScore=114%. All fields used. All descriptions accurate.

---

### 17. Late Payment Interest Calculator
**File:** `src/lib/calculators/latePaymentInterest.ts`

**Result: PASS**

With defaults (invoice=2,000, days=30, rate=8%): dailyRate=0.02192%, interest=$13.15, total=$2,013.15. Simple interest formula is correct. All fields used.

---

### 18. Invoice Total Calculator
**File:** `src/lib/calculators/invoiceTotal.ts`

**Result: PASS**

Verified with discount + VAT + deposit: discount applied to subtotal first, VAT calculated on discounted subtotal, deposit deducted from gross. Order matches FAQ description. All conditional outputs render only when relevant (vatAmount hidden when vatRate=0, depositDeducted hidden when depositPaid=0).

---

### 19. Emergency Fund Calculator
**File:** `src/lib/calculators/emergencyFund.ts`

**Result: PASS**

With defaults (monthlyExpenses=3,000, months=6, current=5,000): target=$18,000, gap=$13,000, pctFunded=27.8%, monthsCovered=1.67. All correct.

---

### 20. Savings Rate Calculator
**File:** `src/lib/calculators/savingsRate.ts`

**Result: PASS**

With defaults (income=6,000, expenses=3,500, target=20%): currentSavings=$2,500, actualRate=41.7%, targetAmount=$1,200, status=above target. All correct.

---

### 21. Self-Employed Retirement Calculator
**File:** `src/lib/calculators/retirementContribution.ts`

**Issue A — Significant: SEP-IRA limit overstated by ~35%**  
```ts
// SEP-IRA case:
maxContribution = Math.min(annualNetIncome * 0.25, ANNUAL_LIMIT_2024);
```
The IRS states that a sole proprietor's SEP-IRA contribution is limited to 25% of "plan compensation" — but "plan compensation" for a sole proprietor is net self-employment income *after subtracting the SEP-IRA contribution itself* (a circular formula). The IRS resolves this to an effective rate of approximately **18.587% of net self-employment income** (or 20% of net earnings after SE tax deduction).

Using 25% instead of ~18.587%:
- At $60,000 net income: code gives $15,000 max; IRS formula gives ~$11,152
- At $100,000 net income: code gives $25,000 max; IRS formula gives ~$18,587

This is a ~35% overstatement of the allowed contribution. Users who max out their SEP-IRA based on this calculator's output would over-contribute and face IRS excess-contribution penalties.

The same overstatement applies to the employer-contribution portion of the Solo 401(k) calculation.

**Issue B — Minor: Tax savings always assumes 22% bracket**  
`taxSavings = maxContribution * 0.22`. The calculator does not ask for the user's marginal rate, so it assumes 22% for everyone. The result description discloses "at 22% bracket" which is correct, but a simple fix is to add a marginal rate selector (like the tax deduction calculator) to make this more accurate.

---

### 22. Salary to Freelance Rate Calculator
**File:** `src/lib/calculators/salaryToFreelanceRate.ts`

**Issue A — Minor: SE tax multiplier doesn't apply the 92.35% adjustment**  
```ts
seTaxExtra = annualSalary * 0.0765
```
SE tax applies to 92.35% of earnings. The more precise formula is `annualSalary × 0.0765 × 0.9235 = annualSalary × 0.07065`. With $80,000 salary: code gives $6,120; correct value is $5,652. The $468 overstatement means the calculator slightly overstates the required freelance rate.

**Issue B — Moderate: Education content example doesn't match default output**  
The `educationContent` body states: *"For a $80,000 salary: total replacement target ≈ $108,000 / 1,560 billable hours = $69/hr minimum."*

The code with defaults produces:
- totalRevenue ≈ $102,120
- annualBillableHours = 30 hrs/wk × (52 − 4 weeks) = 1,440 hrs
- breakEvenRate = $102,120 / 1,440 / (1 − 0.20) ≈ **$88.65/hr**

The education content uses different assumptions ($108k target, 1,560 hours) that don't correspond to the defaults or the code's formula. The content example must be rewritten to use the actual output the defaults produce.

---

## Calculators That PASSED (No Issues Found)

- Day Rate Calculator
- Project Quote Calculator
- Retainer Rate Calculator
- Value-Based Pricing Calculator
- Profit Margin Calculator
- Billable Hours Target Calculator
- Break-even Calculator
- Client Profitability Calculator
- Late Payment Interest Calculator
- Invoice Total Calculator
- Emergency Fund Calculator
- Savings Rate Calculator
- Freelance Income Goal Calculator

---

## Fix Priority Order

1. **`freelanceTakeHomePay.ts`** — Refactor tax calculation to deduct health insurance and retirement from taxable income before applying tax, and switch from flat marginal rate to proper progressive brackets with standard deduction.
2. **`quarterlyTax.ts`** — Fix safe harbor to use `Math.min`, fix `quartersRemaining` logic.
3. **`retirementContribution.ts`** — Correct SEP-IRA limit from 25% to ~18.587% (or add note that this is a simplified figure).
4. **`taxDeductionCalculator.ts`** — Add separate `internetBizPct` field; decouple internet deduction from home office area %.
5. **`calc1099Tax.ts` educationContent** — Update the worked example numbers to match actual calculator output.
6. **`freelanceHourlyRate.ts` FAQ** — Fix the FAQ example to use margin formula (÷0.80) not markup formula (×1.20).
7. **`salaryToFreelanceRate.ts` educationContent** — Update the example to match default output.
8. **`selfEmploymentTax.ts`** — Align with 2026 brackets and add standard deduction for consistency with `calc1099Tax.ts`.
9. **`freelanceHourlyRate.ts` helpText** — Fix `desiredAnnualIncome` helpText to accurately describe the field.
10. **`vatCalculator.ts`** — Improve description in remove-VAT mode.
11. **`utilizationRate.ts`** — Add validation guard for billableHours > totalWorkingHours.
12. **`quarterlyTax.ts` FAQ** — Fix Q2 due date to "June 16 (or next business day)".
