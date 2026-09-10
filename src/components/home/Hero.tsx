"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const trustItems = [
  "Technical tested",
  "Communication tested",
  "AI readiness assessed",
  "Dedicated to your team",
];

const previewCards = [
  { name: "Akeel K.", role: "AI Full-Stack", tech: 88, ai: 92, comm: 90, price: "$2,000" },
  { name: "Priya S.", role: "Senior Backend", tech: 93, ai: 79, comm: 88, price: "$4,500" },
  { name: "Ravindu P.", role: "AI/ML Engineer", tech: 91, ai: 96, comm: 85, price: "$4,200" },
];

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(69,221,245,0.12) 0%, rgba(124,92,255,0.06) 40%, transparent 70%)",
        }}
      />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,92,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(124,92,255,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-3 py-1.5 rounded-full border text-xs font-semibold"
            style={{
              borderColor: "rgba(124,92,255,0.3)",
              color: "#7C5CFF",
              backgroundColor: "rgba(124,92,255,0.06)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse inline-block" style={{ backgroundColor: "#3DDC97" }} />
            Talent available now · Starting from $800/month
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-midnight mb-5 sm:mb-6 leading-[1.05]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Build your tech team.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7C5CFF, #45DDF5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Without the offshore uncertainty.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-base sm:text-xl leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto"
            style={{ color: "#707887" }}
          >
            Verified, AI-ready technology talent that works directly inside your
            team. You lead the work. We make the people side work.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 sm:mb-12">
            <Link
              href="/talent"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm transition-all hover:shadow-lg"
              style={{ backgroundColor: "#7C5CFF" }}
            >
              Explore Talent
              <ArrowRight size={16} />
            </Link>
            <Link
              href="#build-team"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-gray-200 text-midnight hover:border-purple-300 transition-all"
            >
              Build a Team
            </Link>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5">
            {trustItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-1.5 text-xs sm:text-sm"
                style={{ color: "#707887" }}
              >
                <CheckCircle2 size={13} style={{ color: "#3DDC97" }} />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Hero preview cards */}
        <div className="mt-14 sm:mt-20 relative">
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

          {/* Mobile: horizontal scroll, Desktop: centered flex */}
          <div className="flex gap-4 overflow-x-auto sm:overflow-hidden sm:justify-center pb-4 sm:pb-0 px-1 -mx-1 scrollbar-hide snap-x snap-mandatory">
            {previewCards.map((p) => (
              <div
                key={p.name}
                className="flex-shrink-0 w-[280px] sm:w-72 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm snap-start"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #7C5CFF, #45DDF5)" }}
                  >
                    {p.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-midnight">{p.name}</p>
                    <p className="text-xs" style={{ color: "#707887" }}>{p.role}</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  {[
                    { label: "Technical", score: p.tech },
                    { label: "AI Fluency", score: p.ai },
                    { label: "Communication", score: p.comm },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center justify-between text-xs gap-2">
                      <span className="flex-shrink-0" style={{ color: "#707887" }}>{s.label}</span>
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <div className="flex-1 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${s.score}%`,
                              background: s.score >= 90 ? "#3DDC97" : s.score >= 80 ? "#45DDF5" : "#7C5CFF",
                            }}
                          />
                        </div>
                        <span className="font-semibold text-midnight w-6 text-right flex-shrink-0">{s.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-medium px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: "rgba(69,221,245,0.1)", color: "#45DDF5" }}
                  >
                    Tevorah Verified
                  </span>
                  <span className="font-bold text-sm text-midnight">
                    {p.price}
                    <span className="font-normal text-xs" style={{ color: "#707887" }}>/mo</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
