import Reveal from "@/components/ui/Reveal";

const stats = [
  { value: "98%", label: "Client satisfaction rate on Tevorah placements" },
  { value: "Top 30", label: "Sri Lanka's English proficiency ranking in Asia" },
  { value: "GMT+5:30", label: "Overlaps with US, UK, ME, and Australian business hours" },
  { value: "40%+", label: "STEM graduates entering tech in Sri Lanka each year" },
];

export default function Stats() {
  return (
    <section className="py-16 sm:py-20" style={{ backgroundColor: "#090B10" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p
                  className="text-3xl sm:text-4xl font-bold mb-2"
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    background: "linear-gradient(135deg, #7C5CFF, #45DDF5)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {s.value}
                </p>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#A6ADBB" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
