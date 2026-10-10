# Malabar Reserve — Project Context

## What This Is

A premium **B2B spice export website** for a Kerala-based Indian spice company. Target audience: international importers, food manufacturers, wholesale distributors, and private label brands. Not an e-commerce site — all purchasing happens through inquiry/contact.

Live: [malabar-reserve.vercel.app](https://malabar-reserve.vercel.app)

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v3 (custom config) |
| Icons | Lucide React v0.441 |
| Fonts | Playfair Display (serif headings) · Inter (body) — both via `next/font/google` |
| Notifications | react-hot-toast v2 |
| Images | Next.js `<Image>` + local PNGs + Unsplash |
| Deployment | Vercel (zero-config) |

No database, no auth, no CMS. Pure static/server rendering.

---

## Design System

**Brand Colors (Tailwind custom tokens):**
- `forest` → `#17241A` — primary, navbars, footers, CTAs, feature bars
- `gold` → `#9C7830` — accents, icons, borders, eyebrow text, CTA buttons
- `gold-dark` → `#7D6026` — hover state for gold buttons/CTAs
- `cream` → `#F5F0E8` — section backgrounds, hover states, light areas
- `brown` → `#3D2B1F` — body text, headings on light backgrounds

Colors were retuned (2026-06-25) to match the real brand logo — see
[color-and-logo-update.md](color-and-logo-update.md) for the full rationale and exact
pixel-sampled source colors. The logo itself was redesigned again since then (new
circle+leaf+"MR" monogram + "Malabar Reserve" wordmark, tagline "For the Love of Spice") —
see [2026-10-10-logo-chilli-industries-update.md](2026-10-10-logo-chilli-industries-update.md).
The forest/gold tokens still match the current logo's ink colors exactly.

**Typography:**
- Headings: `font-playfair` (CSS var `--font-playfair`) — all `h1`–`h6` globally via `globals.css`
- Body: `font-inter` (CSS var `--font-inter`) — default body

**Global CSS utilities** ([app/globals.css](../app/globals.css)):
- `.btn-primary` — gold bg, brown text
- `.btn-outline` — white border, white text, hover fills white
- `.section-padding` — `py-12 md:py-16 lg:py-24`
- `.container-padding` — `px-4 sm:px-6 lg:px-8`

**Button style convention:** `rounded-none` (sharp corners) on primary CTAs — e.g. "Request a Quote", hero CTAs. `rounded-lg` used on contact form submit. **Do not add border-radius to primary CTA buttons.**

**Max content width:** `max-w-7xl mx-auto` everywhere.

---

## Project Structure

```
app/                        Next.js App Router pages
  layout.tsx                Root layout — fonts, global metadata, Navbar + Footer + WhatsAppButton + Toaster
  page.tsx                  Home
  about/page.tsx
  products/
    page.tsx                All products overview
    black-pepper/page.tsx
    green-cardamom/page.tsx
    cinnamon/page.tsx
    turmeric/page.tsx
    red-chilli/page.tsx
  contact/page.tsx
  sitemap.ts                Auto sitemap.xml
  robots.ts                 Auto robots.txt

components/
  layout/
    Navbar.tsx              Sticky, transparent on home hero, scrolls to white/95. Dropdown for Products. Mobile hamburger drawer.
    Footer.tsx              Dark forest green, 4-column
    WhatsAppButton.tsx      Fixed bottom-right floating button (all pages)
  home/
    HeroSection.tsx         Full-width background VIDEO (not image) + gradient overlay + feature icons + 2 CTAs + scroll indicator
    AboutPreview.tsx
    ProductsPreview.tsx
    ExportProcess.tsx
    WhyChooseUs.tsx
    ContactCTA.tsx
  products/
    ProductSection.tsx      Reusable alternating 2-col layout (image + text). Props: imagePosition left|right, bgColor white|cream, featureIcons bar at bottom
    PackagingSolutions.tsx
    ProductDetailHero.tsx
  contact/
    ContactForm.tsx         Client component ("use client"). Fields: name, company, country, product (dropdown), quantity, message. Currently uses simulated delay + toast — no real backend submission.
  ui/
    Logo.tsx                variant prop: "dark" (full-color icon+wordmark PNG, light backgrounds — Navbar scrolled/non-home pages) | "light" (white+gold recolored PNG, dark backgrounds — homepage hero Navbar, Footer). Both are single flattened `logo-navbar-*.png` images, not live coded text.
    SectionHeading.tsx      eyebrow + title + ornament divider + subtitle. Props: align (center|left), theme (dark|light), ornament (bool)

public/
  new-images/               Raw client-delivered assets (logos, founder photos, Red Chilli photo, and a `Pouch/` folder of packaging mockups for all 5 products/grades) — kept as source, not served directly. See [2026-10-10-logo-chilli-industries-update.md](2026-10-10-logo-chilli-industries-update.md) for what's been processed into photos-to-use/ vs left untouched.
  photos-to-use/            Served brand images — hero-video2.mp4/3.mp4, about-us.png, black-pepper.png, cinnamon.png, green-cardmom.png (+ old typo'd green-cardmom.png), turmeric_roots.webp, red-chilli.png, why-partner-us.png, ogimage2.jpg, founder-vismritha.jpg, founder-saurav.png, logo-navbar-dark.png / logo-navbar-light.png (current Navbar/Footer logo), logo-icon-mark.png (favicon source), logo-primary-full.jpg / logo-submark-wordmark.png (unused, kept for future use), logo-square.png / logo-wide.png (older logo era, unused, kept for future use)
  favicon-32.png            32x32 favicon, generated from logo-icon-mark.png
  favicon-192.png           192x192 favicon / apple-touch-icon, generated from logo-icon-mark.png
  favicon.svg                old favicon, unreferenced — kept on disk but unused
```

---

## Pages & Content

### Home (`/`)
Sections (top→bottom):
1. **HeroSection** — video BG, headline, 2 CTAs, 5 feature icons
2. **AboutPreview** — two-column, Kerala houseboat image
3. **ProductsPreview** — 4 product cards (Black Pepper, Green Cardamom, Turmeric, Red Chilli)
4. **ExportProcess** — 4-step cards
5. **WhyChooseUs** — 5 feature icons + spice flat-lay image + contact CTA bar
6. **ContactCTA** — forest green, "Let's Build a Partnership"

There is no Industries page/section anymore — removed 2026-10-10, see
[2026-10-10-logo-chilli-industries-update.md](2026-10-10-logo-chilli-industries-update.md).

### About (`/about`)
Hero banner (no logo image, just "Our Story" eyebrow + "About Malabar Reserve" title — no
tagline line) → houseboat full-width image → founders' story (2-col sticky, "Two Roots, One
Vision") with the two founders' portraits (Vismritha, Saurav) → 4 values cards → 4-icon
feature bar

### Products (`/products`)
Four `ProductSection` components alternating image side (Black Pepper right, Cardamom left,
Turmeric right, Red Chilli left) + PackagingSolutions (pure CSS, no images) + packaging USP
bar

### Individual Product Pages
`/products/black-pepper`, `/products/green-cardamom`, `/products/turmeric`,
`/products/cinnamon` (exists but not linked from nav/footer — see changelog), `/products/red-chilli`
Each: Hero → Overview → Available Options → Specs Table → Feature Icons → CTA Card

### Contact (`/contact`)
Two-column: left = contact info + response card, right = ContactForm component

---

## Products Covered

| Product | Origin | Forms |
|---|---|---|
| Black Pepper | Kerala, South India | Whole · Bold · FAQ Grade · Steam Sterilized |
| Green Cardamom | Idukki & Wayanad, Kerala | Whole pods · Decorticated seeds · Powder |
| Turmeric | South India | Whole fingers · Polished/unpolished · Powder |
| Red Chilli | India | Kashmiri (mild) · Mid Spicy · Spicy ++ (extra hot) · Whole & Powder |
| Cinnamon | Kerala, South India | Sticks · Bark · Powder — page exists but isn't linked from nav/footer |

Certifications: FSSAI & ISO 22000. MOQ: 250 kg minimum.
The "30+ countries / 500+ partners / 6 industries" stats only ever lived on the removed
Industries page — they aren't displayed anywhere on the site as of 2026-10-10.

---

## Key Component Patterns

### Navbar behavior
- **Home page + not scrolled** → `bg-forest` (transparent dark green), Logo `variant="light"`, nav text white
- **Scrolled or other pages** → `bg-white/95 backdrop-blur-md`, Logo `variant="dark"`, nav text brown
- Products link opens a dropdown with "All Products" header + 4 individual product links (Black Pepper, Green Cardamom, Turmeric, Red Chilli)
- No "Industries" nav item (removed 2026-10-10)
- Mobile: animated max-height drawer, closes on route change

### SectionHeading usage
```tsx
<SectionHeading
  eyebrow="Optional label"      // gold, uppercase, tracked
  title="Main heading"          // Playfair, brown or white
  subtitle="Description text"   // Inter, muted
  align="center" | "left"
  theme="dark" | "light"
  ornament={false}              // adds gold divider with leaf SVG
/>
```

### ProductSection usage
```tsx
<ProductSection
  eyebrow="Black Pepper"
  title="King of Spices"
  description="..."
  bullets={["Whole", "Bold Grade", "FAQ Grade"]}
  imageSrc="/photos-to-use/black-pepper.png"
  imageAlt="Black pepper"
  imagePosition="right"         // or "left" for alternating
  href="/products/black-pepper"
  featureIcons={[{ icon: Leaf, label: "..." }]}
  bgColor="white"               // or "cream"
/>
```
The feature icons render as a full-width `bg-forest` bar below the product section — grid auto-adjusts for 4 icons (2×2 → 4-col) vs 5 icons (2×3 → 5-col).

---

## Environment Variables

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WHATSAPP_NUMBER=918149455501
NEXT_PUBLIC_CONTACT_EMAIL=hello@malabarreserve.co
NEXT_PUBLIC_SITE_DOMAIN=malabarreserve.co
```

---

## Contact Form — Current State

The form in [components/contact/ContactForm.tsx](../components/contact/ContactForm.tsx) **does not submit to a real backend**. It simulates a 1-second delay and shows a success toast. If real form submission is needed, a backend API route (`app/api/contact/route.ts`) or a third-party service (Resend, Formspree, EmailJS) needs to be wired up.

---

## SEO

- Full metadata on every page via Next.js `metadata` export
- OG image: `/photos-to-use/ogImage.jpeg` (1200×630)
- `metadataBase` reads from `NEXT_PUBLIC_SITE_URL` env var
- `sitemap.ts` and `robots.ts` auto-generate at build time
- `title.template` pattern: `%s | Malabar Reserve`

---

## Local Dev

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm start
```

Node 18+ required. No env vars needed for dev (defaults are hardcoded).

---

## Important Notes for Future Work

- **No backend/database** — purely frontend. Contact form needs a real handler if submission is required.
- **Hero uses video** (`/photos-to-use/hero-video2.mp4`), not a static image. Keep this in mind when editing the hero layout.
- **`rounded-none`** on all primary CTA buttons — this is intentional brand style, don't change to rounded.
- **Contact details are real** — phone/WhatsApp `+91 81494 55501`, email `hello@malabarreserve.co`, address `43/1574, Kochapilly Road, Palarivattom, Ernakulam, Kerala, India, 682025` (updated 2026-07-14). Live in [components/layout/WhatsAppButton.tsx](../components/layout/WhatsAppButton.tsx), [components/layout/Footer.tsx](../components/layout/Footer.tsx), and [app/contact/page.tsx](../app/contact/page.tsx).
- **`green-cardmom.png`** — note the typo in the filename (missing 'a'). Don't rename it without updating all references.
- The `photos-to-use/` folder exists both in the repo root (source) and in `public/photos-to-use/` (served). The `public/` version is what Next.js serves.
- **Temporary image-spec badges are currently live on every placeholder image** (added 2026-07-23, asking the client for replacement photos) — see [image-spec-badges-temp.md](image-spec-badges-temp.md) for what was added and how to remove it once real photos are in. As of 2026-10-10, the badge is suppressed per-image via a `photoConfirmed` prop on `ProductSection`/`ProductDetailHero`/`ProductsPreview` wherever a real client photo has replaced a placeholder (currently just Red Chilli) — the other products' photos are still flagged as placeholders.
- **4th product added 2026-10-10: Red Chilli** (`/products/red-chilli`), with three heat grades (Kashmiri, Mid Spicy, Spicy ++) sourced from `public/new-images/Pouch/Red Chilli Powder/`. See [2026-10-10-logo-chilli-industries-update.md](2026-10-10-logo-chilli-industries-update.md).
- **Logo redesigned again 2026-10-10** — new circle+leaf+"MR" monogram, same brand green/gold ink colors as the current tokens. `Logo.tsx` now renders a single composed `logo-navbar-dark.png`/`logo-navbar-light.png` image per variant instead of the earlier two-image or icon+live-text hybrid approaches used in prior revisions.
- **Industries page removed 2026-10-10** — `/industries` route, its homepage preview section, and all nav/footer/contact links to it are gone. The client-provided images meant for it (Food Manufacturer, Hospitality and Culinary, Retail Brands, Worldwide Distribution) and the full `Pouch/` packaging mockup set are sitting unused in `public/new-images/` for a future round.
