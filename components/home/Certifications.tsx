import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { RevealGroup, RevealItem } from "@/components/motion/RevealGroup";

const certifications: {
  name: string;
  full: string;
  logo: string;
  width: number;
  height: number;
}[] = [
  {
    name: "FSSAI",
    full: "Food Safety and Standards Authority of India (FSSAI Certified)",
    logo: "/photos-to-use/cert-fssai.webp",
    width: 140,
    height: 70,
  },
  {
    name: "ISO 22000",
    full: "ISO 22000 Certified — Food Safety Management Systems",
    logo: "/photos-to-use/cert-iso22000.webp",
    width: 155,
    height: 62,
  },
  {
    name: "APEDA",
    full: "Agricultural & Processed Food Products Export Development Authority",
    logo: "/photos-to-use/cert-apeda.webp",
    width: 130,
    height: 75,
  },
];

export default function Certifications() {
  return (
    <section className="relative bg-white py-14 md:py-16 border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center text-center gap-3 mb-10" y={16}>
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-gold/60" />
            <ShieldCheck size={18} className="text-gold" aria-hidden="true" />
            <div className="h-px w-10 bg-gold/60" />
          </div>
          <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-brown/50">
            Certified &amp; Compliant for Global Export
          </p>
        </Reveal>

        <RevealGroup
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 lg:gap-x-24"
          as="ul"
          stagger={0.07}
        >
          {certifications.map((cert) => (
            <RevealItem key={cert.name} as="li">
              <div
                title={cert.full}
                className="group flex items-center justify-center grayscale hover:grayscale-0 opacity-75 hover:opacity-100 transition-all duration-400 ease-brand"
              >
                <div className="relative w-[150px] sm:w-[170px] h-[65px] sm:h-[75px] flex items-center justify-center">
                  <Image
                    src={cert.logo}
                    alt={cert.name}
                    width={cert.width}
                    height={cert.height}
                    className="max-h-[55px] sm:max-h-[65px] w-auto object-contain transition-transform duration-300 ease-brand group-hover:scale-105"
                  />
                </div>
                <span className="sr-only">{cert.full}</span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
