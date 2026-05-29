import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

export function calcBillableHours(inputs: CalculatorInputs): CalculatorResult[] {
  const targetAnnualIncome = parseFloat(inputs.targetAnnualIncome ?? "80000") || 0;
  const hourlyRate = parseFloat(inputs.hourlyRate ?? "75") || 0;
  const vacationDays = parseFloat(inputs.vacationDays ?? "20") || 0;
  const sickDays = parseFloat(inputs.sickDays ?? "5") || 0;
  const adminTimePct = parseFloat(inputs.adminTimePct ?? "20") || 0;

  if (targetAnnualIncome <= 0 || hourlyRate <= 0) return [];

  const workingDaysPerYear = 260 - vacationDays - sickDays;
  const availableHoursPerYear = workingDaysPerYear * 8;
  const adminHoursPerYear = availableHoursPerYear * (adminTimePct / 100);
  const billableHoursAvailable = availableHoursPerYear - adminHoursPerYear;
  const billableHoursNeeded = targetAnnualIncome / hourlyRate;
  const billableHoursPerWeek = billableHoursNeeded / (workingDaysPerYear / 5);
  const shortfall = billableHoursNeeded - billableHoursAvailable;

  return [
    {
      id: "billable-needed",
      label: "Billable Hours Needed/Year",
      value: `${Math.ceil(billableHoursNeeded).toLocaleString("en-US")} hrs`,
      highlighted: true,
      color: shortfall > 0 ? "danger" : "success",
      description: `$${targetAnnualIncome.toLocaleString("en-US")} ÷ $${hourlyRate}/hr`,
    },
    {
      id: "billable-per-week",
      label: "Billable Hours/Week",
      value: `${billableHoursPerWeek.toFixed(1)} hrs/week`,
      highlighted: true,
      color: billableHoursPerWeek > 40 ? "danger" : billableHoursPerWeek > 30 ? "warning" : "success",
      description: "Weekly target to hit your income goal",
    },
    {
      id: "billable-available",
      label: "Billable Hours Available/Year",
      value: `${Math.floor(billableHoursAvailable).toLocaleString("en-US")} hrs`,
      description: `After ${adminTimePct}% admin time deduction`,
    },
    {
      id: "shortfall",
      label: shortfall > 0 ? "Hours Shortfall" : "Hours Surplus",
      value: `${Math.abs(shortfall).toFixed(0)} hrs`,
      color: shortfall > 0 ? "danger" : "success",
      description: shortfall > 0 ? "You need to raise rates or reduce admin time" : "Capacity buffer above your income target",
    },
  ];
}
