import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Calculator, BookOpen, CheckCircle, ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { EmailCapture } from "@/components/EmailCapture";

import { useRef, useState, useEffect } from 'react';

const resources = [
  {
    id: 'readiness-framework',
    icon: BookOpen,
    title: '2026 AI Automation Readiness Assessment',
    description: 'Evaluate organizational readiness and identify your highest-impact AI automation opportunities.',
    color: {
      bg: 'bg-blue-500/10',
      text: 'text-blue-700 dark:text-blue-400',
      border: 'border-blue-500/30',
      iconBg: 'bg-blue-500/20'
    },
    keyBenefits: [
      'Overall readiness score (0-100) with benchmarks',
      'Top 5 AI automation opportunities ranked by ROI',
      '90-day quick-win roadmap template'
    ],
    resourceName: '2026 Automation Readiness Assessment'
  },
  {
    id: 'implementation-guide',
    icon: CheckCircle,
    title: 'n8n Automation Implementation Guide',
    description: 'Step-by-step technical guide for implementing enterprise-grade automation workflows.',
    color: {
      bg: 'bg-purple-500/10',
      text: 'text-purple-700 dark:text-purple-400',
      border: 'border-purple-500/30',
      iconBg: 'bg-purple-500/20'
    },
    keyBenefits: [
      'Infrastructure setup and deployment options',
      'API connection patterns and OAuth2 flows',
      'Performance tuning and scaling strategies'
    ],
    resourceName: 'n8n Automation Implementation Guide'
  },
  {
    id: 'roi-calculator',
    icon: Calculator,
    title: 'Automation ROI Calculator',
    description: 'Calculate potential cost savings and efficiency gains from AI-powered automation.',
    color: {
      bg: 'bg-emerald-500/10',
      text: 'text-emerald-700 dark:text-emerald-400',
      border: 'border-emerald-500/30',
      iconBg: 'bg-emerald-500/20'
    },
    keyBenefits: [
      'Current SaaS spend and labor cost analysis',
      'Time saved and error reduction impact',
      '3-year TCO comparison with projections'
    ],
    resourceName: 'Automation ROI Calculator'
  }
];

const Resources = () => {
  const sectionsRef = useRef<{[key: string]: HTMLDivElement | null}>({});

  const scrollToSection = (sectionId: string) => {
    const section = sectionsRef.current[sectionId];
    if (section) {
      const yOffset = -100;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };


  return (
    <div className="min-h-screen">
      <SEO
        title="Automation Resources - 2026 Assessment & ROI Calculator | Vaigence"
        description="Download free automation resources: 2026 AI Automation Readiness Assessment, n8n Implementation Guide, and ROI Calculator. Designed for COOs and operations leaders."
        canonical="https://vaigence.com/resources"
        keywords="automation assessment, ROI calculator, n8n implementation guide, automation readiness, workflow automation resources"
      />
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-muted/30">
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

        {/* Resource Cards Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {resources.map((resource) => {
                const Icon = resource.icon;
                return (
                  <Card
                    key={resource.id}
                    className="p-8 hover:shadow-lg transition-all cursor-pointer group border-border/50 hover:border-primary/30"
                    onClick={() => scrollToSection(resource.id)}
                  >
                    <div className="space-y-6">
                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-xl ${resource.color.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-8 h-8 ${resource.color.text}`} />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold tracking-tight leading-tight group-hover:text-primary transition-colors">
                        {resource.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        {resource.description}
                      </p>

                      {/* Key Benefits */}
                      <div className="space-y-3 pt-2">
                        {resource.keyBenefits.map((benefit, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle className={`w-4 h-4 ${resource.color.text} flex-shrink-0 mt-0.5`} />
                            <span className="text-xs text-muted-foreground font-light leading-snug">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Learn More */}
                      <div className={`flex items-center gap-2 text-sm font-medium pt-2 group-hover:gap-3 transition-all ${resource.color.text}`}>
                        <span>View details</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Detailed Resources Section Header */}
        <section className="py-8 bg-muted/50 border-y border-border">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center">
              <h2 className="text-2xl font-semibold tracking-tight mb-2">
                Detailed Resource Information
              </h2>
              <p className="text-sm text-muted-foreground font-light">
                Click on a card above or scroll to explore each resource in depth
              </p>
            </div>
          </div>
        </section>

        {/* Automation Readiness Framework */}
        <section
          id="readiness-framework"
          ref={el => sectionsRef.current['readiness-framework'] = el}
          className="py-16 scroll-mt-24"
        >
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
                <EmailCapture
                  buttonText="Get Assessment"
                  resourceName="2026 Automation Readiness Assessment"
                  className="max-w-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Guide */}
        <section
          id="implementation-guide"
          ref={el => sectionsRef.current['implementation-guide'] = el}
          className="py-16 bg-muted/30 scroll-mt-24"
        >
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
                <EmailCapture
                  buttonText="Download Guide"
                  resourceName="n8n Automation Implementation Guide"
                  className="max-w-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section
          id="roi-calculator"
          ref={el => sectionsRef.current['roi-calculator'] = el}
          className="py-16 scroll-mt-24"
        >
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
                <EmailCapture
                  buttonText="Get Calculator"
                  resourceName="Automation ROI Calculator"
                  className="max-w-lg"
                />
              </div>

              <div className="mt-12 text-center">
                <p className="text-muted-foreground font-light mb-6">
                  Want personalized guidance on your automation strategy?
                </p>
                <a
                  href="https://calendar.app.google/Reuhsv1WCirVRF168"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-emerald-600 text-white"
                  >
                    Schedule a Consultation
                  </Button>
                </a>
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
