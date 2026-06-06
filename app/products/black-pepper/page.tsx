// Individual product page — /products/black-pepper
// Sections:
// 1. ProductDetailHero — full-width hero with Unsplash image (black pepper farm/harvest)
// 2. Product overview — description, origin, characteristics
// 3. Available grades/variants — table or card grid
// 4. Export specifications — table (moisture, purity, shelf life, packaging, MOQ)
// 5. CTA — "Request a Quote" → /contact
// TODO: Implement all sections

import type { Metadata } from "next";
import ProductDetailHero from "@/components/products/ProductDetailHero";

export const metadata: Metadata = {
  title: "Black Pepper Export",
  description:
    "Premium Kerala Black Pepper for export — bold, pungent, and FSSAI certified. Available in multiple grades with custom packaging options.",
  openGraph: {
    title: "Black Pepper Export | Malabar Reserve",
    description:
      "Export-quality Kerala Black Pepper sourced from the Malabar Coast. Available in Tellicherry, ASTA, and custom grades.",
    url: "https://malabarreserve.co/products/black-pepper",
  },
};

export default function BlackPepperPage() {
  return (
    <div>
      <ProductDetailHero
        title="Black Pepper"
        subtitle="The King of Spices from the Malabar Coast"
        imageSrc="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1600&q=80"
        imageAlt="Black pepper harvest in Kerala spice farm"
      />
      {/* TODO: Full product detail sections */}
      <p className="p-8 text-center text-brown/60 font-inter">Black Pepper detail page placeholder</p>
    </div>
  );
}
