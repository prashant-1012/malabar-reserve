// Home page — /
// Sections in order:
// 1. HeroSection
// 2. AboutPreview
// 3. ProductsPreview
// 4. ExportProcess
// 5. WhyChooseUs
// 6. IndustriesPreview
// 7. ContactCTA
// TODO: Replace placeholder components with full implementations

import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ProductsPreview from "@/components/home/ProductsPreview";
import ExportProcess from "@/components/home/ExportProcess";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import IndustriesPreview from "@/components/home/IndustriesPreview";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Premium Indian Spice Exporters | Malabar Reserve",
  description:
    "Malabar Reserve exports premium Black Pepper, Green Cardamom, and Cinnamon from Kerala's finest spice gardens to global markets. FSSAI & ISO certified.",
  openGraph: {
    title: "Malabar Reserve | Premium Indian Spice Exporters",
    description:
      "Premium quality spices sourced directly from Kerala's spice gardens. Trusted by importers and manufacturers worldwide.",
    url: "https://malabarreserve.co",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ProductsPreview />
      <ExportProcess />
      <WhyChooseUs />
      <IndustriesPreview />
      <ContactCTA />
    </>
  );
}
