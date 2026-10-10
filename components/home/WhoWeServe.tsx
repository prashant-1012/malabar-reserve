import Image from "next/image";
import { Factory, ChefHat, Store } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Grain from "@/components/ui/Grain";
import Reveal from "@/components/motion/Reveal";
import { RevealGroup, RevealItem } from "@/components/motion/RevealGroup";
import PressableLink from "@/components/motion/PressableLink";

const audiences = [
  {
    icon: Factory,
    title: "Food Manufacturers",
    image: "/photos-to-use/serve-food-manufacturers.webp",
    alt: "Graded black pepper, turmeric, red chilli and cardamom on a spice processing line",
    description:
      "Consistent, specification-matched lots in container volumes — graded, cleaned and documented for continuous production runs.",
    points: ["Bulk & container loads", "Consistent grade specs", "Full export documentation"],
  },
  {
    icon: ChefHat,
    title: "Hospitality & Culinary",
    image: "/photos-to-use/serve-hospitality.webp",
    alt: "Chef finishing a dish with Malabar Reserve black pepper powder in a professional kitchen",
    description:
      "Single-origin spices with the aroma and colour that hold up on the plate, supplied to hotel groups, kitchens and distributors.",
    points: ["Single-origin lots", "Whole & ground formats", "Catering pack sizes"],
  },
  {
    icon: Store,
    title: "Retail & Private Label",
    image: "/photos-to-use/serve-retail.webp",
    alt: "Malabar Reserve branded retail shelf with the full spice range on display",
    description:
      "Shelf-ready packs under your brand or ours — artwork, pouch formats and pack weights built around your market.",
    points: ["Private label artwork", "Retail-ready pouches", "Custom pack weights"],
  },
];

/**
 * Recovers the value of the deleted /industries route without re-adding it,
 * using the three commissioned images that were sitting unused in new-images/.
 * Two of them show the brand's own packaging in commercial context, which is
 * the only product-in-context photography the site has.
 */
export default function WhoWeServe() {
  return (
    <section className="on-dark relative bg-forest section-padding overflow-hidden">
      <Grain opacity={0.05} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeading
            eyebrow="Who We Serve"
            title="Built for the Businesses We Supply"
            subtitle="From production lines to restaurant pass to retail shelf — the grade, format and paperwork change, the standard doesn't."
            align="center"
            theme="light"
          />
        </div>

        <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {audiences.map(({ icon: Icon, title, image, alt, description, points }) => (
            <RevealItem key={title} className="h-full">
              <article className="group h-full flex flex-col bg-white/[0.03] border border-gold/20 hover:border-gold/50 transition-colors duration-500 ease-brand">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-brand group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/25 to-transparent" />

                  <div className="absolute bottom-4 left-5 right-5 flex items-center gap-3">
                    <div className="w-10 h-10 border border-gold/70 bg-black/40 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <Icon size={17} className="text-gold" />
                    </div>
                    <h3 className="font-playfair font-bold text-xl text-white tracking-display-xs">
                      {title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex flex-col gap-4 flex-1">
                  <p className="font-inter text-sm text-white/70 leading-relaxed">
                    {description}
                  </p>

                  <div className="h-px w-8 bg-gold transition-all duration-500 ease-brand group-hover:w-16" />

                  <ul className="flex flex-col gap-2 mt-auto">
                    {points.map((point) => (
                      <li
                        key={point}
                        className="font-inter text-xs uppercase tracking-[0.12em] text-white/55 flex items-center gap-2"
                      >
                        <span aria-hidden="true" className="w-1 h-1 bg-gold flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-12 text-center" y={16}>
          <PressableLink
            href="/contact"
            className="btn-gold inline-block font-inter text-sm font-semibold tracking-[0.12em] uppercase px-10 py-4 rounded-none"
          >
            Discuss Your Requirement
          </PressableLink>
        </Reveal>
      </div>
    </section>
  );
}
