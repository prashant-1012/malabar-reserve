// Products page — /products
// Sections in order:
// 1. Black Pepper section — text left, image right (/photos-to-use/black-pepper.png)
// 2. Green Cardamom section — image left (/photos-to-use/green-cardmom.png), text right
// 3. Cinnamon section — text left, image right (/photos-to-use/cinnamon.png)
// 4. Packaging Solutions — 6 type cards (pure HTML/CSS, no images)
// 5. Why Our Packaging Stands Out — 5-icon row
// TODO: Implement all sections using ProductSection and PackagingSolutions components

import type { Metadata } from "next";
import ProductSection from "@/components/products/ProductSection";
import PackagingSolutions from "@/components/products/PackagingSolutions";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Explore Malabar Reserve's premium export spices: Black Pepper, Green Cardamom, and Cinnamon — sourced from Kerala's finest farms.",
  openGraph: {
    title: "Our Products | Malabar Reserve",
    description:
      "Premium Indian spices for global import: Black Pepper, Green Cardamom, and Cinnamon available in bulk and custom packaging.",
    url: "https://malabarreserve.co/products",
  },
};

export default function ProductsPage() {
  return (
    <div>
      <ProductSection
        title="Black Pepper"
        description="Placeholder"
        bullets={[]}
        imageSrc="/photos-to-use/black-pepper.png"
        imageAlt="Premium Black Pepper from Kerala"
        imagePosition="right"
        href="/products/black-pepper"
      />
      <ProductSection
        title="Green Cardamom"
        description="Placeholder"
        bullets={[]}
        imageSrc="/photos-to-use/green-cardmom.png"
        imageAlt="Green Cardamom from Idukki, Kerala"
        imagePosition="left"
        href="/products/green-cardamom"
      />
      <ProductSection
        title="Cinnamon"
        description="Placeholder"
        bullets={[]}
        imageSrc="/photos-to-use/cinnamon.png"
        imageAlt="Premium Cinnamon sticks"
        imagePosition="right"
        href="/products/cinnamon"
      />
      <PackagingSolutions />
    </div>
  );
}
