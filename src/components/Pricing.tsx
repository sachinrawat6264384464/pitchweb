'use client';
import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  DollarSign
} from 'lucide-react';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const tiers = [
    {
      name: 'Starter Builder',
      price: '$0',
      period: 'forever',
      description: 'Ideal for solo founders and marketers needing standardized link generation and clean taxonomy.',
      highlight: false,
      badge: 'Free Forever',
      features: [
        'Unlimited UTM link building',
        'Standard channel presets (Google, Meta, etc.)',
        'Parameter lowercase & whitespace sanitation',
        'Single user workspace',
        'Community documentation & guides'
      ],
      ctaText: 'Start Building Free',
      ctaHref: '#builder'
    },
    {
      name: 'Pro Marketer',
      price: isAnnual ? '$31' : '$39',
      period: 'per month',
      description: 'For growing brands needing multi-touch attribution, custom domains, and GA4 telemetry.',
      highlight: true,
      badge: 'Most Popular',
      features: [
        'Everything in Starter',
        'Up to 50,000 tracked clicks / month',
        'First-Touch & Last-Touch attribution engine',
        '1 Custom short domain (e.g., go.yourbrand.com)',
        'Native Google Analytics 4 mapping',
        'CSV/JSON export & 90-day telemetry retention',
        'Priority email support (under 4hr SLA)'
      ],
      ctaText: 'Get Started with Pro',
      ctaHref: '#builder'
    },
    {
      name: 'Scale Agency',
      price: isAnnual ? '$99' : '$129',
      period: 'per month',
      description: 'For performance agencies and high-volume media buyers managing multiple brands and client accounts.',
      highlight: false,
      badge: 'Agency & Enterprise',
      features: [
        'Everything in Pro Marketer',
        'Up to 500,000 tracked clicks / month',
        'Unlimited team seats & shared taxonomy locks',
        '5 Custom short domains with automated SSL',
        'Server-side Meta Conversions API (CAPI)',
        'Stripe & Shopify webhook revenue mapping',
        'REST API access & Snowflake/BigQuery streaming',
        'Dedicated account engineer'
      ],
      ctaText: 'Scale Your Agency',
      ctaHref: '#builder'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-[#070A10] border-t border-white/5 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-semibold mb-3 border border-emerald-500/20">
            <DollarSign className="w-3.5 h-3.5" />
            TRANSPARENT PRICING
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Simple Plans for Every Stage of Growth
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Start completely free with the standardized UTM builder. Upgrade when you need 
            automated attribution mapping, custom domains, and CRM webhooks.
          </p>

          {/* Billing Switch */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className={`text-xs font-medium ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-12 h-6 rounded-full bg-slate-800 border border-slate-700 transition-colors p-0.5 focus:outline-none"
              aria-label="Toggle annual billing discount"
            >
              <div
                className={`w-5 h-5 rounded-full bg-emerald-400 transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-xs font-medium flex items-center gap-1.5 ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
              <span>Annual Billing</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-semibold border border-emerald-500/30">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-7 flex flex-col justify-between transition-all relative ${
                tier.highlight
                  ? 'bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border-2 border-emerald-500/50 shadow-2xl shadow-emerald-950/40 lg:-translate-y-2'
                  : 'bg-slate-900/40 border border-white/10 hover:border-white/20'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 text-xs font-bold font-mono tracking-wide shadow-md">
                  {tier.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">{tier.name}</h3>
                  {!tier.highlight && (
                    <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                      {tier.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {tier.description}
                </p>

                <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-white/10">
                  <span className="text-4xl font-extrabold font-mono text-white tracking-tight">
                    {tier.price}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    /{tier.period}
                  </span>
                </div>

                <div className="space-y-3 mb-8">
                  <span className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider block">
                    Included Capabilities:
                  </span>
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <a
                  href={tier.ctaHref}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
                    tier.highlight
                      ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 hover:from-emerald-300 hover:to-teal-300 shadow-lg shadow-emerald-500/25 hover:scale-[1.02]'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Guarantee */}
        <div className="mt-12 text-center text-xs text-slate-500 font-mono flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>All paid plans include a 14-day money-back guarantee • Cancel or switch plans anytime.</span>
        </div>
      </div>
    </section>
  );
}
