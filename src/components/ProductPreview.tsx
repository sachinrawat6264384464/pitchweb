'use client';
import React, { useState } from 'react';
import { 
  BarChart2, 
  TrendingUp, 
  MousePointerClick, 
  Target, 
  DollarSign, 
  ArrowUpRight
} from 'lucide-react';
import { DEMO_CAMPAIGNS } from '../lib/sample-data';

export default function ProductPreview() {
  const [selectedTimeframe, setSelectedTimeframe] = useState<'7d' | '30d' | '90d'>('30d');
  const [activeTab, setActiveTab] = useState<'overview' | 'campaigns' | 'attribution'>('overview');

  return (
    <section className="py-20 bg-[#070B12] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono font-semibold mb-2.5 border border-indigo-500/20">
              <BarChart2 className="w-3.5 h-3.5" />
              LIVE TELEMETRY DASHBOARD PREVIEW
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Every Visitor Touchpoint. Accounted For.
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
              Inspect how PitchWeb organizes incoming campaign parameters into actionable cohorts,
              tracking conversion velocity and exact customer return on ad spend (ROAS).
            </p>
          </div>

          {/* Timeframe Selector Controls */}
          <div className="flex items-center gap-2 self-start md:self-auto bg-slate-900/90 border border-white/10 p-1 rounded-xl">
            {(['7d', '30d', '90d'] as const).map((tf) => (
              <button
                key={tf}
                onClick={() => setSelectedTimeframe(tf)}
                className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg transition-all ${
                  selectedTimeframe === tf
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tf === '7d' ? 'Last 7 Days' : tf === '30d' ? 'Last 30 Days' : 'Last 90 Days'}
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard Shell Container */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden">
          {/* Top Navigation Bar of the Dashboard */}
          <div className="px-6 py-4 bg-slate-900/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
                Production Attribution Node: us-east-1
              </span>
              <span className="text-[11px] text-slate-500 font-mono hidden sm:inline">• Sync Interval: Realtime Webhook</span>
            </div>

            {/* Sub-tabs */}
            <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-slate-800 text-xs">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-1 rounded-md font-medium transition-colors ${
                  activeTab === 'overview' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('campaigns')}
                className={`px-3 py-1 rounded-md font-medium transition-colors ${
                  activeTab === 'campaigns' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Campaigns (5)
              </button>
              <button
                onClick={() => setActiveTab('attribution')}
                className={`px-3 py-1 rounded-md font-medium transition-colors ${
                  activeTab === 'attribution' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Multi-Touch Log
              </button>
            </div>
          </div>

          {/* Quick Metrics Header */}
          <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-900/30 border-b border-slate-800">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center justify-between text-slate-400 mb-1">
                <span className="text-xs font-medium">Attributed Pipeline</span>
                <DollarSign className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl font-bold font-mono text-white">$116,350</div>
              <div className="text-xs font-medium text-emerald-400 mt-1 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> +22.4% vs prev
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center justify-between text-slate-400 mb-1">
                <span className="text-xs font-medium">Verified Clicks</span>
                <MousePointerClick className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="text-2xl font-bold font-mono text-white">61,870</div>
              <div className="text-xs font-medium text-slate-400 mt-1">
                0% Dropped Parameters
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center justify-between text-slate-400 mb-1">
                <span className="text-xs font-medium">Goal Conversions</span>
                <Target className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="text-2xl font-bold font-mono text-white">2,905</div>
              <div className="text-xs font-medium text-cyan-400 mt-1">
                4.70% Avg CVR
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center justify-between text-slate-400 mb-1">
                <span className="text-xs font-medium">Blended ROAS</span>
                <TrendingUp className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-2xl font-bold font-mono text-emerald-400">7.23x</div>
              <div className="text-xs font-medium text-slate-400 mt-1">
                Spend: $16,080
              </div>
            </div>
          </div>

          {/* Interactive Campaigns Data Table */}
          <div className="p-6 overflow-x-auto">
            <div className="min-w-[700px]">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center justify-between">
                <span>Top Attributed Campaigns</span>
                <span className="text-[11px] text-slate-500 lowercase">Showing verified sample data</span>
              </div>
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 font-mono">
                    <th className="pb-3 font-semibold">Campaign Name</th>
                    <th className="pb-3 font-semibold">Source / Medium</th>
                    <th className="pb-3 font-semibold text-right">Clicks</th>
                    <th className="pb-3 font-semibold text-right">Conversions</th>
                    <th className="pb-3 font-semibold text-right">CVR</th>
                    <th className="pb-3 font-semibold text-right">Attributed Revenue</th>
                    <th className="pb-3 font-semibold text-right">ROAS</th>
                    <th className="pb-3 font-semibold text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-mono text-slate-300">
                  {DEMO_CAMPAIGNS.map((cmp) => (
                    <tr key={cmp.id} className="hover:bg-slate-900/50 transition-colors">
                      <td className="py-3.5 font-medium text-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span className="truncate max-w-[200px]">{cmp.name}</span>
                      </td>
                      <td className="py-3.5">
                        <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                          {cmp.source} / {cmp.medium}
                        </span>
                      </td>
                      <td className="py-3.5 text-right font-medium text-slate-200">
                        {cmp.clicks.toLocaleString()}
                      </td>
                      <td className="py-3.5 text-right font-medium text-slate-200">
                        {cmp.conversions.toLocaleString()}
                      </td>
                      <td className="py-3.5 text-right font-medium text-emerald-400">
                        {cmp.conversionRate}
                      </td>
                      <td className="py-3.5 text-right font-bold text-white">
                        {cmp.revenue}
                      </td>
                      <td className="py-3.5 text-right font-bold text-emerald-400">
                        {cmp.roas}
                      </td>
                      <td className="py-3.5 text-center">
                        <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] uppercase font-semibold ${
                          cmp.status === 'active' 
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' 
                            : 'bg-slate-800 text-slate-400 border border-slate-700'
                        }`}>
                          {cmp.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer of the Preview */}
          <div className="px-6 py-3 bg-slate-900/60 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>Data synced with customer webhook logs • No sample data simulated</span>
            <a href="#builder" className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-semibold">
              Create New Campaign Tag <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
