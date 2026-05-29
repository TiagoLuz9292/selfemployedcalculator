import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

export function calcVatCalculator(inputs: CalculatorInputs): CalculatorResult[] {
  const rawAmount = parseFloat(inputs.netAmount ?? "1000") || 0;
  const vatRate = parseFloat(inputs.vatRate ?? "20") || 0;
  const calcMode = inputs.calcMode ?? "add-vat";

  if (rawAmount <= 0) return [];

  let netAmount: number;
  let vatAmount: number;
  let grossAmount: number;

  if (calcMode === "add-vat") {
    netAmount = rawAmount;
    vatAmount = netAmount * (vatRate / 100);
    grossAmount = netAmount + vatAmount;
  } else {
    grossAmount = rawAmount;
    netAmount = grossAmount / (1 + vatRate / 100);
    vatAmount = grossAmount - netAmount;
  }

  const fmt = (n: number, dec = 2) =>
    `$${n.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec })}`;

  return [
    {
      id: "gross-amount",
      label: calcMode === "add-vat" ? "Total (incl. VAT)" : "Gross Amount Entered",
      value: fmt(grossAmount),
      highlighted: true,
      color: "success",
      description: `Amount including ${vatRate}% VAT`,
    },
    {
      id: "vat-amount",
      label: "VAT Amount",
      value: fmt(vatAmount),
      highlighted: true,
      color: "warning",
      description: `${vatRate}% of net amount`,
    },
    {
      id: "net-amount",
      label: "Net Amount (excl. VAT)",
      value: fmt(netAmount),
      description: "Amount before VAT",
    },
  ];
}
