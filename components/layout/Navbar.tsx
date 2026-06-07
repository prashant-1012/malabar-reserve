"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "@/components/ui/Logo";

const products = [
  { label: "Black Pepper", href: "/products/black-pepper" },
  { label: "Green Cardamom", href: "/products/green-cardamom" },
  { label: "Cinnamon", href: "/products/cinnamon" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products", hasDropdown: true },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isTransparent = pathname === "/" && !scrolled && !mobileOpen;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-cream"
          : isTransparent
          ? "bg-forest"
          : "bg-white/95 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-24">

          {/* Logo — light on transparent, dark once scrolled */}
          <Logo variant={isTransparent ? "light" : "dark"} />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen((o) => !o)}
                    className={`flex items-center gap-1 font-inter text-sm font-medium tracking-[0.12em] transition-colors duration-300 ${
                      isTransparent
                        ? "text-white/90 hover:text-white"
                        : isActive(link.href)
                        ? "text-forest"
                        : "text-brown/75 hover:text-forest"
                    }`}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Dropdown */}
                  {dropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-white shadow-lg border border-cream overflow-hidden">
                      <Link
                        href="/products"
                        className="block px-4 py-2.5 font-inter text-xs text-brown/50 uppercase tracking-widest border-b border-cream hover:bg-cream transition-colors"
                      >
                        All Products
                      </Link>
                      {products.map((p) => (
                        <Link
                          key={p.href}
                          href={p.href}
                          className={`block px-4 py-3 font-inter text-sm tracking-[0.05em] transition-colors duration-150 ${
                            pathname === p.href
                              ? "bg-cream text-forest font-semibold"
                              : "text-brown hover:bg-cream hover:text-forest"
                          }`}
                        >
                          {p.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-inter text-sm font-medium tracking-[0.12em] transition-colors duration-300 relative group ${
                    isTransparent
                      ? "text-white/90 hover:text-white"
                      : isActive(link.href)
                      ? "text-forest"
                      : "text-brown/75 hover:text-forest"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-0.5 bg-gold transition-all duration-200 ${
                      !isTransparent && isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className={`font-inter text-sm font-semibold tracking-[0.08em] px-6 py-2.5 rounded-none transition-colors duration-300 ${
                isTransparent
                  ? "bg-gold text-brown hover:bg-yellow-500"
                  : "bg-gold text-brown hover:bg-yellow-600"
              }`}
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden p-2 transition-colors ${
              isTransparent ? "text-white hover:text-gold" : "text-brown hover:text-forest hover:bg-cream rounded"
            }`}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-cream px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.label}>
                <Link
                  href="/products"
                  className={`block px-3 py-2.5 font-inter text-sm font-medium rounded transition-colors ${
                    isActive(link.href)
                      ? "text-forest bg-cream"
                      : "text-brown hover:text-forest hover:bg-cream"
                  }`}
                >
                  {link.label}
                </Link>
                <div className="ml-4 flex flex-col gap-0.5 mt-1">
                  {products.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className={`block px-3 py-2 font-inter text-sm rounded transition-colors ${
                        pathname === p.href
                          ? "text-forest font-semibold bg-cream"
                          : "text-brown/70 hover:text-forest hover:bg-cream"
                      }`}
                    >
                      — {p.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`block px-3 py-2.5 font-inter text-sm font-medium rounded transition-colors ${
                  isActive(link.href)
                    ? "text-forest bg-cream font-semibold"
                    : "text-brown hover:text-forest hover:bg-cream"
                }`}
              >
                {link.label}
              </Link>
            )
          )}

          <div className="mt-3 pt-3 border-t border-cream">
            <Link
              href="/contact"
              className="block w-full text-center font-inter text-sm font-semibold tracking-[0.08em] px-5 py-3 rounded-none bg-gold text-brown hover:bg-yellow-600 transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
