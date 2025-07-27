import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Professional Photographer",
      company: "Chen Photography Studio",
      image: "/api/placeholder/40/40",
      content: "Anymus Vergo™ has transformed how I review my work. The detailed analysis helps me identify areas for improvement that I might have missed. It's like having a professional mentor available 24/7.",
      rating: 5,
      initials: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "Wedding Photographer",
      company: "Rodriguez Weddings",
      image: "/api/placeholder/40/40",
      content: "The AI critique is incredibly accurate. It caught composition issues in my wedding photos that I completely overlooked. My clients are now getting even better results thanks to this tool.",
      rating: 5,
      initials: "MR"
    },
    {
      name: "Emma Thompson",
      role: "Travel Photographer",
      company: "Freelance",
      image: "/api/placeholder/40/40",
      content: "As a travel photographer, I'm constantly shooting in different conditions. This AI tool helps me maintain quality across all my work and has improved my portfolio significantly.",
      rating: 5,
      initials: "ET"
    },
    {
      name: "David Kim",
      role: "Portrait Photographer",
      company: "Kim Portraits",
      image: "/api/placeholder/40/40",
      content: "The lighting analysis is spot-on. It's helped me understand how to better use natural light in my portrait sessions. The PDF reports are perfect for client presentations too.",
      rating: 5,
      initials: "DK"
    },
    {
      name: "Lisa Wang",
      role: "Product Photographer",
      company: "Wang Studios",
      image: "/api/placeholder/40/40",
      content: "For product photography, every detail matters. This AI tool has helped me refine my technique and deliver consistently high-quality work to my clients.",
      rating: 5,
      initials: "LW"
    },
    {
      name: "James Wilson",
      role: "Landscape Photographer",
      company: "Wilson Nature Photography",
      image: "/api/placeholder/40/40",
      content: "The composition analysis is incredibly detailed. It's helped me develop a better eye for framing and has improved my landscape photography dramatically.",
      rating: 5,
      initials: "JW"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by <span className="text-red-600">Photographers</span> Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of photographers who have improved their skills with AI-powered critique
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-gradient border-border hover:border-red-600/20 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex-1">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback className="bg-red-600/10 text-red-600 font-semibold">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <Quote className="h-6 w-6 text-red-600/30" />
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">10,000+</div>
              <div className="text-sm text-muted-foreground">Active Photographers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">50,000+</div>
              <div className="text-sm text-muted-foreground">Photos Analyzed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 