# Color & Logo Update — 2026-06-25

## Why

New brand logo files were dropped into `public/photos-to-use/` (originally named
`Logo_MR (1).png`, `Logo_MR Wide (1).png`, `Logo_MR Icon (1).png`). The site's existing
`forest`/`gold` color tokens were noticeably brighter and more saturated than the colors
actually used in the new logo artwork, so the brand looked inconsistent between the logo
and the rest of the UI. This update brings the site's palette in line with the logo and
swaps in the real logo image where it can be used safely.

## Logo color analysis

Colors were sampled directly from the logo PNGs (pixel sampling, not guessed):

| Element | Sampled hex |
|---|---|
| "M"/"R" lettermark, "MALABAR" wordmark | `#172317` (deep, near-black green) |
| "RESERVE" text, R-swash, boat icon | `#9C7830` (muted antique bronze/gold) |
| Pepper berries | `#000000` |
| Background | `#F8EFE0` (already nearly identical to the site's existing `cream`) |

## Decisions made (confirmed with project owner)

1. **Palette shift: full match.** Chose to fully adopt the logo's deep green and muted
   bronze rather than a partial shift or leaving the brighter palette untouched.
2. **Dark-background logo handling: coded text fallback.** The logo PNGs are flattened
   with an opaque cream background and dark ink — there is no transparent or light-on-dark
   version. Since the lettermark's dark green/bronze ink has no usable contrast on a dark
   green surface, dropping the raw image onto `bg-forest` sections was rejected. Those
   spots keep a plain coded wordmark instead (white "MALABAR" + bronze "RESERVE" text, no
   leaf icon).
3. **Footer specifically: coded wordmark, not the image.** Confirmed as a follow-up because
   the footer is also `bg-forest` — same reasoning as #2.
4. **Logo image used in: Navbar (scrolled / non-home pages) and Favicon.** Not used in the
   footer (see #3) or as the OG/social share image (left as-is, `ogImage.jpeg`).

## Token changes

`tailwind.config.ts`:

| Token | Old | New |
|---|---|---|
| `forest` | `#2D4A1E` | `#17241A` |
| `gold` | `#C9A84C` | `#9C7830` |
| `gold-dark` *(new)* | — | `#7D6026` |
| `cream` | `#F5F0E8` | unchanged |
| `brown` | `#3D2B1F` | unchanged |

`gold-dark` was added because the old hover states on gold buttons (`hover:bg-yellow-500`,
`hover:bg-yellow-600`, Tailwind's built-in yellow) would have looked like a jarring,
unrelated bright yellow against the new muted bronze `gold`. All gold-button hover states
across the site (`Navbar.tsx`, `HeroSection.tsx`, `ContactCTA.tsx`, `globals.css`
`.btn-primary`) now use `hover:bg-gold-dark` instead.

One hardcoded color outside the token system also needed adjusting: `ContactCTA.tsx` used
a manual `#1e3314` background specifically chosen to read as "slightly darker than forest."
With the new, much darker `forest` (`#17241A`), the old value would have become *lighter*
than forest and broken that visual hierarchy — it was changed to `#121D15`.

All other hardcoded brand hex values found in decorative SVGs and radial-gradient dot
patterns (`SectionHeading.tsx`, `ExportProcess.tsx`, `about/page.tsx`, `contact/page.tsx`,
`industries/page.tsx`, `products/page.tsx`) were updated from `#2D4A1E`/`#C9A84C` to
`#17241A`/`#9C7830` to match.

## Logo component changes

`components/ui/Logo.tsx` was rewritten:

- **`variant="dark"`** (used on light backgrounds — scrolled navbar, all non-home pages):
  originally rendered the full wide lockup image (`logo-wide.png`). **Revised the next day**
  (2026-06-26) after visual review — see "Navbar follow-up fix" below.
- **`variant="light"`** (used on dark backgrounds — footer, homepage hero navbar
  pre-scroll): renders a plain coded wordmark — white "MALABAR", bronze-gold "RESERVE",
  white/60 tagline. No leaf icon (previously had a custom SVG leaf). Unchanged by the
  follow-up fix below.

No changes were needed in `Navbar.tsx` or `Footer.tsx` call sites — the existing
`variant` prop values already lined up with light-bg-vs-dark-bg usage.

## Navbar follow-up fix — 2026-06-26

After shipping the above, the navbar logo looked wrong in practice: a visible cream-colored
rectangle around the logo (the raw `logo-wide.png` has its own flattened `#F8EFE0`
background baked in, which didn't match the navbar's white background), and the wordmark
text was too small/cramped to read clearly at navbar height since it was baked into the
raster image rather than being live text.

Fix applied:

1. Generated `public/photos-to-use/logo-icon-transparent.png` — a 256×256 chroma-keyed
   version of `logo-icon.png` (the square M+R+pepper-vine icon mark) with its cream
   background removed. The original background was extremely uniform
   (`R≈249 G≈241 B≈226` everywhere, near-zero variance), making it a clean candidate for
   automated background removal — no design software needed. Verified by compositing the
   result over the new `forest` color: clean edges, no halo.
2. `Logo.tsx`'s `variant="dark"` now renders this transparent icon (~36–44px) next to
   **live coded text** ("MALABAR" / "Reserve" / tagline, in `text-forest` / `text-gold`,
   same font/sizing the old SVG-based logo used) instead of the flattened wide image.
   This stays crisp at any size and can never mismatch a background since the icon has no
   background of its own.
3. `logo-wide.png` is no longer used anywhere on the site (kept on disk, unused, in case
   it's wanted for a future full-bleed/marketing placement).

`variant="light"` (footer, homepage hero navbar) was deliberately left untouched — it
still renders text-only with no icon, per the earlier decision in this doc.

## Asset changes

- Renamed uploaded logo files (removed spaces/parentheses, which are unsafe in URLs):
  - `Logo_MR (1).png` → `public/photos-to-use/logo-square.png` (currently unused, kept for
    future use)
  - `Logo_MR Wide (1).png` → `public/photos-to-use/logo-wide.png` (used in navbar)
  - `Logo_MR Icon (1).png` → `public/photos-to-use/logo-icon.png` (source for favicon)
- Generated two resized favicon PNGs from `logo-icon.png` (the original was a 3125×3125,
  ~770KB file — far too large to serve as a favicon): `public/favicon-32.png` and
  `public/favicon-192.png`. `app/layout.tsx` now links both sizes plus
  `apple-touch-icon`. The old `public/favicon.svg` is no longer referenced but was left
  in place rather than deleted.

## Verification

- `npm run build` — compiles and type-checks cleanly, all 14 routes generate as static
  pages.
- Dev server smoke-tested: `/`, `/contact`, `/photos-to-use/logo-wide.png`, and
  `/favicon-32.png` all return HTTP 200.
- No visual/browser screenshot verification was performed (no browser tooling available
  in this session) — a manual look at the navbar, footer, and buttons across pages is
  recommended before shipping.

## Not changed

- OG/social share image (`ogImage.jpeg`) — left as-is.
- `brown` text token and button border-radius convention (`rounded-none` on primary CTAs).
- Hero video.
