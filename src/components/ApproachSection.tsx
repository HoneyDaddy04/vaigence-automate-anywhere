const phases = [
  {
    title: "Discovery & Analysis",
    description: "Understanding your current state, pain points, and opportunities through detailed stakeholder interviews and workflow mapping.",
  },
  {
    title: "Strategy Development",
    description: "Creating a comprehensive automation roadmap with clear priorities, expected outcomes, and implementation timelines.",
  },
  {
    title: "Pilot & Validation",
    description: "Implementing initial automation solutions in controlled environments to validate approach and demonstrate value.",
  },
  {
    title: "Scale & Optimize",
    description: "Expanding proven solutions across the organization while continuously refining and improving automation systems.",
  },
];

export const ApproachSection = () => {
  return (
    <section id="approach" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <h2 className="text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl mb-6 leading-tight">
              Proven Methodology
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Our structured approach ensures successful automation transformation 
              with minimal disruption to your operations.
            </p>
          </div>

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="group relative pl-8 border-l-2 border-border hover:border-primary pb-12 last:pb-0 transition-all duration-300"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary group-hover:scale-150 group-hover:shadow-elegant transition-all duration-300" />
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                    {phase.title}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed group-hover:text-foreground transition-colors">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
