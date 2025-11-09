import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function About() {
  return (
    <div className="min-h-screen">
      <SEO
        title="About Vaigence - AI Automation Experts"
        description="Meet the team of operators, process improvement experts, and automation specialists with over 30 years of experience turning operational challenges into automated solutions."
        canonical="https://vaigence.com/about"
        keywords="automation experts, business process specialists, AI automation consultants, operations team"
      />
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl mb-6 leading-tight">
                From Vision to Value: <br />
                <span className="text-primary">Transforming Business</span> with AI Automation
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                We're a team of operators, process improvement experts, and automation specialists with over 30 cumulative years of experience turning operational challenges into automated solutions.
              </p>
              <a
                href="https://calendar.app.google/Reuhsv1WCirVRF168"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-primary hover:bg-emerald-600 text-white px-8 py-6 text-lg">
                  Schedule a Consultation
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg text-muted-foreground mx-auto">
                <p className="mb-6">
                  Our journey began when industry veterans from financial services, telecoms, healthcare, manufacturing, software development, and technology came together to make enterprise-grade AI automation accessible to businesses of all sizes.
                </p>
                
                <p className="mb-6">
                  We help organizations move from complexity to clarity, from funding sophistication to true automation.
                </p>

                <p className="mb-6">
                  Our mission is simple: make work flow better.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
