import React from "react";
import { STORE_INFO, generateWhatsAppLink } from "@/lib/products-data";
import { Crown, Sparkles, MapPin, MessageCircle, ArrowRight, ShieldCheck, Scissors, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-[#0d0b09] via-[#14100c] to-[#0c0a09]">
      {/* Subtle Royal Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-amber-500/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-40 right-0 w-80 h-80 bg-orange-600/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide">
              <Crown className="w-4 h-4 text-amber-400" />
              <span>MAYRA ETHNIC FOR MEN • INDORE</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-serif tracking-tight text-white leading-[1.15]">
              Where Royalty Meets <br />
              <span className="gold-gradient-text drop-shadow-sm">
                Affordability 👑
              </span>
            </h1>

            {/* Speciality Badge Pill */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-bold uppercase tracking-widest text-amber-200/90">
              <span className="bg-stone-900/90 border border-amber-900/40 px-3 py-1 rounded-md">Kurta</span>
              <span className="text-amber-500/60">•</span>
              <span className="bg-stone-900/90 border border-amber-900/40 px-3 py-1 rounded-md">Jodhpuri</span>
              <span className="text-amber-500/60">•</span>
              <span className="bg-stone-900/90 border border-amber-900/40 px-3 py-1 rounded-md">Jacket</span>
              <span className="text-amber-500/60">•</span>
              <span className="bg-stone-900/90 border border-amber-900/40 px-3 py-1 rounded-md">Blazer</span>
              <span className="text-amber-500/60">•</span>
              <span className="bg-stone-900/90 border border-amber-900/40 px-3 py-1 rounded-md">Sherwani</span>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-stone-300 max-w-2xl font-normal leading-relaxed">
              Indore&apos;s favorite destination for designer men&apos;s ethnic wear. Experience regal craftsmanship, rich fabrics, and precision bespoke fits for Weddings, Sangeet, Festivals &amp; Celebrations.
            </p>

            {/* Price Highlight Banner */}
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-950/60 via-stone-900 to-amber-950/40 border border-amber-500/30 flex items-center gap-3 w-full max-w-lg">
              <div className="w-10 h-10 rounded-lg bg-amber-500 text-stone-950 flex items-center justify-center font-black text-lg shrink-0 shadow-md">
                ₹
              </div>
              <div className="text-left text-xs sm:text-sm">
                <span className="text-amber-400 font-bold uppercase tracking-wider block">Unbeatable Indore Price</span>
                <span className="text-stone-200">
                  Designer Kurtas &amp; Festive Collection Starts From Just <strong className="text-amber-300 font-extrabold text-base">{STORE_INFO.startingPrice}</strong>
                </span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
              <a
                href="#collections"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-stone-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all hover:scale-[1.02]"
              >
                <Sparkles className="w-4 h-4 fill-stone-950" />
                <span>Explore Full Collection</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-emerald-400 bg-stone-900/90 hover:bg-stone-800 border border-emerald-500/40 hover:border-emerald-500 shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-emerald-500 text-stone-900" />
                <span>Inquire on WhatsApp</span>
              </a>

              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-3.5 text-xs font-semibold text-stone-400 hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4 text-amber-500" />
                <span>Visit Store</span>
              </a>
            </div>

            {/* Key Trust Signals */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-800/80 w-full max-w-xl text-stone-400 text-xs">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="font-extrabold text-amber-400 text-lg flex items-center gap-1">
                  5.0 <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 inline" />
                </span>
                <span>Top Rated in Indore</span>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="font-extrabold text-amber-400 text-lg">1000+</span>
                <span>Designer Styles</span>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="font-extrabold text-amber-400 text-lg flex items-center gap-1">
                  <Scissors className="w-4 h-4 inline" /> In-Store
                </span>
                <span>Instant Fitting Tailor</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Product Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Gradient Border */}
              <div className="p-2 rounded-3xl bg-gradient-to-br from-amber-500/40 via-orange-600/20 to-amber-900/40 shadow-2xl shadow-amber-500/10">
                <div className="bg-[#14110e] rounded-[22px] overflow-hidden border border-amber-500/20">
                  
                  {/* Hero Showcase Image */}
                  <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-stone-900">
                    <img
                      src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80"
                      alt="Mayra Ethnic Royal Groom & Jodhpuri Collection"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14110e] via-transparent to-black/30" />
                    
                    {/* Top Floating Badge */}
                    <div className="absolute top-4 left-4 bg-stone-950/80 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
                      <Crown className="w-3.5 h-3.5 text-amber-400" />
                      <span>Royal Bandhgala &amp; Jodhpuri</span>
                    </div>

                    <div className="absolute top-4 right-4 bg-amber-500 text-stone-950 text-xs font-extrabold px-3 py-1 rounded-full shadow-lg">
                      Range from ₹600/-
                    </div>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-serif font-bold text-lg text-white">
                          Maharaja Jodhpuri &amp; Kurta Sets
                        </h3>
                        <p className="text-xs text-amber-400/90 font-medium">
                          Indore Flagship Store • Mahalaxmi Nagar
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-stone-400 block">Starting at</span>
                        <span className="text-xl font-black text-amber-400">₹899</span>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between border-t border-stone-800 text-xs text-stone-400">
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>Premium Raw Silk &amp; Khadi</span>
                      </div>
                      <a
                        href={generateWhatsAppLink("Maharaja Jodhpuri & Kurta Sets", 899)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1"
                      >
                        <span>Check Availability</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating Bottom Testimonial Pill */}
              <div className="absolute -bottom-6 -left-4 sm:left-4 bg-[#1e1914] border border-amber-500/30 rounded-2xl p-3 shadow-2xl flex items-center gap-3 backdrop-blur-md">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-stone-950 font-bold text-sm shrink-0">
                  👑
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-[11px] text-stone-300 font-semibold ml-1">5.0</span>
                  </div>
                  <p className="text-xs font-semibold text-white">
                    &ldquo;Best ethnic store in Indore for weddings!&rdquo;
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
