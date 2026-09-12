import type { Metadata } from "next";

const TITLE = "Explore Talent | Tevorah";
const DESCRIPTION =
  "Browse Tevorah Verified technology talent from Sri Lanka. Every profile is AI-matched and human-verified: technical score, AI fluency, and communication, all assessed before they reach you.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/talent" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/talent" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function TalentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
