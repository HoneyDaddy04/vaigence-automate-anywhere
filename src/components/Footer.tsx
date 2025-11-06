export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Vaigence
            </h3>
            <p className="text-sm text-muted-foreground">
              Intelligent AI-powered automation for modern organizations
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Vaigence. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
