import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Stats from "@/components/home/Stats";
import HowItWorks from "@/components/home/HowItWorks";
import TalentPreview from "@/components/home/TalentPreview";
import PricingTeaser from "@/components/home/PricingTeaser";
import FAQHome from "@/components/home/FAQHome";
import BuildTeamCTA from "@/components/home/BuildTeamCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Stats />
      <HowItWorks />
      <TalentPreview />
      <PricingTeaser />
      <FAQHome />
      <BuildTeamCTA />
    </>
  );
}
