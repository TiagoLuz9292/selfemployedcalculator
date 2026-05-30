export interface ComparisonRow {
  feature: string;
  a: string;
  b: string;
  winner?: "a" | "b" | "tie";
}

export interface Comparison {
  slug: string;
  title: string;
  entityA: string;
  entityB: string;
  description: string;
  keywords: string[];
  rows: ComparisonRow[];
  summary: string;
  verdict: string;
  relatedCalcSlugs: string[];
  relatedComparisonSlugs?: string[];
  category?: string;
}

export const comparisons: Comparison[] = [
  {
    slug: "freshbooks-vs-quickbooks-self-employed",
    title: "FreshBooks vs QuickBooks for Freelancers",
    entityA: "FreshBooks",
    entityB: "QuickBooks Self-Employed",
    category: "software",
    description:
      "FreshBooks vs QuickBooks Self-Employed: which invoicing and accounting tool is better for freelancers? We compare pricing, features, tax tools, and ease of use.",
    keywords: [
      "freshbooks vs quickbooks freelancer",
      "freshbooks vs quickbooks self employed",
      "best invoicing software freelancer",
      "freshbooks review",
      "quickbooks self employed review",
    ],
    relatedCalcSlugs: ["invoice-total-calculator", "self-employment-tax-calculator"],
    relatedComparisonSlugs: ["bonsai-vs-freshbooks"],
    rows: [
      { feature: "Starting monthly price",       a: "$17/mo (Lite)",    b: "$15/mo",              winner: "b" },
      { feature: "Free trial",                   a: "30 days",          b: "30 days",             winner: "tie" },
      { feature: "Unlimited invoicing",           a: "Yes",              b: "Yes",                 winner: "tie" },
      { feature: "Time tracking",                a: "Yes (built-in)",   b: "Limited",             winner: "a" },
      { feature: "Client portal",                a: "Yes",              b: "No",                  winner: "a" },
      { feature: "Tax deductions tracking",      a: "Basic",            b: "Yes (auto-classify)", winner: "b" },
      { feature: "TurboTax integration",         a: "No",               b: "Yes (seamless)",      winner: "b" },
      { feature: "Mileage tracking",             a: "No",               b: "Yes (mobile app)",    winner: "b" },
      { feature: "Proposals",                    a: "Yes",              b: "No",                  winner: "a" },
      { feature: "Project management",           a: "Yes",              b: "No",                  winner: "a" },
      { feature: "Double-entry accounting",      a: "Yes",              b: "No",                  winner: "a" },
      { feature: "Receipt capture",              a: "Yes",              b: "Yes",                 winner: "tie" },
    ],
    summary:
      "FreshBooks wins for client-heavy freelancers who need invoicing, time tracking, and proposals in one place. QuickBooks Self-Employed wins for freelancers focused on tax prep and TurboTax integration.",
    verdict:
      "FreshBooks is the better all-round tool for freelancers who invoice clients regularly and want a polished client experience. QuickBooks Self-Employed is the smarter choice if your priority is simplifying tax season — particularly if you use TurboTax, as the two integrate directly and can auto-fill your Schedule C. If you do both significant invoicing and want tax automation, consider FreshBooks Plus (which adds double-entry accounting) paired with an accountant.",
  },
  {
    slug: "bonsai-vs-freshbooks",
    title: "Bonsai vs FreshBooks for Freelancers",
    entityA: "Bonsai",
    entityB: "FreshBooks",
    category: "software",
    description:
      "Bonsai vs FreshBooks: comparing two popular freelance platforms on contracts, proposals, invoicing, CRM, and accounting features.",
    keywords: [
      "bonsai vs freshbooks",
      "bonsai freelance review",
      "freshbooks vs bonsai",
      "best freelance management software",
      "bonsai contracts invoicing",
    ],
    relatedCalcSlugs: ["invoice-total-calculator", "client-profitability-calculator"],
    relatedComparisonSlugs: ["freshbooks-vs-quickbooks-self-employed"],
    rows: [
      { feature: "Starting monthly price",    a: "$21/mo",           b: "$17/mo",          winner: "b" },
      { feature: "Contracts & e-signing",     a: "Yes (built-in)",   b: "No",              winner: "a" },
      { feature: "Proposals",                 a: "Yes",              b: "Yes",             winner: "tie" },
      { feature: "CRM / client database",     a: "Yes",              b: "Basic",           winner: "a" },
      { feature: "Time tracking",             a: "Yes",              b: "Yes",             winner: "tie" },
      { feature: "Invoicing",                 a: "Yes",              b: "Yes (more polished)", winner: "b" },
      { feature: "Recurring invoices",        a: "Yes",              b: "Yes",             winner: "tie" },
      { feature: "Double-entry accounting",   a: "No",               b: "Yes (Plus plan)", winner: "b" },
      { feature: "Tax reports",               a: "Basic",            b: "Yes",             winner: "b" },
      { feature: "Task management",           a: "Yes",              b: "Yes",             winner: "tie" },
      { feature: "Client questionnaires",     a: "Yes",              b: "No",              winner: "a" },
      { feature: "Automations",               a: "Yes",              b: "Limited",         winner: "a" },
    ],
    summary:
      "Bonsai is purpose-built for freelancers with an end-to-end workflow from proposals to contracts to invoices. FreshBooks has stronger accounting and more polished invoicing.",
    verdict:
      "Bonsai wins if you want a single tool for your entire client workflow — proposals, contracts, project tracking, time tracking, and invoicing — without needing deep accounting. FreshBooks wins if invoicing polish and accounting accuracy matter more to you, or if you work with an accountant who needs proper double-entry bookkeeping. Bonsai's contract templates alone can save hours for new freelancers.",
  },
  {
    slug: "wise-vs-paypal-freelancers",
    title: "Wise vs PayPal for International Freelancers",
    entityA: "Wise",
    entityB: "PayPal",
    category: "payments",
    description:
      "Wise vs PayPal for international freelancers: comparing exchange rates, transfer fees, receiving fees, and multi-currency accounts.",
    keywords: [
      "wise vs paypal freelancers",
      "wise vs paypal international payment",
      "best way to receive international payments freelancer",
      "wise transfer fees freelancer",
      "paypal fees freelancer",
    ],
    relatedCalcSlugs: ["invoice-total-calculator", "vat-calculator-freelancer"],
    relatedComparisonSlugs: ["deel-vs-remote-contractors"],
    rows: [
      { feature: "Exchange rate",              a: "Mid-market rate",  b: "3-4% spread",         winner: "a" },
      { feature: "Transfer fee (sending $1k)", a: "~$6-9 (0.6-0.9%)", b: "$0 (hidden in rate)", winner: "a" },
      { feature: "Receiving fee",              a: "Free (USD, EUR, GBP)", b: "2.9% + $0.30",    winner: "a" },
      { feature: "Multi-currency account",     a: "Yes (50+ currencies)", b: "Limited",          winner: "a" },
      { feature: "Local bank details",         a: "Yes (USD, EUR, GBP, etc.)", b: "No",          winner: "a" },
      { feature: "Debit card",                 a: "Yes (Wise card)",  b: "Yes (PayPal card)",    winner: "tie" },
      { feature: "Business account",           a: "Yes",              b: "Yes",                  winner: "tie" },
      { feature: "Invoicing",                  a: "Basic",            b: "Yes",                  winner: "b" },
      { feature: "Buyer protection (clients)", a: "No",               b: "Yes",                  winner: "b" },
      { feature: "Chargeback risk",            a: "Low",              b: "High",                 winner: "a" },
      { feature: "Speed (international)",      a: "1-2 business days", b: "Instant to wallet",   winner: "tie" },
      { feature: "Account freezing risk",      a: "Low",              b: "Well-documented issues", winner: "a" },
    ],
    summary:
      "Wise saves significant money on currency conversion through its mid-market rate, while PayPal's convenience and buyer protection make it popular despite higher costs.",
    verdict:
      "For international freelancers, Wise wins clearly on cost. A freelancer receiving $5,000/month from international clients can save $150-200/month versus PayPal's 3-4% conversion spread — that's $1,800-2,400/year. Open a Wise business account, get local bank details in USD, EUR, and GBP, and ask clients to pay those accounts directly. Use PayPal only when clients insist or when the convenience of instant receipt justifies the fee.",
  },
  {
    slug: "hourly-vs-project-pricing",
    title: "Hourly vs Project-Based Pricing for Freelancers",
    entityA: "Hourly Rate",
    entityB: "Project Rate",
    category: "strategy",
    description:
      "Hourly vs project-based pricing for freelancers: comparing income predictability, scope creep risk, client perception, and earning potential.",
    keywords: [
      "hourly vs project pricing freelance",
      "should freelancers charge hourly or by project",
      "project based pricing freelance",
      "hourly rate vs fixed price freelance",
      "freelance pricing strategies",
    ],
    relatedCalcSlugs: ["freelance-hourly-rate-calculator", "project-quote-calculator"],
    relatedComparisonSlugs: ["freelance-vs-full-time-salary"],
    rows: [
      { feature: "Income predictability",      a: "High (hours × rate)", b: "Medium (scope risk)", winner: "a" },
      { feature: "Scope creep risk",           a: "Low (billed per hour)", b: "High",             winner: "a" },
      { feature: "Client trust",               a: "Lower (unknown total)", b: "Higher (clear budget)", winner: "b" },
      { feature: "Earning ceiling",            a: "Capped at hourly × hours", b: "Uncapped (efficiency)", winner: "b" },
      { feature: "Admin overhead",             a: "Time tracking required", b: "No tracking needed", winner: "b" },
      { feature: "Revision risk",              a: "Zero (billed)",        b: "High",                winner: "a" },
      { feature: "Best for new clients",       a: "Yes",                  b: "Risky without history", winner: "a" },
      { feature: "Rewards efficiency",         a: "No",                   b: "Yes",                 winner: "b" },
      { feature: "Discovery time",             a: "Minimal",              b: "Significant scoping", winner: "a" },
      { feature: "Profit potential",           a: "Predictable",          b: "High if scoped well", winner: "b" },
    ],
    summary:
      "Hourly pricing protects you from scope creep and works well for new clients. Project pricing rewards efficiency and enables higher earnings once you can scope accurately.",
    verdict:
      "Start with hourly billing for new clients and open-ended work — it protects you when the scope is unclear and builds trust through transparency. Once you have experience with a type of project, switch to fixed-price proposals. The best freelancers use both: hourly for ongoing retainer work and maintenance, fixed-price for defined deliverables. Use our project quote calculator to build buffers that make fixed-price work safe.",
  },
  {
    slug: "freelance-vs-full-time-salary",
    title: "Freelance vs Full-Time: True Income Comparison",
    entityA: "Freelancing",
    entityB: "Full-Time Employment",
    category: "strategy",
    description:
      "Freelance vs full-time employment: comparing true income after taxes, benefits, paid leave, retirement, and job security.",
    keywords: [
      "freelance vs full time salary",
      "freelance vs employee income comparison",
      "is freelancing worth it financially",
      "self employed vs employed income",
      "freelance income vs salary after tax",
    ],
    relatedCalcSlugs: ["freelance-take-home-pay-calculator", "self-employment-tax-calculator"],
    relatedComparisonSlugs: ["hourly-vs-project-pricing"],
    rows: [
      { feature: "Income ceiling",              a: "Uncapped",             b: "Capped by employer", winner: "a" },
      { feature: "Income stability",            a: "Variable",             b: "Predictable",         winner: "b" },
      { feature: "Self-employment tax (SE tax)", a: "15.3% on net earnings", b: "None (employer pays half)", winner: "b" },
      { feature: "Health insurance",            a: "Self-funded ($300-700/mo)", b: "Employer-subsidized", winner: "b" },
      { feature: "Paid vacation",               a: "Unpaid",               b: "10-25 days paid",     winner: "b" },
      { feature: "Retirement match",            a: "None (self-contribute)", b: "3-6% employer match", winner: "b" },
      { feature: "Tax deductions",              a: "Extensive (home office, equipment, travel)", b: "Limited", winner: "a" },
      { feature: "Location flexibility",        a: "Full",                 b: "Varies",              winner: "a" },
      { feature: "Job security",                a: "Low",                  b: "Higher",              winner: "b" },
      { feature: "Client diversification",      a: "Multiple clients",     b: "Single employer",     winner: "a" },
      { feature: "Career control",              a: "Full",                 b: "Limited",             winner: "a" },
      { feature: "Professional development",    a: "Self-funded",          b: "Often employer-funded", winner: "b" },
    ],
    summary:
      "Freelancing can pay significantly more but requires managing taxes, benefits, and income variability yourself. Full-time employment offers stability and employer-paid benefits worth $10,000-$20,000/year.",
    verdict:
      "A useful rule of thumb: a freelancer needs to earn roughly 1.5× a full-time salary to break even after accounting for SE tax, health insurance, unpaid vacation, and no employer retirement match. So if a full-time role pays $80,000, you should target $120,000+ as a freelancer before claiming you're 'earning more.' Use our take-home pay calculator to run your exact numbers — the difference between gross revenue and net take-home surprises most new freelancers.",
  },
  {
    slug: "deel-vs-remote-contractors",
    title: "Deel vs Remote for International Contractors",
    entityA: "Deel",
    entityB: "Remote",
    category: "platforms",
    description:
      "Deel vs Remote for international contractors: comparing contractor management, compliance, payment currencies, fees, and EOR services.",
    keywords: [
      "deel vs remote contractors",
      "deel vs remote international",
      "best platform international contractors",
      "deel review contractor",
      "remote.com review contractor",
    ],
    relatedCalcSlugs: ["invoice-total-calculator", "freelance-take-home-pay-calculator"],
    relatedComparisonSlugs: ["wise-vs-paypal-freelancers"],
    rows: [
      { feature: "Contractor fee (company pays)", a: "$49/contractor/mo", b: "$29/contractor/mo", winner: "b" },
      { feature: "Free trial",                    a: "Yes",              b: "Yes",               winner: "tie" },
      { feature: "Countries supported",           a: "150+",             b: "180+",              winner: "b" },
      { feature: "Payment currencies",            a: "120+ currencies",  b: "Limited to ~25",    winner: "a" },
      { feature: "EOR (Employer of Record)",      a: "Yes",              b: "Yes",               winner: "tie" },
      { feature: "Contractor onboarding speed",   a: "Same day",         b: "2-5 business days", winner: "a" },
      { feature: "Local compliance",              a: "Strong",           b: "Very strong",       winner: "b" },
      { feature: "IP protection",                 a: "Yes",              b: "Yes",               winner: "tie" },
      { feature: "Benefits management",           a: "Optional add-ons", b: "Yes (for EOR)",     winner: "b" },
      { feature: "Crypto payments",               a: "Yes",              b: "No",                winner: "a" },
      { feature: "Customer support",              a: "24/7 live chat",   b: "Business hours",    winner: "a" },
    ],
    summary:
      "Deel is better for speed, currency coverage, and crypto payments. Remote wins on price and deeper local compliance for EOR engagements.",
    verdict:
      "Deel is the right choice when you need fast contractor onboarding globally and want broad currency options — particularly useful if you pay contractors in less common currencies or with crypto. Remote is better when local compliance is paramount (especially for converting contractors to employees) or when you want to save ~$20/contractor/month. Both are substantial improvements over managing international contractor payments manually.",
  },

  // ─── FRESHBOOKS VS WAVE ────────────────────────────────────────────────────
  {
    slug: "freshbooks-vs-wave",
    title: "FreshBooks vs Wave for Freelancers",
    entityA: "FreshBooks",
    entityB: "Wave",
    category: "software",
    description: "FreshBooks vs Wave: the paid invoicing leader vs the free alternative. Which is better for freelancers who need invoicing, expense tracking, and tax reports?",
    keywords: [
      "freshbooks vs wave",
      "wave accounting vs freshbooks",
      "free invoicing software freelancers",
      "wave app review freelancer",
      "freshbooks vs wave accounting",
    ],
    relatedCalcSlugs: ["invoice-total-calculator", "profit-margin-calculator"],
    relatedComparisonSlugs: ["freshbooks-vs-quickbooks-self-employed", "bonsai-vs-freshbooks"],
    rows: [
      { feature: "Monthly cost",              a: "$17/mo (Lite)",        b: "Free",                   winner: "b" },
      { feature: "Invoicing",                 a: "Yes (polished)",       b: "Yes (basic)",            winner: "a" },
      { feature: "Client limit (base plan)",  a: "5 clients",            b: "Unlimited",              winner: "b" },
      { feature: "Expense tracking",          a: "Yes",                  b: "Yes",                    winner: "tie" },
      { feature: "Time tracking",             a: "Yes (built-in)",       b: "No",                     winner: "a" },
      { feature: "Double-entry accounting",   a: "Yes (Plus+)",          b: "Yes (free)",             winner: "b" },
      { feature: "Tax reports",               a: "Yes",                  b: "Basic",                  winner: "a" },
      { feature: "Proposals",                 a: "Yes",                  b: "No",                     winner: "a" },
      { feature: "Recurring invoices",        a: "Yes",                  b: "Yes",                    winner: "tie" },
      { feature: "Bank reconciliation",       a: "Yes",                  b: "Yes (free)",             winner: "b" },
      { feature: "Payment processing fee",    a: "2.9% + $0.30",         b: "2.9% + $0.60",           winner: "a" },
      { feature: "Mobile app",                a: "Yes (good)",           b: "Yes (basic)",            winner: "a" },
      { feature: "Payroll",                   a: "Add-on ($20+/mo)",     b: "Paid add-on",            winner: "tie" },
      { feature: "Customer support",          a: "Phone + chat + email", b: "Community + email only", winner: "a" },
    ],
    summary: "Wave is completely free and covers the basics well. FreshBooks charges monthly but offers time tracking, proposals, better mobile experience, and proper client management.",
    verdict: "Wave is the right starting point for freelancers just getting started who need basic invoicing and expense tracking at zero cost. Once you're consistently billing $3,000+/month and spending time on admin, FreshBooks pays for itself through time savings. The key differentiators: FreshBooks has built-in time tracking (critical for hourly billing), client-facing proposals, and significantly better customer support. Wave has genuinely good double-entry accounting for free — impressive for a free tool. Start with Wave, upgrade to FreshBooks when your client volume justifies it.",
  },

  // ─── FIVERR VS UPWORK ──────────────────────────────────────────────────────
  {
    slug: "fiverr-vs-upwork",
    title: "Fiverr vs Upwork for Freelancers",
    entityA: "Fiverr",
    entityB: "Upwork",
    category: "platforms",
    description: "Fiverr vs Upwork — the two biggest freelance marketplaces compared. Which platform earns more, has lower fees, and is better for your type of freelance work?",
    keywords: [
      "fiverr vs upwork",
      "upwork vs fiverr which is better",
      "fiverr or upwork for freelancers",
      "fiverr vs upwork fees",
      "best freelance marketplace 2026",
    ],
    relatedCalcSlugs: ["freelance-hourly-rate-calculator", "project-quote-calculator", "client-profitability-calculator"],
    relatedComparisonSlugs: ["hourly-vs-project-pricing"],
    rows: [
      { feature: "Platform fee (your cut)",    a: "80% (20% to Fiverr)",  b: "90% (10% above $10k lifetime)", winner: "b" },
      { feature: "Pricing model",              a: "You set fixed packages", b: "Client posts job, you bid", winner: "tie" },
      { feature: "Who finds who",              a: "Client finds you",     b: "You bid on jobs",              winner: "tie" },
      { feature: "Minimum order",              a: "$5 (practically $20+)", b: "No minimum",                  winner: "b" },
      { feature: "Hourly contracts",           a: "No",                   b: "Yes (time tracking built-in)", winner: "b" },
      { feature: "Long-term clients",          a: "Harder (gig model)",   b: "Yes (contracts)",              winner: "b" },
      { feature: "Profile visibility",         a: "Algorithm-driven",     b: "Proposal + profile quality",   winner: "tie" },
      { feature: "Competition at entry level", a: "Very high",            b: "Very high",                    winner: "tie" },
      { feature: "Best for beginners",         a: "Yes (simpler setup)",  b: "Harder (proposals required)", winner: "a" },
      { feature: "Best for high rates",        a: "Harder",               b: "Yes (hourly + contracts)",     winner: "b" },
      { feature: "Payment protection",         a: "Yes",                  b: "Yes",                          winner: "tie" },
      { feature: "Top earner potential",       a: "High (algorithm boost)", b: "Very high (long-term)",     winner: "b" },
    ],
    summary: "Fiverr uses a productised gig model where clients browse and buy packages. Upwork is a marketplace where you bid on jobs and build ongoing client relationships with hourly or fixed contracts.",
    verdict: "These platforms suit different types of freelance work. Fiverr is better for productised, repeatable services: logo design, short copywriting, voiceovers, video editing, simple web tasks. Your packages are the product, clients buy without much back-and-forth. Upwork is better for technical, strategic, or consulting work where you want ongoing relationships, hourly billing, and the ability to build a client base over time. Upwork's top earners make significantly more because long-term clients at $50-150/hr compound over months and years. Fiverr's top earners succeed by creating highly-optimised packages that rank in search. Many successful freelancers use both: Fiverr for quick, packaged work and inbound clients, Upwork for longer-term relationships and higher-value projects.",
  },

  // ─── TOGGL VS HARVEST ──────────────────────────────────────────────────────
  {
    slug: "toggl-vs-harvest",
    title: "Toggl Track vs Harvest for Freelancers",
    entityA: "Toggl Track",
    entityB: "Harvest",
    category: "software",
    description: "Toggl Track vs Harvest — comparing time tracking tools for freelancers. Which has better invoicing, reporting, and free plan for independent professionals?",
    keywords: [
      "toggl vs harvest",
      "toggl track vs harvest freelancer",
      "best time tracking software freelancer",
      "harvest vs toggl comparison",
      "time tracking invoicing freelancer",
    ],
    relatedCalcSlugs: ["billable-hours-calculator", "utilization-rate-calculator", "client-profitability-calculator"],
    relatedComparisonSlugs: ["freshbooks-vs-quickbooks-self-employed", "bonsai-vs-freshbooks"],
    rows: [
      { feature: "Free plan",                   a: "Yes (unlimited tracking, 1 workspace)", b: "Yes (1 seat, 2 projects)", winner: "a" },
      { feature: "Paid plan price",             a: "$10/seat/mo",              b: "$12/seat/mo",             winner: "a" },
      { feature: "Time tracking UX",            a: "Excellent (fast, clean)",  b: "Good",                    winner: "a" },
      { feature: "Built-in invoicing",          a: "No",                       b: "Yes",                     winner: "b" },
      { feature: "Invoice from time entries",   a: "No (export to FreshBooks)", b: "Yes (direct)",            winner: "b" },
      { feature: "Project budgets",             a: "Yes",                      b: "Yes",                     winner: "tie" },
      { feature: "Client + project reports",    a: "Yes",                      b: "Yes (better)",            winner: "b" },
      { feature: "Team time tracking",          a: "Yes",                      b: "Yes",                     winner: "tie" },
      { feature: "Mobile app",                  a: "Excellent",                b: "Good",                    winner: "a" },
      { feature: "Browser extension",           a: "Yes",                      b: "Yes",                     winner: "tie" },
      { feature: "FreshBooks integration",      a: "Yes",                      b: "Yes",                     winner: "tie" },
      { feature: "Forecasting",                 a: "No",                       b: "Yes (Harvest Forecast)",   winner: "b" },
    ],
    summary: "Toggl Track wins on UX and free plan generosity. Harvest wins if you want to invoice clients directly from your time entries without a separate invoicing tool.",
    verdict: "If you already use FreshBooks, Bonsai, or another invoicing tool, Toggl Track is the better time tracker — cleaner interface, excellent mobile app, and a genuinely useful free plan with unlimited projects. If you want to simplify your stack and invoice clients directly from tracked time without a separate app, Harvest is the better all-in-one choice. The Harvest + Harvest Forecast combination is particularly useful for freelancers managing multiple clients who want to visualise their schedule weeks ahead. Solo freelancers just starting out: Toggl's free plan is unbeatable — track unlimited time, use it for a year, then decide if you need Harvest's invoicing.",
  },
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}
