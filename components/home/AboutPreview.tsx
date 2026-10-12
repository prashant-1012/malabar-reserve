import Image from "next/image";
import Link from "next/link";
import { Leaf, Handshake, Globe, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Grain from "@/components/ui/Grain";
import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import { RevealGroup, RevealItem } from "@/components/motion/RevealGroup";

const features = [
  { icon: Leaf, label: "Authentic Indian Spices" },
  { icon: Handshake, label: "Trusted Sourcing" },
  { icon: Globe, label: "Global Quality Standards" },
  { icon: ShieldCheck, label: "Integrity in Every Shipment" },
];

export default function AboutPreview() {
  return (
    // 3.1 — gold border-b separates this cream section from the white Products section below
    <section className="relative bg-cream section-padding border-b border-gold/15">
      <Grain />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* 3.6 — gallery mat: a gold hairline frame offset behind the image */}
          <Reveal className="relative order-first lg:order-last" y={32}>
            <div
              aria-hidden="true"
              className="hidden lg:block absolute -inset-3 border border-gold/35 pointer-events-none"
            />
            <div className="relative h-72 sm:h-96 lg:h-[520px] overflow-hidden border border-gold/25 shadow-lift-3">
              {/* Drifts inside its frame, so the parallax reveals image, not whitespace */}
              <Parallax distance={26} className="absolute inset-0 -top-8 -bottom-8">
                <Image
                  src="/photos-to-use/about-us.png"
                  alt="Traditional Kerala houseboat on backwaters — the spirit of Malabar Reserve"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </Parallax>
            </div>
          </Reveal>

          {/* Text content */}
          <div className="flex flex-col gap-6 order-last lg:order-first">
            <SectionHeading
              eyebrow="About Us"
              title="The Heritage of India's Authentic Spices"
              align="left"
              theme="dark"
              ornament
            />

            {/* 3.2 + 3.3 — larger text, collapsed to one strong paragraph */}
            <Reveal as="p" y={16} className="font-inter text-base sm:text-lg text-brown/70 leading-relaxed">
              Malabar Reserve sources and exports India&apos;s distinguished spices,
              including Malabar Black Pepper, Alleppey Green Cardamom, and other origin-certified
              treasures, to importers, wholesalers, and food brands worldwide. The historic Malabar
              spice route embodies authenticity, traceability, exceptional quality, and a commitment
              to preserving the heritage behind each spice.
            </Reveal>

            {/* 3.4 — gold hairline border circles instead of bg-forest/10 fill */}
            <RevealGroup className="grid grid-cols-2 gap-4 mt-2">
              {features.map(({ icon: Icon, label }) => (
                <RevealItem key={label} y={12} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full border border-gold/60 bg-transparent flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-gold" />
                  </div>
                  <span className="font-inter text-sm font-medium text-brown">{label}</span>
                </RevealItem>
              ))}
            </RevealGroup>

            {/* 3.5 — underline treatment on the text CTA */}
            <Reveal y={12} className="w-fit">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-inter text-sm font-semibold text-forest hover:text-gold transition-colors duration-200 group mt-1 w-fit border-b border-forest hover:border-gold pb-0.5"
              >
                Learn Our Story
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
