"use client";

import React, { useState, useRef, useEffect } from "react";
import { HANGING_GARMENTS, HangingGarment } from "@/lib/hanging-products";
import { GarmentCostingModal } from "./GarmentCostingModal";
import { STORE_INFO, generateWhatsAppLink } from "@/lib/products-data";
import {
  RotateCw,
  Sparkles,
  Crown,
  TrendingDown,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Info,
} from "lucide-react";
import gsap from "gsap";

export function Hero() {
  const [selectedGarment, setSelectedGarment] = useState<HangingGarment | null>(null);
  const [hoveredGarmentId, setHoveredGarmentId] = useState<string | null>(null);
  const [isAllFlipped180, setIsAllFlipped180] = useState<boolean>(false);
  const [flippedIndividual, setFlippedIndividual] = useState<Record<string, boolean>>({});

  const containerRef = useRef<HTMLDivElement>(null);
  const clothesRowRef = useRef<HTMLDivElement>(null);
  const wireSvgRef = useRef<SVGSVGElement>(null);

  // Toggle individual garment 180 flip
  const handleToggleFlip = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setFlippedIndividual((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Horizontal scroll controls
  const handleScrollLeft = () => {
    if (clothesRowRef.current) {
      clothesRowRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (clothesRowRef.current) {
      clothesRowRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  // Entrance GSAP animation
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-headline", {
        y: -30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(".hanging-cable", {
        scaleX: 0.8,
        opacity: 0,
        duration: 1.1,
        ease: "power2.out",
      });

      gsap.from(".hanging-item", {
        y: -60,
        opacity: 0,
        stagger: 0.08,
        duration: 0.9,
        ease: "back.out(1.4)",
        delay: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[90vh] lg:min-h-[96vh] flex flex-col justify-between overflow-hidden bg-transparent pt-6 sm:pt-10 pb-12 selection:bg-orange-600 selection:text-white"
    >
      {/* Ambient Radial Lights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/3 w-[650px] h-[650px] bg-orange-400/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-[150px]" />
      </div>

      {/* TOP HEADER: Clean Editorial Luxury Headline (Matching Image 2 Reference) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 hero-headline">
        
        {/* Minimal Kicker Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50/90 border border-orange-200/90 text-orange-800 text-xs font-black tracking-widest uppercase shadow-2xs backdrop-blur-sm">
          <Crown className="w-3.5 h-3.5 text-orange-600" />
          <span>NEW COLLECTION • ROYAL ETHNIC MENSWEAR • INDORE</span>
        </div>

        {/* Big Bold Headline Inspired by Reference */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black text-stone-900 tracking-tight leading-[1.08]">
          Layers that <span className="orange-gradient-text drop-shadow-xs">hang right.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
          Suspended royal silhouettes. Hover on any dress to zoom, rotate 180° for tailoring cuts, and click to inspect complete transparent pricing.
        </p>

        {/* Feature Highlights Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs">
          <span className="px-3 py-1 rounded-full bg-white border border-stone-200 text-stone-700 shadow-2xs flex items-center gap-1.5 font-semibold">
            <Sparkles className="w-3 h-3 text-orange-600" />
            <span>Isolated Remove-BG Cutouts</span>
          </span>
          <span className="px-3 py-1 rounded-full bg-white border border-stone-200 text-stone-700 shadow-2xs flex items-center gap-1.5 font-semibold">
            <RotateCw className="w-3 h-3 text-amber-600" />
            <span>180° 3D Rotating Views</span>
          </span>
          <span className="px-3 py-1 rounded-full bg-white border border-stone-200 text-stone-700 shadow-2xs flex items-center gap-1.5 font-semibold">
            <TrendingDown className="w-3 h-3 text-emerald-600" />
            <span>Complete Costing Breakdown</span>
          </span>
        </div>

      </div>

      {/* SIDE COUNTERS & 180° ROTATE BUTTON (Exact Match to Image 2 Reference) */}
      <div className="absolute right-4 sm:right-8 top-32 z-30 hidden md:flex flex-col items-end space-y-12 select-none pointer-events-auto">
        <span className="font-serif font-black text-stone-300 hover:text-stone-900 transition-colors text-2xl sm:text-3xl tracking-tighter">
          955
        </span>

        {/* Interactive 180° Flip All Button */}
        <div className="flex flex-col items-center space-y-1.5">
          <button
            onClick={() => setIsAllFlipped180(!isAllFlipped180)}
            className={`w-12 h-12 rounded-full border flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer ${
              isAllFlipped180
                ? "bg-amber-500 text-stone-950 border-amber-400 rotate-180 scale-110 shadow-amber-500/30"
                : "bg-white/95 text-stone-800 hover:text-orange-600 border-stone-300 hover:border-orange-500"
            }`}
            title="Rotate All Outfits 180° (Front & Back Tailoring View)"
            aria-label="Toggle 180 degree rotation"
          >
            <RotateCw className="w-5 h-5" />
          </button>
          <span className="text-[10px] font-black tracking-widest text-stone-500 uppercase">
            {isAllFlipped180 ? "180° BACK" : "180° FRONT"}
          </span>
        </div>

        <span className="font-serif font-black text-stone-300 hover:text-stone-900 transition-colors text-2xl sm:text-3xl tracking-tighter">
          665
        </span>

        <span className="font-serif font-black text-stone-300 hover:text-stone-900 transition-colors text-2xl sm:text-3xl tracking-tighter">
          38
        </span>
      </div>

      {/* CENTER: SUSPENDED HANGING CABLE & DRESSES ROW */}
      <div className="relative w-full my-auto py-8 sm:py-12 z-20">
        
        {/* Curved Suspension Wire (SVG Catenary Curve) */}
        <div className="absolute top-14 sm:top-16 inset-x-0 w-full pointer-events-none z-10 hanging-cable">
          <svg
            ref={wireSvgRef}
            className="w-full h-24 overflow-visible"
            viewBox="0 0 1440 90"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Metallic Cable Gradient */}
              <linearGradient id="cableGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#78716c" />
                <stop offset="25%" stopColor="#d6d3d1" />
                <stop offset="50%" stopColor="#a8a29e" />
                <stop offset="75%" stopColor="#e7e5e4" />
                <stop offset="100%" stopColor="#78716c" />
              </linearGradient>

              {/* Cable Drop Shadow */}
              <filter id="cableShadow" x="-5%" y="-20%" width="110%" height="180%">
                <feDropShadow dx="0" dy="5" stdDeviation="4" floodOpacity="0.25" />
              </filter>
            </defs>

            {/* Main Thick Suspended Cable with Realistic Sag */}
            <path
              d="M -20,25 Q 720,88 1460,25"
              fill="none"
              stroke="url(#cableGradient)"
              strokeWidth="6.5"
              strokeLinecap="round"
              filter="url(#cableShadow)"
            />

            {/* Subtle Metallic Specular Highlight Line */}
            <path
              d="M -20,23 Q 720,86 1460,23"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.2"
              strokeOpacity="0.6"
            />
          </svg>
        </div>

        {/* Scroll Control Arrows */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative flex justify-between pointer-events-none mb-2">
          <button
            onClick={handleScrollLeft}
            className="pointer-events-auto p-2.5 rounded-full bg-white/90 hover:bg-white text-stone-700 hover:text-black border border-stone-200 shadow-md transition-all hover:scale-110 cursor-pointer hidden md:flex items-center justify-center -translate-x-2"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleScrollRight}
            className="pointer-events-auto p-2.5 rounded-full bg-white/90 hover:bg-white text-stone-700 hover:text-black border border-stone-200 shadow-md transition-all hover:scale-110 cursor-pointer hidden md:flex items-center justify-center translate-x-2"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Clothes Row: Smooth Horizontal Scrollable Carousel on the Cable */}
        <div
          ref={clothesRowRef}
          className="relative w-full overflow-x-auto pb-10 pt-4 px-6 sm:px-12 scrollbar-none flex items-start justify-start lg:justify-center gap-6 sm:gap-10 scroll-smooth select-none"
          style={{ perspective: 1200 }}
        >
          {HANGING_GARMENTS.map((garment, idx) => {
            const isHovered = hoveredGarmentId === garment.id;
            const isFlipped = isAllFlipped180 || !!flippedIndividual[garment.id];

            // Calculate subtle natural sag Y position based on distance from center
            const centerDistance = Math.abs(idx - (HANGING_GARMENTS.length - 1) / 2);
            const naturalCableDip = Math.sin((idx / (HANGING_GARMENTS.length - 1)) * Math.PI) * 22;

            return (
              <div
                key={garment.id}
                onMouseEnter={() => setHoveredGarmentId(garment.id)}
                onMouseLeave={() => setHoveredGarmentId(null)}
                onClick={() => setSelectedGarment(garment)}
                className={`hanging-item shrink-0 relative flex flex-col items-center cursor-pointer transition-all duration-500 ease-out ${
                  isHovered
                    ? "z-40 scale-[1.26] -translate-y-4"
                    : "z-20 hover:z-30 hover:scale-105"
                }`}
                style={{
                  marginTop: `${naturalCableDip}px`,
                }}
              >
                {/* 1. Hanger Hook Clamped Onto the Wire */}
                <div className="relative z-30 flex flex-col items-center">
                  {/* Metal Hook Loop */}
                  <div className="w-5 h-7 border-t-2 border-l-2 border-r-2 border-stone-400 rounded-t-full shadow-xs -mb-1 bg-transparent" />
                  
                  {/* Metal Swivel Neck */}
                  <div className="w-1.5 h-3 bg-gradient-to-b from-stone-400 to-stone-500 rounded-xs shadow-xs" />

                  {/* Triangular Wooden/Metal Hanger Bar */}
                  <div className="relative w-28 sm:w-32 h-3.5 bg-gradient-to-r from-stone-600 via-stone-400 to-stone-600 rounded-full shadow-md flex items-center justify-center -mb-2 z-20">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400/80 shadow-xs" />
                  </div>

                  {/* 2. Hanging Physical Price Tag (Exact match to Image 2 reference) */}
                  <div className="relative z-30 mt-1 flex flex-col items-center">
                    {/* Hanging String */}
                    <div className="w-[1.5px] h-3.5 bg-stone-400/90" />
                    
                    {/* White Card Price Tag */}
                    <div
                      className={`px-2.5 py-0.5 rounded-md text-stone-900 border font-mono font-black text-xs shadow-md transition-all duration-300 flex items-center gap-1 ${
                        isHovered
                          ? "bg-amber-400 border-amber-500 text-stone-950 scale-110 shadow-amber-500/40"
                          : "bg-white/95 border-stone-300"
                      }`}
                    >
                      <span className="text-[10px] text-stone-500">₹</span>
                      <span>{garment.price.toLocaleString("en-IN")}</span>
                    </div>
                  </div>
                </div>

                {/* 3. The Garment Cutout Container with 180° 3D Flip */}
                <div
                  className="relative w-44 sm:w-52 h-64 sm:h-72 flex items-center justify-center mt-1"
                  style={{ perspective: 1000 }}
                >
                  <div
                    className="relative w-full h-full flex items-center justify-center transition-transform duration-700 ease-out"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    }}
                  >
                    {/* FRONT VIEW (Cutout Apparel Image) */}
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <img
                        src={garment.imageFront}
                        alt={garment.name}
                        className={`max-h-full max-w-full object-contain filter transition-all duration-300 ${
                          isHovered
                            ? "drop-shadow-[0_25px_30px_rgba(249,115,22,0.35)] brightness-105"
                            : "drop-shadow-[0_15px_20px_rgba(0,0,0,0.45)]"
                        }`}
                        loading="eager"
                      />
                    </div>

                    {/* 180° BACK VIEW (Tailoring & Silhouette Card) */}
                    <div
                      className="absolute inset-0 flex flex-col justify-center p-4 rounded-2xl bg-stone-950/95 border border-amber-500/40 text-stone-200 space-y-2 shadow-2xl"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <span className="text-[10px] uppercase font-black tracking-widest text-amber-400">
                        180° TAILORING CUT
                      </span>
                      <h4 className="font-serif font-bold text-white text-xs line-clamp-1">
                        {garment.name}
                      </h4>
                      <div className="space-y-1.5 text-[11px] text-stone-300 border-t border-stone-800 pt-2">
                        <p className="line-clamp-2">
                          <strong className="text-white">Back Seam:</strong> {garment.backDetails.seamStyle}
                        </p>
                        <p className="line-clamp-2">
                          <strong className="text-white">Vent:</strong> {garment.backDetails.ventCut}
                        </p>
                      </div>
                      <span className="text-[10px] text-amber-300 font-semibold pt-1">
                        Tap for Full Costing ➔
                      </span>
                    </div>
                  </div>
                </div>

                {/* 4. Hover Info Pill / CTA Prompt */}
                <div
                  className={`mt-2 transition-all duration-300 flex flex-col items-center ${
                    isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                  }`}
                >
                  <span className="px-3 py-1 rounded-full bg-stone-950 text-white font-serif font-bold text-xs shadow-xl border border-amber-500/50 whitespace-nowrap flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>View Costing &amp; Details</span>
                  </span>

                  {/* Individual 180° Flip Button */}
                  <button
                    onClick={(e) => handleToggleFlip(e, garment.id)}
                    className="mt-1 px-2.5 py-0.5 rounded-md bg-stone-100 hover:bg-stone-200 border border-stone-300 text-[10px] font-bold text-stone-700 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <RotateCw className="w-2.5 h-2.5" />
                    <span>{isFlipped ? "Flip to Front" : "180° Back View"}</span>
                  </button>
                </div>

                {/* Garment Title and Badge Underneath */}
                <div className={`text-center space-y-0.5 pt-1 transition-opacity ${isHovered ? "opacity-0" : "opacity-90"}`}>
                  <p className="font-serif font-bold text-stone-900 text-xs sm:text-sm line-clamp-1 max-w-[170px]">
                    {garment.name}
                  </p>
                  <p className="text-[10px] text-stone-500 uppercase tracking-wider font-semibold">
                    {garment.badge}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* BOTTOM FOOTER HIGHLIGHTS & TRUST BAR */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
        <div className="p-4 sm:p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-stone-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-8 text-xs text-stone-700 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span><strong>Free On-Spot Master Tailor Fitting</strong> (Sleeve, Chest &amp; Waist)</span>
            </div>

            <span className="hidden sm:inline text-stone-300">•</span>

            <div className="flex items-center gap-2">
              <TrendingDown className="w-4 h-4 text-orange-600" />
              <span><strong>Direct Artisan Pricing</strong> (Starts ₹600/-)</span>
            </div>

            <span className="hidden sm:inline text-stone-300">•</span>

            <a
              href={STORE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-stone-800 hover:text-orange-600 transition-colors"
            >
              <MapPin className="w-4 h-4 text-orange-600" />
              <span>Mahalaxmi Nagar Indore Store</span>
            </a>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#collections"
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-stone-700 bg-stone-100 hover:bg-stone-200 transition-colors"
            >
              View Full Catalogue
            </a>

            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md text-xs transition-all hover:scale-105"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp Inquiries</span>
            </a>
          </div>

        </div>
      </div>

      {/* FULL COSTING & DETAILS MODAL ("proper costing ka page/modal khule usme saari detail hogi") */}
      <GarmentCostingModal
        garment={selectedGarment}
        onClose={() => setSelectedGarment(null)}
      />
    </section>
  );
}
