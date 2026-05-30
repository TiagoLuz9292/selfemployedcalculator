import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

// IRS limits for 2026 (IRS Rev. Proc. 2025-32 and IRS retirement plan guidance)
// Update each November when IRS announces the following year's limits.
const ANNUAL_LIMIT = 72000;             // SEP-IRA / defined contribution ceiling
const SOLO401K_EMPLOYEE = 24500;        // Solo 401(k) employee elective deferral
const CATCHUP_50_59_64PLUS = 8000;      // Solo 401(k) standard catch-up (ages 50–59 and 64+)
const CATCHUP_60_63 = 11250;            // SECURE 2.0: enhanced catch-up ages 60–63 (unchanged from 2025)
const SIMPLE_IRA_LIMIT = 17000;         // SIMPLE IRA employee contribution
const SIMPLE_IRA_CATCHUP_50 = 4000;     // SIMPLE IRA catch-up age 50+ (excl. 60-63)
const SIMPLE_IRA_CATCHUP_60_63 = 5250;  // SECURE 2.0: SIMPLE IRA enhanced catch-up ages 60–63

export function calcRetirementContribution(inputs: CalculatorInputs): CalculatorResult[] {
  const annualNetIncome = parseFloat(inputs.annualNetIncome ?? "60000") || 0;
  const accountType = inputs.accountType ?? "sep-ira";
  const age = parseFloat(inputs.age ?? "35") || 35;

  if (annualNetIncome <= 0) return [];

  // IRS Publication 560 sole-proprietor formula:
  // Step 1: SE tax = net income × 0.9235 × 0.153
  // Step 2: Compensation = net income − (SE tax ÷ 2)
  // Step 3: Max employer contribution = compensation × 20%  (25% plan rate ÷ 1.25 — resolves the circular formula)
  // Effective rate: ~18.587% of net self-employment income
  const seTax = annualNetIncome * 0.9235 * 0.153;
  const compensation = Math.max(0, annualNetIncome - seTax / 2);

  let maxContribution = 0;
  let accountName = "";

  switch (accountType) {
    case "sep-ira":
      maxContribution = Math.min(compensation * 0.20, ANNUAL_LIMIT);
      accountName = "SEP-IRA";
      break;

    case "solo-401k": {
      const catchUp = age >= 60 && age <= 63
        ? CATCHUP_60_63
        : age >= 50 ? CATCHUP_50_59_64PLUS : 0;
      const employeeContrib = Math.min(SOLO401K_EMPLOYEE + catchUp, annualNetIncome);
      const employerContrib = Math.min(compensation * 0.20, ANNUAL_LIMIT);
      maxContribution = Math.min(employeeContrib + employerContrib, ANNUAL_LIMIT + catchUp);
      accountName = "Solo 401(k)";
      break;
    }

    case "simple-ira": {
      const catchUp = age >= 60 && age <= 63
        ? SIMPLE_IRA_CATCHUP_60_63
        : age >= 50 ? SIMPLE_IRA_CATCHUP_50 : 0;
      maxContribution = Math.min(SIMPLE_IRA_LIMIT + catchUp, annualNetIncome);
      accountName = "SIMPLE IRA";
      break;
    }

    default:
      maxContribution = Math.min(compensation * 0.20, ANNUAL_LIMIT);
      accountName = "Retirement Account";
  }

  const taxSavings = maxContribution * 0.22;
  const monthlyContribution = maxContribution / 12;
  const contributionPct = annualNetIncome > 0 ? (maxContribution / annualNetIncome) * 100 : 0;

  const catchUpNote =
    age >= 60 && age <= 63 ? ` (SECURE 2.0 enhanced catch-up for ages 60–63)` :
    age >= 50 ? ` (catch-up included)` : "";

  const fmt = (n: number, dec = 0) =>
    `$${n.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec })}`;

  return [
    {
      id: "max-contribution",
      label: `Max ${accountName} Contribution`,
      value: fmt(maxContribution),
      highlighted: true,
      color: "success",
      description: `2026 IRS limit for ${accountName}${catchUpNote}`,
    },
    {
      id: "tax-savings",
      label: "Estimated Tax Savings",
      value: fmt(taxSavings),
      highlighted: true,
      color: "success",
      description: "Approximate federal tax savings at 22% bracket — actual savings depend on your marginal rate",
    },
    {
      id: "monthly-contribution",
      label: "Monthly Contribution Needed",
      value: fmt(monthlyContribution),
      description: "To contribute the maximum evenly over 12 months",
    },
    {
      id: "contribution-pct",
      label: "% of Net Income",
      value: `${contributionPct.toFixed(1)}%`,
      description: "Contribution as share of net self-employment income",
    },
  ];
}
