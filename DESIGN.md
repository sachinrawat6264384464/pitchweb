# DESIGN SPECIFICATION: PitchWeb Marketing Analytics & UTM Tracking

## 1. Design Vision & Positioning
PitchWeb is an enterprise-grade UTM link management, multi-touch attribution, and marketing telemetry platform. It bridges the gap between chaotic marketing campaign links and definitive revenue attribution.

The aesthetic direction is **"Precision Telemetry"**: high-contrast, obsidian dark-mode interface inspired by Linear, Datadog, and Stripe Sigma, with refined emerald, indigo, and cyan accents.

---

## 2. Color Palette & Design Tokens

### Core Neutral Palette
- `Background Primary`: `#06090E` (Deepest Void)
- `Background Secondary`: `#0C111C` (Dark Obsidian Surface)
- `Surface Card`: `rgba(18, 24, 38, 0.7)` with `backdrop-filter: blur(16px)`
- `Surface Elevated / Hover`: `rgba(28, 38, 58, 0.5)`
- `Border Subtle`: `rgba(255, 255, 255, 0.08)`
- `Border Highlight`: `rgba(99, 102, 241, 0.3)`
- `Text Primary`: `#F8FAFC` (Slate 50)
- `Text Secondary`: `#94A3B8` (Slate 400)
- `Text Muted`: `#64748B` (Slate 500)

### Telemetry Accents
- `Conversion Emerald`: `#10B981` (Glow: `rgba(16, 185, 129, 0.25)`)
- `Attribution Indigo`: `#6366F1` (Glow: `rgba(99, 102, 241, 0.35)`)
- `Signal Cyan`: `#06B6D4` (Glow: `rgba(6, 182, 212, 0.25)`)
- `Warning Amber`: `#F59E0B`
- `Error Rose`: `#F43F5E`

---

## 3. Typography & Hierarchy
- **Primary Typeface**: `Geist Sans` (`var(--font-geist-sans)`)
- **Monospace Code/Parameter Typeface**: `Geist Mono` (`var(--font-geist-mono)`)
- **Display Headings**:
  - `Hero H1`: 48px–64px / Leading 1.1 / Font Weight 700 / Tight Tracking (-0.03em)
  - `Section H2`: 32px–40px / Leading 1.2 / Font Weight 600 / Tracking (-0.02em)
  - `Card H3`: 20px–24px / Leading 1.3 / Font Weight 600
  - `Body Copy`: 15px–16px / Leading 1.6 / Font Weight 400
  - `Code / Tags / Badges`: 12px–13px / Font Weight 500 / Geist Mono

---

## 4. Spacing Scale & Grid System
- Max Container Width: `1280px` (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)
- Vertical Section Rhythm: `py-20 lg:py-28`
- Component Gap System: `gap-6` to `gap-8` for grids; `gap-3` to `gap-4` for form clusters

---

## 5. UI Component Specifications

### 1. Buttons & CTAs
- **Primary Action**: Gradient fill (`from-emerald-500 to-teal-600`), white text, bold, hover elevation with shadow `0 0 25px rgba(16,185,129,0.35)`.
- **Secondary Action**: Bordered translucent (`border border-white/15 bg-white/5 hover:bg-white/10 text-slate-200`), transition duration 200ms.
- **Micro-Copy/Copy Buttons**: Monospace pill with immediate checkmark state transition.

### 2. Interactive UTM Builder
- Real-time parameter extraction and URL concatenation.
- Quick channel presets: Google Ads (`cpc`), Meta / Instagram (`paid_social`), LinkedIn Ads (`social_ad`), Newsletter (`email`), Twitter/X (`social`).
- Live URL copy confirmation feedback with copy notification toast.
- Immediate query string syntax highlighter (`?`, `&`, parameter keys, parameter values).

### 3. Interactive Analytics Showcase
- Live metric cards (Sessions, Attributed Conversions, Conversion Rate, CAC, Total Attributed Pipeline).
- Filter controls by Date Window (Last 7 Days, Last 30 Days, Last 90 Days).
- Channel performance breakdown bar chart with comparative percentages.
- Real-time campaign telemetry table with status indicators and copyable tracking links.

### 4. Interactive Attribution Flow Visualizer
- 5-step diagram:
  1. `Campaign Creation & Tagging`
  2. `Visitor Arrival & Referrer Ingestion`
  3. `Session Attribution Engine` (First-Touch / Last-Touch toggle)
  4. `Conversion Event Matching`
  5. `Revenue & ROAS Intelligence Dashboard`

---

## 6. Accessibility & Motion Guidelines
- Contrast ratios exceed WCAG AA standards (minimum 4.5:1 on text, 3:1 on large text and controls).
- Focus rings are styled explicitly with `focus-visible:ring-2 focus-visible:ring-emerald-400`.
- All CSS transitions are smooth (150ms–300ms cubic-bezier).
- No distracting continuous bounce animations; motion is functional and user-triggered.
