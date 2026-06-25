import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  Globe,
  Phone,
  MapPin,
  Leaf,
  Clock,
  MessageSquare,
  Package,
  Handshake,
} from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Malabar Reserve for export inquiries, pricing, and custom packaging. We respond within 24 hours.",
  keywords: [
    "contact spice exporter India",
    "spice export inquiry",
    "bulk spice quote India",
    "Malabar Reserve contact",
    "Indian spice supplier inquiry",
  ],
  openGraph: {
    type: "website",
    siteName: "Malabar Reserve",
    title: "Contact Us | Malabar Reserve",
    description:
      "Reach out to Malabar Reserve for your spice export requirements. Email: info@malabarreserve.co",
    url: "https://malabarreserve.co/contact",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Malabar Reserve",
    description:
      "Reach out to Malabar Reserve for your spice export requirements. Email: info@malabarreserve.co",
  },
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "info@malabarreserve.co",
    href: "mailto:info@malabarreserve.co",
  },
  {
    icon: Globe,
    label: "Website",
    value: "malabarreserve.co",
    href: "https://malabarreserve.co",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+91 99999 99999",
    href: "https://wa.me/919999999999",
  },
  {
    icon: MapPin,
    label: "Origin",
    value: "Kerala, South India",
    href: null,
  },
];

const reasons = [
  { icon: Package, text: "Bulk spice supply for manufacturing or retail" },
  { icon: Handshake, text: "Private label and custom packaging enquiries" },
  { icon: MessageSquare, text: "Pricing, samples, and export documentation" },
  { icon: Clock, text: "Long-term supply partnership discussions" },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero banner ──────────────────────────────────────── */}
      <section className="bg-forest py-16 md:py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #9C7830 1px, transparent 1px), radial-gradient(circle at 80% 50%, #9C7830 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-4">
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-gold/50" />
            <Leaf size={16} className="text-gold" />
            <div className="h-px w-10 bg-gold/50" />
          </div>
          <span className="font-inter text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Start a Conversation
          </span>
          <h1 className="font-playfair font-bold text-4xl sm:text-5xl text-white leading-tight">
            Get In Touch
          </h1>
          <p className="font-inter text-base text-white/65 max-w-lg leading-relaxed">
            Whether you&apos;re looking for bulk supply, private label solutions, or just want to
            learn more — we&apos;re ready to help.
          </p>
        </div>
      </section>

      {/* ── Two-column layout ────────────────────────────────── */}
      <section className="bg-cream section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 xl:gap-16">

            {/* ── Left: company info (2 cols wide) ── */}
            <div className="lg:col-span-2 flex flex-col gap-8">

              {/* Intro */}
              <div className="flex flex-col gap-3">
                <span className="font-inter text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Malabar Reserve
                </span>
                <h2 className="font-playfair font-bold text-2xl text-brown leading-snug">
                  Let&apos;s Build a Long-Term Spice Partnership
                </h2>
                <p className="font-inter text-sm text-brown/65 leading-relaxed">
                  We work with importers, manufacturers, distributors, and brands across the globe.
                  Fill in the form and our team will get back to you within 24 hours with
                  personalised guidance.
                </p>
              </div>

              {/* Contact details */}
              <div className="flex flex-col gap-3">
                <p className="font-inter text-xs font-semibold uppercase tracking-widest text-brown/40">
                  Contact Information
                </p>
                <ul className="flex flex-col gap-3">
                  {contactDetails.map(({ icon: Icon, label, value, href }) => (
                    <li key={label} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={15} className="text-forest" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-inter text-[10px] uppercase tracking-wider text-brown/40">
                          {label}
                        </span>
                        {href ? (
                          <a
                            href={href}
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="font-inter text-sm text-brown hover:text-forest transition-colors duration-200"
                          >
                            {value}
                          </a>
                        ) : (
                          <span className="font-inter text-sm text-brown">{value}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Reasons to contact */}
              <div className="flex flex-col gap-3">
                <p className="font-inter text-xs font-semibold uppercase tracking-widest text-brown/40">
                  How We Can Help
                </p>
                <ul className="flex flex-col gap-2.5">
                  {reasons.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-start gap-3">
                      <Icon size={14} className="text-gold mt-0.5 flex-shrink-0" />
                      <span className="font-inter text-sm text-brown/65">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Response promise */}
              <div className="flex items-start gap-3 bg-forest/5 border border-forest/10 rounded-xl p-4">
                <Clock size={16} className="text-forest mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-inter font-semibold text-sm text-brown">
                    24-hour response guarantee
                  </p>
                  <p className="font-inter text-xs text-brown/55 mt-0.5">
                    All enquiries acknowledged within one business day. We value your time.
                  </p>
                </div>
              </div>

              {/* Quick links */}
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/products"
                  className="font-inter text-xs font-semibold px-3 py-1.5 rounded-full border border-forest/20 text-forest hover:bg-forest hover:text-white hover:border-forest transition-colors duration-200"
                >
                  View Products
                </Link>
                <Link
                  href="/industries"
                  className="font-inter text-xs font-semibold px-3 py-1.5 rounded-full border border-forest/20 text-forest hover:bg-forest hover:text-white hover:border-forest transition-colors duration-200"
                >
                  Industries
                </Link>
                <Link
                  href="/about"
                  className="font-inter text-xs font-semibold px-3 py-1.5 rounded-full border border-forest/20 text-forest hover:bg-forest hover:text-white hover:border-forest transition-colors duration-200"
                >
                  About Us
                </Link>
              </div>
            </div>

            {/* ── Right: contact form (3 cols wide) ── */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-gold/15 p-6 sm:p-8">
                <div className="flex flex-col gap-1 mb-6">
                  <h3 className="font-playfair font-bold text-xl text-brown">
                    Send an Export Inquiry
                  </h3>
                  <p className="font-inter text-sm text-brown/50">
                    Fields marked <span className="text-gold font-semibold">*</span> are required.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
