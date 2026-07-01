import Link from "next/link";
import { Leaf } from "lucide-react";

export default function ContactCTA() {
  return (
    // 8.1 — slightly darker bg to distinguish from the forest green CTA bar above in WhyChooseUs
    <section
      className="relative section-padding overflow-hidden"
      style={{ backgroundColor: "#161D12" }}
    >
      {/* 8.5 — subtle diagonal texture for depth */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #9B7733 0px, #9B7733 1px, transparent 1px, transparent 12px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-6 max-w-xl mx-auto">

          {/* 8.2 — wider lines + larger leaf */}
          <div className="flex items-center gap-3">
            <div className="h-px w-16 bg-gold/70" />
            <Leaf size={22} className="text-gold opacity-70" />
            <div className="h-px w-16 bg-gold/70" />
          </div>

          {/* Eyebrow */}
          <span className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Get In Touch
          </span>

          {/* 8.3 — constrained headline width for comfortable reading */}
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Let&apos;s Build a Long-Term Spice Partnership
          </h2>

          {/* Subtext */}
          <p className="font-inter text-base text-white/70 leading-relaxed">
            Whether you need bulk spice supply, private label solutions, or reliable export
            support from South India — Malabar Reserve is ready to serve your business.
          </p>

          {/* 8.4 — shorter button label, rounded-none, consistent with site buttons */}
          <Link
            href="/contact"
            className="font-inter font-semibold text-sm tracking-[0.1em] px-10 py-4 rounded-none bg-gold text-brown hover:bg-gold-dark transition-colors duration-300 mt-2"
          >
            Send an Inquiry
          </Link>
        </div>
      </div>
    </section>
  );
}
