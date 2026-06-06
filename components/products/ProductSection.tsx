// ProductSection: reusable full-width alternating layout for products page
// Props: title, description, bullets, image src, imageAlt, imagePosition ("left"|"right"), href
// Desktop: side-by-side | Mobile: image top, text below
// TODO: Implement full ProductSection

interface ProductSectionProps {
  title: string;
  description: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  href: string;
}

export default function ProductSection(props: ProductSectionProps) {
  return <section>ProductSection placeholder — {props.title}</section>;
}
