"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Globe,
  Shield,
  Users,
  Zap,
  TrendingUp,
  Heart,
  Upload,
  X,
  MapPin,
  Star,
  Code2,
  Cpu,
  Palette,
  BarChart3,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const whyJoinCards = [
  {
    icon: Globe,
    title: "Global Opportunities",
    color: "#7C5CFF",
    body: "Access potential opportunities with growing companies across the Middle East, United States, United Kingdom, Europe and Australia.",
  },
  {
    icon: MapPin,
    title: "Remote-First",
    color: "#45DDF5",
    body: "Tevorah focuses on roles designed for distributed technology teams. Build your career internationally without having to relocate.",
  },
  {
    icon: Star,
    title: "More Than a CV",
    color: "#3DDC97",
    body: "We help represent your technical ability, practical skills, AI capability, communication, experience and availability.",
  },
  {
    icon: Users,
    title: "Direct Company Access",
    color: "#F6C85F",
    body: "Where there is a strong fit, candidates may interview directly with the company building the team.",
  },
  {
    icon: TrendingUp,
    title: "Career Development",
    color: "#7C5CFF",
    body: "Tevorah's long-term goal is to help its talent community stay current through AI skills, modern development tools, and technical learning.",
  },
  {
    icon: Heart,
    title: "Human Support",
    color: "#45DDF5",
    body: "Tevorah is not a faceless CV database. Where candidates progress into opportunities, Tevorah supports them through the journey.",
  },
];

const talentCategories = [
  {
    label: "BUILD",
    icon: Code2,
    color: "#7C5CFF",
    roles: [
      "AI Full-Stack Developers",
      "Frontend Developers",
      "Backend Developers",
      "Mobile Developers",
      "AI Automation Engineers",
      "Data Engineers",
      "Software Engineers",
    ],
  },
  {
    label: "SHIP",
    icon: Zap,
    color: "#45DDF5",
    roles: [
      "QA Automation Engineers",
      "Cloud Engineers",
      "DevOps Engineers",
      "Implementation Engineers",
      "Technical Support Engineers",
      "Solutions Engineers",
    ],
  },
  {
    label: "CREATE",
    icon: Palette,
    color: "#3DDC97",
    roles: [
      "Product Designers",
      "UI/UX Designers",
      "Design System Specialists",
      "Digital Product Designers",
    ],
  },
  {
    label: "GROW",
    icon: BarChart3,
    color: "#F6C85F",
    roles: [
      "AI Growth Specialists",
      "Marketing Automation Specialists",
      "Technical Content Specialists",
      "Growth Engineers",
    ],
  },
];

const marketCards = [
  {
    flag: "🌙",
    region: "Middle East",
    countries: "UAE · Saudi Arabia · Qatar · Bahrain",
    note: "Excellent working-hour compatibility with Sri Lanka.",
    highlight: true,
  },
  {
    flag: "🇬🇧",
    region: "United Kingdom & Europe",
    countries: "London · Amsterdam · Berlin · Dublin",
    note: "Strong timezone overlap for distributed technology teams.",
    highlight: false,
  },
  {
    flag: "🇦🇺",
    region: "Australia",
    countries: "Sydney · Melbourne · Brisbane",
    note: "Excellent working-day overlap.",
    highlight: false,
  },
  {
    flag: "🇺🇸",
    region: "United States",
    countries: "New York · San Francisco · Austin",
    note: "Remote opportunities with agreed working-hour overlap depending on the role.",
    highlight: false,
  },
];

const howItWorksSteps = [
  {
    num: "01",
    label: "JOIN",
    title: "Create your basic profile",
    body: "Fill in the form below with your experience, technologies and latest CV. It takes only a few minutes.",
    color: "#7C5CFF",
  },
  {
    num: "02",
    label: "REVIEW",
    title: "We review your profile",
    body: "Tevorah reviews your experience, technologies and CV to understand your background and potential fit.",
    color: "#45DDF5",
  },
  {
    num: "03",
    label: "VERIFY",
    title: "Selected candidates verify",
    body: "Where relevant, you may be invited to complete Tevorah Verification: technical assessment, practical challenge, communication and AI fluency.",
    color: "#3DDC97",
  },
  {
    num: "04",
    label: "MATCH",
    title: "We match when relevant",
    body: "When an appropriate client requirement appears, Tevorah matches your profile against the opportunity.",
    color: "#F6C85F",
  },
  {
    num: "05",
    label: "MEET",
    title: "You meet the company",
    body: "If there is mutual interest, you may interview directly with the company building the team.",
    color: "#7C5CFF",
  },
];

