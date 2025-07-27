import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { 
  Eye, 
  Lightbulb, 
  Target, 
  Palette, 
  Sparkles, 
  Zap, 
  Download, 
  Shield,
  Clock,
  BarChart3
} from "lucide-react";

const FeaturesSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  const features = [
    {
      icon: Eye,
      title: "Advanced Composition Analysis",
      description: "AI-powered analysis of rule of thirds, leading lines, framing, and visual balance with detailed suggestions for improvement.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      icon: Lightbulb,
      title: "Lighting & Exposure Expert",
      description: "Comprehensive evaluation of natural and artificial lighting, shadows, highlights, and mood to enhance your photography.",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20"
    },
    {
      icon: Target,
      title: "Focus & Depth Assessment",
      description: "Detailed analysis of depth of field, focus points, and visual sharpness to ensure your subjects stand out perfectly.",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"
    },
    {
      icon: Palette,
      title: "Styling & Mood Analysis",
      description: "Expert evaluation of color harmony, aesthetic choices, and emotional impact to create compelling visual stories.",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
    },
    {
      icon: Sparkles,
      title: "Creativity & Concept Review",
      description: "Assessment of originality, storytelling elements, and artistic expression to help you develop your unique style.",
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/20"
    },
    {
      icon: Zap,
      title: "Instant AI Processing",
      description: "Get professional-level analysis in 10-30 seconds with our advanced machine learning algorithms.",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20"
    }
  ];

  const benefits = [
    {
      icon: Download,
      title: "PDF Reports",
      description: "Download professional critique reports to keep and share with clients or mentors."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Get instant feedback anytime, anywhere - no need to wait for human reviewers."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your photos are processed securely and never stored permanently on our servers."
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Track your improvement over time with detailed analytics and comparison tools."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div 
          ref={elementRef}
          className={`text-center mb-16 scroll-fade-in ${isVisible ? 'visible' : ''}`}
        >
          <Badge className="mb-4 bg-red-600/10 text-red-600 border-red-600/20">
            AI-Powered Analysis
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="text-red-600">Photography Critique</span> at Your Fingertips
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our advanced AI analyzes your photos across 5 key areas, providing detailed feedback that helps you improve your photography skills instantly.
          </p>
        </div>
        
        {/* Main Features Grid */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`card-gradient border-2 ${feature.borderColor} hover:border-red-600/40 transition-all duration-300 hover:scale-105 group`}
              >
                <CardContent className="p-6">
                  <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">
              Why Choose Anymus Vergo™?
            </h3>
            <p className="text-muted-foreground">
              Experience the future of photography feedback with our cutting-edge AI technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <benefit.icon className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Sample Analysis Preview */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="card-gradient p-8 rounded-xl border border-border">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Sample Analysis Preview</h3>
              <p className="text-muted-foreground">
                See what a professional critique looks like
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="font-medium">Composition</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="w-12 h-full bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-semibold text-green-600">8.5/10</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="font-medium">Lighting</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="w-14 h-full bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-semibold text-blue-600">9.0/10</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="font-medium">Focus</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="w-10 h-full bg-yellow-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-semibold text-yellow-600">7.5/10</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="font-medium">Styling</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="w-13 h-full bg-purple-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-semibold text-purple-600">8.8/10</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="font-medium">Creativity</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="w-11 h-full bg-pink-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-semibold text-pink-600">8.2/10</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-red-600/10 rounded-lg border border-red-600/20">
                  <span className="font-medium">Overall Score</span>
                  <span className="text-lg font-bold text-red-600">8.4/10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 