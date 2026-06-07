import Link from "next/link";
import { Mail, Globe } from "lucide-react";
import Logo from "@/components/ui/Logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const productLinks = [
  { label: "Black Pepper", href: "/products/black-pepper" },
  { label: "Green Cardamom", href: "/products/green-cardamom" },
  { label: "Cinnamon", href: "/products/cinnamon" },
];

export default function Footer() {
  return (
    <footer className="bg-forest text-white">
      {/* Thin gold top accent line */}
      <div className="h-px bg-gold/30 w-full" />

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Brand */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <Logo variant="light" />
            {/* 9.2 — text-white/65 → text-white/75 for better legibility */}
            <p className="font-inter text-sm text-white/75 leading-relaxed max-w-xs">
              Supplying high-quality Indian spices to importers, wholesalers, food manufacturers,
              and retail brands across international markets.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Navigation
            </h3>
            {/* 9.1 — gap-2.5 → gap-3.5 */}
            <ul className="flex flex-col gap-3.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-white/70 hover:text-white hover:tracking-wide transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="flex flex-col gap-4">
            <h3 className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Our Products
            </h3>
            {/* 9.1 — gap-2.5 → gap-3.5 */}
            <ul className="flex flex-col gap-3.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-white/70 hover:text-white hover:tracking-wide transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Get In Touch
            </h3>
            {/* 9.1 — gap-3 → gap-3.5 */}
            <ul className="flex flex-col gap-3.5">
              <li>
                <a
                  href="mailto:info@malabarreserve.co"
                  className="flex items-center gap-2 font-inter text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  <Mail size={14} className="text-gold flex-shrink-0" />
                  info@malabarreserve.co
                </a>
              </li>
              <li>
                <a
                  href="https://malabarreserve.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-inter text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  <Globe size={14} className="text-gold flex-shrink-0" />
                  malabarreserve.co
                </a>
              </li>
            </ul>

            {/* 9.3 — py-2.5 → py-2, rounded-none, consistent button style */}
            <Link
              href="/contact"
              className="mt-1 inline-block font-inter text-xs font-semibold tracking-[0.08em] px-4 py-2 rounded-none border border-gold text-gold hover:bg-gold hover:text-brown transition-colors duration-200 w-fit"
            >
              Send an Inquiry
            </Link>
          </div>
        </div>
      </div>

      {/* 9.4 — copyright bar with · separator, no redundant second string */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-inter text-xs text-white/40">
            © {new Date().getFullYear()} Malabar Reserve. All rights reserved.
            <span className="mx-2 hidden sm:inline">·</span>
            <span className="hidden sm:inline">Premium Indian Spice Exporters</span>
          </p>
          <p className="font-inter text-xs text-white/30 italic hidden sm:block">
            Sourced with integrity. Delivered with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
