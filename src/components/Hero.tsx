import React from 'react';
import { 
  ArrowRight, 
  TrendingUp, 
  Zap, 
  CheckCircle2, 
  Link2,
  Activity
} from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-emerald-500/15 via-indigo-600/15 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Real-time status pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 shadow-inner mb-6 backdrop-blur-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono font-medium text-slate-300">
              Multi-Touch Telemetry Active
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
              <Zap className="w-3 h-3" /> 0.8ms Redirect Latency
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
            Know Which Campaigns{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
              Actually Drive Revenue.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
            Create standardized campaign tracking links, eliminate chaotic UTM naming errors, 
            and map every visitor touchpoint to real conversions and customer revenue.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#builder"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Link2 className="w-5 h-5" />
              <span>Launch Free UTM Builder</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </a>
            <a
              href="#analytics"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700/80 rounded-xl backdrop-blur-sm transition-all"
            >
              <Activity className="w-4 h-4 text-indigo-400" />
              <span>View Interactive Dashboard</span>
            </a>
          </div>

          {/* Verification / Trust Points */}
          <div className="mt-10 pt-6 border-t border-white/5 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs sm:text-sm text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100% First-Party Data</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>No Third-Party Cookies Required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Google Analytics 4 & Meta CAPI Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Zero-Delay Redirect Infrastructure</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive Preview Card */}
        <div className="mt-12 max-w-5xl mx-auto rounded-2xl p-1 bg-gradient-to-b from-white/15 via-white/5 to-transparent shadow-2xl shadow-black/80">
          <div className="rounded-[15px] bg-[#0A0E17] border border-white/10 overflow-hidden">
            {/* Window bar */}
            <div className="px-4 py-3 bg-[#070A10] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs font-mono text-slate-400 ml-2">pitchweb.io/analytics/live-telemetry</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                LIVE INGESTION
              </div>
            </div>

            {/* Teaser stats grid */}
            <div className="p-6 grid grid-cols-2 lg:grid-cols-4 gap-4 bg-[#080C14]">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Total Attributed Revenue</span>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-white mt-1.5">$184,720</div>
                <div className="text-xs font-medium text-emerald-400 mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" /> +28.4% vs last period
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Tracked Campaign Clicks</span>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-white mt-1.5">82,410</div>
                <div className="text-xs font-medium text-emerald-400 mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" /> 99.98% valid UTM syntax
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Attributed Conversions</span>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-white mt-1.5">4,912</div>
                <div className="text-xs font-medium text-indigo-400 mt-1">
                  5.96% Blended CVR
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Average Campaign ROAS</span>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald-400 mt-1.5">5.82x</div>
                <div className="text-xs font-medium text-slate-400 mt-1">
                  Across 34 Active Links
                </div>
              </div>
            </div>

            {/* Quick Live Preview Banner */}
            <div className="px-6 py-3.5 bg-slate-950/90 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-300 font-mono">
                <span className="text-slate-500">Latest Event:</span>
                <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  google / cpc
                </span>
                <span className="text-slate-400 truncate max-w-xs sm:max-w-md">
                  cmp: brand_search_q1 → /pricing → checkout_completed ($299.00)
                </span>
              </div>
              <span className="text-slate-500 font-mono">3s ago</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
