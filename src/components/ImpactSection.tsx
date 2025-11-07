const metrics = [
  {
    value: "40%",
    label: "Average Cost Reduction",
    description: "Through optimized software usage and automation",
  },
  {
    value: "60%",
    label: "Time Saved on Manual Tasks",
    description: "Enabling teams to focus on strategic work",
  },
  {
    value: "3x",
    label: "Faster Process Execution",
    description: "With intelligent workflow orchestration",
  },
  {
    value: "95%",
    label: "User Adoption Rate",
    description: "Due to thoughtful change management",
  },
];

export const ImpactSection = () => {
  return (
    <section id="impact" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl mb-6 leading-tight">
            Delivering Measurable Results
          </h2>
          <p className="text-lg text-primary-foreground/70 font-light leading-relaxed">
            We focus on outcomes that matter to your organization—cost savings, 
            efficiency gains, and improved employee satisfaction.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {metrics.map((metric, index) => (
            <div key={index} className="space-y-3">
              <div className="text-5xl font-semibold tracking-tighter">
                {metric.value}
              </div>
              <div className="text-base font-medium">
                {metric.label}
              </div>
              <p className="text-sm text-primary-foreground/60 font-light leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
