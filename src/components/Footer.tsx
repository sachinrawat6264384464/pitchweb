import React from "react";
import { Logo } from "./Logo";
import { STORE_INFO, generateWhatsAppLink } from "@/lib/products-data";
import { MapPin, Phone, MessageCircle, Clock, ExternalLink } from "lucide-react";
import { InstagramIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="bg-transparent border-t border-stone-200/80 text-stone-600 text-xs sm:text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Logo size="lg" lightMode={true} showTagline={false} />
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-sm">
              Indore&apos;s leading men&apos;s designer ethnic wear store. Offering bespoke-quality Kurtas, Royal Jodhpuris, Silk Jackets, and Tuxedos at unmatched honest prices.
            </p>
            <p className="text-orange-600 font-bold text-xs italic">
              &ldquo;Where Royalty Meets Affordability 👑&rdquo;
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-stone-200 hover:border-pink-500/50 flex items-center justify-center text-stone-700 hover:text-pink-600 shadow-2xs transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-stone-200 hover:border-emerald-500/50 flex items-center justify-center text-stone-700 hover:text-emerald-600 shadow-2xs transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-stone-200 hover:border-orange-500/50 flex items-center justify-center text-stone-700 hover:text-orange-600 shadow-2xs transition-colors"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-stone-900 text-sm uppercase tracking-wider text-orange-600">
              Collections
            </h4>
            <ul className="space-y-2 text-xs text-stone-600">
              <li>
                <a href="#collections" className="hover:text-orange-600 transition-colors">
                  Designer Kurtas (Starts ₹600)
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-orange-600 transition-colors">
                  Royal Jodhpuri &amp; Bandhgalas
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-orange-600 transition-colors">
                  Nehru &amp; Modi Silk Jackets
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-orange-600 transition-colors">
                  Cocktail Blazers &amp; Tuxedos
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-orange-600 transition-colors">
                  Groom &amp; Barat Wedding Squad Sets
                </a>
              </li>
              <li>
                <a href="#store-location" className="hover:text-orange-600 transition-colors">
                  In-Store Custom Alterations
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Store Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-stone-900 text-sm uppercase tracking-wider text-orange-600">
              Indore Store Address
            </h4>
            <div className="space-y-2.5 text-xs text-stone-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <span>
                  {STORE_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-600 shrink-0" />
                <a href={`tel:${STORE_INFO.phoneRaw}`} className="hover:text-orange-600 transition-colors">
                  {STORE_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-orange-600 shrink-0" />
                <span>{STORE_INFO.timings}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 transition-colors"
              >
                <span>View Store on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Massive Luxury Brand Name Statement */}
        <div className="mt-14 pt-10 border-t border-stone-200/90 text-center select-none overflow-hidden">
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-black tracking-tight text-stone-900/12 hover:text-orange-600/25 transition-colors whitespace-nowrap">
            MAYRA ETHNIC
          </h2>
          <div className="flex items-center justify-center gap-3 mt-2 sm:mt-3">
            <span className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-orange-500/50" />
            <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.35em] text-orange-600">
              For Men • Indore Flagship Store
            </p>
            <span className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-orange-500/50" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            &copy; 2026 Mayra Ethnic For Men. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            <span>Crafted with royal elegance for Indore, India</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
