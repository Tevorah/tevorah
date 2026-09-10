import Link from "next/link";
import { ArrowRight, Shield, Zap, Eye, Heart, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Proof over promises",
    desc: "Every claim about our talent is backed by structured assessment — not CVs, not interviews alone. Technical test, AI fluency benchmark, communication evaluation.",
    color: "#7C5CFF",
  },
  {
    icon: Heart,
    title: "People aren't resources",
    desc: "We don't talk about 'headcount'. We talk about people — skilled professionals who join your team, contribute to your culture, and grow with your company.",
    color: "#3DDC97",
  },
  {
    icon: Eye,
    title: "Transparency by default",
    desc: "You see scores, you see assessments, you see pricing. No black boxes, no bait-and-switch. What you see is what you get.",
    color: "#45DDF5",
  },
  {
    icon: Zap,
    title: "AI makes people better",
    desc: "We assess AI fluency because the best engineers of today use AI tools to amplify their output. We find people who know how.",
    color: "#F6C85F",
  },
  {
    icon: TrendingUp,
    title: "Placement is the beginning",
    desc: "Our job doesn't end when someone starts. We provide ongoing support, performance monitoring, and HR infrastructure for the life of the engagement.",
    color: "#7C5CFF",
  },
];

const whySriLanka = [
  {
    stat: "Top 30",
    label: "English proficiency ranking in Asia",
  },
  {
    stat: "GMT+5:30",
    label: "Overlaps with US, UK, ME, and Australian business hours",
  },
  {
    stat: "40%+",
    label: "STEM graduates entering tech each year",
  },
  {
    stat: "98%",
    label: "Client satisfaction rate on Tevorah placements",
  },
];

