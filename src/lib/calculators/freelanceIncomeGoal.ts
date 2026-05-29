import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

export function calcFreelanceIncomeGoal(inputs: CalculatorInputs): CalculatorResult[] {
  const targetTakeHome = parseFloat(inputs.targetTakeHome ?? "60000") || 0;
  const taxRate = parseFloat(inputs.taxRate ?? "30") || 0;
  const businessExpenses = parseFloat(inputs.businessExpenses ?? "10000") || 0;
  const savingsGoal = parseFloat(inputs.savingsGoal ?? "10000") || 0;

  if (targetTakeHome <= 0) return [];

  const totalNetNeeded = targetTakeHome + savingsGoal;
  const grossNeeded = (totalNetNeeded + businessExpenses) / (1 - taxRate / 100);
  const monthlyGross = grossNeeded / 12;
  const estimatedTaxes = grossNeeded * (taxRate / 100);

  const fmt = (n: number, dec = 0) =>
    `$${n.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec })}`;

  return [
    {
      id: "gross-needed",
      label: "Annual Gross Revenue Needed",
      value: fmt(grossNeeded),
      highlighted: true,
      color: "success",
      description: "Before taxes and business expenses",
    },
    {
      id: "monthly-gross",
      label: "Monthly Revenue Target",
      value: fmt(monthlyGross),
      highlighted: true,
      color: "success",
      description: "Gross revenue needed per month",
    },
    {
      id: "estimated-taxes",
      label: "Estimated Annual Taxes",
      value: fmt(estimatedTaxes),
      description: `${taxRate}% effective tax rate on gross`,
    },
    {
      id: "business-expenses",
      label: "Business Expenses",
      value: fmt(businessExpenses),
      description: "Annual overhead and operating costs",
    },
    {
      id: "take-home",
      label: "After-Tax Take-Home",
      value: fmt(targetTakeHome),
      color: "success",
      description: "Your target personal income",
    },
  ];
}
