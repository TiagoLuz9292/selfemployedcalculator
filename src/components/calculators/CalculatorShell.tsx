"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { CalculatorMeta, CalculatorInputs, CalculatorResult } from "@/types/calculator";
import { InputField } from "./InputField";
import { ResultCard } from "./ResultCard";
import { ShareButton } from "./ShareButton";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { calcFreelanceHourlyRate } from "@/lib/calculators/freelanceHourlyRate";
import { calcDayRate } from "@/lib/calculators/dayRate";
import { calcProjectQuote } from "@/lib/calculators/projectQuote";
import { calcRetainerRate } from "@/lib/calculators/retainerRate";
import { calcValueBasedPricing } from "@/lib/calculators/valueBasedPricing";
import { calcSelfEmploymentTax } from "@/lib/calculators/selfEmploymentTax";
import { calcFreelanceTakeHomePay } from "@/lib/calculators/freelanceTakeHomePay";
import { calcQuarterlyTax } from "@/lib/calculators/quarterlyTax";
import { calcVatCalculator } from "@/lib/calculators/vatCalculator";
import { calcProfitMargin } from "@/lib/calculators/profitMargin";
import { calcBillableHours } from "@/lib/calculators/billableHours";
import { calcUtilizationRate } from "@/lib/calculators/utilizationRate";
import { calcBreakEven } from "@/lib/calculators/breakEven";
import { calcClientProfitability } from "@/lib/calculators/clientProfitability";
import { calcLatePaymentInterest } from "@/lib/calculators/latePaymentInterest";
import { calcInvoiceTotal } from "@/lib/calculators/invoiceTotal";
import { calcEmergencyFund } from "@/lib/calculators/emergencyFund";
import { calcSavingsRate } from "@/lib/calculators/savingsRate";
import { calcRetirementContribution } from "@/lib/calculators/retirementContribution";
import { calcFreelanceIncomeGoal } from "@/lib/calculators/freelanceIncomeGoal";
import { calc1099Tax } from "@/lib/calculators/calc1099Tax";
import { calcSalaryToFreelanceRate } from "@/lib/calculators/salaryToFreelanceRate";
import { calcTaxDeduction } from "@/lib/calculators/taxDeductionCalculator";

const calculatorFns: Record<string, (inputs: CalculatorInputs) => CalculatorResult[]> = {
  "freelance-hourly-rate-calculator":   calcFreelanceHourlyRate,
  "day-rate-calculator":                calcDayRate,
  "project-quote-calculator":           calcProjectQuote,
  "retainer-rate-calculator":           calcRetainerRate,
  "value-based-pricing-calculator":     calcValueBasedPricing,
  "self-employment-tax-calculator":     calcSelfEmploymentTax,
  "freelance-take-home-pay-calculator": calcFreelanceTakeHomePay,
  "quarterly-tax-calculator":           calcQuarterlyTax,
  "vat-calculator-freelancer":          calcVatCalculator,
  "profit-margin-calculator":           calcProfitMargin,
  "billable-hours-calculator":          calcBillableHours,
  "utilization-rate-calculator":        calcUtilizationRate,
  "break-even-calculator":              calcBreakEven,
  "client-profitability-calculator":    calcClientProfitability,
  "late-payment-interest-calculator":   calcLatePaymentInterest,
  "invoice-total-calculator":           calcInvoiceTotal,
  "emergency-fund-calculator":          calcEmergencyFund,
  "savings-rate-calculator":            calcSavingsRate,
  "retirement-contribution-calculator": calcRetirementContribution,
  "freelance-income-goal-calculator":   calcFreelanceIncomeGoal,
  "1099-tax-calculator":                calc1099Tax,
  "salary-to-freelance-rate-calculator": calcSalaryToFreelanceRate,
  "freelance-tax-deduction-calculator": calcTaxDeduction,
};

function buildDefaultInputs(meta: CalculatorMeta): CalculatorInputs {
  return Object.fromEntries(
    meta.fields.map((f) => [f.id, String(f.defaultValue ?? "")])
  );
}

interface CalculatorShellProps {
  meta: CalculatorMeta;
}

export function CalculatorShell({ meta }: CalculatorShellProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const defaults = useMemo(() => buildDefaultInputs(meta), [meta]);

  const [inputs, setInputs] = useState<CalculatorInputs>(() => {
    const fromUrl: CalculatorInputs = { ...defaults };
    meta.fields.forEach((f) => {
      const val = searchParams.get(f.id);
      if (val !== null) fromUrl[f.id] = val;
    });
    return fromUrl;
  });

  const calcFn = calculatorFns[meta.parentSlug ?? meta.slug];
  const results: CalculatorResult[] = useMemo(
    () => (calcFn ? calcFn(inputs) : []),
    [calcFn, inputs]
  );

  const handleChange = useCallback((id: string, value: string) => {
    setInputs((prev) => ({ ...prev, [id]: value }));
  }, []);

  // Sync inputs to URL search params for shareability
  useEffect(() => {
    const params = new URLSearchParams();
    Object.entries(inputs).forEach(([k, v]) => {
      if (v !== "") params.set(k, v);
    });
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    router.replace(newUrl, { scroll: false });
  }, [inputs, router]);

  const handleReset = () => setInputs(defaults);

  const highlighted = results.filter((r) => r.highlighted);
  const secondary = results.filter((r) => !r.highlighted);

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="border-b border-border px-6 py-4 flex items-center justify-between">
        <h2 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
          Calculator
        </h2>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleReset}
            className="gap-1.5 text-xs text-muted-foreground"
          >
            <RefreshCw className="h-3 w-3" />
            Reset
          </Button>
          <ShareButton />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border">
        {/* Inputs */}
        <div className="p-6 space-y-4">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Inputs
          </h3>
          {meta.fields.map((field) => (
            <InputField
              key={field.id}
              field={field}
              value={inputs[field.id] ?? ""}
              unitValue={field.unitFieldId ? inputs[field.unitFieldId] ?? "" : undefined}
              onChange={handleChange}
            />
          ))}
        </div>

        {/* Results */}
        <div className="p-6">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Results
          </h3>

          {results.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-32 text-muted-foreground text-sm">
              Enter valid values to see results
            </div>
          ) : (
            <div className="space-y-4">
              {highlighted.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {highlighted.map((r) => (
                    <ResultCard key={r.id} result={r} />
                  ))}
                </div>
              )}
              {secondary.length > 0 && (
                <div className="rounded-lg border border-border bg-secondary/20 px-4 py-2 divide-y divide-border/50">
                  {secondary.map((r) => (
                    <ResultCard key={r.id} result={r} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* TODO: Add any calculator-specific chart or visualisation here, e.g.:
          {meta.slug === "my-chart-calculator" && results.length > 0 && (
            <div className="border-t border-border p-6">
              <MyChart inputs={inputs} />
            </div>
          )}
      */}
    </div>
  );
}
