import { AlertCircle, DollarSign, Network } from "lucide-react";

const problems = [
  {
    icon: Network,
    title: "Disconnected Systems",
    description: "Multiple software tools that don't communicate with each other, creating information silos and workflow bottlenecks.",
  },
  {
    icon: AlertCircle,
    title: "Manual Handoffs",
    description: "Time-consuming manual processes between departments with no automated coordination or intelligent orchestration.",
  },
  {
    icon: DollarSign,
    title: "Rising Software Costs",
    description: "Organizations pay for numerous SaaS solutions without maximizing their potential or integrating them effectively.",
  },
];

export const ProblemSection = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            The Challenge Organizations Face
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            While SaaS tools have digitized workflows, they've created new problems that limit organizational efficiency.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-destructive/10 text-destructive mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
