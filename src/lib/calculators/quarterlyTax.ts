import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

// 2025 single-filer brackets (progressive, used as conservative estimate)
function estimateFederalTax(taxableIncome: number): number {
  if (taxableIncome <= 0) return 0;
  const brackets = [
    { limit: 11925,   rate: 0.10 },
    { limit: 48475,   rate: 0.12 },
    { limit: 103350,  rate: 0.22 },
    { limit: 197300,  rate: 0.24 },
    { limit: 250525,  rate: 0.32 },
    { limit: 626350,  rate: 0.35 },
    { limit: Infinity, rate: 0.37 },
  ];
  const STANDARD_DEDUCTION_2025 = 15000;
  const agi = Math.max(0, taxableIncome - STANDARD_DEDUCTION_2025);
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

export function calcQuarterlyTax(inputs: CalculatorInputs): CalculatorResult[] {
  const annualNetIncome = parseFloat(inputs.annualNetIncome ?? "60000") || 0;
  const priorYearTaxes = parseFloat(inputs.priorYearTaxes ?? "0") || 0;
  const alreadyPaidThisYear = parseFloat(inputs.alreadyPaidThisYear ?? "0") || 0;

  if (annualNetIncome <= 0) return [];

  const seTax = annualNetIncome * 0.9235 * 0.153;
  const halfSeTax = seTax / 2;
  const taxableIncome = Math.max(0, annualNetIncome - halfSeTax);
  const estimatedIncomeTax = estimateFederalTax(taxableIncome);
  const estimatedAnnualTax = seTax + estimatedIncomeTax;

  // Safe harbor: avoid underpayment penalty by paying the LESSER of:
  // (a) 100% of prior year's total tax, or (b) current year estimate
  // Paying either amount guarantees no underpayment penalty.
  const safeHarborAmount = priorYearTaxes > 0
    ? Math.min(estimatedAnnualTax, priorYearTaxes)
    : estimatedAnnualTax;

  const remainingTax = Math.max(0, safeHarborAmount - alreadyPaidThisYear);
  // Divide remaining balance over 4 equal quarterly payments
  const quarterlyPayment = remainingTax / 4;

  const setAside = annualNetIncome > 0 ? (estimatedAnnualTax / annualNetIncome) * 100 : 0;

  const fmt = (n: number, dec = 0) =>
    `$${n.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec })}`;

  return [
    {
      id: "quarterly-payment",
      label: "Quarterly Payment",
      value: fmt(quarterlyPayment),
      highlighted: true,
      color: "warning",
      description: "Remaining balance ÷ 4 — safe harbor amount minus payments already made",
    },
    {
      id: "annual-tax",
      label: "Estimated Annual Tax",
      value: fmt(estimatedAnnualTax),
      highlighted: true,
      description: "SE tax + federal income tax (2025 brackets, single filer)",
    },
    {
      id: "se-tax",
      label: "Self-Employment Tax",
      value: fmt(seTax),
      description: "15.3% on 92.35% of net income",
    },
    {
      id: "income-tax-estimate",
      label: "Estimated Income Tax",
      value: fmt(estimatedIncomeTax),
      description: "2025 single-filer brackets with standard deduction",
    },
    {
      id: "set-aside-rate",
      label: "% to Set Aside",
      value: `${setAside.toFixed(1)}%`,
      description: "Percent of income to reserve for taxes each time you're paid",
    },
  ];
}
