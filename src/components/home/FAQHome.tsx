"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const faqs = [
  {
    q: "Is there a placement or recruitment fee?",
    a: "No. Tevorah charges a single monthly flat rate per team member. No placement fees, no recruitment percentages, no surprises.",
  },
  {
    q: "How is talent verified?",
    a: "Every profile completes Tevorah Verified — a technical assessment, an AI fluency benchmark, and a communication evaluation — before being shown to clients.",
  },
  {
    q: "How quickly can someone start?",
    a: "Most team members are ready within 1–4 weeks from your first brief.",
  },
  {
    q: "What if it's not working out?",
    a: "If a team member isn't the right fit within the first 30 days, we'll replace them at no extra cost.",
  },
  {
    q: "Do you work with companies outside the UK / US?",
    a: "Yes. We serve clients across the US, UK, Europe, Australia, and the Middle East, with talent working in your timezone where possible.",
  },
];

export default function FAQHome() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#7C5CFF" }}>
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-midnight" style={{ fontFamily: "Manrope, sans-serif" }}>
              Common questions
            </h2>
          </div>
        </Reveal>

        <div className="space-y-2">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={faq.q} className="rounded-xl border border-gray-100 bg-white overflow-hidden shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  aria-controls={`faq-answer-${i}`}
                  className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
                >
                  <span className="font-semibold text-sm text-midnight">{faq.q}</span>
                  <ChevronDown
                    size={16}
                    aria-hidden="true"
                    style={{
                      color: "#A6ADBB",
                      transition: "transform 0.2s",
                      transform: open ? "rotate(180deg)" : "none",
                      flexShrink: 0,
                    }}
                  />
                </button>
                {open && (
                  <div id={`faq-answer-${i}`} className="px-5 pb-4">
                    <p className="text-sm leading-relaxed" style={{ color: "#707887" }}>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
