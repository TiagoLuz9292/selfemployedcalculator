import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

// IRS limits — last confirmed for 2025. Update to 2026 values from irs.gov/newsroom once available.
const ANNUAL_LIMIT = 70000;           // SEP-IRA / defined contribution ceiling (2025: $70,000)
const SOLO401K_EMPLOYEE = 23500;      // Solo 401(k) employee elective deferral (2025: $23,500)
const SIMPLE_IRA_LIMIT = 16500;       // SIMPLE IRA employee contribution (2025: $16,500)
const SIMPLE_IRA_CATCHUP = 3500;      // SIMPLE IRA catch-up age 50+ (2025: $3,500)
const CATCHUP_50_PLUS = 7500;         // Solo 401(k) standard catch-up ages 50–59 and 64+ (2025: $7,500)
const CATCHUP_60_63 = 11250;          // SECURE 2.0: enhanced catch-up ages 60–63 (2025: $11,250)

export function calcRetirementContribution(inputs: CalculatorInputs): CalculatorResult[] {
  const annualNetIncome = parseFloat(inputs.annualNetIncome ?? "60000") || 0;
  const accountType = inputs.accountType ?? "sep-ira";
  const age = parseFloat(inputs.age ?? "35") || 35;

  if (annualNetIncome <= 0) return [];

  // IRS sole-proprietor formula (Publication 560):
  // Step 1: SE tax = net income × 0.9235 × 0.153
  // Step 2: Compensation = net income − (SE tax ÷ 2)
  // Step 3: Max employer contribution = compensation × 20%  (= 25% plan rate ÷ 1.25 — circular formula resolved by IRS)
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
      const catchUp = age >= 60 && age <= 63 ? CATCHUP_60_63 : age >= 50 ? CATCHUP_50_PLUS : 0;
      const employeeContrib = Math.min(SOLO401K_EMPLOYEE + catchUp, annualNetIncome);
      const employerContrib = Math.min(compensation * 0.20, ANNUAL_LIMIT);
      maxContribution = Math.min(employeeContrib + employerContrib, ANNUAL_LIMIT + catchUp);
      accountName = "Solo 401(k)";
      break;
    }

    case "simple-ira": {
      const catchUp = age >= 50 ? SIMPLE_IRA_CATCHUP : 0;
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

  const catchUpNote = age >= 60 && age <= 63
    ? " (SECURE 2.0 enhanced catch-up for ages 60–63)"
    : age >= 50 ? " (catch-up included)" : "";

  const fmt = (n: number, dec = 0) =>
    `$${n.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec })}`;

  return [
    {
      id: "max-contribution",
      label: `Max ${accountName} Contribution`,
      value: fmt(maxContribution),
      highlighted: true,
      color: "success",
      description: `${accountName} limit based on your net income${catchUpNote}`,
    },
    {
      id: "tax-savings",
      label: "Estimated Tax Savings",
      value: fmt(taxSavings),
      highlighted: true,
      color: "success",
      description: "Approximate federal tax savings at 22% bracket — your actual savings depend on your marginal rate",
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
