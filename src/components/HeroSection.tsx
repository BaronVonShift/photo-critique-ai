import { Button } from "@/components/ui/button";
import { Camera, Zap, Download, Star, ArrowRight, Play } from "lucide-react";
// Using a placeholder image since the hero image import is causing issues
const heroImage = "/placeholder-hero.jpg";
import Logo from "./Logo";

const HeroSection = () => {
  const scrollToUpload = () => {
    const element = document.getElementById('upload');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional photography setup" 
          className="w-full h-full object-cover transform scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/80" />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-secondary/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <Logo size={48} />
          </div>
          
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-600/10 border border-red-600/20 mb-8 animate-fade-in">
            <Zap className="h-4 w-4 text-red-600 mr-2 animate-pulse" />
            <span className="text-sm font-medium text-red-600">AI-Powered Analysis</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Get Professional
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-700 animate-gradient" style={{
              backgroundSize: '200% 200%'
            }}>
              Photography Critique
            </span>
            from AI
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Upload your photos and receive instant, professional analysis across 5 key areas: 
            <span className="text-accent font-semibold"> Composition, Lighting, Focus, Styling, and Creativity</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in">
            <Button size="lg" className="btn-hero group hover:scale-105 transition-transform" onClick={scrollToUpload}>
              <Camera className="h-5 w-5 mr-2" />
              Upload Your Photo Now
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="bg-card/50 border-border hover:bg-card group">
              <Play className="h-4 w-4 mr-2" />
              Watch Demo
            </Button>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in">
            <div className="card-gradient p-6 rounded-lg text-center hover:scale-105 transition-transform group">
              <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Star className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">5-Point Analysis</h3>
              <p className="text-sm text-muted-foreground">Comprehensive critique across all key photography elements</p>
            </div>
            
            <div className="card-gradient p-6 rounded-lg text-center hover:scale-105 transition-transform group">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Instant Results</h3>
              <p className="text-sm text-muted-foreground">Get professional feedback in seconds, not days</p>
            </div>
            
            <div className="card-gradient p-6 rounded-lg text-center hover:scale-105 transition-transform group">
              <div className="w-12 h-12 bg-secondary/30 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Download className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="font-semibold mb-2">PDF Reports</h3>
              <p className="text-sm text-muted-foreground">Download professional critique reports to keep and share</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;