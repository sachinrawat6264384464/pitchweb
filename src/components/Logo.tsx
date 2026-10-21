import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

export function Logo({ size = "md", showTagline = true }: LogoProps) {
  const iconSize = size === "sm" ? 34 : size === "lg" ? 56 : 44;

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Royal Crown Emblem matching the Instagram Avatar */}
      <div
        className="relative flex items-center justify-center rounded-full p-[2px] transition-transform hover:scale-105"
        style={{
          width: iconSize,
          height: iconSize,
          background: "linear-gradient(135deg, #f97316 0%, #eab308 50%, #ea580c 100%)",
          boxShadow: "0 0 16px rgba(249, 115, 22, 0.35)",
        }}
      >
        <div className="flex items-center justify-center w-full h-full rounded-full bg-gradient-to-br from-[#1c140d] via-[#120e0a] to-black">
          {/* Geometric Crown SVG */}
          <svg
            viewBox="0 0 100 100"
            className="w-[62%] h-[62%]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 40L32 68L50 24L68 68L85 40L75 78H25L15 40Z"
              stroke="url(#crownGold)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25 78L50 92L75 78"
              stroke="url(#crownGold)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="50" cy="20" r="3.5" fill="#fef08a" />
            <circle cx="15" cy="36" r="3" fill="#fef08a" />
            <circle cx="85" cy="36" r="3" fill="#fef08a" />
            <defs>
              <linearGradient id="crownGold" x1="15" y1="20" x2="85" y2="92" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fef08a" />
                <stop offset="0.5" stopColor="#f59e0b" />
                <stop offset="1" stopColor="#ea580c" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span
          className={`font-black tracking-wider uppercase text-white font-serif leading-none ${
            size === "sm" ? "text-base" : size === "lg" ? "text-2xl" : "text-lg"
          }`}
        >
          Mayra <span className="gold-gradient-text font-sans font-extrabold tracking-widest text-[0.85em]">Ethnic</span>
        </span>
        <span className="text-[10px] uppercase tracking-[0.25em] text-amber-400/90 font-medium mt-0.5">
          For Men • Indore
        </span>
        {showTagline && size === "lg" && (
          <span className="text-xs text-stone-400 italic mt-1">
            Where Royalty Meets Affordability 👑
          </span>
        )}
      </div>
    </div>
  );
}
