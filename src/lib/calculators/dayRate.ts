import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

export function calcDayRate(inputs: CalculatorInputs): CalculatorResult[] {
  const hourlyRate = parseFloat(inputs.hourlyRate ?? "75") || 0;
  const hoursPerDay = parseFloat(inputs.hoursPerDay ?? "8") || 8;
  const dayRateMarkup = parseFloat(inputs.dayRateMarkup ?? "0") || 0;

  const baseDay = hourlyRate * hoursPerDay;
  const markupAmount = baseDay * (dayRateMarkup / 100);
  const finalDayRate = baseDay + markupAmount;

  const fmt = (n: number) =>
    `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return [
    {
      id: "final-day-rate",
      label: "Day Rate",
      value: fmt(finalDayRate),
      highlighted: true,
      color: "success",
      description: `Based on ${hoursPerDay} hours/day${dayRateMarkup > 0 ? ` with ${dayRateMarkup}% markup` : ""}`,
    },
    {
      id: "base-day-rate",
      label: "Base Day Rate",
      value: fmt(baseDay),
      description: `$${hourlyRate}/hr × ${hoursPerDay} hours`,
    },
    {
      id: "markup-amount",
      label: "Markup Amount",
      value: fmt(markupAmount),
      description: `${dayRateMarkup}% premium for day commitment`,
    },
    {
      id: "weekly-equivalent",
      label: "Weekly Equivalent (5 days)",
      value: fmt(finalDayRate * 5),
      description: "5-day week at this day rate",
    },
  ];
}
