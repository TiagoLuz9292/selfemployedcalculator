import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

export function calcSalaryToFreelanceRate(inputs: CalculatorInputs): CalculatorResult[] {
  const annualSalary = parseFloat(inputs.annualSalary ?? "80000") || 0;
  const employerBenefitsValue = parseFloat(inputs.employerBenefitsValue ?? "12000") || 0;
  const billableHoursPerWeek = parseFloat(inputs.billableHoursPerWeek ?? "30") || 0;
  const vacationWeeks = parseFloat(inputs.vacationWeeks ?? "4") || 0;
  const overheadExpenses = parseFloat(inputs.overheadExpenses ?? "4000") || 0;
  const profitBuffer = parseFloat(inputs.profitBuffer ?? "20") || 0;

  if (annualSalary <= 0 || billableHoursPerWeek <= 0) return [];

  const totalCompensation = annualSalary + employerBenefitsValue;
  const workingWeeks = Math.max(1, 52 - vacationWeeks);
  const billableHoursPerYear = billableHoursPerWeek * workingWeeks;

  // SE tax adds ~14.1% to effective cost vs employee (employer pays half of 15.3%)
  const seTaxExtra = annualSalary * 0.0765;
  const targetRevenue = totalCompensation + seTaxExtra + overheadExpenses;
  const breakEvenRate = billableHoursPerYear > 0 ? targetRevenue / billableHoursPerYear : 0;
  const recommendedRate = breakEvenRate * (1 + profitBuffer / 100);
  const equivalentHourlyEmployed = annualSalary / (52 * 40);

  const fmt = (n: number) =>
    `$${n.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
  const fmtRate = (n: number) =>
    `$${n.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}/hr`;

  return [
    {
      id: "recommended-rate",
      label: "Recommended Freelance Rate",
      value: fmtRate(recommendedRate),
      highlighted: true,
      color: "success",
      description: `Matches your salary equivalent plus ${profitBuffer}% profit buffer`,
    },
    {
      id: "break-even-rate",
      label: "Break-Even Rate",
      value: fmtRate(breakEvenRate),
      highlighted: true,
      color: "warning",
      description: "Minimum rate to match your full employee compensation",
    },
    {
      id: "employed-hourly",
      label: "Equivalent Employee Rate",
      value: fmtRate(equivalentHourlyEmployed),
      description: "Your salary ÷ 2,080 hrs — what you appear to earn per hour as employee",
    },
    {
      id: "target-revenue",
      label: "Annual Revenue Target",
      value: fmt(targetRevenue),
      description: "Total you need to bill to match employee compensation",
    },
    {
      id: "billable-hours",
      label: "Billable Hours per Year",
      value: `${Math.round(billableHoursPerYear)} hrs`,
      description: `${billableHoursPerWeek} hrs/week × ${workingWeeks} working weeks`,
    },
    {
      id: "se-tax-extra",
      label: "Extra SE Tax vs Employee",
      value: fmt(seTaxExtra),
      description: "The 7.65% employer share you now pay yourself",
    },
  ];
}
