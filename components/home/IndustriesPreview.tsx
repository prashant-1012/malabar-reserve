"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Factory, Ship, Warehouse, ShoppingBag, ChefHat, Tag, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const industries = [
  {
    name: "Food Manufacturers",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    alt: "Food manufacturing production line",
    description: "Bulk supply for large-scale production requirements.",
  },
  {
    name: "Spice Importers",
    icon: Ship,
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80",
    alt: "Shipping containers at international port",
    description: "Export-ready consignments with full documentation.",
  },
  {
    name: "Wholesale Distributors",
    icon: Warehouse,
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    alt: "Large warehouse with stacked shelves and products",
    description: "Consistent volume and grade for distribution networks.",
  },
  {
    name: "Retail Brands",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
    alt: "Retail spice store shelves with packaged products",
    description: "Retail-ready quality with flexible packaging formats.",
  },
  {
    name: "Hospitality & Culinary",
    icon: ChefHat,
    image: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?w=800&q=80",
    alt: "Professional chef preparing food in restaurant kitchen",
    description: "Premium-grade spices for chefs and culinary professionals.",
  },
  {
    name: "Private Label Companies",
    icon: Tag,
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&q=80",
    alt: "Custom branded spice packaging for private label",
    description: "Custom branding, private labelling, and OEM solutions.",
  },
];

export default function IndustriesPreview() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="bg-cream section-padding border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-12">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Who We Work With"
            subtitle="Delivering premium spices and reliable supply solutions to businesses across the globe."
            align="center"
          />
        </div>

        {/* 7.1 + 7.2 + 7.3 — bottom-left anchored content, lighter overlay, refined border */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {industries.map(({ name, icon: Icon, image, alt, description }, index) => {
            const isActive = activeCard === index;
            return (
              <div
                key={name}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative h-56 sm:h-64 md:h-72 overflow-hidden cursor-default border transition-all duration-500 ${
                  isActive ? "border-gold/70 shadow-2xl" : "border-transparent shadow-md"
                }`}
              >
                {/* Background image */}
                <Image
                  src={image}
                  alt={alt}
                  fill
                  className={`object-cover object-center transition-transform duration-700 ${
                    isActive ? "scale-108" : "scale-100"
                  }`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* 7.2 — lighter base overlay, darker on hover */}
                <div className={`absolute inset-0 transition-all duration-500 ${
                  isActive
                    ? "bg-gradient-to-t from-black/85 via-black/50 to-black/10"
                    : "bg-gradient-to-t from-black/65 via-black/25 to-transparent"
                }`} />

                {/* Gold top-left accent line — appears on hover */}
                <div className={`absolute top-0 left-0 h-0.5 bg-gold transition-all duration-500 ${
                  isActive ? "w-full" : "w-0"
                }`} />

                {/* 7.1 — bottom-left anchored layout */}
                <div className="absolute inset-0 flex flex-col justify-end items-start p-5">

                  {/* Icon — sits above the name, slides up on hover */}
                  <div className={`mb-3 transition-all duration-400 ${
                    isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                  }`}>
                    {/* 7.3 — single border, smaller icon container */}
                    <div className="w-9 h-9 border border-gold/70 bg-black/40 backdrop-blur-sm flex items-center justify-center">
                      <Icon size={16} className="text-gold" />
                    </div>
                  </div>

                  {/* Name — always visible */}
                  <h3 className="font-playfair font-bold text-white text-lg leading-snug mb-1">
                    {name}
                  </h3>

                  {/* Gold rule — expands on hover */}
                  <div className={`h-px bg-gold mb-2 transition-all duration-400 ${
                    isActive ? "w-10" : "w-5"
                  }`} />

                  {/* Description — slides up and fades in on hover */}
                  <p className={`font-inter text-xs text-white/80 leading-relaxed transition-all duration-400 ${
                    isActive ? "opacity-100 translate-y-0 max-h-12" : "opacity-0 translate-y-2 max-h-0"
                  }`}>
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 7.4 + 7.5 — remove italic tagline, outlined CTA button */}
        <div className="mt-12 text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 font-inter text-sm font-semibold tracking-[0.12em] uppercase px-10 py-3.5 rounded-none border border-forest text-forest hover:bg-forest hover:text-white transition-colors duration-300 group"
          >
            View All Industries
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
