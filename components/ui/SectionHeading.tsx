"use client";

import { m, useReducedMotion } from "framer-motion";
import SplitHeading from "@/components/motion/SplitHeading";
import { DUR, EASE, VIEWPORT } from "@/lib/motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  theme?: "dark" | "light";
  ornament?: boolean;
  /** Heading level. Defaults to h2; pass "h1" on page heroes. */
  as?: "h1" | "h2" | "h3";
  /** Set false to render statically — use when the heading is the LCP element. */
  animate?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "dark",
  ornament = false,
  as = "h2",
  animate = true,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isLight = theme === "light";
  const reduced = useReducedMotion();
  const still = !animate || reduced;

  const titleClass = `font-playfair font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight tracking-display-xs md:tracking-display-sm ${
    isLight ? "text-white" : "text-brown"
  }`;

  const Tag = as;

  // Children rise in sequence: eyebrow, then the masked title, then ornament
  // and subtitle. Two animated things per viewport is the budget — the title's
  // clip reveal is the hero, everything else is a quiet fade behind it.
  const item = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: DUR.base, ease: EASE } },
  };

  const content = (
    <>
      {eyebrow && (
        <m.span
          data-reveal
          variants={still ? undefined : item}
          className="font-inter text-xs font-semibold uppercase tracking-[0.2em] text-gold"
        >
          {eyebrow}
        </m.span>
      )}

      {still ? (
        <Tag className={titleClass}>{title}</Tag>
      ) : (
        <SplitHeading text={title} as={Tag} className={titleClass} nested />
      )}

      {ornament && (
        <m.div
          data-reveal
          variants={still ? undefined : item}
          className={`flex items-center gap-2 ${isCenter ? "justify-center" : ""}`}
        >
          <div className="h-px w-8 bg-gold" />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M8 1C8 1 4 4.5 4 8.5C4 10.8 5.8 12.5 8 12.5C10.2 12.5 12 10.8 12 8.5C12 4.5 8 1 8 1Z"
              fill="#9B7733"
            />
            <line x1="8" y1="1" x2="8" y2="15" stroke="#1C2417" strokeWidth="0.8" strokeLinecap="round" />
          </svg>
          <div className="h-px w-8 bg-gold" />
        </m.div>
      )}

      {subtitle && (
        <m.p
          data-reveal
          variants={still ? undefined : item}
          className={`font-inter text-base md:text-lg leading-relaxed max-w-2xl ${
            isLight ? "text-white/75" : "text-brown/65"
          }`}
        >
          {subtitle}
        </m.p>
      )}
    </>
  );

  const wrapperClass = `flex flex-col gap-3 ${
    isCenter ? "items-center text-center" : "items-start text-left"
  }`;

  if (still) {
    return <div className={wrapperClass}>{content}</div>;
  }

  return (
    <m.div
      className={wrapperClass}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
    >
      {content}
    </m.div>
  );
}
