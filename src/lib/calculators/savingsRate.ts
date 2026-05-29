import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

export function calcSavingsRate(inputs: CalculatorInputs): CalculatorResult[] {
  const monthlyIncome = parseFloat(inputs.monthlyIncome ?? "6000") || 0;
  const monthlyExpenses = parseFloat(inputs.monthlyExpenses ?? "3500") || 0;
  const targetSavingsRate = parseFloat(inputs.targetSavingsRate ?? "20") || 0;

  if (monthlyIncome <= 0) return [];

  const currentSavings = monthlyIncome - monthlyExpenses;
  const currentSavingsRate = (currentSavings / monthlyIncome) * 100;
  const targetSavingsAmount = monthlyIncome * (targetSavingsRate / 100);
  const gap = targetSavingsAmount - currentSavings;

  const rateColor = (rate: number): "success" | "warning" | "danger" => {
    if (rate >= 20) return "success";
    if (rate >= 10) return "warning";
    return "danger";
  };

  const fmt = (n: number, dec = 0) =>
    `$${n.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec })}`;

  return [
    {
      id: "savings-rate",
      label: "Current Savings Rate",
      value: `${currentSavingsRate.toFixed(1)}%`,
      highlighted: true,
      color: rateColor(currentSavingsRate),
      description: `Saving ${fmt(currentSavings)}/month of ${fmt(monthlyIncome)} income`,
    },
    {
      id: "monthly-savings",
      label: "Monthly Savings",
      value: fmt(currentSavings),
      highlighted: true,
      color: currentSavings >= 0 ? "success" : "danger",
      description: "Income minus expenses",
    },
    {
      id: "target-amount",
      label: `Target (${targetSavingsRate}% rate)`,
      value: fmt(targetSavingsAmount),
      description: `${targetSavingsRate}% of ${fmt(monthlyIncome)} monthly income`,
    },
    {
      id: "gap",
      label: gap > 0 ? "Monthly Gap to Target" : "Above Target By",
      value: fmt(Math.abs(gap)),
      color: gap > 0 ? "danger" : "success",
      description: gap > 0 ? "Additional savings needed to hit your target rate" : "You are saving more than your target",
    },
  ];
}
