import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface ProductDetailHeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  breadcrumb: string;
}

export default function ProductDetailHero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  breadcrumb,
}: ProductDetailHeroProps) {
  return (
    <section className="relative w-full h-[60vh] min-h-[420px] max-h-[580px] overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col gap-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 font-inter text-xs text-white/50">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight size={12} />
            <span className="text-gold">{breadcrumb}</span>
          </nav>

          {/* Gold divider */}
          <div className="flex items-center gap-2">
            <div className="h-0.5 w-10 bg-gold" />
            <div className="h-0.5 w-4 bg-gold/40" />
          </div>

          <h1 className="font-playfair font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            {title}
          </h1>
          <p className="font-inter text-base text-white/70 max-w-lg leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
