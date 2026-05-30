import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

function approximateFederalTax(taxableIncome: number, filingStatus: string): number {
  if (taxableIncome <= 0) return 0;
  const brackets2026Single = [
    { limit: 11925,   rate: 0.10 },
    { limit: 48475,   rate: 0.12 },
    { limit: 103350,  rate: 0.22 },
    { limit: 197300,  rate: 0.24 },
    { limit: 250525,  rate: 0.32 },
    { limit: 626350,  rate: 0.35 },
    { limit: Infinity, rate: 0.37 },
  ];
  const brackets2026Married = [
    { limit: 23850,   rate: 0.10 },
    { limit: 96950,   rate: 0.12 },
    { limit: 206700,  rate: 0.22 },
    { limit: 394600,  rate: 0.24 },
    { limit: 501050,  rate: 0.32 },
    { limit: 751600,  rate: 0.35 },
    { limit: Infinity, rate: 0.37 },
  ];
  const standardDeduction = filingStatus === "married" ? 30000 : 15000;
  const brackets = filingStatus === "married" ? brackets2026Married : brackets2026Single;
  const agi = Math.max(0, taxableIncome - standardDeduction);
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

export function calc1099Tax(inputs: CalculatorInputs): CalculatorResult[] {
  const gross1099 = parseFloat(inputs.gross1099 ?? "75000") || 0;
  const businessExpenses = parseFloat(inputs.businessExpenses ?? "5000") || 0;
  const filingStatus = inputs.filingStatus ?? "single";
  const stateTaxRate = parseFloat(inputs.stateTaxRate ?? "5") || 0;
  const otherIncome = parseFloat(inputs.otherIncome ?? "0") || 0;

  if (gross1099 <= 0) return [];

  const netSelfEmploymentIncome = Math.max(0, gross1099 - businessExpenses);
  const seTax = netSelfEmploymentIncome * 0.9235 * 0.153;
  const deductibleHalfSeTax = seTax / 2;
  const agi = netSelfEmploymentIncome + otherIncome - deductibleHalfSeTax;
  const federalTax = approximateFederalTax(agi, filingStatus);
  const stateTax = agi * (stateTaxRate / 100);
  const totalTax = seTax + federalTax + stateTax;
  const takeHome = gross1099 - businessExpenses - totalTax;
  const effectiveRate = gross1099 > 0 ? (totalTax / gross1099) * 100 : 0;
  const quarterlyPayment = totalTax / 4;

  const fmt = (n: number) =>
    `$${Math.max(0, n).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;

  return [
    {
      id: "quarterly-payment",
      label: "Quarterly Tax Payment",
      value: fmt(quarterlyPayment),
      highlighted: true,
      color: "warning",
      description: "Pay this each quarter (Apr 15, Jun 16, Sep 15, Jan 15)",
    },
    {
      id: "take-home",
      label: "Estimated Take-Home",
      value: fmt(takeHome),
      highlighted: true,
      color: takeHome > 0 ? "success" : "danger",
      description: "After expenses and all taxes",
    },
    {
      id: "se-tax",
      label: "Self-Employment Tax (1099)",
      value: fmt(seTax),
      description: "15.3% Social Security + Medicare on 92.35% of net earnings",
    },
    {
      id: "federal-tax",
      label: "Federal Income Tax",
      value: fmt(federalTax),
      description: "2026 brackets, after standard deduction",
    },
    {
      id: "state-tax",
      label: "State Income Tax",
      value: fmt(stateTax),
      description: `${stateTaxRate}% state rate`,
    },
    {
      id: "effective-rate",
      label: "Effective Tax Rate",
      value: `${effectiveRate.toFixed(1)}%`,
      description: "Total tax as % of gross 1099 income",
    },
  ];
}
