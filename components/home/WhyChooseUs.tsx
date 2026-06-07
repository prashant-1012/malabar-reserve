"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Award, Handshake, Globe, Box, Leaf, Mail, ExternalLink, Check, type LucideIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const features: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Carefully sourced and selected for export-grade quality, every single shipment.",
  },
  {
    icon: Handshake,
    title: "Reliable Partnership",
    description: "Built on trust, transparency, and long-term trade relationships.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Efficient export network ensuring timely, documented delivery worldwide.",
  },
  {
    icon: Box,
    title: "Flexible Solutions",
    description: "Custom packaging, private labelling, and bulk supply options to suit your business.",
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
                subtitle="We go beyond spices — we build lasting partnerships through trust, quality, and commitment."
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
                alt="Premium spice bowls — black pepper, green cardamom, and cinnamon — flat lay"
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

      {/* 6.5 — CTA bar separated with a top border for breathing room */}
      <div className="bg-forest border-t-4 border-gold/30 py-7 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Left: tagline */}
          <div className="flex items-center gap-3">
            <Leaf size={20} className="text-gold flex-shrink-0" />
            <div>
              <p className="font-playfair font-bold text-white text-lg leading-tight">
                Let&apos;s Grow Together
              </p>
              <p className="font-inter text-xs text-white/60 tracking-wide">
                Quality spices. Stronger partnerships.
              </p>
            </div>
          </div>

          {/* Right: contact info + CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <a
              href="mailto:info@malabarreserve.co"
              className="flex items-center gap-2 font-inter text-xs text-white/70 hover:text-white transition-colors duration-200"
            >
              <Mail size={13} className="text-gold" />
              info@malabarreserve.co
            </a>
            <a
              href="https://malabarreserve.co"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-inter text-xs text-white/70 hover:text-white transition-colors duration-200"
            >
              <ExternalLink size={13} className="text-gold" />
              malabarreserve.co
            </a>
            <Link
              href="/contact"
              className="font-inter text-xs font-semibold tracking-[0.08em] px-5 py-2 rounded-none border border-gold text-gold hover:bg-gold hover:text-brown transition-colors duration-200 whitespace-nowrap"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
