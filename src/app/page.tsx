"use client";

import React, { useState } from "react";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CategoryPills } from "@/components/CategoryPills";
import { ProductCatalogue } from "@/components/ProductCatalogue";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { InstagramSection } from "@/components/InstagramSection";
import { StoreLocation } from "@/components/StoreLocation";
import { CustomerReviews } from "@/components/CustomerReviews";
import { FaqSection } from "@/components/FaqSection";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const handleSelectCategory = (categorySlug: string) => {
    setActiveCategory(categorySlug);
    // Smooth scroll down to catalogue if not already visible
    const element = document.getElementById("collections");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0a09] text-stone-100 flex flex-col selection:bg-amber-500 selection:text-stone-950">
      {/* Top Banner */}
      <AnnouncementBar />

      {/* Main Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Royal Hero Section */}
        <Hero />

        {/* Category Navigation Pills */}
        <CategoryPills
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* Product Catalogue with Search & Filters */}
        <ProductCatalogue selectedCategory={activeCategory} />

        {/* The Mayra Ethnic Brand Promise / Why Choose Us */}
        <WhyChooseUs />

        {/* Real Customer Moments & Instagram Reels Showcase */}
        <InstagramSection />

        {/* Store Location, Timings, Amenities & Embedded Map */}
        <StoreLocation />

        {/* Local Indore Customer Reviews */}
        <CustomerReviews />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Final Call to Action */}
        <FinalCta />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Floating WhatsApp Widget */}
      <FloatingWhatsApp />
    </div>
  );
}
