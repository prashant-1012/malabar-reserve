import { Award, Package, Leaf, Globe, Flame } from "lucide-react";
import PressableLink from "@/components/motion/PressableLink";
import HeroReveal, { HeroItem, ScrollCue, KenBurns } from "./HeroMotion";

const features = [
  { icon: Leaf, label: "Premium Black Pepper" },
  { icon: Award, label: "Bold Green Cardamom" },
  { icon: Package, label: "High Curcumin Turmeric" },
  { icon: Flame, label: "Gourmet Red Chilli" },
  { icon: Globe, label: "Global Export Standards" },
];

export default function HeroSection() {
  return (
    <section className="on-dark relative w-full min-h-[92vh] flex items-center overflow-hidden">
      {/* Background video — slow Ken Burns drift so the loop doesn't read as a loop */}
      <KenBurns>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-top"
          src="/photos-to-use/hero-video3.mp4"
        />
      </KenBurns>

      {/* 2.1 — Lighter gradient so video breathes through */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/25 md:bg-gradient-to-r md:from-black/65 md:via-black/40 md:to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-xl lg:max-w-2xl">

          {/* 2.2 — Wider eyebrow line + tighter tracking */}
          <HeroReveal>
            <HeroItem className="flex items-center gap-3 mb-5">
              <div className="h-px w-12 bg-gold" />
              <span className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                Exporting Authentic Indian Spices Worldwide
              </span>
            </HeroItem>
          </HeroReveal>

          {/* 2.3 — Static on purpose: this is the LCP element. Animating it
              would delay Largest Contentful Paint. */}
          <h1 className="font-playfair font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-display-sm lg:tracking-display text-white mb-7">
            Premium Indian Spices,{" "}
            <span className="text-gold italic">Sourced with Integrity</span>
          </h1>

          <HeroReveal>
            {/* Subtitle */}
            <HeroItem>
              <p className="font-inter text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
                We bring the richness of India&apos;s spice heritage to global markets through carefully
                sourced, export-grade black pepper, cardamom, and turmeric.
              </p>
            </HeroItem>

            {/* 2.4 — Larger CTAs, rounded-none to match navbar */}
            <HeroItem className="flex flex-col sm:flex-row gap-3 mb-12">
              <PressableLink
                href="/contact"
                className="btn-gold font-inter font-semibold text-base px-9 py-4 rounded-none text-center tracking-[0.06em]"
              >
                Request a Quote
              </PressableLink>
              <PressableLink
                href="/products"
                className="font-inter font-semibold text-base px-9 py-4 rounded-none border border-white text-white hover:bg-white hover:text-forest transition-colors duration-200 text-center tracking-[0.06em]"
              >
                Explore Products
              </PressableLink>
            </HeroItem>

            {/* 2.5 — Feature strip separated by a rule */}
            <HeroItem className="border-t border-white/15 pt-8 mt-8">
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
            </HeroItem>
          </HeroReveal>
        </div>
      </div>

      {/* 2.6 — Scroll indicator */}
      <ScrollCue />
    </section>
  );
}
