"use client";

import { useEffect, useId, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { DUR, DUR_EXIT, EASE, EASE_IN } from "@/lib/motion";

export interface ProductLink {
  label: string;
  href: string;
  thumb: string;
  tag: string;
}

interface ProductsDropdownProps {
  products: ProductLink[];
  /** Link for the trigger itself and the footer row. */
  allHref: string;
  pathname: string;
  isTransparent: boolean;
  isActive: boolean;
}

/** Grace period before closing on pointer-out, so a diagonal move into the
 *  panel doesn't dismiss it. This is what makes a hover menu feel solid rather
 *  than twitchy. */
const CLOSE_DELAY = 140;

export default function ProductsDropdown({
  products,
  allHref,
  pathname,
  isTransparent,
  isActive,
}: ProductsDropdownProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduced = useReducedMotion();
  const menuId = useId();

  const clearTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openNow = useCallback(() => {
    clearTimer();
    setOpen(true);
  }, []);

  const closeSoon = useCallback(() => {
    clearTimer();
    closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY);
  }, []);

  const closeNow = useCallback((returnFocus = false) => {
    clearTimer();
    setOpen(false);
    if (returnFocus) triggerRef.current?.focus();
  }, []);

  useEffect(() => clearTimer, []);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on outside pointer-down and on Escape. Escape returns focus to the
  // trigger, which the old click-only implementation never did.
  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        closeNow();
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        closeNow(true);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, closeNow]);

  const focusItem = (index: number) => {
    const items = itemRefs.current.filter(Boolean);
    if (!items.length) return;
    const next = (index + items.length) % items.length;
    items[next]?.focus();
  };

  const onTriggerKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openNow();
      // Wait for the panel to mount before moving focus into it.
      requestAnimationFrame(() => focusItem(0));
    }
  };

  const onItemKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      focusItem(index + 1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (index === 0) closeNow(true);
      else focusItem(index - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      focusItem(0);
    } else if (e.key === "End") {
      e.preventDefault();
      focusItem(itemRefs.current.filter(Boolean).length - 1);
    } else if (e.key === "Tab") {
      closeNow();
    }
  };

  const triggerColor = isTransparent
    ? "text-white/90 hover:text-white"
    : isActive
      ? "text-forest"
      : "text-brown/75 hover:text-forest";

  return (
    <div
      ref={rootRef}
      className="relative"
      // Mouse only. On a touch screen pointerenter fires immediately before
      // click, so hover-to-open would open the panel and the click handler
      // would close it again in the same tap. This nav is lg-only, but iPads
      // in landscape and touch laptops are ≥1024px and would hit exactly that.
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") openNow();
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") closeSoon();
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        onClick={() => (open ? closeNow() : openNow())}
        onKeyDown={onTriggerKeyDown}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={open ? menuId : undefined}
        className={`flex items-center gap-1 font-inter text-sm font-medium tracking-[0.12em] transition-colors duration-200 relative group ${triggerColor}`}
      >
        Products
        <ChevronDown
          size={14}
          aria-hidden="true"
          className={`transition-transform duration-250 ease-brand ${open ? "rotate-180" : ""}`}
        />
        <span
          aria-hidden="true"
          className={`absolute -bottom-1.5 left-0 h-0.5 bg-gold transition-all duration-250 ease-brand ${
            isActive || open ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      </button>

      {/* Invisible bridge across the gap between trigger and panel, so moving
          the pointer down doesn't cross dead space and trigger a close. */}
      {open && <div aria-hidden="true" className="absolute left-0 right-0 top-full h-3" />}

      <AnimatePresence>
        {open && (
          <m.div
            id={menuId}
            role="group"
            aria-label="Products"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.97 }}
            animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={
              reduced
                ? { opacity: 0, transition: { duration: DUR_EXIT.fast } }
                : {
                    opacity: 0,
                    y: -6,
                    scale: 0.98,
                    transition: { duration: DUR_EXIT.base, ease: EASE_IN },
                  }
            }
            transition={{ duration: DUR.fast, ease: EASE }}
            style={{ transformOrigin: "top center" }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[320px] bg-white border border-gold/30 shadow-lift-3 overflow-hidden"
          >
            {/* Gold hairline cap */}
            <div aria-hidden="true" className="h-0.5 w-full bg-gold-sheen" />

            <ul className="p-2">
              {products.map((product, i) => {
                const current = pathname === product.href;
                return (
                  <li key={product.href}>
                    <Link
                      href={product.href}
                      ref={(el) => {
                        itemRefs.current[i] = el;
                      }}
                      onKeyDown={(e) => onItemKeyDown(e, i)}
                      onClick={() => closeNow()}
                      aria-current={current ? "page" : undefined}
                      className={`group/item flex items-center gap-3 p-2 rounded-md transition-colors duration-150 ${
                        current ? "bg-cream" : "hover:bg-cream focus-visible:bg-cream"
                      }`}
                    >
                      <span className="relative w-11 h-11 flex-shrink-0 overflow-hidden rounded-md border border-gold/20">
                        <Image
                          src={product.thumb}
                          alt=""
                          fill
                          sizes="44px"
                          className="object-cover transition-transform duration-500 ease-brand group-hover/item:scale-110"
                        />
                      </span>

                      <span className="flex flex-col min-w-0">
                        <span
                          className={`font-inter text-sm tracking-[0.03em] transition-colors duration-150 ${
                            current
                              ? "text-forest font-semibold"
                              : "text-brown group-hover/item:text-forest"
                          }`}
                        >
                          {product.label}
                        </span>
                        <span className="font-inter text-[10px] uppercase tracking-[0.14em] text-brown/70 truncate">
                          {product.tag}
                        </span>
                      </span>

                      <ArrowRight
                        size={14}
                        aria-hidden="true"
                        className="ml-auto flex-shrink-0 text-gold opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-focus-visible/item:opacity-100 transition-all duration-250 ease-brand"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href={allHref}
              ref={(el) => {
                itemRefs.current[products.length] = el;
              }}
              onKeyDown={(e) => onItemKeyDown(e, products.length)}
              onClick={() => closeNow()}
              className="group/all flex items-center justify-between gap-2 px-4 py-3 border-t border-cream bg-cream/40 hover:bg-cream focus-visible:bg-cream transition-colors duration-150"
            >
              <span className="font-inter text-[11px] font-semibold uppercase tracking-[0.18em] text-forest">
                View All Products
              </span>
              <ArrowRight
                size={13}
                aria-hidden="true"
                className="text-gold transition-transform duration-250 ease-brand group-hover/all:translate-x-1"
              />
            </Link>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
