const companies = [
  "FinTech Startup",
  "SaaS Scaleup",
  "PropTech Co.",
  "AI Company",
  "HealthTech",
  "Digital Agency",
  "E-commerce",
  "LogisticsTech",
];

export default function TrustBar() {
  return (
    <section className="py-12 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          className="text-center text-xs font-semibold tracking-widest uppercase mb-8"
          style={{ color: "#A6ADBB" }}
        >
          Building teams for companies like these
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {companies.map((name) => (
            <span
              key={name}
              className="text-sm font-semibold"
              style={{ color: "#A6ADBB" }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
