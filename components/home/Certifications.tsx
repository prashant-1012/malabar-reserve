import { ShieldCheck } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { RevealGroup, RevealItem } from "@/components/motion/RevealGroup";

/**
 * These certifications are claimed in page metadata and product spec tables but
 * have never appeared in the design. An importer evaluating a supplier is
 * looking for exactly this.
 *
 * ── AWAITING ASSETS ──────────────────────────────────────────────────────────
 * The client has not supplied logo files yet. Each entry renders a typographic
 * placeholder at the final mark's footprint (160x80), so dropping the real
 * artwork in later is a file swap, not a rebuild:
 *
 *   1. Save SVG (preferred) or transparent PNG, min 400px wide, to
 *      public/photos-to-use/cert-<slug>.svg
 *   2. Set `logo: "/photos-to-use/cert-<slug>.svg"` on the entry below
 *
 * See new-docs/2026-10-10-ui-ux-premium-uplift-plan.md §6.
 */
const certifications: {
  name: string;
  full: string;
  logo?: string;
}[] = [
  { name: "FSSAI", full: "Food Safety and Standards Authority of India" },
  { name: "ISO 22000", full: "Food Safety Management Systems" },
  { name: "APEDA", full: "Agricultural & Processed Food Products Export Development Authority" },
  { name: "Spices Board", full: "Spices Board of India" },
  { name: "GI Tagged", full: "Geographical Indication certified origin" },
];

export default function Certifications() {
  return (
    <section className="relative bg-white py-14 md:py-16 border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center text-center gap-3 mb-10" y={16}>
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-gold/60" />
            <ShieldCheck size={18} className="text-gold" aria-hidden="true" />
            <div className="h-px w-10 bg-gold/60" />
          </div>
          <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-brown/50">
            Certified &amp; Compliant for Global Export
          </p>
        </Reveal>

        <RevealGroup
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-14"
          as="ul"
          stagger={0.07}
        >
          {certifications.map((cert) => (
            <RevealItem key={cert.name} as="li">
              <div
                title={cert.full}
                className="group grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-400 ease-brand"
              >
                {/* Placeholder mark — replace with <Image> once logos arrive */}
                <div className="w-[160px] h-[80px] flex flex-col items-center justify-center gap-1 border border-dashed border-gold/40 group-hover:border-gold/80 transition-colors duration-400">
                  <span className="font-playfair font-bold text-base text-brown leading-none">
                    {cert.name}
                  </span>
                  <span className="font-inter text-[9px] uppercase tracking-[0.18em] text-gold/80">
                    Certified
                  </span>
                </div>
                <span className="sr-only">{cert.full}</span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
