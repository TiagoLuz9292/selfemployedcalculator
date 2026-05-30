import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

// 2025 federal brackets (single and married filing jointly)
function federalIncomeTax(taxableIncome: number, filingStatus: string): number {
  if (taxableIncome <= 0) return 0;
  const bracketsSingle = [
    { limit: 11925,   rate: 0.10 },
    { limit: 48475,   rate: 0.12 },
    { limit: 103350,  rate: 0.22 },
    { limit: 197300,  rate: 0.24 },
    { limit: 250525,  rate: 0.32 },
    { limit: 626350,  rate: 0.35 },
    { limit: Infinity, rate: 0.37 },
  ];
  const bracketsMarried = [
    { limit: 23850,   rate: 0.10 },
    { limit: 96950,   rate: 0.12 },
    { limit: 206700,  rate: 0.22 },
    { limit: 394600,  rate: 0.24 },
    { limit: 501050,  rate: 0.32 },
    { limit: 751600,  rate: 0.35 },
    { limit: Infinity, rate: 0.37 },
  ];
  const standardDeduction = filingStatus === "married" ? 30000 : 15000;
  const brackets = filingStatus === "married" ? bracketsMarried : bracketsSingle;
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

export function calcFreelanceTakeHomePay(inputs: CalculatorInputs): CalculatorResult[] {
  const grossIncome = parseFloat(inputs.grossIncome ?? "80000") || 0;
  const businessExpenses = parseFloat(inputs.businessExpenses ?? "10000") || 0;
  const filingStatus = inputs.filingStatus ?? "single";
  const stateTaxRate = parseFloat(inputs.stateTaxRate ?? "5") || 0;
  const healthInsurance = parseFloat(inputs.healthInsurance ?? "400") || 0;
  const retirementContribution = parseFloat(inputs.retirementContribution ?? "500") || 0;

  if (grossIncome <= 0) return [];

  const netSEIncome = Math.max(0, grossIncome - businessExpenses);
  const seTax = netSEIncome * 0.9235 * 0.153;
  const halfSeTaxDeduction = seTax / 2;
  const annualHealthInsurance = healthInsurance * 12;
  const annualRetirement = retirementContribution * 12;

  // Health insurance and retirement contributions reduce AGI before income tax is applied
  const agi = Math.max(0, netSEIncome - halfSeTaxDeduction - annualHealthInsurance - annualRetirement);
  const federalTax = federalIncomeTax(agi, filingStatus);
  const stateTax = agi * (stateTaxRate / 100);

  const totalTaxes = seTax + federalTax + stateTax;
  const takeHome = grossIncome - businessExpenses - totalTaxes - annualHealthInsurance - annualRetirement;
  const monthlyTakeHome = takeHome / 12;

  const fmt = (n: number, dec = 0) =>
    `$${n.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec })}`;

  return [
    {
      id: "annual-take-home",
      label: "Annual Take-Home Pay",
      value: fmt(takeHome),
      highlighted: true,
      color: takeHome > 0 ? "success" : "danger",
      description: "After all taxes, health insurance, and retirement contributions",
    },
    {
      id: "monthly-take-home",
      label: "Monthly Take-Home Pay",
      value: fmt(monthlyTakeHome),
      highlighted: true,
      color: monthlyTakeHome > 0 ? "success" : "danger",
      description: "Annual take-home ÷ 12",
    },
    {
      id: "se-tax",
      label: "Self-Employment Tax",
      value: fmt(seTax),
      description: "15.3% on 92.35% of net profit (Social Security + Medicare)",
    },
    {
      id: "income-taxes",
      label: "Income Taxes",
      value: fmt(federalTax + stateTax),
      description: `Federal (2025 brackets) + State (${stateTaxRate}%) — applied after health/retirement deductions`,
    },
    {
      id: "health-insurance",
      label: "Annual Health Insurance",
      value: fmt(annualHealthInsurance),
      description: `$${healthInsurance}/mo × 12 (deducted pre-tax from federal income tax)`,
    },
    {
      id: "retirement",
      label: "Annual Retirement Savings",
      value: fmt(annualRetirement),
      description: `$${retirementContribution}/mo × 12 (deducted pre-tax from federal income tax)`,
    },
  ];
}
