"use client";

import React, { useState } from "react";
import { STORE_INFO, generateWhatsAppLink } from "@/lib/products-data";
import { Sparkles, MessageCircle, Crown, ArrowRight, Check, HeartHandshake } from "lucide-react";

export function WeddingLookbook() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const occasions = [
    {
      id: "haldi",
      badge: "Day 1 • Haldi & Puja",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
      title: "Sunshine Chikankari & Pure Cotton Kurtas",
      tagline: "Vibrant, comfortable & celebration-ready",
      price: "From ₹600/-",
      image: "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&w=900&q=85",
      colors: ["Haldi Yellow", "Ivory White", "Pastel Peach", "Mint Green"],
      features: [
        "Lightweight breathable fabric with cotton lining",
        "Handcrafted tone-on-tone Lucknowi embroidery",
        "Pairs with matching churidar or classic dhoti",
      ],
      whatsappMsg: "Hi! I am looking for Haldi/Puja Kurta sets at Mayra Ethnic Indore.",
    },
    {
      id: "sangeet",
      badge: "Day 2 • Sangeet & Mehendi",
      badgeColor: "bg-orange-100 text-orange-800 border-orange-200",
      title: "Royal Brocade & Banarasi Nehru Jackets",
      tagline: "High-energy dance comfort with regal flair",
      price: "From ₹899/-",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=85",
      colors: ["Mustard Gold", "Royal Wine", "Emerald Green", "Teal Blue"],
      features: [
        "Banarasi jacquard woven silk with satin lining",
        "Antique brass lion-crested buttons",
        "Layer over plain contrasting kurta sets",
      ],
      whatsappMsg: "Hi! I am inquiring about Nehru & Modi Jacket collections for Sangeet.",
    },
    {
      id: "barat",
      badge: "Day 3 • The Grand Barat",
      badgeColor: "bg-red-100 text-red-800 border-red-200",
      title: "Imperial Bandhgala Jodhpuri Suits",
      tagline: "The signature groom & brother silhouette",
      price: "From ₹2,199/-",
      image: "/images/hero-royal.jpg",
      colors: ["Midnight Blue", "Jet Black", "Matka Maroon", "Antique Gold"],
      features: [
        "Structured imperial collar with custom metallic buttons",
        "Rich Italian Matka silk blend with regal drape",
        "Free on-spot master tailor shoulder & sleeve fitting",
      ],
      whatsappMsg: "Hi! I want to check out Royal Jodhpuri & Wedding Barat suits.",
    },
    {
      id: "reception",
      badge: "Day 4 • Reception & Cocktail",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
      title: "Indo-Western Tuxedos & Party Blazers",
      tagline: "Contemporary cuts for cocktail glamour",
      price: "From ₹1,999/-",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=85",
      colors: ["Midnight Navy", "Charcoal Black", "Wine Crimson", "Emerald"],
      features: [
        "Sleek shawl lapels with satin contrast finish",
        "Modern slim-fit tailored European-Indian fusion cut",
        "Perfect for receptions, family dinners & after-parties",
      ],
      whatsappMsg: "Hi! I want to inquire about Reception Blazers and Tuxedos.",
    },
  ];

  const currentOccasion = occasions[activeTab];

  return (
    <section id="lookbook" className="py-16 sm:py-24 bg-transparent border-t border-stone-200/80 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-xs font-bold uppercase tracking-widest">
            <Crown className="w-3.5 h-3.5" />
            <span>Shaadi &amp; Celebration Style Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-stone-900">
            Style by <span className="orange-gradient-text">Occasion</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            From sunshine Haldi ceremonies to the grand Barat and cocktail Reception—explore tailored looks for every wedding function.
          </p>
        </div>

        {/* Occasion Switcher Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10">
          {occasions.map((occ, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={occ.id}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? "bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md shadow-orange-500/25 scale-[1.02]"
                    : "bg-white text-stone-700 hover:text-black hover:bg-stone-50 border border-stone-200 shadow-2xs"
                }`}
              >
                <span>{occ.badge.split("•")[1] || occ.badge}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-md ${
                    isActive ? "bg-black/20 text-white" : "bg-orange-50 text-orange-700 font-extrabold"
                  }`}
                >
                  {occ.price}
                </span>
              </button>
            );
          })}
        </div>

        {/* Featured Showcase Card for Selected Occasion */}
        <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-10 shadow-sm hover:shadow-xl transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-100 border border-stone-200 shadow-md h-80 sm:h-[440px] group">
              <img
                src={currentOccasion.image}
                alt={currentOccasion.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Floating Occasion Badge */}
              <div className="absolute top-4 left-4">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-extrabold border shadow-xs ${currentOccasion.badgeColor}`}>
                  {currentOccasion.badge}
                </span>
              </div>

              {/* Floating Price Pill */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-stone-200 flex items-center justify-between shadow-lg">
                <div>
                  <span className="text-[10px] uppercase font-bold text-stone-500 block">Indore Store Price</span>
                  <span className="font-serif font-black text-stone-900 text-base">{currentOccasion.price}</span>
                </div>
                <span className="text-[11px] font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-md border border-orange-200">
                  Ready Stock
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Look Details & Direct CTA */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 text-left">
            
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
                Recommended Outfit Ensemble
              </span>

              <h3 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 leading-snug">
                {currentOccasion.title}
              </h3>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                {currentOccasion.tagline}
              </p>
            </div>

            {/* Key Features List */}
            <div className="space-y-2.5 pt-1">
              <span className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                Why this look works:
              </span>
              {currentOccasion.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Popular Color Options */}
            <div className="space-y-2 pt-1">
              <span className="text-xs font-bold text-stone-700 block">
                Trending Function Shades:
              </span>
              <div className="flex flex-wrap gap-2">
                {currentOccasion.colors.map((color, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-stone-100 border border-stone-200 text-stone-800 text-xs font-semibold"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={generateWhatsAppLink(currentOccasion.whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 hover:from-orange-500 hover:to-orange-600 shadow-md shadow-orange-500/25 transition-all hover:scale-[1.02] text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Inquire this Look on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#collections"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-200 text-sm transition-colors"
              >
                <span>Browse All Styles</span>
              </a>
            </div>

          </div>

        </div>

        {/* Barat Squad & Group Matching Banner */}
        <div className="mt-8 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border border-orange-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 text-orange-700 flex items-center justify-center shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-stone-900">
                Groom &amp; Barat Squad Matching Packages
              </p>
              <p className="text-xs text-stone-600">
                Need 5 to 50 matching outfits for brothers, cousins, and friends? Get bulk festive pricing.
              </p>
            </div>
          </div>

          <a
            href={generateWhatsAppLink("Hi! I would like to inquire about Barat Squad matching outfits and bulk group discounts.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-sm text-xs whitespace-nowrap transition-all hover:scale-105"
          >
            Get Squad Quote
          </a>
        </div>

      </div>
    </section>
  );
}
