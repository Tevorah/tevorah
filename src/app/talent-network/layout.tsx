import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join the Tevorah Talent Network | Global Technology Opportunities",
  description:
    "Join Tevorah's technology talent network and get considered for remote opportunities with companies across the Middle East, UK, Europe, Australia and the United States.",
};

export default function TalentNetworkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
