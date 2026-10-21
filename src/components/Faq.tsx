'use client';
import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp
} from 'lucide-react';
import { FAQ_DATA } from '../lib/sample-data';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#06090E] border-t border-white/5 relative scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono font-semibold mb-3 border border-indigo-500/20">
            <HelpCircle className="w-3.5 h-3.5" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Answers to Campaign Attribution Questions
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Everything you need to know about UTM parameter hygiene, attribution models, 
            and privacy compliance.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="rounded-2xl bg-slate-900/40 border border-white/10 overflow-hidden transition-all hover:border-white/20"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5 shrink-0 hidden sm:inline-block">
                      {item.category}
                    </span>
                    <span className="font-semibold text-sm sm:text-base text-white">
                      {item.question}
                    </span>
                  </div>
                  <span className="p-1 rounded-md text-slate-400 hover:text-white shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-emerald-400" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 animate-fadeIn">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support callout */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/60 border border-white/10 text-center text-xs sm:text-sm text-slate-400">
          Have a unique tracking setup or custom domain need?{' '}
          <a href="#builder" className="text-emerald-400 hover:text-emerald-300 font-semibold underline underline-offset-2">
            Try generating a campaign link in the builder
          </a>{' '}
          or contact our engineering team.
        </div>
      </div>
    </section>
  );
}
