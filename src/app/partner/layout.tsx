import type { Metadata } from "next";

const TITLE = "Become a Tevorah Partner | Referral, Technology & Talent Partnerships";
const DESCRIPTION =
  "Grow your business, extend your platform, or connect your graduates to global opportunities. Tevorah partners build the next generation of technology teams, together.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/partner" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/partner" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function PartnerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
