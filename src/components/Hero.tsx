import React from "react";
import { STORE_INFO, generateWhatsAppLink } from "@/lib/products-data";
import { Crown, Sparkles, MapPin, MessageCircle, ArrowRight, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#080706]">
      {/* Full Width & Height Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=2000&q=85"
          alt="Mayra Ethnic For Men Royal Collection"
          className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-110 scale-105"
        />
        {/* Deep Royal Dark Orange Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-[#080706]/70 to-[#080706]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080706]/85 via-transparent to-[#080706]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-600/15 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Content Container - Centered, Clean, and High-Impact */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 flex flex-col items-center space-y-6">
        
        {/* Minimal Royal Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-950/60 border border-orange-500/40 text-orange-400 text-xs sm:text-sm font-semibold tracking-wider backdrop-blur-md">
          <Crown className="w-4 h-4 text-orange-500" />
          <span>MAYRA ETHNIC FOR MEN • INDORE</span>
        </div>

        {/* Clean, Bold Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black text-white tracking-tight leading-[1.12] drop-shadow-lg">
          Where Royalty Meets <br />
          <span className="orange-gradient-text drop-shadow-md">
            Affordability 👑
          </span>
        </h1>

        {/* Short, Punchy Subtitle */}
        <p className="text-base sm:text-xl text-stone-200 max-w-2xl font-light leading-relaxed drop-shadow">
          Kurtas, Royal Jodhpuris, Silk Jackets &amp; Blazers starting from just{" "}
          <strong className="text-orange-400 font-bold bg-orange-950/80 px-2 py-0.5 rounded border border-orange-500/30">
            {STORE_INFO.startingPrice}
          </strong>
        </p>

        {/* Action CTAs in Deep Royal Orange */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-3">
          <a
            href="#collections"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 hover:from-orange-500 hover:to-orange-600 shadow-xl shadow-orange-600/30 hover:shadow-orange-600/50 transition-all hover:scale-105 text-sm sm:text-base"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>Explore Collection</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-emerald-400 bg-stone-950/80 hover:bg-stone-900 border border-emerald-500/40 hover:border-emerald-500 shadow-xl backdrop-blur-md transition-all hover:scale-105 text-sm sm:text-base"
          >
            <MessageCircle className="w-5 h-5 fill-emerald-500 text-stone-950" />
            <span>Order on WhatsApp</span>
          </a>
        </div>

        {/* Minimal Bottom Store Anchor */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-stone-300 font-medium">
          <a
            href={STORE_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-orange-400 transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-orange-500" />
            <span>Mahalaxmi Nagar 60-Ft Road, Indore</span>
          </a>

          <span className="hidden sm:inline text-stone-600">•</span>

          <div className="flex items-center gap-1">
            <span className="text-orange-400 font-bold flex items-center gap-0.5">
              5.0 <Star className="w-3 h-3 fill-orange-400 text-orange-400 inline" />
            </span>
            <span className="text-stone-400">Indore Grooms&apos; Choice</span>
          </div>

          <span className="hidden sm:inline text-stone-600">•</span>

          <span className="text-stone-400">Open All 7 Days (11 AM – 10 PM)</span>
        </div>

      </div>
    </section>
  );
}
