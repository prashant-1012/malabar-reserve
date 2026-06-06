// Industries page — /industries
// Sections:
// 1. Page hero banner — dark green with heading "Industries We Serve"
// 2. 6 large photo cards in 2×3 grid — each with Unsplash image, icon overlay, industry name, short description
//    Industries: Food Manufacturers, Spice Importers, Wholesale Distributors, Retail Brands, Hospitality & Culinary, Private Label
//    Unsplash subjects: food manufacturing plant, spice warehouse, wholesale distribution, retail store, restaurant kitchen, private label production
// 3. Tagline/closing text below grid
// TODO: Implement all sections

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Malabar Reserve supplies premium spices to food manufacturers, importers, wholesale distributors, retail brands, and the hospitality industry worldwide.",
  openGraph: {
    title: "Industries We Serve | Malabar Reserve",
    description:
      "From food manufacturers to private label brands — Malabar Reserve is the trusted spice export partner across industries.",
    url: "https://malabarreserve.co/industries",
  },
};

export default function IndustriesPage() {
  return (
    <div>
      {/* Hero banner */}
      {/* TODO: Dark green banner with "Industries We Serve" heading */}

      {/* 6 industry cards grid */}
      {/* TODO: 2x3 grid of large photo cards */}

      {/* Closing tagline */}
      {/* TODO: Centered tagline section */}

      <p className="p-8 text-center text-brown/60 font-inter">Industries page placeholder</p>
    </div>
  );
}
