import { Link } from 'react-router';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Target, Zap, TrendingUp, CheckCircle2, Award, Building2, CalendarClock, Brain, BarChart3, Users, Cpu, AlertTriangle, Unplug, Layers, Lightbulb } from 'lucide-react';
import { RevenueStorm, renderTM } from '../components/RevenueStorm';

import revenueSystemImg from '../../assets/pages/home/revenue-system.png';
import revenueStormImg from '../../assets/pages/home/revenue-storm.png';
import vectorPattern from '../../assets/brand/vector-pattern.png';
import heroChart from '../../assets/pages/home/hero-chart.svg';
import wavePattern from '../../assets/brand/wave-bg.png';
import { Button } from '../components/Button';

function useCountUp(target: number, duration = 1800, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);
  return count;
}

export function Home() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsStarted, setStatsStarted] = useState(false);
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setStatsStarted(true); observer.disconnect(); }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const count200 = useCountUp(200, 1600, statsStarted);
  const count30  = useCountUp(30,  1200, statsStarted);
  const count8   = useCountUp(8,   1000, statsStarted);

  return (
    <div className="min-h-screen pt-16 sm:pt-20 bg-white">
      {/* Hero Section - Split Layout */}
      <section className="bg-white flex items-center">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 items-stretch">

            {/* Left — Text Content */}
            <div className="flex flex-col justify-center pt-10 pb-10 md:pt-12 md:pb-12 px-4 sm:px-6 lg:pl-[calc(2rem+45px)]">
                <p className="text-xs uppercase tracking-widest text-accent mb-4 sm:mb-5 font-semibold">
                  AI Revenue Partner
                </p>

                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black text-primary mb-3 sm:mb-4 leading-[1.05] sm:leading-[1.0]">
                  AI is easy to buy.<br />ROI is impossible to realize.
                </h1>

                <p className="text-xl sm:text-2xl font-bold text-accent mb-5 sm:mb-6">
                  We do the impossible part.
                </p>

                <p className="text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-lg">
                  1SagePros.AI is a master Revenue Value Added Reseller focused solely on AI. We design, integrate and manage the AI that established businesses need to defend and grow their position — without hiring an internal AI team or expensive systems.
                </p>

              <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                <Link
                  to="/contact"
                  aria-label="Get Your Complimentary AI ROI Assessment"
                  className="inline-flex items-center justify-center px-6 sm:px-7 py-3 bg-gradient-to-r from-[#1B6B3A] to-[#00A344] text-white font-semibold rounded-lg transition-all duration-300 text-base group hover:brightness-110 hover:shadow-lg"
                >
                  Get Your Complimentary AI ROI Assessment
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/solutions"
                  aria-label="See How We Work"
                  className="inline-flex items-center justify-center px-6 sm:px-7 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-semibold text-base hover:shadow-lg group"
                >
                  See How We Work
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* Right — chart */}
            <div className="hidden lg:block relative bg-white overflow-hidden">
              <img
                src={heroChart}
                alt="Revenue growth bar chart showing ascending pipeline stages"
                className="absolute inset-0 w-full h-full object-contain object-top scale-[1.07] origin-top"
                style={{ padding: '8px 0px 0px 0px' }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section ref={statsRef} className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6 md:gap-12 text-center">
            {[
              { display: `${count200}+`,  label: 'Businesses Served',  icon: Building2     },
              { display: `${count30}`,    label: 'Years of Trust',      icon: CalendarClock },
              { display: '$1.2B+',        label: 'TCV Delivered',       icon: TrendingUp    },
              { display: `${count8}X`,    label: 'Average Client ROI',  icon: Award         },
            ].map(({ display, label, icon: Icon }) => (
              <div key={label} className="group flex flex-col items-center cursor-default">
                <div className="flex items-center gap-3 mb-2">
                  {Icon && <Icon className="w-7 h-7 sm:w-9 sm:h-9 text-accent transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />}
                  <div className="text-4xl sm:text-5xl md:text-6xl font-black text-primary transition-colors duration-300 group-hover:text-accent">{display}</div>
                </div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="relative py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
          <img src={vectorPattern} alt="" className="w-full h-full object-contain" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">
              The Problem
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-3">
              The problem isn't your team. <span className="text-accent">It's your system.</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Sales, marketing and RevOps each think they're doing their job. AI layered on top of a disconnected system doesn't fix it. It scales the dysfunction.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { icon: Unplug,       title: 'Disconnected execution', desc: 'Marketing, sales and RevOps are in separate orbits, with no shared accountability.' },
              { icon: Layers,       title: 'No unified system',      desc: 'Tools and teams that don\'t talk to each other generate noise, not pipeline.' },
              { icon: Lightbulb,    title: 'AI without strategy',    desc: 'Pilots that impress in demos but never connect to revenue outcomes.' },
              { icon: AlertTriangle,title: 'Unpredictable pipeline', desc: 'No visibility into what\'s working, what\'s wasted, or what to fix first.' },
            ].map((problem) => (
              <div key={problem.title} className="group bg-white p-6 md:p-8 border-l-4 border-accent hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <problem.icon className="w-7 h-7 text-accent mb-3 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-lg font-semibold text-primary">
            Disconnected parts drain resources. Engineered into one system, they compound revenue.
          </p>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="relative py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#E8F5EE]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">
              Who We Serve
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-3">
              Built for the owner-operator <span className="text-accent">defending a market position,</span> not the startup chasing one.
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                metric: '$50M+',
                desc: 'Established, legacy companies with real revenue to protect',
              },
              {
                metric: 'Ceiling',
                desc: 'Growth has flattened and the old playbook isn\'t moving the number',
              },
              {
                metric: 'Pressure',
                desc: 'AI-native startups and next-tier players are hunting your customers',
              },
            ].map((card) => (
              <div key={card.metric} className="group bg-white p-8 md:p-10 border-l-4 border-accent hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="text-4xl md:text-5xl font-black text-accent mb-4 transition-transform duration-300 group-hover:scale-105 origin-center">{card.metric}</div>
                <p className="text-base text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="pt-12 md:pt-24 pb-8 md:pb-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">
              How It Works
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-3">
              <RevenueStorm /> <span className="text-accent">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Seven steps, one connected revenue engine, built to move the number in 90 days.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 gap-0 border-t border-border">
            {[
              {
                step: '01',
                title: 'RevenueStorm™ planning',
                desc: 'Define desired outcomes before any AI is recommended.',
              },
              {
                step: '02',
                title: 'Systems & process review',
                desc: 'Diagnose what\'s working, what\'s broken and what\'s missing.',
              },
              {
                step: '03',
                title: 'AI optimization plan',
                desc: 'Map AI capabilities to your specific gaps and goals.',
              },
              {
                step: '04',
                title: 'Tool & platform selection',
                desc: 'Choose from our vetted, pre-integrated partner suite.',
              },
              {
                step: '05',
                title: 'Managed execution',
                desc: 'We deploy and run it alongside your team.',
              },
              {
                step: '06',
                title: 'Testing for effectiveness',
                desc: 'Measure what converts. Cut what doesn\'t.',
              },
              {
                step: '07',
                title: 'Stabilize & optimize',
                desc: 'Full rollout and continuous performance tuning.',
              },
            ].map((step, i) => (
              <div key={step.step} className={`group flex items-start gap-4 sm:gap-6 p-6 md:p-8 border-b border-border hover:bg-gray-50 transition-colors ${i === 6 ? 'md:col-span-2 md:max-w-xl md:mx-auto md:border-r-0 w-full' : i % 2 === 0 ? 'md:border-r' : ''}`}>
                <div className="text-4xl sm:text-5xl font-black text-primary/25 group-hover:text-accent/60 transition-colors leading-none pt-1 min-w-[2.5rem] sm:min-w-[3rem]">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-primary mb-2">{renderTM(step.title)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI RevGen Advisory */}
      <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left — Text */}
            <div>
              <p className="text-xs uppercase tracking-widest text-accent mb-4 sm:mb-5 font-semibold">
                AI RevGen Advisory
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-5 sm:mb-6 leading-[1.1] sm:leading-[1.08]">
                AI Alone Isn't the Advantage. <span className="text-accent">How You Use It Is.</span>
              </h2>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed mb-5 sm:mb-6">
                Anyone can buy an AI tool. Very few know how to wire it into a revenue system that actually performs. 1SagePros.AI's AI RevGen Advisory practice embeds AI where it moves the needle: demand generation, pipeline qualification, sales velocity, and forecasting accuracy.
              </p>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed mb-8 md:mb-10">
                We don't run AI experiments. We build AI-powered GTM systems. Human expertise guiding the strategy. AI scaling the execution. Revenue as the metric that matters.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-8 md:mb-10">
                {[
                  'AI-Powered Demand Generation',
                  'Intelligent Lead Scoring & Routing',
                  'Automated Sales Sequence Optimization',
                  'Predictive Pipeline Forecasting',
                  'Conversational AI for Buyer Engagement',
                  'Revenue Intelligence & Reporting',
                ].map((item) => (
                  <div key={item} className="group/item flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover/item:scale-110" />
                    <span className="text-white/80 font-medium text-sm transition-colors duration-300 group-hover/item:text-white">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 bg-gradient-to-r from-[#1B6B3A] to-[#00A344] text-white font-semibold rounded-lg transition-all duration-300 text-base group hover:brightness-110 hover:shadow-lg"
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
                  {[30, 85, 140, 195].map((y) => (
                    <line key={y} x1="0" y1={y} x2="420" y2={y} stroke="#ffffff" strokeOpacity="0.07" strokeWidth="1"/>
                  ))}
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
                        <rect x={x} y={baseY - bH} width="34" height={bH} rx="3" fill="url(#aiBaseGrad)" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="1"/>
                        <rect x={x + 38} y={baseY - aH} width="34" height={aH} rx="3" fill="url(#aiBarGrad)"/>
                        <text x={x + 55} y={baseY - aH - 8} textAnchor="middle" fontSize="13" fontWeight="800" fill="#00C853">{after}%</text>
                        {label.split(' ').map((word, i) => (
                          <text key={i} x={x + 36} y={baseY + 16 + i * 14} textAnchor="middle" fontSize="10" fill="#ffffff" fillOpacity="0.45">{word}</text>
                        ))}
                      </g>
                    );
                  })}
                  <line x1="0" y1="230" x2="420" y2="230" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1.5"/>
                </svg>
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
      <section className="pt-8 md:pt-12 pb-12 md:pb-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">
              Proven Outcomes
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-3">
              When the system works, <span className="text-accent">the numbers show it.</span>
            </h2>

            <p className="text-lg text-muted-foreground">
              Average client outcomes from 1SagePros.AI-engineered revenue systems.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { metric: '3X',   label: 'Pipeline Growth',      desc: 'From aligned ICP targeting and AI-powered demand generation' },
              { metric: '60%',  label: 'Less Wasted Effort',   desc: 'Disconnected activity replaced by sequenced, accountable execution' },
              { metric: '22%',  label: 'Shorter Sales Cycles', desc: 'Structured playbooks and AI-assisted deal intelligence' },
              { metric: '8X',   label: 'Average Client ROI',   desc: 'Across pipeline influenced, deals closed and revenue retained' },
            ].map((result) => (
              <div key={result.label} className="group bg-white p-6 md:p-8 border-l-4 border-accent hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl font-black text-accent mb-3 transition-transform duration-300 group-hover:scale-105 origin-left">{result.metric}</div>
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
        className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-border"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">
              Knowledge Hub
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-3">
              Latest <span className="text-accent">Insights</span>
            </h2>

            <p className="text-lg text-muted-foreground">
              Strategic thinking on revenue growth
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6 mb-10 md:mb-12">
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
                className="group flex-1 bg-white p-6 hover:shadow-md transition-all duration-300 flex flex-col border-l-4 border-accent"
                aria-label={article.title}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors mb-4 leading-snug flex-1">
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

      {/* CTA */}
      <section className="relative py-12 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundImage: `url(${wavePattern})`, backgroundSize: "100% 100%", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundColor: "#ffffff" }}>
        <div className="absolute inset-0 bg-white/80" />
        <div className="absolute top-0 left-0 w-64 h-64 opacity-5">
          <img src={vectorPattern} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64 opacity-5">
          <img src={vectorPattern} alt="" className="w-full h-full object-contain transform rotate-180" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">
              Build Your Revenue Engine
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-primary mb-3">
              Ready to Move <span className="text-accent">the Needle?</span>
            </h2>

            <p className="text-lg text-foreground mb-4">
              Book a Free <RevenueStorm /> Assessment
            </p>

            <p className="text-base text-muted-foreground mb-8 md:mb-12">
              One conversation. Honest diagnosis. A clear path from fragmented activity to predictable revenue.
            </p>
          </div>

          <div className="bg-white border border-border p-6 md:p-8 mb-8 md:mb-12 max-w-2xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 text-left">
              {['Revenue Gap Analysis', 'GTM Alignment Review', 'Pipeline Health Check', 'AI Opportunity Audit', 'Growth Roadmap', 'Actionable Recommendations'].map((item) => (
                <div key={item} className="group/item flex items-center text-foreground">
                  <CheckCircle2 className="w-5 h-5 mr-3 flex-shrink-0 text-accent transition-transform duration-300 group-hover/item:scale-110" />
                  <span className="font-medium transition-colors duration-300 group-hover/item:text-accent">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-4 bg-gradient-to-r from-[#1B6B3A] to-[#00A344] text-white font-semibold rounded-lg transition-all duration-300 text-base group hover:brightness-110 hover:shadow-lg"
            >
              Book Your <RevenueStorm /> Assessment
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-semibold text-base hover:shadow-lg group"
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
