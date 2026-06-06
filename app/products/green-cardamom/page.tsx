// Individual product page — /products/green-cardamom
// Sections:
// 1. ProductDetailHero — full-width hero with Unsplash image (cardamom plantation)
// 2. Product overview — description, origin (Idukki), characteristics
// 3. Available grades/variants
// 4. Export specifications
// 5. CTA — "Request a Quote" → /contact
// TODO: Implement all sections

import type { Metadata } from "next";
import ProductDetailHero from "@/components/products/ProductDetailHero";

export const metadata: Metadata = {
  title: "Green Cardamom Export",
  description:
    "Premium Green Cardamom from Idukki, Kerala for export. Aromatic, bold, and FSSAI certified for global markets.",
  openGraph: {
    title: "Green Cardamom Export | Malabar Reserve",
    description:
      "Export-quality Green Cardamom from Idukki's high-altitude spice gardens. Custom grades and packaging available.",
    url: "https://malabarreserve.co/products/green-cardamom",
  },
};

export default function GreenCardamomPage() {
  return (
    <div>
      <ProductDetailHero
        title="Green Cardamom"
        subtitle="Aromatic Gems from the Hills of Idukki"
        imageSrc="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=1600&q=80"
        imageAlt="Green cardamom pods on plantation in Idukki Kerala"
      />
      {/* TODO: Full product detail sections */}
      <p className="p-8 text-center text-brown/60 font-inter">Green Cardamom detail page placeholder</p>
    </div>
  );
}
