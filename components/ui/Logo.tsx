import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
}

/**
 * The lockup used to be a single flattened PNG, which baked in the proportion
 * between the circular MR mark and the wordmark — and in that artwork the
 * wordmark badly outweighs the mark, so the mark read as an afterthought.
 *
 * Splitting it into two images lets us size them independently: the mark
 * larger, the wordmark smaller. Both are cropped from the original navbar PNGs
 * (see LOGO_JOBS in scripts/prepare-images.mjs), so the light/dark variants and
 * their transparency are preserved exactly.
 */
export default function Logo({ variant = "dark" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Malabar Reserve — home"
      className="flex items-center gap-2.5 lg:gap-3.5 flex-shrink-0 group"
    >
      <Image
        src={`/photos-to-use/logo-mark-${variant}.png`}
        alt=""
        width={236}
        height={236}
        priority
        className="h-11 lg:h-16 w-auto transition-transform duration-500 ease-brand group-hover:scale-105"
      />
      <Image
        src={`/photos-to-use/logo-wordmark-${variant}.png`}
        alt="Malabar Reserve"
        width={1019}
        height={235}
        priority
        className="h-8 lg:h-11 w-auto"
      />
    </Link>
  );
}
