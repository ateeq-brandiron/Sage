import { Link } from 'react-router';
import { ArrowRight, Target, Zap, TrendingUp, CheckCircle2, Award, Building2, CalendarClock, CircleDollarSign } from 'lucide-react';
import revenueSystemImg from '../../imports/sage-2.png';
import revenueStormImg from '../../imports/sage-1.png';
import vectorPattern from '../../imports/Vector-1.png';
import heroChart from '../../imports/sage-hero-original.svg';
import wavePattern from '../../imports/Sage wavy background more solid.png';
import { Button } from '../components/Button';

export function Home() {
  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero Section - Split Layout */}
      <section className="bg-white min-h-[90vh] flex items-center">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 items-stretch">

            {/* Left — Text Content (padding defines the chart's top/bottom bounds) */}
            <div className="flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 pl-[calc(1rem+45px)] sm:pl-[calc(1.5rem+45px)] lg:pl-[calc(2rem+45px)]">
              <p className="text-xs uppercase tracking-widest text-accent mb-5 font-semibold">
                Revenue Growth Solutions
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-primary mb-6 leading-[1.08]">
                Revenue Growth<br />Shouldn't Be Guesswork
              </h1>

              <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                SAGE aligns go-to-market strategy, demand generation, AI-enabled marketing operations, automation, and sales execution to build stronger pipeline and drive measurable revenue growth.
              </p>

              <div className="flex flex-row flex-wrap gap-3 items-center">
                <Link
                  to="/contact"
                  aria-label="Book a Revenue Evaluation"
                  className="inline-flex items-center justify-center px-7 py-3 bg-gradient-to-r from-[#1B6B3A] to-[#00A344] text-white font-semibold rounded-lg transition-all duration-300 text-base group hover:brightness-90 hover:shadow-lg whitespace-nowrap"
                >
                  Book a Revenue Evaluation
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/case-studies"
                  aria-label="View Success Stories"
                  className="inline-flex items-center justify-center px-7 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-semibold text-base hover:shadow-lg whitespace-nowrap group"
                >
                  View Success Stories
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* Right — chart with balanced padding for top/bottom/horizontal spacing */}
            <div className="hidden lg:block relative bg-white">
              <img
                src={heroChart}
                alt="Wealth over time bar chart with five ascending bars"
                className="absolute inset-0 w-full h-full object-contain object-bottom"
                style={{ padding: '80px 16px 48px 16px' }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Stats Bar - Clean */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto pl-4">
          <div className="grid grid-cols-3 gap-12 text-center">
            {[
              { value: '500+',   label: 'Businesses Supported', icon: Building2 },
              { value: '30+',    label: 'Years Experience',     icon: CalendarClock },
              { value: '$100M+', label: 'Revenue Influenced',   icon: CircleDollarSign },
            ].map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center">
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="w-9 h-9 text-accent" strokeWidth={1.5} />
                  <div className="text-5xl md:text-6xl font-black text-primary">{value}</div>
                </div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">{label}</div>
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

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-accent mb-4 font-semibold">
              The Problem
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-3">
              Your Revenue Team Is <span className="text-accent">Working Against Itself</span>
            </h2>
            
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
              <div key={problem.title} className="bg-white p-8 border-l-4 border-accent">
                <h3 className="text-xl font-bold text-primary mb-3">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sage - With Revenue System Image */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#E8F5EE]">
        <div className="max-w-7xl mx-auto pl-4">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-accent mb-4 font-semibold">
              Why Choose Us
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-3">
              Why <span className="text-accent">SAGE</span>
            </h2>
            
            <p className="text-xl text-primary/70">
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
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl border-2 border-accent/20 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">{item.title}</h3>
                      <p className="text-lg text-primary/70">{item.desc}</p>
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
            
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* RevenueStorm Graphic */}
            <div className="flex justify-center order-2 lg:order-1">
              <img src={revenueStormImg} alt="SAGE revenue growth framework diagram" className="w-full max-w-lg" />
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
                    <div className="text-6xl font-black text-primary/40 group-hover:text-primary/70 transition-colors">
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

      {/* Latest Insights */}
      <section
        aria-label="Latest Insights"
        className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border"

      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-accent mb-4 font-semibold">
              Knowledge Hub
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-3">
              Latest <span className="text-accent">Insights</span>
            </h2>
            
            <p className="text-xl text-muted-foreground">
              Strategic thinking on revenue growth
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-col md:flex-row justify-between gap-6 mb-12">
            {[
              {
                category: 'Revenue Growth',
                readTime: '8 min',
                title: 'The Revenue System Problem: Why B2B Companies Struggle to Scale',
                date: 'March 15, 2026',
                slug: 'revenue-system-problem-b2b-scale',
              },
              {
                category: 'Sales Strategy',
                readTime: '6 min',
                title: 'Building Sales Playbooks That Actually Get Used',
                date: 'March 10, 2026',
                slug: 'building-sales-playbooks-that-get-used',
              },
              {
                category: 'AI & Automation',
                readTime: '7 min',
                title: 'AI in Revenue Operations: Hype vs Reality',
                date: 'February 28, 2026',
                slug: 'ai-revenue-operations-hype-vs-reality',
              },
            ].map((article) => (
              <Link
                key={article.slug}
                to="/insights"
                className={`group flex-1 bg-white p-6 hover:shadow-md transition-all duration-300 flex flex-col border-l-4 border-gray-200 hover:border-accent`}
                aria-label={article.title}
              >
                {/* Category + read time */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors mb-4 leading-snug flex-1">
                  {article.title}
                </h3>

                {/* Date + arrow */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{article.date}</span>
                  <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button to="/insights">
              View All Insights
            </Button>
          </div>
        </div>
      </section>

      {/* CTA - Clean */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundImage: `url(${wavePattern})`, backgroundSize: "100% 100%", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundColor: "#ffffff" }}>
        {/* Decorative Pattern */}
        <div className="absolute top-0 left-0 w-64 h-64 opacity-5">
          <img src={vectorPattern} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64 opacity-5">
          <img src={vectorPattern} alt="" className="w-full h-full object-contain transform rotate-180" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-accent mb-4 font-semibold">
              Get Started
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-3">
              Let's Fix Your <span className="text-accent">Revenue System</span>
            </h2>
            

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
