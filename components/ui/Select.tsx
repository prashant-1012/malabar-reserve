"use client";

import * as RadixSelect from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { useReducedMotion } from "framer-motion";

export interface SelectOption {
  value: string;
  label: string;
  /** Small right-aligned note, e.g. a grade or origin hint. */
  hint?: string;
}

interface SelectProps {
  id: string;
  name: string;
  value: string;
  onValueChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  required?: boolean;
  "aria-labelledby"?: string;
}

/**
 * Themed select.
 *
 * A native <select> can be styled at rest, but the open option list is drawn by
 * the OS and can't be themed at all — which is what made the contact form's
 * Product Interest field look like a default browser widget on an otherwise
 * finished page.
 *
 * Built on Radix Select rather than hand-rolled: it brings keyboard navigation,
 * typeahead, focus return, scroll locking and correct listbox semantics, none
 * of which are worth reimplementing. Radix is used as a single primitive here,
 * not as an adopted design system.
 */
export default function Select({
  id,
  name,
  value,
  onValueChange,
  options,
  placeholder = "Select an option",
  required,
  ...rest
}: SelectProps) {
  const reduced = useReducedMotion();

  return (
    <RadixSelect.Root value={value || undefined} onValueChange={onValueChange} name={name} required={required}>
      <RadixSelect.Trigger
        id={id}
        className="group w-full flex items-center justify-between gap-3 font-inter text-sm text-brown bg-white border border-cream rounded-lg px-4 py-3 text-left
                   data-[placeholder]:text-brown/70
                   hover:border-gold/50
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-white
                   data-[state=open]:border-gold data-[state=open]:ring-1 data-[state=open]:ring-gold/30
                   transition-colors duration-200 ease-brand"
        {...rest}
      >
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon asChild>
          <ChevronDown
            size={16}
            className="text-gold flex-shrink-0 transition-transform duration-250 ease-brand group-data-[state=open]:rotate-180"
          />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content
          position="popper"
          sideOffset={6}
          className={`z-[60] w-[var(--radix-select-trigger-width)] max-h-[var(--radix-select-content-available-height)]
                      overflow-hidden bg-white border border-gold/30 rounded-lg shadow-lift-3
                      ${reduced ? "" : "data-[state=open]:animate-select-in data-[state=closed]:animate-select-out"}`}
        >
          <RadixSelect.ScrollUpButton className="flex items-center justify-center py-1 text-gold">
            <ChevronUp size={14} />
          </RadixSelect.ScrollUpButton>

          <RadixSelect.Viewport className="p-1.5">
            {options.map((option) => (
              <RadixSelect.Item
                key={option.value}
                value={option.value}
                className="group relative flex items-center justify-between gap-3 font-inter text-sm text-brown
                           rounded-md px-3 py-2.5 pr-9 cursor-pointer select-none outline-none
                           data-[highlighted]:bg-cream data-[highlighted]:text-forest
                           data-[state=checked]:bg-cream/70 data-[state=checked]:font-semibold data-[state=checked]:text-forest
                           transition-colors duration-150"
              >
                {/* Gold rule that grows on hover — same motif as the product cards */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-0 bg-gold rounded-full transition-all duration-250 ease-brand group-data-[highlighted]:w-[3px]"
                />
                <RadixSelect.ItemText>{option.label}</RadixSelect.ItemText>

                {option.hint && (
                  <span className="font-inter text-[10px] uppercase tracking-[0.14em] text-brown/70 group-data-[highlighted]:text-gold-dark transition-colors duration-150">
                    {option.hint}
                  </span>
                )}

                <RadixSelect.ItemIndicator className="absolute right-3 text-gold-dark">
                  <Check size={14} strokeWidth={2.5} />
                </RadixSelect.ItemIndicator>
              </RadixSelect.Item>
            ))}
          </RadixSelect.Viewport>

          <RadixSelect.ScrollDownButton className="flex items-center justify-center py-1 text-gold">
            <ChevronDown size={14} />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
}
