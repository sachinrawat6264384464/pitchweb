import React from "react";
import { Logo } from "./Logo";
import { STORE_INFO, generateWhatsAppLink } from "@/lib/products-data";
import { MapPin, Phone, MessageCircle, Clock, ExternalLink, Heart } from "lucide-react";
import { InstagramIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="bg-[#080706] border-t border-stone-800 text-stone-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Logo size="lg" showTagline={false} />
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Indore&apos;s leading men&apos;s designer ethnic wear store. Offering bespoke-quality Kurtas, Royal Jodhpuris, Silk Jackets, and Tuxedos at unmatched honest prices.
            </p>
            <p className="text-amber-400 font-bold text-xs italic">
              &ldquo;Where Royalty Meets Affordability 👑&rdquo;
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-900 border border-stone-800 hover:border-pink-500/50 flex items-center justify-center text-stone-300 hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-900 border border-stone-800 hover:border-emerald-500/50 flex items-center justify-center text-stone-300 hover:text-emerald-400 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-900 border border-stone-800 hover:border-amber-500/50 flex items-center justify-center text-stone-300 hover:text-amber-400 transition-colors"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider text-amber-400">
              Collections
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#collections" className="hover:text-amber-300 transition-colors">
                  Designer Kurtas (Starts ₹600)
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-amber-300 transition-colors">
                  Royal Jodhpuri &amp; Bandhgalas
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-amber-300 transition-colors">
                  Nehru &amp; Modi Silk Jackets
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-amber-300 transition-colors">
                  Cocktail Blazers &amp; Tuxedos
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-amber-300 transition-colors">
                  Groom &amp; Barat Wedding Squad Sets
                </a>
              </li>
              <li>
                <a href="#store-location" className="hover:text-amber-300 transition-colors">
                  In-Store Custom Alterations
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Store Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider text-amber-400">
              Indore Store Address
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  {STORE_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${STORE_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                  {STORE_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{STORE_INFO.timings}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
              >
                <span>View Store on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
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
