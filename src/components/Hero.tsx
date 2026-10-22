import React from "react";
import { STORE_INFO, generateWhatsAppLink } from "@/lib/products-data";
import { Crown, Sparkles, MapPin, MessageCircle, ArrowRight, Star, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-[82vh] lg:min-h-[88vh] flex items-center overflow-hidden bg-transparent">
      {/* Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Warm Radial Ambient Glows for luxury feel */}
        <div className="absolute -top-24 left-1/4 w-[550px] h-[550px] bg-orange-400/10 rounded-full blur-[130px]" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[300px] bg-orange-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Clean, Sharp Typography on Light Canvas */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Minimal Royal Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/90 text-orange-700 text-xs font-bold tracking-wider shadow-xs backdrop-blur-sm">
              <Crown className="w-3.5 h-3.5 text-orange-600" />
              <span>MAYRA ETHNIC FOR MEN • INDORE</span>
            </div>

            {/* Bold, Refined Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-stone-900 tracking-tight leading-[1.14]">
              Where Royalty Meets <br />
              <span className="orange-gradient-text drop-shadow-xs">Affordability</span>
            </h1>

            {/* Short & Clean Subtitle */}
            <p className="text-stone-600 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Indore&apos;s favorite destination for designer Kurta sets, Royal Jodhpuris &amp; Indo-Western wedding wear starting from just{" "}
              <strong className="text-orange-600 font-bold bg-orange-100/70 px-2 py-0.5 rounded border border-orange-200">
                {STORE_INFO.startingPrice}
              </strong>.
            </p>

            {/* Clear Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
              <a
                href="#collections"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 hover:from-orange-500 hover:to-orange-600 shadow-xl shadow-orange-600/30 hover:shadow-orange-600/45 transition-all hover:scale-[1.02] text-sm"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-emerald-700 bg-white hover:bg-emerald-50 border border-emerald-300 hover:border-emerald-500 shadow-md transition-all hover:scale-[1.02] text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-600 text-white" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>

            {/* Minimal Trust & Store Highlights */}
            <div className="pt-6 border-t border-stone-200/90 w-full flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-stone-600 font-medium">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span className="text-stone-900 font-bold">5.0</span>
                <span>Indore Grooms&apos; Choice</span>
              </div>

              <span className="hidden sm:inline text-stone-300">•</span>

              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-orange-600" />
                <span className="text-stone-900 font-bold">1000+</span>
                <span>Designer Styles</span>
              </div>

              <span className="hidden sm:inline text-stone-300">•</span>

              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-orange-600 transition-colors"
              >
                <MapPin className="w-4 h-4 text-orange-600" />
                <span>Mahalaxmi Nagar Store</span>
              </a>
            </div>

          </div>

          {/* Right Column: Royal Visual Card Showcase on White Grid */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Soft Warm Shadow Ambient Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-3xl blur-xl opacity-80" />

              {/* Main Image Frame */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-stone-200/90 bg-white p-2 shadow-2xl shadow-stone-300/60">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-stone-100">
                  <img
                    src="/images/hero-royal.jpg"
                    alt="Mayra Ethnic For Men Indore Royal Groom Collection"
                    className="w-full h-[400px] sm:h-[480px] object-cover object-top hover:scale-105 transition-transform duration-700"
                  />

                  {/* Subtle Image Bottom Fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  {/* Top Badge: Flagship Store Collection */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-stone-200 text-[11px] font-bold text-stone-900 shadow-md">
                    <ShieldCheck className="w-3.5 h-3.5 text-orange-600" />
                    <span>Flagship Store Collection</span>
                  </div>

                  {/* Bottom Overlay Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-stone-200/90 shadow-lg flex items-center justify-between">
                    <div>
                      <p className="text-stone-900 font-serif font-bold text-sm">
                        Royal Jodhpuris &amp; Kurtas
                      </p>
                      <p className="text-xs text-stone-500">
                        Bespoke Tailoring &amp; Ready-to-Wear
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-stone-400 block uppercase tracking-wider font-semibold">Starts At</span>
                      <span className="text-orange-600 font-black text-base">₹600/-</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
