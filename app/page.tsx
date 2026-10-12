import type { Metadata } from "next";
import { SITE_URL, OG_IMAGE } from "@/lib/site";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ProductsPreview from "@/components/home/ProductsPreview";
import ExportProcess from "@/components/home/ExportProcess";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import WhoWeServe from "@/components/home/WhoWeServe";
import PackagingBand from "@/components/home/PackagingBand";
import Certifications from "@/components/home/Certifications";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Premium Indian Spice Exporters | Malabar Reserve",
  description:
    "Malabar Reserve exports premium Black Pepper, Green Cardamom, Turmeric, and Red Chilli from India's finest spice gardens to global markets. FSSAI & ISO certified.",
  keywords: [
    "premium Indian spices",
    "spice exporter Kerala",
    "black pepper export India",
    "cardamom export India",
    "turmeric export India",
    "red chilli export India",
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
    url: SITE_URL,
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
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
    images: [OG_IMAGE],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ProductsPreview />
      {/* "Who We Serve: Built for the Businesses We Supply" section hidden */}
      {/* <WhoWeServe /> */}
      <ExportProcess />
      <PackagingBand />
      <WhyChooseUs />
      <Certifications />
      <ContactCTA />
    </>
  );
}
