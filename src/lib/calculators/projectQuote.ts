import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

export function calcProjectQuote(inputs: CalculatorInputs): CalculatorResult[] {
  const estimatedHours = parseFloat(inputs.estimatedHours ?? "40") || 0;
  const hourlyRate = parseFloat(inputs.hourlyRate ?? "75") || 0;
  const complexityBuffer = parseFloat(inputs.complexityBuffer ?? "20") || 0;
  const revisionHours = parseFloat(inputs.revisionHours ?? "5") || 0;
  const expenses = parseFloat(inputs.expenses ?? "0") || 0;

  if (estimatedHours <= 0 || hourlyRate <= 0) return [];

  const bufferedHours = estimatedHours * (1 + complexityBuffer / 100);
  const totalHours = bufferedHours + revisionHours;
  const laborCost = totalHours * hourlyRate;
  const totalProjectCost = laborCost + expenses;
  const effectiveHourlyRate = totalProjectCost / totalHours;

  const fmt = (n: number, dec = 2) =>
    `$${n.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec })}`;

  return [
    {
      id: "total-project-cost",
      label: "Total Project Quote",
      value: fmt(totalProjectCost, 0),
      highlighted: true,
      color: "success",
      description: "Amount to quote the client",
    },
    {
      id: "total-hours",
      label: "Total Hours",
      value: `${totalHours.toFixed(1)} hrs`,
      highlighted: true,
      description: `${bufferedHours.toFixed(1)} buffered + ${revisionHours} revision hours`,
    },
    {
      id: "labor-cost",
      label: "Labor Cost",
      value: fmt(laborCost, 0),
      description: `${totalHours.toFixed(1)} hours × ${fmt(hourlyRate)}/hr`,
    },
    {
      id: "expenses",
      label: "Expenses",
      value: fmt(expenses, 0),
      description: "Out-of-pocket project costs",
    },
    {
      id: "effective-rate",
      label: "Effective Hourly Rate",
      value: `${fmt(effectiveHourlyRate)}/hr`,
      description: "Total quote ÷ total hours",
    },
  ];
}
