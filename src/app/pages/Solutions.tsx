import { Link } from 'react-router';
import { Target, TrendingUp, Users, BarChart3, Lightbulb, Headphones, CheckCircle2, ArrowRight } from 'lucide-react';
import leavesBackground from '../../imports/Sage all leaves background copy.jpg';

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
import moneyChart from '../../imports/Sage money and arrow chart.png';
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
      <section className="bg-white min-h-[90vh] flex items-center border-b border-border">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 items-stretch">
            {/* Left — graph fills exact bounds set by right column padding */}
            <div className="hidden lg:block relative">
              <img
                src={moneyChart}
                alt="Revenue growth chart"
                className="absolute inset-0 w-full h-full object-contain"
                style={{ padding: '80px 16px 64px 48px', imageRendering: 'crisp-edges' }}
              />
            </div>
            {/* Right — padding top aligns heading with graph top, padding bottom aligns CTAs with graph bottom */}
            <div className="flex flex-col justify-between pt-20 pb-16 px-4 sm:px-6 lg:px-8 pr-[calc(1rem+45px)] sm:pr-[calc(1.5rem+45px)] lg:pr-[calc(2rem+45px)]">
              <div>
                <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">Revenue Solutions</p>
                <h1 className="text-5xl md:text-6xl font-black text-primary mb-6 leading-tight">Complete Revenue Solutions</h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">Integrated revenue operations that deliver predictable, scalable growth.</p>
              </div>
              <div className="flex flex-row flex-wrap gap-3 items-center mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-7 py-3 bg-gradient-to-r from-[#1B6B3A] to-[#00A344] text-white font-semibold rounded-lg transition-all duration-300 text-base group hover:brightness-90 hover:shadow-lg whitespace-nowrap"
                >
                  Get a Free Assessment
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center justify-center px-7 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-semibold text-base hover:shadow-lg whitespace-nowrap"
                >
                  View Success Stories
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
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
                  <div className="w-16 h-16 rounded-2xl border-2 border-accent/20 flex items-center justify-center mb-6 group-hover:border-accent transition-colors duration-300">
                    <Icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                  </div>

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
      <section
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: `url(${leavesBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Screened-back overlay — light so content stays readable */}
        <div className="absolute inset-0 bg-white/88" />

        <div className="max-w-7xl mx-auto pl-4 relative z-10">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-accent mb-4 font-semibold">
              Our Approach
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-3">
              The <span className="text-accent">Framework</span>
            </h2>
            
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
