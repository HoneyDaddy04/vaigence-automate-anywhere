import { EmailCapture } from "@/components/EmailCapture";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "6 key assessment areas",
  "90-day roadmap template",
  "ROI estimation guide",
];

export const CTASection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl leading-tight">
              Start Your Automation Journey
            </h2>

            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              Take our 2026 Automation Readiness Assessment to identify your highest-impact opportunities and get a personalized 90-day roadmap.
            </p>

            <EmailCapture
              buttonText="Get Assessment"
              resourceName="2026 Automation Readiness Assessment"
              className="max-w-lg mx-auto pt-4"
            />

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              {benefits.map((benefit, index) => (
                <>
                  <span key={benefit} className="flex items-center gap-2 group">
                    <CheckCircle2 className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    {benefit}
                  </span>
                  {index < benefits.length - 1 && (
                    <span className="hidden sm:block text-border">•</span>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-subtle pointer-events-none opacity-50" />
    </section>
  );
};
