import { Link } from 'react-router';
import { ArrowRight, CheckCircle2, Zap, BarChart3, Shield, Package } from 'lucide-react';
import wavePattern from '../../imports/Sage wavy background more solid.png';
import { Button } from '../components/Button';

export function Offerings() {
  const offerings = [
    {
      name: 'Bellwether Intel',
      icon: BarChart3,
      tagline: 'Your top-of-funnel signal engine and content creator.',
      description:
        'Bellwether Intel drives market demand and builds brand awareness through AI-powered content generation, market intelligence, and always-on top-of-funnel activity — giving your brand the presence and signal it needs to pull buyers into your pipeline before competitors do.',
      capabilities: [
        'AI-driven content creation at scale',
        'Market demand and buyer signal monitoring',
        'Brand awareness and thought leadership',
        'SEO-optimized content distribution',
        'Competitive intelligence and positioning',
        'Campaign performance analytics',
      ],
      color: 'border-accent',
      badge: 'Demand Generation',
    },
    {
      name: 'Expower AI 365',
      icon: Zap,
      tagline: 'SMB funnel and pipeline management — running always-on.',
      description:
        'Expower AI 365 is an always-on revenue engine built specifically for established SMBs. It manages your full funnel and pipeline with AI automation, keeping leads moving, follow-ups consistent, and revenue opportunities from falling through the cracks — 365 days a year.',
      capabilities: [
        'Always-on lead nurturing and follow-up',
        'AI-powered pipeline management',
        'Automated outreach sequences',
        'Deal scoring and prioritization',
        'CRM integration and hygiene',
        'Pipeline health dashboards',
      ],
      color: 'border-[#2D7A4F]',
      badge: 'Pipeline Management',
    },
    {
      name: 'Aio',
      icon: Shield,
      tagline: 'AI integration, structure, guardrails, and provable ROI.',
      description:
        'Aio is the engine room behind AI that actually performs. It handles AI integration, system architecture, compliance guardrails, and ROI optimization — turning disconnected AI experiments into a structured, measurable revenue capability your leadership team can trust and your board can see.',
      capabilities: [
        'AI platform selection and integration',
        'System architecture and data structure',
        'Security, compliance, and governance guardrails',
        'ROI measurement and attribution',
        'Workflow automation and optimization',
        'Ongoing performance tuning',
      ],
      color: 'border-primary',
      badge: 'AI Infrastructure',
    },
    {
      name: 'Boxsy',
      icon: Package,
      tagline: '"COO in a box" — fundraising, outreach, and revenue in one platform.',
      description:
        'Boxsy is a COO-in-a-box platform combining a fundraising CRM, donor and investor outreach system, and a revenue pipeline tool — built for owner-operators who need enterprise-grade capability without enterprise overhead. Manage relationships, track funding, and drive outreach from one place.',
      capabilities: [
        'Fundraising CRM and relationship management',
        'Investor and donor outreach automation',
        'Revenue pipeline and deal tracking',
        'Contact database and segmentation',
        'Communication cadence management',
        'Reporting and visibility dashboards',
      ],
      color: 'border-accent',
      badge: 'Revenue Operations',
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero */}
      <section className="bg-white min-h-[50vh] flex items-center border-b border-border">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 items-stretch">
            {/* Left — text */}
            <div className="flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 pl-[calc(1rem+45px)] sm:pl-[calc(1.5rem+45px)] lg:pl-[calc(2rem+45px)]">
              <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">AI Revenue Platforms</p>
              <h1 className="text-5xl md:text-6xl font-black text-primary mb-6 leading-tight">Our Offerings</h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Four pre-integrated AI platforms — selected, configured, and managed by SAGE — so you get proven tools working from day one, not a build-it-yourself science project.
              </p>
            </div>
            {/* Right — platform grid visual */}
            <div className="hidden lg:flex items-center justify-center bg-white lg:min-h-[60vh] px-8 py-8">
              <div className="w-full">
                <p className="text-[11px] font-bold uppercase tracking-widest text-primary/50 mb-5">Platform Coverage</p>
                <svg viewBox="0 0 420 280" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Quadrant grid */}
                  <rect x="0"   y="0"   width="200" height="130" rx="6" fill="#0B1F35" fillOpacity="0.04" stroke="#0B1F35" strokeOpacity="0.08" strokeWidth="1"/>
                  <rect x="210" y="0"   width="210" height="130" rx="6" fill="#00C853" fillOpacity="0.06" stroke="#00C853" strokeOpacity="0.2"  strokeWidth="1"/>
                  <rect x="0"   y="140" width="200" height="130" rx="6" fill="#0B1F35" fillOpacity="0.04" stroke="#0B1F35" strokeOpacity="0.08" strokeWidth="1"/>
                  <rect x="210" y="140" width="210" height="130" rx="6" fill="#0B1F35" fillOpacity="0.04" stroke="#0B1F35" strokeOpacity="0.08" strokeWidth="1"/>
                  {/* Labels */}
                  <text x="100" y="30"  textAnchor="middle" fontSize="11" fontWeight="700" fill="#0B1F35" fillOpacity="0.5">Bellwether Intel</text>
                  <text x="100" y="46"  textAnchor="middle" fontSize="10" fill="#0B1F35" fillOpacity="0.35">Demand Generation</text>
                  <text x="315" y="30"  textAnchor="middle" fontSize="11" fontWeight="700" fill="#00C853">Expower AI 365</text>
                  <text x="315" y="46"  textAnchor="middle" fontSize="10" fill="#0B1F35" fillOpacity="0.35">Pipeline Management</text>
                  <text x="100" y="170" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0B1F35" fillOpacity="0.5">Aio</text>
                  <text x="100" y="186" textAnchor="middle" fontSize="10" fill="#0B1F35" fillOpacity="0.35">AI Infrastructure</text>
                  <text x="315" y="170" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0B1F35" fillOpacity="0.5">Boxsy</text>
                  <text x="315" y="186" textAnchor="middle" fontSize="10" fill="#0B1F35" fillOpacity="0.35">Revenue Operations</text>
                  {/* Icons (simple shapes) */}
                  <rect x="80"  y="60"  width="40" height="40" rx="8" fill="#0B1F35" fillOpacity="0.08"/>
                  <rect x="295" y="60"  width="40" height="40" rx="8" fill="#00C853" fillOpacity="0.2"/>
                  <rect x="80"  y="200" width="40" height="40" rx="8" fill="#0B1F35" fillOpacity="0.08"/>
                  <rect x="295" y="200" width="40" height="40" rx="8" fill="#0B1F35" fillOpacity="0.08"/>
                  {/* Center connectors */}
                  <line x1="200" y1="65"  x2="210" y2="65"  stroke="#0B1F35" strokeOpacity="0.1" strokeWidth="1.5" strokeDasharray="3 2"/>
                  <line x1="200" y1="205" x2="210" y2="205" stroke="#0B1F35" strokeOpacity="0.1" strokeWidth="1.5" strokeDasharray="3 2"/>
                  <line x1="100" y1="130" x2="100" y2="140" stroke="#0B1F35" strokeOpacity="0.1" strokeWidth="1.5" strokeDasharray="3 2"/>
                  <line x1="315" y1="130" x2="315" y2="140" stroke="#00C853" strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="3 2"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro strip */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#E8F5EE] border-b border-border">
        <div className="max-w-7xl mx-auto pl-4 text-center">
          <p className="text-lg text-primary font-semibold max-w-3xl mx-auto">
            We did the hard work of selecting cost-effective, pre-integrated AI platforms that drive revenue quickly — then we deploy and manage them as part of your system, not handed off as a DIY project.
          </p>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto pl-4 space-y-24">
          {offerings.map((offering, index) => {
            const Icon = offering.icon;
            const isEven = index % 2 === 0;
            return (
              <div key={offering.name} className={`grid lg:grid-cols-2 gap-16 items-start ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                {/* Text side */}
                <div className={isEven ? '' : 'lg:col-start-2'}>
                  <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 mb-5">
                    {offering.badge}
                  </span>
                  <div className="flex items-center gap-4 mb-4">
                    <Icon className="w-10 h-10 text-accent" strokeWidth={1.5} />
                    <h2 className="text-4xl font-black text-primary">{offering.name}</h2>
                  </div>
                  <p className="text-xl font-semibold text-primary/70 mb-5 italic">{offering.tagline}</p>
                  <p className="text-muted-foreground leading-relaxed mb-8">{offering.description}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {offering.capabilities.map((cap) => (
                      <div key={cap} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual side */}
                <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                  <div className={`rounded-2xl border-2 ${offering.color} bg-gray-50 p-12 flex flex-col items-center justify-center min-h-[280px]`}>
                    <Icon className="w-24 h-24 text-accent/20 mb-6" strokeWidth={1} />
                    <p className="text-3xl font-black text-primary text-center">{offering.name}</p>
                    <p className="text-sm text-muted-foreground text-center mt-2">{offering.badge}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How we deploy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-border">
        <div className="max-w-7xl mx-auto pl-4 text-center">
          <p className="text-sm uppercase tracking-wider text-accent mb-4 font-semibold">How It Works</p>
          <h2 className="text-3xl font-black text-primary mb-3">We Evaluate. We Deploy. We Manage.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Every platform goes through a structured demonstration and fit assessment before deployment — so you see exactly what it does for your business before it goes live.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'RevenueStorm™ Assessment', desc: 'We map your current systems, goals, and gaps to identify which platforms will move the needle fastest.' },
              { step: '02', title: 'Showcase Demo', desc: 'We run a customised demo for your team — showing exactly how each platform performs in your context.' },
              { step: '03', title: 'Managed Deployment', desc: 'SAGE deploys, integrates, and manages the platform alongside your team. No DIY. No guesswork.' },
            ].map((s) => (
              <div key={s.step} className="bg-white p-8 border-l-4 border-accent text-left">
                <div className="text-4xl font-black text-primary/20 mb-3">{s.step}</div>
                <h3 className="text-lg font-bold text-primary mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8 relative"
        style={{
          backgroundImage: `url(${wavePattern})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#ffffff',
        }}
      >
        <div className="absolute inset-0 bg-white/80" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="text-sm uppercase tracking-wider text-accent mb-4 font-semibold">
            Get Started
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-3">
            See What AI Can <span className="text-accent">Actually Do for Your Revenue</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Book a complimentary AI ROI Assessment and we'll show you exactly which platforms fit your business — and what results to expect.
          </p>
          <Button to="/contact">
            Get Your Complimentary AI ROI Assessment
          </Button>
        </div>
      </section>
    </div>
  );
}
