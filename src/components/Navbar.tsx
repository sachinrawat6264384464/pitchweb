"use client";

import React, { useState } from "react";
import { Logo } from "./Logo";
import { STORE_INFO, generateWhatsAppLink } from "@/lib/products-data";
import { Phone, MessageCircle, Menu, X, MapPin, Sparkles } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0d0b09]/90 backdrop-blur-md border-b border-amber-900/30 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center focus:outline-none">
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-300">
            <a
              href="#collections"
              className="hover:text-amber-400 transition-colors py-1 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Collections
            </a>
            <a href="#kurtas" className="hover:text-amber-400 transition-colors py-1">
              Kurtas
            </a>
            <a href="#jodhpuris" className="hover:text-amber-400 transition-colors py-1">
              Jodhpuris
            </a>
            <a href="#jackets" className="hover:text-amber-400 transition-colors py-1">
              Jackets
            </a>
            <a href="#blazers" className="hover:text-amber-400 transition-colors py-1">
              Blazers
            </a>
            <a
              href="#store-location"
              className="hover:text-amber-400 transition-colors py-1 flex items-center gap-1"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Store Location
            </a>
            <a href="#reviews" className="hover:text-amber-400 transition-colors py-1">
              Customer Reviews
            </a>
            <a href="#faq" className="hover:text-amber-400 transition-colors py-1">
              FAQ
            </a>
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${STORE_INFO.phoneRaw}`}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-stone-200 bg-stone-900/80 hover:bg-stone-800 border border-stone-800 hover:border-amber-500/40 rounded-lg transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{STORE_INFO.phone}</span>
            </a>

            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 hover:from-orange-500 hover:to-orange-600 rounded-lg shadow-lg shadow-orange-600/30 transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Order</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 sm:hidden"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg bg-stone-900 text-stone-300 hover:text-white hover:bg-stone-800 border border-stone-800"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#110e0b] border-b border-amber-900/40 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 text-sm font-medium text-stone-300">
            <a
              href="#collections"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg bg-stone-900/90 hover:bg-stone-800 text-amber-300"
            >
              All Collections
            </a>
            <a
              href="#kurtas"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg bg-stone-900/90 hover:bg-stone-800"
            >
              Designer Kurtas
            </a>
            <a
              href="#jodhpuris"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg bg-stone-900/90 hover:bg-stone-800"
            >
              Royal Jodhpuris
            </a>
            <a
              href="#jackets"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg bg-stone-900/90 hover:bg-stone-800"
            >
              Nehru Jackets
            </a>
            <a
              href="#blazers"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg bg-stone-900/90 hover:bg-stone-800"
            >
              Blazers & Suits
            </a>
            <a
              href="#store-location"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg bg-stone-900/90 hover:bg-stone-800 text-amber-400"
            >
              📍 Store Location
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg bg-stone-900/90 hover:bg-stone-800"
            >
              Reviews
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg bg-stone-900/90 hover:bg-stone-800"
            >
              FAQ
            </a>
          </div>

          <div className="pt-2 border-t border-stone-800/80 flex flex-col gap-2">
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold text-white bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 rounded-lg shadow-md shadow-orange-600/30"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Inquire &amp; Order on WhatsApp</span>
            </a>

            <a
              href={`tel:${STORE_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-stone-300 bg-stone-900 border border-stone-800 rounded-lg"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Store: {STORE_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
