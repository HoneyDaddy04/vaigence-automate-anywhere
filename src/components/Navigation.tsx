import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/#services", label: "Services", section: "services" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/#approach", label: "Our Approach", section: "approach" },
  { href: "/resources", label: "Resources" },
];

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-semibold text-foreground">
                Vaigence
              </span>
              <span className="inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary">
                AI
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isCurrentPage = typeof window !== 'undefined' && 
                ((link.section && window.location.hash === `#${link.section}`) || 
                 (!link.section && window.location.pathname === link.href));
              
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    if (link.section) {
                      e.preventDefault();
                      if (window.location.pathname !== '/') {
                        window.location.href = `/#${link.section}`;
                      } else {
                        window.location.hash = link.section;
                        document.getElementById(link.section)?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                  className={`text-sm font-medium ${
                    isCurrentPage ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                  } transition-colors duration-200`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="hidden md:flex items-center">
            <a 
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors duration-200"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm">
              <div className="flex flex-col h-full">
                <div className="flex-1 overflow-y-auto py-6">
                  <nav className="space-y-1">
                    {navLinks.map((link) => {
                      const isCurrentPage = typeof window !== 'undefined' && 
                        ((link.section && window.location.hash === `#${link.section}`) || 
                         (!link.section && window.location.pathname === link.href));
                      
                      return (
                        <a
                          key={link.href}
                          href={link.href}
                          onClick={(e) => {
                            if (link.section) {
                              e.preventDefault();
                              if (window.location.pathname !== '/') {
                                window.location.href = `/#${link.section}`;
                              } else {
                                window.location.hash = link.section;
                                document.getElementById(link.section)?.scrollIntoView({ behavior: 'smooth' });
                              }
                            }
                            setOpen(false);
                          }}
                          className={`block px-4 py-3 text-base font-medium ${
                            isCurrentPage ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                          } border-b border-border/20 hover:bg-muted/50 transition-colors duration-200`}
                        >
                          {link.label}
                        </a>
                      );
                    })}
                  </nav>
                </div>
                
                <div className="border-t border-border/20 pt-4 pb-6 px-4">
                  <a 
                    href="#contact"
                    className="w-full flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors duration-200"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
