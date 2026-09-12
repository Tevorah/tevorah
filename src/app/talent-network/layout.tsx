import type { Metadata } from "next";

const TITLE = "Join the Tevorah Talent Network | Global Technology Opportunities";
const DESCRIPTION =
  "Join Tevorah's technology talent network and get considered for remote opportunities with companies across the Middle East, UK, Europe, Australia and the United States.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/talent-network" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/talent-network" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function TalentNetworkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
