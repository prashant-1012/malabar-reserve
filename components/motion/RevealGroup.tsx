"use client";

import { m, useReducedMotion } from "framer-motion";
import type { ElementType, ReactNode } from "react";
import { DUR, EASE, STAGGER, VIEWPORT } from "@/lib/motion";

interface RevealGroupProps {
  children: ReactNode;
  /** Seconds between siblings. Default 60ms. */
  stagger?: number;
  className?: string;
  as?: ElementType;
}

/**
 * Staggered container. Wrap a grid or list, then wrap each child in
 * <RevealItem>. Children animate 60ms apart.
 *
 * Keep groups to ~8 children. A 12-item stagger at 60ms takes 720ms before the
 * last item lands, by which point the user has scrolled past it.
 */
export function RevealGroup({
  children,
  stagger = STAGGER,
  className,
  as = "div",
}: RevealGroupProps) {
  const reduced = useReducedMotion();
  const MotionTag = m[as as keyof typeof m] as typeof m.div;

  if (reduced) {
    const Tag = as as ElementType;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: 0.05 } },
      }}
    >
      {children}
    </MotionTag>
  );
}

interface RevealItemProps {
  children: ReactNode;
  y?: number;
  className?: string;
  as?: ElementType;
}

/** A single staggered child. Must be inside <RevealGroup>. */
export function RevealItem({
  children,
  y = 24,
  className,
  as = "div",
}: RevealItemProps) {
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
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: DUR.base, ease: EASE },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}

export default RevealGroup;
