"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import PressableLink from "@/components/motion/PressableLink";
import ProductsDropdown from "./ProductsDropdown";
import { AnimatePresence, m } from "framer-motion";
import { DUR, DUR_EXIT, EASE, EASE_IN } from "@/lib/motion";

const products = [
  {
    label: "Black Pepper",
    href: "/products/black-pepper",
    thumb: "/photos-to-use/thumb-black-pepper.webp",
    tag: "King of Spices",
  },
  {
    label: "Green Cardamom",
    href: "/products/green-cardamom",
    thumb: "/photos-to-use/thumb-green-cardamom.webp",
    tag: "Idukki Highlands",
  },
  {
    label: "Turmeric",
    href: "/products/turmeric",
    thumb: "/photos-to-use/thumb-turmeric.webp",
    tag: "High Curcumin",
  },
  {
    label: "Red Chilli",
    href: "/products/red-chilli",
    thumb: "/photos-to-use/thumb-red-chilli.webp",
    tag: "Kashmiri to Extra Hot",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products", hasDropdown: true },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Scroll handler ran setScrolled() on every single scroll event, so React had
  // to diff a bailout on each frame while framer-motion's parallax was also
  // reading scroll. Now it coalesces into one rAF and only sets state when the
  // threshold is actually crossed.
  useEffect(() => {
    let frame = 0;
    let last = window.scrollY > 20;
    setScrolled(last);

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const next = window.scrollY > 20;
        if (next !== last) {
          last = next;
          setScrolled(next);
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isTransparent = pathname === "/" && !scrolled && !mobileOpen;

  return (
    <header
      // `transition-all duration-500` here animated every property including
      // backdrop-filter, which repaints a blurred, full-width sticky bar for
      // half a second on each scroll-threshold crossing. Scoped to the
      // properties that actually change, and shortened.
      className={`sticky top-0 z-50 w-full transition-[background-color,box-shadow,border-color] duration-300 ease-brand ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lift-1 border-b border-cream"
          : isTransparent
          ? "bg-forest"
          : "bg-white/95 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-18">

          {/* Logo — light on transparent, dark once scrolled */}
          <Logo variant={isTransparent ? "light" : "dark"} />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <ProductsDropdown
                  key={link.label}
                  products={products}
                  allHref={link.href}
                  pathname={pathname}
                  isTransparent={isTransparent}
                  isActive={isActive(link.href)}
                />
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

          {/* Desktop CTA — the transparent/scrolled ternary here had two
              identical branches, so it was dead code. The treatment is the
              same on both backgrounds. */}
          <div className="hidden lg:block">
            <PressableLink
              href="/contact"
              className="btn-gold inline-block font-inter text-sm font-semibold tracking-[0.08em] px-6 py-2.5 rounded-none"
            >
              Request a Quote
            </PressableLink>
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

      {/* Mobile drawer — was `transition-all` on `max-h-[500px]`, which animates
          a layout property every frame and janks on low-end Android. Framer
          animates height to its measured value instead, and the hard-coded
          500px ceiling (which would have clipped the menu if items were added)
          is gone. */}
      <AnimatePresence initial={false}>
        {mobileOpen && (
          <m.div
            key="mobile-drawer"
            className="lg:hidden overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0, transition: { duration: DUR_EXIT.base, ease: EASE_IN } }}
            transition={{ duration: DUR.base, ease: EASE }}
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
              className="btn-gold block w-full text-center font-inter text-sm font-semibold tracking-[0.08em] px-5 py-3.5 rounded-none"
            >
              Request a Quote
            </Link>
          </div>
        </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
