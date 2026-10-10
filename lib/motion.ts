// Shared motion tokens. One easing curve, one spring, three durations — used
// site-wide so every animation shares the same rhythm. See
// new-docs/2026-10-10-ui-ux-premium-uplift-plan.md §2.

import type { Transition, Variants } from "framer-motion";

/** Expo-out. Entrances. The curve that makes motion read "premium" rather than "default". */
export const EASE = [0.22, 1, 0.36, 1] as const;

/** Expo-in. Exits. */
export const EASE_IN = [0.64, 0, 0.78, 0] as const;

export const SPRING: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 26,
  mass: 0.9,
};

export const DUR = {
  fast: 0.25,
  base: 0.45,
  slow: 0.7,
} as const;

/** Exits run at ~62% of enter duration — matching durations feels sluggish. */
export const DUR_EXIT = {
  fast: 0.16,
  base: 0.28,
  slow: 0.44,
} as const;

/** Stagger between siblings. Capped at 8 children so the last item isn't scrolled past. */
export const STAGGER = 0.06;

/** Shared viewport config — `once` everywhere. Re-animating on scroll-up is the #1 overdone tell. */
export const VIEWPORT = { once: true, amount: 0.25 } as const;

/** Standard fade + rise. The default entrance for almost everything. */
export const riseVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR.base, ease: EASE },
  },
};

export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DUR.base, ease: EASE } },
};

/** Parent container for staggered children. Pair with `riseVariants` on each child. */
export const staggerParent = (stagger: number = STAGGER): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: 0.05 },
  },
});
