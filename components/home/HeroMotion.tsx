"use client";

import { m, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";
import { DUR, EASE } from "@/lib/motion";

/**
 * Hero motion shells. Kept separate from HeroSection so the section itself
 * stays a server component and the h1 renders in the initial HTML.
 *
 * The h1 is deliberately NOT animated — it's the LCP element, and animating it
 * delays Largest Contentful Paint. Everything around it staggers in instead.
 */

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: DUR.base, ease: EASE } },
};

export default function HeroReveal({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();

  if (reduced) return <>{children}</>;

  return (
    <m.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
      }}
    >
      {children}
    </m.div>
  );
}

export function HeroItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <m.div data-reveal className={className} variants={item}>
      {children}
    </m.div>
  );
}

/**
 * Very slow Ken Burns on the background video. A 20s scale drift makes a short
 * looping clip feel intentional rather than repetitive, without reading as
 * motion in its own right.
 */
export function KenBurns({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();

  if (reduced) return <>{children}</>;

  return (
    <m.div
      className="absolute inset-0"
      initial={{ scale: 1 }}
      animate={{ scale: 1.06 }}
      transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
    >
      {children}
    </m.div>
  );
}

/**
 * Replaces `animate-bounce`, which is both the only animation on the site and
 * the most clichéd one on the web. A slow 2.4s travel reads as an invitation
 * rather than a nag.
 */
export function ScrollCue() {
  const reduced = useReducedMotion();

  if (reduced) return null;

  return (
    <m.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: DUR.slow, ease: EASE }}
      aria-hidden="true"
    >
      <span className="font-inter text-[10px] uppercase tracking-[0.2em] text-white/50">
        Scroll
      </span>
      <m.span
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity }}
      >
        <ChevronDown size={16} className="text-white/50" />
      </m.span>
    </m.div>
  );
}
