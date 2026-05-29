import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

function approximateFederalTax(taxableIncome: number): number {
  if (taxableIncome <= 0) return 0;
  // 2024 single filer brackets (approximate)
  let tax = 0;
  const brackets = [
    { limit: 11600,  rate: 0.10 },
    { limit: 47150,  rate: 0.12 },
    { limit: 100525, rate: 0.22 },
    { limit: 191950, rate: 0.24 },
    { limit: 243725, rate: 0.32 },
    { limit: 609350, rate: 0.35 },
    { limit: Infinity, rate: 0.37 },
  ];
  let remaining = taxableIncome;
  let prev = 0;
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
  const seTax = netEarnings * 0.9235 * 0.153;
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
      description: "Social Security (12.4%) + Medicare (2.9%) on 92.35% of net earnings",
    },
    {
      id: "take-home",
      label: "Estimated Take-Home",
      value: fmt(takeHome),
      highlighted: true,
      color: takeHome > 0 ? "success" : "danger",
      description: "After expenses, SE tax, federal, and state tax",
    },
    {
      id: "federal-tax",
      label: "Federal Income Tax",
      value: fmt(federalTax),
      description: "Estimated using 2024 single filer brackets",
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
      description: "SE tax + federal + state combined",
    },
    {
      id: "effective-rate",
      label: "Effective Tax Rate",
      value: `${effectiveTaxRate.toFixed(1)}%`,
      description: "Total tax as % of gross income",
    },
  ];
}
