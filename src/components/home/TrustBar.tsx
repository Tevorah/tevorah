import { Landmark, Rocket, Building2, Cpu, HeartPulse, Palette, ShoppingCart, Truck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const industries = [
  { label: "FinTech", icon: Landmark },
  { label: "SaaS Scaleups", icon: Rocket },
  { label: "PropTech", icon: Building2 },
  { label: "AI Companies", icon: Cpu },
  { label: "HealthTech", icon: HeartPulse },
  { label: "Digital Agencies", icon: Palette },
  { label: "E-commerce", icon: ShoppingCart },
  { label: "LogisticsTech", icon: Truck },
];

export default function TrustBar() {
  return (
    <section className="py-12 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          className="text-center text-xs font-semibold tracking-widest uppercase mb-8"
          style={{ color: "#A6ADBB" }}
        >
          Building teams for companies across
        </p>
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {industries.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-colors"
                style={{ borderColor: "#E5E7EB", color: "#707887" }}
              >
                <Icon size={14} style={{ color: "#A6ADBB" }} />
                {label}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
