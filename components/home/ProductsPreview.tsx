import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const products = [
  {
    name: "Black Pepper",
    slug: "black-pepper",
    image: "/photos-to-use/black-pepper.png",
    alt: "Premium Kerala black pepper in a wooden bowl",
    description:
      "Known as the King of Spices, sourced from premium growing regions in South India with bold flavour and export-grade quality.",
  },
  {
    name: "Green Cardamom",
    slug: "green-cardamom",
    image: "/photos-to-use/green-cardmom.png",
    alt: "Fresh green cardamom pods handpicked from Idukki, Kerala",
    description:
      "Handpicked for its vibrant colour, intense aroma, and superior freshness. Ideal for food processing and gourmet applications.",
  },
  {
    name: "Cinnamon",
    slug: "cinnamon",
    image: "/photos-to-use/cinnamon.png",
    alt: "Premium cinnamon sticks and powder",
    description:
      "Carefully selected cinnamon with naturally sweet aroma and warm flavour profiles suited for global food and beverage markets.",
  },
];

export default function ProductsPreview() {
  return (
    <section className="bg-white section-padding">
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

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.slug}
              className="group bg-cream rounded-xl overflow-hidden border border-transparent hover:border-gold/30 transition-all duration-300 hover:shadow-lg flex flex-col"
            >
              {/* Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Gold shimmer overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-brown/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="font-playfair font-bold text-xl text-brown">{product.name}</h3>
                <p className="font-inter text-sm text-brown/65 leading-relaxed flex-1">
                  {product.description}
                </p>
                <Link
                  href={`/products/${product.slug}`}
                  className="flex items-center gap-1.5 font-inter text-sm font-semibold text-forest hover:text-gold transition-colors duration-200 group/link mt-1 w-fit"
                >
                  View Product
                  <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="font-inter text-sm font-semibold px-6 py-3 rounded border-2 border-forest text-forest hover:bg-forest hover:text-white transition-colors duration-200"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
