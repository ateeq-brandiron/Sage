import { Link } from 'react-router';
import { ArrowRight, CheckCircle2, Megaphone, Briefcase, Workflow, Cpu } from 'lucide-react';
import wavePattern from '../../assets/brand/wave-bg.png';
import vectorPattern from '../../assets/brand/vector-pattern.png';
import { Button } from '../components/Button';
import { renderTM } from '../components/RevenueStorm';
import bellwetherScreenshot from '../../assets/pages/offerings/bellwether/screenshot-1.jpg';
import boxsyScreenshot from '../../assets/pages/offerings/boxsy/screenshot-control-center.png';

export function Offerings() {
  const offerings = [
    {
      name: 'Bellwether Intel',
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
      image: bellwetherScreenshot,
      imageAlt: 'Bellwether Intel Opening Bell dashboard showing market signals, sentiment score, and immediate actions',
      icon: Megaphone,
      badge: 'Demand Generation',
    },
    {
      name: 'Boxsy',
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
      image: boxsyScreenshot,
      imageAlt: 'Boxsy Control Center operating dashboard showing revenue, ARR, cash on hand, and runway metrics',
      icon: Briefcase,
      badge: 'Revenue Operations',
    },
    {
      name: 'Empower AI 365',
      tagline: 'SMB funnel and pipeline management, running always-on.',
      description:
        'Empower AI 365 is an always-on revenue engine built specifically for established SMBs. It manages your full funnel and pipeline with AI automation, keeping leads moving, follow-ups consistent, and revenue opportunities from falling through the cracks, 365 days a year.',
      capabilities: [
        'Always-on lead nurturing and follow-up',
        'AI-powered pipeline management',
        'Automated outreach sequences',
        'Deal scoring and prioritization',
        'CRM integration and hygiene',
        'Pipeline health dashboards',
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=90',
      imageAlt: 'Sales pipeline analytics and automated outreach dashboard',
      icon: Workflow,
      badge: 'Pipeline Management',
    },
    {
      name: 'AIO Advisors',
      tagline: 'AI integration, structure, guardrails, and provable ROI.',
      description:
        'AIO Advisors is the engine room behind AI that actually performs. It handles AI integration, system architecture, compliance guardrails, and ROI optimization, turning disconnected AI experiments into a structured, measurable revenue capability your leadership team can trust and your board can see.',
      capabilities: [
        'AI platform selection and integration',
        'System architecture and data structure',
        'Security, compliance, and governance guardrails',
        'ROI measurement and attribution',
        'Workflow automation and optimization',
        'Ongoing performance tuning',
      ],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=90',
      imageAlt: 'AI system architecture and circuit-level integration infrastructure',
      icon: Cpu,
      badge: 'AI Infrastructure',
    },
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-20 bg-white">
      {/* Hero */}
      <section className="bg-white flex items-center border-b border-border">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 items-stretch">
            {/* Left — text */}
            <div className="flex flex-col justify-center py-10 md:py-12 px-4 sm:px-6 lg:pl-[calc(2rem+45px)]">
              <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">AI Revenue Platforms</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-5 sm:mb-6 leading-[1.05] sm:leading-[1.0]">Our Offerings</h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Four pre-integrated AI platforms, selected, configured, and managed by SAGE, so you get proven tools driving revenue from day one, not a build-it-yourself science project.
              </p>
            </div>
            {/* Right — platform quadrant chart */}
            <div className="hidden lg:flex items-center justify-center bg-white px-4 py-4">
              <div className="w-full">
                <p className="text-[11px] font-bold uppercase tracking-widest text-primary/50 mb-5">Platform Coverage</p>
                <svg viewBox="0 0 420 280" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0"   y="0"   width="198" height="128" rx="6" fill="#00C853" fillOpacity="0.06" stroke="#00C853" strokeOpacity="0.2"  strokeWidth="1"/>
                  <rect x="208" y="0"   width="212" height="128" rx="6" fill="#00C853" fillOpacity="0.06" stroke="#00C853" strokeOpacity="0.2"  strokeWidth="1"/>
                  <rect x="0"   y="138" width="198" height="130" rx="6" fill="#00C853" fillOpacity="0.06" stroke="#00C853" strokeOpacity="0.2"  strokeWidth="1"/>
                  <rect x="208" y="138" width="212" height="130" rx="6" fill="#00C853" fillOpacity="0.06" stroke="#00C853" strokeOpacity="0.2"  strokeWidth="1"/>
                  <text x="99"  y="26"  textAnchor="middle" fontSize="12" fontWeight="700" fill="#00C853">Bellwether Intel</text>
                  <text x="99"  y="42"  textAnchor="middle" fontSize="10" fill="#0B1F35" fillOpacity="0.45">Demand Generation</text>
                  <text x="314" y="26"  textAnchor="middle" fontSize="12" fontWeight="700" fill="#00C853">Boxsy</text>
                  <text x="314" y="42"  textAnchor="middle" fontSize="10" fill="#0B1F35" fillOpacity="0.45">Revenue Operations</text>
                  <text x="99"  y="164" textAnchor="middle" fontSize="12" fontWeight="700" fill="#00C853">Empower AI 365</text>
                  <text x="99"  y="180" textAnchor="middle" fontSize="10" fill="#0B1F35" fillOpacity="0.45">Pipeline Management</text>
                  <text x="314" y="164" textAnchor="middle" fontSize="12" fontWeight="700" fill="#00C853">AIO Advisors</text>
                  <text x="314" y="180" textAnchor="middle" fontSize="10" fill="#0B1F35" fillOpacity="0.45">AI Infrastructure</text>
                  <rect x="74"  y="56"  width="50" height="50" rx="10" fill="#00C853" fillOpacity="0.18"/>
                  <rect x="289" y="56"  width="50" height="50" rx="10" fill="#00C853" fillOpacity="0.18"/>
                  <rect x="74"  y="194" width="50" height="50" rx="10" fill="#00C853" fillOpacity="0.18"/>
                  <rect x="289" y="194" width="50" height="50" rx="10" fill="#00C853" fillOpacity="0.18"/>
                  {/* Bellwether — Megaphone */}
                  <g transform="translate(87,69)">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="#00C853" fillOpacity="0.25" stroke="#00C853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.5 8.5 A5 5 0 0 1 15.5 15.5" stroke="#00C853" strokeOpacity="0.85" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                    <path d="M18.5 5.5 A9 9 0 0 1 18.5 18.5" stroke="#00C853" strokeOpacity="0.4" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  </g>
                  {/* Boxsy — Briefcase */}
                  <g transform="translate(302,69)">
                    <rect x="2" y="8" width="20" height="12" rx="2" fill="#00C853" fillOpacity="0.2" stroke="#00C853" strokeWidth="1.5"/>
                    <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="#00C853" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                    <line x1="2" y1="14" x2="22" y2="14" stroke="#00C853" strokeOpacity="0.5" strokeWidth="1.5"/>
                  </g>
                  {/* Empower AI 365 — Workflow nodes */}
                  <g transform="translate(87,207)">
                    <rect x="2" y="2" width="7" height="7" rx="1" fill="#00C853" fillOpacity="0.2" stroke="#00C853" strokeWidth="1.5"/>
                    <rect x="15" y="9" width="7" height="7" rx="1" fill="#00C853" fillOpacity="0.2" stroke="#00C853" strokeWidth="1.5"/>
                    <rect x="2" y="16" width="7" height="7" rx="1" fill="#00C853" fillOpacity="0.2" stroke="#00C853" strokeWidth="1.5"/>
                    <path d="M9 5.5h4c1.7 0 3 1.3 3 3V9" stroke="#00C853" strokeOpacity="0.6" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 16v1c0 1.7-1.3 3-3 3H9" stroke="#00C853" strokeOpacity="0.6" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  {/* AIO Advisors — CPU chip */}
                  <g transform="translate(302,207)">
                    <rect x="6" y="6" width="12" height="12" rx="2" fill="#00C853" fillOpacity="0.2" stroke="#00C853" strokeWidth="1.5"/>
                    <rect x="9" y="9" width="6" height="6" rx="1" fill="#00C853" fillOpacity="0.4" stroke="#00C853" strokeWidth="1"/>
                    <path d="M9 6V3M12 6V3M15 6V3" stroke="#00C853" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M9 21v-3M12 21v-3M15 21v-3" stroke="#00C853" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M3 9h3M3 12h3M3 15h3" stroke="#00C853" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M18 9h3M18 12h3M18 15h3" stroke="#00C853" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round"/>
                  </g>
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
      <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-[#E8F5EE] border-b border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg text-primary font-semibold max-w-3xl mx-auto">
            We evaluate the technology, build a showcase demo for your team, then deploy and manage it as part of your revenue system, not handed off as a DIY project.
          </p>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
          {offerings.map((offering, index) => {
            const isEven = index % 2 === 0;
            const Icon = offering.icon;
            return (
              <div key={offering.name} className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                {/* Text side */}
                <div className={isEven ? '' : 'lg:col-start-2'}>
                  <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 mb-5 hover:bg-accent/20 transition-colors duration-200">
                    {offering.badge}
                  </span>
                  <div className="flex items-center gap-4 mb-4">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-accent" strokeWidth={1.5} />
                    <h2 className="text-3xl md:text-4xl font-black text-primary">{offering.name}</h2>
                  </div>
                  <p className="text-lg font-semibold text-primary/70 mb-4 md:mb-5 italic">{offering.tagline}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6 md:mb-8">{offering.description}</p>
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
                      className="w-full aspect-video object-cover object-left-top"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How we deploy */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">How It Works</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-3">We Evaluate. We Deploy. We Manage.</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every platform goes through a structured fit assessment before deployment, so you see exactly what it does for your business before it goes live.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-px bg-border">
            {[
              { step: '01', title: 'RevenueStorm™ Assessment', desc: 'We map your current systems, goals, and gaps to identify which platforms will move the needle fastest.' },
              { step: '02', title: 'Showcase Demo', desc: 'We run a customised demo for your team, showing exactly how each platform performs in your context, not a generic sales pitch.' },
              { step: '03', title: 'Managed Deployment', desc: 'SAGE deploys, integrates, and manages the platform alongside your team. No DIY. No guesswork. No ramp-up time wasted.' },
            ].map((s) => (
              <div key={s.step} className="bg-white p-6 md:p-8 group hover:shadow-md transition-all duration-300">
                <div className="text-5xl font-black text-primary/20 mb-4 group-hover:text-accent/60 transition-colors duration-300">{s.step}</div>
                <h3 className="text-lg font-bold text-primary mb-2">{renderTM(s.title)}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 relative"
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
          <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">
            Get Started
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-3">
            See What AI Can <span className="text-accent">Actually Do for Your Revenue</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 md:mb-10">
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
