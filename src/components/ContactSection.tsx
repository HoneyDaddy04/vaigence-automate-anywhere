import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl leading-tight mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions or ready to start your automation journey? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-xl shadow-sm border border-border/50">
              <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" type="text" required className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" required className="h-12" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input id="subject" type="text" required className="h-12" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" rows={5} required className="min-h-[120px]" />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-emerald-600 text-white"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Contact Information</h3>
                <p className="text-muted-foreground">
                  Fill out the form or email us directly. We'll get back to you as soon as possible.
                </p>
              </div>
              
              <div className="flex justify-center lg:justify-start">
                <a 
                  href="mailto:info@vaigence.com" 
                  className="inline-flex items-center gap-3 px-6 py-3 bg-muted/50 hover:bg-muted rounded-lg transition-colors duration-200"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="font-medium">info@vaigence.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
