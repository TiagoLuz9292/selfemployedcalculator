import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

export function calcLatePaymentInterest(inputs: CalculatorInputs): CalculatorResult[] {
  const invoiceAmount = parseFloat(inputs.invoiceAmount ?? "2000") || 0;
  const daysOverdue = parseFloat(inputs.daysOverdue ?? "30") || 0;
  const annualInterestRate = parseFloat(inputs.annualInterestRate ?? "8") || 0;

  if (invoiceAmount <= 0 || daysOverdue <= 0) return [];

  const dailyRate = annualInterestRate / 100 / 365;
  const interest = invoiceAmount * dailyRate * daysOverdue;
  const totalOwed = invoiceAmount + interest;
  const dailyInterest = invoiceAmount * dailyRate;

  const fmt = (n: number, dec = 2) =>
    `$${n.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec })}`;

  return [
    {
      id: "interest-accrued",
      label: "Interest Accrued",
      value: fmt(interest),
      highlighted: true,
      color: "warning",
      description: `${annualInterestRate}% annual rate × ${daysOverdue} days overdue`,
    },
    {
      id: "total-owed",
      label: "Total Amount Owed",
      value: fmt(totalOwed),
      highlighted: true,
      color: "danger",
      description: "Original invoice + interest",
    },
    {
      id: "original-invoice",
      label: "Original Invoice",
      value: fmt(invoiceAmount),
      description: "Invoice amount before interest",
    },
    {
      id: "daily-interest",
      label: "Daily Interest Rate",
      value: `${fmt(dailyInterest)}/day`,
      description: `${(dailyRate * 100).toFixed(4)}% per day`,
    },
  ];
}
