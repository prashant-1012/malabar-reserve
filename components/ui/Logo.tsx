import Link from "next/link";

interface LogoProps {
  variant?: "dark" | "light";
}

export default function Logo({ variant = "dark" }: LogoProps) {
  const textColor = variant === "light" ? "#FFFFFF" : "#2D4A1E";
  const taglineColor = variant === "light" ? "rgba(255,255,255,0.6)" : "rgba(45,74,30,0.6)";

  return (
    <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
      {/* Leaf SVG icon */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer leaf shape */}
        <path
          d="M18 3C18 3 7 10.5 7 21C7 27.075 11.925 32 18 32C24.075 32 29 27.075 29 21C29 10.5 18 3 18 3Z"
          fill="#2D4A1E"
        />
        {/* Stem */}
        <line x1="18" y1="3" x2="18" y2="32" stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round" />
        {/* Left vein */}
        <path d="M18 14 C18 14 14 12 11 14.5" stroke="#C9A84C" strokeWidth="0.9" strokeLinecap="round" fill="none" />
        {/* Left vein 2 */}
        <path d="M18 19 C18 19 13 17 10 20" stroke="#C9A84C" strokeWidth="0.9" strokeLinecap="round" fill="none" />
        {/* Right vein */}
        <path d="M18 14 C18 14 22 12 25 14.5" stroke="#C9A84C" strokeWidth="0.9" strokeLinecap="round" fill="none" />
        {/* Right vein 2 */}
        <path d="M18 19 C18 19 23 17 26 20" stroke="#C9A84C" strokeWidth="0.9" strokeLinecap="round" fill="none" />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className="font-playfair font-bold text-xl tracking-wider"
          style={{ color: textColor }}
        >
          MALABAR
        </span>
        <span
          className="font-playfair font-semibold text-sm tracking-[0.25em] uppercase"
          style={{ color: "#C9A84C" }}
        >
          Reserve
        </span>
        <span
          className="font-inter text-[8px] tracking-[0.18em] uppercase mt-0.5"
          style={{ color: taglineColor }}
        >
          Premium Indian Spices
        </span>
      </div>
    </Link>
  );
}
