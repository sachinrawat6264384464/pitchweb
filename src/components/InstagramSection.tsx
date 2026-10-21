import React from "react";
import { STORE_INFO } from "@/lib/products-data";
import { Play, Heart, Users, ExternalLink, Sparkles } from "lucide-react";
import { InstagramIcon } from "./Icons";

export function InstagramSection() {
  const reelPosts = [
    {
      title: "Wedding Brother Styling",
      subtitle: "Mahalaxmi Nagar Store",
      views: "18.4K",
      likes: "1.2K",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
      tag: "Reels",
    },
    {
      title: "Designer Kurta Range Starts ₹600",
      subtitle: "Store Walkthrough",
      views: "24.1K",
      likes: "2.5K",
      image: "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&w=600&q=80",
      tag: "Viral",
    },
    {
      title: "Royal Brocade Koti & Kurta Pair",
      subtitle: "Customer Trial",
      views: "15.9K",
      likes: "980",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80",
      tag: "Trending",
    },
    {
      title: "Jodhpuri Royal Collection Showcase",
      subtitle: "New Festive Arrivals",
      views: "32.6K",
      likes: "3.1K",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
      tag: "Must Watch",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0c0a09] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Instagram Header with Profile Card */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-stone-800">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shrink-0">
              <div className="w-full h-full rounded-full bg-stone-950 flex items-center justify-center">
                <InstagramIcon className="w-8 h-8 text-amber-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <h3 className="text-xl sm:text-2xl font-serif font-black text-white">
                  @{STORE_INFO.instagram}
                </h3>
                <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded-full font-bold">
                  Official
                </span>
              </div>
              <p className="text-xs sm:text-sm text-stone-400">
                114+ Reels &amp; Posts • 1,300+ Indore Followers • Where Royalty Meets Affordability
              </p>
            </div>
          </div>

          <a
            href={STORE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 text-white font-bold text-xs sm:text-sm shadow-xl shadow-pink-600/20 hover:scale-105 transition-all"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Follow on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          {reelPosts.map((reel, idx) => (
            <a
              key={idx}
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-96 rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 hover:border-amber-500/50 transition-all duration-300 block shadow-lg"
            >
              <img
                src={reel.image}
                alt={reel.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Tag Pill */}
              <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-md border border-stone-700 text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                <Play className="w-2.5 h-2.5 fill-amber-300" />
                <span>{reel.tag}</span>
              </div>

              {/* Center Play Button on hover */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-125 transition-transform">
                  <Play className="w-5 h-5 fill-white ml-0.5" />
                </div>
              </div>

              {/* Reel Meta at Bottom */}
              <div className="absolute bottom-0 inset-x-0 p-4 space-y-1">
                <h4 className="font-serif font-bold text-white text-sm line-clamp-1 group-hover:text-amber-300 transition-colors">
                  {reel.title}
                </h4>
                <p className="text-xs text-stone-300">{reel.subtitle}</p>
                <div className="flex items-center justify-between pt-2 text-[11px] text-stone-400 border-t border-stone-800">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> {reel.likes}
                  </span>
                  <span>{reel.views} Views</span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
