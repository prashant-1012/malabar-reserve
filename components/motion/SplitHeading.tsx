"use client";

import { m, useReducedMotion } from "framer-motion";
import type { ElementType } from "react";
import { DUR, EASE, VIEWPORT } from "@/lib/motion";

interface SplitHeadingProps {
  /** Plain text. Split on spaces into words, so wrapping still works naturally. */
  text: string;
  className?: string;
  as?: ElementType;
  delay?: number;
  /** Words per reveal group. 1 = per word; higher = chunkier, faster. */
  chunk?: number;
  /**
   * Inherit the stagger chain from a parent variant container instead of
   * triggering on its own viewport entry. Use when this sits inside a
   * <RevealGroup> or another variants-driven parent, so the heading lands in
   * sequence with its siblings rather than racing them.
   */
  nested?: boolean;
}

/**
 * Clip-reveal for display serif headings — each group of words rises out from
 * behind a mask rather than fading in place. This is the motion that reads as
 * "editorial" rather than "a div appeared".
 *
 * The full text stays in the DOM as a single accessible string via aria-label,
 * with the animated spans hidden from assistive tech, so screen readers get
 * one clean heading instead of a word salad.
 *
 * NOT used on the hero h1 — that's the LCP element and animating it delays
 * Largest Contentful Paint.
 */
export default function SplitHeading({
  text,
  className,
  as = "h2",
  delay = 0,
  chunk = 2,
  nested = false,
}: SplitHeadingProps) {
  const reduced = useReducedMotion();
  const Tag = as as ElementType;

  if (reduced) {
    return <Tag className={className}>{text}</Tag>;
  }

  const words = text.split(" ");
  const groups: string[] = [];
  for (let i = 0; i < words.length; i += chunk) {
    groups.push(words.slice(i, i + chunk).join(" "));
  }

  const MotionTag = m[as as keyof typeof m] as typeof m.h2;

  return (
    <MotionTag
      className={className}
      aria-label={text}
      {...(nested
        ? {}
        : { initial: "hidden", whileInView: "visible", viewport: VIEWPORT })}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.07, delayChildren: delay } },
      }}
    >
      {groups.map((group, i) => (
        <span
          key={`${group}-${i}`}
          aria-hidden="true"
          // inline-block + overflow-hidden gives each group its own mask.
          // pb/-mb stops descenders (g, y, p) being clipped by the mask edge.
          className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]"
        >
          <m.span
            data-reveal
            className="inline-block"
            variants={{
              hidden: { y: "105%" },
              visible: {
                y: 0,
                transition: { duration: DUR.slow, ease: EASE },
              },
            }}
          >
            {group}
            {i < groups.length - 1 ? " " : ""}
          </m.span>
        </span>
      ))}
    </MotionTag>
  );
}
