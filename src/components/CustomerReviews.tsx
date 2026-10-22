import React from "react";
import { REVIEWS } from "@/lib/products-data";
import { Star, Quote, MapPin, CheckCircle, Sparkles } from "lucide-react";

export function CustomerReviews() {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-transparent border-t border-stone-200/80 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Indore Customer Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-stone-900">
            Loved by Indore&apos;s <span className="orange-gradient-text">Grooms &amp; Families</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Read what real customers say after visiting our store for their weddings, engagements, and festivals.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-stone-200 rounded-2xl p-6 flex flex-col justify-between royal-card-hover relative shadow-xs hover:shadow-xl"
            >
              <div className="space-y-4">
                {/* Top Quote Icon & Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-orange-400/30" />
                </div>

                {/* Comment text */}
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                  &ldquo;{review.comment}&rdquo;
                </p>

                {/* Outfit Tag */}
                <div className="pt-2">
                  <span className="text-[11px] font-semibold text-orange-700 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded block w-fit">
                    Outfit: {review.outfit}
                  </span>
                </div>
              </div>

              {/* Author & Verification */}
              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">{review.name}</h4>
                  <div className="flex items-center gap-1 text-[11px] text-stone-500 mt-0.5">
                    <MapPin className="w-3 h-3 text-orange-600" />
                    <span>{review.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[10px] text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">
                  <CheckCircle className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
