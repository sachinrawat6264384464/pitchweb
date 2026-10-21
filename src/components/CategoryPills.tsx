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
                    ? "bg-amber-500 text-stone-950 shadow-lg shadow-amber-500/20 font-bold scale-105"
                    : "bg-stone-900/80 text-stone-300 hover:text-white hover:bg-stone-800 border border-stone-800"
                }`}
              >
                <span className={isActive ? "text-stone-950" : "text-amber-400"}>
                  {getIcon(cat.iconName)}
                </span>
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    isActive ? "bg-stone-950/20 text-stone-950" : "bg-stone-800 text-amber-300"
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
