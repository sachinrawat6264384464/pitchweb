import React from "react";
import { STORE_INFO, generateWhatsAppLink } from "@/lib/products-data";
import { MapPin, Clock, Phone, Navigation, CheckCircle2, Car, Shirt, CreditCard, Sparkles, MessageCircle } from "lucide-react";

export function StoreLocation() {
  const amenities = [
    { icon: <Shirt className="w-4 h-4 text-orange-600" />, label: "Spacious Trial Rooms" },
    { icon: <Sparkles className="w-4 h-4 text-orange-600" />, label: "On-Spot Master Tailor Fitting" },
    { icon: <Car className="w-4 h-4 text-orange-600" />, label: "Easy 60-Ft Road Parking" },
    { icon: <CreditCard className="w-4 h-4 text-orange-600" />, label: "UPI & All Cards Accepted" },
  ];

  return (
    <section id="store-location" className="py-16 sm:py-24 bg-transparent border-t border-stone-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-xs font-bold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Our Indore Store</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-stone-900">
            Experience the Royal Fit <span className="orange-gradient-text">In Person</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Touch the fabrics, try different colors, and get tailor-fitted for your upcoming family celebration or wedding event.
          </p>
        </div>

        {/* Store Detail Box & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Store Info Card */}
          <div className="lg:col-span-5 bg-stone-50 border border-stone-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm space-y-6">
            <div className="space-y-6">
              
              <div>
                <span className="text-[11px] font-black uppercase tracking-widest text-orange-600">
                  Flagship Showroom
                </span>
                <h3 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                  Mayra Ethnic For Men
                </h3>
                <p className="text-xs text-stone-500 italic mt-0.5">
                  &ldquo;Where Royalty Meets Affordability 👑&rdquo;
                </p>
              </div>

              {/* Address Block */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
                <div className="p-2.5 rounded-xl bg-orange-100 text-orange-600 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block">
                    Store Address
                  </span>
                  <p className="text-xs sm:text-sm text-stone-800 leading-snug font-medium">
                    {STORE_INFO.address}
                  </p>
                  <span className="text-[11px] text-stone-500 block pt-1">
                    (Landmark: Near Mahalaxmi Nagar 60-feet Main Road)
                  </span>
                </div>
              </div>

              {/* Timings Block */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
                <div className="p-2.5 rounded-xl bg-orange-100 text-orange-600 shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block">
                    Store Hours
                  </span>
                  <p className="text-xs sm:text-sm text-stone-800 leading-snug font-bold">
                    {STORE_INFO.timings}
                  </p>
                  <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Open Today (No Weekly Off)
                  </span>
                </div>
              </div>

              {/* Phone Block */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
                <div className="p-2.5 rounded-xl bg-orange-100 text-orange-600 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block">
                    Phone &amp; WhatsApp
                  </span>
                  <p className="text-xs sm:text-sm text-stone-800 leading-snug font-bold">
                    {STORE_INFO.phone}
                  </p>
                  <span className="text-[11px] text-stone-500 block">
                    Direct call or WhatsApp video assistance
                  </span>
                </div>
              </div>

              {/* Amenities Grid */}
              <div className="pt-2">
                <span className="text-xs font-bold text-stone-700 block mb-2">
                  In-Store Facilities:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {amenities.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2 rounded-lg bg-white border border-stone-200 text-xs text-stone-700 shadow-2xs"
                    >
                      {item.icon}
                      <span className="text-[11px] font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Direction CTAs */}
            <div className="pt-4 border-t border-stone-200 space-y-2">
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-white bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 hover:from-orange-500 hover:to-orange-600 shadow-md shadow-orange-600/20 text-sm transition-all"
              >
                <Navigation className="w-4 h-4 fill-white" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href={generateWhatsAppLink("Hi! I would like directions / store location info for visiting today.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Share Location on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Interactive Google Map Preview */}
          <div className="lg:col-span-7 bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm relative min-h-[420px] flex flex-col">
            <div className="p-4 bg-stone-50 border-b border-stone-200 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-stone-800">
                <MapPin className="w-4 h-4 text-orange-600" />
                <span>Mahalaxmi Nagar 60-Ft Road, Indore (MP)</span>
              </div>
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-700 text-xs font-bold flex items-center gap-1"
              >
                <span>Navigate</span>
                <Navigation className="w-3 h-3" />
              </a>
            </div>

            {/* Google Map Iframe */}
            <div className="w-full flex-1 relative bg-stone-100 min-h-[360px]">
              <iframe
                title="Mayra Ethnic Indore Store Location"
                src="https://maps.google.com/maps?q=21%20Veena%20Nagar%2060feet%20Road%20Mahalaxmi%20Nagar%2C%20Indore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "380px" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
