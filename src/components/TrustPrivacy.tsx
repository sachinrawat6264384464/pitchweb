import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Server, 
  EyeOff
} from 'lucide-react';

export default function TrustPrivacy() {
  const pillars = [
    {
      icon: EyeOff,
      title: 'First-Party Cookieless Architecture',
      description: 'Does not rely on cross-site tracking pixels or invasive browser fingerprinting. Attribution parameters are anchored directly in first-party URL strings and session storage.'
    },
    {
      icon: ShieldCheck,
      title: 'GDPR, CCPA & ePrivacy Compliant',
      description: 'Zero personal identifiable information (PII) is captured in raw UTM tags. Automatically strips sensitive parameters before storing aggregation metrics.'
    },
    {
      icon: Server,
      title: '99.99% Redirect High-Availability',
      description: 'Built on distributed edge workers to guarantee sub-millisecond campaign link resolution with automatic regional failover.'
    },
    {
      icon: Lock,
      title: 'Role-Based Access & Data Ownership',
      description: 'You retain 100% legal ownership of your telemetry dataset. Export raw logs via API or CSV at any time with no vendor lock-in.'
    }
  ];

  return (
    <section className="py-20 bg-[#06090E] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-semibold mb-3 border border-emerald-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            GOVERNANCE & DATA INTEGRITY
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Trust, Privacy & Transparent Measurement
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Modern marketing attribution must be honest about privacy constraints. 
            Here is how PitchWeb delivers data precision without violating visitor consent.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div 
                key={p.title}
                className="rounded-2xl bg-slate-900/40 border border-white/10 p-6 sm:p-7 flex items-start gap-4 hover:border-emerald-500/30 transition-colors"
              >
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Honest Attribution Limitation Callout */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-300 max-w-4xl mx-auto space-y-2">
          <div className="flex items-center gap-2 font-mono font-bold text-white">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Attribution Limitation Transparency
          </div>
          <p className="text-slate-400 leading-relaxed">
            Attribution models are mathematical approximations of real-world buyer journeys. Factors such as ad-blockers, private browsing windows, cross-device switching without logins, and browser cookie lifetimes (such as Safari ITP 7-day limits) can affect measurement. PitchWeb combines first-party session tokens with server-side webhook reconciliation to maximize accuracy while remaining strictly privacy-compliant.
          </p>
        </div>
      </div>
    </section>
  );
}
