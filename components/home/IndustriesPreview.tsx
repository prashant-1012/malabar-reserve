import Image from "next/image";
import Link from "next/link";
import { Factory, Ship, Warehouse, ShoppingBag, ChefHat, Tag } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const industries = [
  {
    name: "Food Manufacturers",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    alt: "Food manufacturing production line",
  },
  {
    name: "Spice Importers",
    icon: Ship,
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80",
    alt: "Shipping containers at international port",
  },
  {
    name: "Wholesale Distributors",
    icon: Warehouse,
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    alt: "Large warehouse with stacked shelves and products",
  },
  {
    name: "Retail Brands",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
    alt: "Retail spice store shelves with packaged products",
  },
  {
    name: "Hospitality & Culinary Businesses",
    icon: ChefHat,
    image: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?w=800&q=80",
    alt: "Professional chef preparing food in restaurant kitchen",
  },
  {
    name: "Private Label Companies",
    icon: Tag,
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&q=80",
    alt: "Custom branded spice packaging for private label",
  },
];

export default function IndustriesPreview() {
  return (
    <section className="bg-cream section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-10">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Who We Work With"
            subtitle="Delivering premium spices and reliable supply solutions to businesses across the globe."
            align="center"
          />
        </div>

        {/* Industry cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {industries.map(({ name, icon: Icon, image, alt }) => (
            <div
              key={name}
              className="group relative h-48 sm:h-56 md:h-64 rounded-xl overflow-hidden cursor-default"
            >
              {/* Background image */}
              <Image
                src={image}
                alt={alt}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/70 transition-all duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
                <div className="w-11 h-11 rounded-full border-2 border-gold bg-black/30 backdrop-blur-sm flex items-center justify-center">
                  <Icon size={20} className="text-gold" />
                </div>
                <h3 className="font-playfair font-bold text-white text-lg text-center leading-snug">
                  {name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Closing tagline + link */}
        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="font-inter text-sm text-brown/60 italic">
            Your growth is our priority. Quality, consistency, and trust in every shipment.
          </p>
          <Link
            href="/industries"
            className="font-inter text-sm font-semibold px-6 py-3 rounded bg-forest text-white hover:bg-forest/80 transition-colors duration-200"
          >
            View All Industries →
          </Link>
        </div>
      </div>
    </section>
  );
}
