import Image from "next/image";
import { Leaf, Search, Package, Globe } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    icon: Leaf,
    title: "Careful Sourcing",
    description:
      "We partner with reliable farms and suppliers in India's leading spice-growing regions.",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80",
    alt: "Spice farmer harvesting black pepper in Kerala",
  },
  {
    number: "02",
    icon: Search,
    title: "Quality Selection",
    description:
      "Each batch undergoes careful grading and quality checks for aroma, moisture, appearance, and consistency.",
    image:
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=800&q=80",
    alt: "Quality inspection and grading of spices",
  },
  {
    number: "03",
    icon: Package,
    title: "Processing & Packaging",
    description:
      "Products are processed and packed using hygienic methods to preserve freshness and meet buyer requirements.",
    image:
      "https://images.unsplash.com/photo-1565118531796-763e5082d113?w=800&q=80",
    alt: "Hygienic spice processing and packaging facility",
  },
  {
    number: "04",
    icon: Globe,
    title: "Global Shipping",
    description:
      "We coordinate efficient export logistics and documentation to ensure timely international delivery.",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80",
    alt: "Shipping containers at international port for global export",
  },
];

export default function ExportProcess() {
  return (
    <section className="bg-cream section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading with flanking ornaments */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-3">
            {/* Left ornament */}
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path d="M14 2C14 2 6 8 6 16C6 20.4 9.6 24 14 24C18.4 24 22 20.4 22 16C22 8 14 2 14 2Z" fill="#2D4A1E" opacity="0.3" />
              <path d="M14 2C14 2 6 8 6 16C6 20.4 9.6 24 14 24" stroke="#C9A84C" strokeWidth="1" fill="none" />
            </svg>
            <SectionHeading
              eyebrow="How We Work"
              title="Our Export Process"
              align="center"
            />
            {/* Right ornament */}
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path d="M14 2C14 2 22 8 22 16C22 20.4 18.4 24 14 24C9.6 24 6 20.4 6 16C6 8 14 2 14 2Z" fill="#2D4A1E" opacity="0.3" />
              <path d="M14 2C14 2 22 8 22 16C22 20.4 18.4 24 14 24" stroke="#C9A84C" strokeWidth="1" fill="none" />
            </svg>
          </div>
          <p className="font-inter text-xs font-semibold uppercase tracking-[0.2em] text-brown/50 mt-1">
            From Origin to Global Markets
          </p>
        </div>

        {/* Step cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                {/* Step image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Number badge */}
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-gold flex items-center justify-center">
                    <span className="font-playfair font-bold text-xs text-brown">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <div className="w-9 h-9 rounded-full bg-forest/10 flex items-center justify-center">
                    <Icon size={16} className="text-forest" />
                  </div>
                  <h3 className="font-playfair font-bold text-lg text-brown">{step.title}</h3>
                  <p className="font-inter text-sm text-brown/65 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom dark green banner */}
        <div className="mt-10 bg-forest rounded-xl py-6 px-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
          <Globe size={20} className="text-gold flex-shrink-0" />
          <p className="font-inter text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Quality Spices.{" "}
            <span className="text-gold">Trusted Process.</span>{" "}
            Worldwide Reach.
          </p>
        </div>
      </div>
    </section>
  );
}
