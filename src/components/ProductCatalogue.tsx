"use client";

import React, { useState, useMemo } from "react";
import { PRODUCTS, generateWhatsAppLink } from "@/lib/products-data";
import { Product } from "@/lib/types";
import { ProductQuickView } from "./ProductQuickView";
import { Search, SlidersHorizontal, MessageCircle, Eye, Sparkles, X, Check } from "lucide-react";

interface ProductCatalogueProps {
  selectedCategory: string;
}

export function ProductCatalogue({ selectedCategory }: ProductCatalogueProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState<string>("all");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Filter products based on category, search, and price
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== "all" && product.category !== selectedCategory) {
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
  }, [selectedCategory, searchQuery, priceFilter]);

  return (
    <section id="collections" className="py-16 sm:py-24 bg-[#0c0a09] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mahalaxmi Nagar Indore Store Catalogue</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white">
            Royal Ethnic Wear <span className="gold-gradient-text">Collection</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base">
            Handcrafted Chikankari Kurtas, Royal Jodhpuri Suits, Velvet Nehru Jackets &amp; Party Blazers. Order directly on WhatsApp or visit our Indore store.
          </p>
        </div>

        {/* Filter Bar: Search + Price dropdown + Count */}
        <div className="bg-[#14110e] border border-stone-800 rounded-2xl p-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Kurta, Jodhpuri, Silk, Velvet..."
              className="w-full pl-10 pr-4 py-2.5 bg-stone-900/90 border border-stone-800 rounded-xl text-xs sm:text-sm text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Price Range Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <span className="text-xs text-stone-400 flex items-center gap-1 mr-1">
              <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
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
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  priceFilter === filter.id
                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/60 font-bold"
                    : "bg-stone-900 text-stone-400 border border-stone-800 hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-xs font-semibold text-stone-400 hidden lg:block whitespace-nowrap">
            Showing <span className="text-amber-400 font-bold">{filteredProducts.length}</span> styles
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
                  className="bg-[#14110e] border border-stone-800/80 rounded-2xl overflow-hidden royal-card-hover flex flex-col justify-between group"
                >
                  {/* Image Container with Badges */}
                  <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-stone-900 cursor-pointer"
                       onClick={() => setQuickViewProduct(product)}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14110e] via-transparent to-transparent opacity-80" />

                    {/* Tag badge */}
                    {product.tag && (
                      <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-black text-[11px] uppercase tracking-wider px-2.5 py-0.5 rounded-md shadow-md">
                        {product.tag}
                      </div>
                    )}

                    {/* Discount badge */}
                    <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md border border-stone-800 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-md">
                      {discountPercent}% OFF
                    </div>

                    {/* Quick View Button on Hover */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setQuickViewProduct(product);
                      }}
                      className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-950/90 hover:bg-stone-900 border border-amber-500/40 text-amber-300 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-xl whitespace-nowrap"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Quick View &amp; Sizes</span>
                    </button>
                  </div>

                  {/* Product Details */}
                  <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400/80 block">
                        {product.category}
                      </span>
                      <h3
                        onClick={() => setQuickViewProduct(product)}
                        className="font-serif font-bold text-white text-base hover:text-amber-300 cursor-pointer transition-colors line-clamp-1 mt-0.5"
                      >
                        {product.name}
                      </h3>
                      <p className="text-xs text-stone-400 line-clamp-2 mt-1 leading-relaxed">
                        {product.fabric}
                      </p>
                    </div>

                    {/* Price and WhatsApp Action */}
                    <div className="pt-3 border-t border-stone-800/80 space-y-2.5">
                      <div className="flex items-baseline justify-between">
                        <div className="flex items-baseline gap-2">
                          <span className="text-lg font-black text-amber-400">
                            ₹{product.price.toLocaleString("en-IN")}
                          </span>
                          <span className="text-xs text-stone-500 line-through">
                            ₹{product.originalPrice.toLocaleString("en-IN")}
                          </span>
                        </div>
                        <span className="text-[11px] text-stone-400">
                          {product.sizes.length} sizes
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setQuickViewProduct(product)}
                          className="flex-1 py-2 px-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-800 text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5 text-stone-400" />
                          <span>Details</span>
                        </button>

                        <a
                          href={generateWhatsAppLink(product.name, product.price)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2 px-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-1 shadow-md shadow-emerald-900/30 transition-all hover:scale-[1.02]"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-white" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty search state */
          <div className="text-center py-16 px-4 bg-[#14110e] border border-stone-800 rounded-3xl max-w-md mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-stone-900 text-amber-400 mx-auto flex items-center justify-center text-xl">
              🔍
            </div>
            <h3 className="text-lg font-serif font-bold text-white">No styles matched your search</h3>
            <p className="text-xs text-stone-400">
              Try searching for &quot;Kurta&quot;, &quot;Jodhpuri&quot;, &quot;Silk&quot;, or clear your price filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setPriceFilter("all");
              }}
              className="px-4 py-2 bg-amber-500 text-stone-950 rounded-xl text-xs font-bold hover:bg-amber-400 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Banner inside catalogue */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-950/50 via-[#181410] to-orange-950/40 border border-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-serif font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Looking for Custom Colors or Matching Family Outfits?</span>
            </h4>
            <p className="text-xs sm:text-sm text-stone-400 max-w-xl">
              We specialize in custom barat coordinates, groom squad packages, and personalized fittings at our Mahalaxmi Nagar Indore showroom.
            </p>
          </div>

          <a
            href={generateWhatsAppLink("Custom Family Barat / Wedding Squad Inquiry")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm shadow-xl shadow-amber-500/20 whitespace-nowrap transition-all"
          >
            Ask on WhatsApp
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
