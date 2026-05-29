import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

export function calcBreakEven(inputs: CalculatorInputs): CalculatorResult[] {
  const monthlyFixedCosts = parseFloat(inputs.monthlyFixedCosts ?? "3000") || 0;
  const hourlyRate = parseFloat(inputs.hourlyRate ?? "75") || 0;
  const variableCostPct = parseFloat(inputs.variableCostPct ?? "10") || 0;

  if (hourlyRate <= 0) return [];

  const effectiveHourlyRate = hourlyRate * (1 - variableCostPct / 100);
  const breakEvenHours = monthlyFixedCosts / effectiveHourlyRate;
  const breakEvenRevenue = monthlyFixedCosts / (1 - variableCostPct / 100);
  const breakEvenDays = breakEvenHours / 8;
  const dailyHoursNeeded = breakEvenHours / 22; // ~22 working days/month

  const fmt = (n: number, dec = 0) =>
    `$${n.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec })}`;

  return [
    {
      id: "break-even-hours",
      label: "Break-Even Hours/Month",
      value: `${Math.ceil(breakEvenHours)} hrs`,
      highlighted: true,
      color: breakEvenHours > 120 ? "danger" : breakEvenHours > 80 ? "warning" : "success",
      description: "Minimum billable hours to cover all costs",
    },
    {
      id: "break-even-revenue",
      label: "Break-Even Revenue/Month",
      value: fmt(breakEvenRevenue),
      highlighted: true,
      color: "warning",
      description: "Minimum monthly revenue needed",
    },
    {
      id: "break-even-days",
      label: "Equivalent Working Days",
      value: `${breakEvenDays.toFixed(1)} days`,
      description: "Break-even hours ÷ 8 hours/day",
    },
    {
      id: "daily-hours",
      label: "Daily Hours Needed",
      value: `${dailyHoursNeeded.toFixed(1)} hrs/day`,
      description: "Across 22 working days to break even",
    },
  ];
}
