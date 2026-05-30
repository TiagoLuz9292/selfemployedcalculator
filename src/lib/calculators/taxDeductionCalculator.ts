import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

export function calcTaxDeduction(inputs: CalculatorInputs): CalculatorResult[] {
  const grossIncome = parseFloat(inputs.grossIncome ?? "80000") || 0;
  const homeOfficeSqFt = parseFloat(inputs.homeOfficeSqFt ?? "0") || 0;
  const totalHomeSqFt = parseFloat(inputs.totalHomeSqFt ?? "1000") || 1;
  const monthlyRentOrMortgage = parseFloat(inputs.monthlyRentOrMortgage ?? "0") || 0;
  const internetMonthly = parseFloat(inputs.internetMonthly ?? "60") || 0;
  const internetBizPct = parseFloat(inputs.internetBizPct ?? "70") || 0;
  const phoneMonthly = parseFloat(inputs.phoneMonthly ?? "0") || 0;
  const phoneBizPct = parseFloat(inputs.phoneBizPct ?? "50") || 0;
  const softwareAnnual = parseFloat(inputs.softwareAnnual ?? "0") || 0;
  const equipmentAnnual = parseFloat(inputs.equipmentAnnual ?? "0") || 0;
  const professionalDevelopment = parseFloat(inputs.professionalDevelopment ?? "0") || 0;
  const healthInsurancePremium = parseFloat(inputs.healthInsurancePremium ?? "0") || 0;
  const retirementContributions = parseFloat(inputs.retirementContributions ?? "0") || 0;
  const travelAnnual = parseFloat(inputs.travelAnnual ?? "0") || 0;
  const otherExpenses = parseFloat(inputs.otherExpenses ?? "0") || 0;
  const marginalTaxRate = parseFloat(inputs.marginalTaxRate ?? "22") || 0;

  // Home office: area % applies to rent/mortgage and utilities (IRS regular method)
  const homeOfficePct = totalHomeSqFt > 0 ? homeOfficeSqFt / totalHomeSqFt : 0;
  const homeOfficeDeduction = monthlyRentOrMortgage * 12 * homeOfficePct;

  // Internet: deducted at business-use %, independent of home office area
  const internetDeduction = internetMonthly * 12 * (internetBizPct / 100);
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
      description: "Total business expenses deductible from taxable income",
    },
    {
      id: "tax-savings",
      label: "Estimated Tax Savings",
      value: fmt(taxSavings),
      highlighted: true,
      color: "success",
      description: `At your ${marginalTaxRate}% marginal rate — actual savings include SE tax reduction too`,
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
      description: `${(homeOfficePct * 100).toFixed(1)}% of home area — applied to rent/mortgage`,
    },
    {
      id: "internet-phone",
      label: "Internet + Phone Deduction",
      value: fmt(internetDeduction + phoneDeduction),
      description: `Internet at ${internetBizPct}% business use; phone at ${phoneBizPct}% business use`,
    },
    {
      id: "software-equipment",
      label: "Software + Equipment",
      value: fmt(softwareAnnual + equipmentAnnual),
      description: "Business tools, subscriptions, hardware (Section 179 eligible)",
    },
  ];
}
