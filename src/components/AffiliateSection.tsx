import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, TrendingUp, DollarSign, Target } from "lucide-react";
import affiliateImage from "@/assets/affiliate-gear.jpg";

const AffiliateSection = () => {
  const categories = [
    {
      title: "Hiking Boots",
      description: "Premium outdoor footwear from top brands",
      commission: "8-12%",
      icon: "👢",
      popular: true
    },
    {
      title: "Backpacks",
      description: "Trail-tested packs for every adventure",
      commission: "6-10%",
      icon: "🎒",
      popular: true
    },
    {
      title: "Outdoor Apparel",
      description: "Weather-resistant clothing & accessories",
      commission: "5-8%",
      icon: "👕",
      popular: false
    },
    {
      title: "Supplements",
      description: "Sports nutrition & recovery products",
      commission: "15-25%",
      icon: "💊",
      popular: true
    },
    {
      title: "Accommodation",
      description: "Mountain lodges & camping sites",
      commission: "3-6%",
      icon: "🏔️",
      popular: false
    },
    {
      title: "Tech & Gadgets",
      description: "GPS devices, cameras & outdoor tech",
      commission: "4-8%",
      icon: "📱",
      popular: false
    }
  ];

  return (
    <section id="affiliate" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Monetize Your Adventure
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Earn commission by recommending the best hiking gear. Join our affiliate program and start making money from day one.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="affiliate" size="lg" className="group">
              <TrendingUp className="mr-2 h-5 w-5" />
              Start Earning Today
            </Button>
            <Button variant="outline" size="lg">
              View Commission Rates
            </Button>
          </div>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="text-center hover:shadow-mountain transition-smooth">
            <CardHeader>
              <DollarSign className="h-12 w-12 text-accent mx-auto mb-4" />
              <CardTitle>High Commissions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Earn up to 25% commission on premium outdoor gear and supplements
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-mountain transition-smooth">
            <CardHeader>
              <Target className="h-12 w-12 text-accent mx-auto mb-4" />
              <CardTitle>Targeted Audience</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Reach passionate South African hikers actively seeking gear recommendations
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-mountain transition-smooth">
            <CardHeader>
              <ShoppingBag className="h-12 w-12 text-accent mx-auto mb-4" />
              <CardTitle>Quality Partners</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Partner with trusted brands that outdoor enthusiasts love and trust
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Product Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="relative hover:shadow-mountain transition-smooth group">
              {category.popular && (
                <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Popular
                </div>
              )}
              
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{category.icon}</span>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Commission:</span>
                  <span className="font-semibold text-accent">{category.commission}</span>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  View Products
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-forest rounded-2xl p-8 text-primary-foreground">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Earning?</h3>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Join Top Traverse affiliate program and turn your passion for hiking into a profitable venture. No upfront costs, just pure earning potential.
          </p>
          <Button variant="adventure" size="lg">
            Apply for Affiliate Program
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AffiliateSection;