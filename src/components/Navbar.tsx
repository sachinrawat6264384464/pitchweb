"use client";

import React from "react";
import { Logo } from "./Logo";
import { STORE_INFO, generateWhatsAppLink } from "@/lib/products-data";
import { Phone, MessageCircle } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo on the Left */}
          <a href="#" className="flex items-center focus:outline-none">
            <Logo size="md" lightMode={true} />
          </a>

          {/* Action CTAs on the Right */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href={`tel:${STORE_INFO.phoneRaw}`}
              className="flex items-center gap-2 px-3 sm:px-3.5 py-2 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-lg transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-orange-600" />
              <span className="hidden sm:inline">{STORE_INFO.phone}</span>
              <span className="sm:hidden">Call</span>
            </a>

            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 hover:from-orange-500 hover:to-orange-600 rounded-lg shadow-md shadow-orange-500/20 transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span className="hidden sm:inline">WhatsApp Order</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
