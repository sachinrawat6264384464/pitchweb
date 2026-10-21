---
name: mayra-ethnic-indore-development
description: Reusable engineering and operational guide for maintaining and scaling the Mayra Ethnic For Men digital showroom and catalogue web application.
---

# Mayra Ethnic For Men — Engineering & Operational Skill Guide

## 1. Project Identity & Purpose
- **Brand**: Mayra Ethnic For Men (`@mayraethnicindore`)
- **Tagline**: *"Where Royalty Meets Affordability 👑"*
- **Core Domain**: Men's Designer Ethnic, Festive, Groom, and Celebration Wear in Indore, Madhya Pradesh.
- **Location**: 21 Veena Nagar, 60 Feet Road, Mahalaxmi Nagar, Indore - 452010.
- **Primary Business Flow**: Direct WhatsApp order/inquiry conversion (`+91 8253004247`), store walk-in driving, interactive product catalogue, real-time filtering, customer quick view, and local SEO.

## 2. Technology Stack & Directory Structure
- **Framework**: Next.js 16 (App Router with Turbopack)
- **UI & Runtime**: React 19, TypeScript 5
- **Styling**: Tailwind CSS v4, Vanilla CSS Custom Design Tokens (`@import "tailwindcss"`)
- **Icons**: Lucide React (`lucide-react`) + Custom Brand SVG Components (`Icons.tsx`)
- **Package Manager**: npm

```
d:\pitchweb3.0/
├── public/                 # Static public assets and favicons
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css     # Design tokens, gradients, royal gold utilities
│   │   ├── layout.tsx      # Root metadata, SEO keywords, typography
│   │   └── page.tsx        # Single-page dynamic showcase with stateful tabs
│   ├── components/
│   │   ├── AnnouncementBar.tsx # Top promotional banner & store highlights
│   │   ├── CategoryPills.tsx   # Interactive category selector & count badges
│   │   ├── CustomerReviews.tsx # Local Indore customer testimonials
│   │   ├── FaqSection.tsx      # Interactive FAQ accordion
│   │   ├── FinalCta.tsx        # High-conversion store visit & WhatsApp CTA
│   │   ├── FloatingWhatsApp.tsx# Sticky WhatsApp contact widget with ping badge
│   │   ├── Footer.tsx          # Store details, hours, map link, copyright
│   │   ├── Hero.tsx            # Royal showcase with price anchors (starts ₹600)
│   │   ├── Icons.tsx           # Standalone SVG icons (Instagram, WhatsApp)
│   │   ├── InstagramSection.tsx# Real reels & social proof (@mayraethnicindore)
│   │   ├── Logo.tsx            # Royal crown geometric emblem with gold gradient
│   │   ├── ProductCatalogue.tsx# Search, price filters, product card grid
│   │   ├── ProductQuickView.tsx# Size picker, fabric details, WhatsApp order
│   │   ├── StoreLocation.tsx   # Address, hours, amenities, Google Maps iframe
│   │   └── WhyChooseUs.tsx     # 4 Core value pillars (Fitting, Price, Craft)
│   └── lib/
│       ├── products-data.ts    # Store details, catalogue items, WhatsApp URL generator
│       └── types.ts            # TypeScript data models (Product, Category, Review)
├── AGENT_HANDOVER.md       # Handover documentation for subsequent agents
├── DESIGN.md               # Visual, typography, and UX design specification
├── README.md               # GitHub project readme and repository documentation
├── SKILL.md                # This operational guide
└── package.json
```

## 3. Setup & Development Commands
- Install dependencies: `npm install`
- Start local development server: `npm run dev`
- Run production build: `npm run build`
- Start production server: `npm run start`
- Run linting: `npm run lint`

## 4. WhatsApp Direct Inquiry Architecture
All product cards and modals connect to WhatsApp via `generateWhatsAppLink()` in `src/lib/products-data.ts`:
```ts
generateWhatsAppLink(productName?: string, price?: number, size?: string): string
```
- WhatsApp Number: `918253004247`
- Formats pre-filled message with product title, price, selected size, and polite Hindi/English greeting.
- Ensures zero friction for customers to convert from browsing to chatting with the store.

## 5. Next.js 16 Conventions & Prerender Rules
- **No Dynamic Clock Calls during Prerender**: Do not execute unstable dynamic time checks like `new Date().getFullYear()` directly in root client components during static prerender without handling hydration or static fallbacks.
- **Client vs Server Components**: Use `"use client"` where state (search query, category filter, modal state) is active, keeping pure presentational components lightweight.
- **Tailwind CSS v4**: Tokens are declared in `globals.css` with `@import "tailwindcss";` and custom utility classes like `.gold-gradient-text`, `.royal-card-hover`.

## 6. Extending the Catalogue
To add new outfits or categories:
1. Open `src/lib/products-data.ts`.
2. Add the item to `PRODUCTS` array with `name`, `category`, `price`, `originalPrice`, `tag`, `fabric`, `colors`, `sizes`, `image`, and `inStock`.
3. Re-run `npm run build` to verify static compilation.
