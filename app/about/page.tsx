import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Leaf, Handshake, Globe, ShieldCheck, Award, Sprout, Eye } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ImageSpecBadge from "@/components/ui/ImageSpecBadge";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Malabar Reserve — our story, mission, and commitment to delivering the finest spices from Kerala's heartland to global markets.",
  keywords: [
    "about Malabar Reserve",
    "Indian spice company",
    "Kerala spice exporter story",
    "spice export company India",
    "Malabar spice heritage",
  ],
  openGraph: {
    type: "website",
    siteName: "Malabar Reserve",
    title: "About Us | Malabar Reserve",
    description:
      "Our story of bringing Kerala's finest spices to the world with integrity, quality, and passion.",
    url: "https://malabarreserve.co/about",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Malabar Reserve",
    description:
      "Our story of bringing Kerala's finest spices to the world with integrity, quality, and passion.",
  },
};

const values = [
  {
    icon: Sprout,
    title: "Source with Purpose",
    description:
      "We work closely with trusted growers and suppliers to identify spices with exceptional quality and provenance.",
  },
  {
    icon: Award,
    title: "Quality Without Compromise",
    description:
      "From sourcing and grading to storage and packaging, we focus on preserving the natural character and quality of every spice.",
  },
  {
    icon: Eye,
    title: "Traceability Matters",
    description:
      "We believe customers should know more about where their food comes from and how it reaches them.",
  },
  {
    icon: Handshake,
    title: "Integrity in Every Relationship",
    description:
      "Whether working with a farmer, supplier, importer, retailer or customer, we believe long-term relationships are built on transparency and consistency.",
  },
];

const features = [
  { icon: Leaf, label: "Authentic Indian Spices" },
  { icon: Handshake, label: "Trusted Sourcing" },
  { icon: Globe, label: "Global Quality Standards" },
  { icon: ShieldCheck, label: "Integrity in Every Shipment" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── 1. Hero banner ───────────────────────────────────────── */}
      <section className="bg-forest py-20 md:py-28 relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #9B7733 1px, transparent 1px), radial-gradient(circle at 80% 50%, #9B7733 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-5">
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-gold/50" />
            <Leaf size={16} className="text-gold" />
            <div className="h-px w-10 bg-gold/50" />
          </div>
          <span className="font-inter text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Our Story
          </span>
          <h1 className="font-playfair font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight max-w-3xl">
            About Malabar Reserve
          </h1>
        </div>
      </section>

      {/* ── 2. Full-width houseboat image ────────────────────────── */}
      <section className="relative w-full h-72 sm:h-96 md:h-[480px] lg:h-[560px] overflow-hidden">
        <Image
          src="/photos-to-use/about-us.png"
          alt="Traditional Kerala houseboat gliding through the lush backwaters at golden hour"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Bottom fade into next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cream/60" />
        <ImageSpecBadge
          label="About Banner (same photo as homepage About section)"
          ratio="Wide banner"
          size="2400×1600"
          fileName="about-us.png"
          position="top"
        />

        {/* Floating caption card */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-lg px-4 sm:px-6 py-3 shadow-lg border border-gold/20 text-center w-[90%] sm:w-auto max-w-sm sm:max-w-none">
          <p className="font-playfair italic text-brown text-sm">
            The Backwaters of Kerala — the heart of Malabar Reserve
          </p>
        </div>
      </section>

      {/* ── 3. Company story ─────────────────────────────────────── */}
      <section className="bg-cream section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-start">

            {/* Left: heading */}
            <div className="lg:sticky lg:top-24">
              <SectionHeading
                eyebrow="Our Story"
                title="Two Roots, One Vision"
                align="left"
                theme="dark"
                ornament
              />
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-block font-inter font-semibold text-sm px-6 py-3 rounded bg-forest text-white hover:bg-forest/80 transition-colors duration-200"
                >
                  Start a Partnership
                </Link>
              </div>
            </div>

            {/* Right: story paragraphs */}
            <div className="flex flex-col gap-6 font-inter text-base text-brown/70 leading-relaxed">
              <p>
                Malabar Reserve began with two people from two different corners of India —
                Saurav from West Bengal and Vismritha from Kerala — brought together by a shared
                love for the flavours, culture and heritage of Indian spices.
              </p>
              <p>
                For Vismritha, spices have always been part of the land she grew up in, especially
                the rich spice heritage of Kerala and the Malabar Coast. For Saurav, the journey
                brought a different perspective, but the same appreciation for the depth and
                diversity of Indian flavours.
              </p>
              <p>
                Together, they created Malabar Reserve with a simple vision: to bring
                India&apos;s finest spices from their origins to kitchens around the world, with
                careful sourcing, honest relationships and uncompromising quality.
              </p>
              <p className="font-playfair italic text-xl text-forest">
                Two roots. One vision. For the love of spice.
              </p>

              {/* Founders */}
              <div className="grid grid-cols-2 gap-5 mt-4 max-w-md">
                <div className="flex flex-col gap-3">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                    <Image
                      src="/photos-to-use/founder-vismritha.jpg"
                      alt="Vismritha, Co-Founder of Malabar Reserve"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <p className="font-inter text-sm text-brown text-center">
                    <span className="font-semibold">Vismritha</span>
                    <br />
                    <span className="text-brown/60 text-xs">Co-Founder</span>
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                    <Image
                      src="/photos-to-use/founder-saurav.png"
                      alt="Saurav, Co-Founder of Malabar Reserve"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <p className="font-inter text-sm text-brown text-center">
                    <span className="font-semibold">Saurav</span>
                    <br />
                    <span className="text-brown/60 text-xs">Co-Founder</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Company values ────────────────────────────────────── */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <SectionHeading
              eyebrow="What We Stand For"
              title="Our Core Values"
              subtitle="The principles that guide every decision, every partnership, and every shipment."
              align="center"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex gap-5 p-6 rounded-xl bg-cream border border-transparent hover:border-gold/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon size={20} className="text-forest" />
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-xl text-brown mb-2">{title}</h3>
                  <p className="font-inter text-sm text-brown/65 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. 4-icon feature row ────────────────────────────────── */}
      <section className="bg-forest py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {features.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3 text-center">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-gold/40 flex items-center justify-center">
                  <Icon size={20} className="text-gold" />
                </div>
                <span className="font-inter text-sm font-medium text-white leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
