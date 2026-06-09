import { Link } from 'react-router';
import { Target, TrendingUp, Users, BarChart3, Lightbulb, Headphones, CheckCircle2, ArrowRight } from 'lucide-react';

const slugMap: Record<string, string> = {
  'Revenue Strategy': 'revenue-strategy',
  'Demand Generation': 'demand-generation',
  'Sales Enablement': 'sales-enablement',
  'Revenue Intelligence': 'revenue-intelligence',
  'Marketing Automation': 'marketing-automation',
  'Executive Advisory': 'executive-advisory',
};
import revenueSystemImg from '../../imports/sage-2.png';
import vectorPattern from '../../imports/Vector-1.png';
import { Button } from '../components/Button';

export function Solutions() {
  const solutions = [
    {
      icon: Target,
      title: 'Revenue Strategy',
      tagline: 'RevenueStorm™',
      description: 'Deep revenue assessment and strategic planning',
      includes: ['Revenue bottleneck identification', 'Market positioning', 'Pipeline audit', 'Growth roadmap'],
    },
    {
      icon: TrendingUp,
      title: 'Demand Generation',
      tagline: 'Pipeline That Converts',
      description: 'Integrated campaigns that fill your pipeline',
      includes: ['Account-based marketing', 'Marketing automation', 'Content strategy', 'Lead scoring'],
    },
    {
      icon: Users,
      title: 'Sales Enablement',
      tagline: 'Turn Reps Into Revenue',
      description: 'Playbooks, tools, and coaching for sales teams',
      includes: ['Sales playbooks', 'Coaching programs', 'Pipeline management', 'CRM optimization'],
    },
    {
      icon: BarChart3,
      title: 'Revenue Intelligence',
      tagline: 'Know Your Numbers',
      description: 'Executive dashboards and analytics',
      includes: ['Executive dashboards', 'Revenue forecasting', 'Performance analytics', 'Board reporting'],
    },
    {
      icon: Lightbulb,
      title: 'Marketing Automation',
      tagline: 'Scale Without Chaos',
      description: 'Optimize your mar-tech stack',
      includes: ['Platform setup', 'Workflow automation', 'Lead scoring', 'Integration management'],
    },
    {
      icon: Headphones,
      title: 'Executive Advisory',
      tagline: 'Strategic Counsel',
      description: '30+ years of revenue expertise',
      includes: ['Strategic planning', 'Revenue reviews', 'Team coaching', 'M&A integration'],
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero */}
      <section
        className="relative py-32 min-h-[70vh] flex items-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/80" />

        <div className="w-full px-4 sm:px-6 lg:px-8 pl-[calc(1rem+45px)] sm:pl-[calc(1.5rem+45px)] lg:pl-[calc(2rem+45px)] relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-wider text-accent mb-6 font-semibold">
              Revenue Growth Solutions
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Complete Revenue Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Integrated revenue operations that deliver predictable, scalable growth
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto pl-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <div key={solution.title} className="bg-white p-12 hover:bg-gray-50 transition-colors group">
                  <Icon className="w-12 h-12 text-accent mb-6" />

                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-semibold">
                    {solution.tagline}
                  </div>

                  <h3 className="text-2xl font-black text-primary mb-3">{solution.title}</h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {solution.includes.map((item) => (
                      <li key={item} className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/solutions/${slugMap[solution.title]}`}
                    className="inline-flex items-center gap-1 text-accent text-sm font-semibold hover:gap-2 transition-all duration-200 group"
                  >
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute bottom-0 left-0 w-96 h-96 opacity-10">
          <img src={vectorPattern} alt="" className="w-full h-full object-contain" />
        </div>

        <div className="max-w-7xl mx-auto pl-4 relative z-10">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-accent mb-4 font-semibold">
              Our Approach
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-3">
              The <span className="text-accent">Framework</span>
            </h2>
            <div className="w-32 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-xl text-muted-foreground">
              Five phases to predictable revenue
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Revenue System Image */}
            <div className="flex justify-center">
              <img src={revenueSystemImg} alt="Revenue Framework" className="w-full max-w-md" />
            </div>

            {/* Process Steps */}
            <div className="space-y-px bg-border">
              {[
                { phase: '01', title: 'RevenueStorm™ Assessment', desc: 'Analyze current state and identify opportunities' },
                { phase: '02', title: 'Market Positioning', desc: 'Nail messaging and competitive positioning' },
                { phase: '03', title: 'Demand Generation', desc: 'Build campaigns that fill pipeline' },
                { phase: '04', title: 'Sales Acceleration', desc: 'Equip teams with playbooks and tools' },
                { phase: '05', title: 'Revenue Intelligence', desc: 'Deploy dashboards and analytics' },
              ].map((step) => (
                <div key={step.phase} className="bg-white p-8 hover:bg-gray-50 transition-colors flex items-start gap-8">
                  <div className="text-5xl font-black text-accent/30">{step.phase}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#E8F5EE]">
        <div className="max-w-7xl mx-auto pl-4 text-center">
          <p className="text-sm uppercase tracking-wider text-accent mb-4 font-semibold">
            Get Started
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-3">
            Ready to <span className="text-accent">Transform Your Revenue?</span>
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl mb-10 text-primary/70">
            Get a free assessment—no commitment required
          </p>
          <Button to="/contact">
            Get Free Assessment
          </Button>
        </div>
      </section>
    </div>
  );
}
