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

  const vatDescription = calcMode === "add-vat"
    ? `${vatRate}% of net amount added`
    : `${vatRate}% extracted from gross — net is what you keep`;

  return [
    {
      id: "gross-amount",
      label: calcMode === "add-vat" ? "Invoice Total (incl. VAT)" : "Gross Amount Entered",
      value: fmt(grossAmount),
      highlighted: true,
      color: "success",
      description: calcMode === "add-vat"
        ? `Net amount plus ${vatRate}% VAT — this is what you invoice the client`
        : `The gross amount you entered (VAT included)`,
    },
    {
      id: "vat-amount",
      label: "VAT Amount",
      value: fmt(vatAmount),
      highlighted: true,
      color: "warning",
      description: vatDescription,
    },
    {
      id: "net-amount",
      label: "Net Amount (excl. VAT)",
      value: fmt(netAmount),
      description: calcMode === "add-vat"
        ? "Your fee before VAT — the amount you earn"
        : "The net fee after removing VAT — the amount you earn",
    },
  ];
}
