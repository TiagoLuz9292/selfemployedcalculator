import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

export function calcQuarterlyTax(inputs: CalculatorInputs): CalculatorResult[] {
  const annualNetIncome = parseFloat(inputs.annualNetIncome ?? "60000") || 0;
  const priorYearTaxes = parseFloat(inputs.priorYearTaxes ?? "0") || 0;
  const alreadyPaidThisYear = parseFloat(inputs.alreadyPaidThisYear ?? "0") || 0;

  if (annualNetIncome <= 0) return [];

  const seTax = annualNetIncome * 0.9235 * 0.153;
  const halfSeTax = seTax / 2;
  const taxableIncome = Math.max(0, annualNetIncome - halfSeTax);
  // Simplified bracket (22% is a reasonable estimate for typical self-employed income)
  const estimatedIncomeTax = taxableIncome * 0.22;
  const estimatedAnnualTax = seTax + estimatedIncomeTax;

  const safeHarborAmount = priorYearTaxes > 0
    ? Math.max(estimatedAnnualTax, priorYearTaxes)
    : estimatedAnnualTax;

  const remainingTax = Math.max(0, safeHarborAmount - alreadyPaidThisYear);
  const quartersRemaining = 4;
  const quarterlyPayment = remainingTax / quartersRemaining;

  const setAside = (estimatedAnnualTax / annualNetIncome) * 100;

  const fmt = (n: number, dec = 0) =>
    `$${n.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec })}`;

  return [
    {
      id: "quarterly-payment",
      label: "Quarterly Payment",
      value: fmt(quarterlyPayment),
      highlighted: true,
      color: "warning",
      description: "Amount to pay each quarter to stay safe",
    },
    {
      id: "annual-tax",
      label: "Estimated Annual Tax",
      value: fmt(estimatedAnnualTax),
      highlighted: true,
      description: "SE tax + estimated federal income tax",
    },
    {
      id: "se-tax",
      label: "Self-Employment Tax",
      value: fmt(seTax),
      description: "15.3% on 92.35% of net income",
    },
    {
      id: "income-tax-estimate",
      label: "Estimated Income Tax",
      value: fmt(estimatedIncomeTax),
      description: "Approximate federal income tax (22% bracket)",
    },
    {
      id: "set-aside-rate",
      label: "% to Set Aside",
      value: `${setAside.toFixed(1)}%`,
      description: "Percent of income to reserve for taxes",
    },
  ];
}
