"use client";

import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { SPRING } from "@/lib/motion";

interface PressableLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
}

// m.create(), not m() — calling the factory directly is deprecated in
// framer-motion v12+ and logs a warning on every render in dev.
const MotionLink = m.create(Link);

/**
 * A Link with hover lift and press response.
 *
 * The press state is the point: on touch devices every hover effect on this
 * site is dead, so CTAs currently give no feedback at all when tapped. The
 * scale-down on tap restores that.
 */
export default function PressableLink({
  href,
  children,
  className,
  ...rest
}: PressableLinkProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <Link href={href} className={className} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <MotionLink
      href={href}
      className={className}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={SPRING}
      {...rest}
    >
      {children}
    </MotionLink>
  );
}
