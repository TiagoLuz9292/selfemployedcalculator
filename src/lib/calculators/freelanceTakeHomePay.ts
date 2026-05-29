import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

export function calcFreelanceTakeHomePay(inputs: CalculatorInputs): CalculatorResult[] {
  const grossIncome = parseFloat(inputs.grossIncome ?? "80000") || 0;
  const businessExpenses = parseFloat(inputs.businessExpenses ?? "10000") || 0;
  const federalTaxRate = parseFloat(inputs.federalTaxRate ?? "22") || 0;
  const stateTaxRate = parseFloat(inputs.stateTaxRate ?? "5") || 0;
  const healthInsurance = parseFloat(inputs.healthInsurance ?? "400") || 0;
  const retirementContribution = parseFloat(inputs.retirementContribution ?? "500") || 0;

  if (grossIncome <= 0) return [];

  const netProfit = Math.max(0, grossIncome - businessExpenses);
  const seTax = netProfit * 0.9235 * 0.153;
  const halfSeTaxDeduction = seTax / 2;
  const taxableIncome = Math.max(0, netProfit - halfSeTaxDeduction);
  const federalTax = taxableIncome * (federalTaxRate / 100);
  const stateTax = taxableIncome * (stateTaxRate / 100);
  const annualHealthInsurance = healthInsurance * 12;
  const annualRetirement = retirementContribution * 12;
  const takeHome = grossIncome - businessExpenses - seTax - federalTax - stateTax - annualHealthInsurance - annualRetirement;
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
      description: "After all taxes, insurance, and retirement",
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
      description: "15.3% on 92.35% of net profit",
    },
    {
      id: "income-taxes",
      label: "Income Taxes",
      value: fmt(federalTax + stateTax),
      description: `Federal (${federalTaxRate}%) + State (${stateTaxRate}%)`,
    },
    {
      id: "health-insurance",
      label: "Annual Health Insurance",
      value: fmt(annualHealthInsurance),
      description: `$${healthInsurance}/mo × 12`,
    },
    {
      id: "retirement",
      label: "Annual Retirement Savings",
      value: fmt(annualRetirement),
      description: `$${retirementContribution}/mo × 12`,
    },
  ];
}
