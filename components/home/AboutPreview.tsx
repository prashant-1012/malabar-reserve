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
    <section className="bg-cream section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Image — top on mobile, right on desktop */}
          <div className="relative h-72 sm:h-96 lg:h-[520px] rounded-xl overflow-hidden shadow-xl order-first lg:order-last">
            <Image
              src="/photos-to-use/about-us.png"
              alt="Traditional Kerala houseboat on backwaters — the spirit of Malabar Reserve"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Subtle gold border accent */}
            <div className="absolute inset-0 ring-1 ring-gold/20 rounded-xl pointer-events-none" />
          </div>

          {/* Text content */}
          <div className="flex flex-col gap-6 order-last lg:order-first">
            <SectionHeading
              eyebrow="About Us"
              title="The Essence of Indian Spice Excellence"
              align="left"
              theme="dark"
              ornament
            />

            <div className="flex flex-col gap-4 font-inter text-sm sm:text-base text-brown/70 leading-relaxed">
              <p>
                Malabar Reserve is a spice export company dedicated to supplying high-quality Indian
                spices to importers, wholesalers, food manufacturers, and retail brands across
                international markets.
              </p>
              <p>
                Inspired by the historic spice routes of the Malabar region, we focus on delivering
                products that reflect purity, authenticity, and consistency.
              </p>
              <p>
                With a strong network of sourcing partners and a commitment to dependable trade
                practices, Malabar Reserve aims to build long-term relationships based on trust,
                transparency, and quality.
              </p>
            </div>

            {/* 4 feature icons */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              {features.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-forest" />
                  </div>
                  <span className="font-inter text-sm font-medium text-brown">{label}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="flex items-center gap-2 font-inter text-sm font-semibold text-forest hover:text-gold transition-colors duration-200 group mt-1 w-fit"
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
