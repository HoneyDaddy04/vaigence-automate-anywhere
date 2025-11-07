import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
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
    problem: "Finance teams spend 15-20 hours weekly manually processing invoices across multiple vendors, matching them to purchase orders, and reconciling discrepancies. This involves downloading invoices from email, entering data into accounting software, cross-referencing with procurement systems, and chasing approvals—leading to payment delays, missed early payment discounts, and month-end bottlenecks.",
    currentApproach: "Teams use separate tools for email (Outlook/Gmail), accounting (QuickBooks/Xero), procurement (various systems), and approval workflows (email chains or basic approval software). Staff manually copy data between systems, create spreadsheets for tracking, and send reminder emails for approvals. Reconciliation requires exporting data from multiple sources and using Excel to identify mismatches.",
    automationSolution: "n8n orchestrates the entire invoice-to-payment workflow: automatically extracts invoice data from emails using AI OCR, matches invoices to purchase orders in the procurement system, routes to appropriate approvers based on amount and department, updates accounting software upon approval, flags discrepancies for review, and sends payment confirmations. Integration with Slack provides real-time notifications and approval capabilities directly in team channels.",
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
    problem: "HR teams manage 30-50 new hires monthly, each requiring 40+ manual tasks across systems: creating accounts, provisioning equipment, scheduling orientation, collecting documents, processing payroll setup, and coordinating with multiple departments. New hires experience delayed access to tools, incomplete onboarding materials, and confusion about next steps, while HR staff spend 60% of their time on administrative tasks instead of strategic initiatives.",
    currentApproach: "HR maintains Excel spreadsheets tracking onboarding status, manually emails IT for account creation, sends document requests via email, schedules meetings individually, creates Slack channels manually, and follows up repeatedly with new hires and departments. Equipment orders are placed through separate procurement systems, and payroll setup requires duplicate data entry into HRIS and payroll platforms.",
    automationSolution: "n8n creates a unified onboarding orchestration: triggers workflows when offer is accepted in ATS, automatically provisions accounts in all systems (Google Workspace, Slack, project management tools), orders equipment from procurement system, generates personalized onboarding schedules, sends document collection links with automated reminders, creates Slack channels and adds team members, schedules orientation meetings, updates HRIS and payroll systems, and sends progress updates to managers. AI-powered chatbot answers common new hire questions.",
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
    problem: "Marketing generates 500+ leads monthly across website forms, LinkedIn, events, and content downloads, but only 15% are sales-ready. Sales team wastes time calling unqualified leads while qualified prospects go cold waiting for follow-up. Lead data is scattered across marketing automation, CRM, spreadsheets, and email, making it impossible to track engagement or prioritize outreach effectively.",
    currentApproach: "Marketing team manually exports leads from various sources into spreadsheets, assigns lead scores based on gut feeling, manually enters into CRM with incomplete data, sends generic email sequences, and hands off to sales via email. Sales reps manually research each lead on LinkedIn and company websites, send templated cold emails, and track follow-ups in personal spreadsheets or CRM notes.",
    automationSolution: "n8n creates intelligent lead orchestration: captures leads from all sources (website, LinkedIn, events, ads) into centralized database, enriches with company data from Clearbit/Apollo, scores leads using AI based on engagement signals and fit criteria, routes hot leads immediately to appropriate sales rep with personalized brief, triggers customized nurture sequences for warm leads via email/LinkedIn, monitors engagement across channels, escalates engaged leads to sales, and provides sales team with real-time lead intelligence dashboard showing intent signals and recommended talking points.",
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
    problem: "Operations team managing inventory across 3 warehouses experiences frequent stockouts costing $80K monthly in lost sales and rush shipping, while also carrying $200K in excess inventory tying up capital. Manual stock checks, spreadsheet-based forecasting, and delayed communication between warehouses, procurement, and sales lead to poor inventory decisions and customer dissatisfaction.",
    currentApproach: "Team manually checks inventory levels daily in warehouse management system, exports data to Excel for analysis, creates purchase orders based on historical averages, emails suppliers for quotes, manually tracks shipments, updates multiple systems with stock movements, and communicates stock status to sales team via weekly emails. Forecasting relies on last year's sales data without considering current trends.",
    automationSolution: "n8n builds predictive inventory intelligence: monitors inventory levels in real-time across all warehouses, analyzes sales velocity and seasonality patterns using AI, predicts stockout risk 30 days ahead, automatically generates purchase orders when reorder points are reached, sends RFQs to suppliers and compares quotes, triggers approval workflows for large orders, tracks shipments and updates ETA automatically, redistributes inventory between warehouses based on demand, alerts sales team of low stock items, and provides operations dashboard with inventory health metrics and recommendations.",
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
    problem: "Customer success team of 5 manages 300+ accounts but only discovers churn risk when customers don't renew. Manually tracking product usage, support tickets, engagement metrics, and sentiment across multiple tools is impossible at scale. By the time issues surface, customers have already decided to leave, resulting in 18% annual churn and $500K in lost revenue.",
    currentApproach: "CS managers manually check product analytics weekly, review support ticket volume in Zendesk, scan for negative NPS responses, track last contact date in CRM, and create spreadsheets to identify at-risk accounts. Quarterly business reviews are scheduled manually, renewal reminders are set in calendar, and intervention is reactive rather than proactive. No systematic way to identify early warning signs or prioritize which customers need attention.",
    automationSolution: "n8n creates intelligent customer health system: continuously monitors product usage patterns, analyzes support ticket sentiment and volume trends, tracks engagement with emails and resources, calculates dynamic health scores using AI, identifies leading churn indicators (decreased login frequency, unused features, negative sentiment), automatically triggers intervention workflows, assigns at-risk accounts to CSMs with contextualized briefings, schedules proactive check-in calls, delivers personalized resources based on customer challenges, alerts executives for high-value at-risk accounts, and generates renewal forecasts with confidence levels.",
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
    problem: "IT team receives 200+ support tickets weekly, with 60% being repetitive requests (password resets, access requests, software installations, account provisions). Tickets sit for 24-48 hours before resolution, frustrating employees and reducing productivity. IT staff spend 70% of time on routine tasks, leaving no capacity for strategic projects. Shadow IT proliferates as frustrated employees find workarounds.",
    currentApproach: "Employees submit tickets via email or ticketing system, IT staff manually triage and prioritize, simple requests still require manual intervention (clicking through admin consoles), access requests require email approvals from managers then manual provisioning, software installations require scheduling and hands-on setup, password resets require identity verification calls, and knowledge base articles exist but employees don't use them. No self-service options available.",
    automationSolution: "n8n builds intelligent IT automation: AI chatbot handles tier-1 requests (password resets with identity verification, basic troubleshooting, knowledge base guidance), automatically routes access requests to appropriate managers with context, provisions approved access across all systems simultaneously, triggers software deployment scripts for common applications, monitors system health and proactively addresses issues before they generate tickets, analyzes ticket patterns to identify systemic problems, creates knowledge base articles from resolved tickets, and provides IT team with workload analytics and automation suggestions.",
    impact: [
      "Ticket volume reduced by 65%",
      "Average resolution time: 48 hours → 2 hours",
      "Employee satisfaction score increased by 51%",
      "IT team capacity freed for strategic projects: 70% → 30% on routine tasks",
      "Shadow IT incidents reduced by 78%"
    ],
    tools: ["Zendesk", "Okta", "Google Workspace", "Slack", "Jamf", "ServiceNow"]
  },
  {
    id: 7,
    category: "Finance & Accounting",
    title: "Automated Expense Report Processing & Policy Compliance",
    problem: "Finance team manually reviews 400+ expense reports monthly, checking receipts, verifying policy compliance, cross-referencing credit card statements, and chasing missing documentation. Employees submit incomplete or non-compliant expenses, requiring multiple back-and-forth emails. Reimbursement takes 2-3 weeks, frustrating staff. Finance spends 30 hours weekly on expense processing instead of financial analysis.",
    currentApproach: "Employees submit expense reports in Expensify or spreadsheets, attach receipt photos, finance manually reviews each line item against policy, emails employees for missing receipts or violations, manually matches expenses to credit card statements, exports approved expenses to accounting system, and processes reimbursements in batches. Policy violations are identified inconsistently, leading to compliance issues and budget overruns.",
    automationSolution: "n8n builds smart expense automation: AI extracts data from receipt photos with 99% accuracy, automatically categorizes expenses using machine learning, validates against company policy rules in real-time (flagging violations immediately), matches to credit card transactions automatically, routes out-of-policy items for manager approval with context, detects duplicate submissions, integrates with accounting system for immediate posting, triggers reimbursement processing upon approval, sends policy reminders to frequent violators, generates spend analytics by department/category, and alerts finance to unusual patterns or fraud indicators.",
    impact: [
      "Processing time reduced by 90%",
      "Reimbursement cycle: 3 weeks → 3 days",
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
    problem: "Marketing team sends generic email campaigns to 50K contacts, resulting in 2% click rates and minimal conversions. Personalizing content for different segments requires manually creating dozens of email variants, managing separate lists, and coordinating sends across tools. Campaign performance analysis happens days later in spreadsheets. Sales complains that marketing leads don't convert because messaging doesn't match buyer stage or pain points.",
    currentApproach: "Marketing creates email templates in marketing automation platform, manually segments audience based on broad criteria (industry, company size), schedules campaigns, exports performance data to spreadsheets for analysis, and manually follows up on engaged leads. Website visitors all see the same content regardless of their interests or stage. No coordination between email, website, ads, and sales outreach.",
    automationSolution: "n8n creates omnichannel personalization engine: analyzes contact behavior across website, emails, and CRM to determine buyer stage and interests, dynamically generates personalized email content using AI based on recipient profile and behavior, coordinates campaigns across email, LinkedIn ads, and website personalization, triggers sales alerts when contacts hit engagement thresholds with specific talking points, A/B tests messaging and automatically optimizes, provides real-time campaign performance dashboard, identifies content gaps based on engagement patterns, and creates closed-loop attribution from first touch to closed deal.",
    impact: [
      "Email click rates increased from 2% to 11%",
      "Marketing qualified lead rate increased by 3.2x",
      "Campaign creation time reduced by 75%",
      "Sales-marketing alignment score improved by 68%",
      "Marketing-influenced revenue increased by $1.8M"
    ],
    tools: ["HubSpot", "LinkedIn Ads", "Clearbit", "Segment", "Google Analytics", "Salesforce"]
  }
];

const UseCases = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

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
        <section className="py-8 border-b border-border sticky top-20 bg-background z-40">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="flex flex-wrap gap-3 justify-center">
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
                <a 
                  href="/resources" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                >
                  Download Assessment Framework
                </a>
                <a 
                  href="/#contact" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border font-medium hover:bg-muted/50 transition-colors"
                >
                  Schedule Consultation
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

export default UseCases;