const benefitItems = [
  { title: "Free to Join", body: "No candidate registration fee. Ever.", icon: Shield },
  { title: "Global Visibility", body: "Be considered for Tevorah client requirements across four regions.", icon: Globe },
  { title: "Professional Representation", body: "Tevorah presents talent based on skills and fit, not just forwarding CVs.", icon: Star },
  { title: "Direct Interviews", body: "Where appropriate, meet hiring companies directly.", icon: Users },
  { title: "Career Support", body: "Where you join Tevorah opportunities, we provide ongoing local support.", icon: Heart },
  { title: "Talent Development", body: "The Tevorah vision includes continuous AI and technical development for network members.", icon: TrendingUp },
];

const promiseItems = [
  { text: "We won't sell your information.", positive: false },
  { text: "We won't send your CV everywhere without context.", positive: false },
  { text: "We won't promise jobs that don't exist.", positive: false },
  { text: "We won't charge you to join.", positive: false },
  { text: "We won't judge your ability purely from your job title.", positive: false },
  { text: "We will try to understand what you're actually good at.", positive: true },
];

const primaryAreas = [
  "AI / Machine Learning",
  "Full-Stack Development",
  "Frontend Development",
  "Backend Development",
  "Mobile Development",
  "AI Automation",
  "QA / Test Automation",
  "Data Engineering",
  "DevOps / Cloud",
  "Product Design / UI-UX",
  "Technical Implementation",
  "Growth / Marketing Technology",
  "Technical Support",
  "Other",
];

const experienceBands = [
  "Less than 1 year",
  "1–3 years",
  "3–5 years",
  "5–8 years",
  "8+ years",
];

const faqs = [
  {
    q: "Is Tevorah a recruitment agency?",
    a: "Tevorah is building a global technology talent platform. We connect verified technology professionals with companies building distributed teams and provide the infrastructure around those relationships.",
  },
  {
    q: "Does joining guarantee me a job?",
    a: "No. Joining the Tevorah Talent Network means your profile can be considered when suitable opportunities become available. We do not guarantee placement.",
  },
  {
    q: "Do I have to pay anything?",
    a: "No. Candidates should never be charged to join the Tevorah Talent Network.",
  },
  {
    q: "Can junior professionals join?",
    a: "Yes. Tevorah plans to work with strong junior, mid-level and senior technology professionals depending on client requirements.",
  },
  {
    q: "Do I need AI experience?",
    a: "Not for every role. However, Tevorah believes AI fluency will become increasingly important across technology careers, and AI capability may form part of the assessment process.",
  },
  {
    q: "Are the opportunities remote?",
    a: "Tevorah primarily focuses on opportunities within distributed and remote technology teams. Specific working arrangements depend on each company and role.",
  },
  {
    q: "Where are Tevorah clients located?",
    a: "Tevorah's priority markets include the Middle East, United States, United Kingdom/Europe and Australia.",
  },
  {
    q: "What happens to my CV?",
    a: "Your information is used to build your Tevorah talent profile and identify potential relevant opportunities. We will not share your details without your knowledge.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function TagInput({
  tags,
  onAdd,
  onRemove,
  placeholder,
}: {
  tags: string[];
  onAdd: (t: string) => void;
  onRemove: (t: string) => void;
  placeholder: string;
}) {
  const [input, setInput] = useState("");

  const addTag = () => {
    const tag = input.trim();
    if (tag && !tags.includes(tag)) onAdd(tag);
    setInput("");
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-3 min-h-[52px] flex flex-wrap gap-2 items-start focus-within:border-purple-400 transition-colors">
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold"
          style={{ backgroundColor: "rgba(124,92,255,0.08)", color: "#7C5CFF" }}
        >
          {tag}
          <button type="button" onClick={() => onRemove(tag)} className="hover:text-midnight transition-colors">
            <X size={10} />
          </button>
        </span>
      ))}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") { e.preventDefault(); addTag(); }
          if (e.key === "," && input.trim()) { e.preventDefault(); addTag(); }
        }}
        placeholder={tags.length === 0 ? placeholder : "Add another..."}
        className="flex-1 min-w-[140px] bg-transparent text-sm outline-none text-midnight"
        style={{ color: "#090B10" }}
      />
    </div>
  );
}

const ACCEPTED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const MAX_SIZE = 10 * 1024 * 1024;

