import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Sprout, Award, Flame, Package, Globe } from "lucide-react";
import ProductDetailHero from "@/components/products/ProductDetailHero";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Red Chilli Export",
  description:
    "Premium Red Chilli from India for export — vibrant colour, bold heat, and FSSAI certified. Kashmiri, Mid Spicy, and Spicy ++ grades with custom packaging options.",
  keywords: [
    "red chilli export India",
    "Kashmiri red chilli wholesale",
    "red chilli powder export",
    "spicy red chilli supplier",
    "Indian red chilli exporter",
    "bulk red chilli supply",
    "red chilli private label",
  ],
  openGraph: {
    type: "website",
    siteName: "Malabar Reserve",
    title: "Red Chilli Export | Malabar Reserve",
    description:
      "Export-quality Red Chilli from India's finest growing regions. Kashmiri, Mid Spicy, and Spicy ++ grades with custom packaging options.",
    url: "https://malabarreserve.co/products/red-chilli",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Chilli Export | Malabar Reserve",
    description:
      "Export-quality Red Chilli from India's finest growing regions. Kashmiri, Mid Spicy, and Spicy ++ grades with custom packaging options.",
  },
};

const options = [
  "Kashmiri Red Chilli (Mild, Vibrant Colour)",
  "Mid Spicy Red Chilli",
  "Spicy ++ Red Chilli (Extra Hot)",
  "Whole & Powder Forms",
  "Private Label & Custom Packaging",
];

const specGrades = ["KASHMIRI", "MID SPICY", "SPICY ++"];

const specs = [
  { label: "Quality Level", values: ["Premium", "Premium Plus", "Ultra Premium"] },
  { label: "ASTA Colour Value", values: ["120–140", "90–110", "80–100"] },
  { label: "Scoville Heat (SHU)", values: ["1,000–2,000 (Mild)", "15,000–30,000 (Medium)", "50,000–80,000 (Extra Hot)"] },
  { label: "Form", values: ["Whole & Powder", "Whole & Powder", "Whole & Powder"] },
  { label: "Moisture", values: ["Max 10%", "Max 10%", "Max 10%"] },
  { label: "Purity", values: ["99% Min", "99% Min", "99% Min"] },
  { label: "Ideal For", values: ["Colour-Forward Culinary & Retail", "Food Processing & Food Service", "Hot Sauces & Industrial Processing"] },
];

const features = [
  { icon: Sprout, label: "Carefully Sourced From Trusted Farms" },
  { icon: Flame, label: "Mild to Extra-Hot Grades" },
  { icon: Award, label: "Export-Grade Quality" },
  { icon: Package, label: "Customized Packaging Solutions" },
  { icon: Globe, label: "Trusted by Customers Worldwide" },
];

export default function RedChilliPage() {
  return (
    <>
      <ProductDetailHero
        title="Red Chilli"
        subtitle="Vibrant, export-grade Red Chilli from India's finest growing regions — available from mild Kashmiri to extra-hot Spicy ++ grades."
        imageSrc="/photos-to-use/red-chilli.png"
        imageAlt="Vibrant red chilli powder and sun-dried whole chillies in a wooden bowl"
        breadcrumb="Red Chilli"
        imageFileName="red-chilli.png"
        photoConfirmed
      />

      {/* ── Overview + Options ──────────────────────────────── */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">

            {/* Overview */}
            <div className="flex flex-col gap-5">
              <SectionHeading
                eyebrow="Product Overview"
                title="About Our Red Chilli"
                align="left"
              />
              <div className="flex flex-col gap-4 font-inter text-sm text-brown/70 leading-relaxed">
                <p>
                  Sun-dried and carefully graded, our Red Chilli is sourced from India&apos;s
                  finest chilli-growing regions and valued for its vibrant colour, robust heat,
                  and consistent export quality.
                </p>
                <p>
                  At Malabar Reserve, we process and grade red chilli across mild, medium, and
                  extra-hot variants — Kashmiri, Mid Spicy, and Spicy ++ — to meet the exact
                  culinary and industrial needs of importers, food manufacturers, and
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
                Ready to Source Red Chilli?
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
