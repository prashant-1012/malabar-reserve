import { Leaf } from "lucide-react";
import Grain from "@/components/ui/Grain";
import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import PressableLink from "@/components/motion/PressableLink";

export default function ContactCTA() {
  return (
    // 8.1 — slightly darker bg to distinguish from the forest green CTA bar above in WhyChooseUs
    <section
      className="on-dark relative section-padding overflow-hidden"
      style={{ backgroundColor: "#161D12" }}
    >
      {/* 8.5 — subtle diagonal texture for depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #9B7733 0px, #9B7733 1px, transparent 1px, transparent 12px)",
        }}
      />
      <Grain opacity={0.05} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-6 max-w-xl mx-auto">

          {/* 8.2 — wider lines + larger leaf */}
          <Reveal className="flex items-center gap-3" y={12}>
            <div className="h-px w-16 bg-gold/70" />
            <Leaf size={22} className="text-gold opacity-70" aria-hidden="true" />
            <div className="h-px w-16 bg-gold/70" />
          </Reveal>

          {/* Eyebrow */}
          <Reveal as="span" y={12} className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Get In Touch
          </Reveal>

          {/* 8.3 — constrained headline width for comfortable reading */}
          <SplitHeading
            text="Let's Build a Long-Term Spice Partnership"
            className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight tracking-display-xs"
          />

          {/* Subtext */}
          <Reveal as="p" y={16} className="font-inter text-base text-white/70 leading-relaxed">
            Whether you need bulk spice supply, private label solutions, or reliable export
            support from South India — Malabar Reserve is ready to serve your business.
          </Reveal>

          {/* 8.4 — shorter button label, rounded-none, consistent with site buttons */}
          <Reveal y={16} className="mt-2">
            <PressableLink
              href="/contact"
              className="btn-gold inline-block font-inter font-semibold text-sm tracking-[0.1em] px-10 py-4 rounded-none"
            >
              Send an Inquiry
            </PressableLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
