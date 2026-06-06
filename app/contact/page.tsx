// Contact page — /contact
// Two-column layout:
// Left: company info (name, email, website, address placeholder)
// Right: static form — Name, Company Name, Country, Product Interest (dropdown), Quantity Required, Message
// On submit: show success toast via react-hot-toast (no backend)
// TODO: Implement full contact page

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Malabar Reserve for export inquiries, pricing, and custom packaging. We respond within 24 hours.",
  openGraph: {
    title: "Contact Us | Malabar Reserve",
    description:
      "Reach out to Malabar Reserve for your spice export requirements. Email: info@malabarreserve.co",
    url: "https://malabarreserve.co/contact",
  },
};

export default function ContactPage() {
  return (
    <div>
      {/* TODO: Two-column layout with company info and contact form */}
      <p className="p-8 text-center text-brown/60 font-inter">Contact page placeholder</p>
    </div>
  );
}
