import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ImageSpecBadge from "@/components/ui/ImageSpecBadge";
import Grain from "@/components/ui/Grain";
import Reveal from "@/components/motion/Reveal";
import { RevealGroup, RevealItem } from "@/components/motion/RevealGroup";
import PressableLink from "@/components/motion/PressableLink";

const products = [
  {
    name: "Black Pepper",
    slug: "black-pepper",
    image: "/photos-to-use/black-pepper.png",
    alt: "Premium Kerala black pepper in a wooden bowl",
    tag: "King of Spices",
    description:
      "High-Piperine black pepper from Kerala, prized for its bold flavor, rich aroma, and export-quality consistency.",
  },
  {
    name: "Green Cardamom",
    slug: "green-cardamom",
    image: "/photos-to-use/green-cardmom.png",
    alt: "Fresh green cardamom pods handpicked from Idukki, Kerala",
    tag: "Idukki Highlands",
    description:
      "Super Bold green cardamom with vibrant color, intense aroma, and superior freshness.",
  },
  {
    name: "Turmeric",
    slug: "turmeric",
    image: "/photos-to-use/turmeric_roots.webp",
    alt: "High-curcumin turmeric roots sourced from South India",
    tag: "High Curcumin",
    description:
      "High-Curcumin turmeric sourced from South India, valued for its purity, natural color, and exceptional quality.",
  },
  {
    name: "Red Chilli",
    slug: "red-chilli",
    image: "/photos-to-use/red-chilli.png",
    alt: "Vibrant red chilli powder and sun-dried whole chillies",
    tag: "Kashmiri to Extra Hot",
    description:
      "Sun-dried red chillies delivering vibrant colour, bold heat, and export-grade consistency across mild to extra-hot grades.",
    photoConfirmed: true,
  },
];

export default function ProductsPreview() {
  return (
    <section className="relative bg-white section-padding border-b border-gold/10">
      <Grain opacity={0.025} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-12">
          <SectionHeading
            eyebrow="Our Products"
            title="Spices We Export"
            subtitle="Four of India's finest spices, sourced directly from their origins and prepared to the highest export standards."
            align="center"
          />
        </div>

        {/* 4.1 + 4.2 — portrait crops, white cards with gold border, tinted lift on hover */}
        <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product) => (
            <RevealItem
              key={product.slug}
              className="group bg-white border border-gold/20 hover:border-gold/60 shadow-lift-1 hover:shadow-lift-3 transition-all duration-500 ease-brand flex flex-col"
            >
              {/* Portrait crop — landscape reads as catalogue, portrait reads as premium */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-brown/60 via-brown/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating tag — slides up on hover */}
                <div className="absolute bottom-4 left-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-brand">
                  <span className="font-inter text-[10px] font-semibold uppercase tracking-[0.18em] text-ink bg-gold px-2.5 py-1">
                    {product.tag}
                  </span>
                </div>

                {!product.photoConfirmed && (
                  <ImageSpecBadge
                    label={`${product.name} Product Photo`}
                    ratio="Square"
                    size="1800×1800"
                    format="JPG or PNG"
                    fileName={product.image.split("/").pop() as string}
                  />
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="font-playfair font-bold text-xl text-brown group-hover:text-forest transition-colors duration-300">
                  {product.name}
                </h3>

                {/* 4.3 — gold rule between name and description */}
                <div className="h-px w-8 bg-gold transition-all duration-500 group-hover:w-16" />

                <p className="font-inter text-sm text-brown/65 leading-relaxed flex-1">
                  {product.description}
                </p>

                {/* 4.4 — underline animation on the link */}
                <Link
                  href={`/products/${product.slug}`}
                  className="inline-flex items-center gap-1.5 font-inter text-sm font-semibold text-forest mt-1 w-fit border-b border-transparent hover:border-gold hover:text-gold transition-all duration-200 pb-0.5 group/link"
                >
                  View Product
                  <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
                </Link>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* 4.5 — single border, uppercase, generous padding */}
        <Reveal className="mt-12 text-center" y={16}>
          <PressableLink
            href="/products"
            className="inline-block font-inter text-sm font-semibold tracking-[0.12em] uppercase px-10 py-3.5 rounded-none border border-forest text-forest hover:bg-forest hover:text-white transition-colors duration-300"
          >
            View All Products
          </PressableLink>
        </Reveal>
      </div>
    </section>
  );
}
