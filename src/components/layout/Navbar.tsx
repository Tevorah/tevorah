"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Explore Talent", href: "/talent" },
  { label: "Pricing", href: "/pricing" },
  { label: "How It Works", href: "/about" },
  { label: "Join as Talent", href: "/talent-network" },
  { label: "Become a Partner", href: "/partner" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "shadow-md"
          : ""
      )}
      style={{ backgroundColor: "#090B10" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logos/tevorah-logo-white.png"
              alt="Tevorah"
              width={120}
              height={29}
              priority
              className="h-7 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors"
                style={{ color: "#A6ADBB" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#A6ADBB")}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/talent"
              className="text-sm font-semibold px-4 py-2 rounded-lg border transition-all"
              style={{ color: "#A6ADBB", borderColor: "#1A1E27" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#ffffff";
                (e.currentTarget as HTMLElement).style.borderColor = "#7C5CFF";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#A6ADBB";
                (e.currentTarget as HTMLElement).style.borderColor = "#1A1E27";
              }}
            >
              Explore Talent
            </Link>
            <Link
              href="#build-team"
              className="text-sm font-semibold px-4 py-2 rounded-lg text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#7C5CFF" }}
            >
              Build a Team
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: "#A6ADBB" }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t" style={{ backgroundColor: "#0D1017", borderColor: "#1A1E27" }}>
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 px-3 text-sm font-medium rounded-lg transition-colors"
                style={{ color: "#A6ADBB" }}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 pt-3 flex flex-col gap-2" style={{ borderTop: "1px solid #1A1E27" }}>
              <Link
                href="/talent"
                onClick={() => setMobileOpen(false)}
                className="py-2.5 px-3 text-sm font-semibold rounded-lg border text-center"
                style={{ color: "#A6ADBB", borderColor: "#1A1E27" }}
              >
                Explore Talent
              </Link>
              <Link
                href="#build-team"
                onClick={() => setMobileOpen(false)}
                className="py-2.5 px-3 text-sm font-semibold rounded-lg text-center text-white"
                style={{ backgroundColor: "#7C5CFF" }}
              >
                Build a Team
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
