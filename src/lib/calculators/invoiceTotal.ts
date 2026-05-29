import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

type Color = "default" | "success" | "warning" | "danger";

export function calcInvoiceTotal(inputs: CalculatorInputs): CalculatorResult[] {
  const subtotal = parseFloat(inputs.subtotal ?? "1000") || 0;
  const vatRate = parseFloat(inputs.vatRate ?? "0") || 0;
  const discount = parseFloat(inputs.discount ?? "0") || 0;
  const depositPaid = parseFloat(inputs.depositPaid ?? "0") || 0;

  if (subtotal <= 0) return [];

  const discountAmount = subtotal * (discount / 100);
  const afterDiscount = subtotal - discountAmount;
  const vatAmount = afterDiscount * (vatRate / 100);
  const totalWithVat = afterDiscount + vatAmount;
  const amountDue = Math.max(0, totalWithVat - depositPaid);

  const fmt = (n: number, dec = 2) =>
    `$${n.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec })}`;

  const results: CalculatorResult[] = [
    {
      id: "amount-due",
      label: "Amount Due",
      value: fmt(amountDue),
      highlighted: true,
      color: "success" as Color,
      description: "Final amount to collect from client",
    },
    {
      id: "total-with-vat",
      label: "Total (incl. VAT)",
      value: fmt(totalWithVat),
      highlighted: true,
      description: discount > 0 ? "After discount, including VAT" : "Including VAT",
    },
    {
      id: "subtotal",
      label: "Subtotal",
      value: fmt(subtotal),
      description: "Before discount and VAT",
    },
  ];

  if (discount > 0) {
    results.push({
      id: "discount-amount",
      label: "Discount",
      value: `−${fmt(discountAmount)} (${discount}%)`,
      highlighted: false,
      color: "success" as Color,
      description: `${discount}% discount applied`,
    });
  }

  if (vatRate > 0) {
    results.push({
      id: "vat-amount",
      label: `VAT (${vatRate}%)`,
      value: fmt(vatAmount),
      highlighted: false,
      color: "warning" as Color,
      description: `${vatRate}% of ${fmt(afterDiscount)}`,
    });
  }

  if (depositPaid > 0) {
    results.push({
      id: "deposit-paid",
      label: "Deposit Already Paid",
      value: `−${fmt(depositPaid)}`,
      highlighted: false,
      color: "success" as Color,
      description: "Upfront deposit deducted",
    });
  }

  return results;
}
