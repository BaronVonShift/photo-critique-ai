import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Brain, Camera, Star, Zap, Users, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About <span className="text-accent">PhotoCritique AI</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                Revolutionizing photography feedback with advanced artificial intelligence
              </p>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    Advanced AI Technology
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Our AI system has been trained on thousands of professional photographs 
                    and expert critiques to provide you with the most accurate and helpful 
                    feedback possible.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Brain className="h-4 w-4 text-primary" />
                      </div>
                      <span>Neural network trained on professional photography</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Zap className="h-4 w-4 text-accent" />
                      </div>
                      <span>Real-time analysis in under 30 seconds</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-secondary/30 rounded-lg flex items-center justify-center">
                        <Award className="h-4 w-4 text-foreground" />
                      </div>
                      <span>Professional-grade feedback quality</span>
                    </div>
                  </div>
                </div>
                
                <Card className="card-gradient p-8">
                  <h3 className="text-xl font-semibold mb-6">AI Analysis Process</h3>
                  <div className="space-y-4">
                    {[
                      "Image preprocessing and enhancement",
                      "Composition analysis using rule of thirds",
                      "Lighting and exposure evaluation",
                      "Focus and depth of field assessment",
                      "Style and mood interpretation",
                      "Creativity and uniqueness scoring"
                    ].map((step, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                          {index + 1}
                        </div>
                        <span className="text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 5-Point System */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-6">
                  Our 5-Point Analysis System
                </h2>
                <p className="text-lg text-muted-foreground">
                  Each photo is evaluated across five critical dimensions of photography excellence
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Composition",
                    icon: Camera,
                    description: "Rule of thirds, leading lines, framing, balance, and visual flow. We analyze how elements are arranged to create visual impact.",
                    color: "bg-primary/10 text-primary"
                  },
                  {
                    title: "Lighting & Exposure", 
                    icon: Star,
                    description: "Natural and artificial lighting quality, shadows, highlights, contrast, and overall exposure balance.",
                    color: "bg-accent/10 text-accent"
                  },
                  {
                    title: "Focus & Depth",
                    icon: Zap,
                    description: "Depth of field usage, focus accuracy, bokeh quality, and how focus directs viewer attention.",
                    color: "bg-secondary/30 text-foreground"
                  },
                  {
                    title: "Styling & Mood",
                    icon: Users,
                    description: "Color harmony, aesthetic choices, emotional tone, and overall visual atmosphere of the image.",
                    color: "bg-primary/10 text-primary"
                  },
                  {
                    title: "Creativity & Concept",
                    icon: Award,
                    description: "Originality, storytelling, artistic expression, and unique perspective or creative interpretation.",
                    color: "bg-accent/10 text-accent"
                  }
                ].map((point, index) => (
                  <Card key={index} className="card-gradient p-6 hover:scale-105 transition-transform duration-300">
                    <div className={`w-12 h-12 ${point.color} rounded-xl flex items-center justify-center mb-4`}>
                      <point.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sample Analysis */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-6">
                  Sample Analysis
                </h2>
                <p className="text-lg text-muted-foreground">
                  See how our AI provides detailed, professional feedback
                </p>
              </div>
              
              <Card className="card-gradient p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-accent mb-2">1. Composition</h3>
                    <p className="text-muted-foreground text-sm">
                      "The image demonstrates excellent use of the rule of thirds, with the main subject positioned perfectly at the intersection point. The leading lines draw the viewer's eye naturally through the frame, creating dynamic visual flow."
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-accent mb-2">2. Lighting & Exposure</h3>
                    <p className="text-muted-foreground text-sm">
                      "Beautiful golden hour lighting creates warm, soft shadows. The exposure is well-balanced with no blown highlights, preserving detail in both shadows and bright areas. The natural light enhances the subject's features beautifully."
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-accent mb-2">Verdict</h3>
                    <p className="text-foreground italic">
                      "Like a painter's masterful brushstroke, this image captures not just a moment, but an emotion. The harmony between light and shadow tells a story that words cannot express."
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;