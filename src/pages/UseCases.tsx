import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, AlertCircle, Zap, TrendingUp } from "lucide-react";

const categories = [
  "All",
  "Finance & Accounting",
  "HR & Talent",
  "Sales & Marketing",
  "Operations",
  "Customer Success",
  "IT & Infrastructure"
];

const useCases = [
  {
    id: 1,
    category: "Finance & Accounting",
    title: "Automated Invoice Processing & Reconciliation",
    problem: "Finance teams waste 15-20 hours weekly on manual invoice processing: downloading from email, data entry, matching to POs, chasing approvals. Result: payment delays, $45K in missed discounts annually, and month-end chaos.",
    currentApproach: "Staff manually copy data between email, accounting software, and procurement systems using spreadsheets for tracking. Reconciliation requires exporting data from multiple sources into Excel to identify mismatches.",
    automationSolution: "n8n automates end-to-end invoice workflow using AI OCR to extract data, auto-match to purchase orders, route for smart approvals, sync to accounting systems, and flag exceptions. Slack integration enables real-time approvals without email chains.",
    impact: [
      "85% reduction in manual data entry time",
      "Invoice processing time reduced from 5 days to 6 hours",
      "Captured $45K annually in early payment discounts",
      "99.7% accuracy in invoice matching",
      "Month-end close accelerated by 3 days"
    ],
    tools: ["Gmail/Outlook", "QuickBooks", "NetSuite", "Slack", "DocuSign"]
  },
  {
    id: 2,
    category: "HR & Talent",
    title: "End-to-End Candidate Onboarding Automation",
    problem: "HR manages 30-50 new hires monthly, each requiring 40+ manual tasks. Result: delayed access, confused hires, HR spending 60% of time on admin.",
    currentApproach: "Manual spreadsheet tracking, emailing IT for accounts, scheduling meetings individually, and chasing documents across departments.",
    automationSolution: "n8n auto-provisions accounts and equipment, delivers personalized schedules, collects documents with reminders, syncs HRIS/payroll, and provides AI chatbot.",
    impact: [
      "90% reduction in manual coordination tasks",
      "New hire first-day readiness improved to 100%",
      "HR time per onboarding reduced from 8 hours to 45 minutes",
      "New hire satisfaction increased by 42%",
      "Compliance documentation collection rate: 100%"
    ],
    tools: ["BambooHR", "Google Workspace", "Slack", "Gusto", "DocuSign", "Notion"]
  },
  {
    id: 3,
    category: "Sales & Marketing",
    title: "Multi-Channel Lead Qualification & Nurturing",
    problem: "Marketing generates 500+ monthly leads, only 15% sales-ready. Sales wastes time on bad leads while hot prospects go cold.",
    currentApproach: "Manual lead exports to spreadsheets, intuition-based scoring, incomplete CRM data entry, email handoffs. Sales manually researches each lead.",
    automationSolution: "n8n captures leads, enriches with company data, AI-scores by fit, routes hot leads instantly with briefs, triggers nurture sequences, and provides real-time dashboard.",
    impact: [
      "Lead response time reduced from 24 hours to 3 minutes",
      "Sales qualified lead rate increased from 15% to 38%",
      "Sales rep productivity increased by 55%",
      "Pipeline value increased by $2.1M quarterly",
      "Marketing-to-sales handoff friction eliminated"
    ],
    tools: ["HubSpot", "LinkedIn Sales Navigator", "Clearbit", "Slack", "Google Sheets", "Calendly"]
  },
  {
    id: 4,
    category: "Operations",
    title: "Intelligent Inventory Management & Reordering",
    problem: "Operations manages 3 warehouses with stockouts costing $80K monthly, while $200K in excess inventory ties up capital.",
    currentApproach: "Manual daily checks, Excel forecasting based on historical averages, emailing suppliers for quotes, weekly sales updates.",
    automationSolution: "n8n monitors inventory real-time, uses AI to predict stockouts 30 days ahead, auto-generates POs, compares quotes, redistributes stock, and alerts sales.",
    impact: [
      "Stockouts reduced by 87%",
      "Excess inventory reduced by $120K",
      "Order fulfillment rate improved to 98.5%",
      "Carrying costs reduced by 35%",
      "Procurement cycle time reduced by 60%"
    ],
    tools: ["Shopify", "NetSuite", "Google Sheets", "Slack", "ShipStation", "QuickBooks"]
  },
  {
    id: 5,
    category: "Customer Success",
    title: "Proactive Customer Health Monitoring & Intervention",
    problem: "CS team manages 300+ accounts but discovers churn risk only at renewal. Result: 18% annual churn and $500K lost revenue.",
    currentApproach: "Weekly manual analytics checks, ticket reviews, NPS scanning, and spreadsheet tracking of at-risk accounts. Reactive interventions only.",
    automationSolution: "n8n monitors usage and sentiment, calculates AI health scores, identifies churn indicators early, auto-triggers interventions, assigns at-risk accounts with context, and schedules proactive calls.",
    impact: [
      "Churn reduced from 18% to 7%",
      "Revenue retention increased by $420K annually",
      "Customer lifetime value increased by 35%",
      "CSM capacity increased from 60 to 100 accounts per rep",
      "Early intervention rate improved to 89%"
    ],
    tools: ["Salesforce", "Zendesk", "Mixpanel", "Slack", "Intercom", "ChurnZero"]
  },
  {
    id: 6,
    category: "IT & Infrastructure",
    title: "Automated IT Ticket Resolution & User Provisioning",
    problem: "IT receives 200+ weekly tickets, 60% repetitive. Tickets sit 24-48 hours. IT spends 70% of time on routine tasks, driving shadow IT.",
    currentApproach: "Email ticket submissions, manual triage through admin consoles, email approvals, manual provisioning. No self-service.",
    automationSolution: "n8n deploys AI chatbot for tier-1 requests, auto-routes approvals, provisions all systems simultaneously, deploys software scripts, monitors health proactively, and generates knowledge articles.",
    impact: [
      "Ticket volume reduced by 65%",
      "Average resolution time: 48 hours to 2 hours",
      "Employee satisfaction score increased by 51%",
      "IT team capacity freed for strategic projects: 70% to 30% on routine tasks",
      "Shadow IT incidents reduced by 78%"
    ],
    tools: ["Zendesk", "Okta", "Google Workspace", "Slack", "Jamf", "ServiceNow"]
  },
  {
    id: 7,
    category: "Finance & Accounting",
    title: "Automated Expense Report Processing & Policy Compliance",
    problem: "Finance reviews 400+ monthly expense reports. Reimbursements take 2-3 weeks. Finance spends 30 hours weekly on expenses instead of analysis.",
    currentApproach: "Manual line-item review against policy, chasing missing receipts, credit card matching, batch reimbursement processing.",
    automationSolution: "n8n uses AI to extract receipt data, auto-categorizes, validates policy real-time, matches cards, detects duplicates, posts immediately, and flags fraud.",
    impact: [
      "Processing time reduced by 90%",
      "Reimbursement cycle: 3 weeks to 3 days",
      "Policy compliance improved from 72% to 96%",
      "Finance time saved: 25 hours weekly",
      "Detected and prevented $18K in duplicate/fraudulent claims"
    ],
    tools: ["Expensify", "QuickBooks", "Slack", "Brex", "NetSuite", "Gmail"]
  },
  {
    id: 8,
    category: "Sales & Marketing",
    title: "Dynamic Content Personalization & Campaign Orchestration",
    problem: "Marketing sends generic campaigns to 50K contacts with 2% click rates. Personalizing requires dozens of manual variants. Sales complains messaging doesn't match buyer stage.",
    currentApproach: "Manual template creation, broad segmentation (industry, size), spreadsheet performance analysis, manual follow-ups. No channel coordination.",
    automationSolution: "n8n analyzes behavior to determine buyer stage, generates AI-personalized content, coordinates multi-channel campaigns, triggers sales alerts with talking points, A/B tests automatically, and provides real-time dashboard.",
    impact: [
      "Email click rates increased from 2% to 11%",
      "Marketing qualified lead rate increased by 3.2x",
      "Campaign creation time reduced by 75%",
      "Sales-marketing alignment score improved by 68%",
      "Marketing-influenced revenue increased by $1.8M"
    ],
    tools: ["HubSpot", "LinkedIn Ads", "Clearbit", "Segment", "Google Analytics", "Salesforce"]
  },
  {
    id: 9,
    category: "Finance & Accounting",
    title: "Real-Time Cash Flow Forecasting & Treasury Management",
    problem: "Finance consolidates 12 bank accounts, 3 credit cards, 5 business units in Excel taking 2 days weekly. Forecasts are outdated. Result: $25K annually wasted on credit interest.",
    currentApproach: "Manual daily bank logins, Excel exports, hand categorization, CRM revenue updates, credit card reconciliation, manual currency conversion, weekly PowerPoint reports.",
    automationSolution: "n8n connects all accounts via API, auto-categorizes with AI, pulls AR and pipeline data, predicts cash needs 90 days ahead, handles currency conversion, alerts on low balances, and generates hourly dashboard.",
    impact: [
      "Cash flow visibility improved from weekly to real-time",
      "Forecasting accuracy increased from 65% to 91%",
      "Finance team time saved: 16 hours weekly",
      "Interest costs reduced by $25K annually through optimized credit usage",
      "Investment income increased by $35K through better cash deployment"
    ],
    tools: ["Plaid", "QuickBooks", "Salesforce", "Stripe", "Slack", "Google Sheets", "Wise"]
  },
  {
    id: 10,
    category: "HR & Talent",
    title: "Automated Performance Review Orchestration",
    problem: "HR coordinates quarterly reviews for 200+ employees requiring 15+ hours per cycle. 6-8 week cycles. Reviews run late, feedback is inconsistent.",
    currentApproach: "Manual form creation, emailing peer reviewer assignments, spreadsheet tracking, individual reminders, feedback compilation, email scheduling of 1-on-1s.",
    automationSolution: "n8n auto-generates forms from HRIS, assigns reviewers based on collaboration data, sends escalating reminders, aggregates feedback, creates AI summaries, auto-schedules 1-on-1s, and provides real-time dashboard.",
    impact: [
      "Review cycle time reduced from 8 weeks to 3 weeks",
      "Completion rate improved from 78% to 98%",
      "HR administration time reduced by 85%",
      "Manager satisfaction increased by 64%",
      "Peer feedback quality improved through AI coaching prompts"
    ],
    tools: ["BambooHR", "Google Workspace", "Slack", "Calendly", "Culture Amp", "Notion"]
  },
  {
    id: 11,
    category: "HR & Talent",
    title: "Intelligent Recruitment Pipeline & Candidate Experience",
    problem: "HR screens 500+ monthly applications spending 40+ hours on reviews. 80% unqualified. Qualified candidates wait weeks and accept other offers.",
    currentApproach: "Manual resume reviews, copy-paste to spreadsheets, emailing managers, individual calendar checks for scheduling, weekly rejection batches.",
    automationSolution: "n8n AI-screens resumes and ranks by fit, sends personalized rejections, notifies recruiters of top matches, auto-schedules via Calendly, sends prep materials, collects feedback, and maintains nurture campaigns.",
    impact: [
      "Time-to-hire reduced from 42 days to 18 days",
      "Recruiter screening time reduced by 75%",
      "Candidate satisfaction score increased from 6.2 to 9.1/10",
      "Offer acceptance rate improved from 65% to 89%",
      "Quality of hire improved by 34% based on 90-day performance data"
    ],
    tools: ["Greenhouse", "LinkedIn Recruiter", "Calendly", "Slack", "Google Workspace", "BambooHR"]
  },
  {
    id: 12,
    category: "Sales & Marketing",
    title: "Automated Sales Proposal Generation & Contract Management",
    problem: "Sales creates 80+ monthly proposals, each taking 3-4 hours. Competitors submit first. 30% of deals lost due to delays.",
    currentApproach: "Manual copy-paste from CRM/emails, searching drives for case studies, individual slide customization, screenshot pricing, email approvals, contract creation, legal review, PDF compilation.",
    automationSolution: "n8n pulls CRM and call data, uses AI to select case studies and customize messaging, generates pricing, creates branded proposals, routes approvals with reminders, generates contracts, integrates DocuSign, and tracks engagement.",
    impact: [
      "Proposal creation time reduced from 4 hours to 20 minutes",
      "Time-to-proposal delivery reduced by 70%",
      "Win rate increased from 22% to 35%",
      "Contract cycle time reduced from 12 days to 3 days",
      "Sales rep capacity increased by 30%"
    ],
    tools: ["Salesforce", "PandaDoc", "DocuSign", "Slack", "Google Drive", "Gong", "HubSpot"]
  },
  {
    id: 13,
    category: "Operations",
    title: "Automated Vendor Management & Procurement Workflow",
    problem: "Operations manages 150+ vendors in spreadsheets. Missed renewals cost $90K. Performance issues surface too late. Onboarding takes 3-4 weeks.",
    currentApproach: "Excel lists, scattered contract folders, calendar reminders, email requests for certificates, memory-based performance evaluation, individual department emails for onboarding.",
    automationSolution: "n8n centralizes data in Airtable, monitors renewals with 90/60/30 day alerts, auto-requests certificates, collects compliance docs, generates scorecards, orchestrates onboarding, and flags at-risk vendors.",
    impact: [
      "Avoided $90K in unfavorable auto-renewals through timely negotiations",
      "Vendor onboarding time reduced from 4 weeks to 3 days",
      "Compliance documentation collection improved to 100%",
      "Operations time saved: 20 hours monthly",
      "Vendor performance visibility improved from reactive to proactive"
    ],
    tools: ["Airtable", "DocuSign", "Slack", "NetSuite", "Google Drive", "QuickBooks", "Jotform"]
  },
  {
    id: 14,
    category: "Operations",
    title: "Multi-Location Scheduling & Resource Optimization",
    problem: "Operations coordinates 75 technicians across 5 locations, 200+ daily appointments. Manual scheduling creates inefficient routes, $15K monthly overtime, and missed appointments.",
    currentApproach: "Manual Excel assignments, Google Maps estimates, phone confirmations, email schedules, waiting for call-ins to track completion.",
    automationSolution: "n8n auto-assigns by skills/location/traffic, AI-optimizes routes, sends SMS schedules, enables text rescheduling, tracks real-time, updates ETAs, collects mobile completion data, triggers invoicing, and provides dashboard.",
    impact: [
      "Daily appointments completed increased from 200 to 260 (+30%)",
      "Average drive time reduced by 35%",
      "Overtime costs reduced from $15K to $4K monthly",
      "Customer satisfaction improved by 47%",
      "Missed appointment rate reduced from 8% to 0.5%"
    ],
    tools: ["Jobber", "Google Maps API", "Twilio", "Slack", "QuickBooks", "Airtable", "Zapier"]
  },
  {
    id: 15,
    category: "Customer Success",
    title: "Automated Customer Onboarding & Training Delivery",
    problem: "CS onboards 40+ monthly customers, each taking 12+ hours. 22% don't complete within 90 days. CSMs spend 60% of time on coordination.",
    currentApproach: "Manual welcome emails, kickoff scheduling, account creation, material distribution, spreadsheet tracking, weekly check-ins, manual call scheduling.",
    automationSolution: "n8n triggers welcome sequences on deal close, auto-provisions accounts, delivers progressive training, tracks completion, sends milestone congratulations, schedules engagement-based calls, identifies stuck customers, and provides dashboard with predicted completion.",
    impact: [
      "Onboarding completion rate improved from 78% to 96%",
      "Time-to-value reduced from 45 days to 18 days",
      "CSM time per onboarding reduced by 75%",
      "Customer activation rate increased by 38%",
      "Onboarding satisfaction score improved from 7.2 to 9.4/10"
    ],
    tools: ["Intercom", "Thinkific", "Salesforce", "Calendly", "Slack", "HubSpot", "Notion"]
  },
  {
    id: 16,
    category: "Customer Success",
    title: "Intelligent Product Usage Analytics & Expansion Identification",
    problem: "CS manages 400+ accounts with no systematic expansion identification. CSMs rely on annual reviews. Result: $2M+ in missed expansion revenue.",
    currentApproach: "Quarterly manual analytics checks, Excel exports, manual feature analysis, generic email suggestions, reactive upgrade mentions, CRM notes without scoring.",
    automationSolution: "n8n monitors usage and adoption, uses AI to identify expansion indicators, calculates propensity scores, notifies CSMs with recommendations, triggers education campaigns, schedules proactive reviews, and provides prioritized pipeline.",
    impact: [
      "Expansion revenue increased by $1.8M annually",
      "Expansion opportunity identification improved from quarterly to real-time",
      "Expansion conversion rate increased from 12% to 34%",
      "Average upsell deal size increased by 45%",
      "CSM expansion pipeline visibility improved from 23% to 89%"
    ],
    tools: ["Salesforce", "Mixpanel", "ChurnZero", "Intercom", "Slack", "HubSpot", "Tableau"]
  },
  {
    id: 17,
    category: "IT & Infrastructure",
    title: "Automated Security Compliance & Audit Management",
    problem: "IT maintains SOC 2, ISO 27001, GDPR compliance. Quarterly audits require 80+ hours. Annual audits cost $60K. Gaps delay enterprise deals.",
    currentApproach: "Manual system logins for evidence, screenshots, log exports, Google Docs without version control, Excel checklists, quarterly reminders, manual access reviews.",
    automationSolution: "n8n auto-collects evidence on schedule, stores in tamper-proof repository, monitors controls with alerts, automates training, performs access reviews, maintains versioned docs, generates evidence packets, and automates questionnaire responses.",
    impact: [
      "Audit preparation time reduced from 80 hours to 8 hours",
      "Annual external audit costs reduced by $25K through efficiency",
      "Compliance violations detected and resolved proactively: 94% before audit",
      "Security questionnaire response time: 5 days → 2 hours",
      "Enterprise deal velocity improved by 40% through compliance confidence"
    ],
    tools: ["Vanta", "AWS", "Okta", "GitHub", "Slack", "Google Workspace", "Drata", "1Password"]
  },
  {
    id: 18,
    category: "IT & Infrastructure",
    title: "Intelligent Software License Management & Optimization",
    problem: "IT manages 60+ SaaS subscriptions ($800K annually). Unused licenses cost $120K yearly. Missed renewals cause disruptions. Slow procurement keeps new hires waiting days.",
    currentApproach: "Spreadsheet with renewal dates, manual admin panel checks, calendar reminders, reactive license reclamation, manual provisioning, credit card spend tracking.",
    automationSolution: "n8n integrates via API for real-time monitoring, auto-identifies unused licenses, deprovisions when employees leave, alerts 60 days before renewals, auto-assigns to new hires by role, tracks spend centrally, and identifies duplicates.",
    impact: [
      "Reclaimed $120K in unused license costs annually",
      "Software spend visibility improved from 60% to 100%",
      "New hire provisioning time reduced from 3 days to 2 hours",
      "Duplicate tool elimination saved $45K annually",
      "Vendor negotiation leverage improved, achieving 23% better renewal terms"
    ],
    tools: ["Okta", "BambooHR", "Slack", "Google Workspace", "Stripe", "Airtable", "Torii", "Zylo"]
  }
];

