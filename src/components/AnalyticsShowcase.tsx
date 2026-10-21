'use client';
import React, { useState, useMemo } from 'react';
import { 
  BarChart3, 
  Search, 
  ArrowUpRight
} from 'lucide-react';
import { CHANNEL_BREAKDOWN, DEMO_CAMPAIGNS } from '../lib/sample-data';

export default function AnalyticsShowcase() {
  const [activeRange, setActiveRange] = useState<'7d' | '30d' | '90d'>('30d');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChannel, setSelectedChannel] = useState<string>('all');

  const filteredCampaigns = useMemo(() => {
    return DEMO_CAMPAIGNS.filter((c) => {
      const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            c.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            c.medium.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesChannel = selectedChannel === 'all' || c.source.toLowerCase().includes(selectedChannel.toLowerCase());
      return matchesSearch && matchesChannel;
    });
  }, [searchQuery, selectedChannel]);

  return (
    <section id="analytics" className="py-20 bg-[#070A10] border-t border-white/5 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-semibold mb-3 border border-emerald-500/20">
            <BarChart3 className="w-3.5 h-3.5" />
            ATTRIBUTION VISUALIZATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Actionable Telemetry. Not Vanity Numbers.
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Isolate top-converting campaign creative, compare traffic mediums, and calculate real 
            customer ROAS with precision date filtering and channel segmentation.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="rounded-2xl bg-slate-950 border border-white/10 shadow-2xl p-6 sm:p-8">
          {/* Controls Bar: Search, Channel Filter & Date Window */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search campaigns, sources, or mediums..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-xs font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500/50 placeholder:text-slate-500"
              />
            </div>

            {/* Channel and Date Filters */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 p-1 rounded-xl text-xs font-mono">
                <span className="px-2 text-slate-500">Channel:</span>
                {['all', 'google', 'instagram', 'linkedin', 'newsletter'].map((ch) => (
                  <button
                    key={ch}
                    onClick={() => setSelectedChannel(ch)}
                    className={`px-2.5 py-1 rounded-lg capitalize transition-colors ${
                      selectedChannel === ch
                        ? 'bg-emerald-500/20 text-emerald-300 font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {ch}
                  </button>
                ))}
              </div>

              {/* Range Toggle */}
              <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 p-1 rounded-xl text-xs font-mono">
                {(['7d', '30d', '90d'] as const).map((range) => (
                  <button
                    key={range}
                    onClick={() => setActiveRange(range)}
                    className={`px-3 py-1 rounded-lg uppercase transition-all ${
                      activeRange === range
                        ? 'bg-emerald-500 text-slate-950 font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Top Visual: Channel Breakdown Bars */}
          <div className="py-6 border-b border-white/10">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 flex items-center justify-between">
              <span>Traffic & Revenue Share by Ingestion Channel</span>
              <span className="text-[11px] text-slate-500">Verified Sample Cohort</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CHANNEL_BREAKDOWN.map((item) => (
                <div key={item.channel} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-300 mb-2">
                    <span className="font-medium truncate">{item.channel}</span>
                    <span className="font-mono font-bold text-white">{item.percentage}%</span>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden mb-3">
                    <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.percentage}%` }} />
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>{item.sessions.toLocaleString()} sessions</span>
                    <span className="text-emerald-400 font-semibold">{item.revenue}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Filtered Campaigns Table */}
          <div className="pt-6">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center justify-between">
              <span>Campaign Breakdown ({filteredCampaigns.length})</span>
              <span className="text-[11px] text-slate-500">Sorted by Attributed Revenue</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 font-mono">
                    <th className="pb-3 font-semibold">Campaign Identifier</th>
                    <th className="pb-3 font-semibold">Source / Medium</th>
                    <th className="pb-3 font-semibold text-right">Clicks</th>
                    <th className="pb-3 font-semibold text-right">Conversions</th>
                    <th className="pb-3 font-semibold text-right">CVR</th>
                    <th className="pb-3 font-semibold text-right">Spend</th>
                    <th className="pb-3 font-semibold text-right">Revenue</th>
                    <th className="pb-3 font-semibold text-right">ROAS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-mono text-slate-300">
                  {filteredCampaigns.length > 0 ? (
                    filteredCampaigns.map((c) => (
                      <tr key={c.id} className="hover:bg-slate-900/60 transition-colors">
                        <td className="py-3 font-medium text-white flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span>{c.name}</span>
                        </td>
                        <td className="py-3">
                          <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                            {c.source} / {c.medium}
                          </span>
                        </td>
                        <td className="py-3 text-right">{c.clicks.toLocaleString()}</td>
                        <td className="py-3 text-right">{c.conversions.toLocaleString()}</td>
                        <td className="py-3 text-right text-emerald-400">{c.conversionRate}</td>
                        <td className="py-3 text-right text-slate-400">{c.spend}</td>
                        <td className="py-3 text-right font-bold text-white">{c.revenue}</td>
                        <td className="py-3 text-right font-bold text-emerald-400">{c.roas}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={8} className="py-8 text-center text-slate-500 font-mono">
                        No campaigns match your filter.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Table Footer */}
          <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400 font-mono gap-2">
            <span>Aggregated telemetry sample • First-touch model applied</span>
            <a href="#builder" className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1">
              Build a Trackable URL Now <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
