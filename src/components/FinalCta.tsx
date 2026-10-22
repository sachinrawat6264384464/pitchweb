import React from "react";
import { STORE_INFO, generateWhatsAppLink } from "@/lib/products-data";
import { Crown, MessageCircle, MapPin, Phone, Sparkles } from "lucide-react";

export function FinalCta() {
  return (
    <section className="py-16 sm:py-24 bg-transparent border-t border-stone-200/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-200/30 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-orange-50 via-white to-amber-50 border border-orange-200 rounded-3xl p-8 sm:p-12 text-center shadow-xl relative overflow-hidden">
          
          <div className="w-14 h-14 rounded-2xl bg-orange-100 border border-orange-200 flex items-center justify-center mx-auto mb-6 text-orange-600 shadow-xs">
            <Crown className="w-8 h-8" />
          </div>

          <span className="text-xs uppercase font-extrabold tracking-widest text-orange-600 block mb-2">
            Where Royalty Meets Affordability
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-stone-900 leading-tight max-w-2xl mx-auto mb-4">
            Dress Like a King for Your <br className="hidden sm:inline" />
            <span className="orange-gradient-text">Next Big Celebration</span>
          </h2>

          <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Visit our Mahalaxmi Nagar Indore showroom today or message us on WhatsApp for fast inquiries, video trials, and custom fittings.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 hover:from-orange-500 hover:to-orange-600 shadow-lg shadow-orange-600/25 transition-all hover:scale-105 text-sm"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Inquire on WhatsApp</span>
            </a>

            <a
              href={STORE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 shadow-xs text-sm transition-all"
            >
              <MapPin className="w-4 h-4 text-orange-600" />
              <span>Visit Indore Store</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-orange-200/70 text-xs text-stone-500 flex flex-wrap items-center justify-center gap-6">
            <span>📍 21 Veena Nagar, 60-Ft Road, Mahalaxmi Nagar</span>
            <span>📞 Call: {STORE_INFO.phone}</span>
            <span>⏰ 11:00 AM – 10:00 PM (All 7 Days)</span>
          </div>

        </div>
      </div>
    </section>
  );
}
