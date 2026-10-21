import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import UtmBuilder from '../components/UtmBuilder';
import ProductPreview from '../components/ProductPreview';
import ProblemSection from '../components/ProblemSection';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import AnalyticsShowcase from '../components/AnalyticsShowcase';
import AttributionFlow from '../components/AttributionFlow';
import Integrations from '../components/Integrations';
import TrustPrivacy from '../components/TrustPrivacy';
import Pricing from '../components/Pricing';
import Faq from '../components/Faq';
import FinalCta from '../components/FinalCta';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#06090E] text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-black">
      {/* Section 1: Product Announcement Banner */}
      <AnnouncementBar />

      {/* Section 2: Precision Telemetry Navigation */}
      <Navbar />

      {/* Section 3: Value Proposition & Teaser Hero */}
      <Hero />

      {/* Section 4: Interactive UTM Link Builder */}
      <UtmBuilder />

      {/* Section 4.5: Live Ingestion & Telemetry Dashboard Preview */}
      <ProductPreview />

      {/* Section 5: The Attribution Dilemma (Problem & Broken Workflows) */}
      <ProblemSection />

      {/* Section 6: How It Works (4-Stage Pipeline) */}
      <HowItWorks />

      {/* Section 7: Core Platform Capabilities & Feature Matrix */}
      <Features />

      {/* Section 8: Interactive Analytics & Campaigns Breakdown */}
      <AnalyticsShowcase />

      {/* Section 9: Attribution Architecture & Data Flow */}
      <AttributionFlow />

      {/* Section 10: Connected Ecosystem & Supported Integrations */}
      <Integrations />

      {/* Section 11: Trust, Privacy & Data Governance */}
      <TrustPrivacy />

      {/* Section 12: Transparent Pricing Plans */}
      <Pricing />

      {/* Section 13: Attribution FAQ */}
      <Faq />

      {/* Section 14: Final Call to Action */}
      <FinalCta />

      {/* Section 15: Precision Footer */}
      <Footer />
    </main>
  );
}
