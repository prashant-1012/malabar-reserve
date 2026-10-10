# UI/UX Premium Uplift Plan — Malabar Reserve

**Date:** 2026-10-10
**Status:** Workstreams 1–4 implemented 2026-10-11 — see §10 for what shipped. Workstream 5 and 3.3/3.5/3.6 outstanding.
**Scope:** **Home page only** this pass. Visual/motion polish. No backend work.

---

## 1. Diagnosis — why it reads "dull"

The site is not badly built. The tokens are consistent, the type pairing is right, the brown/gold/forest palette is correct for the category, and there are real hover micro-interactions already in `ProductsPreview`, `ExportProcess` and `WhyChooseUs`. So the problem isn't taste — it's **four structural gaps**.

### Gap A — Nothing moves until you hover, and nothing hovers on mobile

There is zero scroll-triggered motion anywhere in the codebase. Every section is fully rendered, fully opaque, at full position, the instant it enters the viewport. The only animation on the entire site is `animate-bounce` on the hero scroll chevron ([HeroSection.tsx:88](../components/home/HeroSection.tsx#L88)) — which is also the single most clichéd motion on the web.

Worse: **all the polish that exists is hover-gated.** The gold rule that grows from `w-8` to `w-16`, the image `scale-108`, the tag that slides up, the card lift — on a phone (likely >60% of traffic for a site shared over WhatsApp/email by importers) none of it ever fires. Mobile users see a completely static document.

This is the single biggest cause of the dull feeling, and it's the cheapest to fix.

### Gap B — The page is 90% flat white/cream with no depth system

Section backgrounds run: dark hero → `cream` → `white` → `cream` → `white`. The only forest-green moments are one banner strip and the (unused, see Gap D) CTA. Shadows are stock Tailwind (`shadow-sm`, `shadow-md`, `shadow-xl`) — neutral grey, so they read as "generic Bootstrap card" rather than "premium". There is no texture anywhere except a single 4%-opacity diagonal pattern in `ContactCTA`.

For a heritage/agricultural brand, a flat white page actively works against the story. Premium food-export sites in this category lean on *warm paper grain, tinted shadows, and layered imagery*.

### Gap C — One card recipe, repeated three times

`ProductsPreview`, `ExportProcess` and the products page all use the same shape: image on top → gold hairline border → shadow lift on hover → title → gold rule → body → link. Three consecutive sections of near-identical rectangles in a 4-up grid. The eye has nothing to catch on, so the page scans as one long undifferentiated block. There's no editorial rhythm — no overlap, no offset frames, no asymmetry, no full-bleed moment.

### Gap D — Trust content is claimed in `<meta>` but never shown

`FSSAI`, `ISO 22000`, `APEDA`, GI-tagged origin — these appear in metadata keywords and in one product page's spec table, and nowhere in the visual design. A B2B importer evaluating a supplier is looking for exactly this, and the home page gives them nothing: no certification marks, no numbers (tonnage, countries served, years), no port/lead-time facts, no named founders despite `founder-saurav.png` and `founder-vismritha.jpg` sitting in `photos-to-use/`.

Part of what you're reading as "dull design" is **content thinness**. Motion can't fix an empty page.

### Also found (real bugs, not opinions)

1. **`ContactCTA` is never rendered.** [app/page.tsx:50-58](../app/page.tsx#L50-L58) renders Hero → About → Products → Process → WhyChooseUs and stops. The home page has no closing CTA — it just ends. `components/home/ContactCTA.tsx` is dead code. The context doc claims it's section 6.
2. **`ImageSpecBadge` dev scaffolding is live.** It renders unless `NEXT_PUBLIC_SHOW_IMAGE_SPECS=false`. Black "PHOTO NEEDED · save file as…" bars are currently sitting over the About image, all four process cards, the Why-Partner image and three of four product cards. On a production URL this is the least premium thing on the site. Default it to off.
3. **`scale-108` isn't a Tailwind class.** [ProductsPreview.tsx:84](../components/home/ProductsPreview.tsx#L84) — Tailwind v3 ships `scale-105` and `scale-110`, not `108`. That hover zoom silently does nothing.
4. **`duration-400` isn't a Tailwind class either.** [ProductsPreview.tsx:92](../components/home/ProductsPreview.tsx#L92) — falls back to the CSS default.
5. **Generic Unsplash stock in `ExportProcess`.** Four `images.unsplash.com` URLs for your own supply chain. Nothing reads less premium than visibly rented photography.
6. **No `focus-visible` styles outside the contact form.** Every nav link, CTA and card link is keyboard-invisible. WCAG 2.4.7 failure.
7. **No `prefers-reduced-motion` handling at all.** Must be in place before we add motion, not after.
8. **Nav `h-24` with `isTransparent` logo swap** flips the logo PNG at scroll 20px with no crossfade — a visible flash.
9. **Domain mismatch in metadata.** `sitemap.ts` uses `https://malabarreserve.co`, while `layout.tsx` `metadataBase` and every OG image URL use `malabar-reserve.vercel.app`. Not a UI issue, but OG previews and canonical signals currently point at two different hosts. Should be one env-driven constant.

---

## 2. The plan

Five workstreams. Each is independently shippable; I'd do them in this order.

---

### Workstream 1 — Foundations (do this first, ~2h)

Nothing visual, but everything else depends on it.

**1.1 — Install the motion layer**

```bash
npm i framer-motion
```

Framer Motion v11+ (the package is also published as `motion` since the rename; `framer-motion` remains the maintained alias and is the safer import path for Next 14). Adds ~34kb gzip, tree-shakeable, and we'll use the `LazyMotion` + `domAnimation` feature bundle to cut that to ~15kb.

**1.2 — Add motion tokens to `tailwind.config.ts`**

The premium feel of motion comes almost entirely from *easing*, not duration. Linear and `ease-in-out` read cheap. We want a single expo-out curve used everywhere:

```ts
transitionTimingFunction: {
  brand:     "cubic-bezier(0.22, 1, 0.36, 1)",   // expo-out — entrances
  "brand-in":"cubic-bezier(0.64, 0, 0.78, 0)",   // expo-in  — exits
},
transitionDuration: {
  250: "250ms",
  400: "400ms",
  600: "600ms",
},
```

Plus a shared JS token file for Framer:

```ts
// lib/motion.ts
export const EASE = [0.22, 1, 0.36, 1] as const;
export const SPRING = { type: "spring", stiffness: 260, damping: 26, mass: 0.9 } as const;
export const DUR = { fast: 0.25, base: 0.45, slow: 0.7 } as const;
```

One curve, one spring, three durations — used site-wide. That consistency *is* the premium signal.

**1.3 — Reduced motion + focus ring in `globals.css`**

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

@layer base {
  :where(a, button, [role="button"], input, select, textarea):focus-visible {
    @apply outline-none ring-2 ring-gold ring-offset-2 ring-offset-white;
  }
  .on-dark :where(a, button):focus-visible {
    @apply ring-offset-forest;
  }
}
```

**1.4 — Fix the bugs listed in §1** — `scale-108` → `scale-105`, `duration-400` → `duration-500`, render `<ContactCTA />` on the home page, delete the retired `app/products/cinnamon/`, unify the domain constant between `sitemap.ts` and `layout.tsx`.

`ImageSpecBadge` stays on per §4 — the client is still reviewing. Add a `// TODO: remove before launch` marker on the env check so it doesn't ship by accident.

---

### Workstream 2 — The motion system (~1 day)

Six reusable client primitives in `components/motion/`. Sections stay server components; only the animated wrapper is `"use client"`. This keeps the RSC payload and SEO intact.

| Primitive | What it does | Where it goes |
|---|---|---|
| `<Reveal>` | fade + 24px rise on scroll-in, `once: true`, `amount: 0.25` | every section heading, paragraph, image |
| `<RevealGroup>` | same, staggered 60ms per child | product grid, process cards, feature lists, footer columns |
| `<SplitHeading>` | per-line clip-path reveal for display serif | hero `h1`, each `SectionHeading` title |
| `<Parallax>` | `useScroll` + `useTransform` on y, ±40px max | About image, Why-Partner image, product hero banners |
| `<CountUp>` | number tween on scroll-in, tabular figures | the new stats band (Workstream 4) |
| `<PressableLink>` | `whileHover: scale 1.02` / `whileTap: scale 0.97` + spring | all CTAs — gives mobile a press response, which it currently has none of |

**Rules we hold to** (these are the difference between "premium" and "AI slop"):

- **Animate `transform` and `opacity` only.** Never width/height/top — those trigger layout and cause CLS.
- **Entrances 450ms, exits ~280ms** (60–70% of enter). Exits that match enter duration feel sluggish.
- **Stagger 60ms, cap at 8 children.** A 12-item stagger at 60ms takes 720ms before the last item lands — users have already scrolled past.
- **`viewport={{ once: true }}` everywhere.** Re-animating on scroll-up is the #1 tell of an overdone site.
- **Max two animated elements per viewport.** The heading reveals, the grid staggers. Not the eyebrow *and* the rule *and* the badge *and* the image.
- **Every primitive reads `useReducedMotion()` and returns the static element** when true. Not a shortened animation — no animation.
- **Hero `h1` does NOT animate in.** It's the LCP element. Animating it delays LCP and hurts Core Web Vitals. The eyebrow, subtitle, CTAs and feature strip stagger in *around* a statically-rendered headline.

**Hero specifically** — replace `animate-bounce` with a slow 2.4s `y: [0, 8, 0]` loop on the chevron, add a very slow `scale: 1.0 → 1.06` over 20s on the background video (Ken Burns) which makes a looping video feel intentional rather than repetitive.

---

### Workstream 3 — Depth, texture and surface (~1 day)

This is what fixes Gap B — and it's the change that will read as the biggest jump in perceived quality.

**3.1 — Tinted shadows.** Replace every `shadow-sm/md/xl` with brand-tinted elevation. Grey shadows on a warm cream page look muddy:

```ts
boxShadow: {
  "lift-1": "0 1px 2px rgba(61,43,31,0.04), 0 2px 8px rgba(61,43,31,0.04)",
  "lift-2": "0 2px 4px rgba(61,43,31,0.05), 0 8px 24px rgba(61,43,31,0.07)",
  "lift-3": "0 4px 8px rgba(61,43,31,0.06), 0 20px 48px rgba(61,43,31,0.10)",
  "glow-gold": "0 8px 32px rgba(155,119,51,0.18)",
}
```

Three steps, used consistently: `lift-1` resting card, `lift-2` hover, `lift-3` only for the hero-adjacent and modal layer.

**3.2 — Paper grain overlay.** A single inline SVG `feTurbulence` noise layer at 3–4% opacity, `pointer-events-none`, applied to the cream sections. ~400 bytes, no image request, and it instantly makes flat `#F6EDE3` read as *paper* rather than *div*. This is the highest-impact-per-line change in the whole document.

**3.3 — Botanical linework.** You already have a hand-drawn pepper/cardamom SVG glyph in `SectionHeading` and `ExportProcess`. Extract it to `components/ui/ornaments/` and use it at large scale, very low opacity (3–6%), bleeding off section edges as a watermark behind the About and Export Process sections. Cheap, on-brand, and adds the layered richness the page is missing.

**3.4 — Gold as a gradient, not a flat fill.** `bg-gold` is `#9B7733` flat. Metallic gold needs a gradient: `linear-gradient(135deg, #B8914A 0%, #9B7733 50%, #7C5F29 100%)`. Apply to primary CTAs and the hairline rules. Add a `::after` sheen sweep on CTA hover — a 2s translateX of a low-opacity white skew. Subtle, and it's the classic luxury-brand button.

**3.5 — Type refinement at display sizes.** Playfair at `text-7xl` with default tracking is loose. Editorial serif needs negative tracking as size increases:

```
text-5xl → tracking-[-0.01em]
text-6xl → tracking-[-0.015em]
text-7xl → tracking-[-0.02em]
```

Also: the hero `h1` uses `font-bold`. Playfair's 500/600 at display size reads more expensive than 700 — bold serif at 72px looks heavy, not luxurious. Worth testing 600.

**3.6 — Editorial image treatment.** Break the "image fills rectangle" monotony:
- About section: offset the image 24px out of the grid with a gold hairline frame behind it at a 12px offset (the classic gallery mat).
- One full-bleed `100vw` image band between Process and WhyChooseUs — breaks the `max-w-7xl` rhythm and gives the eye a breath.
- Product cards: shift from `h-72` fixed to `aspect-[4/5]` portrait. Portrait crops read premium; landscape crops read catalogue.

---

### Workstream 4 — New home sections (~1 day) — REVISED after asset audit

Fixes Gap D. Motion on an empty page is lipstick.

Stats band is **cut** (no real numbers — I'd rather skip than invent). But the `public/new-images/` audit (§5) turned up assets that fill the trust gap *better* than stats would have, with zero client dependency.

**4.1 — "Who We Serve" section — NEW, highest priority.** Three fully-branded, production-quality images are sitting unused: `Food Manufacturer.png`, `Hospitality and Culinary .png`, `Retail Brands photo.png`. These were clearly commissioned for the deleted Industries page. Two of the three show *Malabar Reserve pouches in real commercial context* — a chef plating with a branded Black Pepper pouch, a full retail bay with branded signage and the four-product range on shelf.

This is the strongest premium signal available to us and it costs nothing but assembly time. It answers the exact question an importer has ("who else buys from you / what do they do with it"), and it doubles as product-in-context photography, which the site currently has none of. A 3-up band on `forest` with the images at `aspect-[4/5]`, gold hairline frames, staggered reveal.

Recovers the value of the deleted Industries page without re-adding a route.

**4.2 — "Private Label & Packaging" band — NEW.** The `Pouch/` tree has retail-ready pouch renders for all five products across grades (Supreme / Signature / Kashmiri / Mid Spicy / Spicy++). The `New Mockup*.png` files are clean pouch-on-gradient composites. A horizontal row of 5 pouches on cream, each with a subtle `<Parallax>` offset so they drift at slightly different rates on scroll — that reads expensive, and it's real product, not stock.

Directly supports the private-label claim the copy already makes in `WhyChooseUs` ("private labelling, customized packaging") but never shows.

**4.3 — Certification strip.** FSSAI, ISO 22000, APEDA, Spices Board India, GI-tag. **Logo files not available — flagged as assets needed (§6).** I'll build the component with correctly-sized placeholder slots so dropping in the real marks later is a file swap, not a rebuild. Grayscale at 70%, saturating on hover; marquee on mobile, static row on desktop.

**4.4 — Founders.** `Our Story F1.jpg` (new) + `founder-saurav.png`. Caveat: the new portrait is shot against a **bright yellow wall** that fights forest/gold badly. Needs either a tight crop above the yellow, or a duotone treatment to the brand palette. I'd do duotone on both so the pair reads as one set. One-line provenance quote beneath.

**4.5 — Close the home page properly.** Render `<ContactCTA />` — currently dead code. Upgrade with the grain overlay so the final section isn't a flat green rectangle.

**Cut from this pass:** export-reach world map (4.4 prev) and origin-provenance map (4.5 prev). Both are good ideas but they're custom SVG illustration work, and the page is already gaining three new sections. Revisit after this ships.

**Revised home page order:**

```
Hero  →  About  →  Products  →  Who We Serve ★  →  Export Process
      →  Packaging / Private Label ★  →  Why Choose Us
      →  Certifications ★  →  ContactCTA ✓(now rendered)
```

Three new sections, one resurrected. That alone fixes Gap C — the Products → Process → WhyChooseUs card monotony now has two differently-shaped sections breaking it up.

---

### Workstream 5 — Interaction polish (~half day)

- **Navbar:** crossfade the two logo PNGs with Framer `AnimatePresence` instead of swapping. Add a scroll-progress hairline in gold at the bottom edge of the header (`useScroll` → `scaleX`) — 6 lines, and it makes the whole site feel responsive to the user.
- **Products dropdown:** currently mounts/unmounts with no transition. Give it a 180ms `opacity` + `y: -8` + `scale: 0.97` origin-top entrance via `AnimatePresence`. Add keyboard support — it's `onClick`-only today, so Escape doesn't close it and arrow keys don't navigate.
- **Mobile drawer:** the `max-h-[500px]` trick animates `max-height`, which is a layout-animating property and will jank on low-end Android. Swap to a Framer height-auto animation or a transform-based slide.
- **Page transitions:** a 300ms fade+rise on route change via `template.tsx`. Low effort, and it's the thing that most makes a multi-page site feel like an app rather than a stack of documents.
- **Contact form:** add inline-validation on blur, `aria-live` error announcements, and a success state that isn't just a toast. Note it still has **no backend** — toast fires on a simulated delay. Flagging as out of scope here but it's a live gap.
- **WhatsApp button:** add a one-time 600ms spring entrance after 2s delay so it announces itself, then rests.

---

## 3. Build order

1. **Workstream 1** — foundations + bug fixes (~2h)
2. **Asset pipeline** (§5.4) — convert and place the new images (~1h)
3. **Workstream 3.1/3.2/3.4** — tinted shadows, paper grain, gradient gold (~3h). Fastest perceived-quality jump per line of code.
4. **Workstream 2** — motion primitives, wired into existing sections (~1 day)
5. **Workstream 4** — the three new sections (~1 day)
6. **Workstream 5** — interaction polish (~half day)
7. **Workstream 3.3/3.5/3.6** — ornaments, display tracking, editorial crops (~half day)

---

## 4. Decisions (locked 2026-10-10)

| Question | Decision | Consequence |
|---|---|---|
| Stats band numbers | **Skip** | 4.1 stats band cut entirely. Replaced by "Who We Serve" (§4.1), which is stronger anyway. |
| Certification logos | **Flag as assets needed** | Build the strip with placeholder slots; see §6. |
| Unsplash process images | **Keep placeholders** | But 3 of 4 can be replaced *today* from `new-images/` — see §5.1. Only step 02 stays on stock. |
| `ImageSpecBadge` | **Keep visible** — client still reviewing | Stays on by default. I'll leave the env flag as-is rather than switching to a query param, since you want it visible on the shared URL. Revisit before launch. |
| `/products/cinnamon` | **Retired** | Delete `app/products/cinnamon/page.tsx`. Already absent from nav and sitemap, so no other cleanup needed. |
| Scope | **Home page only** | `/about`, `/contact` and product detail pages untouched. The motion primitives and token work are global, so rolling outward later is cheap. |
| Dark mode | **Skip** | Confirmed. No `dark:` variants. |
| Copy | **I write it** | New section headings, "Who We Serve" descriptions, founder line. Short, factual, no invented claims or numbers. Marked for your review in the PR. |

---

## 5. Asset audit — `public/new-images/`

I went through the folder. There's considerably more usable material here than the context doc suggests, and several pieces are better than what's currently live.

### 7.1 — Direct replacements for `ExportProcess` Unsplash stock

| Step | Current | Replace with | Verdict |
|---|---|---|---|
| 01 Origin Selection | Unsplash pepper harvest | `Origin Selection Image .png` | **Use immediately.** Pepper vines, bamboo baskets, misty Western Ghats at golden hour. Far better than the stock it replaces and genuinely on-brand. |
| 02 Quality Assurance | Unsplash | — none supplied | Keep stock + `ImageSpecBadge`. The one remaining gap. |
| 03 Export-Ready Processing | Unsplash | `Food Manufacturer.png` | **Use immediately.** Processing floor, staff in **forest-green branded uniforms**, hygiene PPE, the four products in jute sacks. Commissioned for this brand — the palette matches the site exactly. |
| 04 Worldwide Distribution | Unsplash | `Worldwide Distribution Image.png` | **Use immediately.** Container port at sunset with branded cartons and jute sacks on the quay. |

That removes 3 of 4 stock images and 3 of 4 spec badges from the home page in one commit. Given "keep placeholders for now", I read your answer as *don't block on it* — but these three are drop-in upgrades at no cost, so I'd take them now and leave only step 02 on placeholder.

### 7.2 — The Industries images (the big find)

`Food Manufacturer.png` · `Hospitality and Culinary .png` · `Retail Brands photo.png`

Commissioned for the Industries page that was deleted. All three are production quality and on-palette. Two carry real brand presence:

- **Hospitality & Culinary** — chef plating a seared fish, dusting it from a branded *Malabar Reserve Black Pepper Powder* pouch. Copper pendants, marble, dark kitchen. This is the single most premium image in the entire asset library.
- **Retail Brands** — a full supermarket bay with Malabar Reserve signage, "For The Love Of Spice" tagline, bulk bins labelled Black Pepper / Green Cardamom / Turmeric / Red Chilli, and the pouch range on shelf.

These become §4.1 "Who We Serve". `Food Manufacturer.png` does double duty as the Process step-03 image — acceptable since the two sections are far apart and the crops will differ (landscape vs 4:5 portrait).

### 7.3 — Packaging mockups

`Pouch/` has all five products across grades, each with `.ai` source, flat front/back artwork, and `New Mockup*.png` composites (pouch on warm gradient, 5000×4000). Retail-ready.

Feeds §4.2, and later the `PackagingSolutions` component on `/products` (out of scope this pass, but noted — it's currently the weakest section on that page).

> ⚠️ **Print typo for the client:** the Black Pepper Supreme pouch reads **"HAND HARVESTED FROM KERALAM"** — should be **"KERALA"**. Worth checking the other grades' artwork and flagging before anything goes to print. Not a web issue, but we'd be the ones who noticed.

### 7.4 — Asset pipeline (required before any of this ships)

These files are **not web-servable as-is**:

- Top-level PNGs: 2.0–2.7 MB each
- Pouch mockups: **10–21 MB** at 5000×4000
- Folder and file names contain spaces, trailing spaces (`Origin Selection Image .png`, `Hospitality and Culinary .png`) and `+` characters (`Spicy ++/`) — all of which cause URL-encoding grief in Next `<Image src>`

Process for each: resize to the actual rendered size × 2, convert to WebP (q≈82), rename to kebab-case, write to `photos-to-use/`. Expected ~2.4 MB → ~140 KB per hero-scale image.

Target names:

```
photos-to-use/process-origin-selection.webp      ← Origin Selection Image .png
photos-to-use/process-processing.webp            ← Food Manufacturer.png
photos-to-use/process-distribution.webp          ← Worldwide Distribution Image.png
photos-to-use/serve-food-manufacturers.webp      ← Food Manufacturer.png (4:5 crop)
photos-to-use/serve-hospitality.webp             ← Hospitality and Culinary .png
photos-to-use/serve-retail.webp                  ← Retail Brands photo.png
photos-to-use/pouch-black-pepper.webp            ← Pouch/Black Pepper/Supreme/New Mockup.png
photos-to-use/pouch-green-cardamom.webp          ← Pouch/Cardamom/Supreme/New Mockup.png
photos-to-use/pouch-turmeric.webp                ← Pouch/Turmeric Powder/New Mockup.png
photos-to-use/pouch-red-chilli.webp              ← Pouch/Red Chilli Powder/Kashmiri/New Mockup .png
photos-to-use/founder-vismritha-v2.webp          ← Our Story F1.jpg
```

`new-images/` stays as the untouched source of truth, consistent with how the folder is already treated.

**One thing I need from you:** no image tooling (sharp / ImageMagick / Python) is currently available in this environment, and `sharp` isn't a project dependency. Easiest path is `npm i -D sharp` and I'll write a one-off `scripts/prepare-images.mjs` that does the whole conversion in one run and can be re-used next time the client sends assets. Say the word and I'll include it in Workstream 1.

### 7.5 — Logos

`Primary Logo.jpg`, `Secondary Logo.png`, `Sub-Mark Logo.png`, `Favicon Logo.jpg` — already processed into `photos-to-use/` and the favicons per the [logo update doc](2026-10-10-logo-chilli-industries-update.md). No action.

---

## 6. Assets still needed from the client

1. **Certification marks** — FSSAI, ISO 22000, APEDA, Spices Board India. SVG preferred, transparent PNG acceptable, min 400px wide. *Blocking §4.3.*
2. **Quality-assurance / lab photo** — the one remaining Unsplash image in `ExportProcess` step 02. Grading, sorting, or lab testing, matching the look of the three images they already supplied.
3. **Founder names + one-line bios** — for §4.4. We have both faces, no words.
4. *(Nice to have)* **Buyer logos or a testimonial quote** — would let us add a social-proof row later.

---

## 7. On the 21st.dev MCP

I can't connect it from this session — MCP servers need authorising in an interactive session. To add it:

```bash
claude mcp add magic -- npx -y @21st-dev/magic@latest
```

(needs a 21st.dev API key; set `API_KEY` in the server env). Then restart Claude Code.

Worth having, though I'd use it selectively. 21st.dev components are Tailwind + Framer Motion and will drop in cleanly, but they ship with their own shadcn-ish token assumptions (`bg-background`, `text-muted-foreground`) and a generic SaaS aesthetic. Anything I pull from it I'd re-token to `forest/gold/cream/brown` and strip the rounded corners, or it will fight the brand.

Where it's genuinely useful:
- the **certification marquee** (logo-cloud components are a solved problem)
- the **stats band** with count-up
- the **globe / export-reach** visual
- an **animated testimonial** carousel if the client ever supplies buyer quotes

Where I'd hand-build instead: everything in Workstream 3. The depth, grain, gold gradient and botanical ornaments are what make this *Malabar Reserve* rather than *a nice template*, and that's exactly what a component library can't give you.

**On shadcn/ui:** I'd skip it. This is a 7-page marketing site with one form and one dropdown. shadcn earns its keep on dialogs, data tables, command palettes and complex forms — none of which exist here. Adding it means a Radix dependency tree, a `cn()` util, a CSS-variable theme layer parallel to your existing Tailwind tokens, and a second source of truth for colour. The two things it *would* genuinely improve are the products dropdown (keyboard a11y) and the contact form (validation + `aria-live`) — and both are ~40 lines of Radix primitives installed individually if we want them, without adopting the whole system.

---

## 10. Implementation log — 2026-10-11

Home page only, per §4. `next build`, `tsc --noEmit` and `next lint` all clean;
every route smoke-tested at 200 (and `/products/cinnamon` correctly 404s).

### Shipped

**Foundations (W1)**
- `framer-motion@14.1.0` + `sharp@0.35.5` (dev). React 18 peer-compatible.
- `lib/motion.ts` — one easing curve, one spring, three durations, shared
  viewport config and variants. Every animation on the site references these.
- `tailwind.config.ts` — `shadow-lift-1/2/3` + `shadow-glow-gold` (brand-tinted),
  `ease-brand`/`ease-brand-in`, `duration-250/400/600`, `bg-gold-sheen`,
  `tracking-display*`.
- `app/globals.css` — global `prefers-reduced-motion` block, `:focus-visible`
  rings (with an `.on-dark` variant for forest sections), `.bg-grain`,
  `.nums-tabular`, `.btn-gold` with a sheen sweep.

**Bugs from §1, all fixed**
- `scale-108` → `scale-105` and `duration-400` now a real token — two hover
  effects that silently did nothing now work.
- `<ContactCTA />` rendered — it was dead code; the home page had no closing CTA.
- `/products/cinnamon` deleted.
- `lib/site.ts` is now the single origin constant; `sitemap.ts`, `robots.ts`,
  `layout.tsx` and `page.tsx` all read from it. The two-host split is gone.
- `ImageSpecBadge` left visible per §4, with a `TODO: REMOVE BEFORE LAUNCH`
  marker on the env check.

**Asset pipeline (W1/§5.4)**
- `scripts/prepare-images.mjs` — re-runnable; `node scripts/prepare-images.mjs`,
  `--force` to redo. **84.6 MB → 1.29 MB across 12 files.**
- `sharp.trim()` could not isolate the pouches: the mockup canvas is a smooth
  gradient, not a flat colour, so trim kept the whole frame. Resolved by
  detecting the pouch box via edge density — it came back identical on all five
  mockups (`0.285,0.156 → 0.705,0.897`), so it's a fixed fractional crop
  (`POUCH_CROP`) rather than per-file tuning.
- Source scene images turned out to be 1448×1086, not the 2400px I'd assumed,
  so the "Who We Serve" 4:5 crops are 869×1086 — the largest true 4:5 the
  source allows, no upscaling.

**Motion system (W2)** — `components/motion/`
`MotionProvider` (LazyMotion + `domAnimation`, `strict`, ~15kb not ~34kb),
`Reveal`, `RevealGroup`/`RevealItem`, `Parallax`, `PressableLink`,
`SplitHeading`, plus `HeroMotion` for the hero shells.
Every one checks `useReducedMotion()` and returns the static element.

**New sections (W4)**
- `WhoWeServe` — the three recovered Industries images.
- `PackagingBand` — five pouch renders, alternating parallax drift.
- `Certifications` — placeholder slots, swap-in instructions in the file header.
- Final order: Hero → About → Products → **Who We Serve** → Process →
  **Packaging** → Why Choose Us → **Certifications** → ContactCTA.

**Depth + wiring (W3.1/3.2/3.4, W2 applied)**
Grain on About/Products/Process/Packaging/WhoWeServe/ContactCTA; tinted shadows
throughout; `btn-gold` on 6 CTAs; product cards to `aspect-[4/5]`; gallery-mat
frame + parallax on the About and Why-Partner images; hero staggered entrance
with a static h1; `animate-bounce` replaced with a 2.4s scroll cue.

### Decisions made during the build

1. **Three Unsplash images replaced.** §4 said keep placeholders; I read that as
   *don't block on it*. They were drop-in upgrades at zero cost. Step 02
   (quality assurance) still has no asset and keeps its stock image + badge.
   Say the word and I'll revert.
2. **The hero `h1` does not animate.** It's the LCP element — confirmed present
   in the server-rendered HTML.
3. **No-JS fallback added.** Reveal elements ship their hidden transform inline,
   so without JS every heading and card would have been invisible. All motion
   wrappers carry `data-reveal` and a `<noscript>` block in `layout.tsx` resets
   them. Crawlers always had the text; this is for humans with JS blocked.
4. **Copy written for the three new sections** (headings, descriptions, feature
   bullets). Deliberately no numbers, no certifications claimed beyond what the
   site already claimed, no invented clients. **Needs your review.**

### Cost

| | Before | After |
|---|---|---|
| Home, First Load JS | 107 kB | 130 kB |
| Other pages, First Load JS | 101 kB | 119 kB |
| New images on the wire | — | ~1.29 MB total, lazy below the fold |

The +18 kB on `/about` and the product pages is framer-motion arriving via the
shared `SectionHeading`. Those pages were out of scope but get the motion system
for free — when we roll Workstream 5 outward, the cost is already paid.

### Not done

- **Workstream 5** (navbar logo crossfade + scroll progress, dropdown
  `AnimatePresence` + keyboard support, mobile drawer off `max-height`, route
  transitions, contact form validation, WhatsApp button entrance).
- **W3.3** botanical ornaments, **W3.5** full display-tracking sweep (tokens
  exist and are applied to new headings only), **W3.6** full-bleed image band.
- **Founders section (§4.4)** — blocked on names and bios.
- **No browser verification.** There's no headless browser in this environment,
  so this was verified by build, typecheck, lint, route smoke tests, and
  inspection of the served HTML and CSS bundle — not by looking at it. Worth a
  pass on `npm run dev` at 375px and desktop, and with reduced-motion on, before
  this goes to the client.

### Two more content issues for the client

Alongside the "HAND HARVESTED FROM KERALAM" typo (§5.3), the Turmeric Powder
pouch reads **"Salem … HIGHEST GRADE SOURCED FROM GUNTUR"**. Salem is the
turmeric region; Guntur is chilli country. Looks like copy carried over from the
chilli artwork. Both are print-side, not web.

### ⚠️ Open risk: `public/new-images/` is 679 MB, untracked and not ignored

It sits inside `public/`, so Next serves it: every `.ai`, `.psd` and 20 MB
source JPG in there is publicly fetchable once deployed, and it would be
uploaded on every Vercel build. Committing it also writes 679 MB into git
history permanently.

Three options, your call — I haven't touched it:
1. **Move it out of `public/`** to `design-assets/` at the repo root and
   gitignore it. Keeps it local, stops it being served or deployed. Needs the
   `src` paths in `scripts/prepare-images.mjs` updated — one constant.
2. **Gitignore in place.** Stops the commit, but Vercel still deploys and serves
   it.
3. **Git LFS**, if the client's sources should be versioned.

I'd take option 1.

---

## 11. Follow-ups — 2026-10-11 (navbar, logo, dropdown)

### `public/new-images/` gitignored
Added to `.gitignore` with a comment explaining why. Nothing broke: it was never
tracked, and the only consumer is `scripts/prepare-images.mjs`, which now exits
with a helpful message if the folder is absent (fresh clone / CI). Because
Vercel deploys from git, this also stops 679 MB of `.ai`/`.psd` sources being
publicly served.

### Logo rebalanced
The mark read as an afterthought because the lockup was a single flattened PNG
with the proportion baked in — not fixable in CSS.

Split into separate mark and wordmark assets for both variants by scanning
alpha-column density on `logo-navbar-*.png` to find the gutter (content 0-238,
gap 238-289, wordmark 289-1308). The mark extracts at exactly 236x236, which
confirms a clean cut. `Logo.tsx` now sizes them independently — mark
`h-11 lg:h-16`, wordmark `h-8 lg:h-11`, so the mark is ~14% larger and the
wordmark ~21% smaller than before. Reproducible via `LOGO_JOBS` in
`scripts/prepare-images.mjs`, which runs without the gitignored sources.

### Gold CTA — this was a WCAG failure, not just a dull look

| | Ratio | |
|---|---|---|
| `bg-gold` + `text-brown` (was) | **3.25:1** | fails AA |
| `bg-gold-dark` + `text-brown` (hover) | **2.25:1** | got worse on hover |
| new gradient darkest stop + `ink` | 4.64:1 | passes |
| new gradient lightest stop + `ink` | 7.73:1 | passes |

Brand gold `#9B7733` is now the **darkest** stop of `bg-gold-sheen` rather than
the whole fill, so the brand colour is preserved while the button gains real
highlight. New `ink` token (`#0D1006`) for labels on gold. Added the sheen
sweep, `shadow-glow-gold` on hover, and press feedback via `PressableLink`.
Also removed a dead ternary in the navbar CTA whose two branches were identical.

**Judgment call to confirm:** the gradient is visibly brighter than the old flat
gold. If the client insists on exact flat `#9B7733`, the alternative is a
3.25:1 CTA. Needs a decision.

### Product Interest dropdown

A native `<select>` can be styled at rest but its open option list is drawn by
the OS and cannot be themed — that was the "basic default UI".

Rebuilt as `components/ui/Select.tsx` on **`@radix-ui/react-select`**, used as a
single primitive, not an adopted design system (consistent with §9: skip shadcn,
take individual Radix primitives where they earn their place). Radix brings
keyboard navigation, typeahead, focus return, scroll locking, correct listbox
semantics and a hidden native select that preserves `name`/`required` for form
posts — none of it worth reimplementing.

Theming: cream highlight, forest text, gold-dark check indicator, gold rule that
grows on the highlighted row (same motif as the product cards), chevron that
rotates on open, 180ms enter / 110ms exit panel animation, panel width locked to
the trigger. Respects `prefers-reduced-motion`.

**Bug found while doing it:** the form's product list was
`[Black Pepper, Green Cardamom, Turmeric, All Products]` — **Red Chilli was
missing**, so prospects could not express interest in a product the site
actively sells. Now in sync with the navbar and `app/products/*`, with origin
hints per option.

**More contrast fixes:** dropdown option text measures 13-14:1, but the
placeholder and option hints were at `brown/35`/`brown/40` (2.11:1 and 2.37:1).
Both moved to `brown/70` (~5:1), and the shared input placeholder across the
whole contact form with them, so the Country input and Product select match.

`noValidate` on the form means Radix's hidden `required` select cannot trigger
the "invalid form control is not focusable" submit block.

### Still not verified in a browser
No headless browser available here. Everything above was verified by build,
typecheck, lint, route smoke tests, inspection of the served HTML and the
compiled CSS (keyframes, `data-[state]` and `data-[highlighted]` variants all
present), and computed contrast ratios. The open dropdown has not been looked
at. Worth a pass before this goes to the client.

---

## 12. Navbar Products dropdown — 2026-10-11

Rebuilt as `components/layout/ProductsDropdown.tsx` (framer-motion, not Radix —
this one needs hover intent and renders plain navigation links, which Radix's
menu primitives model as `role="menu"` items).

### The lag was real, and mostly wasn't the dropdown

| Cause | Fix |
|---|---|
| `setScrolled()` ran on **every scroll event**, so React did a bailout diff each frame while framer's parallax was also reading scroll | Coalesced into one `requestAnimationFrame`, and only sets state when the 20px threshold is actually crossed |
| `transition-all duration-500` on the sticky header animated **every** property — including `backdrop-filter`, i.e. repainting a blurred full-width bar for half a second on each threshold crossing | Scoped to `transition-[background-color,box-shadow,border-color]`, 300ms |
| Product images are 1.2–2.4 MB PNGs | 160px square WebP thumbs via the pipeline — **~6 KB each, 26 KB total** |
| Mobile drawer animated `max-h-[500px]`, a layout property, every frame | Framer height-auto. The hard-coded 500px ceiling (which would have clipped the menu as items were added) is gone |

### Dropdown itself

- **Hover intent** with a 140ms close grace period plus an invisible bridge
  across the trigger→panel gap, so a diagonal move into the panel doesn't
  dismiss it. This is the difference between a menu that feels solid and one
  that feels twitchy.
- **Keyboard**: ArrowDown/Enter/Space opens and focuses the first item, Arrow
  Up/Down moves, Home/End jump, Tab closes, Escape closes **and returns focus to
  the trigger** — none of which the old click-only version did.
- **Motion**: `AnimatePresence`, 250ms in / 280ms out, origin top-center,
  opacity + y + scale only. Reduced-motion gets a plain fade.
- **Design**: 320px panel, gold gradient cap, 44px product thumbnail per row
  with a tag line, arrow that slides in on hover, highlighted row in cream, and
  a "View All Products" footer row. The active product is marked
  `aria-current="page"`.

### Touch bug caught while building it

`pointerenter` fires immediately before `click` on touch screens, so
hover-to-open would have opened the panel and the click handler would have
closed it in the same tap. The desktop nav is `lg`-only, but iPads in landscape
and touch laptops are ≥1024px and would have hit exactly that. Both pointer
handlers are now gated on `pointerType === "mouse"`.

### Also fixed

`PressableLink` called `m(Link)`, deprecated in framer-motion v12+, which logged
`motion() is deprecated` on every render in dev. Now `m.create(Link)`.

Still not verified in a browser — build, typecheck, lint, route checks and
served-markup inspection only.
