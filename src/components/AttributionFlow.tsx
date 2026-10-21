'use client';
import React, { useState } from 'react';
import { 
  GitFork, 
  Link2, 
  UserCheck, 
  Activity, 
  Layers, 
  Coins, 
  Sparkles
} from 'lucide-react';

export default function AttributionFlow() {
  const [model, setModel] = useState<'first-touch' | 'last-touch'>('first-touch');

  return (
    <section id="attribution" className="py-20 bg-[#06090E] border-t border-white/5 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono font-semibold mb-3 border border-indigo-500/20">
            <GitFork className="w-3.5 h-3.5" />
            ATTRIBUTION ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            The Journey From Click to Revenue
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            See how query parameters survive page navigation, map to session storage, 
            and trigger automated revenue distribution across marketing touchpoints.
          </p>
        </div>

        {/* Model Switcher Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono">
            <button
              onClick={() => setModel('first-touch')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                model === 'first-touch'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              First-Touch Model (Top of Funnel)
            </button>
            <button
              onClick={() => setModel('last-touch')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                model === 'last-touch'
                  ? 'bg-indigo-500 text-white font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Last-Touch Model (Closing Conversion)
            </button>
          </div>
        </div>

        {/* Visual Pipeline Container */}
        <div className="rounded-2xl bg-slate-950 border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* 5-Step Connected Flow Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {/* Step 1 */}
            <div className="rounded-xl bg-slate-900/60 border border-white/10 p-4 text-center flex flex-col justify-between relative group hover:border-emerald-500/40 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto mb-3">
                  <Link2 className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase text-slate-500 block mb-1">Step 1</span>
                <h4 className="text-sm font-bold text-white mb-1.5">Campaign Link</h4>
                <p className="text-xs text-slate-400">
                  Ad clicked with URL parameters:
                </p>
                <div className="mt-2 text-[11px] font-mono text-emerald-400 bg-black/60 p-1.5 rounded border border-slate-800">
                  ?utm_source=google
                </div>
              </div>
              <div className="mt-4 pt-2 border-t border-white/5 text-[10px] font-mono text-slate-500">
                PPC / Social / Email
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-xl bg-slate-900/60 border border-white/10 p-4 text-center flex flex-col justify-between relative group hover:border-indigo-500/40 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center mx-auto mb-3">
                  <UserCheck className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase text-slate-500 block mb-1">Step 2</span>
                <h4 className="text-sm font-bold text-white mb-1.5">Visitor Arrival</h4>
                <p className="text-xs text-slate-400">
                  Landing page ingests query parameters into session state.
                </p>
                <div className="mt-2 text-[11px] font-mono text-indigo-400 bg-black/60 p-1.5 rounded border border-slate-800">
                  session_id: #8f921
                </div>
              </div>
              <div className="mt-4 pt-2 border-t border-white/5 text-[10px] font-mono text-slate-500">
                First-Party Cookies
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-xl bg-slate-900/60 border border-white/10 p-4 text-center flex flex-col justify-between relative group hover:border-cyan-500/40 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center mx-auto mb-3">
                  <Activity className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase text-slate-500 block mb-1">Step 3</span>
                <h4 className="text-sm font-bold text-white mb-1.5">Multi-Page Browsing</h4>
                <p className="text-xs text-slate-400">
                  Visitor navigates pages. UTM parameters persist seamlessly.
                </p>
                <div className="mt-2 text-[11px] font-mono text-cyan-400 bg-black/60 p-1.5 rounded border border-slate-800">
                  /features → /pricing
                </div>
              </div>
              <div className="mt-4 pt-2 border-t border-white/5 text-[10px] font-mono text-slate-500">
                State Persistence
              </div>
            </div>

            {/* Step 4 */}
            <div className="rounded-xl bg-slate-900/60 border border-white/10 p-4 text-center flex flex-col justify-between relative group hover:border-amber-500/40 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center mx-auto mb-3">
                  <Coins className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase text-slate-500 block mb-1">Step 4</span>
                <h4 className="text-sm font-bold text-white mb-1.5">Conversion Webhook</h4>
                <p className="text-xs text-slate-400">
                  Checkout completed in Stripe or lead registered in CRM.
                </p>
                <div className="mt-2 text-[11px] font-mono text-amber-400 bg-black/60 p-1.5 rounded border border-slate-800">
                  checkout.paid ($299)
                </div>
              </div>
              <div className="mt-4 pt-2 border-t border-white/5 text-[10px] font-mono text-slate-500">
                Server-Side Hook
              </div>
            </div>

            {/* Step 5 */}
            <div className="rounded-xl bg-slate-900/60 border border-white/10 p-4 text-center flex flex-col justify-between relative group hover:border-emerald-500/40 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto mb-3">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase text-slate-500 block mb-1">Step 5</span>
                <h4 className="text-sm font-bold text-white mb-1.5">Attributed ROAS</h4>
                <p className="text-xs text-slate-400">
                  Revenue credited accurately to campaign source based on model.
                </p>
                <div className="mt-2 text-[11px] font-mono text-emerald-400 bg-black/60 p-1.5 rounded border border-slate-800">
                  ROAS: 6.8x Updated
                </div>
              </div>
              <div className="mt-4 pt-2 border-t border-white/5 text-[10px] font-mono text-slate-500">
                Dashboard Telemetry
              </div>
            </div>
          </div>

          {/* Model Explanation Box */}
          <div className="mt-8 p-5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300">
            {model === 'first-touch' ? (
              <div className="flex items-start gap-3">
                <span className="p-1 rounded bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </span>
                <div>
                  <strong className="text-white">Active First-Touch Rule:</strong> 100% conversion credit is assigned to the very first campaign link clicked by this user (e.g., the original Google Search ad that sparked initial brand awareness 14 days ago).
                </div>
              </div>
            ) : (
              <div className="flex items-start gap-3">
                <span className="p-1 rounded bg-indigo-500/10 text-indigo-400 shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </span>
                <div>
                  <strong className="text-white">Active Last-Touch Rule:</strong> 100% conversion credit is assigned to the final campaign link clicked immediately before purchase (e.g., the promotional email newsletter coupon clicked minutes before checkout).
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
