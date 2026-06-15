import Image from "next/image";
import Link from "next/link";
import { Leaf, Handshake, Globe, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  { icon: Leaf, label: "Authentic Indian Spices" },
  { icon: Handshake, label: "Trusted Sourcing" },
  { icon: Globe, label: "Global Quality Standards" },
  { icon: ShieldCheck, label: "Integrity in Every Shipment" },
];

export default function AboutPreview() {
  return (
    // 3.1 — gold border-b separates this cream section from the white Products section below
    <section className="bg-cream section-padding border-b border-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* 3.6 — sharp corners, gold border accent replaces rounded-xl */}
          <div className="relative h-72 sm:h-96 lg:h-[520px] overflow-hidden order-first lg:order-last border border-gold/25 shadow-xl">
            <Image
              src="/photos-to-use/about-us.png"
              alt="Traditional Kerala houseboat on backwaters — the spirit of Malabar Reserve"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Text content */}
          <div className="flex flex-col gap-6 order-last lg:order-first">
            <SectionHeading
              eyebrow="About Us"
              title="The Heritage of India's Authentic GI-Tagged Spices"
              align="left"
              theme="dark"
              ornament
            />

            {/* 3.2 + 3.3 — larger text, collapsed to one strong paragraph */}
            <p className="font-inter text-base sm:text-lg text-brown/70 leading-relaxed">
              Malabar Reserve sources and exports India&apos;s distinguished GI-tagged spices,
              including Malabar Black Pepper, Alleppey Green Cardamom, and other origin-certified
              treasures, to importers, wholesalers, and food brands worldwide. The historic Malabar
              spice route embodies authenticity, traceability, exceptional quality, and a commitment
              to preserving the heritage behind each spice.
            </p>

            {/* 3.4 — gold hairline border circles instead of bg-forest/10 fill */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              {features.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full border border-gold/60 bg-transparent flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-gold" />
                  </div>
                  <span className="font-inter text-sm font-medium text-brown">{label}</span>
                </div>
              ))}
            </div>

            {/* 3.5 — underline treatment on the text CTA */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-inter text-sm font-semibold text-forest hover:text-gold transition-colors duration-200 group mt-1 w-fit border-b border-forest hover:border-gold pb-0.5"
            >
              Learn Our Story
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
