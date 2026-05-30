import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

// IRS Rev. Proc. 2025-32 — 2026 brackets (TCJA extended by P.L. 119-21)
const STD_DEDUCTION_SINGLE  = 16100;
const STD_DEDUCTION_MARRIED = 32200;
const SS_WAGE_BASE = 184500;  // 2026 Social Security wage base

function federalIncomeTax(taxableIncome: number, filingStatus: string): number {
  if (taxableIncome <= 0) return 0;
  const bracketsSingle = [
    { limit: 12400,   rate: 0.10 },
    { limit: 50400,   rate: 0.12 },
    { limit: 105700,  rate: 0.22 },
    { limit: 201775,  rate: 0.24 },
    { limit: 256225,  rate: 0.32 },
    { limit: 640600,  rate: 0.35 },
    { limit: Infinity, rate: 0.37 },
  ];
  const bracketsMarried = [
    { limit: 24800,   rate: 0.10 },
    { limit: 100800,  rate: 0.12 },
    { limit: 211400,  rate: 0.22 },
    { limit: 403550,  rate: 0.24 },
    { limit: 512450,  rate: 0.32 },
    { limit: 768700,  rate: 0.35 },
    { limit: Infinity, rate: 0.37 },
  ];
  const stdDed = filingStatus === "married" ? STD_DEDUCTION_MARRIED : STD_DEDUCTION_SINGLE;
  const brackets = filingStatus === "married" ? bracketsMarried : bracketsSingle;
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

export function calcFreelanceTakeHomePay(inputs: CalculatorInputs): CalculatorResult[] {
  const grossIncome = parseFloat(inputs.grossIncome ?? "80000") || 0;
  const businessExpenses = parseFloat(inputs.businessExpenses ?? "10000") || 0;
  const filingStatus = inputs.filingStatus ?? "single";
  const stateTaxRate = parseFloat(inputs.stateTaxRate ?? "5") || 0;
  const healthInsurance = parseFloat(inputs.healthInsurance ?? "400") || 0;
  const retirementContribution = parseFloat(inputs.retirementContribution ?? "500") || 0;

  if (grossIncome <= 0) return [];

  const netSEIncome = Math.max(0, grossIncome - businessExpenses);
  const seBase = netSEIncome * 0.9235;

  // SE tax with 2026 SS wage base cap + ACA surtax
  const ssTax = Math.min(seBase, SS_WAGE_BASE) * 0.124;
  const medicareTax = seBase * 0.029;
  const amtThreshold = filingStatus === "married" ? 250000 : 200000;
  const additionalMedicareTax = seBase > amtThreshold ? (seBase - amtThreshold) * 0.009 : 0;
  const seTax = ssTax + medicareTax + additionalMedicareTax;

  const halfSeTaxDeduction = seTax / 2;
  const annualHealthInsurance = healthInsurance * 12;
  const annualRetirement = retirementContribution * 12;

  // Health insurance and retirement contributions reduce AGI before income tax is applied
  const agi = Math.max(0, netSEIncome - halfSeTaxDeduction - annualHealthInsurance - annualRetirement);
  const fedTax = federalIncomeTax(agi, filingStatus);
  const stateTax = agi * (stateTaxRate / 100);

  const totalTaxes = seTax + fedTax + stateTax;
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
      description: "SS (12.4% up to $184,500) + Medicare (2.9%) on 92.35% of net profit",
    },
    {
      id: "income-taxes",
      label: "Income Taxes",
      value: fmt(fedTax + stateTax),
      description: `Federal (2026 brackets) + State (${stateTaxRate}%) — applied after health/retirement deductions`,
    },
    {
      id: "health-insurance",
      label: "Annual Health Insurance",
      value: fmt(annualHealthInsurance),
      description: `$${healthInsurance}/mo × 12 (deducted pre-tax, reducing federal and state income tax)`,
    },
    {
      id: "retirement",
      label: "Annual Retirement Savings",
      value: fmt(annualRetirement),
      description: `$${retirementContribution}/mo × 12 (deducted pre-tax, reducing federal and state income tax)`,
    },
  ];
}
