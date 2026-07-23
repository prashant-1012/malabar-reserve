# Image Spec Badges — TEMPORARY — 2026-07-23

## Why

Client is providing replacement photos for the placeholder/stock images currently on the
site. Rather than only sending a written spec list, small on-page badges were added
directly over each image so the client can see the required size/ratio/format right on
the live deployed site.

**This is a temporary, deploy-then-remove change — not a permanent feature.**

## What was added

`components/ui/ImageSpecBadge.tsx` — a new component. Renders a small dark bar with a
gold border reading e.g. `Photo needed: Black Pepper Product Photo · Square · min
1800×1800px · JPG or PNG`, absolutely positioned over the image it documents (`bottom`
by default, `top` where a bottom-anchored caption/content would otherwise collide).

Wired into 9 existing image containers (all already `position: relative` with an
`<Image fill>` inside, so no layout was otherwise changed):

| File | Image(s) covered |
|---|---|
| `components/home/AboutPreview.tsx` | Home About section photo |
| `app/about/page.tsx` | About page banner (same photo as above, different crop) |
| `components/home/WhyChooseUs.tsx` | Why Choose Us photo |
| `components/home/ProductsPreview.tsx` | 3 product cards (label built from `product.name`) |
| `components/products/ProductSection.tsx` | Product detail-row image (label built from `title` prop — covers all 3 products across home + `/products`) |
| `components/home/ExportProcess.tsx` | 4 export-process step photos (label built from `step.title`) |
| `components/home/IndustriesPreview.tsx` | 6 industry cards on home (label built from `name`) |
| `app/industries/page.tsx` | Same 6 industry cards on `/industries` (label built from `name`) |
| `components/products/ProductDetailHero.tsx` | Product page hero banners (label built from `title` prop — covers black pepper / green cardamom / turmeric detail pages) |

## How to remove later

**Quick disable (no code change):** set env var `NEXT_PUBLIC_SHOW_IMAGE_SPECS=false` in
Vercel project settings and redeploy. The component returns `null` when this is set, so
every badge disappears at once without touching the 9 files above.

**Full cleanup (once real photos are in and confirmed):**
1. Delete `components/ui/ImageSpecBadge.tsx`.
2. Remove the `import ImageSpecBadge ...` line and the `<ImageSpecBadge ... />` usage
   from each of the 9 files listed above.
3. Remove the `NEXT_PUBLIC_SHOW_IMAGE_SPECS` env var from Vercel if it was set.

## Not changed

- No image files were replaced — this only adds an informational overlay on top of the
  existing placeholder/stock images.
- No layout/spacing changes — badges are absolutely positioned inside containers that
  were already `relative`.
