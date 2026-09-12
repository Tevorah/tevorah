"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, MapPin, Clock, SlidersHorizontal, X } from "lucide-react";
import { talentProfiles, tierLabels, type TalentTier } from "@/data/talent";
import ScoreBar from "@/components/talent/ScoreBar";

const tiers: TalentTier[] = ["junior", "junior-plus", "mid", "senior", "ai-specialist"];

const allSkills = [
  "React", "Next.js", "TypeScript", "Python", "Node.js", "Ruby on Rails",
  "AWS", "Docker", "Kubernetes", "PostgreSQL", "Redis",
];

export default function TalentPage() {
  const [search, setSearch] = useState("");
  const [selectedTiers, setSelectedTiers] = useState<TalentTier[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggleTier = (tier: TalentTier) => {
    setSelectedTiers((prev) =>
      prev.includes(tier) ? prev.filter((t) => t !== tier) : [...prev, tier]
    );
  };

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const filtered = talentProfiles.filter((p) => {
    const matchSearch =
      search.trim() === "" ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.role.toLowerCase().includes(search.toLowerCase()) ||
      p.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    const matchTier = selectedTiers.length === 0 || selectedTiers.includes(p.tier);
    const matchSkills =
      selectedSkills.length === 0 ||
      selectedSkills.every((s) => p.skills.includes(s));
    return matchSearch && matchTier && matchSkills;
  });

  const hasFilters = selectedTiers.length > 0 || selectedSkills.length > 0 || search.trim() !== "";

  return (
    <div className="pt-20 sm:pt-24 pb-16 sm:pb-24">
      {/* Page header */}
      <div className="py-12 sm:py-16" style={{ backgroundColor: "#F5F7FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#7C5CFF" }}>
            Tevorah Verified
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-midnight mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
            Explore Talent
          </h1>
          <p className="text-base sm:text-lg max-w-2xl" style={{ color: "#707887" }}>
            Every profile is AI-matched and human-verified. Technical score, AI fluency, and communication —
            all assessed before they reach you.
          </p>

          {/* Search bar */}
          <div className="mt-6 sm:mt-8 flex gap-3">
            <div className="relative flex-1 min-w-0">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#A6ADBB" }} />
              <input
                type="text"
                placeholder="Search by role, skill, or name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:border-electric transition-colors"
              />
            </div>
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all bg-white"
              style={{
                borderColor: filtersOpen ? "#7C5CFF" : "#E5E7EB",
                color: filtersOpen ? "#7C5CFF" : "#090B10",
              }}
            >
              <SlidersHorizontal size={15} />
              Filters
              {(selectedTiers.length > 0 || selectedSkills.length > 0) && (
                <span className="w-4 h-4 rounded-full text-white text-xs flex items-center justify-center font-bold" style={{ backgroundColor: "#7C5CFF" }}>
                  {selectedTiers.length + selectedSkills.length}
                </span>
              )}
            </button>
          </div>

          {/* Filter panel */}
          {filtersOpen && (
            <div className="mt-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#707887" }}>
                    Tier
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tiers.map((tier) => (
                      <button
                        key={tier}
                        onClick={() => toggleTier(tier)}
                        className="px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all"
                        style={{
                          backgroundColor: selectedTiers.includes(tier) ? "#7C5CFF" : "transparent",
                          borderColor: selectedTiers.includes(tier) ? "#7C5CFF" : "#E5E7EB",
                          color: selectedTiers.includes(tier) ? "white" : "#707887",
                        }}
                      >
                        {tierLabels[tier]}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#707887" }}>
                    Skills
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {allSkills.map((skill) => (
                      <button
                        key={skill}
                        onClick={() => toggleSkill(skill)}
                        className="px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all"
                        style={{
                          backgroundColor: selectedSkills.includes(skill) ? "#45DDF5" : "transparent",
                          borderColor: selectedSkills.includes(skill) ? "#45DDF5" : "#E5E7EB",
                          color: selectedSkills.includes(skill) ? "#090B10" : "#707887",
                        }}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Active filters */}
        {hasFilters && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-sm" style={{ color: "#707887" }}>
              {filtered.length} result{filtered.length !== 1 ? "s" : ""}
            </span>
            {search && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-midnight">
                &ldquo;{search}&rdquo;
                <button onClick={() => setSearch("")}><X size={11} /></button>
              </span>
            )}
            {selectedTiers.map((t) => (
              <span key={t} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium text-white" style={{ backgroundColor: "#7C5CFF" }}>
                {tierLabels[t]}
                <button onClick={() => toggleTier(t)}><X size={11} /></button>
              </span>
            ))}
            {selectedSkills.map((s) => (
              <span key={s} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium text-midnight" style={{ backgroundColor: "#45DDF5" }}>
                {s}
                <button onClick={() => toggleSkill(s)}><X size={11} /></button>
              </span>
            ))}
          </div>
        )}

        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-2xl mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>No matches</p>
            <p className="text-sm" style={{ color: "#707887" }}>Try adjusting your filters or search term.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {filtered.map((profile) => (
              <div
                key={profile.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md hover:border-gray-200 transition-all cursor-pointer"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #7C5CFF, #45DDF5)" }}
                    >
                      {profile.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-midnight">{profile.name}</p>
                      <p className="text-xs" style={{ color: "#707887" }}>{profile.role}</p>
                    </div>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 mb-4 text-xs" style={{ color: "#A6ADBB" }}>
                  <span className="flex items-center gap-1">
                    <MapPin size={10} />
                    {profile.location.split(",")[0]}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={10} />
                    {profile.availabilityWeeks}w
                  </span>
                </div>

                {/* Scores */}
                <div className="space-y-2 mb-4">
                  <ScoreBar label="Technical" score={profile.scores.technical} />
                  <ScoreBar label="AI Fluency" score={profile.scores.aiFluency} />
                  <ScoreBar label="Comms" score={profile.scores.communication} />
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {profile.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-1.5 py-0.5 rounded-md font-medium"
                      style={{ backgroundColor: "#F5F7FA", color: "#707887" }}
                    >
                      {skill}
                    </span>
                  ))}
                  {profile.skills.length > 3 && (
                    <span className="text-xs px-1.5 py-0.5 rounded-md font-medium" style={{ backgroundColor: "#F5F7FA", color: "#A6ADBB" }}>
                      +{profile.skills.length - 3}
                    </span>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: "rgba(124,92,255,0.08)", color: "#7C5CFF" }}
                  >
                    {tierLabels[profile.tier]}
                  </span>
                  <span className="font-bold text-sm text-midnight">
                    ${profile.pricePerMonth.toLocaleString()}
                    <span className="font-normal text-xs" style={{ color: "#A6ADBB" }}>/mo</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div
          className="mt-16 rounded-2xl p-8 text-center"
          style={{ background: "linear-gradient(135deg, rgba(124,92,255,0.06), rgba(69,221,245,0.06))", border: "1px solid rgba(124,92,255,0.15)" }}
        >
          <h3 className="text-xl font-bold text-midnight mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>
            Don&apos;t see exactly what you need?
          </h3>
          <p className="text-sm mb-6" style={{ color: "#707887" }}>
            We have more talent in the pipeline. Tell us your requirements and we&apos;ll match you directly.
          </p>
          <Link
            href="/#build-team"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm transition-all"
            style={{ backgroundColor: "#7C5CFF" }}
          >
            Build a Team
          </Link>
        </div>
      </div>
    </div>
  );
}
