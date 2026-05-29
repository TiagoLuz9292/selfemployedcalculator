import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

export function calcRetirementContribution(inputs: CalculatorInputs): CalculatorResult[] {
  const annualNetIncome = parseFloat(inputs.annualNetIncome ?? "60000") || 0;
  const accountType = inputs.accountType ?? "sep-ira";
  const age = parseFloat(inputs.age ?? "35") || 35;

  if (annualNetIncome <= 0) return [];

  let maxContribution = 0;
  let accountName = "";
  const ANNUAL_LIMIT_2024 = 69000;

  switch (accountType) {
    case "sep-ira":
      maxContribution = Math.min(annualNetIncome * 0.25, ANNUAL_LIMIT_2024);
      accountName = "SEP-IRA";
      break;
    case "solo-401k": {
      const employeeContrib = Math.min(23000, annualNetIncome);
      const catchUp = age >= 50 ? 7500 : 0;
      const employerContrib = annualNetIncome * 0.25;
      maxContribution = Math.min(employeeContrib + catchUp + employerContrib, ANNUAL_LIMIT_2024 + catchUp);
      accountName = "Solo 401(k)";
      break;
    }
    case "simple-ira": {
      const baseLimit = Math.min(16000, annualNetIncome);
      const catchUp = age >= 50 ? 3500 : 0;
      maxContribution = baseLimit + catchUp;
      accountName = "SIMPLE IRA";
      break;
    }
    default:
      maxContribution = Math.min(annualNetIncome * 0.25, ANNUAL_LIMIT_2024);
      accountName = "Retirement Account";
  }

  const taxSavings = maxContribution * 0.22;
  const monthlyContribution = maxContribution / 12;
  const contributionPct = (maxContribution / annualNetIncome) * 100;

  const fmt = (n: number, dec = 0) =>
    `$${n.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec })}`;

  return [
    {
      id: "max-contribution",
      label: `Max ${accountName} Contribution`,
      value: fmt(maxContribution),
      highlighted: true,
      color: "success",
      description: `2024 limit for ${accountName}${age >= 50 ? " (catch-up included)" : ""}`,
    },
    {
      id: "tax-savings",
      label: "Estimated Tax Savings",
      value: fmt(taxSavings),
      highlighted: true,
      color: "success",
      description: "Approximate federal tax savings at 22% bracket",
    },
    {
      id: "monthly-contribution",
      label: "Monthly Contribution Needed",
      value: fmt(monthlyContribution),
      description: "To max out your annual contribution",
    },
    {
      id: "contribution-pct",
      label: "% of Net Income",
      value: `${contributionPct.toFixed(1)}%`,
      description: "Contribution as share of net self-employment income",
    },
  ];
}
