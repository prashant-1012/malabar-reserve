// ProductDetailHero: hero section for individual product detail pages
// Props: title, subtitle, imageSrc, imageAlt
// Full-width image with dark gradient overlay and text content
// TODO: Implement full ProductDetailHero

interface ProductDetailHeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
}

export default function ProductDetailHero(props: ProductDetailHeroProps) {
  return <section>ProductDetailHero placeholder — {props.title}</section>;
}
