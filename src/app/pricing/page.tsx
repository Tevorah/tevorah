import Link from "next/link";
import type { Metadata } from "next";
import { Check, ArrowRight } from "lucide-react";

const TITLE = "Pricing | Tevorah";
const DESCRIPTION =
  "One monthly rate, everything included. Junior from $800/mo, Mid from $1,200/mo, Senior from $3,000/mo. No placement fees, no hidden costs, no long-term lock-in.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/pricing" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/pricing" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const tiers = [
  {
    label: "Junior",
    priceFrom: "800",
    priceTo: "1,500",
    experience: "1–2 years",
    desc: "Early-career engineers with solid fundamentals and eagerness to grow.",
    for: "Teams looking to grow capacity with motivated early engineers.",
  },
  {
    label: "Mid",
    priceFrom: "1,200",
    priceTo: "2,400",
    experience: "3–5 years",
    desc: "Independent engineers who can own features end-to-end.",
    for: "Most startups and scaleups, the sweet spot.",
    highlight: true,
  },
  {
    label: "Senior",
    priceFrom: "3,000",
    priceTo: null,
    experience: "5+ years",
    desc: "Deep technical expertise, architectural thinking, mentorship.",
    for: "Teams needing a technical lead or specialist to drive complex work.",
  },
];

const included = [
  "Tevorah Verified assessment (technical, AI fluency, communication)",
  "Direct integration with your Slack, Jira, and tools",
  "Payroll, tax, and compliance fully managed",
  "Contracts, IP agreements, and onboarding handled",
  "Ongoing HR support and performance monitoring",
  "Dedicated Tevorah account manager",
  "Cancel with 30 days notice",
];

const faqs = [
  {
    q: "Is there a placement or recruitment fee?",
    a: "No. Tevorah charges a single monthly flat rate per team member. No placement fees, no recruitment percentages, no surprises.",
  },
  {
    q: "What's included in the monthly price?",
    a: "Everything: the team member's salary, Tevorah's platform fee, payroll management, compliance, HR support, and your account manager.",
  },
  {
    q: "How quickly can someone start?",
    a: "Most team members are ready within 1–4 weeks from your first brief. We aim to turn around a shortlist quickly.",
  },
  {
    q: "Can I hire multiple people at once?",
    a: "Yes. Many clients build full squads through Tevorah. There are no limits on team size, and pricing scales linearly.",
  },
  {
    q: "What if it's not working out?",
    a: "We stand behind our placements. If a team member isn't the right fit within the first 30 days, we'll replace them at no extra cost.",
  },
  {
    q: "Do you work with companies outside the UK / US?",
    a: "Yes. We serve clients across the US, UK, Europe, Australia, and the Middle East. Our talent works in your timezone where possible.",
  },
];

export default function PricingPage() {
  return (
    <div className="pb-10 sm:pb-16">
      {/* Header */}
      <div className="pt-24 sm:pt-28 pb-10 sm:pb-12" style={{ backgroundColor: "#F5F7FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#7C5CFF" }}>
            Pricing
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-midnight mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
            Straightforward pricing.
            <br />
            No recruitment maths.
          </h1>
          <p className="text-base sm:text-xl max-w-2xl mx-auto" style={{ color: "#707887" }}>
            One monthly rate. Everything included. No placement fees, no hidden costs, no long-term lock-in.
          </p>
        </div>
      </div>

      {/* Tier cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">
        {/* Extra top padding so "Most popular" badge isn't clipped */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-4">
          {tiers.map((tier) => (
            <div
              key={tier.label}
              className="rounded-2xl border p-6 transition-all relative"
              style={{
                backgroundColor: tier.highlight ? "#7C5CFF" : "white",
                borderColor: tier.highlight ? "#7C5CFF" : "#E5E7EB",
                color: tier.highlight ? "white" : "#090B10",
              }}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ backgroundColor: "#45DDF5", color: "#090B10" }}>
                    Most popular
                  </span>
                </div>
              )}

              <div className="mb-4">
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-2"
                  style={{ color: tier.highlight ? "rgba(255,255,255,0.6)" : "#A6ADBB" }}
                >
                  {tier.label}
                </p>
                <div className="mb-1">
                  {!tier.priceTo && (
                    <span className="text-sm font-medium block mb-0.5" style={{ color: tier.highlight ? "rgba(255,255,255,0.6)" : "#A6ADBB" }}>
                      Starting from
                    </span>
                  )}
                  <span className="text-3xl font-bold" style={{ fontFamily: "Manrope, sans-serif" }}>
                    ${tier.priceFrom}
                  </span>
                  {tier.priceTo && (
                    <span className="text-xl font-semibold" style={{ color: tier.highlight ? "rgba(255,255,255,0.7)" : "#A6ADBB" }}>
                      {` – $${tier.priceTo}`}
                    </span>
                  )}
                </div>
                <p
                  className="text-xs"
                  style={{ color: tier.highlight ? "rgba(255,255,255,0.6)" : "#A6ADBB" }}
                >
                  per month &middot; {tier.experience} experience
                </p>
              </div>

              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: tier.highlight ? "rgba(255,255,255,0.8)" : "#707887" }}
              >
                {tier.desc}
              </p>

              <p
                className="text-xs font-medium pb-4 mb-4"
                style={{
                  color: tier.highlight ? "rgba(255,255,255,0.7)" : "#A6ADBB",
                  borderBottom: `1px solid ${tier.highlight ? "rgba(255,255,255,0.15)" : "#F3F4F6"}`,
                }}
              >
                Best for: {tier.for}
              </p>

              <Link
                href="/#build-team"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all"
                style={{
                  backgroundColor: tier.highlight ? "white" : "#7C5CFF",
                  color: tier.highlight ? "#7C5CFF" : "white",
                }}
              >
                Get started
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        {/* What's included */}
        <div className="mt-8 sm:mt-10 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#7C5CFF" }}>
                What&apos;s included
              </p>
              <h2 className="text-2xl font-bold text-midnight mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>
                Everything. In one price.
              </h2>
              <p className="text-sm" style={{ color: "#707887" }}>
                No extras to negotiate. No surprise invoices at month-end.
              </p>
            </div>
            <div className="space-y-3">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "rgba(61,220,151,0.12)" }}
                  >
                    <Check size={11} style={{ color: "#3DDC97" }} />
                  </div>
                  <span className="text-midnight">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-8 sm:mt-10">
          <h2 className="text-xl sm:text-2xl font-bold text-midnight mb-6 sm:mb-8 text-center" style={{ fontFamily: "Manrope, sans-serif" }}>
            Common questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl border border-gray-100 p-5">
                <p className="font-semibold text-midnight text-sm mb-2">{faq.q}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#707887" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-8 sm:mt-10 rounded-2xl p-8 text-center"
          style={{ background: "linear-gradient(135deg, rgba(124,92,255,0.06), rgba(69,221,245,0.06))", border: "1px solid rgba(124,92,255,0.15)" }}
        >
          <h3 className="text-2xl font-bold text-midnight mb-3" style={{ fontFamily: "Manrope, sans-serif" }}>
            Ready to build?
          </h3>
          <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: "#707887" }}>
            Tell us your requirements. We&apos;ll match you with verified candidates.
          </p>
          <Link
            href="/#build-team"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm"
            style={{ backgroundColor: "#7C5CFF" }}
          >
            Build a Team
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
