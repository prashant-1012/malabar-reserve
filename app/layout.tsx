// Root layout: loads fonts, sets metadata, wraps all pages with Navbar, Footer, WhatsAppButton, and Toaster
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL, OG_IMAGE } from "@/lib/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Toaster } from "react-hot-toast";
import MotionProvider from "@/components/motion/MotionProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Malabar Reserve | Premium Indian Spice Exporters",
    template: "%s | Malabar Reserve",
  },
  description:
    "Malabar Reserve is a premium Indian spice export company specializing in Black Pepper, Green Cardamom, and Turmeric sourced directly from India's finest spice gardens.",
  keywords: [
    "Indian spice exporter",
    "black pepper export",
    "green cardamom export",
    "turmeric export",
    "Kerala spices",
    "wholesale spice supplier",
    "Malabar Reserve",
    "bulk spice export",
    "spice import India",
    "FSSAI certified spices",
  ],
  authors: [{ name: "Malabar Reserve", url: SITE_URL }],
  category: "Food & Beverage Export",
  openGraph: {
    type: "website",
    siteName: "Malabar Reserve",
    title: "Malabar Reserve | Premium Indian Spice Exporters",
    description:
      "Premium quality spices, ethically sourced and expertly exported from the heart of Kerala to global markets.",
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
      "Premium quality spices, ethically sourced and expertly exported from the heart of Kerala to global markets.",
    images: [OG_IMAGE],
  },
  metadataBase: new URL(SITE_URL),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/favicon-192.png" />
        {/* Scroll-reveal elements render with their hidden transform inline, so
            without JS every section heading and card would stay invisible.
            Crawlers still get the text either way, but humans need this. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="antialiased">
        <Toaster
          position="top-right"
          toastOptions={{
            style: { fontFamily: "var(--font-inter)" },
          }}
        />
        <MotionProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </MotionProvider>
      </body>
    </html>
  );
}