const differentiators = [
  {
    traditional: "You review CVs",
    tevorah: "You review verified scores",
  },
  {
    traditional: "You hope they fit",
    tevorah: "You meet them before committing",
  },
  {
    traditional: "Multiple intermediaries",
    tevorah: "Direct. One monthly cost.",
  },
  {
    traditional: "Placement ends the relationship",
    tevorah: "Placement is just the beginning",
  },
  {
    traditional: "AI fluency is unknown",
    tevorah: "AI fluency is scored",
  },
  {
    traditional: "Offshore feeling offshore",
    tevorah: "Your team. Your tools. Your culture.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20 sm:pt-24 pb-16 sm:pb-24">
      {/* Header */}
      <div className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: "#F5F7FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#7C5CFF" }}>
              About Tevorah
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-midnight mb-4 sm:mb-6 leading-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
              Technology teams, built differently.
            </h1>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed" style={{ color: "#707887" }}>
              Tevorah is an AI-era global technology talent platform. We help startups,
              scaleups, and technology companies build dedicated technology teams using
              verified global talent — beginning with Sri Lanka.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission */}
        <section className="py-12 sm:py-16 lg:py-20 border-b border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#7C5CFF" }}>
                Why Tevorah exists
              </p>
              <h2 className="text-3xl font-bold text-midnight mb-5" style={{ fontFamily: "Manrope, sans-serif" }}>
                The offshore problem is solvable
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#707887" }}>
                The offshore talent model has a trust problem. Companies can&apos;t verify quality
                before committing. They don&apos;t know who they&apos;re really hiring. And once
                someone starts, they don&apos;t feel like part of the team.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#707887" }}>
                Tevorah was built to fix that. By combining structured AI-era assessment, direct
                team integration, and transparent infrastructure — we make global hiring feel like
                local hiring.
              </p>
            </div>
            <div className="space-y-3">
              {differentiators.map((d) => (
                <div key={d.traditional} className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-gray-100 p-3.5">
                    <p className="text-xs font-semibold mb-1" style={{ color: "#A6ADBB" }}>Traditional</p>
                    <p className="text-sm text-midnight">{d.traditional}</p>
                  </div>
                  <div className="rounded-xl p-3.5" style={{ backgroundColor: "rgba(124,92,255,0.05)", border: "1px solid rgba(124,92,255,0.15)" }}>
                    <p className="text-xs font-semibold mb-1" style={{ color: "#7C5CFF" }}>Tevorah</p>
                    <p className="text-sm text-midnight">{d.tevorah}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand values */}
        <section id="values" className="py-12 sm:py-16 lg:py-20 border-b border-gray-100">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#7C5CFF" }}>
              Brand values
            </p>
            <h2 className="text-3xl font-bold text-midnight" style={{ fontFamily: "Manrope, sans-serif" }}>
              How we think about the work
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-white rounded-2xl border border-gray-100 p-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${v.color}15` }}
                  >
                    <Icon size={18} style={{ color: v.color }} />
                  </div>
                  <h3 className="font-bold text-midnight mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#707887" }}>
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Sri Lanka talent */}
        <section id="talent" className="py-12 sm:py-16 lg:py-20 border-b border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#7C5CFF" }}>
                Talent origin
              </p>
              <h2 className="text-3xl font-bold text-midnight mb-5" style={{ fontFamily: "Manrope, sans-serif" }}>
                Beginning with Sri Lanka
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#707887" }}>
                Sri Lanka is one of Asia&apos;s most overlooked technology talent markets. High English
                fluency, strong STEM graduate output, and a timezone that works for US, UK, Middle East,
                and Australian business hours.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#707887" }}>
                Tevorah starts here because we know this market deeply — and because we can verify and
                vouch for the talent we place. Great talent can live anywhere. We&apos;re proving it.
              </p>
              <Link
                href="/talent"
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: "#7C5CFF" }}
              >
                Explore available talent
                <ArrowRight size={15} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {whySriLanka.map((item) => (
                <div key={item.stat} className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
                  <p className="text-3xl font-bold text-midnight mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>
                    {item.stat}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "#707887" }}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Market coverage */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#7C5CFF" }}>
              Markets we serve
            </p>
            <h2 className="text-3xl font-bold text-midnight mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
              Global reach. Regional support.
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "#707887" }}>
              We serve clients across four regions, with specialist support for Middle East companies
              building digital-first teams.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { region: "United States", cities: "New York, San Francisco, Austin", flag: "🇺🇸" },
              { region: "United Kingdom", cities: "London, Manchester, Edinburgh", flag: "🇬🇧" },
              { region: "Middle East", cities: "Dubai, Riyadh, Doha, Abu Dhabi", flag: "🌙", highlight: true },
              { region: "Australia", cities: "Sydney, Melbourne, Brisbane", flag: "🇦🇺" },
            ].map((m) => (
              <div
                key={m.region}
                className="rounded-2xl border p-5 text-center"
                style={{
                  backgroundColor: m.highlight ? "rgba(124,92,255,0.04)" : "white",
                  borderColor: m.highlight ? "rgba(124,92,255,0.2)" : "#E5E7EB",
                }}
              >
                <div className="text-3xl mb-3">{m.flag}</div>
                <p className="font-bold text-midnight text-sm mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>
                  {m.region}
                </p>
                <p className="text-xs" style={{ color: "#A6ADBB" }}>{m.cities}</p>
                {m.highlight && (
                  <span className="inline-block mt-3 text-xs font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: "rgba(124,92,255,0.1)", color: "#7C5CFF" }}>
                    Priority market
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div
          className="rounded-2xl p-6 sm:p-10 text-center"
          style={{ background: "linear-gradient(135deg, rgba(124,92,255,0.06), rgba(69,221,245,0.06))", border: "1px solid rgba(124,92,255,0.15)" }}
        >
          <h3 className="text-2xl font-bold text-midnight mb-3" style={{ fontFamily: "Manrope, sans-serif" }}>
            Build your team with Tevorah
          </h3>
          <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: "#707887" }}>
            Verified candidates, transparent pricing, full infrastructure. Ready in 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/talent"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-gray-200 text-midnight"
            >
              Explore Talent
            </Link>
            <Link
              href="/#build-team"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm"
              style={{ backgroundColor: "#7C5CFF" }}
            >
              Build a Team
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
