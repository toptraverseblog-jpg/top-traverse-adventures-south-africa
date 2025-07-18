import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Award, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-mountains.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-mountain opacity-75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
            Discover South Africa's
            <span className="block bg-gradient-sunset bg-clip-text text-transparent">
              Hidden Trails
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Your ultimate guide to hiking adventures across all 9 provinces. Find trails, gear up with affiliate partners, and join a community of outdoor enthusiasts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="group">
              Explore Routes
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="adventure" size="lg">
              Shop Gear & Earn
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <MapPin className="h-6 w-6 text-accent mr-2" />
                <span className="text-2xl font-bold text-primary-foreground">150+</span>
              </div>
              <p className="text-primary-foreground/80">Hiking Routes</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-accent mr-2" />
                <span className="text-2xl font-bold text-primary-foreground">5K+</span>
              </div>
              <p className="text-primary-foreground/80">Active Members</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="h-6 w-6 text-accent mr-2" />
                <span className="text-2xl font-bold text-primary-foreground">9</span>
              </div>
              <p className="text-primary-foreground/80">Provinces Covered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;