import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-automation.jpg";

export const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // TODO: Implement lead capture logic
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              <span>2026 Automation Readiness</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              From Disconnected Tools to{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Intelligent Automation
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto lg:mx-0">
              Vaigence helps organizations move from multiple disconnected software tools to 
              intelligent AI-powered automation, saving time, reducing manual tasks, and improving 
              coordination across teams and departments.
            </p>

            {/* Lead Capture Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
              <Input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" variant="hero" size="lg" className="group">
                Get Readiness Guide
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>

            <p className="text-sm text-muted-foreground">
              Download your free 2026 Automation Readiness document
            </p>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={heroImage}
                alt="AI automation visualization showing connected workflows"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative gradient overlay */}
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl -z-10 rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
