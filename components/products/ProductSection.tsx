import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, LucideIcon } from "lucide-react";

interface FeatureIcon {
  icon: LucideIcon;
  label: string;
}

interface ProductSectionProps {
  eyebrow?: string;
  title: string;
  description: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  href: string;
  featureIcons?: FeatureIcon[];
  bgColor?: "white" | "cream";
}

export default function ProductSection({
  eyebrow,
  title,
  description,
  bullets,
  imageSrc,
  imageAlt,
  imagePosition = "right",
  href,
  featureIcons = [],
  bgColor = "white",
}: ProductSectionProps) {
  const bg = bgColor === "cream" ? "bg-cream" : "bg-white";
  const imageFirst = imagePosition === "left";

  return (
    <section className={`${bg}`}>
      {/* Main two-column layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* Image — always on top for mobile, order controlled on desktop */}
          <div
            className={`relative h-72 sm:h-96 lg:h-[480px] rounded-xl overflow-hidden shadow-lg order-first ${
              imageFirst ? "lg:order-first" : "lg:order-last"
            }`}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 ring-1 ring-gold/20 rounded-xl pointer-events-none" />
          </div>

          {/* Text content */}
          <div
            className={`flex flex-col gap-6 order-last ${
              imageFirst ? "lg:order-last" : "lg:order-first"
            }`}
          >
            {eyebrow && (
              <span className="font-inter text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {eyebrow}
              </span>
            )}

            <h2 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-brown leading-tight">
              {title}
            </h2>

            {/* Gold divider */}
            <div className="flex items-center gap-2">
              <div className="h-0.5 w-10 bg-gold" />
              <div className="h-0.5 w-4 bg-gold/40" />
            </div>

            <p className="font-inter text-base text-brown/65 leading-relaxed">{description}</p>

            {/* Available options */}
            {bullets.length > 0 && (
              <div>
                <p className="font-inter text-xs font-semibold uppercase tracking-[0.15em] text-brown/50 mb-3">
                  Available Options
                </p>
                <ul className="flex flex-col gap-2.5">
                  {bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                      <span className="font-inter text-sm text-brown/75">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA */}
            <Link
              href={href}
              className="flex items-center gap-2 font-inter text-sm font-semibold text-forest hover:text-gold transition-colors duration-200 group w-fit mt-1"
            >
              View Full Details
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Feature icons bar */}
      {featureIcons.length > 0 && (
        <div className="bg-forest py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div
              className={`grid gap-4 ${
                featureIcons.length === 4
                  ? "grid-cols-2 md:grid-cols-4"
                  : "grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
              }`}
            >
              {featureIcons.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 text-center">
                  <div className="w-9 h-9 rounded-full bg-white/10 border border-gold/30 flex items-center justify-center">
                    <Icon size={15} className="text-gold" />
                  </div>
                  <span className="font-inter text-xs text-white/80 leading-snug">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
