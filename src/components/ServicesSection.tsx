const services = [
  {
    number: "01",
    title: "Automation Assessment",
    description: "Comprehensive analysis of your current technology stack, workflows, and automation opportunities to identify high-impact areas for transformation.",
  },
  {
    number: "02",
    title: "Strategic Planning",
    description: "Development of a tailored automation roadmap aligned with your business objectives, timelines, and resources for seamless implementation.",
  },
  {
    number: "03",
    title: "Implementation & Integration",
    description: "Expert execution of AI-powered automation solutions that connect your existing tools and create intelligent workflows across departments.",
  },
  {
    number: "04",
    title: "Optimization & Support",
    description: "Ongoing refinement and support to ensure your automation systems continue to deliver value and adapt to evolving business needs.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl mb-6 leading-tight">
            Strategic Services for<br />Operational Excellence
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            We partner with operations leaders to design and implement automation 
            strategies that transform how your organization works.
          </p>
        </div>

        <div className="grid gap-12 md:gap-16 max-w-5xl">
          {services.map((service, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-[120px_1fr] gap-6 md:gap-12 pb-12 md:pb-16 border-b border-border last:border-b-0"
            >
              <div className="text-5xl md:text-6xl font-light text-muted-foreground/30 group-hover:text-muted-foreground/50 transition-colors">
                {service.number}
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold tracking-tight">{service.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed max-w-2xl">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
