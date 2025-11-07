import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-hero">
      <div className="container relative z-10 mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium shadow-soft">
              <span className="text-muted-foreground">Preparing for 2026</span>
            </div>
            
            <h1 className="text-5xl font-semibold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1]">
              Transform Operations Through{" "}
              <span className="text-muted-foreground">AI Automation</span>
            </h1>
            
            <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
              We help organizations transition from disconnected software tools to intelligent, 
              AI-powered automation that drives measurable efficiency and cost savings.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto pt-4">
              <Input
                type="email"
                placeholder="Work email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 bg-background"
              />
              <Button type="submit" variant="premium" size="lg" className="h-12 px-8 group">
                Download Guide
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>

            <p className="text-sm text-muted-foreground font-light">
              2026 Automation Readiness Assessment · Free Resource
            </p>
          </div>
        </div>
      </div>
      
      {/* Subtle background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};
