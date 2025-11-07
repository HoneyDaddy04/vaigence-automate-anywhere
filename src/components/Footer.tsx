export const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tight">Vaigence</h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Strategic automation consulting for forward-thinking organizations.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light">
                  Automation Assessment
                </a>
              </li>
              <li>
                <a href="/use-cases" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light">
                  Use Cases
                </a>
              </li>
              <li>
                <a href="/#approach" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light">
                  Our Approach
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light">
                  Approach
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="/resources" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light">
                  Automation Resources
                </a>
              </li>
              <li>
                <a href="/resources#framework" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light">
                  2026 Assessment
                </a>
              </li>
              <li>
                <a href="/resources#calculator" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light">
                  ROI Calculator
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground font-light">
            © {new Date().getFullYear()} Vaigence. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
