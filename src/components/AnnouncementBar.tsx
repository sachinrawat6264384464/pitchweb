import React from "react";
import { STORE_INFO, generateWhatsAppLink } from "@/lib/products-data";
import { MapPin, Phone, Sparkles } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-orange-600 text-stone-950 font-medium text-xs sm:text-sm py-2 px-4 shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 font-semibold tracking-wide text-center sm:text-left">
          <Sparkles className="w-4 h-4 text-stone-950 animate-pulse shrink-0" />
          <span>
            <strong className="font-bold">Festive & Wedding Offer:</strong> Designer Kurtas & Ethnic Wear Starting at just{" "}
            <span className="bg-stone-950 text-amber-300 px-2 py-0.5 rounded font-black text-xs">
              {STORE_INFO.startingPrice}
            </span>
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <a
            href={STORE_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline text-stone-900 font-bold transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span>Mahalaxmi Nagar, Indore</span>
          </a>

          <span className="hidden md:inline text-stone-900/50">|</span>

          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-stone-950/20 hover:bg-stone-950/30 px-2.5 py-0.5 rounded-full font-bold transition-all text-stone-950"
          >
            <Phone className="w-3 h-3 shrink-0" />
            <span>WhatsApp: {STORE_INFO.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
