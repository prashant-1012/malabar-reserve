"use client";

import { m, useReducedMotion } from "framer-motion";
import type { ElementType, ReactNode } from "react";
import { DUR, EASE, VIEWPORT } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  /** Seconds to wait before this element starts. Keep under ~0.3s. */
  delay?: number;
  /** Rise distance in px. 24 is the house default; use 12 for small items. */
  y?: number;
  duration?: number;
  className?: string;
  /** Rendered element. Use `li`/`section` etc. so semantics survive. */
  as?: ElementType;
}

/**
 * Fade + rise on scroll into view. The default entrance for almost everything.
 *
 * Animates transform and opacity only, so it stays on the compositor and
 * cannot cause layout shift. Fires once — re-animating on scroll-up is the
 * most obvious tell of an overdone site.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = DUR.base,
  className,
  as = "div",
}: RevealProps) {
  const reduced = useReducedMotion();
  const MotionTag = m[as as keyof typeof m] as typeof m.div;

  if (reduced) {
    const Tag = as as ElementType;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      data-reveal
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}
