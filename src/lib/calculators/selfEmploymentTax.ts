import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

// IRS Rev. Proc. 2025-32 — 2026 single-filer brackets (TCJA extended by P.L. 119-21)
const STD_DEDUCTION_2026 = 16100;  // single filer standard deduction
const SS_WAGE_BASE = 184500;       // 2026 Social Security wage base

function approximateFederalTax(taxableIncome: number): number {
  if (taxableIncome <= 0) return 0;
  const brackets = [
    { limit: 12400,   rate: 0.10 },
    { limit: 50400,   rate: 0.12 },
    { limit: 105700,  rate: 0.22 },
    { limit: 201775,  rate: 0.24 },
    { limit: 256225,  rate: 0.32 },
    { limit: 640600,  rate: 0.35 },
    { limit: Infinity, rate: 0.37 },
  ];
  const agi = Math.max(0, taxableIncome - STD_DEDUCTION_2026);
  let tax = 0;
  let prev = 0;
  let remaining = agi;
  for (const { limit, rate } of brackets) {
    const slice = Math.min(remaining, limit - prev);
    if (slice <= 0) break;
    tax += slice * rate;
    remaining -= slice;
    prev = limit;
    if (remaining <= 0) break;
  }
  return tax;
}

export function calcSelfEmploymentTax(inputs: CalculatorInputs): CalculatorResult[] {
  const grossIncome = parseFloat(inputs.grossIncome ?? "80000") || 0;
  const deductibleExpenses = parseFloat(inputs.deductibleExpenses ?? "10000") || 0;
  const stateTaxRate = parseFloat(inputs.stateTaxRate ?? "5") || 0;

  if (grossIncome <= 0) return [];

  const netEarnings = Math.max(0, grossIncome - deductibleExpenses);
  const seBase = netEarnings * 0.9235;

  // SE tax with 2026 SS wage base cap; ACA surtax not applied (filing status unknown)
  const ssTax = Math.min(seBase, SS_WAGE_BASE) * 0.124;
  const medicareTax = seBase * 0.029;
  const seTax = ssTax + medicareTax;

  const deductibleHalfOfSeTax = seTax / 2;
  const adjustedGrossIncome = netEarnings - deductibleHalfOfSeTax;
  const federalTax = approximateFederalTax(adjustedGrossIncome);
  const stateTax = adjustedGrossIncome * (stateTaxRate / 100);
  const totalTax = seTax + federalTax + stateTax;
  const effectiveTaxRate = grossIncome > 0 ? (totalTax / grossIncome) * 100 : 0;
  const takeHome = grossIncome - deductibleExpenses - totalTax;

  const fmt = (n: number, dec = 0) =>
    `$${n.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec })}`;

  return [
    {
      id: "se-tax",
      label: "Self-Employment Tax",
      value: fmt(seTax),
      highlighted: true,
      color: "warning",
      description: "SS (12.4% up to $184,500) + Medicare (2.9%) on 92.35% of net earnings",
    },
    {
      id: "take-home",
      label: "Estimated Take-Home",
      value: fmt(takeHome),
      highlighted: true,
      color: takeHome > 0 ? "success" : "danger",
      description: "After expenses, SE tax, federal, and state income tax",
    },
    {
      id: "federal-tax",
      label: "Federal Income Tax",
      value: fmt(federalTax),
      description: "2026 single-filer brackets with standard deduction (IRS Rev. Proc. 2025-32)",
    },
    {
      id: "state-tax",
      label: "State Income Tax",
      value: fmt(stateTax),
      description: `${stateTaxRate}% state rate on adjusted gross income`,
    },
    {
      id: "total-tax",
      label: "Total Tax Burden",
      value: fmt(totalTax),
      description: "SE tax + federal income tax + state income tax",
    },
    {
      id: "effective-rate",
      label: "Effective Tax Rate",
      value: `${effectiveTaxRate.toFixed(1)}%`,
      description: "Total tax as % of gross income",
    },
  ];
}
