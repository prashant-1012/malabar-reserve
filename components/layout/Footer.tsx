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
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Brand */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <Logo variant="light" />
            <p className="font-inter text-sm text-white/65 leading-relaxed max-w-xs">
              Supplying high-quality Indian spices to importers, wholesalers, food manufacturers,
              and retail brands across international markets.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-white/65 hover:text-white transition-colors duration-200"
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
            <ul className="flex flex-col gap-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-white/65 hover:text-white transition-colors duration-200"
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
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:info@malabarreserve.co"
                  className="flex items-center gap-2 font-inter text-sm text-white/65 hover:text-white transition-colors duration-200"
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
                  className="flex items-center gap-2 font-inter text-sm text-white/65 hover:text-white transition-colors duration-200"
                >
                  <Globe size={14} className="text-gold flex-shrink-0" />
                  malabarreserve.co
                </a>
              </li>
            </ul>

            <Link
              href="/contact"
              className="mt-2 inline-block font-inter text-xs font-semibold px-4 py-2.5 rounded border border-gold text-gold hover:bg-gold hover:text-brown transition-colors duration-200 w-fit"
            >
              Request Export Inquiry
            </Link>
          </div>
        </div>
      </div>

      {/* Gold divider */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-inter text-xs text-white/40">
            © {new Date().getFullYear()} Malabar Reserve. All rights reserved.
          </p>
          <p className="font-inter text-xs text-white/40">
            Premium Indian Spice Exporters
          </p>
        </div>
      </div>
    </footer>
  );
}
