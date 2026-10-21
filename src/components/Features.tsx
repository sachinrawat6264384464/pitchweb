import React from 'react';
import { 
  Link2, 
  GitFork, 
  Zap, 
  ShieldCheck, 
  BarChart, 
  Sliders, 
  CheckCircle2, 
  Lock,
  ArrowRight
} from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="py-20 bg-[#06090E] border-t border-white/5 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono font-semibold mb-3 border border-indigo-500/20">
            <Sliders className="w-3.5 h-3.5" />
            CORE CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineered for High-Velocity Marketing Teams
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Every feature is purpose-built to eliminate guesswork, standardize campaign nomenclature,
            and deliver undeniable attribution clarity.
          </p>
        </div>

        {/* Asymmetric Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Card 1: Large Featured Card (7 cols) - Taxonomy & UTM Builder */}
          <div className="md:col-span-7 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950 border border-white/10 p-7 flex flex-col justify-between hover:border-emerald-500/30 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Link2 className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  Active Link Engine
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                Enforced Taxonomy & Instant URL Builder
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Prevent team members from inventing conflicting source tags. Save pre-approved channel configurations,
                auto-sanitize special characters, and verify parameters before ads go live.
              </p>

              {/* Visual preview snippet */}
              <div className="rounded-xl bg-black/60 border border-slate-800 p-3.5 font-mono text-xs text-slate-300 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-slate-800 pb-1.5">
                  <span>Enforced Rule Engine</span>
                  <span className="text-emerald-400">RFC 3986 Validated</span>
                </div>
                <div className="text-slate-400 truncate">
                  <span className="text-emerald-400">utm_source:</span> google <span className="text-slate-600">•</span>{' '}
                  <span className="text-indigo-400">utm_medium:</span> cpc <span className="text-slate-600">•</span>{' '}
                  <span className="text-cyan-400">utm_campaign:</span> search_brand_q1
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Zero manual spreadsheet errors
              </span>
              <a href="#builder" className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1">
                Try Builder <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Medium Card (5 cols) - Multi-Touch Attribution */}
          <div className="md:col-span-5 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950 border border-white/10 p-7 flex flex-col justify-between hover:border-indigo-500/30 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <GitFork className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono text-indigo-400 px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">
                  First & Last Touch
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                Multi-Touch Journey Mapping
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Understand the difference between the campaign that introduced a prospect and the ad that converted them.
                Toggle between attribution models without losing historical raw data.
              </p>

              {/* Mini visual indicator */}
              <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-500/30 text-indigo-300">
                  <span className="block text-[10px] text-slate-400">First-Touch Weight</span>
                  <span className="font-bold text-sm text-white">40% Discovery</span>
                </div>
                <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300">
                  <span className="block text-[10px] text-slate-400">Last-Touch Weight</span>
                  <span className="font-bold text-sm text-white">60% Closer</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Deduplicated purchase mapping</span>
            </div>
          </div>

          {/* Card 3: Medium Card (4 cols) - Sub-millisecond Redirects */}
          <div className="md:col-span-4 rounded-2xl bg-slate-900/60 border border-white/10 p-6 flex flex-col justify-between hover:border-cyan-500/30 transition-all group">
            <div>
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 w-fit mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                Sub-Millisecond Edge Telemetry
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Global edge routing captures query strings and passes parameters without degrading ad quality scores or visitor bounce rates.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-xs font-mono text-cyan-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Global Avg: 0.8ms redirection
            </div>
          </div>

          {/* Card 4: Medium Card (4 cols) - Cross-Channel Benchmarks */}
          <div className="md:col-span-4 rounded-2xl bg-slate-900/60 border border-white/10 p-6 flex flex-col justify-between hover:border-amber-500/30 transition-all group">
            <div>
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 w-fit mb-4">
                <BarChart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                Cross-Channel Benchmarks
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Compare actual customer acquisition cost (CAC) and ROAS across Google, Meta, LinkedIn, and email on a standardized metric plane.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-xs font-mono text-amber-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              Normalized multi-network reporting
            </div>
          </div>

          {/* Card 5: Medium Card (4 cols) - Privacy-First First-Party */}
          <div className="md:col-span-4 rounded-2xl bg-slate-900/60 border border-white/10 p-6 flex flex-col justify-between hover:border-emerald-500/30 transition-all group">
            <div>
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 w-fit mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                Cookieless Fallback & Privacy
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Operates without cross-site third-party trackers. Compliant by design with GDPR, CCPA, and Apple iOS ATT privacy restrictions.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-xs font-mono text-emerald-400 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              GDPR & CCPA compliant architecture
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
