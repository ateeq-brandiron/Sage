import { Link } from 'react-router';
import { ArrowRight, CheckCircle2, Zap, BarChart3, Shield, Package } from 'lucide-react';
import wavePattern from '../../assets/brand/wave-bg.png';
import vectorPattern from '../../assets/brand/vector-pattern.png';
import { Button } from '../components/Button';

export function Offerings() {
  const offerings = [
    {
      name: 'Bellwether Intel',
      icon: BarChart3,
      tagline: 'Your top-of-funnel signal engine and content creator.',
      description:
        'Bellwether Intel drives market demand and builds brand awareness through AI-powered content generation, market intelligence, and always-on top-of-funnel activity, giving your brand the presence and signal it needs to pull buyers into your pipeline before competitors do.',
      capabilities: [
        'AI-driven content creation at scale',
        'Market demand and buyer signal monitoring',
        'Brand awareness and thought leadership',
        'SEO-optimized content distribution',
        'Competitive intelligence and positioning',
        'Campaign performance analytics',
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      imageAlt: 'Data analytics dashboard showing market intelligence',
      badge: 'Demand Generation',
    },
    {
      name: 'Expower AI 365',
      icon: Zap,
      tagline: 'SMB funnel and pipeline management, running always-on.',
      description:
        'Expower AI 365 is an always-on revenue engine built specifically for established SMBs. It manages your full funnel and pipeline with AI automation, keeping leads moving, follow-ups consistent, and revenue opportunities from falling through the cracks, 365 days a year.',
      capabilities: [
        'Always-on lead nurturing and follow-up',
        'AI-powered pipeline management',
        'Automated outreach sequences',
        'Deal scoring and prioritization',
        'CRM integration and hygiene',
        'Pipeline health dashboards',
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      imageAlt: 'Sales pipeline and funnel analytics',
      badge: 'Pipeline Management',
    },
    {
      name: 'Aio',
      icon: Shield,
      tagline: 'AI integration, structure, guardrails, and provable ROI.',
      description:
        'Aio is the engine room behind AI that actually performs. It handles AI integration, system architecture, compliance guardrails, and ROI optimization, turning disconnected AI experiments into a structured, measurable revenue capability your leadership team can trust and your board can see.',
      capabilities: [
        'AI platform selection and integration',
        'System architecture and data structure',
        'Security, compliance, and governance guardrails',
        'ROI measurement and attribution',
        'Workflow automation and optimization',
        'Ongoing performance tuning',
      ],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
      imageAlt: 'AI system architecture and technology integration',
      badge: 'AI Infrastructure',
    },
    {
      name: 'Boxsy',
      icon: Package,
      tagline: '"COO in a box": fundraising, outreach, and revenue in one platform.',
      description:
        'Boxsy is a COO-in-a-box platform combining a fundraising CRM, investor and donor outreach system, and a revenue pipeline tool, built for owner-operators who need enterprise-grade capability without enterprise overhead. Manage relationships, track funding, and drive outreach from one place.',
      capabilities: [
        'Fundraising CRM and relationship management',
        'Investor and donor outreach automation',
        'Revenue pipeline and deal tracking',
        'Contact database and segmentation',
        'Communication cadence management',
        'Reporting and visibility dashboards',
      ],
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80',
      imageAlt: 'Executive team reviewing revenue and operations dashboard',
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
                Four pre-integrated AI platforms, selected, configured, and managed by SAGE, so you get proven tools driving revenue from day one, not a build-it-yourself science project.
              </p>
            </div>
            {/* Right — platform quadrant chart */}
            <div className="hidden lg:flex items-center justify-center bg-white lg:min-h-[60vh] px-8 py-8">
              <div className="w-full">
                <p className="text-[11px] font-bold uppercase tracking-widest text-primary/50 mb-5">Platform Coverage</p>
                <svg viewBox="0 0 420 280" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Quadrant grid */}
                  <rect x="0"   y="0"   width="198" height="128" rx="6" fill="#0B1F35" fillOpacity="0.04" stroke="#0B1F35" strokeOpacity="0.08" strokeWidth="1"/>
                  <rect x="208" y="0"   width="212" height="128" rx="6" fill="#00C853" fillOpacity="0.06" stroke="#00C853" strokeOpacity="0.2"  strokeWidth="1"/>
                  <rect x="0"   y="138" width="198" height="130" rx="6" fill="#0B1F35" fillOpacity="0.04" stroke="#0B1F35" strokeOpacity="0.08" strokeWidth="1"/>
                  <rect x="208" y="138" width="212" height="130" rx="6" fill="#0B1F35" fillOpacity="0.04" stroke="#0B1F35" strokeOpacity="0.08" strokeWidth="1"/>
                  {/* Labels */}
                  <text x="99"  y="26"  textAnchor="middle" fontSize="12" fontWeight="700" fill="#0B1F35" fillOpacity="0.6">Bellwether Intel</text>
                  <text x="99"  y="42"  textAnchor="middle" fontSize="10" fill="#0B1F35" fillOpacity="0.35">Demand Generation</text>
                  <text x="314" y="26"  textAnchor="middle" fontSize="12" fontWeight="700" fill="#00C853">Expower AI 365</text>
                  <text x="314" y="42"  textAnchor="middle" fontSize="10" fill="#0B1F35" fillOpacity="0.35">Pipeline Management</text>
                  <text x="99"  y="164" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0B1F35" fillOpacity="0.6">Aio</text>
                  <text x="99"  y="180" textAnchor="middle" fontSize="10" fill="#0B1F35" fillOpacity="0.35">AI Infrastructure</text>
                  <text x="314" y="164" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0B1F35" fillOpacity="0.6">Boxsy</text>
                  <text x="314" y="180" textAnchor="middle" fontSize="10" fill="#0B1F35" fillOpacity="0.35">Revenue Operations</text>
                  {/* Icon boxes */}
                  <rect x="74"  y="56"  width="50" height="50" rx="10" fill="#0B1F35" fillOpacity="0.07"/>
                  <rect x="289" y="56"  width="50" height="50" rx="10" fill="#00C853" fillOpacity="0.18"/>
                  <rect x="74"  y="194" width="50" height="50" rx="10" fill="#0B1F35" fillOpacity="0.07"/>
                  <rect x="289" y="194" width="50" height="50" rx="10" fill="#0B1F35" fillOpacity="0.07"/>
                  {/* Connector dashes */}
                  <line x1="198" y1="64"  x2="208" y2="64"  stroke="#0B1F35" strokeOpacity="0.12" strokeWidth="1.5" strokeDasharray="3 2"/>
                  <line x1="198" y1="202" x2="208" y2="202" stroke="#0B1F35" strokeOpacity="0.12" strokeWidth="1.5" strokeDasharray="3 2"/>
                  <line x1="99"  y1="128" x2="99"  y2="138" stroke="#0B1F35" strokeOpacity="0.12" strokeWidth="1.5" strokeDasharray="3 2"/>
                  <line x1="314" y1="128" x2="314" y2="138" stroke="#00C853" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="3 2"/>
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
            We evaluate the technology, build a showcase demo for your team, then deploy and manage it as part of your revenue system, not handed off as a DIY project.
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
              <div key={offering.name} className={`grid lg:grid-cols-2 gap-16 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                {/* Text side */}
                <div className={isEven ? '' : 'lg:col-start-2'}>
                  <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 mb-5 hover:bg-accent/20 transition-colors duration-200">
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
                      <div key={cap} className="flex items-start gap-3 group/item">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300" />
                        <span className="text-sm text-foreground group-hover/item:text-accent transition-colors duration-300">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image side */}
                <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                  <div className="rounded-2xl border-2 border-accent overflow-hidden shadow-lg">
                    <img
                      src={offering.image}
                      alt={offering.imageAlt}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How we deploy — stats strip */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-border">
        <div className="max-w-7xl mx-auto pl-4">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-accent mb-4 font-semibold">How It Works</p>
            <h2 className="text-3xl font-black text-primary mb-3">We Evaluate. We Deploy. We Manage.</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every platform goes through a structured fit assessment before deployment, so you see exactly what it does for your business before it goes live.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              { step: '01', title: 'RevenueStorm™ Assessment', desc: 'We map your current systems, goals, and gaps to identify which platforms will move the needle fastest.' },
              { step: '02', title: 'Showcase Demo', desc: 'We run a customised demo for your team, showing exactly how each platform performs in your context, not a generic sales pitch.' },
              { step: '03', title: 'Managed Deployment', desc: 'SAGE deploys, integrates, and manages the platform alongside your team. No DIY. No guesswork. No ramp-up time wasted.' },
            ].map((s) => (
              <div key={s.step} className="bg-white p-8 group hover:shadow-md transition-all duration-300">
                <div className="text-5xl font-black text-primary/20 mb-4 group-hover:text-accent/60 transition-colors duration-300">{s.step}</div>
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
        <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
          <img src={vectorPattern} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="text-sm uppercase tracking-wider text-accent mb-4 font-semibold">
            Get Started
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-3">
            See What AI Can <span className="text-accent">Actually Do for Your Revenue</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Book a complimentary AI ROI Assessment. We'll show you exactly which platforms fit your business and what results to expect.
          </p>
          <Button to="/contact">
            Get Your Complimentary AI ROI Assessment
          </Button>
        </div>
      </section>
    </div>
  );
}
