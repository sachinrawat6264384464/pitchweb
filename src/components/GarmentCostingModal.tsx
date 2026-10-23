"use client";

import React, { useState, useEffect } from "react";
import { HangingGarment } from "@/lib/hanging-products";
import { STORE_INFO, generateWhatsAppLink } from "@/lib/products-data";
import {
  X,
  RotateCw,
  Sparkles,
  Scissors,
  Check,
  ShieldCheck,
  MessageCircle,
  MapPin,
  TrendingDown,
  Layers,
  ArrowRight,
  Info,
} from "lucide-react";

interface GarmentCostingModalProps {
  garment: HangingGarment | null;
  onClose: () => void;
}

export function GarmentCostingModal({ garment, onClose }: GarmentCostingModalProps) {
  const [isRotated180, setIsRotated180] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");

  useEffect(() => {
    setIsRotated180(false);
    if (garment) {
      setSelectedSize(garment.sizes[0] || "40 (M)");
      setSelectedColor(garment.colors[0] || "");
    }
  }, [garment]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!garment) return null;

  const currentSize = selectedSize || garment.sizes[0] || "40 (M)";
  const currentColor = selectedColor || garment.colors[0] || "";
  const discountPercent = Math.round(
    ((garment.costing.bigBrandRetailPrice - garment.costing.mayraDirectPrice) /
      garment.costing.bigBrandRetailPrice) *
      100
  );

  const whatsappMessage = `Namaste Mayra Ethnic Indore! 🙏
I am inquiring about this outfit from your hanging collection:
📌 *${garment.name}* (${garment.category})
💰 Mayra Direct Price: ₹${garment.costing.mayraDirectPrice.toLocaleString("en-IN")}
📏 Preferred Size: ${currentSize}
🎨 Color: ${currentColor}

Please share video preview or arrange trial at your Mahalaxmi Nagar showroom.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Main Modal Container */}
      <div className="relative w-full max-w-5xl bg-stone-900 border border-stone-700/80 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col lg:flex-row text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 rounded-full bg-stone-800/90 hover:bg-stone-700 text-stone-300 hover:text-white border border-stone-600 transition-colors shadow-lg cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* LEFT COLUMN: 3D Isolated Garment with 180° Flip */}
        <div className="lg:w-5/12 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 p-6 flex flex-col justify-between items-center relative border-b lg:border-b-0 lg:border-r border-stone-800 overflow-hidden">
          
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-500/10 rounded-full blur-[90px] pointer-events-none" />

          {/* Top Info Bar */}
          <div className="w-full flex items-center justify-between z-10">
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 text-white font-extrabold text-[11px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
              {garment.badge}
            </span>

            {/* 180° Rotation Toggle Pill */}
            <button
              onClick={() => setIsRotated180(!isRotated180)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all border cursor-pointer ${
                isRotated180
                  ? "bg-amber-400 text-stone-950 border-amber-300 shadow-md scale-105"
                  : "bg-stone-800/90 text-stone-300 hover:text-white border-stone-700"
              }`}
            >
              <RotateCw className={`w-3.5 h-3.5 ${isRotated180 ? "rotate-180" : ""}`} />
              <span>{isRotated180 ? "Back 180° View" : "Front View"}</span>
            </button>
          </div>

          {/* Center: 3D Flipping Card Container */}
          <div
            className="w-full h-80 sm:h-96 my-auto flex items-center justify-center relative cursor-pointer"
            style={{ perspective: 1200 }}
            onClick={() => setIsRotated180(!isRotated180)}
          >
            <div
              className="relative w-full h-full flex items-center justify-center transition-transform duration-700 ease-out"
              style={{
                transformStyle: "preserve-3d",
                transform: isRotated180 ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* FRONT VIEW */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  src={garment.imageFront}
                  alt={garment.name}
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)] hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* 180° BACK VIEW (Craftsmanship Details Card) */}
              <div
                className="absolute inset-0 flex flex-col justify-center p-6 rounded-2xl bg-stone-900/95 border border-amber-500/30 text-stone-200 space-y-4"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <div className="flex items-center gap-2 border-b border-stone-800 pb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                    <Scissors className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-white text-sm">
                      180° Back Cut &amp; Tailoring Spec
                    </h4>
                    <p className="text-[11px] text-stone-400">Master Tailor Construction Details</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-amber-400 font-bold block mb-0.5">Spine Silhouette:</span>
                    <p className="text-stone-300">{garment.backDetails.seamStyle}</p>
                  </div>

                  <div>
                    <span className="text-amber-400 font-bold block mb-0.5">Vent &amp; Mobility Cut:</span>
                    <p className="text-stone-300">{garment.backDetails.ventCut}</p>
                  </div>

                  <div>
                    <span className="text-amber-400 font-bold block mb-0.5">Internal Lining:</span>
                    <p className="text-stone-300">{garment.backDetails.liningNotes}</p>
                  </div>
                </div>

                <div className="pt-2 text-center text-[11px] text-stone-400 italic">
                  👆 Tap again to return to front view
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Flip Helper */}
          <div className="w-full flex items-center justify-between text-[11px] text-stone-400 pt-2 border-t border-stone-800/80 z-10">
            <span>✨ 180° Interactive 3D Cutout</span>
            <span className="text-amber-400 font-medium">Free Indore Store Fitting</span>
          </div>

        </div>

        {/* RIGHT COLUMN: Full Costing Breakdown, Specs & Direct Order */}
        <div className="lg:w-7/12 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto space-y-6 bg-stone-900">
          
          {/* Header Title & Pricing */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-black">
                {garment.category.toUpperCase()} • MAYRA ETHNIC INDORE
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
              {garment.name}
            </h2>

            {/* Price banner */}
            <div className="flex items-baseline gap-3 pt-1">
              <span className="text-3xl sm:text-4xl font-black text-amber-400">
                ₹{garment.costing.mayraDirectPrice.toLocaleString("en-IN")}
              </span>
              <span className="text-base text-stone-400 line-through">
                ₹{garment.costing.bigBrandRetailPrice.toLocaleString("en-IN")}
              </span>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-500/40 px-2.5 py-1 rounded-full">
                Save ₹{garment.costing.customerSavings.toLocaleString("en-IN")} ({discountPercent}% OFF)
              </span>
            </div>
          </div>

          {/* TRANSPARENT COSTING ARCHITECTURE BREAKDOWN */}
          <div className="bg-stone-950/80 border border-stone-800 rounded-2xl p-4 sm:p-5 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-stone-800">
              <div className="flex items-center gap-2">
                <TrendingDown className="w-4 h-4 text-emerald-400" />
                <h4 className="font-serif font-bold text-white text-sm">
                  Transparent Costing Breakdown
                </h4>
              </div>
              <span className="text-[10px] text-stone-400 uppercase font-semibold">
                Direct-from-Maker
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between text-stone-300">
                <span>1. Raw Fabric &amp; Silk Weave:</span>
                <span className="font-semibold text-white">₹{garment.costing.fabricCost.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex items-center justify-between text-stone-300">
                <span>2. Hand Embroidery / Artisan Labor:</span>
                <span className="font-semibold text-white">₹{garment.costing.artisanLaborCost.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex items-center justify-between text-stone-300">
                <span>3. Master Tailor Stitching &amp; Satin Lining:</span>
                <span className="font-semibold text-white">₹{garment.costing.tailoringFusingCost.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex items-center justify-between text-stone-300">
                <span>4. Store Operations &amp; Direct Logistics:</span>
                <span className="font-semibold text-white">₹{garment.costing.operationsPackaging.toLocaleString("en-IN")}</span>
              </div>
              
              <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-stone-400">
                <span>Big Mall / Designer Brand Price:</span>
                <span className="line-through text-stone-400">₹{garment.costing.bigBrandRetailPrice.toLocaleString("en-IN")}</span>
              </div>

              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-amber-300 font-bold">
                <span>Mayra Indore Direct Price:</span>
                <span className="text-base text-amber-400 font-black">₹{garment.costing.mayraDirectPrice.toLocaleString("en-IN")}</span>
              </div>
            </div>

            <p className="text-[11px] text-stone-400 italic">
              *Hum direct weavers aur artisans se procure karte hain, isliye mall ke 200% brand markups se aazadi milti hai.
            </p>
          </div>

          {/* Occasion & Fabric Specifications */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800 space-y-1">
              <span className="text-[10px] uppercase font-bold text-amber-400 block">Fabric &amp; Lining</span>
              <p className="text-white font-semibold line-clamp-1">{garment.fabric}</p>
              <p className="text-stone-400 text-[11px]">{garment.lining}</p>
            </div>

            <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800 space-y-1">
              <span className="text-[10px] uppercase font-bold text-amber-400 block">Collar &amp; Silhouette</span>
              <p className="text-white font-semibold line-clamp-1">{garment.collarStyle}</p>
              <p className="text-stone-400 text-[11px]">Free On-Spot Store Alteration</p>
            </div>
          </div>

          {/* Size Selector */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-stone-300">Select Ready Size:</span>
              <span className="text-amber-400 font-semibold">{currentSize}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {garment.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1.5 text-xs rounded-xl font-bold transition-all cursor-pointer ${
                    currentSize === size
                      ? "bg-amber-400 text-stone-950 shadow-md scale-105"
                      : "bg-stone-800 text-stone-300 hover:bg-stone-700 border border-stone-700"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Direct Ordering & Store Trial Actions */}
          <div className="space-y-2 pt-2 border-t border-stone-800">
            <a
              href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-950/50 hover:scale-[1.01] text-sm cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Order on WhatsApp (Size {currentSize})</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="flex items-center justify-between text-xs text-stone-400 pt-1">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Ready Stock at Indore Showroom</span>
              </span>
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 underline flex items-center gap-1"
              >
                <MapPin className="w-3 h-3 text-orange-400" />
                <span>Visit Store for Trial</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
