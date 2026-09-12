import Link from "next/link";
import type { Metadata } from "next";

const sections = [
  {
    title: "Using this website",
    body: "tevorah.com describes Tevorah's talent-matching services and lets you submit enquiries to build a team, join the talent network, or apply as a partner. The information on this site is provided in good faith, but specific pricing, availability, and placement terms are confirmed directly with you before any commitment is made.",
  },
  {
    title: "No guarantee of placement",
    body: "Submitting a form, whether to hire, join the talent network, or partner with Tevorah, does not guarantee a placement, job offer, or partnership. Tevorah reviews each submission and follows up where there is a relevant fit.",
  },
  {
    title: "Talent network candidates",
    body: "Joining the Tevorah Talent Network is free. Tevorah will never charge a candidate a fee to be considered for opportunities.",
  },
  {
    title: "Clients",
    body: "Client engagements (pricing, contracts, and service terms) are governed by a separate agreement signed between Tevorah and the client company, not by this website.",
  },
  {
    title: "Intellectual property",
    body: "The Tevorah name, logo, and site content are the property of Tevorah. Please don't reproduce them without permission.",
  },
];

const TITLE = "Terms of Service | Tevorah";
const DESCRIPTION =
  "The terms that govern using tevorah.com to build a team, join the talent network, or apply as a partner.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/terms" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/terms" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function TermsPage() {
  return (
    <div className="pt-28 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#7C5CFF" }}>
          Legal
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-midnight mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
          Terms of Service
        </h1>
        <p className="text-sm mb-10" style={{ color: "#A6ADBB" }}>
          Last updated 12 September 2026
        </p>

        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg font-bold text-midnight mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>
                {s.title}
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "#707887" }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <p className="text-sm mt-12" style={{ color: "#707887" }}>
          Questions about these terms? Contact us at{" "}
          <a href="mailto:support@tevorah.com" style={{ color: "#7C5CFF" }}>support@tevorah.com</a>.
        </p>
        <Link href="/" className="inline-block mt-8 text-sm font-semibold" style={{ color: "#7C5CFF" }}>
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
