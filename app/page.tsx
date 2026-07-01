import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ProductsPreview from "@/components/home/ProductsPreview";
import ExportProcess from "@/components/home/ExportProcess";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import IndustriesPreview from "@/components/home/IndustriesPreview";

export const metadata: Metadata = {
  title: "Premium Indian Spice Exporters | Malabar Reserve",
  description:
    "Malabar Reserve exports premium Black Pepper, Green Cardamom, and Turmeric from India's finest spice gardens to global markets. FSSAI & ISO certified.",
  keywords: [
    "premium Indian spices",
    "spice exporter Kerala",
    "black pepper export India",
    "cardamom export India",
    "turmeric export India",
    "bulk spice supplier",
    "FSSAI certified spices",
    "ISO certified spice exporter",
  ],
  openGraph: {
    type: "website",
    siteName: "Malabar Reserve",
    title: "Malabar Reserve | Premium Indian Spice Exporters",
    description:
      "Premium quality spices sourced directly from Kerala's spice gardens. Trusted by importers and manufacturers worldwide.",
    url: "https://malabar-reserve.vercel.app",
    locale: "en_US",
    images: [
      {
        url: "https://malabar-reserve.vercel.app/photos-to-use/ogimage2.jpg",
        width: 1200,
        height: 630,
        alt: "Malabar Reserve – Premium Indian Spice Exporters",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Malabar Reserve | Premium Indian Spice Exporters",
    description:
      "Premium quality spices sourced directly from Kerala's spice gardens. Trusted by importers and manufacturers worldwide.",
    images: ["https://malabar-reserve.vercel.app/photos-to-use/ogimage2.jpg"],
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
    </>
  );
}
