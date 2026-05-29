import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

export function calcClientProfitability(inputs: CalculatorInputs): CalculatorResult[] {
  const monthlyRevenue = parseFloat(inputs.monthlyRevenue ?? "3000") || 0;
  const hoursSpent = parseFloat(inputs.hoursSpent ?? "30") || 0;
  const hourlyRate = parseFloat(inputs.hourlyRate ?? "75") || 0;
  const nonBillableTime = parseFloat(inputs.nonBillableTime ?? "5") || 0;

  if (monthlyRevenue <= 0 || hoursSpent <= 0) return [];

  const totalHours = hoursSpent + nonBillableTime;
  const effectiveHourlyRate = monthlyRevenue / totalHours;
  const expectedRevenue = hoursSpent * hourlyRate;
  const surplus = monthlyRevenue - expectedRevenue;
  const profitabilityScore = hourlyRate > 0 ? (effectiveHourlyRate / hourlyRate) * 100 : 0;

  const color = (score: number): "success" | "warning" | "danger" => {
    if (score >= 90) return "success";
    if (score >= 70) return "warning";
    return "danger";
  };

  const fmt = (n: number, dec = 2) =>
    `$${n.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec })}`;

  return [
    {
      id: "effective-rate",
      label: "Effective Hourly Rate",
      value: `${fmt(effectiveHourlyRate)}/hr`,
      highlighted: true,
      color: color(profitabilityScore),
      description: `Revenue ÷ all hours (billable + non-billable)`,
    },
    {
      id: "profitability-score",
      label: "Profitability vs Target",
      value: `${profitabilityScore.toFixed(0)}%`,
      highlighted: true,
      color: color(profitabilityScore),
      description: `Effective rate vs your $${hourlyRate}/hr target`,
    },
    {
      id: "total-hours",
      label: "Total Hours Invested",
      value: `${totalHours.toFixed(1)} hrs`,
      description: `${hoursSpent} billable + ${nonBillableTime} non-billable`,
    },
    {
      id: "revenue-vs-expected",
      label: surplus >= 0 ? "Revenue Surplus" : "Revenue Shortfall",
      value: fmt(Math.abs(surplus), 0),
      color: surplus >= 0 ? "success" : "danger",
      description: `vs billing ${hoursSpent} hrs at standard rate`,
    },
  ];
}
