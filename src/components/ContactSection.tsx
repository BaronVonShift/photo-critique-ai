import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted');
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help with your account or technical issues",
      contact: "support@photocritique.ai",
      action: "Send Email"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      contact: "Available 24/7",
      action: "Start Chat"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our photography experts",
      contact: "+1 (555) 123-4567",
      action: "Call Now"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="text-red-600">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? Our photography experts are here to help you get the most out of PhotoCritique AI.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="card-gradient border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" name="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" name="lastName" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" name="subject" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        rows={5}
                        placeholder="Tell us how we can help you..."
                        required 
                      />
                    </div>
                    
                    <Button type="submit" className="w-full group">
                      <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Methods */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-muted-foreground mb-8">
                  Choose the best way to reach us. Our photography experts are ready to help you improve your skills.
                </p>
              </div>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="card-gradient border-border hover:border-red-600/20 transition-all duration-300">
                    <CardContent className="p-6">
                                              <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center">
                            <method.icon className="h-6 w-6 text-red-600" />
                          </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-2">{method.title}</h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            {method.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">{method.contact}</span>
                            <Button variant="outline" size="sm">
                              {method.action}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Office Location */}
              <Card className="card-gradient border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Office Location</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Visit our studio for in-person consultations
                      </p>
                      <address className="text-sm not-italic">
                        Anymus Vergo™ Studio<br />
                        123 Photography Street<br />
                        San Francisco, CA 94102<br />
                        United States
                      </address>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* FAQ Quick Links */}
        <div className="mt-20 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Quick Help</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-auto p-4 flex-col space-y-2">
              <span className="font-semibold">Getting Started</span>
              <span className="text-xs text-muted-foreground">Learn how to use PhotoCritique AI</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex-col space-y-2">
              <span className="font-semibold">Account & Billing</span>
              <span className="text-xs text-muted-foreground">Manage your subscription</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex-col space-y-2">
              <span className="font-semibold">Technical Support</span>
              <span className="text-xs text-muted-foreground">Resolve technical issues</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 