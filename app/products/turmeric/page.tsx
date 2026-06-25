import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Sprout, Award, FlaskConical, Package, Globe } from "lucide-react";
import ProductDetailHero from "@/components/products/ProductDetailHero";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Turmeric Export",
  description:
    "High-Curcumin Turmeric from South India for export — vibrant colour, exceptional purity, and FSSAI certified. Available as whole fingers, sliced, and powder with custom packaging options.",
  keywords: [
    "turmeric export India",
    "high curcumin turmeric wholesale",
    "turmeric powder export",
    "turmeric fingers supplier",
    "South India turmeric exporter",
    "bulk turmeric supply",
    "turmeric private label",
    "Erode turmeric export",
  ],
  openGraph: {
    type: "website",
    siteName: "Malabar Reserve",
    title: "Turmeric Export | Malabar Reserve",
    description:
      "Export-quality High-Curcumin Turmeric from South India. Available as whole fingers, sliced, and fine powder with custom packaging options.",
    url: "https://malabarreserve.co/products/turmeric",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Turmeric Export | Malabar Reserve",
    description:
      "Export-quality High-Curcumin Turmeric from South India. Available as whole fingers, sliced, and fine powder with custom packaging options.",
  },
};

const options = [
  "Whole Turmeric Fingers",
  "Premium Turmeric Powder",
  "Export-Grade Turmeric",
  "Bulk Supply for Global Markets",
  "Private Label & Custom Packaging",
];

const specGrades = ["ALLEPPEY", "POLISHED FINGERS", "UNPOLISHED FINGERS", "TURMERIC POWDER"];

const specs = [
  { label: "Quality Level", values: ["Ultra Premium", "Premium", "Premium", "Premium"] },
  { label: "Curcumin", values: ["5–7%", "4–6%", "4–6%", "3–6%"] },
  { label: "Moisture", values: ["Max 10%", "Max 10%", "Max 10%", "Max 10%"] },
  { label: "Form", values: ["Whole Fingers", "Polished Fingers", "Natural Fingers", "Powder"] },
  { label: "Color", values: ["Deep Orange-Yellow", "Bright Yellow", "Natural Orange-Yellow", "Yellow to Orange"] },
  { label: "Purity", values: ["99% min", "99% min", "99% min", "99% min"] },
  { label: "Ideal For", values: ["Premium Export & Food Processing", "Retail & Export Markets", "Natural & Organic Markets", "Food & Spice Manufacturing"] },
];

const features = [
  { icon: Sprout, label: "Sourced from South India's Finest Farms" },
  { icon: Award, label: "High-Curcumin Export Grade" },
  { icon: FlaskConical, label: "Hygienic Processing & Quality Checked" },
  { icon: Package, label: "Customized Packaging Solutions" },
  { icon: Globe, label: "Trusted by Customers Worldwide" },
];

export default function TurmericPage() {
  return (
    <>
      <ProductDetailHero
        title="Turmeric"
        subtitle="High-Curcumin Turmeric from South India's Finest Farms — vibrant natural colour, exceptional purity, and export-grade quality."
        imageSrc="https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=1600&q=80"
        imageAlt="Fresh turmeric roots and turmeric powder on a wooden surface"
        breadcrumb="Turmeric"
      />

      {/* ── Overview + Options ──────────────────────────────── */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">

            {/* Overview */}
            <div className="flex flex-col gap-5">
              <SectionHeading
                eyebrow="Product Overview"
                title="About Our Turmeric"
                align="left"
              />
              <div className="flex flex-col gap-4 font-inter text-sm text-brown/70 leading-relaxed">
                <p>
                  One of the most premium varieties of Indian turmeric, sourced primarily from
                  Kerala. It is renowned for its deep orange-yellow color, high curcumin content,
                  and excellent coloring strength.
                </p>
                <p>
                  At Malabar Reserve, we carefully source and process premium turmeric to preserve
                  its natural characteristics while ensuring compliance with international quality
                  standards. With dependable supply, consistent quality, and tailored packaging
                  solutions, we serve importers, wholesalers, food manufacturers, and
                  private-label brands worldwide.
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
                  <th className="text-left px-6 py-4 text-white font-semibold text-xs uppercase tracking-wider">
                    Specification
                  </th>
                  {specGrades.map((grade) => (
                    <th
                      key={grade}
                      className="text-left px-6 py-4 text-white font-semibold text-xs uppercase tracking-wider"
                    >
                      {grade}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {specs.map((spec, i) => (
                  <tr
                    key={spec.label}
                    className={`border-t border-gold/10 ${i % 2 === 0 ? "bg-white" : "bg-cream/60"}`}
                  >
                    <td className="px-6 py-4 text-brown font-medium">{spec.label}</td>
                    {spec.values.map((value, j) => (
                      <td key={j} className="px-6 py-4 text-brown/70">{value}</td>
                    ))}
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
                Ready to Source Turmeric?
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
