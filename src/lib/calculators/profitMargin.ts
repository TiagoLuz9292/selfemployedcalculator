import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

export function calcProfitMargin(inputs: CalculatorInputs): CalculatorResult[] {
  const revenue = parseFloat(inputs.revenue ?? "80000") || 0;
  const cogs = parseFloat(inputs.cogs ?? "10000") || 0;
  const operatingExpenses = parseFloat(inputs.operatingExpenses ?? "15000") || 0;

  if (revenue <= 0) return [];

  const grossProfit = revenue - cogs;
  const grossMargin = (grossProfit / revenue) * 100;
  const operatingProfit = grossProfit - operatingExpenses;
  const netMargin = (operatingProfit / revenue) * 100;

  const fmt = (n: number, dec = 0) =>
    `$${n.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec })}`;

  const marginColor = (pct: number): "success" | "warning" | "danger" => {
    if (pct >= 30) return "success";
    if (pct >= 15) return "warning";
    return "danger";
  };

  return [
    {
      id: "gross-margin",
      label: "Gross Profit Margin",
      value: `${grossMargin.toFixed(1)}%`,
      highlighted: true,
      color: marginColor(grossMargin),
      description: `(Revenue - Direct Costs) ÷ Revenue`,
    },
    {
      id: "net-margin",
      label: "Net Profit Margin",
      value: `${netMargin.toFixed(1)}%`,
      highlighted: true,
      color: marginColor(netMargin),
      description: `After all operating expenses`,
    },
    {
      id: "gross-profit",
      label: "Gross Profit",
      value: fmt(grossProfit),
      description: `Revenue minus direct costs`,
    },
    {
      id: "operating-profit",
      label: "Operating Profit (Net)",
      value: fmt(operatingProfit),
      color: operatingProfit >= 0 ? "success" : "danger",
      description: "Gross profit minus operating expenses",
    },
  ];
}
