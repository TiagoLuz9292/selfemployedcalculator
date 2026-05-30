import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

export function calcTaxDeduction(inputs: CalculatorInputs): CalculatorResult[] {
  const grossIncome = parseFloat(inputs.grossIncome ?? "80000") || 0;
  const homeOfficeSqFt = parseFloat(inputs.homeOfficeSqFt ?? "0") || 0;
  const totalHomeSqFt = parseFloat(inputs.totalHomeSqFt ?? "1000") || 1;
  const monthlyRentOrMortgage = parseFloat(inputs.monthlyRentOrMortgage ?? "0") || 0;
  const internetMonthly = parseFloat(inputs.internetMonthly ?? "60") || 0;
  const phoneMonthly = parseFloat(inputs.phoneMonthly ?? "0") || 0;
  const phoneBizPct = parseFloat(inputs.phoneBizPct ?? "50") || 0;
  const softwareAnnual = parseFloat(inputs.softwareAnnual ?? "0") || 0;
  const equipmentAnnual = parseFloat(inputs.equipmentAnnual ?? "0") || 0;
  const professionalDevelopment = parseFloat(inputs.professionalDevelopment ?? "0") || 0;
  const healthInsurancePremium = parseFloat(inputs.healthInsurancePremium ?? "0") || 0;
  const retirementContributions = parseFloat(inputs.retirementContributions ?? "0") || 0;
  const travelAnnual = parseFloat(inputs.travelAnnual ?? "0") || 0;
  const otherExpenses = parseFloat(inputs.otherExpenses ?? "0") || 0;
  const marginalTaxRate = parseFloat(inputs.marginalTaxRate ?? "25") || 0;

  const homeOfficePct = totalHomeSqFt > 0 ? homeOfficeSqFt / totalHomeSqFt : 0;
  const homeOfficeDeduction = monthlyRentOrMortgage * 12 * homeOfficePct;
  const internetDeduction = internetMonthly * 12 * homeOfficePct;
  const phoneDeduction = phoneMonthly * 12 * (phoneBizPct / 100);

  const totalDeductions =
    homeOfficeDeduction +
    internetDeduction +
    phoneDeduction +
    softwareAnnual +
    equipmentAnnual +
    professionalDevelopment +
    healthInsurancePremium +
    retirementContributions +
    travelAnnual +
    otherExpenses;

  const taxSavings = totalDeductions * (marginalTaxRate / 100);
  const taxableIncomeAfterDeductions = Math.max(0, grossIncome - totalDeductions);

  const fmt = (n: number) =>
    `$${n.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;

  return [
    {
      id: "total-deductions",
      label: "Total Deductions",
      value: fmt(totalDeductions),
      highlighted: true,
      color: "success",
      description: "Total business expenses you can deduct from taxable income",
    },
    {
      id: "tax-savings",
      label: "Estimated Tax Savings",
      value: fmt(taxSavings),
      highlighted: true,
      color: "success",
      description: `At your ${marginalTaxRate}% marginal rate`,
    },
    {
      id: "taxable-income",
      label: "Taxable Income After Deductions",
      value: fmt(taxableIncomeAfterDeductions),
      description: "Gross income minus all deductions",
    },
    {
      id: "home-office",
      label: "Home Office Deduction",
      value: fmt(homeOfficeDeduction),
      description: `${(homeOfficePct * 100).toFixed(1)}% of your home used for business`,
    },
    {
      id: "internet-phone",
      label: "Internet + Phone Deduction",
      value: fmt(internetDeduction + phoneDeduction),
      description: "Business-use portion of internet and phone bills",
    },
    {
      id: "software-equipment",
      label: "Software + Equipment",
      value: fmt(softwareAnnual + equipmentAnnual),
      description: "Business tools, subscriptions, hardware (Section 179 eligible)",
    },
  ];
}
