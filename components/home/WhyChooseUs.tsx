import Image from "next/image";
import Link from "next/link";
import { Award, Handshake, Globe, Box, Leaf, Mail, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Carefully sourced and selected for the best quality spices.",
  },
  {
    icon: Handshake,
    title: "Reliable Partnership",
    description: "Built on trust, transparency, and long-term relationships.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Efficient export network ensuring timely delivery worldwide.",
  },
  {
    icon: Box,
    title: "Flexible Solutions",
    description:
      "Custom packaging, private labeling, and bulk supply options to suit your needs.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description:
      "Committed to ethical sourcing and environmentally responsible practices.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white">
      {/* Main content */}
      <div className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* Left: text + features */}
            <div className="flex flex-col gap-7">
              <SectionHeading
                eyebrow="Why Partner With Us"
                title="Why Partner With Malabar Reserve?"
                subtitle="We go beyond spices — we build lasting partnerships through trust, quality, and commitment."
                align="left"
                theme="dark"
              />

              <div className="flex flex-col gap-5">
                {features.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={18} className="text-forest" />
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-sm text-brown mb-0.5">{title}</h4>
                      <p className="font-inter text-sm text-brown/60 leading-relaxed">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: image */}
            <div className="relative h-72 sm:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/photos-to-use/why-partner-us.png"
                alt="Premium spice bowls — black pepper, green cardamom, and cinnamon — flat lay"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 ring-1 ring-gold/20 rounded-xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA bar */}
      <div className="bg-forest py-6 px-4 sm:px-6 lg:px-8">
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

          {/* Right: contact info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <a
              href="mailto:info@malabarreserve.co"
              className="flex items-center gap-2 font-inter text-xs text-white/70 hover:text-white transition-colors"
            >
              <Mail size={13} className="text-gold" />
              info@malabarreserve.co
            </a>
            <a
              href="https://malabarreserve.co"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-inter text-xs text-white/70 hover:text-white transition-colors"
            >
              <ExternalLink size={13} className="text-gold" />
              malabarreserve.co
            </a>
            <Link
              href="/contact"
              className="font-inter text-xs font-semibold px-4 py-2 rounded border border-gold text-gold hover:bg-gold hover:text-brown transition-colors duration-200 whitespace-nowrap"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
