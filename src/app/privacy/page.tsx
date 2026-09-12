import Link from "next/link";

const sections = [
  {
    title: "What we collect",
    body: "When you submit a form on tevorah.com to build a team, join the talent network, or apply as a partner, we collect the information you provide: name, email, phone number, company, role details, and, for talent applications, your CV and links you share (e.g. LinkedIn, portfolio).",
  },
  {
    title: "How we use it",
    body: "We use this information to respond to your enquiry, match candidates with opportunities, and operate the Tevorah platform. We do not sell your personal information to third parties.",
  },
  {
    title: "Who sees it",
    body: "Submissions are sent to the Tevorah team's internal inbox. Talent profile information may be shared with a prospective hiring company where there is a potential match. We won't do this without you being aware you're being considered for that process.",
  },
  {
    title: "How long we keep it",
    body: "We retain enquiry and talent network submissions for as long as reasonably needed to consider you for opportunities or respond to your enquiry, or until you ask us to delete it.",
  },
  {
    title: "Your rights",
    body: "You can ask us what information we hold about you, ask us to correct it, or ask us to delete it at any time by emailing support@tevorah.com.",
  },
];

export const metadata = {
  title: "Privacy Policy | Tevorah",
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#7C5CFF" }}>
          Legal
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-midnight mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
          Privacy Policy
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
          Questions about this policy? Contact us at{" "}
          <a href="mailto:support@tevorah.com" style={{ color: "#7C5CFF" }}>support@tevorah.com</a>.
        </p>
        <Link href="/" className="inline-block mt-8 text-sm font-semibold" style={{ color: "#7C5CFF" }}>
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