function FileUpload({
  file,
  onFile,
  error,
}: {
  file: File | null;
  onFile: (f: File | null, err?: string) => void;
  error?: string;
}) {
  const ref = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  const validate = (f: File) => {
    if (!ACCEPTED_TYPES.includes(f.type)) return "Please upload a PDF, DOC or DOCX file.";
    if (f.size > MAX_SIZE) return "File must be under 10 MB.";
    return null;
  };

  const handleFile = (f: File) => {
    const err = validate(f);
    onFile(err ? null : f, err ?? undefined);
  };

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f) {
      const err = validate(f);
      onFile(err ? null : f, err ?? undefined);
    }
  }, [onFile]);

  return (
    <div>
      <div
        onClick={() => ref.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        className="rounded-xl border-2 border-dashed p-6 text-center cursor-pointer transition-all"
        style={{
          borderColor: dragging ? "#7C5CFF" : error ? "#FF4D4F" : "#E5E7EB",
          backgroundColor: dragging ? "rgba(124,92,255,0.04)" : "#FAFAFA",
        }}
      >
        {file ? (
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(61,220,151,0.1)" }}>
              <Check size={16} style={{ color: "#3DDC97" }} />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-midnight">{file.name}</p>
              <p className="text-xs" style={{ color: "#A6ADBB" }}>{(file.size / 1024).toFixed(0)} KB</p>
            </div>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onFile(null); }}
              className="ml-2 p-1 rounded hover:bg-gray-100 transition-colors"
              style={{ color: "#A6ADBB" }}
            >
              <X size={14} />
            </button>
          </div>
        ) : (
          <>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: "rgba(124,92,255,0.08)" }}>
              <Upload size={18} style={{ color: "#7C5CFF" }} />
            </div>
            <p className="text-sm font-semibold text-midnight mb-1">Upload your latest CV</p>
            <p className="text-xs mb-1" style={{ color: "#707887" }}>PDF, DOC or DOCX &middot; max 10 MB</p>
            <p className="text-xs" style={{ color: "#A6ADBB" }}>Drag &amp; drop or click to browse</p>
          </>
        )}
      </div>
      {error && <p className="text-xs mt-1.5" style={{ color: "#EF4444" }}>{error}</p>}
      <input
        ref={ref}
        type="file"
        accept=".pdf,.doc,.docx"
        style={{ position: "absolute", width: 1, height: 1, opacity: 0, overflow: "hidden", pointerEvents: "none" }}
        onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); e.target.value = ""; }}
      />
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  currentPosition: string;
  yearsExperience: string;
  primaryArea: string;
  linkedInUrl: string;
  portfolioUrl: string;
  opportunityPreference: string;
  consent: boolean;
  _gotcha: string;
}

const EMPTY_FORM: FormState = {
  fullName: "",
  email: "",
  phone: "",
  currentPosition: "",
  yearsExperience: "",
  primaryArea: "",
  linkedInUrl: "",
  portfolioUrl: "",
  opportunityPreference: "",
  consent: false,
  _gotcha: "",
};

