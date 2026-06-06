interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  theme?: "dark" | "light";
  ornament?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "dark",
  ornament = false,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isLight = theme === "light";

  return (
    <div className={`flex flex-col gap-3 ${isCenter ? "items-center text-center" : "items-start text-left"}`}>
      {eyebrow && (
        <span className="font-inter text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {eyebrow}
        </span>
      )}

      <h2
        className={`font-playfair font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight ${
          isLight ? "text-white" : "text-brown"
        }`}
      >
        {title}
      </h2>

      {/* Gold ornamental divider — used on About section */}
      {ornament && (
        <div className={`flex items-center gap-2 ${isCenter ? "justify-center" : ""}`}>
          <div className="h-px w-8 bg-gold" />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M8 1C8 1 4 4.5 4 8.5C4 10.8 5.8 12.5 8 12.5C10.2 12.5 12 10.8 12 8.5C12 4.5 8 1 8 1Z"
              fill="#C9A84C"
            />
            <line x1="8" y1="1" x2="8" y2="15" stroke="#2D4A1E" strokeWidth="0.8" strokeLinecap="round" />
          </svg>
          <div className="h-px w-8 bg-gold" />
        </div>
      )}

      {subtitle && (
        <p
          className={`font-inter text-base md:text-lg leading-relaxed max-w-2xl ${
            isLight ? "text-white/75" : "text-brown/65"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
