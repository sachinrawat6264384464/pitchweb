---
name: utm-tracking-marketing-analytics
description: Operating guidelines, architecture principles, and implementation standards for PitchWeb UTM tracking & marketing attribution platform.
---

# SKILL: UTM Tracking & Marketing Analytics Engineering Guide

## 1. Project Identity & Purpose
- **Product Name**: PitchWeb (PitchMetrics)
- **Domain**: Campaign URL Generation, UTM Taxonomy Enforcement, Multi-Touch Attribution, and Traffic Analytics.
- **Value Proposition**: "Create campaign links, track visitor sources, understand campaign performance, and make better marketing decisions from one place."

## 2. Technology Stack & Directory Structure
- **Framework**: Next.js 16+ (App Router, Server & Client Components)
- **Language**: TypeScript (Strict typing, zero `any`)
- **Styling**: Tailwind CSS v4, Vanilla CSS design tokens
- **Icons**: `lucide-react`
- **State & Interactions**: React 19 Hooks (`useState`, `useMemo`, `useCallback`)
- **Structure**:
  ```
  src/
  ├── app/
  │   ├── layout.tsx         # Root layout, fonts, SEO metadata
  │   ├── page.tsx           # Complete landing page assembly
  │   └── globals.css        # Color tokens, utility layers, animations
  ├── components/
  │   ├── Navbar.tsx         # Responsive header with desktop & mobile drawer
  │   ├── Hero.tsx           # High-impact value proposition & quick metric teaser
  │   ├── UtmBuilder.tsx     # Interactive link generator & parameter preset engine
  │   ├── ProductPreview.tsx # Interactive attribution & live analytics preview
  │   ├── ProblemSection.tsx # Attribution blind spots vs structured telemetry
  │   ├── HowItWorks.tsx     # 4-stage data pipeline workflow
  │   ├── Features.tsx       # Feature matrix & asymmetric capability cards
  │   ├── AnalyticsShowcase.tsx # Deep-dive metrics, interactive channel charts & campaign table
  │   ├── AttributionFlow.tsx# Visual data diagram (Link -> Ingestion -> Logic -> ROI)
  │   ├── Integrations.tsx   # Verified & planned ecosystem connectors
  │   ├── TrustPrivacy.tsx   # GDPR/CCPA, cookieless attribution, data governance
  │   ├── Pricing.tsx        # Tiered plans with monthly/annual toggle
  │   ├── Faq.tsx            # Expandable accordion for common questions
  │   ├── FinalCta.tsx       # High-contrast action banner
  │   └── Footer.tsx         # Brand footer with navigation, status & links
  └── lib/
      └── utm-utils.ts       # UTM parameter validation, URL sanitization & presets
  ```

## 3. Brand Identity & Design System Rules
- **Theme**: Dark-mode primary (Midnight Obsidian `#070A0F`, Card Surface `#0D131F`, Border `#1E293B`).
- **Primary Accent**: Emerald / Mint (`#10B981` / `#34D399`) representing positive conversion & ROI.
- **Secondary Accent**: Electric Indigo / Violet (`#6366F1` / `#818CF8`) representing attribution intelligence.
- **Telemetry Accent**: Cyan (`#06B6D4`) for real-time link clicks and traffic signals.
- **Typography**: Geist Sans for interface elements, Geist Mono for parameters, URLs, and numeric metrics.
- **Elevation**: Subtle layered borders (`border border-white/10`) with ambient radial glows instead of harsh dropshadows.

## 4. UTM Parameter Taxonomy & Standards
Standard UTM parameters must follow RFC 3986 encoding:
- `utm_source`: Identifies referrer (e.g., `google`, `newsletter`, `linkedin`, `twitter`).
- `utm_medium`: Marketing medium (e.g., `cpc`, `email`, `social`, `referral`).
- `utm_campaign`: Individual campaign identifier (e.g., `summer_launch_2026`).
- `utm_term`: Keyword targeting for search ads (optional).
- `utm_content`: A/B test variation or creative ad unit identifier (optional).

## 5. UI/UX Standards & Accessibility
- **Interactive Feedback**: Every actionable element must provide immediate visual feedback (copy confirmations, active tab highlights, hover scales).
- **Zero Broken Links**: All navigation targets point to either internal anchor targets (`#builder`, `#features`, `#pricing`, `#analytics`) or verified destinations.
- **Keyboard & Screen Reader Support**: Use semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), valid `aria-label` attributes on icon-only buttons, and explicit form labels.
- **Mobile Recomposition**: Complex tables must provide horizontal scrolling or card transformations on screens `< 768px`.

## 6. Testing & Quality Verification
- Type Check: Run `npm run build` or `npx tsc --noEmit`.
- Lint: Run `npm run lint`.
- Browser Testing: Verify responsive rendering from mobile (375px) through 4K displays.
