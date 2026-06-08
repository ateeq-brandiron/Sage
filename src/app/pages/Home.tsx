import { Link } from 'react-router';
import { ArrowRight, Target, Zap, TrendingUp, CheckCircle2, Award } from 'lucide-react';
import revenueSystemImg from '../../imports/sage-2.png';
import revenueStormImg from '../../imports/sage-1.png';
import vectorPattern from '../../imports/Vector-1.png';
import { Button } from '../components/Button';

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Minimalist with Background Image */}
      <section
        className="relative pt-32 pb-24 min-h-[90vh] flex items-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1767150145058-367fb68021f2?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/85 to-transparent" />

        <div className="w-full px-4 sm:px-6 lg:px-8 pl-[calc(1rem+45px)] sm:pl-[calc(1.5rem+45px)] lg:pl-[calc(2rem+45px)] relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-wider text-accent mb-6 font-semibold">
              Revenue Growth Solutions
            </p>

            <h1 className="text-5xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-[1.05]">
              Revenue Growth
              <br />
              Shouldn't Be Guesswork
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed max-w-2xl">
              SAGE aligns go-to-market strategy, demand generation, AI-enabled marketing operations, automation, and sales execution to build stronger pipeline and drive measurable revenue growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-10 py-2.5 bg-accent text-white font-bold hover:bg-accent/90 transition-all duration-300 text-lg group hover:scale-105 hover:shadow-2xl hover:brightness-110"
              >
                Book Revenue Evaluation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center px-10 py-2.5 border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 font-bold text-lg hover:scale-105 hover:shadow-2xl"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar - Clean */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto pl-4">
          <div className="grid grid-cols-3 gap-12 text-center">
            {[
              { value: '500+', label: 'Businesses Supported' },
              { value: '30+', label: 'Years Experience' },
              { value: '$100M+', label: 'Revenue Influenced' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-5xl md:text-6xl font-black text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem - Minimalist */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
          <img src={vectorPattern} alt="" className="w-full h-full object-contain" />
        </div>

        <div className="max-w-7xl mx-auto pl-4 relative z-10">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-accent mb-4 font-semibold">
              The Problem
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-3">
              Your Revenue Team Is <span className="text-accent">Working Against Itself</span>
            </h2>
            <div className="w-32 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Marketing generates leads. Sales chases deals. Leadership expects growth.
              <br />
              <strong className="text-foreground">Nobody owns the entire revenue process.</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Disconnected Teams', desc: 'Marketing and sales working in silos' },
              { title: 'Missed Opportunities', desc: 'Qualified leads slipping through cracks' },
              { title: 'Stalled Growth', desc: 'Revenue plateau despite investment' },
            ].map((problem) => (
              <div key={problem.title} className="bg-white p-8 border-l-4 border-destructive">
                <h3 className="text-xl font-bold text-primary mb-3">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sage - With Revenue System Image */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-7xl mx-auto pl-4">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-accent mb-4 font-semibold">
              Why Choose Us
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
              Why <span className="text-accent">SAGE</span>
            </h2>
            <div className="w-32 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-xl text-white/80">
              We're different from traditional agencies and consultants
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Revenue System Graphic */}
            <div className="flex justify-center">
              <img src={revenueSystemImg} alt="Revenue System" className="w-full max-w-md" />
            </div>

            {/* Why Points */}
            <div className="space-y-8">
              {[
                {
                  icon: Target,
                  title: 'Full-Funnel Focus',
                  desc: 'We build the entire revenue engine—from strategy to close.',
                },
                {
                  icon: Zap,
                  title: 'Execution, Not Advice',
                  desc: 'We do the work. No PowerPoints gathering dust.',
                },
                {
                  icon: TrendingUp,
                  title: 'Skin in the Game',
                  desc: 'Performance-based fees. We win when you win.',
                },
                {
                  icon: Award,
                  title: 'Proven Track Record',
                  desc: '30+ years delivering measurable results for B2B companies.',
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-accent flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-lg text-white/80">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - With RevenueStorm Image */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto pl-4">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-accent mb-4 font-semibold">
              How It Works
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-3">
              Three Steps to <span className="text-accent">Predictable Revenue Growth</span>
            </h2>
            <div className="w-32 h-1 bg-accent mx-auto mb-4"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* RevenueStorm Graphic */}
            <div className="flex justify-center order-2 lg:order-1">
              <img src={revenueStormImg} alt="RevenueStorm" className="w-full max-w-lg" />
            </div>

            {/* Process Steps */}
            <div className="space-y-1 order-1 lg:order-2">
              {[
                {
                  step: '01',
                  title: 'RevenueStorm™ Assessment',
                  desc: 'We analyze your entire revenue system to identify what\'s working and what\'s broken.',
                },
                {
                  step: '02',
                  title: 'Strategic Roadmap',
                  desc: 'Get a clear plan that aligns marketing, sales, and revenue ops.',
                },
                {
                  step: '03',
                  title: 'Hands-On Execution',
                  desc: 'We implement, optimize, and scale—from campaigns to sales enablement.',
                },
              ].map((step) => (
                <div key={step.step} className="group">
                  <div className="flex items-start gap-8 p-8 border-b border-border hover:bg-gray-50 transition-colors">
                    <div className="text-6xl font-black text-accent/20 group-hover:text-accent/40 transition-colors">
                      {step.step}
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-2xl font-bold text-primary mb-3">{step.title}</h3>
                      <p className="text-lg text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="pt-12 pb-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto pl-4">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-accent mb-4 font-semibold">
              Proven Results
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-3">
              Results That <span className="text-accent">Matter</span>
            </h2>
            <div className="w-32 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-xl text-muted-foreground">
              Average outcomes from integrated revenue systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '37%', label: 'More Qualified Opportunities' },
              { metric: '59%', label: 'Faster Pipeline Growth' },
              { metric: '22%', label: 'Shorter Sales Cycles' },
              { metric: '3X', label: 'Revenue Visibility' },
            ].map((result) => (
              <div key={result.label} className="bg-white p-8 border-l-4 border-accent">
                <div className="text-5xl font-black text-accent mb-3">{result.metric}</div>
                <div className="text-sm text-foreground font-semibold uppercase tracking-wide">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights - Minimalist */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto pl-4">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-accent mb-4 font-semibold">
              Knowledge Hub
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-3">
              Latest <span className="text-accent">Insights</span>
            </h2>
            <div className="w-32 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-xl text-muted-foreground">
              Strategic thinking on revenue growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                category: 'Revenue Growth',
                title: 'The Revenue System Problem: Why B2B Companies Struggle to Scale',
                date: 'March 15, 2026',
                readTime: '8 min',
                slug: 'revenue-system-problem-b2b-scale',
              },
              {
                category: 'Sales Strategy',
                title: 'Building Sales Playbooks That Actually Get Used',
                date: 'March 10, 2026',
                readTime: '6 min',
                slug: 'building-sales-playbooks-that-get-used',
              },
              {
                category: 'AI & Automation',
                title: 'AI in Revenue Operations: Hype vs Reality',
                date: 'February 28, 2026',
                readTime: '7 min',
                slug: 'ai-revenue-operations-hype-vs-reality',
              },
            ].map((article) => (
              <Link
                key={article.slug}
                to={`/insights/${article.slug}`}
                className="group border-l-4 border-border hover:border-accent transition-all duration-300 pl-6 pr-4 py-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-accent uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-black text-primary group-hover:text-accent transition-colors mb-3 leading-tight">
                  {article.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{article.date}</span>
                  <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button to="/insights">
              View All Insights
            </Button>
          </div>
        </div>
      </section>

      {/* CTA - Clean */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute top-0 left-0 w-64 h-64 opacity-5">
          <img src={vectorPattern} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64 opacity-5">
          <img src={vectorPattern} alt="" className="w-full h-full object-contain transform rotate-180" />
        </div>

        <div className="max-w-7xl mx-auto pl-4 relative z-10">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-accent mb-4 font-semibold">
              Get Started
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-3">
              Let's Fix Your <span className="text-accent">Revenue System</span>
            </h2>
            <div className="w-32 h-1 bg-accent mx-auto mb-6"></div>

            <p className="text-xl text-foreground mb-4">
              Get a Free RevenueStorm™ Assessment
            </p>

            <p className="text-lg text-muted-foreground mb-12">
              No commitment. No sales pitch. Just honest insights.
            </p>
          </div>

          <div className="bg-white border border-border p-8 mb-12 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {['Revenue Audit', 'Sales Assessment', 'Pipeline Review', 'Marketing Evaluation', 'Growth Roadmap', 'Recommendations'].map((item) => (
                <div key={item} className="flex items-center text-foreground">
                  <CheckCircle2 className="w-5 h-5 mr-3 flex-shrink-0 text-accent" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button to="/contact" className="text-xl">
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
