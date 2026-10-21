'use client';
import React, { useState, useMemo } from 'react';
import { 
  Link2, 
  Copy, 
  Check, 
  RotateCcw, 
  Sparkles, 
  Globe, 
  Tag, 
  Search, 
  Share2, 
  Briefcase, 
  Mail, 
  SlidersHorizontal, 
  CheckCircle2 
} from 'lucide-react';
import { PRESET_TEMPLATES } from '../lib/sample-data';
import { UtmParameters } from '../lib/types';
import { buildUtmUrl, copyToClipboard } from '../lib/utm-utils';

export default function UtmBuilder() {
  const [params, setParams] = useState<UtmParameters>({
    baseUrl: 'https://yourbrand.com/pricing',
    source: 'google',
    medium: 'cpc',
    campaign: 'q1_growth_campaign',
    term: 'attribution software',
    content: 'hero_cta_v1'
  });

  const [copied, setCopied] = useState(false);
  const [activePreset, setActivePreset] = useState<string>('google-search');

  const generatedUrl = useMemo(() => {
    return buildUtmUrl(params);
  }, [params]);

  const handleCopy = async () => {
    if (!generatedUrl) return;
    const ok = await copyToClipboard(generatedUrl);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const handleApplyPreset = (presetId: string) => {
    const preset = PRESET_TEMPLATES.find((p) => p.id === presetId);
    if (!preset) return;
    setActivePreset(presetId);
    setParams((prev) => ({
      ...prev,
      source: preset.source,
      medium: preset.medium,
      campaign: preset.campaignDefault,
    }));
  };

  const handleReset = () => {
    setParams({
      baseUrl: 'https://yourbrand.com',
      source: '',
      medium: '',
      campaign: '',
      term: '',
      content: ''
    });
    setActivePreset('');
  };

  const getPresetIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search': return <Search className="w-3.5 h-3.5" />;
      case 'Share2': return <Share2 className="w-3.5 h-3.5" />;
      case 'Briefcase': return <Briefcase className="w-3.5 h-3.5" />;
      case 'Mail': return <Mail className="w-3.5 h-3.5" />;
      case 'Twitter': return (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      );
      default: return <Tag className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="builder" className="py-20 bg-[#06090E] relative border-t border-white/5 scroll-mt-20">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-semibold mb-3 border border-emerald-500/20">
            <Link2 className="w-3.5 h-3.5" />
            STANDARDIZED LINK GENERATOR
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Interactive UTM Link Builder
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Eliminate taxonomy errors, lowercase inconsistencies, and missing parameters. 
            Select a verified channel preset or configure custom attribution tags with instant copy.
          </p>
        </div>

        {/* Preset Selector Chips */}
        <div className="mb-8">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Channel Presets
            </span>
            <span className="text-[11px] text-slate-500 lowercase">Click to auto-populate standard parameters</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {PRESET_TEMPLATES.map((preset) => {
              const isSelected = activePreset === preset.id;
              return (
                <button
                  key={preset.id}
                  onClick={() => handleApplyPreset(preset.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                    isSelected
                      ? 'bg-emerald-500/15 border border-emerald-500/50 text-emerald-300 shadow-sm shadow-emerald-500/20'
                      : 'bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:bg-slate-800/80 hover:border-white/20'
                  }`}
                >
                  <span className={isSelected ? 'text-emerald-400' : 'text-slate-400'}>
                    {getPresetIcon(preset.iconName)}
                  </span>
                  <span>{preset.name}</span>
                  <span className="font-mono text-[10px] text-slate-500 px-1 py-0.5 rounded bg-black/40">
                    {preset.source}/{preset.medium}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Builder Form & Output Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form Inputs: 7 Columns */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-900/50 border border-white/10 p-6 sm:p-7 backdrop-blur-md shadow-xl">
            <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-emerald-400" />
                <h3 className="text-base font-semibold text-white">Campaign Parameters</h3>
              </div>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors py-1 px-2 rounded hover:bg-white/5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Fields</span>
              </button>
            </div>

            <div className="space-y-4">
              {/* Base URL */}
              <div>
                <label className="flex items-center justify-between text-xs font-medium text-slate-300 mb-1.5">
                  <span className="flex items-center gap-1.5 font-mono">
                    <Globe className="w-3.5 h-3.5 text-emerald-400" /> Destination Webpage URL *
                  </span>
                  <span className="text-[11px] text-slate-500">Required</span>
                </label>
                <input
                  type="text"
                  value={params.baseUrl}
                  onChange={(e) => setParams({ ...params, baseUrl: e.target.value })}
                  placeholder="https://example.com/landing-page"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all placeholder:text-slate-600"
                />
              </div>

              {/* Source & Medium (Grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center justify-between text-xs font-medium text-slate-300 mb-1.5">
                    <span className="font-mono text-emerald-400">utm_source *</span>
                    <span className="text-[11px] text-slate-500">Referrer</span>
                  </label>
                  <input
                    type="text"
                    value={params.source}
                    onChange={(e) => setParams({ ...params, source: e.target.value })}
                    placeholder="google, newsletter, linkedin"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all placeholder:text-slate-600"
                  />
                  <span className="text-[10px] text-slate-500 mt-1 block">e.g., google, meta, twitter</span>
                </div>

                <div>
                  <label className="flex items-center justify-between text-xs font-medium text-slate-300 mb-1.5">
                    <span className="font-mono text-indigo-400">utm_medium *</span>
                    <span className="text-[11px] text-slate-500">Marketing Medium</span>
                  </label>
                  <input
                    type="text"
                    value={params.medium}
                    onChange={(e) => setParams({ ...params, medium: e.target.value })}
                    placeholder="cpc, email, paid_social"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all placeholder:text-slate-600"
                  />
                  <span className="text-[10px] text-slate-500 mt-1 block">e.g., cpc, email, banner</span>
                </div>
              </div>

              {/* Campaign Name */}
              <div>
                <label className="flex items-center justify-between text-xs font-medium text-slate-300 mb-1.5">
                  <span className="font-mono text-cyan-400">utm_campaign *</span>
                  <span className="text-[11px] text-slate-500">Campaign Name</span>
                </label>
                <input
                  type="text"
                  value={params.campaign}
                  onChange={(e) => setParams({ ...params, campaign: e.target.value })}
                  placeholder="spring_launch_2026"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all placeholder:text-slate-600"
                />
                <span className="text-[10px] text-slate-500 mt-1 block">Spaces are auto-sanitized into clean underscores</span>
              </div>

              {/* Term & Content (Optional) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center justify-between text-xs font-medium text-slate-300 mb-1.5">
                    <span className="font-mono text-amber-400">utm_term</span>
                    <span className="text-[11px] text-slate-500">Keyword (Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={params.term}
                    onChange={(e) => setParams({ ...params, term: e.target.value })}
                    placeholder="marketing attribution"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label className="flex items-center justify-between text-xs font-medium text-slate-300 mb-1.5">
                    <span className="font-mono text-rose-400">utm_content</span>
                    <span className="text-[11px] text-slate-500">A/B Creative (Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={params.content}
                    onChange={(e) => setParams({ ...params, content: e.target.value })}
                    placeholder="header_video_cta"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all placeholder:text-slate-600"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Output & Telemetry Preview: 5 Columns */}
          <div className="lg:col-span-5 space-y-4">
            {/* Generated URL Box */}
            <div className="rounded-2xl bg-slate-900/80 border border-white/10 p-6 backdrop-blur-md shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Generated Tracking URL
                </span>
                <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-black/40">
                  {generatedUrl.length} chars
                </span>
              </div>

              {/* URL Display Box */}
              <div className="p-4 rounded-xl bg-black/70 border border-slate-800 font-mono text-xs text-slate-200 break-all leading-relaxed relative min-h-[90px] flex items-center">
                {generatedUrl ? (
                  <div>
                    <span className="text-slate-400">{params.baseUrl || 'https://...'}</span>
                    {params.source && (
                      <span>
                        <span className="text-slate-500">?</span>
                        <span className="text-emerald-400">utm_source</span>=
                        <span className="text-emerald-300">{params.source.toLowerCase().replace(/\s+/g, '_')}</span>
                      </span>
                    )}
                    {params.medium && (
                      <span>
                        <span className="text-slate-500">&</span>
                        <span className="text-indigo-400">utm_medium</span>=
                        <span className="text-indigo-300">{params.medium.toLowerCase().replace(/\s+/g, '_')}</span>
                      </span>
                    )}
                    {params.campaign && (
                      <span>
                        <span className="text-slate-500">&</span>
                        <span className="text-cyan-400">utm_campaign</span>=
                        <span className="text-cyan-300">{params.campaign.toLowerCase().replace(/\s+/g, '_')}</span>
                      </span>
                    )}
                    {params.term && (
                      <span>
                        <span className="text-slate-500">&</span>
                        <span className="text-amber-400">utm_term</span>=
                        <span className="text-amber-300">{params.term.toLowerCase().replace(/\s+/g, '+')}</span>
                      </span>
                    )}
                    {params.content && (
                      <span>
                        <span className="text-slate-500">&</span>
                        <span className="text-rose-400">utm_content</span>=
                        <span className="text-rose-300">{params.content.toLowerCase().replace(/\s+/g, '_')}</span>
                      </span>
                    )}
                  </div>
                ) : (
                  <span className="text-slate-500 italic">Enter a website URL to generate campaign link</span>
                )}
              </div>

              {/* Copy and Actions */}
              <div className="mt-4 flex items-center gap-3">
                <button
                  onClick={handleCopy}
                  disabled={!generatedUrl}
                  className={`flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                    copied
                      ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30'
                      : 'bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 hover:from-emerald-300 hover:to-teal-300 shadow-md shadow-emerald-500/20 hover:scale-[1.01] active:scale-[0.99]'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 stroke-[3]" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Campaign Link</span>
                    </>
                  )}
                </button>
              </div>

              {/* Notification toast if copied */}
              {copied && (
                <div className="mt-3 p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 flex items-center gap-2 animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sanitized & ready for ad copy, email, and social campaigns.</span>
                </div>
              )}
            </div>

            {/* Parameter Validation Guidance Card */}
            <div className="rounded-2xl bg-slate-900/40 border border-white/5 p-5 text-xs space-y-3">
              <span className="font-semibold text-slate-300 block uppercase tracking-wider font-mono text-[11px]">
                Enforced Taxonomy Standards
              </span>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1 shrink-0" />
                  <span><strong>Automatic Lowercasing:</strong> Prevents split analytics caused by mixed case (e.g., &quot;Google&quot; vs &quot;google&quot;).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1 shrink-0" />
                  <span><strong>Whitespace Substitution:</strong> Spaces are replaced with underscores to maintain valid query string RFC compliance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1 shrink-0" />
                  <span><strong>First-Party Preserved:</strong> Passed safely through redirect chains without dropping query attributes.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
