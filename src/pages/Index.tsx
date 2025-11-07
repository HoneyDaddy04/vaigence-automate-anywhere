import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { ApproachSection } from "@/components/ApproachSection";
import { N8nSection } from "@/components/N8nSection";
import { ImpactSection } from "@/components/ImpactSection";
import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToSection = () => {
      const { hash } = window.location;
      if (hash) {
        // Remove the '#' from the hash
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          // Small delay to ensure the page has rendered
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      } else {
        // Scroll to top if no hash
        window.scrollTo(0, 0);
      }
    };

    // Scroll when the component mounts or when the location changes
    scrollToSection();
  }, [location]);
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ServicesSection />
      <ApproachSection />
      <N8nSection />
      <ImpactSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
