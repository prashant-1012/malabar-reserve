import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const products = [
  {
    name: "Black Pepper",
    slug: "black-pepper",
    image: "/photos-to-use/black-pepper.png",
    alt: "Premium Kerala black pepper in a wooden bowl",
    tag: "King of Spices",
    description:
      "Sourced from premium growing regions in South India with bold flavour and export-grade quality.",
  },
  {
    name: "Green Cardamom",
    slug: "green-cardamom",
    image: "/photos-to-use/green-cardmom.png",
    alt: "Fresh green cardamom pods handpicked from Idukki, Kerala",
    tag: "Idukki Highlands",
    description:
      "Handpicked for vibrant colour, intense aroma, and superior freshness — ideal for gourmet and food processing applications.",
  },
  {
    name: "Cinnamon",
    slug: "cinnamon",
    image: "/photos-to-use/cinnamon.png",
    alt: "Premium cinnamon sticks and powder",
    tag: "Naturally Sweet",
    description:
      "Carefully selected for warm flavour profiles suited to global food and beverage markets.",
  },
];

export default function ProductsPreview() {
  return (
    <section className="bg-white section-padding border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-12">
          <SectionHeading
            eyebrow="Our Products"
            title="Spices We Export"
            subtitle="Three of India's finest spices, sourced directly from Kerala's heartland and prepared to the highest export standards."
            align="center"
          />
        </div>

        {/* 4.1 + 4.2 — taller images, white cards with gold border, shadow lift on hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.slug}
              className="group bg-white border border-gold/20 hover:border-gold/60 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              {/* 4.1 — taller image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-108"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-brown/60 via-brown/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating tag — slides up on hover */}
                <div className="absolute bottom-4 left-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <span className="font-inter text-[10px] font-semibold uppercase tracking-[0.18em] text-white bg-gold/90 px-2.5 py-1">
                    {product.tag}
                  </span>
                </div>
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
            </div>
          ))}
        </div>

        {/* 4.5 — single border, uppercase, generous padding */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="font-inter text-sm font-semibold tracking-[0.12em] uppercase px-10 py-3.5 rounded-none border border-forest text-forest hover:bg-forest hover:text-white transition-colors duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
