import { Upload, Zap, Download, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Photo",
      description: "Drag & drop or select your image. We support JPG, PNG, and HEIC formats up to 10MB.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Zap,
      title: "AI Analysis",
      description: "Our advanced AI analyzes your photo across 5 key areas in just 10-30 seconds.",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: Download,
      title: "Get Your Critique",
      description: "Receive detailed feedback and download a professional PDF report to keep forever.",
      color: "bg-secondary/30 text-foreground"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It <span className="text-red-600">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get professional photography feedback in three simple steps
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="card-gradient p-8 rounded-xl text-center transition-all duration-300 hover:scale-105">
                  <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <step.icon className="h-8 w-8" />
                  </div>
                  
                  <div className="text-sm font-semibold text-accent mb-2">
                    Step {index + 1}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-red-600/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* The 5 Analysis Points */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12">
            Our 5-Point Analysis System
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Composition",
                description: "Rule of thirds, framing, leading lines, and visual balance"
              },
              {
                title: "Lighting & Exposure",
                description: "Natural and artificial lighting, shadows, highlights, and mood"
              },
              {
                title: "Focus & Depth",
                description: "Depth of field, focus points, and visual sharpness"
              },
              {
                title: "Styling & Mood",
                description: "Color harmony, aesthetic choices, and emotional impact"
              },
              {
                title: "Creativity & Concept",
                description: "Originality, storytelling, and artistic expression"
              }
            ].map((point, index) => (
              <div key={index} className="bg-card/50 p-6 rounded-lg border border-border">
                <h4 className="font-semibold text-accent mb-2">{point.title}</h4>
                <p className="text-sm text-muted-foreground">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;