export default function TalentNetworkPage() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const URL_RE = /^https?:\/\/.+\..+/;
  const PHONE_RE = /^[+\d][\d\s\-().]{6,}$/;

  const set = (k: keyof FormState, v: string | boolean) => {
    setForm((prev) => ({ ...prev, [k]: v }));
    setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const validate = () => {
    const e: typeof errors = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!EMAIL_RE.test(form.email.trim())) e.email = "Please enter a valid email address.";
    if (!form.phone.trim()) e.phone = "Phone / WhatsApp is required.";
    else if (!PHONE_RE.test(form.phone.trim())) e.phone = "Please enter a valid phone number.";
    if (!form.currentPosition.trim()) e.currentPosition = "Current position is required.";
    if (!form.yearsExperience) e.yearsExperience = "Please select your experience level.";
    if (!form.primaryArea) e.primaryArea = "Please select your primary area.";
    if (technologies.length === 0) e.technologies = "Please add at least one technology or skill.";
    if (form.linkedInUrl.trim() && !URL_RE.test(form.linkedInUrl.trim()))
      e.linkedInUrl = "Please enter a valid URL (e.g. https://linkedin.com/in/you).";
    if (form.portfolioUrl.trim() && !URL_RE.test(form.portfolioUrl.trim()))
      e.portfolioUrl = "Please enter a valid URL (e.g. https://github.com/you).";
    if (!cvFile) e.cv = "Please upload your latest CV.";
    if (!form.consent) e.consent = "Please agree to the terms to continue.";
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
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, String(v)));
      fd.append("technologies", technologies.join(", "));
      if (cvFile) fd.append("cv", cvFile);
      const res = await fetch("/api/talent", { method: "POST", body: fd });
      if (!res.ok) throw new Error("Server error");
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please email us at support@tevorah.com.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden" style={{ backgroundColor: "#F5F7FA" }}>
        <div
          className="absolute inset-0 -z-10 opacity-40"
          style={{
            backgroundImage: "linear-gradient(rgba(124,92,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(124,92,255,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div
              className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border text-xs font-semibold"
              style={{ borderColor: "rgba(124,92,255,0.3)", color: "#7C5CFF", backgroundColor: "rgba(124,92,255,0.06)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse inline-block" style={{ backgroundColor: "#3DDC97" }} />
              Tevorah Talent Network: Now Open
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] mb-5 text-midnight" style={{ fontFamily: "Manrope, sans-serif" }}>
              Your next opportunity{" "}
              <span style={{ background: "linear-gradient(135deg, #7C5CFF, #45DDF5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                doesn&apos;t have to be local.
              </span>
            </h1>

            <p className="text-base sm:text-xl leading-relaxed mb-2 max-w-2xl" style={{ color: "#707887" }}>
              Join Tevorah&apos;s technology talent network and put your skills in front of companies building teams around the world.
            </p>
            <p className="text-sm font-semibold tracking-wide mb-8 sm:mb-10" style={{ color: "#A6ADBB" }}>
              Middle East &middot; United States &middot; United Kingdom &middot; Europe &middot; Australia
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="#apply"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: "#7C5CFF" }}
              >
                Join the Talent Network
                <ArrowRight size={16} />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-gray-200 text-midnight hover:border-purple-300 transition-all"
              >
                How Tevorah Works
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {["Global opportunities", "Verified talent profiles", "No application fee", "Simple registration", "Remote-first roles"].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-xs" style={{ color: "#707887" }}>
                  <Check size={12} style={{ color: "#3DDC97" }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE IDEA ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#7C5CFF" }}>The idea</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight text-midnight" style={{ fontFamily: "Manrope, sans-serif" }}>
                Your CV shouldn&apos;t be the only thing speaking for you.
              </h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: "#707887" }}>
                A job title and a few lines on a CV don&apos;t always show what someone can actually do. Tevorah is building a network where technology professionals are represented through what matters most.
              </p>
              <p className="text-base font-semibold text-midnight">
                We want companies to see your capability, not just your CV.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["Experience", "Skills & Technologies", "Practical ability", "Communication", "AI fluency", "Problem-solving", "Remote readiness", "Career ambition"].map((item) => (
                <div key={item} className="rounded-xl border border-gray-100 bg-white px-4 py-3 text-sm font-medium text-midnight shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY JOIN ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24" style={{ backgroundColor: "#F5F7FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#7C5CFF" }}>Why join</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-midnight" style={{ fontFamily: "Manrope, sans-serif" }}>
              Built to connect great people with great companies.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyJoinCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${card.color}12` }}>
                    <Icon size={18} style={{ color: card.color }} />
                  </div>
                  <h3 className="font-bold text-midnight mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>{card.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#707887" }}>{card.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TALENT PROMISE ────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#7C5CFF" }}>Our commitment</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight text-midnight" style={{ fontFamily: "Manrope, sans-serif" }}>
                We&apos;re building careers, not collecting CVs.
              </h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: "#707887" }}>
                Tevorah wants to create a network of technology professionals we can confidently introduce to global companies. That means treating talent with respect.
              </p>
              <p className="text-base font-semibold text-midnight">
                Better opportunities start with better representation.
              </p>
            </div>
            <div className="space-y-3">
              {promiseItems.map((item) => (
                <div key={item.text} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 text-sm shadow-sm">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: item.positive ? "rgba(61,220,151,0.12)" : "#F5F7FA" }}>
                    <Check size={10} style={{ color: item.positive ? "#3DDC97" : "#A6ADBB" }} />
                  </div>
                  <span className={item.positive ? "text-midnight font-medium" : "text-midnight"}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE'RE LOOKING FOR ─────────────────────────────────────── */}
      <section className="py-16 sm:py-24" style={{ backgroundColor: "#F5F7FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#7C5CFF" }}>Who we want</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-midnight mb-3" style={{ fontFamily: "Manrope, sans-serif" }}>
              Technology people who want to build globally.
            </h2>
            <p className="text-base" style={{ color: "#707887" }}>
              Junior &middot; Mid-level &middot; Senior. Strong candidates at every stage are encouraged to register.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {talentCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div key={cat.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${cat.color}12` }}>
                      <Icon size={15} style={{ color: cat.color }} />
                    </div>
                    <span className="text-xs font-bold tracking-widest" style={{ color: cat.color }}>{cat.label}</span>
                  </div>
                  <div className="space-y-2">
                    {cat.roles.map((r) => (
                      <p key={r} className="text-xs leading-snug" style={{ color: "#707887" }}>{r}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── GLOBAL MARKETS ────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#7C5CFF" }}>Where you can go</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-midnight" style={{ fontFamily: "Manrope, sans-serif" }}>
              Build from Sri Lanka. Work with the world.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {marketCards.map((m) => (
              <div
                key={m.region}
                className="rounded-2xl border p-5 text-center"
                style={{
                  backgroundColor: m.highlight ? "rgba(124,92,255,0.04)" : "white",
                  borderColor: m.highlight ? "rgba(124,92,255,0.2)" : "#E5E7EB",
                }}
              >
                <div className="text-3xl mb-3">{m.flag}</div>
                <p className="font-bold text-midnight text-sm mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>{m.region}</p>
                <p className="text-xs mb-3" style={{ color: "#A6ADBB" }}>{m.countries}</p>
                <p className="text-xs leading-relaxed" style={{ color: "#707887" }}>{m.note}</p>
                {m.highlight && (
                  <span className="inline-block mt-3 text-xs font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: "rgba(124,92,255,0.1)", color: "#7C5CFF" }}>
                    Priority market
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-xs mt-6" style={{ color: "#A6ADBB" }}>
            Tevorah identifies <em>potential opportunities</em> across these regions. Placement is not guaranteed in any specific market.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-16 sm:py-24" style={{ backgroundColor: "#F5F7FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#7C5CFF" }}>The process</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-midnight" style={{ fontFamily: "Manrope, sans-serif" }}>
              Join once. Be considered when the right opportunity appears.
            </h2>
          </div>

          <div className="flex items-center justify-center gap-2 flex-wrap mb-8 text-xs font-bold tracking-widest" style={{ color: "#A6ADBB" }}>
            {howItWorksSteps.map((s, i) => (
              <span key={s.label} className="flex items-center gap-2">
                <span style={{ color: s.color }}>{s.label}</span>
                {i < howItWorksSteps.length - 1 && <span>→</span>}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {howItWorksSteps.map((step) => (
              <div key={step.num} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <p className="text-3xl font-bold mb-3" style={{ fontFamily: "Manrope, sans-serif", color: `${step.color}25` }}>{step.num}</p>
                <p className="text-xs font-bold tracking-widest mb-2" style={{ color: step.color }}>{step.label}</p>
                <h3 className="font-bold text-midnight text-sm mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>{step.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#707887" }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEVORAH VERIFIED ──────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#7C5CFF" }}>Tevorah Verified™</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight text-midnight" style={{ fontFamily: "Manrope, sans-serif" }}>
                Stand out for what you can actually do.
              </h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: "#707887" }}>
                CVs help us understand your background. Tevorah Verified is designed to help strong candidates demonstrate their capability beyond the CV.
              </p>
              <p className="text-sm" style={{ color: "#A6ADBB" }}>
                Verification is by invitation only. We will reach out when relevant.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 max-w-sm mx-auto lg:mx-0">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ background: "linear-gradient(135deg, #7C5CFF, #45DDF5)" }}>
                    AK
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-midnight">Example Profile</p>
                    <p className="text-xs" style={{ color: "#707887" }}>AI Full-Stack Engineer</p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: "rgba(61,220,151,0.1)", color: "#3DDC97" }}>
                  ✓ Verified
                </span>
              </div>
              {[
                { label: "Technical", score: 88, color: "#45DDF5" },
                { label: "Practical Build", score: 91, color: "#3DDC97" },
                { label: "AI Fluency", score: 93, color: "#3DDC97" },
                { label: "Communication", score: 90, color: "#3DDC97" },
                { label: "Remote Readiness", score: 89, color: "#45DDF5" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3 mb-3">
                  <span className="text-xs w-32 flex-shrink-0" style={{ color: "#707887" }}>{s.label}</span>
                  <div className="flex-1 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${s.score}%`, backgroundColor: s.color }} />
                  </div>
                  <span className="text-xs font-bold w-6 text-right text-midnight">{s.score}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24" style={{ backgroundColor: "#F5F7FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#7C5CFF" }}>What you get</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-midnight" style={{ fontFamily: "Manrope, sans-serif" }}>
              Joining Tevorah costs you nothing.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefitItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex gap-4">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(124,92,255,0.08)" }}>
                    <Icon size={16} style={{ color: "#7C5CFF" }} />
                  </div>
                  <div>
                    <p className="font-bold text-midnight text-sm mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>{item.title}</p>
                    <p className="text-xs leading-relaxed" style={{ color: "#707887" }}>{item.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BUILD GLOBALLY ────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#7C5CFF" }}>The bigger picture</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight text-midnight" style={{ fontFamily: "Manrope, sans-serif" }}>
            You don&apos;t need to leave Sri Lanka to build an international career.
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: "#707887" }}>
            Technology teams are becoming increasingly global. Tevorah exists to help great technology professionals access those opportunities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-lg font-bold" style={{ fontFamily: "Manrope, sans-serif" }}>
            {[
              { text: "Build here.", color: "#7C5CFF" },
              { text: "Work globally.", color: "#45DDF5" },
              { text: "Grow continuously.", color: "#3DDC97" },
            ].map((s) => (
              <span key={s.text} style={{ color: s.color }}>{s.text}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLY FORM ────────────────────────────────────────────────── */}
      <section id="apply" className="py-16 sm:py-24" style={{ backgroundColor: "#F5F7FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* Left */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#7C5CFF" }}>Join the network</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-midnight mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
                Join the Tevorah Talent Network
              </h2>
              <p className="text-base mb-8" style={{ color: "#707887" }}>
                It should take only a few minutes. You are not applying for a specific job. You are joining a network designed to connect Sri Lankan technology talent with global opportunities.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { val: "Free", label: "No fee to join", color: "#3DDC97" },
                  { val: "~5 min", label: "Quick registration", color: "#45DDF5" },
                  { val: "Global", label: "Middle East, UK, Australia, US", color: "#7C5CFF" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-4">
                    <span className="text-2xl font-bold flex-shrink-0 w-20 whitespace-nowrap" style={{ fontFamily: "Manrope, sans-serif", color: s.color }}>{s.val}</span>
                    <p className="text-sm" style={{ color: "#707887" }}>{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl p-5" style={{ background: "linear-gradient(135deg, rgba(124,92,255,0.06), rgba(69,221,245,0.06))", border: "1px solid rgba(124,92,255,0.15)" }}>
                <p className="text-sm font-semibold text-midnight mb-1">Already a Tevorah client?</p>
                <p className="text-sm mb-3" style={{ color: "#707887" }}>Existing Tevorah clients can refer candidates directly. Speak to your account manager.</p>
                <Link href="/#build-team" className="text-sm font-semibold inline-flex items-center gap-1" style={{ color: "#7C5CFF" }}>
                  Contact your account manager <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "rgba(61,220,151,0.1)" }}>
                    <Check size={28} style={{ color: "#3DDC97" }} />
                  </div>
                  <h3 className="text-2xl font-bold text-midnight mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>You&apos;re in.</h3>
                  <p className="text-sm mb-2" style={{ color: "#707887" }}>Thanks for joining the Tevorah Talent Network.</p>
                  <p className="text-sm mb-8" style={{ color: "#A6ADBB" }}>
                    We&apos;ll review your profile and contact you if we identify an opportunity or next step that fits your experience.
                  </p>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#A6ADBB" }}>What happens next</p>
                  <div className="text-left space-y-2 mb-8 max-w-xs mx-auto">
                    {["We review your profile.", "Your information enters the Tevorah talent database.", "You may be contacted for additional verification.", "We contact you when there is a relevant opportunity."].map((step) => (
                      <div key={step} className="flex items-start gap-2 text-xs" style={{ color: "#707887" }}>
                        <Check size={11} style={{ color: "#3DDC97", marginTop: 2, flexShrink: 0 }} />
                        {step}
                      </div>
                    ))}
                  </div>
                  <Link href="/talent" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-gray-200 text-midnight">
                    Explore Tevorah <ArrowRight size={14} />
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
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
                  <h3 className="text-lg font-bold text-midnight mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>Candidate Registration</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 text-midnight">Full Name *</label>
                      <input type="text" required placeholder="e.g. Akeel Mohamed" value={form.fullName} onChange={(e) => set("fullName", e.target.value)}
                        className="w-full px-3 py-2.5 rounded-lg border text-sm outline-none transition-colors text-midnight bg-white"
                        style={{ borderColor: errors.fullName ? "#EF4444" : "#E5E7EB" }} />
                      {errors.fullName && <p className="text-xs mt-1 text-red-500">{errors.fullName}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 text-midnight">Email Address *</label>
                      <input type="email" required placeholder="you@email.com" value={form.email} onChange={(e) => set("email", e.target.value)}
                        className="w-full px-3 py-2.5 rounded-lg border text-sm outline-none transition-colors text-midnight bg-white"
                        style={{ borderColor: errors.email ? "#EF4444" : "#E5E7EB" }} />
                      {errors.email && <p className="text-xs mt-1 text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 text-midnight">Phone / WhatsApp *</label>
                      <input type="tel" required placeholder="+94 77 000 0000" value={form.phone} onChange={(e) => set("phone", e.target.value)}
                        className="w-full px-3 py-2.5 rounded-lg border text-sm outline-none transition-colors text-midnight bg-white"
                        style={{ borderColor: errors.phone ? "#EF4444" : "#E5E7EB" }} />
                      {errors.phone && <p className="text-xs mt-1 text-red-500">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 text-midnight">Current Position *</label>
                      <input type="text" required placeholder="e.g. Full-Stack Developer" value={form.currentPosition} onChange={(e) => set("currentPosition", e.target.value)}
                        className="w-full px-3 py-2.5 rounded-lg border text-sm outline-none transition-colors text-midnight bg-white"
                        style={{ borderColor: errors.currentPosition ? "#EF4444" : "#E5E7EB" }} />
                      {errors.currentPosition && <p className="text-xs mt-1 text-red-500">{errors.currentPosition}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 text-midnight">Years of Experience *</label>
                      <div className="relative">
                        <select required value={form.yearsExperience} onChange={(e) => set("yearsExperience", e.target.value)}
                          className="w-full px-3 py-2.5 pr-9 rounded-lg border text-sm outline-none transition-colors bg-white appearance-none"
                          style={{ borderColor: errors.yearsExperience ? "#EF4444" : "#E5E7EB", color: form.yearsExperience ? "#090B10" : "#A6ADBB" }}>
                          <option value="" disabled>Select...</option>
                          {experienceBands.map((b) => <option key={b} value={b}>{b}</option>)}
                        </select>
                        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "#A6ADBB" }} />
                      </div>
                      {errors.yearsExperience && <p className="text-xs mt-1 text-red-500">{errors.yearsExperience}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 text-midnight">Primary Area *</label>
                      <div className="relative">
                        <select required value={form.primaryArea} onChange={(e) => set("primaryArea", e.target.value)}
                          className="w-full px-3 py-2.5 pr-9 rounded-lg border text-sm outline-none transition-colors bg-white appearance-none"
                          style={{ borderColor: errors.primaryArea ? "#EF4444" : "#E5E7EB", color: form.primaryArea ? "#090B10" : "#A6ADBB" }}>
                          <option value="" disabled>Select...</option>
                          {primaryAreas.map((a) => <option key={a} value={a}>{a}</option>)}
                        </select>
                        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "#A6ADBB" }} />
                      </div>
                      {errors.primaryArea && <p className="text-xs mt-1 text-red-500">{errors.primaryArea}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5 text-midnight">
                      Technologies & Skills * <span className="font-normal" style={{ color: "#A6ADBB" }}>(type and press Enter)</span>
                    </label>
                    <TagInput tags={technologies} onAdd={(t) => { setTechnologies((p) => [...p, t]); setErrors((p) => ({ ...p, technologies: undefined })); }} onRemove={(t) => setTechnologies((p) => p.filter((x) => x !== t))} placeholder="React, Next.js, Python, AWS..." />
                    {errors.technologies && <p className="text-xs mt-1 text-red-500">{errors.technologies}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 text-midnight">LinkedIn <span className="font-normal" style={{ color: "#A6ADBB" }}>(optional)</span></label>
                      <input type="text" placeholder="https://linkedin.com/in/yourname" value={form.linkedInUrl} onChange={(e) => set("linkedInUrl", e.target.value)}
                        className="w-full px-3 py-2.5 rounded-lg border text-sm outline-none transition-colors text-midnight bg-white"
                        style={{ borderColor: errors.linkedInUrl ? "#EF4444" : "#E5E7EB" }} />
                      {errors.linkedInUrl && <p className="text-xs mt-1.5" style={{ color: "#EF4444" }}>{errors.linkedInUrl}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 text-midnight">GitHub / Portfolio <span className="font-normal" style={{ color: "#A6ADBB" }}>(optional)</span></label>
                      <input type="text" placeholder="https://github.com/you" value={form.portfolioUrl} onChange={(e) => set("portfolioUrl", e.target.value)}
                        className="w-full px-3 py-2.5 rounded-lg border text-sm outline-none transition-colors text-midnight bg-white"
                        style={{ borderColor: errors.portfolioUrl ? "#EF4444" : "#E5E7EB" }} />
                      {errors.portfolioUrl && <p className="text-xs mt-1.5" style={{ color: "#EF4444" }}>{errors.portfolioUrl}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-2 text-midnight">Preferred Opportunity <span className="font-normal" style={{ color: "#A6ADBB" }}>(optional)</span></label>
                    <div className="flex flex-wrap gap-2">
                      {["Full-time remote", "Contract", "Both"].map((opt) => (
                        <button key={opt} type="button" onClick={() => set("opportunityPreference", form.opportunityPreference === opt ? "" : opt)}
                          className="px-4 py-2 rounded-lg border text-xs font-semibold transition-all"
                          style={{
                            backgroundColor: form.opportunityPreference === opt ? "#7C5CFF" : "transparent",
                            borderColor: form.opportunityPreference === opt ? "#7C5CFF" : "#E5E7EB",
                            color: form.opportunityPreference === opt ? "white" : "#707887",
                          }}>
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5 text-midnight">Latest CV *</label>
                    <FileUpload file={cvFile} onFile={(f, err) => { setCvFile(f); setErrors((p) => ({ ...p, cv: err ?? (f ? undefined : p.cv) })); }} error={errors.cv} />
                  </div>

                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <div className="relative flex-shrink-0 mt-0.5">
                        <input type="checkbox" checked={form.consent} onChange={(e) => set("consent", e.target.checked)} className="sr-only" />
                        <div className="w-[18px] h-[18px] rounded flex items-center justify-center border transition-all"
                          style={{ borderColor: form.consent ? "#7C5CFF" : "#D1D5DB", backgroundColor: form.consent ? "#7C5CFF" : "transparent" }}>
                          {form.consent && <Check size={11} className="text-white" />}
                        </div>
                      </div>
                      <span className="text-xs leading-relaxed" style={{ color: "#707887" }}>
                        I agree that Tevorah may store my information and contact me regarding relevant career opportunities.{" "}
                        <Link href="/privacy" className="underline" style={{ color: "#7C5CFF" }}>Privacy Policy</Link>.
                      </span>
                    </label>
                    {errors.consent && <p className="text-xs mt-1 ml-7 text-red-500">{errors.consent}</p>}
                  </div>

                  <button type="submit" disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90 disabled:opacity-60"
                    style={{ backgroundColor: "#7C5CFF" }}>
                    {submitting ? (
                      <><div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />Submitting...</>
                    ) : (
                      <>Join Tevorah <ArrowRight size={15} /></>
                    )}
                  </button>

                  {submitError && (
                    <p className="text-xs text-center" style={{ color: "#EF4444" }}>{submitError}</p>
                  )}

                  <p className="text-center text-xs" style={{ color: "#A6ADBB" }}>
                    You are joining the Tevorah Talent Network, not applying for a specific job.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section id="faq" className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#7C5CFF" }}>FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-midnight" style={{ fontFamily: "Manrope, sans-serif" }}>Common questions</h2>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-gray-100 bg-white overflow-hidden shadow-sm">
                <button type="button" onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left gap-4">
                  <span className="font-semibold text-sm text-midnight">{faq.q}</span>
                  <ChevronDown size={16} style={{ color: "#A6ADBB", transition: "transform 0.2s", transform: openFaq === i ? "rotate(180deg)" : "none", flexShrink: 0 }} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4">
                    <p className="text-sm leading-relaxed" style={{ color: "#707887" }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, rgba(124,92,255,0.06), rgba(69,221,245,0.06))", border: "1px solid rgba(124,92,255,0.15)" }}>
            <p className="text-base mb-2" style={{ color: "#707887" }}>Join a network designed to connect Sri Lankan technology talent with global opportunities.</p>
            <p className="text-lg font-bold text-midnight mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>Build here. Work globally.</p>
            <a href="#apply" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90" style={{ backgroundColor: "#7C5CFF" }}>
              Join the Network <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* ── Sticky mobile CTA ─────────────────────────────────────────── */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 px-4 pb-4 pt-2" style={{ background: "linear-gradient(to top, white 80%, transparent)" }}>
        <a href="#apply" className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-white text-sm" style={{ backgroundColor: "#7C5CFF" }}>
          Join Tevorah <ArrowRight size={15} />
        </a>
      </div>
    </div>
  );
}
