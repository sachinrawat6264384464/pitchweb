import React from 'react';
import { 
  Link2, 
  Share2, 
  Cpu, 
  BarChart3, 
  CheckCircle2 
} from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Build Standardized Link',
      icon: Link2,
      description: 'Configure destination URLs using team presets for Google Ads, Meta, LinkedIn, or Email. Enforce strict lowercase naming and sanitation.',
      badge: 'Taxonomy Enforcement',
      color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/40 text-emerald-400'
    },
    {
      step: '02',
      title: 'Distribute Across Channels',
      icon: Share2,
      description: 'Deploy clean tracking URLs across PPC ads, social campaigns, bio links, and outbound outreach without accidental link degradation.',
      badge: 'Zero Latency',
      color: 'from-indigo-500/20 to-violet-500/20 border-indigo-500/40 text-indigo-400'
    },
    {
      step: '03',
      title: 'Ingest Session Telemetry',
      icon: Cpu,
      description: 'Visitors trigger our first-party edge ingestion. PitchWeb attaches persistent session cookies that survive multi-page navigation and tab closes.',
      badge: 'First-Party Cookies',
      color: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/40 text-cyan-400'
    },
    {
      step: '04',
      title: 'Attribute Revenue & Scale',
      icon: BarChart3,
      description: 'When conversions occur in Stripe or your CRM, PitchWeb matches the event to the exact introductory and closing marketing touchpoints.',
      badge: 'Deduplicated ROI',
      color: 'from-emerald-500/20 to-indigo-500/20 border-emerald-500/40 text-emerald-300'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#070A10] border-t border-white/5 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold mb-3 border border-cyan-500/20">
            <Cpu className="w-3.5 h-3.5" />
            END-TO-END PIPELINE
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            How Campaign Telemetry Works
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            From the moment your creative is clicked to the final checkout confirmation, 
            PitchWeb maintains continuous, privacy-compliant attribution.
          </p>
        </div>

        {/* 4 Steps Grid with Connectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.step}
                className="rounded-2xl bg-slate-900/40 border border-white/10 p-6 flex flex-col justify-between relative hover:border-white/20 transition-all hover:bg-slate-900/60 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-mono font-extrabold text-slate-600 group-hover:text-emerald-400/80 transition-colors">
                      {item.step}
                    </span>
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br border ${item.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="inline-block text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5 mb-2">
                    {item.badge}
                  </span>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/70" />
                  <span>Stage {index + 1} Automated</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on attribution fidelity */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/30 border border-white/5 text-center text-xs text-slate-400 max-w-3xl mx-auto font-mono">
          Note: Attribution fidelity adapts automatically according to browser capabilities, 
          first-party consent preferences, and server webhook event latency.
        </div>
      </div>
    </section>
  );
}
