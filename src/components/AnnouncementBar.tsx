'use client';
import React, { useState } from 'react';
import { Sparkles, ArrowRight, X } from 'lucide-react';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative z-50 bg-gradient-to-r from-emerald-950/80 via-indigo-950/80 to-slate-900 border-b border-emerald-500/20 text-xs sm:text-sm py-2 px-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 flex items-center justify-center gap-2 text-center text-slate-300">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-medium text-xs border border-emerald-500/30">
            <Sparkles className="w-3 h-3 text-emerald-400 animate-pulse" />
            v3.2 Update
          </span>
          <span className="hidden sm:inline text-slate-200">
            Multi-Touch Attribution Engine & First-Party Cookieless Telemetry are now live.
          </span>
          <span className="sm:hidden text-slate-200">
            v3.2 Multi-Touch Attribution Engine live
          </span>
          <a
            href="#attribution"
            className="inline-flex items-center gap-1 text-emerald-400 font-medium hover:text-emerald-300 transition-colors ml-1 underline underline-offset-2"
          >
            Explore Flow <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-slate-400 hover:text-white p-1 rounded-md transition-colors focus:outline-none focus:ring-1 focus:ring-slate-400"
          aria-label="Dismiss banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
