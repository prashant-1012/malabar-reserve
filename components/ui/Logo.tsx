import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
}

export default function Logo({ variant = "dark" }: LogoProps) {
  const src =
    variant === "dark"
      ? "/photos-to-use/logo-wide-dark-crop.png"
      : "/photos-to-use/logo-wide-light-crop.png";

  return (
    <Link href="/" className="flex items-center flex-shrink-0">
      <Image
        src={src}
        alt="Malabar Reserve"
        width={589}
        height={182}
        priority
        className="h-10 lg:h-14 w-auto"
      />
    </Link>
  );
}
