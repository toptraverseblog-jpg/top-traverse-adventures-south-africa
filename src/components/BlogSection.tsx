import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Eye, MessageCircle } from "lucide-react";

const BlogSection = () => {
  const featuredPosts = [
    {
      title: "Best Hiking Trails in the Drakensberg for Beginners",
      excerpt: "Discover family-friendly trails with stunning views and manageable difficulty levels in the Drakensberg Mountains.",
      author: "Sarah Williams",
      date: "2024-01-15",
      category: "Trail Guides",
      readTime: "8 min",
      views: 2451,
      comments: 23,
      featured: true
    },
    {
      title: "Essential Gear for South African Summer Hiking",
      excerpt: "Stay safe and comfortable during hot weather hikes with our comprehensive gear guide and safety tips.",
      author: "Mike Thompson",
      date: "2024-01-12",
      category: "Gear Reviews",
      readTime: "6 min",
      views: 1876,
      comments: 15,
      featured: false
    },
    {
      title: "Table Mountain: Hidden Routes Beyond the Cable Car",
      excerpt: "Explore lesser-known trails that offer solitude and spectacular views away from the tourist crowds.",
      author: "Lisa Chen",
      date: "2024-01-10",
      category: "Adventure",
      readTime: "10 min",
      views: 3201,
      comments: 34,
      featured: false
    },
    {
      title: "Nutrition for Multi-Day Hiking Adventures",
      excerpt: "Fuel your body properly for extended hikes with expert nutrition advice and meal planning tips.",
      author: "Dr. James Patel",
      date: "2024-01-08",
      category: "Wellness",
      readTime: "12 min",
      views: 1654,
      comments: 18,
      featured: false
    }
  ];

  const categories = [
    { name: "Trail Guides", count: 45, color: "bg-green-100 text-green-800" },
    { name: "Gear Reviews", count: 32, color: "bg-blue-100 text-blue-800" },
    { name: "Safety Tips", count: 28, color: "bg-red-100 text-red-800" },
    { name: "Adventure Stories", count: 23, color: "bg-purple-100 text-purple-800" },
    { name: "Wellness", count: 19, color: "bg-yellow-100 text-yellow-800" }
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest from the Trail
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert insights, trail reviews, gear guides, and adventure stories from South Africa's hiking community.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <div key={index} className={`px-4 py-2 rounded-full text-sm font-medium ${category.color} cursor-pointer hover:scale-105 transition-transform`}>
              {category.name} ({category.count})
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Featured Post */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden hover:shadow-mountain transition-smooth group">
              <div className="relative">
                <div className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
                <div className="h-64 bg-gradient-forest"></div>
              </div>
              
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{featuredPosts[0].date}</span>
                  <span>•</span>
                  <User className="h-4 w-4" />
                  <span>{featuredPosts[0].author}</span>
                  <span>•</span>
                  <span>{featuredPosts[0].readTime} read</span>
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-smooth">
                  {featuredPosts[0].title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {featuredPosts[0].excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{featuredPosts[0].views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{featuredPosts[0].comments}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Posts */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground mb-4">Recent Posts</h3>
            
            {featuredPosts.slice(1).map((post, index) => (
              <Card key={index} className="hover:shadow-card transition-smooth group cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-base group-hover:text-primary transition-smooth line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>By {post.author}</span>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        <span>{post.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <Card className="bg-gradient-forest text-primary-foreground">
            <CardContent className="text-center p-8">
              <h3 className="text-2xl font-bold mb-4">Never Miss an Adventure</h3>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Get weekly trail guides, gear reviews, and exclusive hiking tips delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="px-4 py-2 rounded-md text-foreground bg-background border border-border flex-1"
                />
                <Button variant="adventure" size="lg">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;