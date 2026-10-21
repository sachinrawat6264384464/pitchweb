import React from 'react';
import { 
  ArrowRight, 
  Link2, 
  Sparkles, 
  CheckCircle2, 
  BarChart3 
} from 'lucide-react';

export default function FinalCta() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#06090E] via-[#09111D] to-[#06090E] border-t border-white/5 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-indigo-500/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          READY FOR STANDARD-COMPLIANT ATTRIBUTION
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Stop Flying Blind on Campaign ROI.
        </h2>

        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Standardize every UTM link across your marketing channels in seconds. 
          Gain unmistakable visibility into which campaigns actually generate paying customers.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#builder"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 rounded-xl shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Link2 className="w-5 h-5" />
            <span>Launch Free UTM Builder Now</span>
            <ArrowRight className="w-4 h-4 ml-0.5" />
          </a>
          <a
            href="#analytics"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-white bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 rounded-xl transition-all"
          >
            <BarChart3 className="w-4 h-4 text-emerald-400" />
            <span>Explore Demo Dashboard</span>
          </a>
        </div>

        {/* Highlights Row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Instant link generation</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>100% Data ownership</span>
          </div>
        </div>
      </div>
    </section>
  );
}
