import React from "react";
import { STORE_INFO } from "@/lib/products-data";
import { Crown, Scissors, Gem, HeartHandshake, CheckCircle2, Sparkles } from "lucide-react";

export function WhyChooseUs() {
  const pillars = [
    {
      icon: <Crown className="w-6 h-6 text-amber-400" />,
      title: "Where Royalty Meets Affordability",
      description: `Starting at just ${STORE_INFO.startingPrice}. We bring luxury boutique designs directly to you without the 3x-5x retail markups of traditional designer studios.`,
      highlight: "From ₹600/-",
    },
    {
      icon: <Scissors className="w-6 h-6 text-amber-400" />,
      title: "In-Store Master Tailor",
      description:
        "Every man's physique is unique. Our in-house master tailor adjusts shoulder line, sleeve length, and waist tapering so your outfit fits like a custom bespoke piece.",
      highlight: "Instant Fitting",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-amber-400" />,
      title: "Groom & Barat Squad Packages",
      description:
        "Coordinating theme colors for brothers, friends, and family? We provide bulk matching Nehru jackets, Jodhpuris, and safas with exclusive wedding discounts.",
      highlight: "Wedding Specials",
    },
    {
      icon: <Gem className="w-6 h-6 text-amber-400" />,
      title: "Handpicked Premium Fabrics",
      description:
        "From pure Lucknowi Chikankari on breathable georgette to Italian Matka silk blends and Banarasi brocade jacquards—our materials look opulent in high-definition photos.",
      highlight: "Pure Craft",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0e0b08] border-t border-stone-800/80 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-amber-600/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Mayra Ethnic Promise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-white">
            Why Indore Men Choose <span className="gold-gradient-text">Mayra Ethnic</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base">
            Crafted for kings, priced for everyone. Discover the difference in fit, fabric, and pricing at our Mahalaxmi Nagar showroom.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#15110d] border border-amber-900/30 hover:border-amber-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                  {pillar.icon}
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-400/90 bg-amber-950/60 px-2 py-0.5 rounded">
                    {pillar.highlight}
                  </span>
                  <h3 className="font-serif font-bold text-lg text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-800/80 flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Verified by 1000+ Customers</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
