"use client";

import React from "react";
import { CATEGORIES } from "@/lib/products-data";
import { Sparkles, Shirt, Crown, Layers, Briefcase, HeartHandshake } from "lucide-react";

interface CategoryPillsProps {
  activeCategory: string;
  onSelectCategory: (slug: string) => void;
}

export function CategoryPills({ activeCategory, onSelectCategory }: CategoryPillsProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Shirt":
        return <Shirt className="w-4 h-4" />;
      case "Crown":
        return <Crown className="w-4 h-4" />;
      case "Layers":
        return <Layers className="w-4 h-4" />;
      case "Briefcase":
        return <Briefcase className="w-4 h-4" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <div className="w-full py-4 border-y border-stone-800/80 bg-[#100d0a]/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none sm:justify-center">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.slug;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.slug)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg shadow-orange-600/30 font-bold scale-105 border border-orange-400/50"
                    : "bg-stone-900/80 text-stone-300 hover:text-white hover:bg-stone-800 border border-stone-800"
                }`}
              >
                <span className={isActive ? "text-white" : "text-orange-400"}>
                  {getIcon(cat.iconName)}
                </span>
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    isActive ? "bg-black/30 text-orange-200" : "bg-stone-800 text-orange-400"
                  }`}
                >
                  from ₹{cat.startingPrice}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
