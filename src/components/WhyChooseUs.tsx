import React from "react";
import { STORE_INFO, generateWhatsAppLink } from "@/lib/products-data";
import { Sparkles, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

export function WhyChooseUs() {
  const showcasePillars = [
    {
      title: "Designer Festive Kurtas",
      subtitle: "Where Royalty Meets Affordability",
      description: "Lucknowi Chikankari, Chanderi art silk & festive cotton sets starting at honest Indore prices.",
      highlight: "Starts at ₹600/-",
      image: "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&w=800&q=80",
      link: "#collections",
      cta: "Explore Kurtas",
    },
    {
      title: "Master Tailor Bespoke Fit",
      subtitle: "On-Spot Alterations Available",
      description: "Our in-house master tailor adjusts shoulder line, sleeve length & waist tapering for your exact body fit.",
      highlight: "Instant Custom Fit",
      image: "/images/hero-royal.jpg",
      link: "#collections",
      cta: "See Tailored Suits",
    },
    {
      title: "Groom & Barat Squad Sets",
      subtitle: "Matching Family Ensembles",
      description: "Theme-coordinated matching Nehru jackets, Jodhpuris & safas for brothers, cousins and groomsmen.",
      highlight: "Wedding Group Special",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
      link: generateWhatsAppLink("Hi! I am inquiring about Barat Squad matching outfits and bulk group discounts."),
      cta: "Inquire Group Deal",
      isExternal: true,
    },
    {
      title: "Opulent Heritage Fabrics",
      subtitle: "Banarasi, Velvet & Matka Silk",
      description: "Handpicked premium Italian blends, Banarasi brocade jacquards & velvet kotis that shine in wedding photos.",
      highlight: "Pure Craftsmanship",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      link: "#collections",
      cta: "View Luxury Fabrics",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-transparent border-t border-stone-200/80 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-orange-400/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Mayra Ethnic Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-stone-900">
            Why Indore Men Choose <span className="orange-gradient-text">Mayra Ethnic</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Crafted for kings, priced for everyone. Discover the difference in fit, fabric, and pricing at our Mahalaxmi Nagar showroom.
          </p>
        </div>

        {/* 4 Visual Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {showcasePillars.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-stone-200/90 hover:border-orange-400/80 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-xl flex flex-col justify-between group"
            >
              {/* Product Image Frame */}
              <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                {/* Floating Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md border border-stone-200 text-orange-700 text-[11px] font-extrabold px-2.5 py-1 rounded-md shadow-xs">
                  {item.highlight}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 block">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif font-bold text-lg text-stone-900 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <a
                    href={item.link}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    <span>{item.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <div className="flex items-center gap-1 text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>In-Store</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
