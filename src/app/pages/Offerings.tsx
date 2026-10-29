import { Link } from 'react-router';
import { ArrowRight, CheckCircle2, Megaphone, Briefcase, Workflow, Cpu } from 'lucide-react';
import { Button } from '../components/Button';
import { renderTM } from '../components/RevenueStorm';

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
      name: 'Boxsy Fund Tracking',
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
      <section className="relative flex items-center min-h-[500px] md:min-h-[580px] overflow-hidden">
        <img src="/images/pages/offerings/hero/hero-bg.webp" alt="" className="absolute inset-0 w-full h-full object-cover object-center" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/30" />
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-[calc(2rem+45px)] py-16 md:py-20">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">AI Revenue Platforms</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 sm:mb-6 leading-[1.05] sm:leading-[1.0]">Our Offerings</h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-lg">
              Four pre-integrated AI platforms, selected, configured, and managed by SAGE, so you get proven tools driving revenue from day one, not a build-it-yourself science project.
            </p>
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
                  <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 rounded mb-5 hover:bg-accent/20 transition-colors duration-200">
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
                <div className={`flex items-center ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                  <div className="w-full rounded-2xl border-2 border-accent overflow-hidden shadow-lg">
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
        style={{ backgroundImage: "url('/images/brand/wave-bg.webp')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: '#ffffff' }}
      >
        <div className="absolute inset-0 bg-white/80" />
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
