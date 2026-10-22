import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductCatalogue } from "@/components/ProductCatalogue";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { InstagramSection } from "@/components/InstagramSection";
import { StoreLocation } from "@/components/StoreLocation";
import { CustomerReviews } from "@/components/CustomerReviews";
import { WeddingLookbook } from "@/components/WeddingLookbook";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-stone-900 flex flex-col selection:bg-orange-600 selection:text-white">
      {/* Main Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Royal Hero Section with White Lining-Boxes Background */}
        <Hero />

        {/* Product Catalogue with Search & Filters */}
        <ProductCatalogue />

        {/* The Mayra Ethnic Brand Promise / Why Choose Us */}
        <WhyChooseUs />

        {/* Real Customer Moments & Instagram Reels Showcase */}
        <InstagramSection />

        {/* Store Location, Timings, Amenities & Embedded Map */}
        <StoreLocation />

        {/* Local Indore Customer Reviews */}
        <CustomerReviews />

        {/* Shaadi & Occasion Style Guide Lookbook */}
        <WeddingLookbook />

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
