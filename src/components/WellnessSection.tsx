import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Leaf, Zap, Brain, Shield, Sun } from "lucide-react";
import wellnessImage from "@/assets/wellness-nature.jpg";

const WellnessSection = () => {
  const wellnessTopics = [
    {
      icon: Heart,
      title: "Cardiovascular Health",
      description: "Improve heart health through regular hiking and outdoor activities",
      tips: ["Start with easier trails", "Maintain steady pace", "Monitor heart rate"],
      color: "text-red-500"
    },
    {
      icon: Leaf,
      title: "Mental Wellness",
      description: "Reduce stress and anxiety with nature-based mindfulness practices",
      tips: ["Practice trail meditation", "Digital detox hikes", "Mindful breathing"],
      color: "text-green-500"
    },
    {
      icon: Zap,
      title: "Physical Fitness",
      description: "Build strength, endurance, and flexibility through hiking",
      tips: ["Progressive training", "Cross-training", "Recovery protocols"],
      color: "text-yellow-500"
    },
    {
      icon: Brain,
      title: "Cognitive Function",
      description: "Enhance focus and mental clarity through outdoor activities",
      tips: ["Navigation challenges", "Memory exercises", "Problem-solving"],
      color: "text-purple-500"
    },
    {
      icon: Shield,
      title: "Injury Prevention",
      description: "Stay safe on the trails with proper preparation and techniques",
      tips: ["Pre-hike stretching", "Proper gear usage", "Risk assessment"],
      color: "text-blue-500"
    },
    {
      icon: Sun,
      title: "Nutrition & Recovery",
      description: "Fuel your body and recover effectively for optimal performance",
      tips: ["Hydration strategies", "Energy food planning", "Post-hike recovery"],
      color: "text-orange-500"
    }
  ];

  const programs = [
    {
      title: "Beginner Hiker Wellness",
      duration: "4 weeks",
      price: "Free",
      features: ["Basic fitness prep", "Safety fundamentals", "Mental preparation", "Equipment basics"]
    },
    {
      title: "Advanced Trail Athlete",
      duration: "8 weeks",
      price: "R299",
      features: ["Performance optimization", "Advanced nutrition", "Recovery protocols", "Mental resilience"]
    },
    {
      title: "Wellness Retreat Guide",
      duration: "12 weeks",
      price: "R599",
      features: ["Leadership training", "Group wellness", "Advanced first aid", "Mindfulness coaching"]
    }
  ];

  return (
    <section id="wellness" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Holistic Hiking Wellness
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Transform your hiking experience with comprehensive wellness practices that nurture body, mind, and spirit on every trail adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Start Wellness Journey
              </Button>
              <Button variant="outline" size="lg">
                Download Guide
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={wellnessImage} 
              alt="Wellness in nature" 
              className="rounded-2xl shadow-mountain w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-forest opacity-20 rounded-2xl"></div>
          </div>
        </div>

        {/* Wellness Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {wellnessTopics.map((topic, index) => (
            <Card key={index} className="hover:shadow-mountain transition-smooth group">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <topic.icon className={`h-8 w-8 ${topic.color}`} />
                  <CardTitle className="text-lg">{topic.title}</CardTitle>
                </div>
                <p className="text-muted-foreground text-sm">{topic.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-foreground">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {topic.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Wellness Programs */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Wellness Programs
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Structured programs designed to enhance your hiking experience through holistic wellness practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className={`relative hover:shadow-mountain transition-smooth ${index === 1 ? 'ring-2 ring-accent' : ''}`}>
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <div className="text-2xl font-bold text-primary mt-2">
                    {program.price}
                    <span className="text-sm font-normal text-muted-foreground">/{program.duration}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={index === 1 ? "hero" : "outline"} 
                    size="lg" 
                    className="w-full"
                  >
                    {program.price === "Free" ? "Get Started" : "Enroll Now"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-mountain rounded-2xl p-8 text-primary-foreground">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Hiking Experience?</h3>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Join thousands of hikers who've discovered the power of holistic wellness on the trail. Start your journey to better health, mindfulness, and adventure today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="adventure" size="lg">
              Start Free Assessment
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Book Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessSection;