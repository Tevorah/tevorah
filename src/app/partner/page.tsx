"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Check, Users, Briefcase, GraduationCap, Send, Globe, Zap, TrendingUp, ChevronDown } from "lucide-react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URL_RE = /^https?:\/\/.+\..+/;

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="text-xs mt-1.5" style={{ color: "#EF4444" }}>{msg}</p>;
}

function CustomSelect({
  value,
  onChange,
  options,
  placeholder,
  error,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
  error?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full px-3 py-2.5 pr-9 rounded-lg border text-sm text-left transition-colors bg-white"
        style={{
          borderColor: error ? "#EF4444" : open ? "#7C5CFF" : "#E5E7EB",
          color: value ? "#090B10" : "#A6ADBB",
        }}
      >
        {value || placeholder}
      </button>
      <ChevronDown
        size={14}
        className="absolute right-3 top-1/2 pointer-events-none transition-transform duration-200"
        style={{ color: "#A6ADBB", transform: open ? "translateY(-50%) rotate(180deg)" : "translateY(-50%) rotate(0deg)" }}
      />
      {open && (
        <div className="absolute z-50 mt-1 w-full rounded-xl border border-gray-100 bg-white shadow-lg overflow-hidden">
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => { onChange(opt); setOpen(false); }}
              className="w-full px-3 py-2.5 text-sm text-left transition-colors hover:bg-gray-50"
              style={{
                color: value === opt ? "#7C5CFF" : "#090B10",
                fontWeight: value === opt ? 600 : 400,
                backgroundColor: value === opt ? "rgba(124,92,255,0.04)" : undefined,
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const partnerTypes = [
  {
    icon: Briefcase,
    type: "Referral Partner",
    tagline: "Grow your revenue by referring clients.",
    desc: "Consulting firms, fractional CTOs, tech advisors, and venture networks. If your clients need to build technology teams, refer them to Tevorah and earn a referral fee for every successful placement.",
    benefits: [
      "Competitive referral commission per placement",
      "Dedicated partner manager",
      "Co-branded materials and case studies",
      "Priority candidate access for your clients",
    ],
    color: "#7C5CFF",
    ideal: "Consulting firms · Fractional CTOs · Venture studios · Tech advisors",
  },
  {
    icon: Globe,
    type: "Technology Partner",
    tagline: "Integrate Tevorah into your platform.",
    desc: "HR platforms, ATS providers, workforce management tools, and SaaS companies. Embed Tevorah's verified talent network directly into your product to offer global team-building as a native feature.",
    benefits: [
      "API access to the Tevorah talent network",
      "White-label partner options available",
      "Joint go-to-market support",
      "Co-selling with Tevorah's sales team",
    ],
    color: "#45DDF5",
    ideal: "HR platforms · ATS tools · Workforce SaaS · Developer tools",
  },
  {
    icon: GraduationCap,
    type: "Talent Partner",
    tagline: "Connect your graduates to global opportunities.",
    desc: "Universities, coding bootcamps, and professional training providers in Sri Lanka and beyond. Partner with Tevorah to give your graduates direct access to verified placements at high-growth technology companies worldwide.",
    benefits: [
      "Structured talent pipeline agreement",
      "Assessment and verification support",
      "Graduate placement tracking and reporting",
      "Tevorah Verified certification for your graduates",
    ],
    color: "#3DDC97",
    ideal: "Universities · Bootcamps · Training providers · Tech institutes",
  },
];

const reasons = [
  {
    icon: TrendingUp,
    title: "A growing market",
    desc: "Global demand for verified technology talent is accelerating. Tevorah is building the infrastructure for the next generation of global teams.",
  },
  {
    icon: Zap,
    title: "AI-era positioning",
    desc: "Every Tevorah candidate is assessed for AI fluency, not just technical ability. Your clients get talent that's ready for the way software is built today.",
  },
  {
    icon: Users,
    title: "Proof, not promises",
    desc: "Transparent verification scores, not black-box CVs. Your clients can see exactly who they're hiring before committing.",
  },
  {
    icon: Check,
    title: "Full infrastructure",
    desc: "Payroll, compliance, HR, and ongoing support, all handled by Tevorah. Less friction for your clients, more value for your partnership.",
  },
];

const steps = [
  {
    num: "01",
    title: "Apply",
    desc: "Fill in the form below. Tell us about your organisation and how you'd like to partner.",
  },
  {
    num: "02",
    title: "Partner call",
    desc: "A Tevorah partner manager will reach out within 2 business days to discuss the fit.",
  },
  {
    num: "03",
    title: "Agreement",
    desc: "We agree terms, set up tracking, and onboard you into the partner programme.",
  },
  {
    num: "04",
    title: "Go to market",
    desc: "Start referring, integrating, or placing talent, with full Tevorah support behind you.",
  },
];

const partnerTypeOptions = ["Referral Partner", "Technology Partner", "Talent Partner", "Not sure yet"];

export default function PartnerPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    partnerType: "",
    description: "",
    _gotcha: "",
  });
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const clearError = (k: string) =>
    setErrors((prev) => ({ ...prev, [k]: undefined }));

  const set = (k: keyof typeof form, v: string) => {
    setForm((prev) => ({ ...prev, [k]: v }));
    clearError(k);
  };

  const validate = () => {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = "Your name is required.";
    if (!form.email.trim()) e.email = "Work email is required.";
    else if (!EMAIL_RE.test(form.email.trim())) e.email = "Please enter a valid email address.";
    if (!form.company.trim()) e.company = "Organisation name is required.";
    if (form.website.trim() && !URL_RE.test(form.website.trim()))
      e.website = "Please enter a valid URL (e.g. https://example.com).";
    if (!form.partnerType) e.partnerType = "Please select a partner type.";
    if (!form.description.trim()) e.description = "Please tell us about your organisation.";
    else if (form.description.trim().length < 20) e.description = "Please provide a bit more detail (at least 20 characters).";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "partner", ...form }),
      });
      if (!res.ok) throw new Error("Server error");
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please email us at support@tevorah.com.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-20 sm:pt-24 pb-16 sm:pb-24">
      {/* Hero */}
      <div
        className="relative py-12 sm:py-16 lg:py-20 overflow-hidden"
        style={{ backgroundColor: "#F5F7FA" }}
      >
        <div
          className="absolute inset-0 -z-10 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,92,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(124,92,255,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#7C5CFF" }}
            >
              Partner programme
            </p>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-midnight mb-4 sm:mb-6 leading-tight"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Become a Tevorah Partner
            </h1>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8" style={{ color: "#707887" }}>
              Grow your business, extend your platform, or connect your graduates
              to global opportunities. Tevorah partners build the next generation
              of technology teams, together.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: "#7C5CFF" }}
              >
                Apply to partner
                <ArrowRight size={15} />
              </a>
              <a
                href="#types"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-gray-200 text-midnight hover:border-purple-300 transition-all"
              >
                See partner types
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Why partner */}
        <section className="py-12 sm:py-16 lg:py-20 border-b border-gray-100">
          <div className="text-center mb-10 sm:mb-14">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#7C5CFF" }}
            >
              Why partner with Tevorah
            </p>
            <h2
              className="text-3xl font-bold text-midnight"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Built to grow with you
            </h2>
            <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: "#707887" }}>
              Whether you refer, integrate, or place, Tevorah gives you the
              infrastructure to deliver real value to your network.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reasons.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: "rgba(124,92,255,0.08)" }}
                  >
                    <Icon size={18} style={{ color: "#7C5CFF" }} />
                  </div>
                  <h3
                    className="font-bold text-midnight text-sm mb-2"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {r.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#707887" }}>
                    {r.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Partner types */}
        <section id="types" className="py-12 sm:py-16 lg:py-20 border-b border-gray-100">
          <div className="text-center mb-10 sm:mb-14">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#7C5CFF" }}
            >
              Partner types
            </p>
            <h2
              className="text-3xl font-bold text-midnight"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Three ways to partner
            </h2>
            <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: "#707887" }}>
              Choose the model that fits your business. Not sure? Apply and
              we&apos;ll figure it out together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {partnerTypes.map((pt) => {
              const Icon = pt.icon;
              return (
                <div
                  key={pt.type}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col"
                >
                  {/* Type header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${pt.color}12` }}
                    >
                      <Icon size={18} style={{ color: pt.color }} />
                    </div>
                    <div>
                      <p
                        className="font-bold text-midnight text-sm"
                        style={{ fontFamily: "Manrope, sans-serif" }}
                      >
                        {pt.type}
                      </p>
                      <p className="text-xs font-medium" style={{ color: pt.color }}>
                        {pt.tagline}
                      </p>
                    </div>
                  </div>

                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: "#707887" }}
                  >
                    {pt.desc}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-2 mb-5">
                    {pt.benefits.map((b) => (
                      <div key={b} className="flex items-start gap-2 text-sm">
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: `${pt.color}14` }}
                        >
                          <Check size={9} style={{ color: pt.color }} />
                        </div>
                        <span className="text-midnight">{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ideal for */}
                  <div
                    className="mt-auto pt-4 border-t border-gray-100"
                  >
                    <p className="text-xs font-semibold mb-1" style={{ color: "#A6ADBB" }}>
                      Ideal for
                    </p>
                    <p className="text-xs" style={{ color: "#707887" }}>
                      {pt.ideal}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* How it works */}
        <section className="py-12 sm:py-16 lg:py-20 border-b border-gray-100">
          <div className="text-center mb-10 sm:mb-14">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#7C5CFF" }}
            >
              How it works
            </p>
            <h2
              className="text-3xl font-bold text-midnight"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              From application to active partner
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
              >
                <p
                  className="text-3xl font-bold mb-4"
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    color: "rgba(124,92,255,0.15)",
                  }}
                >
                  {step.num}
                </p>
                <h3
                  className="font-bold text-midnight mb-2 text-sm"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#707887" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Application form */}
        <section id="apply" className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left */}
            <div>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: "#7C5CFF" }}
              >
                Apply now
              </p>
              <h2
                className="text-3xl font-bold text-midnight mb-5"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Ready to partner with Tevorah?
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#707887" }}>
                Fill in the form and a member of our partnerships team will be in
                touch within 2 business days. No commitment required.
              </p>

              {/* Stats / proof */}
              <div className="space-y-4">
                {[
                  {
                    value: "48h",
                    label: "Response time from application",
                    color: "#7C5CFF",
                  },
                  {
                    value: "3",
                    label: "Partner types: referral, technology, talent",
                    color: "#45DDF5",
                  },
                  {
                    value: "4",
                    label: "Regions: US, UK, Middle East, Australia",
                    color: "#3DDC97",
                  },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-4">
                    <div
                      className="text-2xl font-bold flex-shrink-0 w-14"
                      style={{
                        fontFamily: "Manrope, sans-serif",
                        color: s.color,
                      }}
                    >
                      {s.value}
                    </div>
                    <p className="text-sm" style={{ color: "#707887" }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="mt-10 rounded-2xl p-5"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,92,255,0.05), rgba(69,221,245,0.05))",
                  border: "1px solid rgba(124,92,255,0.12)",
                }}
              >
                <p className="text-sm font-semibold text-midnight mb-1">
                  Already a client looking to refer?
                </p>
                <p className="text-sm mb-3" style={{ color: "#707887" }}>
                  Existing Tevorah clients can join our referral programme directly.
                  Speak to your account manager or use the form.
                </p>
                <Link
                  href="/#build-team"
                  className="text-sm font-semibold inline-flex items-center gap-1"
                  style={{ color: "#7C5CFF" }}
                >
                  Contact your account manager
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "rgba(61,220,151,0.1)" }}
                  >
                    <Check size={28} style={{ color: "#3DDC97" }} />
                  </div>
                  <h3
                    className="text-xl font-bold text-midnight mb-2"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    Application received
                  </h3>
                  <p className="text-sm" style={{ color: "#707887" }}>
                    We&apos;ll be in touch within 2 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <input
                    type="text"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    value={form._gotcha}
                    onChange={(e) => set("_gotcha", e.target.value)}
                    style={{ position: "absolute", width: 1, height: 1, opacity: 0, overflow: "hidden", pointerEvents: "none" }}
                  />
                  <div className="flex items-center justify-between mb-6">
                    <h3
                      className="text-lg font-bold text-midnight"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      Partner Application
                    </h3>
                    <span className="text-xs" style={{ color: "#A6ADBB" }}>* Required</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 text-midnight">
                        Your name *
                      </label>
                      <input
                        type="text"
                        placeholder="Alex Smith"
                        value={form.name}
                        onChange={(e) => set("name", e.target.value)}
                        className="w-full px-3 py-2.5 rounded-lg border text-sm focus:outline-none focus:border-purple-400 transition-colors"
                        style={{ color: "#090B10", borderColor: errors.name ? "#EF4444" : "#E5E7EB" }}
                      />
                      <FieldError msg={errors.name} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 text-midnight">
                        Work email *
                      </label>
                      <input
                        type="email"
                        placeholder="alex@company.com"
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                        className="w-full px-3 py-2.5 rounded-lg border text-sm focus:outline-none focus:border-purple-400 transition-colors"
                        style={{ color: "#090B10", borderColor: errors.email ? "#EF4444" : "#E5E7EB" }}
                      />
                      <FieldError msg={errors.email} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 text-midnight">
                        Organisation *
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Partners"
                        value={form.company}
                        onChange={(e) => set("company", e.target.value)}
                        className="w-full px-3 py-2.5 rounded-lg border text-sm focus:outline-none focus:border-purple-400 transition-colors"
                        style={{ color: "#090B10", borderColor: errors.company ? "#EF4444" : "#E5E7EB" }}
                      />
                      <FieldError msg={errors.company} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 text-midnight">
                        Website <span className="font-normal" style={{ color: "#A6ADBB" }}>(optional)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="https://acme.com"
                        value={form.website}
                        onChange={(e) => set("website", e.target.value)}
                        className="w-full px-3 py-2.5 rounded-lg border text-sm focus:outline-none focus:border-purple-400 transition-colors"
                        style={{ color: "#090B10", borderColor: errors.website ? "#EF4444" : "#E5E7EB" }}
                      />
                      <FieldError msg={errors.website} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5 text-midnight">
                      Partner type *
                    </label>
                    <CustomSelect
                      value={form.partnerType}
                      onChange={(v) => { set("partnerType", v); }}
                      options={partnerTypeOptions}
                      placeholder="Select partner type"
                      error={!!errors.partnerType}
                    />
                    <FieldError msg={errors.partnerType} />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5 text-midnight">
                      Tell us about your organisation *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Who you are, how you work with clients or graduates, and what a partnership with Tevorah could look like..."
                      value={form.description}
                      onChange={(e) => set("description", e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border text-sm focus:outline-none focus:border-purple-400 transition-colors resize-none"
                      style={{ color: "#090B10", borderColor: errors.description ? "#EF4444" : "#E5E7EB" }}
                    />
                    <FieldError msg={errors.description} />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90 disabled:opacity-60"
                    style={{ backgroundColor: "#7C5CFF" }}
                  >
                    {submitting ? "Submitting…" : "Submit application"}
                    {!submitting && <Send size={14} />}
                  </button>

                  {submitError && (
                    <p className="text-xs text-center" style={{ color: "#EF4444" }}>{submitError}</p>
                  )}

                  <p
                    className="text-center text-xs"
                    style={{ color: "#A6ADBB" }}
                  >
                    We respond within 2 business days. No commitment required.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
