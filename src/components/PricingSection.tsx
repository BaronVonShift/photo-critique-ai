import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "€0",
      period: "forever",
      description: "Perfect for trying out our AI critique system",
      features: [
        "5 critiques per month",
        "Basic analysis report",
        "Email support",
        "Standard processing time"
      ],
      cta: "Get Started Free",
      popular: false,
      icon: Star,
      color: "border-primary/20 bg-primary/5"
    },
    {
      name: "Pro",
      price: "€9.99",
      period: "per month",
      description: "For photographers who want to improve their skills",
      features: [
        "50 critiques per month",
        "Detailed analysis reports",
        "Priority processing",
        "PDF report downloads",
        "Email & chat support",
        "Critique history"
      ],
      cta: "Start Pro Trial",
      popular: true,
      icon: Zap,
      color: "border-accent bg-accent/10"
    },
    {
      name: "Expert",
      price: "€29.99",
      period: "per month",
      description: "For professional photographers and studios",
      features: [
        "Unlimited critiques",
        "Advanced analysis reports",
        "Instant processing",
        "PDF & print-ready reports",
        "Priority support",
        "Critique history",
        "Team collaboration",
        "API access"
      ],
      cta: "Start Expert Trial",
      popular: false,
      icon: Crown,
      color: "border-secondary/30 bg-secondary/10"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your <span className="text-red-600">Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free and upgrade as you grow. All plans include our advanced AI analysis.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className="relative">
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10 bg-red-600 text-white">
                    Most Popular
                  </Badge>
                )}
                
                <div className={`card-gradient p-8 rounded-xl border-2 ${plan.color} transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'ring-2 ring-accent/20' : ''
                }`}>
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className="h-8 w-8 text-foreground" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground mb-4">{plan.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-red-600 hover:bg-red-700' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Can I cancel anytime?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">What file formats do you support?</h4>
                <p className="text-sm text-muted-foreground">
                  We support JPG, PNG, HEIC, and RAW formats up to 50MB for Pro and Expert plans.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">How accurate is the AI analysis?</h4>
                <p className="text-sm text-muted-foreground">
                  Our AI has been trained on millions of professional photos and provides analysis comparable to expert photographers.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Do you offer refunds?</h4>
                <p className="text-sm text-muted-foreground">
                  We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, we'll refund your payment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 