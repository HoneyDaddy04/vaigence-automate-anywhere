import { EmailCapture } from "@/components/EmailCapture";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-hero">
      <div className="container relative z-10 mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium shadow-soft animate-fade-in">
              <span className="relative flex h-2 w-2 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-muted-foreground">Preparing for 2026</span>
            </div>

            <h1 className="text-5xl font-semibold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] animate-fade-in-up">
              Transform Operations Through{" "}
              <span className="text-muted-foreground">AI Automation</span>
            </h1>

            <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              We help organizations transition from disconnected software tools to intelligent,
              AI-powered automation that drives measurable efficiency and cost savings.
            </p>

            <div className="animate-fade-in-up animation-delay-400">
              <EmailCapture
                buttonText="Get Assessment"
                resourceName="2026 Automation Readiness Assessment"
                className="max-w-lg mx-auto pt-4"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
    </section>
  );
};
