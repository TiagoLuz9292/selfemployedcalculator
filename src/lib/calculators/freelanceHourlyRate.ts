import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

export function calcFreelanceHourlyRate(inputs: CalculatorInputs): CalculatorResult[] {
  const desiredAnnualIncome = parseFloat(inputs.desiredAnnualIncome ?? "80000") || 0;
  const billableHoursPerWeek = parseFloat(inputs.billableHoursPerWeek ?? "30") || 30;
  const vacationWeeks = parseFloat(inputs.vacationWeeks ?? "4") || 0;
  const overheadExpenses = parseFloat(inputs.overheadExpenses ?? "5000") || 0;
  const profitMarginPct = parseFloat(inputs.profitMarginPct ?? "20") || 0;

  const workingWeeks = 52 - vacationWeeks;
  const annualBillableHours = billableHoursPerWeek * workingWeeks;

  if (annualBillableHours <= 0) return [];

  const targetRevenue = (desiredAnnualIncome + overheadExpenses) / (1 - profitMarginPct / 100);
  const minimumHourlyRate = targetRevenue / annualBillableHours;

  const fmt = (n: number, decimals = 2) =>
    `$${n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}`;

  return [
    {
      id: "hourly-rate",
      label: "Minimum Hourly Rate",
      value: fmt(minimumHourlyRate),
      highlighted: true,
      color: minimumHourlyRate > 0 ? "success" : "danger",
      description: "The hourly rate needed to meet your income and business goals",
    },
    {
      id: "target-revenue",
      label: "Annual Revenue Target",
      value: fmt(targetRevenue, 0),
      highlighted: true,
      description: "Gross revenue needed including overhead and profit margin",
    },
    {
      id: "billable-hours",
      label: "Annual Billable Hours",
      value: `${Math.round(annualBillableHours).toLocaleString("en-US")} hrs`,
      description: `${billableHoursPerWeek} hrs/week × ${workingWeeks} working weeks`,
    },
    {
      id: "working-weeks",
      label: "Working Weeks",
      value: `${workingWeeks} weeks`,
      description: `52 weeks minus ${vacationWeeks} vacation weeks`,
    },
  ];
}
