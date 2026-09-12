import { Search, ShieldCheck, Users, Rocket } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Tell us what you need",
    description:
      "Share your role requirements, tech stack, team size, and timeline. We match you with the right verified candidates.",
    color: "#7C5CFF",
  },
  {
    icon: ShieldCheck,
    step: "02",
    title: "Review verified profiles",
    description:
      "Every candidate is Tevorah Verified: technical assessment, AI fluency score, and communication review. Proof over CVs.",
    color: "#45DDF5",
  },
  {
    icon: Users,
    step: "03",
    title: "Meet your candidates",
    description:
      "Video interviews with shortlisted talent. You make the final call. We never place without your approval.",
    color: "#3DDC97",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Onboard and ship",
    description:
      "Your team member joins your Slack, Jira, and standups. We handle contracts, payroll, and ongoing support.",
    color: "#7C5CFF",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24" style={{ backgroundColor: "#F5F7FA" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#7C5CFF" }}
          >
            The process
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-midnight"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            From brief to builder in days, not months
          </h2>
          <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto" style={{ color: "#707887" }}>
            No recruitment maths. No offshore uncertainty. A straightforward
            process that puts you in control.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.step} delay={i * 0.08} className="relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 left-1/2 w-full h-px -z-10"
                    style={{ backgroundColor: "#E5E7EB" }}
                  />
                )}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm h-full">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${step.color}12` }}
                  >
                    <Icon size={20} style={{ color: step.color }} />
                  </div>
                  <p
                    className="text-xs font-bold mb-2"
                    style={{ color: step.color }}
                  >
                    Step {step.step}
                  </p>
                  <h3
                    className="font-bold text-midnight mb-2"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#707887" }}>
                    {step.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
