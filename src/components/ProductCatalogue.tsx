"use client";

import React, { useState, useMemo } from "react";
import { MODEL_COLLECTIONS, generateWhatsAppLink } from "@/lib/products-data";
import { Product, ModelShowcase, DressOption } from "@/lib/types";
import { ProductQuickView } from "./ProductQuickView";
import { Search, SlidersHorizontal, MessageCircle, Eye, Sparkles, X, Check, Shirt, Crown, Layers, Briefcase, HeartHandshake } from "lucide-react";

interface ProductCatalogueProps {
  selectedCategory?: string;
}

interface ModelCardProps {
  model: ModelShowcase;
  onQuickView: (product: Product) => void;
}

function formatPrice(amount: number): string {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function ModelCard({ model, onQuickView }: ModelCardProps) {
  const [selectedDressIdx, setSelectedDressIdx] = useState<number>(0);
  const [isSwitching, setIsSwitching] = useState<boolean>(false);

  const currentDress: DressOption = model.dresses[selectedDressIdx] || model.dresses[0];
  const discountPercent = Math.round(
    ((currentDress.originalPrice - currentDress.price) / currentDress.originalPrice) * 100
  );

  const handleDressSelect = (idx: number) => {
    if (idx === selectedDressIdx) return;
    setIsSwitching(true);
    setSelectedDressIdx(idx);
    setTimeout(() => {
      setIsSwitching(false);
    }, 280);
  };

  return (
    <div
      suppressHydrationWarning
      className="relative h-[610px] sm:h-[660px] rounded-3xl overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-300 border border-stone-200/90 flex flex-col justify-between bg-stone-900"
    >
      {/* Full-Length Standing Model Image ("full image samajh") */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-stone-950">
        <img
          key={currentDress.id}
          src={currentDress.modelImage}
          alt={currentDress.name}
          className={`w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105 ${
            isSwitching ? "opacity-40 scale-102 blur-[1px]" : "opacity-100 scale-100 blur-0"
          }`}
          loading="lazy"
        />

        {/* Top subtle vignette */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/75 via-black/30 to-transparent pointer-events-none" />
      </div>

      {/* Top Header Badges & Interactive Indicator */}
      <div className="relative z-10 p-3.5 sm:p-4 flex items-center justify-between w-full pointer-events-none">
        <div className="flex items-center gap-1.5">
          {currentDress.tag ? (
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 text-white font-black text-[11px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
              {currentDress.tag}
            </span>
          ) : (
            <span className="bg-black/60 backdrop-blur-md text-amber-300 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full border border-amber-500/30">
              {model.category}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          <span
            suppressHydrationWarning
            className="bg-white/95 backdrop-blur-md text-orange-600 text-[11px] font-black px-2.5 py-1 rounded-full shadow-md border border-stone-200"
          >
            {discountPercent}% OFF
          </span>
        </div>
      </div>

      {/* Bottom Floating Glassmorphism Tray & Outfit Switcher */}
      <div className="relative z-10 mt-auto bg-gradient-to-t from-black via-black/85 to-transparent pt-12 p-4 sm:p-5 space-y-3">
        {/* Model Title & Current Dress Details */}
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 bg-amber-500/15 border border-amber-500/40 px-2 py-0.5 rounded">
              {model.category.toUpperCase()}
            </span>
            <span className="text-[11px] text-stone-300 font-medium truncate">
              {model.modelName}
            </span>
          </div>

          <h3 className="font-serif font-bold text-white text-base sm:text-lg leading-snug line-clamp-1 group-hover:text-amber-300 transition-colors">
            {currentDress.name}
          </h3>
          <p className="text-xs text-stone-300 line-clamp-1 mt-0.5 font-light">
            {currentDress.fabric}
          </p>
        </div>

        {/* Price & Size Availability */}
        <div className="flex items-baseline justify-between pt-1 border-t border-white/15">
          <div className="flex items-baseline gap-2">
            <span suppressHydrationWarning className="text-xl sm:text-2xl font-black text-amber-400">
              ₹{formatPrice(currentDress.price)}
            </span>
            <span suppressHydrationWarning className="text-xs text-stone-400 line-through">
              ₹{formatPrice(currentDress.originalPrice)}
            </span>
          </div>
          <span className="text-[11px] text-stone-300">
            {currentDress.sizes.length} sizes in-store
          </span>
        </div>

        {/* DRESS SELECTOR ROW ("niche product ki images ho chhote jese hi me click karu to mbo modlebo bale produc ki dress pehn le smaj") */}
        <div className="pt-2 pb-1 border-t border-white/15">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-extrabold text-amber-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>Tap Dress to Wear on Model:</span>
            </span>
            <span className="text-[10px] text-amber-200/90 bg-amber-500/20 px-2 py-0.5 rounded-full font-bold border border-amber-500/30">
              Outfit {selectedDressIdx + 1} of {model.dresses.length}
            </span>
          </div>

          {/* 4 Small Thumbnail Boxes Right Under the Model */}
          <div className="grid grid-cols-4 gap-2">
            {model.dresses.map((dress, idx) => {
              const isSelected = selectedDressIdx === idx;
              return (
                <button
                  key={dress.id}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDressSelect(idx);
                  }}
                  title={`Click to try: ${dress.name} (₹${dress.price})`}
                  className={`relative rounded-xl overflow-hidden aspect-square border-2 transition-all cursor-pointer group/thumb ${
                    isSelected
                      ? "border-amber-400 ring-2 ring-orange-500 shadow-lg shadow-orange-500/50 scale-105 z-10"
                      : "border-white/30 hover:border-white opacity-60 hover:opacity-100 hover:scale-102"
                  }`}
                >
                  <img
                    src={dress.thumbnail}
                    alt={dress.name}
                    className="w-full h-full object-cover object-top"
                  />

                  {/* Selected check badge */}
                  {isSelected ? (
                    <div className="absolute inset-0 bg-amber-500/25 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center shadow-md">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-black/25 group-hover/thumb:bg-transparent transition-colors" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Buttons: Quick View & WhatsApp Order for the active dress */}
        <div className="flex items-center gap-2 pt-1.5">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onQuickView({
                id: currentDress.id,
                name: currentDress.name,
                category: currentDress.category,
                price: currentDress.price,
                originalPrice: currentDress.originalPrice,
                tag: currentDress.tag,
                fabric: currentDress.fabric,
                colors: currentDress.colors,
                sizes: currentDress.sizes,
                description: currentDress.description,
                image: currentDress.modelImage,
                inStock: currentDress.inStock,
              });
            }}
            className="flex-1 py-2 px-2 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/25 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>

          <a
            href={generateWhatsAppLink(currentDress.name, currentDress.price)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 py-2 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-950/40 transition-all hover:scale-[1.02]"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export function ProductCatalogue({ selectedCategory = "all" }: ProductCatalogueProps) {
  const [currentCategory, setCurrentCategory] = useState<string>(selectedCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState<string>("all");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Category filter tabs
  const categoryTabs = [
    { id: "all", label: "All Collections", icon: Sparkles },
    { id: "kurtas", label: "Designer Kurtas (Starts ₹600)", icon: Shirt },
    { id: "jodhpuris", label: "Royal Jodhpuris", icon: Crown },
    { id: "jackets", label: "Nehru Jackets & Kotis", icon: Layers },
    { id: "indo-western", label: "Barat & Indo-Western", icon: HeartHandshake },
    { id: "blazers", label: "Party Blazers & Tuxedos", icon: Briefcase },
  ];

  // Filter models based on category, search, and price
  const filteredModels = useMemo(() => {
    return MODEL_COLLECTIONS.filter((model) => {
      // Category filter
      if (currentCategory !== "all" && model.category !== currentCategory) {
        return false;
      }

      // Search filter across model and its dresses
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesModelName = model.modelName.toLowerCase().includes(query);
        const matchesSubtitle = model.subtitle.toLowerCase().includes(query);
        const matchesAnyDress = model.dresses.some(
          (d) =>
            d.name.toLowerCase().includes(query) ||
            d.fabric.toLowerCase().includes(query) ||
            d.colors.some((c) => c.toLowerCase().includes(query))
        );
        if (!matchesModelName && !matchesSubtitle && !matchesAnyDress) {
          return false;
        }
      }

      // Price filter: at least one dress in the model fits the price filter
      if (priceFilter !== "all") {
        const fitsPrice = model.dresses.some((dress) => {
          if (priceFilter === "under1000") return dress.price < 1000;
          if (priceFilter === "1000to2500") return dress.price >= 1000 && dress.price <= 2500;
          if (priceFilter === "above2500") return dress.price > 2500;
          return true;
        });
        if (!fitsPrice) return false;
      }

      return true;
    });
  }, [currentCategory, searchQuery, priceFilter]);

  return (
    <section id="collections" className="py-16 sm:py-24 bg-transparent border-t border-stone-200/80 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mahalaxmi Nagar Indore Store Catalogue</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-stone-900">
            Royal Ethnic Wear <span className="orange-gradient-text">Collection</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Standing human models showing real fit. Tap any dress thumbnail below each model to switch outfits instantly!
          </p>
        </div>

        {/* Interactive Try-On Banner Notice */}
        <div className="bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border border-orange-200/90 rounded-2xl p-4 sm:p-5 mb-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-orange-600 to-amber-500 text-white flex items-center justify-center shrink-0 shadow-md">
              <Sparkles className="w-6 h-6 fill-white" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-serif font-black text-stone-900 flex items-center justify-center md:justify-start gap-1.5">
                <span>Interactive Model Fitting Experience</span>
                <span className="text-[10px] bg-orange-600 text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  Live Try-On
                </span>
              </h3>
              <p className="text-xs text-stone-600 mt-0.5">
                Har model ke neeche diye gaye chhote product thumbnails par click karein—model turant nayi dress pehan lega!
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-orange-200 text-orange-700 font-bold text-xs shadow-xs shrink-0">
            <span>✨ Tap thumbnails below any model</span>
          </div>
        </div>

        {/* Category Filter Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none sm:justify-center">
          {categoryTabs.map((cat) => {
            const IconComponent = cat.icon;
            const isActive = currentCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setCurrentCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md shadow-orange-500/25 scale-[1.02]"
                    : "bg-white text-stone-700 hover:text-stone-950 hover:bg-stone-50 border border-stone-200 shadow-2xs"
                }`}
              >
                <IconComponent className={`w-4 h-4 ${isActive ? "text-white" : "text-orange-600"}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Filter Bar: Search + Price dropdown + Count */}
        <div className="bg-white border border-stone-200 rounded-2xl p-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Kurta, Jodhpuri, Silk, Velvet..."
              className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-orange-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Price Range Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <span className="text-xs text-stone-500 flex items-center gap-1 mr-1">
              <SlidersHorizontal className="w-3.5 h-3.5 text-orange-600" />
              <span>Filter:</span>
            </span>

            {[
              { id: "all", label: "All Prices" },
              { id: "under1000", label: "Under ₹1,000 (Starts ₹600)" },
              { id: "1000to2500", label: "₹1,000 - ₹2,500" },
              { id: "above2500", label: "₹2,500+ (Suits & Achkans)" },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setPriceFilter(filter.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  priceFilter === filter.id
                    ? "bg-orange-100 text-orange-800 border border-orange-300 font-bold"
                    : "bg-stone-50 text-stone-600 border border-stone-200 hover:bg-stone-100"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-xs font-semibold text-stone-500 hidden lg:block whitespace-nowrap">
            Showing <span className="text-orange-600 font-bold">{filteredModels.length}</span> Standing Models
          </div>

        </div>

        {/* Product Model Cards Grid */}
        {filteredModels.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {filteredModels.map((model) => (
              <ModelCard
                key={model.id}
                model={model}
                onQuickView={(prod) => setQuickViewProduct(prod)}
              />
            ))}
          </div>
        ) : (
          /* Empty search state */
          <div className="text-center py-16 px-4 bg-white border border-stone-200 rounded-3xl max-w-md mx-auto space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-600 mx-auto flex items-center justify-center text-xl">
              🔍
            </div>
            <h3 className="text-lg font-serif font-bold text-stone-900">No styles matched your search</h3>
            <p className="text-xs text-stone-500">
              Try searching for &quot;Kurta&quot;, &quot;Jodhpuri&quot;, &quot;Silk&quot;, or clear your price filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setPriceFilter("all");
                setCurrentCategory("all");
              }}
              className="px-4 py-2 bg-orange-600 text-white rounded-xl text-xs font-bold hover:bg-orange-500 transition-colors shadow-sm"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Banner inside catalogue */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border border-orange-200/80 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-serif font-bold text-stone-900 flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span>Looking for Custom Colors or Matching Family Outfits?</span>
            </h4>
            <p className="text-xs sm:text-sm text-stone-600">
              Visit our Mahalaxmi Nagar Indore showroom or chat directly with our store stylist on WhatsApp.
            </p>
          </div>

          <a
            href={generateWhatsAppLink("Custom Family Wedding Package Inquiry")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-orange-600 shadow-md transition-all hover:scale-105 text-xs sm:text-sm whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat with Stylist</span>
          </a>
        </div>

      </div>

      {/* Quick View Modal */}
      <ProductQuickView
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </section>
  );
}
