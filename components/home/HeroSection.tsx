import Image from "next/image";
import Link from "next/link";
import { Award, Package, Leaf, Globe, Box } from "lucide-react";

const features = [
  { icon: Leaf, label: "Premium Black Pepper" },
  { icon: Award, label: "Green Cardamom" },
  { icon: Package, label: "Natural Cinnamon" },
  { icon: Box, label: "Bulk & Private Label Supply" },
  { icon: Globe, label: "Global Export Standards" },
];

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[92vh] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/photos-to-use/hero-section.png"
        alt="Premium Indian spices — black pepper, cardamom, and cinnamon"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Gradient overlay — left-to-right desktop, top-to-bottom mobile */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30 md:bg-gradient-to-r md:from-black/80 md:via-black/55 md:to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-xl lg:max-w-2xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="font-inter text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Exporting Authentic Indian Spices Worldwide
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-playfair font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-white mb-5">
            Premium Indian Spices,{" "}
            <span className="text-gold italic">Sourced with Integrity</span>
          </h1>

          {/* Subtitle */}
          <p className="font-inter text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
            We bring the richness of India&apos;s spice heritage to global markets through carefully
            sourced, export-grade black pepper, cardamom, and cinnamon.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <Link
              href="/contact"
              className="font-inter font-semibold text-sm px-7 py-3.5 rounded bg-gold text-brown hover:bg-yellow-500 transition-colors duration-200 text-center"
            >
              Request a Quote
            </Link>
            <Link
              href="/products"
              className="font-inter font-semibold text-sm px-7 py-3.5 rounded border-2 border-white text-white hover:bg-white hover:text-forest transition-colors duration-200 text-center"
            >
              Explore Products
            </Link>
          </div>

          {/* Feature icons — 2-col on mobile, row on md+ */}
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
    </section>
  );
}
