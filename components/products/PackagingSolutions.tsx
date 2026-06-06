import {
  ShoppingBag,
  Cylinder,
  FileText,
  Layers,
  Package,
  Palette,
  Leaf,
  ShieldCheck,
  Recycle,
  Lock,
  Paintbrush,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const packagingTypes = [
  {
    icon: ShoppingBag,
    title: "Retail Pouches",
    description:
      "Durable, resealable, and moisture-proof pouches to lock in freshness and flavor.",
  },
  {
    icon: Cylinder,
    title: "PET Jars",
    description:
      "Clear, sturdy jars that offer product visibility and are perfect for retail shelves.",
  },
  {
    icon: FileText,
    title: "Paper Bags",
    description:
      "Eco-friendly and sustainable packaging options for a greener planet.",
  },
  {
    icon: Layers,
    title: "Vacuum Packs",
    description:
      "Airtight packaging that preserves aroma, extends shelf life, and maintains quality.",
  },
  {
    icon: Package,
    title: "Bulk Packaging",
    description:
      "Cost-effective and secure packaging for bulk orders and industrial use.",
  },
  {
    icon: Palette,
    title: "Customized Packaging",
    description:
      "Personalized designs and labeling to reflect your brand identity and market needs.",
  },
];

const standoutFeatures = [
  { icon: Leaf, label: "Preserves Freshness & Aroma" },
  { icon: ShieldCheck, label: "Moisture & Tamper Proof" },
  { icon: Recycle, label: "Food Safe & Eco-Friendly" },
  { icon: Lock, label: "Durable & Secure" },
  { icon: Paintbrush, label: "Custom Branding Available" },
];

export default function PackagingSolutions() {
  return (
    <>
      {/* ── Packaging Solutions cards ─────────────────────────── */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <SectionHeading
              eyebrow="Packaging"
              title="Packaging Solutions"
              subtitle="Custom packaging that preserves purity, ensures freshness, and elevates your brand."
              align="center"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {packagingTypes.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group flex flex-col gap-4 p-6 rounded-xl border border-cream bg-cream hover:border-gold/40 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center group-hover:bg-forest/20 transition-colors duration-300">
                  <Icon size={22} className="text-forest" />
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-lg text-brown mb-1.5">{title}</h3>
                  <p className="font-inter text-sm text-brown/60 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Our Packaging Stands Out ──────────────────────── */}
      <section className="bg-forest py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
          <div className="text-center">
            <span className="font-inter text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Our Advantage
            </span>
            <h3 className="font-playfair font-bold text-2xl text-white mt-2">
              Why Our Packaging Stands Out
            </h3>
          </div>

          {/* 5-icon row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 w-full">
            {standoutFeatures.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3 text-center">
                <div className="w-11 h-11 rounded-full bg-white/10 border border-gold/30 flex items-center justify-center">
                  <Icon size={18} className="text-gold" />
                </div>
                <span className="font-inter text-xs text-white/80 leading-snug">{label}</span>
              </div>
            ))}
          </div>

          {/* Tagline */}
          <p className="font-playfair italic text-white/60 text-sm text-center">
            Thoughtful Packaging. Global Quality. Delivering excellence from the inside out.
          </p>
        </div>
      </section>
    </>
  );
}
