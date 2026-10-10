"use client";

import { LazyMotion, domAnimation } from "framer-motion";

/**
 * Loads only the DOM animation feature bundle (~15kb) instead of the full
 * framer-motion runtime (~34kb). `strict` makes `motion.*` throw, which is
 * deliberate — it forces every primitive to use the lighter `m.*` components.
 *
 * Wraps the whole app in layout.tsx. Children passed through still render as
 * server components; only this boundary is client-side.
 */
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
