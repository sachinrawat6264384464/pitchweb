"use client";

import React, { useState } from "react";
import { Product } from "@/lib/types";
import { STORE_INFO, generateWhatsAppLink } from "@/lib/products-data";
import { X, MessageCircle, Phone, Check, Scissors, MapPin, Sparkles } from "lucide-react";

interface ProductQuickViewProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductQuickView({ product, onClose }: ProductQuickViewProps) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");

  if (!product) return null;

  const currentSize = selectedSize || product.sizes[0] || "Standard";
  const currentColor = selectedColor || product.colors[0] || "Original";
  const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl bg-[#14110e] border border-amber-500/30 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 p-2 rounded-full bg-stone-900/90 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Product Image */}
        <div className="relative md:w-1/2 h-72 md:h-auto bg-stone-900 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14110e] via-transparent to-black/20 md:hidden" />
          
          {product.tag && (
            <div className="absolute top-4 left-4 bg-amber-500 text-stone-950 text-xs font-black uppercase px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
              <Sparkles className="w-3 h-3 fill-stone-950" />
              <span>{product.tag}</span>
            </div>
          )}
        </div>

        {/* Right Side: Product Details & WhatsApp Ordering */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto space-y-5">
          
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-amber-400/90 font-bold">
              {product.category.toUpperCase()} • MAYRA ETHNIC INDORE
            </span>

            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-snug">
              {product.name}
            </h3>

            {/* Price section */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-amber-400">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              <span className="text-sm text-stone-500 line-through">
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded">
                Save {discountPercent}%
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-1">
              {product.description}
            </p>

            {/* Fabric Details */}
            <div className="p-3 rounded-xl bg-stone-900/80 border border-stone-800 text-xs space-y-1">
              <div className="text-stone-400 flex items-center gap-1.5 font-semibold">
                <Scissors className="w-3.5 h-3.5 text-amber-400" />
                <span>Fabric &amp; Craftsmanship:</span>
              </div>
              <p className="text-stone-200 font-medium">{product.fabric}</p>
            </div>

            {/* Color options */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-stone-300 block">
                Available Colors: <span className="text-amber-400">{currentColor}</span>
              </label>
              <div className="flex flex-wrap gap-1.5">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-2.5 py-1 text-xs rounded-md border transition-all ${
                      currentColor === color
                        ? "bg-amber-500/20 text-amber-300 border-amber-500 font-bold"
                        : "bg-stone-900 text-stone-400 border-stone-800 hover:border-stone-700"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-stone-300 block">
                Select Your Size: <span className="text-amber-400 font-bold">{currentSize}</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1.5 text-xs rounded-lg font-semibold transition-all ${
                      currentSize === size
                        ? "bg-amber-500 text-stone-950 font-black shadow-md scale-105"
                        : "bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-stone-400 italic">
                *In-store free alterations available for custom sleeve/chest adjustments.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-2 border-t border-stone-800">
            <a
              href={generateWhatsAppLink(
                `${product.name} (Color: ${currentColor})`,
                product.price,
                currentSize
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-stone-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-xl shadow-amber-500/20 transition-all text-sm hover:scale-[1.01]"
            >
              <MessageCircle className="w-4 h-4 fill-stone-950" />
              <span>Inquire / Order on WhatsApp</span>
            </a>

            <div className="flex items-center gap-2 text-xs">
              <a
                href={`tel:${STORE_INFO.phoneRaw}`}
                className="flex-1 py-2 px-3 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-800 flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Store: {STORE_INFO.phoneRaw}</span>
              </a>

              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-800 flex items-center justify-center gap-1.5 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Trial at Store</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
