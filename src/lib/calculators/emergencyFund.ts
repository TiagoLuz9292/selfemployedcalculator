import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

export function calcEmergencyFund(inputs: CalculatorInputs): CalculatorResult[] {
  const monthlyExpenses = parseFloat(inputs.monthlyExpenses ?? "3000") || 0;
  const monthsCoverage = parseFloat(inputs.monthsCoverage ?? "6") || 6;
  const currentSavings = parseFloat(inputs.currentSavings ?? "5000") || 0;

  if (monthlyExpenses <= 0) return [];

  const targetFund = monthlyExpenses * monthsCoverage;
  const stillNeeded = Math.max(0, targetFund - currentSavings);
  const percentFunded = Math.min(100, (currentSavings / targetFund) * 100);

  const fmt = (n: number, dec = 0) =>
    `$${n.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec })}`;

  const monthsAlreadyCovered = currentSavings / monthlyExpenses;

  return [
    {
      id: "target-fund",
      label: "Target Emergency Fund",
      value: fmt(targetFund),
      highlighted: true,
      color: stillNeeded === 0 ? "success" : "warning",
      description: `${monthsCoverage} months × ${fmt(monthlyExpenses)}/month expenses`,
    },
    {
      id: "still-needed",
      label: stillNeeded > 0 ? "Still Need to Save" : "Fully Funded!",
      value: stillNeeded > 0 ? fmt(stillNeeded) : fmt(currentSavings - targetFund) + " surplus",
      highlighted: true,
      color: stillNeeded === 0 ? "success" : "danger",
      description: stillNeeded > 0 ? "Amount left to reach your goal" : "You have met your emergency fund target",
    },
    {
      id: "percent-funded",
      label: "Funded",
      value: `${percentFunded.toFixed(0)}%`,
      color: percentFunded >= 100 ? "success" : percentFunded >= 50 ? "warning" : "danger",
      description: `${monthsAlreadyCovered.toFixed(1)} months already covered`,
    },
    {
      id: "current-savings",
      label: "Current Savings",
      value: fmt(currentSavings),
      description: "Your existing emergency fund balance",
    },
  ];
}
