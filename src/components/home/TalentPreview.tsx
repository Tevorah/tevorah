import Link from "next/link";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { talentProfiles, tierLabels } from "@/data/talent";
import ScoreBar from "@/components/talent/ScoreBar";

const featured = talentProfiles.slice(0, 3);

export default function TalentPreview() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#7C5CFF" }}
            >
              Available talent
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-midnight"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Meet the talent
            </h2>
            <p className="mt-3 text-lg" style={{ color: "#707887" }}>
              Every profile is Tevorah Verified. Technical scores, AI fluency,
              and communication — all assessed.
            </p>
          </div>
          <Link
            href="/talent"
            className="inline-flex items-center gap-2 text-sm font-semibold flex-shrink-0"
            style={{ color: "#7C5CFF" }}
          >
            View all talent
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((profile) => (
            <div
              key={profile.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-gray-200 transition-all"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #7C5CFF, #45DDF5)",
                    }}
                  >
                    {profile.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-midnight">{profile.name}</p>
                    <p className="text-sm" style={{ color: "#707887" }}>
                      {profile.role}
                    </p>
                  </div>
                </div>
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
                  style={{
                    backgroundColor: "rgba(69,221,245,0.1)",
                    color: "#45DDF5",
                  }}
                >
                  {tierLabels[profile.tier]}
                </span>
              </div>

              {/* Meta */}
              <div className="flex items-center gap-4 mb-5 text-xs" style={{ color: "#A6ADBB" }}>
                <span className="flex items-center gap-1">
                  <MapPin size={11} />
                  {profile.location.split(",")[0]}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={11} />
                  {profile.availabilityWeeks === 1
                    ? "Available in 1 week"
                    : `Available in ${profile.availabilityWeeks} weeks`}
                </span>
              </div>

              {/* Scores */}
              <div className="space-y-2.5 mb-5">
                <ScoreBar label="Technical" score={profile.scores.technical} />
                <ScoreBar label="AI Fluency" score={profile.scores.aiFluency} />
                <ScoreBar label="Communication" score={profile.scores.communication} />
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {profile.skills.slice(0, 4).map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-0.5 rounded-md font-medium"
                    style={{ backgroundColor: "#F5F7FA", color: "#707887" }}
                  >
                    {skill}
                  </span>
                ))}
                {profile.skills.length > 4 && (
                  <span
                    className="text-xs px-2 py-0.5 rounded-md font-medium"
                    style={{ backgroundColor: "#F5F7FA", color: "#A6ADBB" }}
                  >
                    +{profile.skills.length - 4}
                  </span>
                )}
              </div>

              {/* Footer */}
              <div
                className="flex items-center justify-between pt-4 border-t border-gray-100"
              >
                <span className="text-xs font-medium" style={{ color: "#3DDC97" }}>
                  ✓ Tevorah Verified
                </span>
                <span className="font-bold text-midnight text-sm">
                  ${profile.pricePerMonth.toLocaleString()}
                  <span className="font-normal text-xs" style={{ color: "#A6ADBB" }}>
                    /mo
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/talent"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-gray-200 text-midnight hover:border-electric/40 transition-all"
          >
            Browse all {talentProfiles.length} profiles
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
