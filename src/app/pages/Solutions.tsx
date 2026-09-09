import { Link } from 'react-router';
import { Target, TrendingUp, Users, BarChart3, Lightbulb, Headphones, CheckCircle2, ArrowRight, Search, Megaphone, Zap, BarChart2 } from 'lucide-react';
import leavesBackground from '../../assets/brand/leaves-bg.jpg';
import wavePattern from '../../assets/brand/wave-bg.png';

const slugMap: Record<string, string> = {
  'Revenue Strategy': 'revenue-strategy',
  'Demand Generation': 'demand-generation',
  'Sales Enablement': 'sales-enablement',
  'Revenue Intelligence': 'revenue-intelligence',
  'Marketing Automation': 'marketing-automation',
  'Executive Advisory': 'executive-advisory',
};
import revenueSystemImg from '../../assets/pages/home/revenue-system.png';
import vectorPattern from '../../assets/brand/vector-pattern.png';
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
      <section className="bg-white min-h-[80vh] flex items-center border-b border-border">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 items-stretch">
            {/* Left — text */}
            <div className="flex flex-col justify-center pt-12 pb-12 px-4 sm:px-6 lg:px-8 pl-[calc(1rem+45px)] sm:pl-[calc(1.5rem+45px)] lg:pl-[calc(2rem+45px)]">
              <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">Revenue Solutions</p>
              <h1 className="text-5xl md:text-6xl font-black text-primary mb-6 leading-tight">Complete Revenue Solutions</h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mb-8">Integrated revenue operations that deliver predictable, scalable growth.</p>
              <div className="flex flex-row flex-wrap gap-3 items-center">
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
            {/* Right — inline SVG pipeline funnel chart */}
            <div className="hidden lg:flex items-stretch relative bg-white">
              <div className="w-full flex flex-col justify-center px-8 py-12">
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary/50 mb-4">Revenue Pipeline Conversion</p>
                <svg viewBox="0 0 420 320" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="solAreaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00C853" stopOpacity="0.22"/>
                      <stop offset="100%" stopColor="#00C853" stopOpacity="0.02"/>
                    </linearGradient>
                    <linearGradient id="solBarA" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00C853" stopOpacity="0.85"/>
                      <stop offset="100%" stopColor="#00C853" stopOpacity="0.35"/>
                    </linearGradient>
                    <linearGradient id="solBarB" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2D7A4F" stopOpacity="0.85"/>
                      <stop offset="100%" stopColor="#2D7A4F" stopOpacity="0.35"/>
                    </linearGradient>
                  </defs>
                  {/* Grid lines */}
                  {[{ y: 20 }, { y: 80 }, { y: 140 }, { y: 200 }, { y: 260 }].map(({ y }) => (
                    <line key={y} x1="50" y1={y} x2="410" y2={y} stroke="#0B1F35" strokeOpacity="0.06" strokeWidth="1"/>
                  ))}
                  {/* Y labels */}
                  {[
                    { label: '100%', y: 20  },
                    { label: '75%',  y: 80  },
                    { label: '50%',  y: 140 },
                    { label: '25%',  y: 200 },
                    { label: '0%',   y: 260 },
                  ].map(({ label, y }) => (
                    <text key={label} x="44" y={y} textAnchor="end" fontSize="10" fill="#0B1F35" fillOpacity="0.38" dominantBaseline="middle">{label}</text>
                  ))}
                  {/* Bars — 5 stages, ascending */}
                  {[
                    { stage: 'Awareness',   pct: 30, x: 55,  grad: 'url(#solBarB)' },
                    { stage: 'Engagement',  pct: 48, x: 120, grad: 'url(#solBarB)' },
                    { stage: 'Pipeline',    pct: 62, x: 185, grad: 'url(#solBarA)' },
                    { stage: 'Qualified',   pct: 78, x: 250, grad: 'url(#solBarA)' },
                    { stage: 'Revenue',     pct: 95, x: 315, grad: 'url(#solBarA)' },
                  ].map(({ stage, pct, x, grad }) => {
                    const barH = (pct / 100) * 240;
                    const topY = 260 - barH;
                    return (
                      <g key={stage}>
                        <rect x={x} y={topY} width="58" height={barH} rx="4" fill={grad}/>
                        <text x={x + 29} y={topY - 8} textAnchor="middle" fontSize="13" fontWeight="800" fill="#0B1F35" fillOpacity="0.72">{pct}%</text>
                        <text x={x + 29} y="280" textAnchor="middle" fontSize="10" fill="#0B1F35" fillOpacity="0.45">{stage}</text>
                      </g>
                    );
                  })}
                  {/* Trend line over bars */}
                  <polyline points="84,200 149,175 214,157 279,138 344,109" stroke="#00C853" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 3" fill="none"/>
                  {[84,149,214,279,344].map((x, i) => {
                    const ys = [200,175,157,138,109];
                    return <circle key={x} cx={x} cy={ys[i]} r="4" fill="#00C853" stroke="white" strokeWidth="2"/>;
                  })}
                  {/* Baseline */}
                  <line x1="50" y1="260" x2="410" y2="260" stroke="#0B1F35" strokeOpacity="0.15" strokeWidth="1.5"/>
                </svg>
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
                  <div className="w-16 h-16 rounded-2xl border-2 border-accent/20 flex items-center justify-center mb-6 group-hover:border-accent group-hover:bg-accent/10 group-hover:scale-105 transition-all duration-300">
                    <Icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  </div>

                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-semibold transition-colors duration-300 group-hover:text-accent/70">
                    {solution.tagline}
                  </div>

                  <h3 className="text-2xl font-black text-primary mb-3 transition-colors duration-300 group-hover:text-accent">{solution.title}</h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {solution.includes.map((item) => (
                      <li key={item} className="flex items-start text-sm group/item">
                        <CheckCircle2 className="w-4 h-4 text-accent mr-2 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300" />
                        <span className="text-muted-foreground group-hover/item:text-accent transition-colors duration-300">{item}</span>
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

      {/* The Framework */}
      <section
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: `url(${leavesBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-accent mb-4 font-semibold">Our Approach</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
              The <span className="text-accent">Framework</span>
            </h2>
            <p className="text-xl text-white/70">Five phases to predictable revenue</p>
          </div>

          {/* Phase cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { phase: '01', icon: Search,    title: 'RevenueStorm™ Assessment', desc: 'Analyze current state and identify opportunities' },
              { phase: '02', icon: Target,    title: 'Market Positioning',        desc: 'Nail messaging and competitive positioning' },
              { phase: '03', icon: Megaphone, title: 'Demand Generation',         desc: 'Build campaigns that fill pipeline' },
              { phase: '04', icon: Zap,       title: 'Sales Acceleration',        desc: 'Equip teams with playbooks and tools' },
              { phase: '05', icon: BarChart2, title: 'Revenue Intelligence',      desc: 'Deploy dashboards and analytics' },
            ].map(({ phase, icon: Icon, title, desc }) => (
              <div
                key={phase}
                className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="text-3xl font-black text-accent/60 mb-4 group-hover:text-accent/80 transition-colors duration-300">{phase}</div>
                <div className="w-14 h-14 rounded-2xl bg-accent/25 border border-accent/40 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-bold text-white mb-3 leading-snug">{title}</h3>
                <p className="text-sm text-white/65 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative" style={{ backgroundImage: `url(${wavePattern})`, backgroundSize: "100% 100%", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundColor: "#ffffff" }}>
        <div className="absolute inset-0 bg-white/80" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="text-sm uppercase tracking-wider text-accent mb-4 font-semibold">
            Get Started
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-3">
            Ready to <span className="text-accent">Transform Your Revenue?</span>
          </h2>
          
          <p className="text-xl mb-10 text-primary/70">
            Get a free assessment, no commitment required
          </p>
          <Button to="/contact">
            Get Free Assessment
          </Button>
        </div>
      </section>
    </div>
  );
}
