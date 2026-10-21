# pitchweb

# PitchWeb — Precision UTM Tracking & Multi-Touch Marketing Telemetry Platform

PitchWeb is a high-performance marketing attribution and UTM link management platform engineered to eliminate taxonomy errors, unify multi-touch visitor journeys, and calculate true return on ad spend (ROAS).

---

## Key Features

- **Interactive Standardized UTM Builder**: Generate RFC 3986 compliant campaign tracking links with live query syntax highlighting, parameter character counter, automatic lowercase/whitespace sanitation, and single-click clipboard copying.
- **Pre-Configured Channel Presets**: One-click configuration for Google Ads (CPC), Meta/Instagram (Paid Social), LinkedIn (Sponsored B2B), Email Newsletters, and X/Twitter.
- **Attribution Architecture**: First-Touch (top-of-funnel introduction) and Last-Touch (closing conversion) mathematical models with session persistence that survives multi-page navigation.
- **Interactive Telemetry Dashboard Preview**: Timeframe toggles (7D, 30D, 90D), real-time revenue distribution breakdown bars, and searchable/filterable campaign telemetry table.
- **Connected Ecosystem**: Native support for Google Analytics 4, Meta Conversions API (CAPI), Shopify & Stripe checkout webhooks, HubSpot CRM, and Segment.
- **Privacy-First & Cookieless**: GDPR and CCPA compliant architecture without third-party tracking pixels or intrusive browser fingerprinting.

---

## Tech Stack

- **Framework**: Next.js 16.4.2 (App Router, Server Components by default)
- **Language**: TypeScript 5+ (Strict mode)
- **Styling**: Tailwind CSS v4, custom precision design tokens
- **Icons**: `lucide-react`
- **Compiler / Bundler**: Turbopack

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### 3. Production Build & Linting
```bash
# Run ESLint check
npm run lint

# Compile optimized production bundle
npm run build

# Start production server
npm run start
```

---

## Documentation

- [`SKILL.md`](./SKILL.md): Reusable development guide, architecture standards, and parameter taxonomy.
- [`DESIGN.md`](./DESIGN.md): Visual design specifications, color tokens, typography, and component styling.
- [`AGENT_HANDOVER.md`](./AGENT_HANDOVER.md): Engineering handover notes, verification results, and project state.

---

## License
MIT &copy; 2026 PitchWeb Marketing Telemetry Inc.
