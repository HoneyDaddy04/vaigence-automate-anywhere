import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, Calculator, BookOpen, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const Resources = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl mb-6 leading-tight">
                Automation Resources
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Comprehensive tools and guides to accelerate your automation journey
              </p>
            </div>
          </div>
        </section>

        {/* Automation Readiness Framework */}
        <section id="readiness-framework" className="py-16 bg-muted/30">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight mb-4">
                    2026 AI Automation Readiness Assessment
                  </h2>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
                    A focused assessment framework for COOs and operations leaders to evaluate organizational readiness and identify your highest-impact AI automation opportunities.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">6 Assessment Areas</h3>
                  <ul className="space-y-3">
                    {[
                      "Process Maturity: Identify AI automation-ready workflows",
                      "Data Infrastructure: Evaluate integration readiness",
                      "Team Readiness: Assess capability gaps and training needs",
                      "Technology Stack: Score current tool compatibility",
                      "ROI Potential: Calculate expected AI automation efficiency gains",
                      "Change Management: Gauge organizational preparedness"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                        <span className="font-light leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">What You'll Get</h3>
                  <ul className="space-y-3">
                    {[
                      "Overall readiness score (0-100) with benchmarks",
                      "Top 5 AI automation opportunities ranked by ROI",
                      "90-day quick-win roadmap template",
                      "Budget estimation guide with cost examples",
                      "Risk mitigation checklist",
                      "Executive summary template for stakeholder buy-in"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                        <span className="font-light leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Download the Assessment</h3>
                <p className="text-muted-foreground font-light mb-4">Complete in 15-20 minutes. Get your readiness score and personalized roadmap instantly.</p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg">
                  <Input
                    type="email"
                    placeholder="Work email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Button
                    type="submit"
                    className="bg-primary hover:bg-emerald-600 text-white"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Get Assessment
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Guide */}
        <section className="py-16">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight mb-4">
                    n8n Automation Implementation Guide
                  </h2>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
                    Step-by-step technical guide for implementing enterprise-grade automation 
                    using n8n workflows, covering architecture, deployment, and best practices.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Phase 1: Foundation</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground font-light">
                    <li>• Infrastructure setup and deployment options</li>
                    <li>• n8n installation and configuration</li>
                    <li>• Authentication and security setup</li>
                    <li>• Environment configuration</li>
                    <li>• Workflow organization structure</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Phase 2: Integration</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground font-light">
                    <li>• API connection patterns</li>
                    <li>• OAuth2 authentication flows</li>
                    <li>• Custom node development</li>
                    <li>• Data transformation techniques</li>
                    <li>• Error handling strategies</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Phase 3: Optimization</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground font-light">
                    <li>• Performance tuning</li>
                    <li>• Monitoring and alerting</li>
                    <li>• Scaling strategies</li>
                    <li>• Testing frameworks</li>
                    <li>• Documentation practices</li>
                  </ul>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Get Implementation Guide</h3>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg">
                  <Input
                    type="email"
                    placeholder="Work email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Button 
                    type="submit" 
                    className="bg-primary hover:bg-emerald-600 text-white"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Guide
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section id="roi-calculator" className="py-16 bg-muted/30">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Calculator className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight mb-4">
                    Automation ROI Calculator
                  </h2>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
                    Calculate the potential cost savings and efficiency gains from implementing 
                    AI-powered automation across your operations.
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 mb-8">
                <h3 className="text-xl font-semibold mb-6">Calculator Features</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Cost Analysis</h4>
                    <ul className="space-y-2 text-muted-foreground font-light">
                      <li>• Current SaaS spend by category</li>
                      <li>• Labor hours spent on manual tasks</li>
                      <li>• Error correction and rework costs</li>
                      <li>• Opportunity cost of delayed processes</li>
                      <li>• Tool consolidation savings potential</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold">Value Projection</h4>
                    <ul className="space-y-2 text-muted-foreground font-light">
                      <li>• Time saved through automation</li>
                      <li>• Error reduction impact</li>
                      <li>• Productivity improvement metrics</li>
                      <li>• Scalability benefits quantified</li>
                      <li>• 3-year TCO comparison</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Access Calculator Spreadsheet</h3>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg">
                  <Input
                    type="email"
                    placeholder="Work email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Button 
                    type="submit" 
                    className="bg-primary hover:bg-emerald-600 text-white"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Get Calculator
                  </Button>
                </form>
              </div>

              <div className="mt-12 text-center">
                <p className="text-muted-foreground font-light mb-6">
                  Want personalized guidance on your automation strategy?
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-emerald-600 text-white"
                >
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
