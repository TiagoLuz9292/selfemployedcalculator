import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

// IRS Rev. Proc. 2025-32 — 2026 inflation-adjusted brackets (TCJA extended by P.L. 119-21)
const brackets2026Single = [
  { limit: 12400,   rate: 0.10 },
  { limit: 50400,   rate: 0.12 },
  { limit: 105700,  rate: 0.22 },
  { limit: 201775,  rate: 0.24 },
  { limit: 256225,  rate: 0.32 },
  { limit: 640600,  rate: 0.35 },
  { limit: Infinity, rate: 0.37 },
];
const brackets2026Married = [
  { limit: 24800,   rate: 0.10 },
  { limit: 100800,  rate: 0.12 },
  { limit: 211400,  rate: 0.22 },
  { limit: 403550,  rate: 0.24 },
  { limit: 512450,  rate: 0.32 },
  { limit: 768700,  rate: 0.35 },
  { limit: Infinity, rate: 0.37 },
];
// 2026 standard deduction (IRS Rev. Proc. 2025-32)
const STD_DEDUCTION_SINGLE  = 16100;
const STD_DEDUCTION_MARRIED = 32200;
// 2026 Social Security wage base (SSA announcement)
const SS_WAGE_BASE = 184500;

function approximateFederalTax(taxableIncome: number, filingStatus: string): number {
  if (taxableIncome <= 0) return 0;
  const stdDed = filingStatus === "married" ? STD_DEDUCTION_MARRIED : STD_DEDUCTION_SINGLE;
  const brackets = filingStatus === "married" ? brackets2026Married : brackets2026Single;
  const agi = Math.max(0, taxableIncome - stdDed);
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

  const netSEIncome = Math.max(0, gross1099 - businessExpenses);
  const seBase = netSEIncome * 0.9235;

  // SE tax with 2026 SS wage base cap
  const ssTax = Math.min(seBase, SS_WAGE_BASE) * 0.124;
  const medicareTax = seBase * 0.029;
  // Additional Medicare Tax (ACA, 0.9%) — thresholds not inflation-indexed
  const amtThreshold = filingStatus === "married" ? 250000 : 200000;
  const additionalMedicareTax = seBase > amtThreshold ? (seBase - amtThreshold) * 0.009 : 0;
  const seTax = ssTax + medicareTax + additionalMedicareTax;

  const deductibleHalfSeTax = seTax / 2;
  const agi = netSEIncome + otherIncome - deductibleHalfSeTax;
  const federalTax = approximateFederalTax(agi, filingStatus);
  const stateTax = agi * (stateTaxRate / 100);
  const totalTax = seTax + federalTax + stateTax;
  const takeHome = gross1099 - businessExpenses - totalTax;
  const effectiveRate = gross1099 > 0 ? (totalTax / gross1099) * 100 : 0;
  const quarterlyPayment = totalTax / 4;

  const fmt = (n: number) =>
    `$${Math.max(0, n).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;

  const seTaxNote = additionalMedicareTax > 0
    ? "Includes 0.9% Additional Medicare Tax on high income"
    : "SS (12.4% up to $184,500) + Medicare (2.9%) on 92.35% of net earnings";

  return [
    {
      id: "quarterly-payment",
      label: "Quarterly Tax Payment",
      value: fmt(quarterlyPayment),
      highlighted: true,
      color: "warning",
      description: "Pay this each quarter (Apr 15, Jun 15, Sep 15, Jan 15)",
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
      description: seTaxNote,
    },
    {
      id: "federal-tax",
      label: "Federal Income Tax",
      value: fmt(federalTax),
      description: "2026 brackets (IRS Rev. Proc. 2025-32), after standard deduction",
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
