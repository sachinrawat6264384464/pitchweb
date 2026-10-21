import React from "react";
import { REVIEWS } from "@/lib/products-data";
import { Star, Quote, MapPin, CheckCircle, Sparkles } from "lucide-react";

export function CustomerReviews() {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#0c0a09] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Indore Customer Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-white">
            Loved by Indore&apos;s <span className="gold-gradient-text">Grooms &amp; Families</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base">
            Read what real customers say after visiting our store for their weddings, engagements, and festivals.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#14110e] border border-stone-800 rounded-2xl p-6 flex flex-col justify-between royal-card-hover relative"
            >
              <div className="space-y-4">
                {/* Top Quote Icon & Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-amber-500/20" />
                </div>

                {/* Comment text */}
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed italic">
                  &ldquo;{review.comment}&rdquo;
                </p>

                {/* Outfit Tag */}
                <div className="pt-2">
                  <span className="text-[11px] font-semibold text-amber-400 bg-amber-950/40 border border-amber-900/40 px-2 py-0.5 rounded block w-fit">
                    Outfit: {review.outfit}
                  </span>
                </div>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 mt-4 border-t border-stone-800 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-white text-sm">
                    {review.name}
                  </h4>
                  <div className="flex items-center gap-1 text-[11px] text-stone-400">
                    <MapPin className="w-3 h-3 text-amber-500" />
                    <span>{review.location}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Verified
                  </span>
                  <span className="text-[10px] text-stone-500">{review.occasion}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-amber-950/40 via-stone-900 to-amber-950/40 border border-amber-500/20 max-w-xl mx-auto flex items-center justify-center gap-6 text-center">
          <div>
            <div className="text-3xl font-black text-amber-400 flex items-center justify-center gap-1">
              4.9 / 5.0
            </div>
            <div className="flex items-center justify-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
          <div className="h-10 w-px bg-stone-800" />
          <div className="text-left text-xs sm:text-sm text-stone-300">
            <strong className="text-white block font-bold">1,200+ Happy Customers</strong>
            <span>Indore&apos;s go-to destination for designer ethnic menswear</span>
          </div>
        </div>

      </div>
    </section>
  );
}
