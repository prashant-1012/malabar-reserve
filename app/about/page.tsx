// About page — /about
// Sections in order:
// 1. Hero banner with headline overlay
// 2. Full-width about-us.png houseboat image section
// 3. Company story (text content about Malabar Reserve origins, mission)
// 4. Company values (4 value cards)
// 5. 4-icon feature row (Quality, Heritage, Trust, Global Reach)
// TODO: Implement all sections

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Malabar Reserve — our story, mission, and commitment to delivering the finest spices from Kerala's heartland to global markets.",
  openGraph: {
    title: "About Us | Malabar Reserve",
    description:
      "Our story of bringing Kerala's finest spices to the world with integrity, quality, and passion.",
    url: "https://malabarreserve.co/about",
  },
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero banner */}
      {/* TODO: Full-width banner with forest green overlay and "About Us" heading */}

      {/* Houseboat image */}
      {/* TODO: Full-width about-us.png with optional caption */}

      {/* Company story */}
      {/* TODO: Rich text section about Malabar Reserve history and mission */}

      {/* Company values */}
      {/* TODO: 4 value cards */}

      {/* Feature row */}
      {/* TODO: 4-icon row (Quality, Heritage, Trust, Global Reach) */}

      <p className="p-8 text-center text-brown/60 font-inter">About page placeholder</p>
    </div>
  );
}
