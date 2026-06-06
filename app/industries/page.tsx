import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Factory,
  Ship,
  Warehouse,
  ShoppingBag,
  ChefHat,
  Tag,
  Leaf,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Malabar Reserve supplies premium spices to food manufacturers, importers, wholesale distributors, retail brands, hospitality businesses, and private label companies worldwide.",
  openGraph: {
    title: "Industries We Serve | Malabar Reserve",
    description:
      "From food manufacturers to private label brands — Malabar Reserve is the trusted spice export partner across industries.",
    url: "https://malabarreserve.co/industries",
  },
};

const industries = [
  {
    name: "Food Manufacturers",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80",
    alt: "Food manufacturing production line with workers in clean room",
    description:
      "Consistent, high-volume spice supply for production lines. We meet strict food safety requirements and offer flexible bulk packaging to suit your processes.",
  },
  {
    name: "Spice Importers",
    icon: Ship,
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=900&q=80",
    alt: "Cargo shipping containers at international port",
    description:
      "Reliable origin-to-destination logistics, proper documentation, and quality-certified spices for importers who need a dependable long-term supply partner.",
  },
  {
    name: "Wholesale Distributors",
    icon: Warehouse,
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=80",
    alt: "Large warehouse with stacked inventory on shelves",
    description:
      "Bulk quantities with competitive pricing, consistent grade quality, and scalable supply volumes designed for regional and national distribution networks.",
  },
  {
    name: "Retail Brands",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=900&q=80",
    alt: "Retail spice shelves with premium packaged products",
    description:
      "Shelf-ready spices in retail-friendly packaging. We work with brands to ensure presentation, freshness, and labelling align with your market positioning.",
  },
  {
    name: "Hospitality & Culinary Businesses",
    icon: ChefHat,
    image: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?w=900&q=80",
    alt: "Professional chef preparing gourmet food in a restaurant kitchen",
    description:
      "Premium-grade spices trusted by hotels, restaurants, and culinary institutions that demand uncompromising flavour and aroma in every dish.",
  },
  {
    name: "Private Label Companies",
    icon: Tag,
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=900&q=80",
    alt: "Custom branded spice packaging for private label products",
    description:
      "Your brand, our quality. We offer full private label services — custom packaging design, labelling, and branded spice products ready for your market.",
  },
];

const stats = [
  { value: "30+", label: "Countries Served" },
  { value: "6", label: "Industries Covered" },
  { value: "500+", label: "Satisfied Partners" },
  { value: "15+", label: "Years of Experience" },
];

export default function IndustriesPage() {
  return (
    <>
      {/* ── Hero banner ──────────────────────────────────────── */}
      <section className="bg-forest py-20 md:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #C9A84C 1px, transparent 1px), radial-gradient(circle at 80% 50%, #C9A84C 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-5">
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-gold/50" />
            <Leaf size={16} className="text-gold" />
            <div className="h-px w-10 bg-gold/50" />
          </div>
          <span className="font-inter text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Who We Work With
          </span>
          <h1 className="font-playfair font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight max-w-3xl">
            Industries We Serve
          </h1>
          <p className="font-inter text-base text-white/65 max-w-xl leading-relaxed">
            Delivering premium spices and reliable supply solutions to businesses across the globe —
            from food manufacturers to private label brands.
          </p>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────── */}
      <section className="bg-gold/10 border-y border-gold/20 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="font-playfair font-bold text-3xl md:text-4xl text-forest">
                {value}
              </span>
              <span className="font-inter text-xs text-brown/60 uppercase tracking-wider">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Industry cards grid ──────────────────────────────── */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <SectionHeading
              eyebrow="Our Reach"
              title="Serving Businesses Across Every Sector"
              subtitle="Whatever your industry, Malabar Reserve has the product, packaging, and process to support your business needs."
              align="center"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map(({ name, icon: Icon, image, alt, description }) => (
              <div
                key={name}
                className="group flex flex-col rounded-xl overflow-hidden border border-cream hover:border-gold/30 hover:shadow-lg transition-all duration-300 bg-white"
              >
                {/* Photo */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Icon badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full border-2 border-gold bg-black/40 backdrop-blur-sm flex items-center justify-center">
                      <Icon size={16} className="text-gold" />
                    </div>
                    <h3 className="font-playfair font-bold text-white text-base leading-tight drop-shadow">
                      {name}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="p-5 flex flex-col gap-4 flex-1">
                  <p className="font-inter text-sm text-brown/65 leading-relaxed flex-1">
                    {description}
                  </p>
                  <Link
                    href="/contact"
                    className="flex items-center gap-1.5 font-inter text-sm font-semibold text-forest hover:text-gold transition-colors duration-200 group/link w-fit"
                  >
                    Get in Touch
                    <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing tagline + CTA ────────────────────────────── */}
      <section className="bg-cream section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">

            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-gold/50" />
              <Leaf size={16} className="text-gold" />
              <div className="h-px w-10 bg-gold/50" />
            </div>

            <p className="font-playfair italic text-2xl text-brown/70 leading-relaxed">
              &ldquo;Your growth is our priority. Quality, consistency, and trust in every
              shipment.&rdquo;
            </p>

            <p className="font-inter text-sm text-brown/55 leading-relaxed">
              No matter your scale or sector, we build supply partnerships that are reliable,
              flexible, and built for the long term.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Link
                href="/contact"
                className="font-inter font-semibold text-sm px-7 py-3.5 rounded bg-forest text-white hover:bg-forest/80 transition-colors duration-200"
              >
                Request Export Inquiry
              </Link>
              <Link
                href="/products"
                className="font-inter font-semibold text-sm px-7 py-3.5 rounded border-2 border-forest text-forest hover:bg-forest hover:text-white transition-colors duration-200"
              >
                View Our Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
