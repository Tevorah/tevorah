"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Check, ChevronDown, AlertCircle } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const roles = [
  "Full-Stack Engineer",
  "Frontend Engineer",
  "Backend Engineer",
  "AI / ML Engineer",
  "DevOps / Platform",
  "Mobile Engineer",
  "Data Engineer",
  "Other",
];

const timelines = [
  "ASAP — within 2 weeks",
  "1–4 weeks",
  "1–3 months",
  "Just exploring",
];

function CustomSelect({
  id,
  value,
  onChange,
  options,
  placeholder,
  error,
}: {
  id?: string;
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
        id={id}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
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
        style={{
          color: "#A6ADBB",
          transform: open ? "translateY(-50%) rotate(180deg)" : "translateY(-50%) rotate(0deg)",
        }}
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

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function FieldError({ id, msg }: { id?: string; msg?: string }) {
  if (!msg) return null;
  return (
    <p id={id} role="alert" className="text-xs mt-1.5" style={{ color: "#EF4444" }}>
      {msg}
    </p>
  );
}

export default function BuildTeamCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    timeline: "",
    notes: "",
    _gotcha: "",
  });
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});

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
    if (!form.role) e.role = "Please select the role you're hiring for.";
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
        body: JSON.stringify({ formType: "build-team", ...form }),
      });
      if (!res.ok) throw new Error("Server error");
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please email us at support@tevorah.com.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full px-3 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors`;

  const inputStyle = (field: string) => ({
    color: "#090B10",
    borderColor: errors[field] ? "#EF4444" : "#E5E7EB",
  });

  const inputFocusStyle = (field: string) =>
    errors[field] ? {} : {};

  return (
    <section id="build-team" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <Reveal>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#7C5CFF" }}
            >
              Get started
            </p>
            <h2
              className="text-4xl font-bold text-midnight mb-6"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Ready to build your team?
            </h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "#707887" }}>
              Tell us what you need. We&apos;ll match you with verified candidates.
              No commitment required.
            </p>

            <div className="space-y-5">
              {[
                { title: "Fast matching", desc: "First verified candidates in your inbox quickly after your brief." },
                { title: "You approve everything", desc: "We never place without your sign-off. You meet, you decide." },
                { title: "No upfront cost", desc: "Pay only when your team member starts. Transparent monthly pricing." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "rgba(124,92,255,0.1)" }}
                  >
                    <Check size={14} style={{ color: "#7C5CFF" }} />
                  </div>
                  <div>
                    <p className="font-semibold text-midnight text-sm">{item.title}</p>
                    <p className="text-sm mt-0.5" style={{ color: "#707887" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={0.1} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            {submitted ? (
              <div className="text-center py-12" role="status">
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
                  Request received
                </h3>
                <p className="text-sm" style={{ color: "#707887" }}>
                  We&apos;ll be in touch with matched candidates shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="flex items-center justify-between mb-6">
                  <h3
                    className="text-lg font-bold text-midnight"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    Build a Team
                  </h3>
                  <span className="text-xs" style={{ color: "#A6ADBB" }}>* Required</span>
                </div>

                {/* Honeypot — hidden from sighted users and screen readers, bots that autofill every field trip it */}
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="btc-name" className="block text-xs font-semibold mb-1.5 text-midnight">
                      Your name *
                    </label>
                    <input
                      id="btc-name"
                      type="text"
                      placeholder="Alex Smith"
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      className={inputClass("name")}
                      style={inputStyle("name")}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "btc-name-error" : undefined}
                    />
                    <FieldError id="btc-name-error" msg={errors.name} />
                  </div>
                  <div>
                    <label htmlFor="btc-email" className="block text-xs font-semibold mb-1.5 text-midnight">
                      Work email *
                    </label>
                    <input
                      id="btc-email"
                      type="email"
                      placeholder="alex@company.com"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      className={inputClass("email")}
                      style={inputStyle("email")}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "btc-email-error" : undefined}
                    />
                    <FieldError id="btc-email-error" msg={errors.email} />
                  </div>
                </div>

                <div>
                  <label htmlFor="btc-company" className="block text-xs font-semibold mb-1.5 text-midnight">
                    Company <span className="font-normal" style={{ color: "#A6ADBB" }}>(optional)</span>
                  </label>
                  <input
                    id="btc-company"
                    type="text"
                    placeholder="Acme Inc."
                    value={form.company}
                    onChange={(e) => set("company", e.target.value)}
                    className={inputClass("company")}
                    style={inputStyle("company")}
                  />
                </div>

                <div>
                  <label htmlFor="btc-role" className="block text-xs font-semibold mb-1.5 text-midnight">
                    Role you&apos;re hiring for *
                  </label>
                  <CustomSelect
                    id="btc-role"
                    value={form.role}
                    onChange={(v) => { set("role", v); }}
                    options={roles}
                    placeholder="Select a role"
                    error={!!errors.role}
                  />
                  <FieldError id="btc-role-error" msg={errors.role} />
                </div>

                <div>
                  <label htmlFor="btc-timeline" className="block text-xs font-semibold mb-1.5 text-midnight">
                    When do you need them? <span className="font-normal" style={{ color: "#A6ADBB" }}>(optional)</span>
                  </label>
                  <CustomSelect
                    id="btc-timeline"
                    value={form.timeline}
                    onChange={(v) => set("timeline", v)}
                    options={timelines}
                    placeholder="Select timeline"
                  />
                </div>

                <div>
                  <label htmlFor="btc-notes" className="block text-xs font-semibold mb-1.5 text-midnight">
                    Anything else? <span className="font-normal" style={{ color: "#A6ADBB" }}>(optional)</span>
                  </label>
                  <textarea
                    id="btc-notes"
                    rows={3}
                    placeholder="Tech stack, team size, specific requirements..."
                    value={form.notes}
                    onChange={(e) => set("notes", e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-electric transition-colors resize-none"
                    style={{ color: "#090B10" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90 disabled:opacity-60"
                  style={{ backgroundColor: "#7C5CFF" }}
                >
                  {submitting ? "Sending…" : "Send request"}
                  {!submitting && <Send size={14} />}
                </button>

                {submitError && (
                  <p role="alert" className="flex items-center justify-center gap-1.5 text-xs text-center" style={{ color: "#EF4444" }}>
                    <AlertCircle size={13} className="flex-shrink-0" />
                    {submitError}
                  </p>
                )}

                <p className="text-center text-xs" style={{ color: "#A6ADBB" }}>
                  We&apos;ll respond promptly. No commitment required.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
