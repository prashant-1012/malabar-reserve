import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Flame, Star, Award, Package, Handshake } from "lucide-react";
import ProductDetailHero from "@/components/products/ProductDetailHero";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Cinnamon Export",
  description:
    "Premium Cinnamon from Kerala for export. Naturally sweet aroma, warm flavour — available as sticks, bark, and powder with custom packaging.",
  keywords: [
    "cinnamon export India",
    "cinnamon sticks wholesale",
    "cinnamon bark supplier",
    "cinnamon powder export",
    "Kerala cinnamon exporter",
    "bulk cinnamon supply",
    "cinnamon private label",
  ],
  openGraph: {
    type: "website",
    siteName: "Malabar Reserve",
    title: "Cinnamon Export | Malabar Reserve",
    description:
      "Export-quality Cinnamon from Kerala. Available in sticks, bark, and powder with custom packaging options.",
    url: "https://malabarreserve.co/products/cinnamon",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cinnamon Export | Malabar Reserve",
    description:
      "Export-quality Cinnamon from Kerala. Available in sticks, bark, and powder with custom packaging options.",
  },
};

const options = [
  "Cinnamon Sticks",
  "Cinnamon Bark",
  "Powdered Cinnamon",
  "Customized Packaging Solutions",
];

const specs = [
  { label: "Origin", value: "Kerala, South India" },
  { label: "Moisture Content", value: "Max 12%" },
  { label: "Purity", value: "Min 99%" },
  { label: "Shelf Life", value: "24 months" },
  { label: "Minimum Order Quantity", value: "500 kg" },
  { label: "Packaging Options", value: "25 kg / 50 kg sacks, Retail pouches, Vacuum packs, Custom" },
  { label: "Certifications", value: "FSSAI, ISO 22000" },
  { label: "Available Forms", value: "Whole sticks, Bark pieces, Fine powder" },
];

const features = [
  { icon: Flame, label: "Naturally Sweet Aroma" },
  { icon: Star, label: "Carefully Selected & Processed" },
  { icon: Award, label: "Consistent Quality You Can Trust" },
  { icon: Package, label: "Custom Packaging Solutions" },
  { icon: Handshake, label: "Ideal for Global Markets" },
];

export default function CinnamonPage() {
  return (
    <>
      <ProductDetailHero
        title="Cinnamon"
        subtitle="Warm & Fragrant Spice from Kerala's Heartland — carefully selected with naturally sweet aroma and rich flavour."
        imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
        imageAlt="Premium cinnamon sticks bundled together with cinnamon powder and bark"
        breadcrumb="Cinnamon"
      />

      {/* ── Overview + Options ──────────────────────────────── */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">

            {/* Overview */}
            <div className="flex flex-col gap-5">
              <SectionHeading
                eyebrow="Product Overview"
                title="About Our Cinnamon"
                align="left"
              />
              <div className="flex flex-col gap-4 font-inter text-sm text-brown/70 leading-relaxed">
                <p>
                  Our cinnamon is carefully selected from trusted growers in Kerala, known for
                  producing cinnamon with a naturally sweet aroma and warm, rich flavour profile.
                  It is suited for global food and beverage markets where quality and consistency
                  are non-negotiable.
                </p>
                <p>
                  Available as whole sticks, bark pieces, and fine powder, our cinnamon is
                  processed in hygienic facilities with strict quality controls. Each batch is
                  graded and tested to ensure it meets international food safety standards before
                  export.
                </p>
                <p>
                  Whether you are a confectionery brand, a spice blender, a beverage manufacturer,
                  or a private label company, our cinnamon is offered in flexible quantities and
                  packaging formats to suit your exact requirements.
                </p>
              </div>
            </div>

            {/* Available options */}
            <div className="flex flex-col gap-5">
              <SectionHeading
                eyebrow="What We Offer"
                title="Available Options"
                align="left"
              />
              <ul className="flex flex-col gap-3">
                {options.map((opt) => (
                  <li key={opt} className="flex items-center gap-3 p-4 rounded-lg bg-cream border border-transparent hover:border-gold/30 transition-colors">
                    <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
                    <span className="font-inter text-sm font-medium text-brown">{opt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Export Specifications ───────────────────────────── */}
      <section className="bg-cream section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <SectionHeading
              eyebrow="Technical Details"
              title="Export Specifications"
              subtitle="Detailed parameters to help you assess suitability for your requirements."
              align="left"
            />
          </div>
          <div className="overflow-x-auto rounded-xl border border-gold/20 shadow-sm">
            <table className="w-full text-sm font-inter">
              <thead>
                <tr className="bg-forest">
                  <th className="text-left px-6 py-4 text-white font-semibold text-xs uppercase tracking-wider w-1/3">
                    Parameter
                  </th>
                  <th className="text-left px-6 py-4 text-white font-semibold text-xs uppercase tracking-wider">
                    Specification
                  </th>
                </tr>
              </thead>
              <tbody>
                {specs.map((spec, i) => (
                  <tr
                    key={spec.label}
                    className={`border-t border-gold/10 ${i % 2 === 0 ? "bg-white" : "bg-cream/60"}`}
                  >
                    <td className="px-6 py-4 text-brown font-medium">{spec.label}</td>
                    <td className="px-6 py-4 text-brown/70">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Feature icons bar ───────────────────────────────── */}
      <section className="bg-forest py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {features.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 text-center">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-gold/30 flex items-center justify-center">
                  <Icon size={17} className="text-gold" />
                </div>
                <span className="font-inter text-xs text-white/80 leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cream rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6 border border-gold/20">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h3 className="font-playfair font-bold text-2xl text-brown">
                Ready to Source Cinnamon?
              </h3>
              <p className="font-inter text-sm text-brown/60">
                Contact us for pricing, samples, and export documentation.
              </p>
            </div>
            <Link
              href="/contact"
              className="font-inter font-semibold text-sm px-7 py-3.5 rounded bg-forest text-white hover:bg-forest/80 transition-colors duration-200 whitespace-nowrap flex-shrink-0"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
