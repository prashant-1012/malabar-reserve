"use client";

import Image from "next/image";
import { useState } from "react";
import { Leaf, Search, Package, Globe } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    icon: Leaf,
    title: "Careful Sourcing",
    description:
      "We partner with reliable farms and suppliers in India's leading spice-growing regions.",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80",
    alt: "Spice farmer harvesting black pepper in Kerala",
  },
  {
    number: "02",
    icon: Search,
    title: "Quality Selection",
    description:
      "Each batch undergoes careful grading and quality checks for aroma, moisture, appearance, and consistency.",
    image:
      "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800&q=80",
    alt: "Quality selection and grading of premium spices",
  },
  {
    number: "03",
    icon: Package,
    title: "Processing & Packaging",
    description:
      "Products are processed and packed using hygienic methods to preserve freshness and meet buyer requirements.",
    image:
      "https://images.unsplash.com/photo-1565118531796-763e5082d113?w=800&q=80",
    alt: "Hygienic spice processing and packaging facility",
  },
  {
    number: "04",
    icon: Globe,
    title: "Global Shipping",
    description:
      "We coordinate efficient export logistics and documentation to ensure timely international delivery.",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80",
    alt: "Shipping containers at international port for global export",
  },
];

export default function ExportProcess() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="bg-cream section-padding border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 5.1 — heading + ornaments in a single aligned flex row */}
        <div className="mb-14 text-center">
          <div className="flex items-center justify-center gap-6 mb-2">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true" className="hidden sm:block flex-shrink-0">
              <path d="M14 2C14 2 6 8 6 16C6 20.4 9.6 24 14 24C18.4 24 22 20.4 22 16C22 8 14 2 14 2Z" fill="#2D4A1E" opacity="0.3" />
              <path d="M14 2C14 2 6 8 6 16C6 20.4 9.6 24 14 24" stroke="#C9A84C" strokeWidth="1" fill="none" />
            </svg>
            <SectionHeading eyebrow="How We Work" title="Our Export Process" align="center" />
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true" className="hidden sm:block flex-shrink-0">
              <path d="M14 2C14 2 22 8 22 16C22 20.4 18.4 24 14 24C9.6 24 6 20.4 6 16C6 8 14 2 14 2Z" fill="#2D4A1E" opacity="0.3" />
              <path d="M14 2C14 2 22 8 22 16C22 20.4 18.4 24 14 24" stroke="#C9A84C" strokeWidth="1" fill="none" />
            </svg>
          </div>
          <p className="font-inter text-xs font-semibold uppercase tracking-[0.2em] text-brown/50">
            From Origin to Global Markets 
          </p>
        </div>

        {/* Connector line behind the cards on desktop */}
        <div className="relative">
          <div className="hidden lg:block absolute top-[88px] left-[12.5%] right-[12.5%] h-px bg-gold/30 z-0" />

          {/* 5.2 + 5.3 + 5.4 + 5.5 — step cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;

              return (
                <div
                  key={step.number}
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                  className={`group bg-white border flex flex-col cursor-default transition-all duration-500 ${
                    isActive
                      ? "border-gold/60 shadow-xl -translate-y-1"
                      : "border-gold/15 shadow-md"
                  }`}
                >
                  {/* 5.3 — taller image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      className={`object-cover object-center transition-transform duration-700 ${isActive ? "scale-105" : "scale-100"}`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />

                    {/* Dark overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`} />

                    {/* 5.4 — refined number badge: bordered, not solid gold fill */}
                    <div className={`absolute top-4 left-4 w-10 h-10 flex items-center justify-center border-2 backdrop-blur-sm transition-all duration-300 ${isActive ? "border-gold bg-black/60" : "border-gold/70 bg-black/40"}`}>
                      <span className="font-playfair font-bold text-sm text-gold">{step.number}</span>
                    </div>

                  </div>

                  {/* 5.5 — icon removed, step title + gold rule + description only */}
                  <div className="p-5 flex flex-col gap-2 flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className={`font-playfair font-bold text-lg transition-colors duration-300 ${isActive ? "text-forest" : "text-brown"}`}>
                        {step.title}
                      </h3>
                    </div>
                    <div className={`h-px bg-gold transition-all duration-500 ${isActive ? "w-12" : "w-6"}`} />
                    <p className="font-inter text-sm text-brown/65 leading-relaxed flex-1">
                      {step.description}
                    </p>
                    {/* Step indicator dots */}
                    <div className="flex gap-1.5 mt-2">
                      {steps.map((_, i) => (
                        <div
                          key={i}
                          className={`h-px transition-all duration-300 ${i === index ? "w-6 bg-gold" : "w-3 bg-gold/25"}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5.6 — larger, more spacious banner */}
        <div className="mt-12 bg-forest py-8 px-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <Globe size={22} className="text-gold flex-shrink-0" />
          <p className="font-inter text-base font-semibold uppercase tracking-[0.2em] text-white">
            Quality Spices.{" "}
            <span className="text-gold">Trusted Process.</span>{" "}
            Worldwide Reach.
          </p>
        </div>
      </div>
    </section>
  );
}
