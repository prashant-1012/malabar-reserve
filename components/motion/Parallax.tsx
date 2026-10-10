"use client";

import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface ParallaxProps {
  children: ReactNode;
  /**
   * Peak offset in px. Positive drifts down, negative up. Keep within ±60 —
   * past that it reads as a broken layout rather than depth.
   */
  distance?: number;
  className?: string;
}

/**
 * Scroll-linked vertical drift. Use on images that sit inside an
 * `overflow-hidden` frame, so the drift reveals image rather than whitespace.
 *
 * Only `y` is animated, so this never triggers layout.
 */
export default function Parallax({
  children,
  distance = 40,
  className,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  if (reduced) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <m.div ref={ref} className={className} style={{ y }}>
      {children}
    </m.div>
  );
}
