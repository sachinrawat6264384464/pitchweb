import React from "react";
import { STORE_INFO, generateWhatsAppLink } from "@/lib/products-data";
import { MapPin, Clock, Phone, Navigation, CheckCircle2, Car, Shirt, CreditCard, Sparkles, MessageCircle } from "lucide-react";

export function StoreLocation() {
  const amenities = [
    { icon: <Shirt className="w-4 h-4 text-amber-400" />, label: "Spacious Trial Rooms" },
    { icon: <Sparkles className="w-4 h-4 text-amber-400" />, label: "On-Spot Master Tailor Fitting" },
    { icon: <Car className="w-4 h-4 text-amber-400" />, label: "Easy 60-Ft Road Parking" },
    { icon: <CreditCard className="w-4 h-4 text-amber-400" />, label: "UPI & All Cards Accepted" },
  ];

  return (
    <section id="store-location" className="py-16 sm:py-24 bg-[#0e0b08] border-t border-stone-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Our Indore Store</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-white">
            Experience the Royal Fit <span className="gold-gradient-text">In Person</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base">
            Touch the fabrics, try different colors, and get tailor-fitted for your upcoming family celebration or wedding event.
          </p>
        </div>

        {/* Store Detail Box & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Store Info Card */}
          <div className="lg:col-span-5 bg-[#15110d] border border-amber-900/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl space-y-6">
            <div className="space-y-6">
              
              <div>
                <span className="text-[11px] font-black uppercase tracking-widest text-amber-400">
                  Flagship Showroom
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mt-1">
                  Mayra Ethnic For Men
                </h3>
                <p className="text-xs text-stone-400 italic mt-0.5">
                  &ldquo;Where Royalty Meets Affordability 👑&rdquo;
                </p>
              </div>

              {/* Address Block */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-stone-900/90 border border-stone-800">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                    Store Address
                  </span>
                  <p className="text-xs sm:text-sm text-stone-200 leading-snug font-medium">
                    {STORE_INFO.address}
                  </p>
                  <span className="text-[11px] text-stone-400 block pt-1">
                    (Landmark: Near Mahalaxmi Nagar 60-feet Main Road)
                  </span>
                </div>
              </div>

              {/* Timings Block */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-stone-900/90 border border-stone-800">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                    Store Hours
                  </span>
                  <p className="text-xs sm:text-sm text-stone-200 leading-snug font-bold">
                    {STORE_INFO.timings}
                  </p>
                  <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Open Today (No Weekly Off)
                  </span>
                </div>
              </div>

              {/* Phone Block */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-stone-900/90 border border-stone-800">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                    Phone &amp; WhatsApp
                  </span>
                  <p className="text-xs sm:text-sm text-stone-200 leading-snug font-bold">
                    {STORE_INFO.phone}
                  </p>
                  <span className="text-[11px] text-stone-400 block">
                    Direct call or WhatsApp video assistance
                  </span>
                </div>
              </div>

              {/* Amenities Grid */}
              <div className="pt-2">
                <span className="text-xs font-bold text-stone-300 block mb-2">
                  In-Store Facilities:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {amenities.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2 rounded-lg bg-stone-900/60 border border-stone-800/80 text-xs text-stone-300"
                    >
                      {item.icon}
                      <span className="text-[11px] font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Direction CTAs */}
            <div className="pt-4 border-t border-stone-800 space-y-2">
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-stone-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-xl shadow-amber-500/20 text-sm transition-all"
              >
                <Navigation className="w-4 h-4 fill-stone-950" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href={generateWhatsAppLink("Hi! I would like directions / store location info for visiting today.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold text-emerald-400 bg-stone-900 hover:bg-stone-800 border border-emerald-500/30 text-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Share Location on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Interactive Google Map Preview */}
          <div className="lg:col-span-7 bg-[#15110d] border border-amber-900/40 rounded-3xl overflow-hidden shadow-2xl relative min-h-[420px] flex flex-col">
            <div className="p-4 bg-stone-900/90 border-b border-stone-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-stone-200">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Mahalaxmi Nagar 60-Ft Road, Indore (MP)</span>
              </div>
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 text-xs font-bold flex items-center gap-1"
              >
                <span>Navigate</span>
                <Navigation className="w-3 h-3" />
              </a>
            </div>

            {/* Google Map Iframe */}
            <div className="w-full flex-1 relative bg-stone-950 min-h-[360px]">
              <iframe
                title="Mayra Ethnic Indore Store Location"
                src="https://maps.google.com/maps?q=21%20Veena%20Nagar%2060feet%20Road%20Mahalaxmi%20Nagar%2C%20Indore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "380px" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter contrast-105"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
