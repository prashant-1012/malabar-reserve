// Single source of truth for the canonical origin.
//
// Previously `sitemap.ts` used https://malabarreserve.co while layout.tsx's
// metadataBase and every OG image URL used the vercel.app host — so canonical
// signals and social previews pointed at two different origins.

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://malabarreserve.co";

export const SITE_NAME = "Malabar Reserve";

/** Absolute URL for a site-relative path. OG images and canonicals need absolute. */
export const absoluteUrl = (path: string = "/") =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export const OG_IMAGE = absoluteUrl("/photos-to-use/ogimage2.jpg");
