import { Link } from 'react-router';
import { ArrowRight, Target, Zap, TrendingUp, CheckCircle2, Award, Building2, CalendarClock, CircleDollarSign, Brain, BarChart3, Users, Cpu } from 'lucide-react';
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
      <section className="bg-white min-h-[80vh] flex items-center">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 items-stretch">

            {/* Left — Text Content */}
            <div className="flex flex-col justify-between pt-12 pb-12 px-4 sm:px-6 lg:px-8 pl-[calc(1rem+45px)] sm:pl-[calc(1.5rem+45px)] lg:pl-[calc(2rem+45px)]">
              <div>
                <p className="text-xs uppercase tracking-widest text-accent mb-5 font-semibold">
                  Revenue Growth Solutions
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-primary mb-6 leading-[1.08]">
                  Align the Strategy. Engineer the Pipeline. Move the Needle.
                </h1>

                <p className="text-base md:text-lg text-muted-foreground mb-4 leading-relaxed max-w-lg">
                  SAGE aligns go-to-market strategy, demand generation, AI-enabled marketing, automation, and sales execution into one connected revenue engine — built for measurable growth.
                </p>

                <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
                  30+ years riding shotgun with B2B leaders who are tired of fragmented activity and ready for revenue outcomes. Through our RevenueStorm™ process and Tactical Results™ approach, we don't just point at the map — we engineer the route and ride it with you.
                </p>
              </div>

              <div className="flex flex-row flex-wrap gap-3 items-center">
                <Link
                  to="/contact"
                  aria-label="Book a Free RevenueStorm Assessment"
                  className="inline-flex items-center justify-center px-7 py-3 bg-gradient-to-r from-[#1B6B3A] to-[#00A344] text-white font-semibold rounded-lg transition-all duration-300 text-base group hover:brightness-90 hover:shadow-lg whitespace-nowrap"
                >
                  Book a Free RevenueStorm™ Assessment
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/solutions"
                  aria-label="See How We Work"
                  className="inline-flex items-center justify-center px-7 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-semibold text-base hover:shadow-lg whitespace-nowrap group"
                >
                  See How We Work
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* Right — chart with balanced padding for top/bottom/horizontal spacing */}
            <div className="hidden lg:block relative bg-white">
              <img
                src={heroChart}
                alt="Wealth over time bar chart with five ascending bars"
                className="absolute inset-0 w-full h-full object-contain object-top"
                style={{ padding: '48px 4px 4px 0px' }}
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
              Plenty of Horsepower. <span className="text-accent">No Alignment.</span>
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Most growth-stage B2B companies don't have a revenue problem. They have an alignment problem. Smart people, strong products, real budgets — pulling in different directions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {[
              { title: 'Strategy Never Reaches Execution', desc: 'Plans get built and shelved — never connected to daily commercial activity.' },
              { title: 'Marketing Generating Activity, Not Pipeline', desc: 'Impressions, clicks, and leads that don\'t convert to real opportunities.' },
              { title: 'AI Experiments That Don\'t Move Revenue', desc: 'Tech investments and AI pilots that sit outside the revenue engine.' },
            ].map((problem) => (
              <div key={problem.title} className="bg-white p-8 border-l-4 border-accent">
                <h3 className="text-xl font-bold text-primary mb-3">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-lg font-semibold text-primary">
            Disconnected parts stall growth. Engineered together, they compound it.
          </p>
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
              We Engineer Revenue Engines — <span className="text-accent">Not Siloed Deliverables.</span>
            </h2>

            <p className="text-xl text-primary/70 max-w-3xl mx-auto">
              SAGE doesn't sell campaigns, AI workshops, or sales placements as standalone services. We engineer a single, performance-driven revenue system that connects every part of your go-to-market motion.
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
                  title: 'GTM Engineering Mindset',
                  desc: 'Structure, sequencing, systems, and accountability — not just advice.',
                },
                {
                  icon: Zap,
                  title: 'RevenueStorm™ Methodology',
                  desc: 'A named, ownable front-end process clients can act on immediately.',
                },
                {
                  icon: TrendingUp,
                  title: 'Performance-Driven Execution',
                  desc: 'Aligned-incentive activation tied to outcomes. We win when you win.',
                },
                {
                  icon: Award,
                  title: 'On-Demand Senior Expertise',
                  desc: 'Seasoned CxOs, GTM leaders, and analysts without the full in-house overhead.',
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
              The RevenueStorm™ <span className="text-accent">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Six steps from broken alignment to a compounding revenue engine
            </p>
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
                  desc: 'A structured diagnostic of your entire revenue system — strategy, pipeline, marketing, sales, and technology — to identify gaps and growth levers.',
                },
                {
                  step: '02',
                  title: 'Revenue Architecture',
                  desc: 'We design the full-funnel structure: ICP definition, positioning, channel strategy, sales process, and the metrics framework that holds it all together.',
                },
                {
                  step: '03',
                  title: 'GTM Alignment',
                  desc: 'Marketing, sales, and leadership aligned around the same priorities, personas, pipeline stages, and success metrics — no more siloed execution.',
                },
                {
                  step: '04',
                  title: 'AI & Automation Integration',
                  desc: 'Embedding AI-enabled tools and automation into your revenue workflows — from demand generation to forecasting — so your team scales without headcount.',
                },
                {
                  step: '05',
                  title: 'Tactical Results™ Execution',
                  desc: 'We implement alongside your team: campaigns, sales plays, content, enablement, and outbound motion — all tied to pipeline and revenue outcomes.',
                },
                {
                  step: '06',
                  title: 'Performance Optimization',
                  desc: 'Ongoing measurement, reporting, and iteration. We monitor what\'s working, double down on winners, and continuously tune the system for compounding growth.',
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

      {/* AI RevGen Advisory — NEW SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-7xl mx-auto pl-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — Text */}
            <div>
              <p className="text-xs uppercase tracking-widest text-accent mb-5 font-semibold">
                AI RevGen Advisory
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                AI That <span className="text-accent">Generates Revenue</span> — Not Just Reports
              </h2>
              <p className="text-lg text-white/75 leading-relaxed mb-6">
                Most companies are experimenting with AI in isolation. SAGE embeds AI directly into your revenue engine — connecting your data, your team's workflows, and your buyer journey to produce real pipeline outcomes.
              </p>
              <p className="text-lg text-white/75 leading-relaxed mb-10">
                Our AI RevGen Advisory practice works alongside your GTM team to identify, implement, and operationalize AI capabilities that directly impact demand generation, sales velocity, and revenue forecasting.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  'AI-Powered Demand Generation',
                  'Intelligent Lead Scoring & Routing',
                  'Automated Sales Sequence Optimization',
                  'Predictive Pipeline Forecasting',
                  'Conversational AI for Buyer Engagement',
                  'Revenue Intelligence & Reporting',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-7 py-3 bg-gradient-to-r from-[#1B6B3A] to-[#00A344] text-white font-semibold rounded-lg transition-all duration-300 text-base group hover:brightness-90 hover:shadow-lg"
              >
                Talk to an AI Revenue Advisor
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Right — SVG Visualization */}
            <div className="hidden lg:block">
              <div className="w-full">
                <p className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-4">AI Impact on Revenue Metrics</p>
                <svg viewBox="0 0 420 300" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="aiBarGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00C853" stopOpacity="0.9"/>
                      <stop offset="100%" stopColor="#00C853" stopOpacity="0.3"/>
                    </linearGradient>
                    <linearGradient id="aiBaseGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1"/>
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0.03"/>
                    </linearGradient>
                  </defs>
                  {/* Grid */}
                  {[30, 85, 140, 195].map((y) => (
                    <line key={y} x1="0" y1={y} x2="420" y2={y} stroke="#ffffff" strokeOpacity="0.07" strokeWidth="1"/>
                  ))}
                  {/* Paired bars: Before (ghost) + After (accent) */}
                  {[
                    { label: 'Lead Quality',     before: 40, after: 78,  x: 20  },
                    { label: 'Pipeline Velocity', before: 50, after: 85,  x: 110 },
                    { label: 'Win Rate',          before: 35, after: 65,  x: 200 },
                    { label: 'Forecast Accuracy', before: 45, after: 90,  x: 290 },
                  ].map(({ label, before, after, x }) => {
                    const baseY = 230;
                    const bH = (before / 100) * 190;
                    const aH = (after  / 100) * 190;
                    return (
                      <g key={label}>
                        {/* Before bar */}
                        <rect x={x} y={baseY - bH} width="34" height={bH} rx="3" fill="url(#aiBaseGrad)" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="1"/>
                        {/* After bar */}
                        <rect x={x + 38} y={baseY - aH} width="34" height={aH} rx="3" fill="url(#aiBarGrad)"/>
                        {/* After label */}
                        <text x={x + 55} y={baseY - aH - 8} textAnchor="middle" fontSize="13" fontWeight="800" fill="#00C853">{after}%</text>
                        {/* X label */}
                        {label.split(' ').map((word, i) => (
                          <text key={i} x={x + 36} y={baseY + 16 + i * 14} textAnchor="middle" fontSize="10" fill="#ffffff" fillOpacity="0.45">{word}</text>
                        ))}
                      </g>
                    );
                  })}
                  {/* Baseline */}
                  <line x1="0" y1="230" x2="420" y2="230" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1.5"/>
                </svg>
                {/* Legend */}
                <div className="flex gap-6 mt-3">
                  {[
                    { color: 'bg-white/10 border border-white/20', label: 'Before AI Integration' },
                    { color: 'bg-accent',                          label: 'After AI Integration'  },
                  ].map(({ color, label }) => (
                    <div key={label} className="flex items-center gap-2">
                      <span className={`w-4 h-2 rounded-full ${color}`}/>
                      <span className="text-[10px] text-white/40 font-semibold uppercase tracking-wide">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="pt-12 pb-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto pl-4">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-accent mb-4 font-semibold">
              Proven Outcomes
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-3">
              What an Engineered Revenue System <span className="text-accent">Actually Delivers</span>
            </h2>

            <p className="text-xl text-muted-foreground">
              Average client results after 90 days of integrated execution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '37%',  label: 'More Qualified Opportunities', desc: 'From aligned ICP targeting and AI-scored demand generation' },
              { metric: '59%',  label: 'Faster Pipeline Growth',        desc: 'By removing friction between marketing and sales motion' },
              { metric: '22%',  label: 'Shorter Sales Cycles',          desc: 'Through structured playbooks and buyer-stage enablement' },
              { metric: '8X',   label: 'Average Client ROI',            desc: 'Measured across pipeline influenced, deals closed, and revenue retained' },
            ].map((result) => (
              <div key={result.label} className="bg-white p-8 border-l-4 border-accent">
                <div className="text-5xl font-black text-accent mb-3">{result.metric}</div>
                <div className="text-sm text-foreground font-semibold uppercase tracking-wide mb-3">{result.label}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{result.desc}</p>
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
        <div className="absolute inset-0 bg-white/80" />
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
              Ready to Move the Needle?
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-3">
              Stop Patching. Start <span className="text-accent">Engineering.</span>
            </h2>

            <p className="text-xl text-foreground mb-4">
              Book a Free RevenueStorm™ Assessment
            </p>

            <p className="text-lg text-muted-foreground mb-12">
              One conversation. Clear diagnosis. A path to predictable revenue growth.
            </p>
          </div>

          <div className="bg-white border border-border p-8 mb-12 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {['Revenue Gap Analysis', 'GTM Alignment Review', 'Pipeline Health Check', 'AI Opportunity Audit', 'Growth Roadmap', 'Actionable Recommendations'].map((item) => (
                <div key={item} className="flex items-center text-foreground">
                  <CheckCircle2 className="w-5 h-5 mr-3 flex-shrink-0 text-accent" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#1B6B3A] to-[#00A344] text-white font-semibold rounded-lg transition-all duration-300 text-base group hover:brightness-90 hover:shadow-lg"
            >
              Book Your RevenueStorm™ Assessment
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-semibold text-base hover:shadow-lg group"
            >
              Talk to a Revenue Engineer
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
