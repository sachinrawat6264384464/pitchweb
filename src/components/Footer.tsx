import React from 'react';
import { 
  BarChart3, 
  CheckCircle2
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#05070B] border-t border-white/10 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand Info (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-indigo-600 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#070A10] rounded-[6px] flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
              <span className="font-bold text-base text-white tracking-tight">
                PitchWeb Analytics
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                v3.0
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              The precision UTM management and multi-touch marketing attribution platform. 
              Standardize campaign taxonomy, protect tracking accuracy, and attribute real revenue.
            </p>

            {/* Live Operational Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/5 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Edge Telemetry: All Systems Operational</span>
            </div>
          </div>

          {/* Column 2: Platform Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">
              Platform
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#builder" className="hover:text-emerald-400 transition-colors">
                  Interactive UTM Builder
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-emerald-400 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-emerald-400 transition-colors">
                  Core Capabilities
                </a>
              </li>
              <li>
                <a href="#attribution" className="hover:text-emerald-400 transition-colors">
                  Attribution Architecture
                </a>
              </li>
              <li>
                <a href="#analytics" className="hover:text-emerald-400 transition-colors">
                  Analytics Showcase
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Ecosystem */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">
              Integrations & Plans
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#integrations" className="hover:text-emerald-400 transition-colors">
                  Google Analytics 4 Sync
                </a>
              </li>
              <li>
                <a href="#integrations" className="hover:text-emerald-400 transition-colors">
                  Meta Conversions API
                </a>
              </li>
              <li>
                <a href="#integrations" className="hover:text-emerald-400 transition-colors">
                  Shopify & Stripe Webhooks
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-emerald-400 transition-colors">
                  Plans & Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  Attribution FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Governance & Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">
              Data & Privacy
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-slate-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  GDPR & CCPA Compliant
                </span>
              </li>
              <li>
                <span className="text-slate-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  No 3rd-Party Tracking Pixels
                </span>
              </li>
              <li>
                <span className="text-slate-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Sub-millisecond Edge Redirects
                </span>
              </li>
              <li>
                <span className="text-slate-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  100% Customer Data Ownership
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            &copy; 2026 PitchWeb Marketing Telemetry Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span>Privacy-First Analytics</span>
            <span>•</span>
            <span>RFC 3986 Standardized</span>
            <span>•</span>
            <a href="#builder" className="text-slate-400 hover:text-emerald-400 transition-colors">
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
