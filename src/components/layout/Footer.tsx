import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Platform: [
    { label: "Explore Talent", href: "/talent" },
    { label: "Pricing", href: "/pricing" },
    { label: "How It Works", href: "/about" },
    { label: "Become a Partner", href: "/partner" },
    { label: "Build a Team", href: "/#build-team" },
  ],
  "Join as Talent": [
    { label: "Join the Network", href: "/talent-network" },
    { label: "How It Works", href: "/talent-network#how-it-works" },
    { label: "Tevorah Verified™", href: "/talent-network#apply" },
    { label: "Global Opportunities", href: "/talent-network#apply" },
  ],
  Company: [
    { label: "About Tevorah", href: "/about" },
    { label: "Brand Values", href: "/about#values" },
    { label: "Talent from Sri Lanka", href: "/about#talent" },
    { label: "Contact", href: "/#build-team" },
  ],
  Markets: [
    { label: "United States", href: "/about#talent" },
    { label: "United Kingdom", href: "/about#talent" },
    { label: "Middle East", href: "/about#talent" },
    { label: "Australia", href: "/about#talent" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-midnight text-white">
      <style>{`
        .footer-link { color: #A6ADBB; transition: color 0.15s; }
        .footer-link:hover { color: #ffffff; }
        .footer-legal { color: #707887; transition: color 0.15s; }
        .footer-legal:hover { color: #A6ADBB; }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* Brand row + links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/images/logos/tevorah-logo-white.png"
                alt="Tevorah"
                width={120}
                height={29}
                className="h-7 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#A6ADBB" }}>
              Technology teams, built differently. AI-matched. Human-verified.
              Tevorah-supported.
            </p>
            <p className="text-xs" style={{ color: "#707887" }}>
              Talent from{" "}
              <span className="font-semibold text-white">$800/month</span>
            </p>
          </div>

          {/* Link columns — 2-col on mobile, 4-col on lg */}
          <div className="grid grid-cols-2 lg:grid-cols-4 col-span-1 sm:col-span-2 lg:col-span-3 gap-8">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h4
                  className="text-xs font-semibold tracking-widest uppercase mb-4"
                  style={{ color: "#707887" }}
                >
                  {section}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="footer-link text-sm">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t mt-10 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "#1A1E27" }}
        >
          <p className="text-xs" style={{ color: "#707887" }}>
            © {new Date().getFullYear()} Tevorah. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="footer-legal text-xs">Privacy Policy</Link>
            <Link href="/terms" className="footer-legal text-xs">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
