import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy — how we handle data, cookies, advertising, and your rights as a user.",
  robots: { index: true, follow: true },
};

const SITE_NAME = "Self Employed Calculator";
const CONTACT_EMAIL = "tiagoluz92@gmail.com";
const SITE_URL = "https://selfemployedcalculator.com";

const LAST_UPDATED = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-10">Last updated: {LAST_UPDATED}</p>

      <div className="space-y-10 text-sm text-muted-foreground leading-relaxed">

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">1. Introduction</h2>
          <p>
            This Privacy Policy explains how {SITE_NAME} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;),
            operating at <span className="text-foreground">{SITE_URL}</span>, collects, uses, and protects
            information when you use our website.
          </p>
          <p>
            By using {SITE_NAME}, you agree to the practices described in this policy.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">2. Information We Collect</h2>
          <p>
            <span className="text-foreground font-medium">We do not collect personal information directly.</span>{" "}
            {SITE_NAME} has no user accounts, no registration forms, and no input fields that ask for personal data.
            All tool inputs are processed entirely within your browser and are never transmitted to our servers.
          </p>
          <p>However, certain information is collected automatically through the third-party services we use:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>IP address and approximate location (country/city level)</li>
            <li>Browser type, operating system, and device type</li>
            <li>Pages visited, time spent on pages, and referral source</li>
            <li>Clicks on advertisements and affiliate links</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">3. Google AdSense and Advertising</h2>
          <p>
            {SITE_NAME} uses <span className="text-foreground font-medium">Google AdSense</span> to display
            advertisements. Google uses cookies — including the DoubleClick cookie — to serve ads based on your
            prior visits to this site and other sites.
          </p>
          <p>Your opt-out options:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Google Ad Settings
              </a>
            </li>
            <li>
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                AboutAds.info
              </a>{" "}(US) or{" "}
              <a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                YourOnlineChoices.com
              </a>{" "}(EU)
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">4. Google Analytics</h2>
          <p>
            We use <span className="text-foreground font-medium">Google Analytics</span> to understand how visitors
            use {SITE_NAME}. Data is anonymised and aggregate — not linked to personal identity. You can opt out via
            the{" "}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Google Analytics Opt-out Browser Add-on
            </a>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">5. Cookies</h2>
          <p>
            {SITE_NAME} itself does not set first-party cookies. Third-party services (Google AdSense, Google
            Analytics) do set cookies on your device for advertising and analytics purposes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">6. Affiliate Links and Disclosure</h2>
          <p>
            Some pages contain affiliate links. If you click one and make a transaction, we may receive a
            commission at no cost to you. Our tools and editorial content are not influenced by affiliate
            relationships.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">7. Third-Party Links</h2>
          <p>
            This site contains links to external websites. Those sites are governed by their own privacy policies.
            {SITE_NAME} accepts no responsibility for their practices.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">8. Your Rights — GDPR (EU/EEA Users)</h2>
          <p>If you are in the EU/EEA, you have rights under GDPR including access, rectification, erasure,
            restriction, portability, and the right to object. Because {SITE_NAME} does not directly store personal
            data, most rights apply to data held by Google. For {SITE_NAME}-specific enquiries, contact us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">9. Children&apos;s Privacy</h2>
          <p>
            {SITE_NAME} is not directed at individuals under 16. If you believe a child has provided data through
            this site, contact us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">10. Disclaimer</h2>
          <p>
            All tools, calculators, articles, and comparisons on {SITE_NAME} are provided for educational and
            informational purposes only. Nothing on this site constitutes professional advice.
            Always conduct your own research.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">11. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. We will update the &ldquo;Last updated&rdquo; date at
            the top of this page. Continued use of the site constitutes acceptance of the updated policy.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">12. Contact</h2>
          <p>For any privacy-related questions, contact us at:</p>
          <p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline font-medium">
              {CONTACT_EMAIL}
            </a>
          </p>
        </section>

      </div>

      <div className="mt-12 pt-6 border-t border-border/50">
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
