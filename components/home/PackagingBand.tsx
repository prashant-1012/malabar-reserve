import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Grain from "@/components/ui/Grain";
import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import { RevealGroup, RevealItem } from "@/components/motion/RevealGroup";
import PressableLink from "@/components/motion/PressableLink";

const packs = [
  {
    name: "Black Pepper",
    grade: "Supreme",
    image: "/photos-to-use/pouch-black-pepper.webp",
    alt: "Malabar Reserve Supreme Black Pepper retail pouch",
  },
  {
    name: "Green Cardamom",
    grade: "Supreme",
    image: "/photos-to-use/pouch-green-cardamom.webp",
    alt: "Malabar Reserve Supreme Green Cardamom retail pouch",
  },
  {
    name: "Turmeric Powder",
    grade: "Salem",
    image: "/photos-to-use/pouch-turmeric.webp",
    alt: "Malabar Reserve Salem Turmeric Powder retail pouch",
  },
  {
    name: "Red Chilli Powder",
    grade: "Kashmiri",
    image: "/photos-to-use/pouch-red-chilli.webp",
    alt: "Malabar Reserve Kashmiri Red Chilli Powder retail pouch",
  },
  {
    name: "Black Pepper Powder",
    grade: "Ground",
    image: "/photos-to-use/pouch-black-pepper-powder.webp",
    alt: "Malabar Reserve Black Pepper Powder retail pouch",
  },
];

/**
 * The site claims private labelling and custom packaging in WhyChooseUs copy
 * but never showed any. These are the client's own retail-ready pouch renders.
 *
 * Each pouch drifts at a slightly different rate on scroll — alternating sign,
 * small distances. The uneven rhythm is what makes a flat row read as depth.
 */
const DRIFT = [18, -14, 22, -12, 16];

export default function PackagingBand() {
  return (
    <section className="relative bg-cream section-padding overflow-hidden border-b border-gold/15">
      <Grain />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <SectionHeading
            eyebrow="Packaging & Private Label"
            title="Your Brand, Our Spice"
            subtitle="Bulk sacks for the production floor, retail pouches for the shelf — or your own artwork on both. Pack format, weight and labelling are built to your market."
            align="center"
          />
        </div>

        <RevealGroup
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 items-end"
          stagger={0.08}
        >
          {packs.map((pack, i) => (
            <RevealItem key={pack.name} className="flex flex-col items-center">
              <Parallax distance={DRIFT[i]} className="w-full">
                <div className="relative aspect-[7/10] w-full">
                  <Image
                    src={pack.image}
                    alt={pack.alt}
                    fill
                    className="object-contain object-bottom drop-shadow-[0_18px_28px_rgba(61,43,31,0.18)]"
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
                  />
                </div>
              </Parallax>

              <div className="mt-5 text-center">
                <p className="font-inter text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                  {pack.grade}
                </p>
                <p className="font-playfair font-bold text-sm text-brown mt-1">
                  {pack.name}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6" y={16}>
          <p className="font-inter text-sm text-brown/60 text-center sm:text-left max-w-md">
            Bulk sacks, cartons, retail pouches and custom weights — tell us the
            format and we&apos;ll quote against it.
          </p>
          <PressableLink
            href="/products"
            className="inline-block flex-shrink-0 font-inter text-sm font-semibold tracking-[0.12em] uppercase px-10 py-3.5 rounded-none border border-forest text-forest hover:bg-forest hover:text-white transition-colors duration-300"
          >
            See Packaging Options
          </PressableLink>
        </Reveal>
      </div>
    </section>
  );
}
