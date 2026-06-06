import Link from "next/link";
import { Leaf } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="bg-forest section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">

          {/* Ornament */}
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-gold/50" />
            <Leaf size={18} className="text-gold" />
            <div className="h-px w-10 bg-gold/50" />
          </div>

          {/* Eyebrow */}
          <span className="font-inter text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Get In Touch
          </span>

          {/* Headline */}
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Let&apos;s Build a Long-Term Spice Partnership
          </h2>

          {/* Subtext */}
          <p className="font-inter text-base text-white/70 leading-relaxed">
            Whether you are looking for bulk spice supply, private label opportunities, or reliable
            export support from South India, Malabar Reserve is ready to support your business needs.
          </p>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="font-inter font-semibold text-sm px-8 py-4 rounded bg-gold text-brown hover:bg-yellow-500 transition-colors duration-200 mt-2"
          >
            Request Export Inquiry
          </Link>
        </div>
      </div>
    </section>
  );
}
