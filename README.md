<div align="center">

```
 ███╗   ███╗ █████╗ ██╗      █████╗ ██████╗  █████╗ ██████╗
 ████╗ ████║██╔══██╗██║     ██╔══██╗██╔══██╗██╔══██╗██╔══██╗
 ██╔████╔██║███████║██║     ███████║██████╔╝███████║██████╔╝
 ██║╚██╔╝██║██╔══██║██║     ██╔══██║██╔══██╗██╔══██║██╔══██╗
 ██║ ╚═╝ ██║██║  ██║███████╗██║  ██║██████╔╝██║  ██║██║  ██║
 ╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝

             R  E  S  E  R  V  E
         ── Premium Indian Spices ──
```

**A premium B2B spice export website for a Kerala-based Indian spice company.**  
Built with Next.js 14, Tailwind CSS, and a deep respect for the Malabar spice heritage.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-malabar--reserve.vercel.app-2D4A1E?style=for-the-badge)](https://malabar-reserve.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

</div>

---

## 🌿 Overview

**Malabar Reserve** is a multi-page B2B website for a premium Indian spice export company based in Kerala, India. The site is designed for international importers, food manufacturers, wholesale distributors, and private label brands looking to source high-quality Black Pepper, Green Cardamom, and Cinnamon directly from the source.

The design philosophy draws from Kerala's rich spice heritage — warm, earthy tones, elegant serif typography, and photography-forward layouts that convey trust, quality, and authenticity.

---

## ✨ Features

- 🖥️ **8 fully built pages** — Home, About, Products, 3 individual product pages, Industries, Contact
- 🎨 **Premium design system** — Forest Green, Gold, Cream, and Dark Brown brand palette
- 📱 **Fully responsive** — Mobile-first, tested across all breakpoints
- ⚡ **Next.js 14 App Router** — Server components, file-based routing, streaming
- 🔍 **Full SEO** — Metadata, Open Graph, Twitter cards, sitemap.xml, robots.txt on every page
- 📬 **Contact form** — With react-hot-toast success notifications
- 🟢 **WhatsApp floating button** — Fixed bottom-right on all pages
- 🖼️ **Optimized images** — Next.js `<Image>` component for all local and Unsplash images

---

## 📸 Pages & Sections

```
/                   Home
├── Hero            Full-width image · gradient overlay · 5 feature icons · 2 CTAs
├── About Preview   Two-column · Kerala houseboat image · company intro
├── Products        3 product cards (Black Pepper · Cardamom · Cinnamon)
├── Export Process  4-step cards with images · "Quality. Process. Reach." banner
├── Why Choose Us   5 feature icons · flat lay spice image · contact CTA bar
├── Industries      6 photo cards · food mfg · importers · wholesale · retail · HoReCa · private label
└── Contact CTA     Forest green · "Let's Build a Partnership" · inquiry button

/about              About Us
├── Hero Banner     Forest green full-width banner
├── Houseboat Image Full-width Kerala backwaters photo · floating caption
├── Company Story   Two-column sticky layout · 4 paragraphs
├── Values          4 cards · Quality · Heritage · Partnership · Global Standards
└── Feature Row     4-icon forest green bar

/products           All Products
├── Black Pepper    Text left · image right · 5 options · 5-icon bar
├── Green Cardamom  Image left · text right · 4 options · 4-icon bar
├── Cinnamon        Text left · image right · 4 options · 5-icon bar
├── Packaging       6 type cards (pure CSS, no images) · Lucide icons
└── Packaging USP   5-icon "Why Our Packaging Stands Out" bar

/products/black-pepper        } Individual product pages
/products/green-cardamom      } Hero · Overview · Options · Specs Table
/products/cinnamon            } Feature Icons · CTA Card

/industries         Industries We Serve
├── Hero Banner     Stats bar (30+ countries · 6 industries · 500+ partners)
├── 6 Photo Cards   Full descriptions per industry
└── Closing CTA     Italic quote · dual buttons

/contact            Contact Us
├── Hero Banner
├── Left Column     Contact info · "How we can help" · 24hr response card · quick links
└── Right Column    Form · Name · Company · Country · Product dropdown · Qty · Message
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Language | TypeScript 5 |
| Styling | [Tailwind CSS](https://tailwindcss.com/) v3 |
| Icons | [Lucide React](https://lucide.dev/) |
| Fonts | Playfair Display · Inter (Google Fonts) |
| Notifications | [react-hot-toast](https://react-hot-toast.com/) |
| Images | Next.js `<Image>` · Unsplash |
| Deployment | [Vercel](https://vercel.com/) |

---

## 🎨 Design System

```
Brand Colors
─────────────────────────────────────────────────
  ████  Forest Green  #2D4A1E   Primary · navbars · footers · CTAs
  ████  Gold          #C9A84C   Accents · icons · highlights · borders
  ████  Cream         #F5F0E8   Section backgrounds · light areas
  ████  Dark Brown    #3D2B1F   Body text · headings on light backgrounds
  ████  White         #FFFFFF   Text on dark · card backgrounds

Typography
─────────────────────────────────────────────────
  Headings  →  Playfair Display  (serif · premium · heritage)
  Body      →  Inter             (clean · professional · readable)
```

---

## 📦 Project Structure

```
malabar-reserve/
├── app/
│   ├── layout.tsx                   # Root layout · fonts · metadata · global wrappers
│   ├── page.tsx                     # Home page
│   ├── about/page.tsx
│   ├── products/
│   │   ├── page.tsx
│   │   ├── black-pepper/page.tsx
│   │   ├── green-cardamom/page.tsx
│   │   └── cinnamon/page.tsx
│   ├── industries/page.tsx
│   ├── contact/page.tsx
│   ├── sitemap.ts                   # Auto-generated sitemap.xml
│   └── robots.ts                    # Auto-generated robots.txt
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx               # Sticky · dropdown · mobile hamburger
│   │   ├── Footer.tsx               # Dark green · 4-column
│   │   └── WhatsAppButton.tsx       # Fixed floating button
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── AboutPreview.tsx
│   │   ├── ProductsPreview.tsx
│   │   ├── ExportProcess.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── IndustriesPreview.tsx
│   │   └── ContactCTA.tsx
│   ├── products/
│   │   ├── ProductSection.tsx       # Reusable alternating layout
│   │   ├── PackagingSolutions.tsx
│   │   └── ProductDetailHero.tsx
│   ├── contact/
│   │   └── ContactForm.tsx          # Client component · react-hot-toast
│   └── ui/
│       ├── Logo.tsx                 # SVG leaf icon · dark/light variants
│       └── SectionHeading.tsx       # Eyebrow · title · subtitle · ornament
│
└── public/
    └── photos-to-use/               # Local brand images (.png)
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repo
git clone https://github.com/prashant-1012/malabar-reserve.git
cd malabar-reserve

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WHATSAPP_NUMBER=919999999999
NEXT_PUBLIC_CONTACT_EMAIL=info@malabarreserve.co
NEXT_PUBLIC_SITE_DOMAIN=malabarreserve.co
```

### Build for Production

```bash
npm run build
npm start
```

---

## 🌍 Deployment

The site is deployed on **Vercel** with zero configuration.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/prashant-1012/malabar-reserve)

---

## 📋 Products Covered

| Product | Origin | Available Forms |
|---|---|---|
| **Black Pepper** | Kerala, South India | Whole · Bold · FAQ Grade · Steam Sterilized |
| **Green Cardamom** | Idukki & Wayanad, Kerala | Whole pods · Decorticated seeds · Powder |
| **Cinnamon** | Kerala, South India | Sticks · Bark · Powder |

All products are FSSAI & ISO 22000 certified, with MOQs starting from 250 kg.

---

## 🏭 Industries Served

```
  ┌─────────────────────┐   ┌──────────────────────┐   ┌──────────────────────┐
  │  Food Manufacturers │   │   Spice Importers    │   │ Wholesale Distributor│
  └─────────────────────┘   └──────────────────────┘   └──────────────────────┘
  ┌─────────────────────┐   ┌──────────────────────┐   ┌──────────────────────┐
  │    Retail Brands    │   │  Hospitality & HoReCa│   │  Private Label Co.   │
  └─────────────────────┘   └──────────────────────┘   └──────────────────────┘
```

---

## 📬 Contact

**Malabar Reserve**
- 🌐 Website: [malabarreserve.co](https://malabarreserve.co)
- 📧 Email: [info@malabarreserve.co](mailto:info@malabarreserve.co)
- 💬 WhatsApp: +91 99999 99999

---

<div align="center">

*"From the Spice Gardens of Malabar to the World"*

**Built with care · Deployed on Vercel · © 2024 Malabar Reserve**

</div>
