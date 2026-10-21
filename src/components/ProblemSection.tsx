import React from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  CheckCheck
} from 'lucide-react';

export default function ProblemSection() {
  return (
    <section className="py-20 bg-[#06090E] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 text-xs font-mono font-semibold mb-3 border border-rose-500/20">
            <AlertTriangle className="w-3.5 h-3.5" />
            THE ATTRIBUTION DILEMMA
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Why Traditional Campaign Tracking Fails Marketers
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Every ad network takes 100% credit for the same customer, spreadsheets fall out of sync, 
            and fragmented UTM tags create blind spots in your analytics.
          </p>
        </div>

        {/* 2-Column Comparison Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Column 1: The Broken Way */}
          <div className="rounded-2xl bg-rose-950/15 border border-rose-500/20 p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-rose-500/15">
                <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  <XCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">The Fragmented Workflow</h3>
                  <span className="text-xs font-mono text-rose-400/90">Common errors & missed revenue</span>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Inconsistent Casing & Typos</strong>
                    <span className="text-slate-400 text-xs">
                      Teams mix `Facebook`, `facebook`, `fb_ad`, and `fb`, splitting one campaign into four disconnected report rows in GA4.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Overlapping Self-Reported ROAS</strong>
                    <span className="text-slate-400 text-xs">
                      Meta Ads claims 50 conversions, Google Ads claims 40, but Stripe only shows 60 total purchases. Attribution is double-counted.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Spreadsheet Link Chaos</strong>
                    <span className="text-slate-400 text-xs">
                      Marketing teams rely on bloated Google Sheets where links get overwritten, parameters are omitted, and tags break on launch.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Lost After-Click Journey</strong>
                    <span className="text-slate-400 text-xs">
                      Once a visitor navigates away from the landing page, UTM query parameters vanish before checkout or lead capture occurs.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-rose-500/10 text-xs font-mono text-rose-400/80">
              Result: Up to 35% of ad spend misallocated to non-performing channels.
            </div>
          </div>

          {/* Column 2: The PitchWeb Standard */}
          <div className="rounded-2xl bg-emerald-950/15 border border-emerald-500/30 p-7 flex flex-col justify-between shadow-lg shadow-emerald-950/20">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-emerald-500/20">
                <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  <CheckCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">The PitchWeb Standard</h3>
                  <span className="text-xs font-mono text-emerald-400">Standardized, unified telemetry</span>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Enforced Team Taxonomy</strong>
                    <span className="text-slate-400 text-xs">
                      Pre-configured platform presets automatically enforce lowercase standards, whitespace sanitation, and mandatory fields.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Deduplicated First & Last Touch</strong>
                    <span className="text-slate-400 text-xs">
                      Single source of truth assigns mathematically distinct credit to top-of-funnel introduction and closing conversion events.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Centralized Link Hub & API</strong>
                    <span className="text-slate-400 text-xs">
                      Instant generation with quick copy, short URLs, QR codes, and team-wide search history across all active ad managers.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Session-Preserved Attribution</strong>
                    <span className="text-slate-400 text-xs">
                      First-party cookie session caching ensures the original UTM source stays attached until the checkout or signup payload fires.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-500/15 text-xs font-mono text-emerald-400">
              Result: Clear channel ROI, validated budget scaling, and zero guessing.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
