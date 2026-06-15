"use client";

import Image from "next/image";
import { useState } from "react";
import { Award, Handshake, Globe, Box, Check, type LucideIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const features: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Award,
    title: "Premium Export Quality",
    description:
      "We source and supply carefully selected black pepper, green cardamom, and turmeric that meet international quality standards for purity, aroma, consistency, and performance.",
  },
  {
    icon: Handshake,
    title: "Trusted Partnerships",
    description:
      "We believe in building lasting relationships through transparency, dependable service, and a commitment to delivering value with every shipment.",
  },
  {
    icon: Globe,
    title: "Global Export Expertise",
    description:
      "From documentation and compliance to logistics and delivery, our export-focused approach ensures a seamless experience for customers worldwide.",
  },
  {
    icon: Box,
    title: "Customized Supply Solutions",
    description:
      "Whether you require bulk shipments, private labelling, or customized packaging, we provide flexible solutions tailored to your business needs.",
  },
];

export default function WhyChooseUs() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  return (
    <section className="bg-white">
      {/* Main content */}
      <div className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* Left: text + features */}
            <div className="flex flex-col gap-8">
              <SectionHeading
                eyebrow="Why Partner With Us"
                title="Why Partner With Malabar Reserve?"
                subtitle="Delivering premium Indian spices through quality, reliability, and long-term partnerships."
                align="left"
                theme="dark"
              />

              <div className="flex flex-col gap-2">
                {features.map(({ icon: Icon, title, description }, index) => {
                  const isActive = activeFeature === index;
                  return (
                    <div
                      key={title}
                      onMouseEnter={() => setActiveFeature(index)}
                      onMouseLeave={() => setActiveFeature(null)}
                      className={`flex items-start gap-4 p-4 border-l-2 transition-all duration-300 cursor-default ${
                        isActive
                          ? "border-gold bg-cream/60"
                          : "border-transparent"
                      }`}
                    >
                      {/* Default: original icon in forest style. Hover: Check in gold */}
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 ${
                        isActive
                          ? "bg-gold/10 border border-gold"
                          : "bg-forest/10 border border-transparent"
                      }`}>
                        {isActive
                          ? <Check size={15} className="text-gold" />
                          : <Icon size={16} className="text-forest" />
                        }
                      </div>
                      <div>
                        <h4 className={`font-inter font-semibold text-base mb-1 transition-colors duration-300 ${
                          isActive ? "text-forest" : "text-brown"
                        }`}>
                          {title}
                        </h4>
                        <p className="font-inter text-sm text-brown/60 leading-relaxed">{description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: image — sharp corners, gold border, natural aspect ratio */}
            <div className="relative w-full overflow-hidden border border-gold/25 shadow-xl group" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/photos-to-use/why-partner-us.png"
                alt="Premium spice bowls — black pepper, green cardamom, and turmeric — flat lay"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle gold shimmer on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
