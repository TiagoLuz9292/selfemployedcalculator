import type { CalculatorInputs, CalculatorResult } from "@/types/calculator";

export function calcValueBasedPricing(inputs: CalculatorInputs): CalculatorResult[] {
  const clientROI = parseFloat(inputs.clientROI ?? "50000") || 0;
  const valueCapturePct = parseFloat(inputs.valueCapturePct ?? "15") || 0;
  const projectDurationWeeks = parseFloat(inputs.projectDurationWeeks ?? "4") || 1;

  if (clientROI <= 0) return [];

  const projectPrice = clientROI * (valueCapturePct / 100);
  const weeklyRate = projectPrice / projectDurationWeeks;
  const roiMultiple = clientROI / projectPrice;

  const fmt = (n: number, dec = 0) =>
    `$${n.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec })}`;

  return [
    {
      id: "project-price",
      label: "Project Price",
      value: fmt(projectPrice),
      highlighted: true,
      color: "success",
      description: `${valueCapturePct}% of ${fmt(clientROI)} client ROI`,
    },
    {
      id: "client-roi",
      label: "Client ROI",
      value: fmt(clientROI),
      highlighted: true,
      description: "Total value created for the client",
    },
    {
      id: "weekly-rate",
      label: "Weekly Equivalent",
      value: `${fmt(weeklyRate)}/week`,
      description: `Over ${projectDurationWeeks} week${projectDurationWeeks !== 1 ? "s" : ""}`,
    },
    {
      id: "roi-multiple",
      label: "Client ROI Multiple",
      value: `${roiMultiple.toFixed(1)}×`,
      description: "Client earns this many times what they pay you",
    },
  ];
}
