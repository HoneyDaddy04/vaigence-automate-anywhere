import { TrendingDown, Clock, Target, Users } from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    stat: "40%",
    label: "Cost Reduction",
    description: "Reduce software spending and operational costs through intelligent automation and integration",
  },
  {
    icon: Clock,
    stat: "60%",
    label: "Time Savings",
    description: "Free up your team from manual tasks and repetitive processes with automated workflows",
  },
  {
    icon: Target,
    stat: "3x",
    label: "Faster Execution",
    description: "Accelerate project completion with seamless coordination across departments",
  },
  {
    icon: Users,
    stat: "95%",
    label: "Team Satisfaction",
    description: "Improve employee experience by eliminating frustrating manual handoffs",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Measurable Impact for Operations Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Designed specifically for COOs and operations managers who need to optimize workflows across multiple departments.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-soft text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {benefit.stat}
                </div>
                <div className="font-semibold mb-2">{benefit.label}</div>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
