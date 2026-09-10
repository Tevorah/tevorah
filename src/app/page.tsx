import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import HowItWorks from "@/components/home/HowItWorks";
import TalentPreview from "@/components/home/TalentPreview";
import PricingTeaser from "@/components/home/PricingTeaser";
import BuildTeamCTA from "@/components/home/BuildTeamCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <HowItWorks />
      <TalentPreview />
      <PricingTeaser />
      <BuildTeamCTA />
    </>
  );
}
