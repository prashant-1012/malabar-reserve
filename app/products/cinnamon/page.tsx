// Individual product page — /products/cinnamon
// Sections:
// 1. ProductDetailHero — full-width hero with Unsplash image (cinnamon harvest/sticks)
// 2. Product overview — description, origin, characteristics
// 3. Available grades/variants
// 4. Export specifications
// 5. CTA — "Request a Quote" → /contact
// TODO: Implement all sections

import type { Metadata } from "next";
import ProductDetailHero from "@/components/products/ProductDetailHero";

export const metadata: Metadata = {
  title: "Cinnamon Export",
  description:
    "Premium Cinnamon from Kerala for export. Warm, fragrant, and FSSAI certified. Available in sticks, quills, and powder.",
  openGraph: {
    title: "Cinnamon Export | Malabar Reserve",
    description:
      "Export-quality Cinnamon from Kerala. Available in multiple forms and grades with custom packaging.",
    url: "https://malabarreserve.co/products/cinnamon",
  },
};

export default function CinnamonPage() {
  return (
    <div>
      <ProductDetailHero
        title="Cinnamon"
        subtitle="Warm & Fragrant Spice from Kerala's Heartland"
        imageSrc="https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=1600&q=80"
        imageAlt="Premium cinnamon sticks and powder"
      />
      {/* TODO: Full product detail sections */}
      <p className="p-8 text-center text-brown/60 font-inter">Cinnamon detail page placeholder</p>
    </div>
  );
}
