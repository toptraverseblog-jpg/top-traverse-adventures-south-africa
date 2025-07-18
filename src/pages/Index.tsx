import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AffiliateSection from "@/components/AffiliateSection";
import ProvincesSection from "@/components/ProvincesSection";
import BlogSection from "@/components/BlogSection";
import WellnessSection from "@/components/WellnessSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AffiliateSection />
      <ProvincesSection />
      <BlogSection />
      <WellnessSection />
      <Footer />
    </div>
  );
};

export default Index;
