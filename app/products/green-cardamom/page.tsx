import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Sprout, Wind, Award, Package } from "lucide-react";
import ProductDetailHero from "@/components/products/ProductDetailHero";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Green Cardamom Export",
  description:
    "Premium Green Cardamom from Idukki, Kerala for export. Aromatic, bold, and FSSAI certified for global food and beverage markets.",
  openGraph: {
    title: "Green Cardamom Export | Malabar Reserve",
    description:
      "Export-quality Green Cardamom from Idukki's high-altitude spice gardens. Custom grades and packaging available.",
    url: "https://malabarreserve.co/products/green-cardamom",
  },
};

const options = [
  "Alleppey Green Cardamom",
  "Different Size Grades (6mm, 7mm, 8mm+)",
  "Premium Export Quality",
  "Bulk & Retail Packing",
];

const specs = [
  { label: "Origin", value: "Idukki & Wayanad, Kerala" },
  { label: "Moisture Content", value: "Max 10%" },
  { label: "Purity", value: "Min 98%" },
  { label: "Shelf Life", value: "18 months" },
  { label: "Minimum Order Quantity", value: "250 kg" },
  { label: "Packaging Options", value: "1 kg / 5 kg / 25 kg bags, Retail pouches, Vacuum packs, Custom" },
  { label: "Certifications", value: "FSSAI, ISO 22000" },
  { label: "Available Forms", value: "Whole pods, Decorticated seeds, Powder" },
];

const features = [
  { icon: Sprout, label: "Handpicked Quality" },
  { icon: Wind, label: "Rich Aroma & Flavour" },
  { icon: Award, label: "Export Grade Excellence" },
  { icon: Package, label: "Carefully Packed for Maximum Freshness" },
];

export default function GreenCardamomPage() {
  return (
    <>
      <ProductDetailHero
        title="Green Cardamom"
        subtitle="Aromatic Gems from the Hills of Idukki — handpicked for vibrant colour, intense aroma, and superior freshness."
        imageSrc="https://images.unsplash.com/photo-1547592180-85f173990554?w=1600&q=80"
        imageAlt="Green cardamom pods fresh from the highland spice gardens of Idukki, Kerala"
        breadcrumb="Green Cardamom"
      />

      {/* ── Overview + Options ──────────────────────────────── */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">

            {/* Overview */}
            <div className="flex flex-col gap-5">
              <SectionHeading
                eyebrow="Product Overview"
                title="About Our Green Cardamom"
                align="left"
              />
              <div className="flex flex-col gap-4 font-inter text-sm text-brown/70 leading-relaxed">
                <p>
                  Our Green Cardamom is handpicked from the misty highlands of Idukki and Wayanad
                  in Kerala — regions that produce some of the world&apos;s finest cardamom. Each
                  pod is selected for its vibrant green colour, plumpness, and the intensity of its
                  aromatic oils.
                </p>
                <p>
                  Ideal for food processing, retail packaging, beverages, confectionery, and gourmet
                  culinary applications. Our cardamom is processed with care to preserve essential
                  oils that give it its signature rich aroma and bold flavour.
                </p>
                <p>
                  We supply Alleppey Green Cardamom in multiple size grades to suit your specific
                  application — whether that&apos;s premium retail shelving, industrial spice blending,
                  or private label product development.
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
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
                Ready to Source Green Cardamom?
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
