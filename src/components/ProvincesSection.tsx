import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, TrendingUp } from "lucide-react";

const ProvincesSection = () => {
  const provinces = [
    {
      name: "Western Cape",
      routes: 45,
      difficulty: "Varied",
      highlight: "Table Mountain, Drakensberg",
      popular: true,
      color: "bg-gradient-to-r from-blue-500 to-cyan-500"
    },
    {
      name: "KwaZulu-Natal",
      routes: 38,
      difficulty: "Challenging",
      highlight: "Drakensberg, Royal Natal",
      popular: true,
      color: "bg-gradient-to-r from-green-500 to-emerald-500"
    },
    {
      name: "Gauteng",
      routes: 22,
      difficulty: "Easy-Moderate",
      highlight: "Magaliesberg, Suikerbosrand",
      popular: false,
      color: "bg-gradient-to-r from-yellow-500 to-orange-500"
    },
    {
      name: "Mpumalanga",
      routes: 28,
      difficulty: "Moderate",
      highlight: "Blyde River Canyon, Sudwala",
      popular: true,
      color: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      name: "Limpopo",
      routes: 15,
      difficulty: "Varied",
      highlight: "Waterberg, Soutpansberg",
      popular: false,
      color: "bg-gradient-to-r from-red-500 to-rose-500"
    },
    {
      name: "Eastern Cape",
      routes: 19,
      difficulty: "Moderate",
      highlight: "Amathole, Wild Coast",
      popular: false,
      color: "bg-gradient-to-r from-indigo-500 to-blue-500"
    },
    {
      name: "Free State",
      routes: 12,
      difficulty: "Easy",
      highlight: "Golden Gate, Maluti",
      popular: false,
      color: "bg-gradient-to-r from-amber-500 to-yellow-500"
    },
    {
      name: "North West",
      routes: 8,
      difficulty: "Easy-Moderate",
      highlight: "Magaliesberg, Pilanesberg",
      popular: false,
      color: "bg-gradient-to-r from-teal-500 to-green-500"
    },
    {
      name: "Northern Cape",
      routes: 6,
      difficulty: "Challenging",
      highlight: "Augrabies, Kgalagadi",
      popular: false,
      color: "bg-gradient-to-r from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="routes" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore All 9 Provinces
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover breathtaking hiking routes across South Africa. From coastal trails to mountain peaks, find your next adventure.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">193</div>
            <div className="text-muted-foreground">Total Routes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">9</div>
            <div className="text-muted-foreground">Provinces Covered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Trail Updates</div>
          </div>
        </div>

        {/* Provinces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {provinces.map((province, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-mountain transition-smooth group cursor-pointer">
              {province.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    Popular
                  </div>
                </div>
              )}
              
              {/* Background Gradient */}
              <div className={`absolute inset-0 ${province.color} opacity-10 group-hover:opacity-20 transition-smooth`}></div>
              
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                  {province.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Routes:</span>
                    <span className="font-semibold text-primary">{province.routes}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Difficulty:</span>
                    <span className="text-sm font-medium">{province.difficulty}</span>
                  </div>
                  
                  <div className="border-t pt-3">
                    <p className="text-sm text-muted-foreground mb-3">
                      <strong>Featured:</strong> {province.highlight}
                    </p>
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                      <Clock className="mr-2 h-4 w-4" />
                      Explore Trails
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Can't Find Your Perfect Trail?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're constantly adding new routes and updating existing ones. Submit a trail suggestion or join our community to get the latest updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg">
                Submit a Trail
              </Button>
              <Button variant="outline" size="lg">
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvincesSection;