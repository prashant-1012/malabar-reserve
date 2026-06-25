import Link from "next/link";
import { Award, Package, Leaf, Globe, Box, ChevronDown } from "lucide-react";

const features = [
  { icon: Leaf, label: "Premium Black Pepper" },
  { icon: Award, label: "Green Cardamom" },
  { icon: Package, label: "High Curcumin Turmeric" },
  { icon: Box, label: "Bulk & Private Label Supply" },
  { icon: Globe, label: "Global Export Standards" },
];

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[92vh] flex items-center overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-top"
        src="/photos-to-use/hero-video2.mp4"
      />

      {/* 2.1 — Lighter gradient so video breathes through */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/25 md:bg-gradient-to-r md:from-black/65 md:via-black/40 md:to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-xl lg:max-w-2xl">

          {/* 2.2 — Wider eyebrow line + tighter tracking */}
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-12 bg-gold" />
            <span className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Exporting Authentic Indian Spices Worldwide
            </span>
          </div>

          {/* 2.3 — More breathing room below headline */}
          <h1 className="font-playfair font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-white mb-7">
            Premium Indian Spices,{" "}
            <span className="text-gold italic">Sourced with Integrity</span>
          </h1>

          {/* Subtitle */}
          <p className="font-inter text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
            We bring the richness of India&apos;s spice heritage to global markets through carefully
            sourced, export-grade black pepper, cardamom, and turmeric.
          </p>

          {/* 2.4 — Larger CTAs, rounded-none to match navbar */}
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <Link
              href="/contact"
              className="font-inter font-semibold text-base px-9 py-4 rounded-none bg-gold text-brown hover:bg-gold-dark transition-colors duration-200 text-center tracking-[0.06em]"
            >
              Request a Quote
            </Link>
            <Link
              href="/products"
              className="font-inter font-semibold text-base px-9 py-4 rounded-none border border-white text-white hover:bg-white hover:text-forest transition-colors duration-200 text-center tracking-[0.06em]"
            >
              Explore Products
            </Link>
          </div>

          {/* 2.5 — Feature strip separated by a rule */}
          <div className="border-t border-white/15 pt-8 mt-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-3 md:gap-x-6 md:gap-y-4">
              {features.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/10 border border-gold/40 flex items-center justify-center flex-shrink-0">
                    <Icon size={14} className="text-gold" />
                  </div>
                  <span className="font-inter text-xs text-white/80 leading-snug">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2.6 — Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <span className="font-inter text-[10px] uppercase tracking-[0.2em] text-white/50">Scroll</span>
        <ChevronDown size={16} className="text-white/50" />
      </div>
    </section>
  );
}
