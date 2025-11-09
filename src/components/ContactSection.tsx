import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Calendar, Globe2, Clock, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      timestamp: new Date().toISOString(),
      email: formData.get('email'),
      name: formData.get('name'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      type: 'Contact'
    };

    setIsSubmitting(true);

    try {
      const response = await fetch('https://sheetdb.io/api/v1/65pamivcklhb7', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data })
      });

      if (response.ok) {
        toast.success("Message sent successfully!", {
          description: "Thank you for reaching out. We'll get back to you soon."
        });
        form.reset();
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please try again or email us at contact@vaigence.com"
      });
    } finally {
      setIsSubmitting(false);
    }
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
                    <Input id="name" name="name" type="text" required className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" name="email" type="email" required className="h-12" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input id="subject" name="subject" type="text" required className="h-12" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" name="message" rows={5} required className="min-h-[120px]" />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-emerald-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3">Let's Connect</h3>
                <p className="text-muted-foreground font-light">
                  Choose your preferred way to reach us
                </p>
              </div>

              {/* Primary Contact Methods */}
              <div className="space-y-4">
                {/* Email Card */}
                <a
                  href="mailto:contact@vaigence.com"
                  className="group block relative bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-foreground">Email Us</h4>
                        <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">~24h response</span>
                      </div>
                      <p className="text-sm text-primary font-medium group-hover:underline">
                        contact@vaigence.com
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Best for detailed inquiries and project discussions
                      </p>
                    </div>
                  </div>
                </a>

                {/* Calendar Card */}
                <a
                  href="https://calendar.app.google/Reuhsv1WCirVRF168"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 rounded-xl p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-foreground">Book a Call</h4>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary">
                          Popular
                        </span>
                      </div>
                      <p className="text-sm text-primary font-medium group-hover:underline">
                        Schedule 30-min consultation
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Free strategy session to discuss your automation needs
                      </p>
                    </div>
                  </div>
                </a>

                {/* Quick Response Info */}
                <div className="bg-muted/30 border border-border/50 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <MessageSquare className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium mb-1">Quick Response Guarantee</p>
                      <p className="text-xs text-muted-foreground">
                        We typically respond to all inquiries within 24 hours during business days.
                        For urgent matters, please mention "urgent" in your subject line.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Global Locations */}
              <div className="pt-4">
                <div className="flex items-center gap-2 mb-4">
                  <Globe2 className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold">Global Presence</h4>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { city: "Texas", country: "United States", flag: "🇺🇸", timezone: "CST" },
                    { city: "Ontario", country: "Canada", flag: "🇨🇦", timezone: "EST" },
                    { city: "Lagos", country: "Nigeria", flag: "🇳🇬", timezone: "WAT" },
                    { city: "Manchester", country: "United Kingdom", flag: "🇬🇧", timezone: "GMT" }
                  ].map((location, index) => (
                    <div
                      key={index}
                      className="group relative bg-gradient-to-br from-muted/40 to-muted/20 hover:from-primary/10 hover:to-primary/5 border border-border/40 rounded-lg p-3 transition-all duration-300 hover:shadow-md hover:border-primary/30"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          {location.flag}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm group-hover:text-primary transition-colors">
                            {location.city}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {location.timezone}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-muted-foreground mt-3 text-center">
                  Supporting businesses worldwide • 24/7 operation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
