import React from 'react';
import { 
  CheckCircle2, 
  Workflow
} from 'lucide-react';
import { INTEGRATIONS_LIST } from '../lib/sample-data';

export default function Integrations() {
  return (
    <section id="integrations" className="py-20 bg-[#070A10] border-t border-white/5 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold mb-3 border border-cyan-500/20">
            <Workflow className="w-3.5 h-3.5" />
            CONNECTED ECOSYSTEM
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Ecosystem Integrations
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Connect PitchWeb with your existing marketing stack. Sync campaign parameters to GA4,
            stream conversion payloads to ad engines, and enrich CRM contact records.
          </p>
        </div>

        {/* Integration Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INTEGRATIONS_LIST.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl bg-slate-900/40 border border-white/10 p-6 flex flex-col justify-between hover:border-white/20 transition-all hover:bg-slate-900/60 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono uppercase text-slate-500">
                    {item.category}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {item.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Architecture Disclaimer */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/30 border border-white/5 text-center text-xs text-slate-400 max-w-2xl mx-auto font-mono">
          All external connections operate via secure TLS 1.3 webhooks and official REST endpoints. 
          No third-party script injections required on your primary website.
        </div>
      </div>
    </section>
  );
}
