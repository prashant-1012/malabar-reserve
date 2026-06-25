import type { Metadata } from "next";
import { Leaf } from "lucide-react";
import {
  Sprout,
  Award,
  FlaskConical,
  Package,
  Globe,
  Wind,
} from "lucide-react";
import ProductSection from "@/components/products/ProductSection";
import PackagingSolutions from "@/components/products/PackagingSolutions";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Explore Malabar Reserve's premium export spices: Black Pepper, Green Cardamom, and Turmeric — sourced from India's finest farms.",
  keywords: [
    "Indian spices for export",
    "black pepper wholesale",
    "green cardamom bulk supply",
    "turmeric export",
    "Kerala spice catalogue",
    "spice packaging solutions",
    "private label spices India",
  ],
  openGraph: {
    type: "website",
    siteName: "Malabar Reserve",
    title: "Our Products | Malabar Reserve",
    description:
      "Premium Indian spices for global import: Black Pepper, Green Cardamom, and Turmeric in bulk and custom packaging.",
    url: "https://malabarreserve.co/products",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Products | Malabar Reserve",
    description:
      "Premium Indian spices for global import: Black Pepper, Green Cardamom, and Turmeric in bulk and custom packaging.",
  },
};

export default function ProductsPage() {
  return (
    <>
      {/* ── Page hero banner ─────────────────────────────────── */}
      <section className="bg-forest py-16 md:py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 50%, #9C7830 1px, transparent 1px), radial-gradient(circle at 75% 50%, #9C7830 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-4">
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-gold/50" />
            <Leaf size={16} className="text-gold" />
            <div className="h-px w-10 bg-gold/50" />
          </div>
          <span className="font-inter text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Export Catalogue
          </span>
          <h1 className="font-playfair font-bold text-4xl sm:text-5xl text-white leading-tight">
            Our Products
          </h1>
          <p className="font-inter text-base text-white/65 max-w-xl leading-relaxed">
            Three of India&apos;s finest spices, sourced directly from India&apos;s premier growing
            regions and prepared to the highest export standards.
          </p>
        </div>
      </section>

      {/* ── 1. Black Pepper ──────────────────────────────────── */}
      <ProductSection
        eyebrow="Product 01"
        title="Black Pepper"
        description="Known as the King of Spices, our black pepper is sourced from premium growing regions in South India. Bold flavour, rich aroma, and export-grade quality suitable for culinary, retail, and industrial applications."
        bullets={[
          "Whole Black Pepper",
          "Bold Pepper",
          "FAQ Grade Pepper",
          "Steam Sterilized Pepper",
          "Custom Packaging Available",
        ]}
        imageSrc="/photos-to-use/black-pepper.png"
        imageAlt="Premium Kerala black pepper in a wooden bowl with scattered peppercorns"
        imagePosition="right"
        href="/products/black-pepper"
        bgColor="white"
        featureIcons={[
          { icon: Sprout, label: "Carefully Sourced From Trusted Farms" },
          { icon: Award, label: "Export-Grade Quality" },
          { icon: FlaskConical, label: "Hygienic Processing & Quality Checked" },
          { icon: Package, label: "Customized Packaging Solutions" },
          { icon: Globe, label: "Trusted by Customers Worldwide" },
        ]}
      />

      {/* ── 2. Green Cardamom ────────────────────────────────── */}
      <ProductSection
        eyebrow="Product 02"
        title="Green Cardamom"
        description="Handpicked for its vibrant colour, intense aroma, and superior freshness. Ideal for food processing, retail packaging, beverages, and gourmet applications."
        bullets={[
          "Alleppey Green Cardamom",
          "Different Size Grades",
          "Premium Export Quality",
          "Bulk & Retail Packing",
        ]}
        imageSrc="/photos-to-use/green-cardmom.png"
        imageAlt="Fresh green cardamom pods handpicked from Idukki highlands, Kerala"
        imagePosition="left"
        href="/products/green-cardamom"
        bgColor="cream"
        featureIcons={[
          { icon: Sprout, label: "Handpicked Quality" },
          { icon: Wind, label: "Rich Aroma & Flavour" },
          { icon: Award, label: "Export Grade Excellence" },
          { icon: Package, label: "Carefully Packed for Maximum Freshness" },
        ]}
      />

      {/* ── 3. Turmeric ──────────────────────────────────────── */}
      <ProductSection
        eyebrow="Product 03"
        title="Turmeric"
        description="High-Curcumin turmeric sourced from South India's finest farms — valued for its vibrant natural colour, exceptional purity, and consistent quality for food, nutraceutical, and industrial applications."
        bullets={[
          "Whole Turmeric Fingers",
          "High-Curcumin Turmeric Powder",
          "Steam Sterilized Turmeric",
          "Customized Packaging Solutions",
        ]}
        imageSrc="/photos-to-use/turmeric_roots.webp"
        imageAlt="High-curcumin turmeric roots sourced from South India"
        imagePosition="right"
        href="/products/turmeric"
        bgColor="white"
        featureIcons={[
          { icon: Sprout, label: "Sourced from South India's Finest Farms" },
          { icon: Award, label: "High-Curcumin Export Grade" },
          { icon: FlaskConical, label: "Hygienic Processing & Quality Checked" },
          { icon: Package, label: "Customized Packaging Solutions" },
          { icon: Globe, label: "Trusted by Customers Worldwide" },
        ]}
      />

      {/* ── 4 & 5. Packaging Solutions ───────────────────────── */}
      <PackagingSolutions />
    </>
  );
}