const UseCases = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showCategories, setShowCategories] = useState(true);

  const filteredUseCases = selectedCategory === "All" 
    ? useCases 
    : useCases.filter(useCase => useCase.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl mb-6 leading-tight">
                Automation Use Cases
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Real-world examples of how organizations transform operations with n8n-powered automation
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="border-b border-border sticky top-20 bg-background z-40">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="flex justify-between items-center py-2">
              <h2 className="text-sm font-medium text-muted-foreground">FILTER BY CATEGORY</h2>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowCategories(!showCategories)}
                className="text-muted-foreground hover:bg-muted/50"
              >
                {showCategories ? 'Hide Categories' : 'Show Categories'}
              </Button>
            </div>
            {showCategories && (
              <div className="flex flex-wrap gap-3 justify-center pb-6">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="space-y-12">
              {filteredUseCases.map((useCase) => (
                <Card key={useCase.id} className="p-8 md:p-12 hover:shadow-lg transition-shadow">
                  <div className="space-y-8">
                    {/* Header */}
                    <div className="space-y-4">
                      <Badge variant="outline" className="text-xs font-medium">
                        {useCase.category}
                      </Badge>
                      <h2 className="text-3xl font-semibold tracking-tight">
                        {useCase.title}
                      </h2>
                    </div>

                    {/* Problem */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                          <AlertCircle className="w-5 h-5 text-destructive" />
                        </div>
                        <h3 className="text-xl font-semibold">The Problem</h3>
                      </div>
                      <p className="text-muted-foreground font-light leading-relaxed pl-13">
                        {useCase.problem}
                      </p>
                    </div>

                    {/* Current Approach */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                          <ArrowRight className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold">Current Approach</h3>
                      </div>
                      <p className="text-muted-foreground font-light leading-relaxed pl-13">
                        {useCase.currentApproach}
                      </p>
                    </div>

                    {/* Automation Solution */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Zap className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">n8n Automation Solution</h3>
                      </div>
                      <p className="text-muted-foreground font-light leading-relaxed pl-13">
                        {useCase.automationSolution}
                      </p>
                    </div>

                    {/* Impact */}
                    <div className="space-y-4 bg-muted/30 p-6 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <TrendingUp className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">Measurable Impact</h3>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-3 pl-13">
                        {useCase.impact.map((item, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground font-light">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tools Used */}
                    <div className="space-y-3 pt-4 border-t border-border">
                      <h4 className="text-sm font-medium text-muted-foreground">Tools Integrated</h4>
                      <div className="flex flex-wrap gap-2">
                        {useCase.tools.map((tool, index) => (
                          <Badge key={index} variant="secondary" className="font-light">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {filteredUseCases.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground font-light">
                  No use cases found in this category.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-semibold tracking-tight">
                Ready to Build Your Custom Automation?
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Every organization has unique workflows. Let's design an automation solution 
                tailored to your specific challenges and goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-primary hover:bg-blue-700 text-white"
                >
                  <a href="/resources">
                    Download Assessment Framework
                  </a>
                </Button>
                <Button 
                  asChild 
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  <a href="/#contact">
                    Schedule Consultation
                  </a>
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

export default UseCases;
