import { Brain, Workflow, Zap } from "lucide-react";

const solutions = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Leverage artificial intelligence to automate decision-making, optimize workflows, and predict bottlenecks before they occur.",
  },
  {
    icon: Workflow,
    title: "Seamless Orchestration",
    description: "Connect all your tools and systems into a unified automation platform that handles handoffs and coordination automatically.",
  },
  {
    icon: Zap,
    title: "Intelligent Automation",
    description: "Move beyond simple digitization to true automation that learns, adapts, and continuously improves your operations.",
  },
];

export const SolutionSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            The Evolution from{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              SaaS to AI Automation
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vaigence transforms your disconnected tools into an intelligent, automated operating system for your entire organization.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300 border border-border"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary mb-4">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground">{solution.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
