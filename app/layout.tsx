// Root layout: loads fonts, sets metadata, wraps all pages with Navbar, Footer, WhatsAppButton, and Toaster
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Toaster } from "react-hot-toast";

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
    "Malabar Reserve is a premium Indian spice export company specializing in Black Pepper, Green Cardamom, and Cinnamon sourced directly from Kerala's finest spice gardens.",
  keywords: [
    "Indian spice exporter",
    "black pepper export",
    "green cardamom export",
    "cinnamon export",
    "Kerala spices",
    "wholesale spice supplier",
    "Malabar Reserve",
  ],
  openGraph: {
    type: "website",
    siteName: "Malabar Reserve",
    title: "Malabar Reserve | Premium Indian Spice Exporters",
    description:
      "Premium quality spices, ethically sourced and expertly exported from the heart of Kerala to global markets.",
    url: "https://malabarreserve.co",
  },
  metadataBase: new URL("https://malabarreserve.co"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">
        <Toaster
          position="top-right"
          toastOptions={{
            style: { fontFamily: "var(--font-inter)" },
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
