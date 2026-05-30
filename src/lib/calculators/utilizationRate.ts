import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

export function calcUtilizationRate(inputs: CalculatorInputs): CalculatorResult[] {
  const billableHoursRaw = parseFloat(inputs.billableHours ?? "120") || 0;
  const totalWorkingHours = parseFloat(inputs.totalWorkingHours ?? "176") || 0;

  if (totalWorkingHours <= 0) return [];

  // Billable hours cannot exceed total working hours
  const billableHours = Math.min(billableHoursRaw, totalWorkingHours);
  const utilizationRate = (billableHours / totalWorkingHours) * 100;
  const nonBillableHours = totalWorkingHours - billableHours;
  const nonBillablePct = (nonBillableHours / totalWorkingHours) * 100;

  const color = (rate: number): "success" | "warning" | "danger" => {
    if (rate >= 70) return "success";
    if (rate >= 50) return "warning";
    return "danger";
  };

  const rating =
    utilizationRate >= 80 ? "Excellent"
    : utilizationRate >= 70 ? "Good"
    : utilizationRate >= 55 ? "Average"
    : "Below average — review admin processes";

  const overEntryNote = billableHoursRaw > totalWorkingHours
    ? ` (capped at total working hours — billable cannot exceed total)`
    : "";

  return [
    {
      id: "utilization-rate",
      label: "Utilization Rate",
      value: `${utilizationRate.toFixed(1)}%`,
      highlighted: true,
      color: color(utilizationRate),
      description: `${billableHours} billable ÷ ${totalWorkingHours} total hours${overEntryNote}`,
    },
    {
      id: "rating",
      label: "Performance",
      value: rating,
      highlighted: true,
      color: color(utilizationRate),
      description: "Benchmark: 70%+ is good for freelancers; above 85% means time to raise rates",
    },
    {
      id: "non-billable-hours",
      label: "Non-Billable Hours",
      value: `${nonBillableHours.toFixed(1)} hrs (${nonBillablePct.toFixed(1)}%)`,
      description: "Admin, sales, learning, and other non-client time",
    },
  ];
}
