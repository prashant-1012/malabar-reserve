# Website Content Update — 2026-06-26

## Source

`new-docs/Website changes.docx` — a content brief with new copy for the three product
detail pages and the About page. The Industries page was explicitly marked "not touching
them now" in the doc, so it was left untouched.

## Scope decisions (confirmed with project owner)

1. **Product naming — body copy only.** The doc renames the products to "GI-Tagged
   Malabar Pepper" and "GI-Tagged Alleppey Green Cardamom" inside the new About/Overview
   text. This was applied **only** within that body copy and the on-page section heading
   directly above it (e.g. `SectionHeading title="About Our GI-Tagged Malabar Pepper"`).
   Page hero titles ("Black Pepper", "Green Cardamom"), nav dropdown links, breadcrumbs,
   and SEO `metadata` (title/description/keywords) were **not** changed and still use the
   plain product names.
2. **Spec tables — full replacement.** The doc's spec tables are grade-comparison
   matrices (multiple grade columns per product) and don't include several rows the old
   tables had (Origin, Shelf Life, Minimum Order Quantity, Packaging Options,
   Certifications, Available Forms). Those old tables were fully replaced by the new
   grade-comparison matrices — the dropped fields are not shown elsewhere on these pages
   as a result of this change.
3. Turmeric is **not** GI-tagged in the source doc (only Malabar Pepper and Alleppey
   Green Cardamom are) — this distinction was preserved exactly; turmeric copy never
   says "GI-Tagged."
4. Minor typos in the source doc were silently corrected when transcribing: "PMiddle
   East" → "Middle East" (cardamom Ideal For column), "NPolished Fingers" → "Polished
   Fingers" (turmeric Form column).

## What changed, page by page

### `/products/black-pepper`

| | Before | After |
|---|---|---|
| Overview heading | "About Our Black Pepper" | "About Our GI-Tagged Malabar Pepper" |
| Overview body | 3 paragraphs, generic | 2 paragraphs, doc copy (GI-tagged framing) |
| What We Offer | Whole / Bold / FAQ Grade / Steam Sterilized / Custom Packaging | GI-Tagged Malabar Pepper / Premium Export Grades / Steam-Sterilized Pepper / Bulk Supply for Global Markets / Private Label & Custom Packaging |
| Spec table | Single-column: Origin, Moisture, Purity, Shelf Life, MOQ, Packaging, Certifications, Available Forms | 3-column grade matrix: **TGSEB / TGEB / TG** across Quality Level, Berry Size, Piperine Content, Purity, Moisture, Aroma |

### `/products/green-cardamom`

| | Before | After |
|---|---|---|
| Overview heading | "About Our Green Cardamom" | "About Our GI-Tagged Alleppey Green Cardamom" |
| Overview body | 3 paragraphs, generic | 2 paragraphs, doc copy ("Queen of Spices" framing) |
| What We Offer | Alleppey Green Cardamom / size grades (6/7/8mm+) / Premium Export Quality / Bulk & Retail Packing | GI-Tagged Alleppey Green Cardamom / Premium Export Grades / Size-Graded Cardamom Pods / Bulk Supply for Global Markets / Private Label & Custom Packaging |
| Spec table | Single-column: Origin, Moisture, Purity, Shelf Life, MOQ, Packaging, Certifications, Available Forms | 3-column grade matrix: **SUPER BOLD / AGEB / EXTRA BOLD** across Quality Level, Capsule, Volatile Oil, Color, Moisture, Purity, Ideal For |

### `/products/turmeric`

| | Before | After |
|---|---|---|
| Overview heading | "About Our Turmeric" (unchanged — doc has no GI tag for turmeric) | unchanged |
| Overview body | 3 paragraphs mentioning Erode/Andhra Pradesh sourcing | 2 paragraphs, doc copy (Kerala-sourced framing) |
| What We Offer | Whole Fingers / Sliced / High-Curcumin Powder / Steam Sterilized / Customized Packaging | Whole Turmeric Fingers / Premium Turmeric Powder / Export-Grade Turmeric / Bulk Supply for Global Markets / Private Label & Custom Packaging |
| Spec table | Single-column: Origin, Curcumin Content, Moisture, Purity, Shelf Life, MOQ, Packaging, Certifications, Available Forms | 4-column grade matrix: **ALLEPPEY / POLISHED FINGERS / UNPOLISHED FINGERS / TURMERIC POWDER** across Quality Level, Curcumin, Moisture, Form, Color, Purity, Ideal For |

All three pages' spec table JSX was restructured from a fixed 2-column `{label, value}`
list into an N-column `{label, values: [...]}` matrix, with grade names rendered as
table headers (`specGrades` array drives the `<th>` row).

### `/about`

- Hero subtitle changed from a generic descriptive sentence to the doc's literal tagline:
  **"The Heritage of India's Authentic GI-Tagged Spices"** — note this duplicates the
  text already used as the Company Story section's `SectionHeading` title further down
  the page; the doc presents it twice (hero tagline + section heading) so both were kept
  as given.
- Company Story section: all 4 paragraphs replaced with new doc copy, plus a 5th closing
  paragraph added ("At Malabar Reserve, every shipment is a reflection of...") that didn't
  exist before. New copy references the products by their GI-tagged names where the doc
  does (paragraph 4).
- "Our Core Values" section (the 4 value cards below) was **not changed** — the source
  doc lists "Our core values" as a heading marker with no replacement content under it,
  so the existing cards stay as-is.

## Not changed

- Industries page — explicitly excluded by the source doc.
- Product page hero titles, nav links, breadcrumbs, SEO metadata (see scope decision #1).
- The dropped general spec fields (Origin, Shelf Life, MOQ, Packaging Options,
  Certifications, Available Forms) — not reintroduced elsewhere (see scope decision #2).
- About page's Core Values cards and the 4-icon feature bar below them.

## Verification

- `npm run build` — compiles cleanly, all 14 routes generate as static pages.
- Dev server smoke-tested: `/`, `/about`, `/products/black-pepper`,
  `/products/green-cardamom`, `/products/turmeric` all return HTTP 200; confirmed new
  strings ("GI-Tagged Malabar Pepper", "TGSEB", "TGEB", "Ultra Premium") are present in
  the rendered HTML.
- No visual/browser screenshot verification was performed (no browser tooling available
  in this session) — worth a manual look at the new grade-comparison tables on mobile
  widths (they're wrapped in `overflow-x-auto` but more columns means more horizontal
  scroll, especially the 4-column turmeric table).
