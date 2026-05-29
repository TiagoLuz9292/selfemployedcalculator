import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

export function calcRetainerRate(inputs: CalculatorInputs): CalculatorResult[] {
  const hoursPerMonth = parseFloat(inputs.hoursPerMonth ?? "20") || 0;
  const hourlyRate = parseFloat(inputs.hourlyRate ?? "75") || 0;
  const retainerDiscount = parseFloat(inputs.retainerDiscount ?? "10") || 0;

  if (hoursPerMonth <= 0 || hourlyRate <= 0) return [];

  const fullRate = hoursPerMonth * hourlyRate;
  const discountAmount = fullRate * (retainerDiscount / 100);
  const monthlyRetainer = fullRate - discountAmount;
  const effectiveHourlyRate = monthlyRetainer / hoursPerMonth;

  const fmt = (n: number, dec = 2) =>
    `$${n.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec })}`;

  return [
    {
      id: "monthly-retainer",
      label: "Monthly Retainer",
      value: fmt(monthlyRetainer, 0),
      highlighted: true,
      color: "success",
      description: `${hoursPerMonth} hrs/month at discounted rate`,
    },
    {
      id: "annual-value",
      label: "Annual Contract Value",
      value: fmt(monthlyRetainer * 12, 0),
      highlighted: true,
      description: "12 months of recurring revenue",
    },
    {
      id: "full-rate",
      label: "Without Retainer Discount",
      value: fmt(fullRate, 0),
      description: `${hoursPerMonth} hrs × ${fmt(hourlyRate)}/hr standard rate`,
    },
    {
      id: "discount-amount",
      label: "Monthly Discount",
      value: fmt(discountAmount, 0),
      description: `${retainerDiscount}% reduction for guaranteed work`,
    },
    {
      id: "effective-rate",
      label: "Effective Hourly Rate",
      value: `${fmt(effectiveHourlyRate)}/hr`,
      description: "Your rate under this retainer",
    },
  ];
}
