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
  "Sliced Turmeric",
  "High-Curcumin Turmeric Powder",
  "Steam Sterilized Turmeric",
  "Customized Packaging Solutions",
];

const specs = [
  { label: "Origin", value: "South India (Erode, Andhra Pradesh)" },
  { label: "Curcumin Content", value: "Min 3% – 5% (High-Curcumin grades available)" },
  { label: "Moisture Content", value: "Max 12%" },
  { label: "Purity", value: "Min 99%" },
  { label: "Shelf Life", value: "24 months" },
  { label: "Minimum Order Quantity", value: "500 kg" },
  { label: "Packaging Options", value: "25 kg / 50 kg sacks, Retail pouches, Vacuum packs, Custom" },
  { label: "Certifications", value: "FSSAI, ISO 22000" },
  { label: "Available Forms", value: "Whole Fingers, Sliced, Fine Powder" },
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
                  Our turmeric is sourced from the premier spice-growing belts of South India —
                  particularly Erode in Tamil Nadu and select regions of Andhra Pradesh — renowned
                  globally for producing turmeric with exceptionally high curcumin content. Rich
                  golden colour, intense earthy aroma, and consistent quality make it a preferred
                  choice for food manufacturers, nutraceutical brands, and spice processors worldwide.
                </p>
                <p>
                  Each lot is carefully graded and evaluated for curcumin percentage, colour value,
                  moisture, and purity before processing. Our turmeric is handled in hygienic
                  facilities under stringent quality protocols, ensuring it meets international food
                  safety standards — including FSSAI and ISO 22000 certifications — before every
                  export shipment.
                </p>
                <p>
                  Whether you require whole turmeric fingers for processing, steam sterilized powder
                  for food-grade applications, or high-curcumin extract-grade material for
                  nutraceuticals and health products, we supply it with reliable consistency and
                  flexible packaging tailored to your exact needs.
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
