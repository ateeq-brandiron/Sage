import { Link } from 'react-router';
import { TronRoadBg } from '../components/TronRoadBg';
import { Target, TrendingUp, Users, BarChart3, Lightbulb, Headphones, CheckCircle2, ArrowRight, Search, Megaphone, Zap, BarChart2, ShieldCheck, Layers, Brain, Package } from 'lucide-react';

import { renderTM } from '../components/RevenueStorm';

const slugMap: Record<string, string> = {
  'Revenue Strategy': 'revenue-strategy',
  'Demand Generation': 'demand-generation',
  'Sales Enablement': 'sales-enablement',
  'Revenue Intelligence': 'revenue-intelligence',
  'Marketing Automation': 'marketing-automation',
  'Executive Advisory': 'executive-advisory',
};
import { Button } from '../components/Button';

export function Solutions() {
  const cx0 = 220, cy0 = 220;
  const wheelPartners = [
    'Venture Capital', 'Empower AI 365', 'Engage3P', 'Brand Iron', 'Boxsy Fund Tracking',
    'Bellwether Intel', 'Outreap', 'AIO', 'Biz Konnect',
  ].map((name, i) => {
    const rad = ((-90 + i * 40) * Math.PI) / 180;
    const [c, s] = [Math.cos(rad), Math.sin(rad)];
    return {
      name,
      cx: cx0 + 135 * c, cy: cy0 + 135 * s,
      sx: cx0 + 52 * c,  sy: cy0 + 52 * s,
      ex: cx0 + 119 * c, ey: cy0 + 119 * s,
      lx: cx0 + 162 * c, ly: cy0 + 162 * s,
      anchor: (c > 0.15 ? 'start' : c < -0.15 ? 'end' : 'middle') as 'start' | 'end' | 'middle',
      words: name.split(' '),
    };
  });

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
    <div className="min-h-screen pt-16 sm:pt-20 bg-white">
      {/* Hero */}
      <section className="relative flex items-center min-h-[500px] md:min-h-[580px] overflow-hidden">
        <img src="/images/pages/solutions/hero-bg.webp" alt="" className="absolute inset-0 w-full h-full object-cover object-center" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/30" />
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-[calc(2rem+45px)] py-16 md:py-20">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">Revenue Solutions</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 sm:mb-6 leading-[1.05] sm:leading-[1.0]">Complete Revenue Solutions</h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-lg mb-6 sm:mb-8">Integrated revenue operations that deliver predictable, scalable growth.</p>
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
              <Link to="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 bg-gradient-to-r from-[#1B6B3A] to-[#00A344] text-white font-semibold rounded-lg transition-all duration-300 text-base group hover:brightness-110 hover:shadow-lg"
              >
                Book Your AI ROI Assessment
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 border-2 border-white/60 text-white rounded-lg hover:border-accent hover:text-accent transition-all duration-300 font-semibold text-base group"
              >
                View Success Stories
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <div key={solution.title} className="bg-white p-6 md:p-8 lg:p-12 hover:bg-gray-50 transition-colors group">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl border-2 border-accent/20 flex items-center justify-center mb-5 md:mb-6 group-hover:border-accent group-hover:bg-accent/10 group-hover:scale-105 transition-all duration-300">
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-accent group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  </div>

                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-semibold transition-colors duration-300 group-hover:text-accent/70">
                    {renderTM(solution.tagline)}
                  </div>

                  <h3 className="text-xl md:text-2xl font-black text-primary mb-3 transition-colors duration-300 group-hover:text-accent">{solution.title}</h3>

                  <p className="text-muted-foreground mb-5 md:mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  <ul className="space-y-2 mb-6 md:mb-8">
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

      {/* Six Pillars */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">What We Deliver</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-3">
              Six pillars of <span className="text-accent">AI that pays off</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              It all starts with capacity. AI Embodiment™ by Engage3P reads it first, before a single tool goes live.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {[
              {
                icon: ShieldCheck,
                title: 'Security & compliance',
                desc: 'AI adopted the right way, without new legal or data exposure.',
              },
              {
                icon: Zap,
                title: 'Tactical solutions',
                desc: 'Deployable systems, not a strategy deck that sits on a shelf.',
              },
              {
                icon: Layers,
                title: 'Pre-integrated tools',
                desc: 'A vetted partner stack, not a build-it-yourself science project.',
              },
              {
                icon: Package,
                title: 'Affordable, turn-key',
                desc: 'Built for the owner-operator to oversee, not to run day-to-day.',
              },
              {
                icon: Brain,
                title: 'Our AI Officer available to you',
                desc: 'Fractional AI leadership. No internal AI team required.',
                highlight: true,
              },
              {
                icon: TrendingUp,
                title: 'Proven ROI, fast',
                desc: 'Results that are provable and legible. Never a black box.',
              },
            ].map(({ icon: Icon, title, desc, highlight }) => (
              <div key={title} className={`group p-6 md:p-8 lg:p-10 hover:shadow-md transition-all duration-300 ${highlight ? 'bg-primary' : 'bg-white'}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${highlight ? 'bg-accent/20 border border-accent/40' : 'bg-accent/10 border border-accent/20 group-hover:bg-accent/20 group-hover:border-accent/40 transition-colors duration-300'}`}>
                  <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className={`text-lg font-black mb-3 transition-colors duration-300 ${highlight ? 'text-white group-hover:text-accent' : 'text-primary group-hover:text-accent'}`}>{title}</h3>
                <p className={`text-sm leading-relaxed ${highlight ? 'text-white/70' : 'text-muted-foreground'}`}>{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-base font-semibold text-primary/70 mt-8 italic">
            None of these pillars pay off unless the change is <span className="text-accent not-italic font-black">embodied, not just embedded.</span>
          </p>
        </div>
      </section>

      {/* AI Revenue Life Cycle */}
      <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-primary overflow-hidden">
        <TronRoadBg />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">Partner Ecosystem</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3">
              The AI Revenue <span className="text-accent">Life Cycle</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              A system, not tools or people: one wheel, nine partners, one road to revenue.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Wheel SVG — desktop only */}
            <div className="hidden lg:block">
              <svg viewBox="0 0 440 440" className="w-full mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* orbit ring */}
                <circle cx="220" cy="220" r="135" stroke="#00C853" strokeOpacity="0.18" strokeWidth="1" strokeDasharray="4 4"/>
                {/* spokes + dots + labels */}
                {wheelPartners.map(({ name, cx, cy, sx, sy, ex, ey, lx, ly, anchor, words }) => (
                  <g key={name}>
                    <line x1={sx} y1={sy} x2={ex} y2={ey} stroke="#00C853" strokeOpacity="0.3" strokeWidth="1"/>
                    <circle cx={cx} cy={cy} r="15" fill="#0B2A1C" stroke="#00C853" strokeOpacity="0.55" strokeWidth="1.5"/>
                    <text textAnchor={anchor} fontSize="10" fill="white" fillOpacity="0.7" fontWeight="600">
                      {words.length === 1 ? (
                        <tspan x={lx} y={ly}>{words[0]}</tspan>
                      ) : (
                        <>
                          <tspan x={lx} y={ly} dy="-6">{words.slice(0, Math.ceil(words.length / 2)).join(' ')}</tspan>
                          <tspan x={lx} dy="14">{words.slice(Math.ceil(words.length / 2)).join(' ')}</tspan>
                        </>
                      )}
                    </text>
                  </g>
                ))}
                {/* center */}
                <circle cx="220" cy="220" r="50" fill="#0B1F35" stroke="#00C853" strokeOpacity="0.7" strokeWidth="2"/>
                <text x="220" y="212" textAnchor="middle" fontSize="9" fontWeight="900" fill="#00C853">1SagePros</text>
                <text x="220" y="228" textAnchor="middle" fontSize="9" fontWeight="900" fill="#00C853">.AI</text>
              </svg>
            </div>

            {/* Right — stages + why */}
            <div className="space-y-6 md:space-y-8">
              {[
                { stage: '1', label: 'Initial Traction', value: '$', desc: 'Aligned ICP targeting and AI-powered demand generation activate the first revenue signal.' },
                { stage: '2', label: 'Increase Velocity', value: '$$ → $$$', desc: 'Demand generation and sales acceleration compound — pipeline grows faster than headcount.' },
                { stage: '3', label: 'Sustainable Revenues', value: '$$$ → $$$$', desc: 'Full rollout, continuous performance tuning, and AI that keeps the engine running.' },
              ].map(({ stage, label, value, desc }) => (
                <div key={stage} className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center shrink-0">
                    <span className="text-sm font-black text-accent">{stage}</span>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-3 mb-1">
                      <h3 className="text-lg font-black text-white">{label}</h3>
                      <span className="text-accent font-black text-sm">{value}</span>
                    </div>
                    <p className="text-sm text-white/65 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}

              <div className="border-t border-white/15 pt-6 md:pt-8">
                <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">Why you should care</p>
                <ul className="space-y-2">
                  {['Time to market accelerates', 'Brand awareness increases', 'Competitive edge increases', 'Net-new logos come inbound'].map(item => (
                    <li key={item} className="flex gap-3 text-sm text-white/75">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" strokeWidth={2}/>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile: partner chips */}
              <div className="lg:hidden border-t border-white/15 pt-6">
                <p className="text-xs uppercase tracking-widest text-white/50 mb-4 font-semibold">The Partner Wheel</p>
                <div className="flex flex-wrap gap-2">
                  {['Venture Capital','Empower AI 365','Engage3P','Brand Iron','Boxsy Fund Tracking','Bellwether Intel','Outreap','AIO','Biz Konnect'].map(p => (
                    <span key={p} className="px-3 py-1.5 bg-white/10 border border-white/20 text-xs text-white/70 font-semibold">{p}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Ways to Engage */}
      <section
        className="relative py-12 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: "url('/images/brand/leaves-bg.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">How We Work Together</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3">
              Three Ways to <span className="text-accent">Engage</span>
            </h2>
            <p className="text-lg text-white/70">Every engagement begins with an AI Vibe Check. Then pick the way you want to work with us.</p>
          </div>

          {/* Engagement tier cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                tier: 'Advisory',
                pricing: 'Fixed Fee',
                icon: Target,
                items: ['RevenueStorm™', 'AI Embodiment™ by Engage3P', 'Product roadmap', 'Mergers & acquisitions', 'Exit strategy & brokerage'],
              },
              {
                tier: 'Consulting',
                pricing: 'Rack Rate $350/hr',
                icon: Lightbulb,
                items: ['GTM & ICP strategy', 'SEO, AEO & GEO', 'Brand development', 'Outbound campaigns', 'Demand generation', 'AI integration & workflow mapping'],
              },
              {
                tier: 'Execution',
                pricing: '100% Performance-Based',
                icon: Zap,
                items: ['Fractional CRO/CMO', 'Fractional Chief AI Officer', 'Sales Development Rep (SDR)', 'Enterprise AE', 'Managed AI stack'],
              },
            ].map(({ tier, pricing, icon: Icon, items }) => (
              <div
                key={tier}
                className="flex flex-col bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-accent/25 border border-accent/40 flex items-center justify-center mb-4 md:mb-5">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-black text-white mb-1">{tier}</h3>
                <p className="text-sm text-accent font-semibold mb-5">{pricing}</p>
                <ul className="space-y-2 flex-1">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <span>{renderTM(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 relative" style={{ backgroundImage: "url('/images/brand/wave-bg.webp')", backgroundSize: "100% 100%", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundColor: "#ffffff" }}>
        <div className="absolute inset-0 bg-white/80" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">
            Get Started
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-3">
            Ready to <span className="text-accent">Transform Your Revenue?</span>
          </h2>

          <p className="text-lg mb-8 md:mb-10 text-primary/70">
            Get started with an AI Vibe Check — no commitment required
          </p>
          <Link to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#1B6B3A] to-[#00A344] text-white font-semibold rounded-lg transition-all duration-300 text-base hover:brightness-110 hover:shadow-lg group"
          >
            Book Your AI ROI Assessment
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  );
}
