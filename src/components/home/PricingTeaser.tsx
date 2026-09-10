import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const tiers = [
  { label: "Junior", from: "800", to: "1,500", desc: "1–2 years experience" },
  { label: "Mid", from: "1,200", to: "2,400", desc: "3–5 years experience", highlight: true },
  { label: "Senior", from: "3,000", to: null, desc: "5+ years experience" },
];

const included = [
  "Tevorah Verified assessment",
  "Dedicated to your team",
  "Payroll & compliance covered",
  "Your Slack, Jira, and roadmap",
  "Ongoing support & HR",
];

export default function PricingTeaser() {
  return (
    <section className="py-16 sm:py-24" style={{ backgroundColor: "#F5F7FA" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#7C5CFF" }}
          >
            Pricing
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-midnight"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Straightforward pricing.
            <br />
            No recruitment maths.
          </h2>
          <p className="mt-4 text-base sm:text-lg max-w-xl mx-auto" style={{ color: "#707887" }}>
            One monthly cost. Everything included. Cancel anytime.
          </p>
        </div>

        {/* Tier pills — 3 col on mobile, 3 across on md+ */}
        <div className="grid grid-cols-3 gap-3 mb-10 sm:mb-12 max-w-2xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.label}
              className="rounded-2xl border px-3 sm:px-6 py-4 text-center transition-all"
              style={{
                backgroundColor: tier.highlight ? "#7C5CFF" : "white",
                borderColor: tier.highlight ? "#7C5CFF" : "#E5E7EB",
                color: tier.highlight ? "white" : "#090B10",
              }}
            >
              <p
                className="text-xs font-semibold mb-1"
                style={{ color: tier.highlight ? "rgba(255,255,255,0.7)" : "#707887" }}
              >
                {tier.label}
              </p>
              {!tier.to && (
                <p className="text-xs leading-none mb-0.5" style={{ color: tier.highlight ? "rgba(255,255,255,0.6)" : "#A6ADBB" }}>
                  Starting from
                </p>
              )}
              <p className="text-lg font-bold leading-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
                ${tier.from}
              </p>
              {tier.to && (
                <p
                  className="text-xs mt-0.5"
                  style={{ color: tier.highlight ? "rgba(255,255,255,0.7)" : "#A6ADBB" }}
                >
                  – ${tier.to}/mo
                </p>
              )}
            </div>
          ))}
        </div>

        {/* What's included */}
        <div className="max-w-xl mx-auto bg-white rounded-2xl border border-gray-100 p-6 mb-8 shadow-sm">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#707887" }}
          >
            Everything included
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {included.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-midnight">
                <Check size={14} style={{ color: "#3DDC97" }} className="flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: "#7C5CFF" }}
          >
            See full pricing details
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
