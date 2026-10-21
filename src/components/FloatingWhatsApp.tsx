"use client";

import React, { useState, useEffect } from "react";
import { STORE_INFO, generateWhatsAppLink } from "@/lib/products-data";
import { MessageCircle, X } from "lucide-react";

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 select-none">
      {/* Pop-up message tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#181410] border border-amber-500/40 text-stone-200 text-xs px-3.5 py-2.5 rounded-2xl shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>
            Need help or design photos? <strong className="text-amber-400">Chat with us!</strong>
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-white ml-1"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={generateWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-900/60 hover:scale-110 transition-all duration-300 border-2 border-emerald-400"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-stone-900 animate-pulse" />
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
}
