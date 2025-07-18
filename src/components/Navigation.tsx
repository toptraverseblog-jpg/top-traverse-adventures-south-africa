import { useState } from "react";
import { Menu, X, Mountain, ShoppingBag, MapPin, BookOpen, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home", icon: Mountain },
    { name: "Blog", href: "#blog", icon: BookOpen },
    { name: "Hiking Routes", href: "#routes", icon: MapPin },
    { name: "Affiliate Store", href: "#affiliate", icon: ShoppingBag },
    { name: "Wellness", href: "#wellness", icon: Heart },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50 shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Mountain className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Top Traverse</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-smooth flex items-center space-x-1"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </a>
            ))}
            <Button variant="affiliate" size="sm">
              Start Earning
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-smooth flex items-center space-x-2 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </a>
              ))}
              <Button variant="affiliate" size="sm" className="w-fit">
                Start Earning
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;