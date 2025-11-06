import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  "Step-by-step automation roadmap for 2026",
  "Assessment tools for your current tech stack",
  "Cost optimization strategies and ROI calculator",
  "Best practices from leading organizations",
];

export const CTASection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // TODO: Implement lead capture logic
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl shadow-elegant p-8 md:p-12 lg:p-16 border border-border">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                Ready to Transform Your Operations?
              </h2>
              <p className="text-lg text-muted-foreground">
                Get your free 2026 Automation Readiness document and start your journey from disconnected tools to intelligent automation.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" variant="hero" size="lg" className="group">
                Download Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Join 500+ operations leaders preparing for AI-first automation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
