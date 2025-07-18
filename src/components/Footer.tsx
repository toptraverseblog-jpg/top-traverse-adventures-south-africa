import { Mountain, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerLinks = {
    hiking: [
      { name: "Trail Guides", href: "#" },
      { name: "Route Maps", href: "#" },
      { name: "Difficulty Levels", href: "#" },
      { name: "Safety Tips", href: "#" }
    ],
    affiliate: [
      { name: "Hiking Boots", href: "#" },
      { name: "Backpacks", href: "#" },
      { name: "Outdoor Apparel", href: "#" },
      { name: "Supplements", href: "#" }
    ],
    resources: [
      { name: "Weather Updates", href: "#" },
      { name: "Trail Conditions", href: "#" },
      { name: "Emergency Contacts", href: "#" },
      { name: "First Aid", href: "#" }
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" }
    ]
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-500" },
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-500" }
  ];

  return (
    <footer className="bg-gradient-mountain text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Mountain className="h-8 w-8 text-accent" />
                <span className="text-2xl font-bold">Top Traverse</span>
              </div>
              <p className="text-primary-foreground/80 mb-6 max-w-sm">
                South Africa's premier hiking community and affiliate marketplace. Discover trails, connect with nature, and gear up for your next adventure.
              </p>
              
              {/* Newsletter */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Trail Updates & Deals</h4>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="email" 
                    placeholder="Your email"
                    className="px-3 py-2 rounded-md text-foreground bg-background/10 border border-primary-foreground/20 backdrop-blur-sm placeholder:text-primary-foreground/60 flex-1"
                  />
                  <Button variant="adventure" size="sm">
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div>
              <h4 className="font-semibold mb-4">Hiking</h4>
              <ul className="space-y-2">
                {footerLinks.hiking.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Affiliate Store</h4>
              <ul className="space-y-2">
                {footerLinks.affiliate.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Mail className="h-5 w-5 text-accent" />
              <span className="text-primary-foreground/80">info@toptraverse.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Phone className="h-5 w-5 text-accent" />
              <span className="text-primary-foreground/80">+27 11 123 4567</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <MapPin className="h-5 w-5 text-accent" />
              <span className="text-primary-foreground/80">Cape Town, South Africa</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 py-6 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Top Traverse. All rights reserved. | 
            <span className="text-accent"> Empowering South African hikers since 2024</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;