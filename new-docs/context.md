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
pixel-sampled source colors.

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
  industries/page.tsx
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
    IndustriesPreview.tsx
    ContactCTA.tsx
  products/
    ProductSection.tsx      Reusable alternating 2-col layout (image + text). Props: imagePosition left|right, bgColor white|cream, featureIcons bar at bottom
    PackagingSolutions.tsx
    ProductDetailHero.tsx
  contact/
    ContactForm.tsx         Client component ("use client"). Fields: name, company, country, product (dropdown), quantity, message. Currently uses simulated delay + toast — no real backend submission.
  ui/
    Logo.tsx                variant prop: "dark" (real logo image, light backgrounds) | "light" (coded white/gold text wordmark, dark backgrounds)
    SectionHeading.tsx      eyebrow + title + ornament divider + subtitle. Props: align (center|left), theme (dark|light), ornament (bool)

public/
  photos-to-use/            Local brand images — hero-video2.mp4, about-us.png, black-pepper.png, cinnamon.png, green-cardmom.png, hero-section.png, why-partner-us.png, ogImage.jpeg, logo-wide.png (navbar), logo-icon.png (favicon source), logo-square.png (unused, kept for future use)
  favicon-32.png            32x32 favicon, generated from logo-icon.png
  favicon-192.png           192x192 favicon / apple-touch-icon, generated from logo-icon.png
  favicon.svg                old favicon, unreferenced — kept on disk but unused
```

---

## Pages & Content

### Home (`/`)
Sections (top→bottom):
1. **HeroSection** — video BG, headline, 2 CTAs, 5 feature icons
2. **AboutPreview** — two-column, Kerala houseboat image
3. **ProductsPreview** — 3 product cards
4. **ExportProcess** — 4-step cards
5. **WhyChooseUs** — 5 feature icons + spice flat-lay image + contact CTA bar
6. **IndustriesPreview** — 6 photo cards
7. **ContactCTA** — forest green, "Let's Build a Partnership"

### About (`/about`)
Hero banner → houseboat full-width image → company story (2-col sticky) → 4 values cards → 4-icon feature bar

### Products (`/products`)
Three `ProductSection` components alternating image side (Black Pepper right, Cardamom left, Cinnamon right) + PackagingSolutions (pure CSS, no images) + packaging USP bar

### Individual Product Pages
`/products/black-pepper`, `/products/green-cardamom`, `/products/cinnamon`
Each: Hero → Overview → Available Options → Specs Table → Feature Icons → CTA Card

### Industries (`/industries`)
Stats bar (30+ countries · 6 industries · 500+ partners) → 6 photo cards → closing CTA

### Contact (`/contact`)
Two-column: left = contact info + response card, right = ContactForm component

---

## Products Covered

| Product | Origin | Forms |
|---|---|---|
| Black Pepper | Kerala, South India | Whole · Bold · FAQ Grade · Steam Sterilized |
| Green Cardamom | Idukki & Wayanad, Kerala | Whole pods · Decorticated seeds · Powder |
| Cinnamon | Kerala, South India | Sticks · Bark · Powder |

Certifications: FSSAI & ISO 22000. MOQ: 250 kg minimum.
Export reach: 30+ countries, 500+ partners, 6 industries.

---

## Key Component Patterns

### Navbar behavior
- **Home page + not scrolled** → `bg-forest` (transparent dark green), Logo `variant="light"`, nav text white
- **Scrolled or other pages** → `bg-white/95 backdrop-blur-md`, Logo `variant="dark"`, nav text brown
- Products link opens a dropdown with "All Products" header + 3 individual product links
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
NEXT_PUBLIC_WHATSAPP_NUMBER=919999999999
NEXT_PUBLIC_CONTACT_EMAIL=info@malabarreserve.co
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
- **WhatsApp number** is a placeholder (`919999999999`) — needs to be updated with real number before production use.
- **`green-cardmom.png`** — note the typo in the filename (missing 'a'). Don't rename it without updating all references.
- The `photos-to-use/` folder exists both in the repo root (source) and in `public/photos-to-use/` (served). The `public/` version is what Next.js serves.
