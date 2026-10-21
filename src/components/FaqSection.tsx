"use client";

import React, { useState } from "react";
import { FAQS } from "@/lib/products-data";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#0e0b08] border-t border-stone-800/80 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-white">
            Frequently Asked <span className="gold-gradient-text">Questions</span>
          </h2>
          <p className="text-stone-400 text-xs sm:text-sm">
            Everything you need to know about visiting Mayra Ethnic in Indore, alterations, prices, and WhatsApp orders.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#14110e] border border-stone-800 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-900/50 transition-colors"
                >
                  <span className="font-serif font-bold text-sm sm:text-base text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full bg-stone-900 border border-stone-800 text-amber-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-amber-500/10 border-amber-500/30" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-300 leading-relaxed border-t border-stone-800/60 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
