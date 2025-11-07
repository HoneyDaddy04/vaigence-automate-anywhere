import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-semibold tracking-tight text-foreground hover:opacity-80 transition-opacity">
              Vaigence
            </a>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="/#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="/use-cases" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Use Cases
            </a>
            <a href="/#approach" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Our Approach
            </a>
            <a href="/resources" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Resources
            </a>
            <Button variant="premium" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
