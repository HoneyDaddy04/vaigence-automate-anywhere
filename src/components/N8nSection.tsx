export const N8nSection = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl mb-6 leading-tight">
              Powered by n8n Expertise
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
              We leverage n8n, the powerful workflow automation platform, to deliver 
              intelligent automation solutions that connect your entire tech stack.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-tight">Why n8n?</h3>
              <ul className="space-y-3 text-muted-foreground font-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Fair-code distribution</strong> - Full control over your automation infrastructure with no vendor lock-in</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>400+ integrations</strong> - Connect virtually any tool in your tech stack seamlessly</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>AI-powered workflows</strong> - Built-in AI nodes for intelligent decision-making and data processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Self-hostable</strong> - Keep sensitive data within your infrastructure for complete security</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-tight">Our n8n Capabilities</h3>
              <ul className="space-y-3 text-muted-foreground font-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom workflow design and implementation for complex business processes</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced integration development with API connections and custom nodes</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Enterprise deployment and infrastructure setup with high availability</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Training and knowledge transfer for your internal teams</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold tracking-tight mb-3">
                  From Disconnected Tools to Unified Intelligence
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  n8n serves as the orchestration layer that transforms your scattered SaaS tools 
                  into a cohesive, intelligent automation ecosystem. With visual workflow building 
                  and powerful execution capabilities, we create automation that adapts to your business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
