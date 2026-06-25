import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
}

export default function Logo({ variant = "dark" }: LogoProps) {
  if (variant === "dark") {
    return (
      <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
        <Image
          src="/photos-to-use/logo-icon-transparent.png"
          alt="Malabar Reserve icon"
          width={256}
          height={256}
          priority
          className="h-9 w-9 lg:h-11 lg:w-11 flex-shrink-0"
        />
        <div className="flex flex-col leading-none">
          <span className="font-playfair font-bold text-xl tracking-wider text-forest">
            MALABAR
          </span>
          <span className="font-playfair font-semibold text-sm tracking-[0.25em] uppercase text-gold">
            Reserve
          </span>
          <span className="font-inter text-[8px] tracking-[0.18em] uppercase mt-0.5 text-forest/60">
            Premium Indian Spices
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link href="/" className="flex flex-col leading-none flex-shrink-0">
      <span className="font-playfair font-bold text-xl tracking-wider text-white">
        MALABAR
      </span>
      <span className="font-playfair font-semibold text-sm tracking-[0.25em] uppercase text-gold">
        Reserve
      </span>
      <span className="font-inter text-[8px] tracking-[0.18em] uppercase mt-0.5 text-white/60">
        Premium Indian Spices
      </span>
    </Link>
  );
}
