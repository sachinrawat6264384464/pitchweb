"use client";

import React, { useState, useMemo } from "react";
import { PRODUCTS, generateWhatsAppLink } from "@/lib/products-data";
import { Product } from "@/lib/types";
import { ProductQuickView } from "./ProductQuickView";
import { Search, SlidersHorizontal, MessageCircle, Eye, Sparkles, X, Check } from "lucide-react";

interface ProductCatalogueProps {
  selectedCategory?: string;
}

export function ProductCatalogue({ selectedCategory = "all" }: ProductCatalogueProps) {
  const [currentCategory, setCurrentCategory] = useState<string>(selectedCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState<string>("all");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Filter products based on category, search, and price
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (currentCategory !== "all" && product.category !== currentCategory) {
        return false;
      }

      // Search filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesFabric = product.fabric.toLowerCase().includes(query);
        const matchesColors = product.colors.some((c) => c.toLowerCase().includes(query));
        const matchesCategory = product.category.toLowerCase().includes(query);
        if (!matchesName && !matchesFabric && !matchesColors && !matchesCategory) {
          return false;
        }
      }

      // Price filter
      if (priceFilter === "under1000" && product.price >= 1000) return false;
      if (priceFilter === "1000to2500" && (product.price < 1000 || product.price > 2500)) return false;
      if (priceFilter === "above2500" && product.price <= 2500) return false;

      return true;
    });
  }, [currentCategory, searchQuery, priceFilter]);

  return (
    <section id="collections" className="py-16 sm:py-24 bg-transparent border-t border-stone-200/80 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mahalaxmi Nagar Indore Store Catalogue</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-stone-900">
            Royal Ethnic Wear <span className="orange-gradient-text">Collection</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Handcrafted Chikankari Kurtas, Royal Jodhpuri Suits, Velvet Nehru Jackets &amp; Party Blazers. Order directly on WhatsApp or visit our Indore store.
          </p>
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
            Showing <span className="text-orange-600 font-bold">{filteredProducts.length}</span> styles
          </div>

        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const discountPercent = Math.round(
                ((product.originalPrice - product.price) / product.originalPrice) * 100
              );

              return (
                <div
                  key={product.id}
                  className="relative h-[480px] sm:h-[530px] rounded-3xl overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-300 border border-stone-200/90 cursor-pointer flex flex-col justify-between"
                  onClick={() => setQuickViewProduct(product)}
                >
                  {/* Full Card Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />

                  {/* Top Badges */}
                  <div className="relative z-10 p-3.5 flex items-center justify-between w-full pointer-events-none">
                    {product.tag ? (
                      <span className="bg-gradient-to-r from-orange-600 to-amber-600 text-white font-black text-[11px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                        {product.tag}
                      </span>
                    ) : <span />}

                    <span className="bg-white/95 backdrop-blur-md text-orange-600 text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-md border border-stone-200">
                      {discountPercent}% OFF
                    </span>
                  </div>

                  {/* Bottom Vignette & Details Overlay */}
                  <div className="relative z-10 mt-auto bg-gradient-to-t from-black/95 via-black/70 to-transparent pt-14 p-4 sm:p-5 space-y-3">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-orange-400 block mb-1">
                        {product.category}
                      </span>
                      <h3 className="font-serif font-bold text-white text-base sm:text-lg leading-snug line-clamp-1 group-hover:text-orange-300 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs text-stone-300 line-clamp-1 mt-0.5 font-light">
                        {product.fabric}
                      </p>
                    </div>

                    {/* Price and Stock */}
                    <div className="flex items-baseline justify-between pt-2 border-t border-white/15">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-black text-orange-400">
                          ₹{product.price.toLocaleString("en-IN")}
                        </span>
                        <span className="text-xs text-stone-400 line-through">
                          ₹{product.originalPrice.toLocaleString("en-IN")}
                        </span>
                      </div>
                      <span className="text-[11px] text-stone-300">
                        {product.sizes.length} sizes
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 pt-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setQuickViewProduct(product);
                        }}
                        className="flex-1 py-2 px-2.5 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/25 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Quick View</span>
                      </button>

                      <a
                        href={generateWhatsAppLink(product.name, product.price)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 py-2 px-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-950/40 transition-all hover:scale-[1.02]"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-white" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
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
              }}
              className="px-4 py-2 bg-orange-600 text-white rounded-xl text-xs font-bold hover:bg-orange-500 transition-colors shadow-sm"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Banner inside catalogue */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border border-orange-200/80 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
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
