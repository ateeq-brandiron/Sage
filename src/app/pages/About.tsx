import { Link } from 'react-router';
import wavePattern from '../../assets/brand/wave-bg.png';
import aboutBg from '../../assets/pages/about-bg.png';
import sageLogo from '../../assets/brand/logo-green-bg.png';
import { Target, CheckCircle2, TrendingUp, Users, Award, ArrowRight, BarChart3, Handshake, Lightbulb, ShieldCheck, CalendarClock, Building2 } from 'lucide-react';
import vectorPattern from '../../assets/brand/vector-pattern.png';
import mitchellImg from '../../assets/team/mitchell-chi.svg';
import michaelImg from '../../assets/team/michael-doyle.png';
import nickImg from '../../assets/team/nick-bahr.jpg';
import sheraImg from '../../assets/team/shera-haliczer.jpg';
import benImg from '../../assets/team/ben-amiwero.jpg';
import { Button } from '../components/Button';


export function About() {
  const values = [
    { icon: BarChart3, title: 'Results', description: 'We measure success by revenue impact, not deliverables' },
    { icon: ShieldCheck, title: 'Accountability', description: 'Shared accountability through performance-based models' },
    { icon: Handshake, title: 'Partnership', description: 'We work as an extension of your team' },
    { icon: Lightbulb, title: 'Innovation', description: 'Continuous evolution based on what drives growth' },
    { icon: CheckCircle2, title: 'Integrity', description: 'We tell you what you need to hear' },
  ];

  const leaders = [
    {
      name: 'Mitchell Chi',
      photo: mitchellImg,
      role: 'CEO & Co-Founder',
      bio: 'For 31 years Mitchell has engineered high-velocity revenue machines for Fortune 500 giants and high-growth AI/ML disruptors, amassing $1.2B+ in lifetime TCV/SOWs sold across ERP, SaaS, and Cloud. His career began founding the first Apple Federal VAR in 1984. Since 2018 he has translated enterprise-grade sales methodology into high-growth frameworks for agile SMBs ready to scale, consistently ranking in the top 1% of global sales organizations.',
      certifications: ['Certified Claude AI', 'Certified Grok AI', 'Certified Gemini AI'],
      expertise: ['GTM Strategy', 'SMB Scale-Up', 'Complex Deal Orchestration', 'ERP & SaaS Leadership', 'AI/ML Platform Scaling'],
    },
    {
      name: 'Michael Doyle',
      photo: michaelImg,
      role: 'CRO & Co-Founder',
      bio: 'Michael built a Denver-based advertising agency into a multi-million dollar company and sold it to a national integrated services provider in 2000. With 25+ years of branding, marketing, and advertising experience, he has led 500+ signature BrandStorm sessions, helped companies raise more than $5B in capital, and supported 40+ acquisitions. He serves on the boards of Nuvana Resorts, The Dealmakers Conference, and Halen Technology, and facilitates several CEO peer groups.',
      certifications: [],
      expertise: ['Brand Strategy', 'Capital Raising', 'M&A Advisory', 'CEO Peer Groups', 'Revenue Leadership'],
    },
    {
      name: 'Nick Bahr',
      photo: nickImg,
      role: 'CTO, CaiO · CEO, AIO Advisors Group',
      bio: 'Nick leads AI infrastructure strategy and integration for 1SagePros.AI, ensuring every platform in the stack is selected, governed, and optimized for measurable revenue outcomes.',
      certifications: [],
      expertise: ['AI Integration', 'System Architecture', 'Compliance & Governance', 'ROI Measurement', 'Workflow Automation'],
    },
    {
      name: 'Shera Haliczer',
      photo: sheraImg,
      role: 'SVP Change Management · CEO, Engage3P',
      bio: 'Shera drives AI Embodiment™ — the human side of AI adoption. She ensures organizations don\'t just install AI tools but actually change how they work, validating behavior and tying adoption to Return on Intention™.',
      certifications: [],
      expertise: ['Change Management', 'AI Adoption', 'Organizational Design', 'Executive Coaching', 'AI Embodiment™'],
    },
    {
      name: 'Ben Amiwero',
      photo: benImg,
      role: 'SVP Outreach · CEO, Empower AI',
      bio: 'Ben runs the outreach and pipeline engine for 1SagePros.AI clients, deploying always-on lead nurturing, outbound sequences, and pipeline management through Empower AI 365.',
      certifications: [],
      expertise: ['Outbound Campaigns', 'Lead Nurturing', 'Pipeline Management', 'CRM Integration', 'Revenue Automation'],
    },
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-20 bg-white">
      {/* Hero */}
      <section className="relative flex items-center min-h-[500px] md:min-h-[580px] overflow-hidden">
        <img src={aboutBg} alt="" className="absolute inset-0 w-full h-full object-cover object-center" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/30" />
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-[calc(2rem+45px)] py-16 md:py-20">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">Our Story</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 sm:mb-6 leading-[1.05] sm:leading-[1.0]">About 1SagePros.AI</h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-lg">200+ businesses. 30 years of trust. $1.2B+ delivered. The revenue growth partner for established businesses.</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-12 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: '#2D7A4F' }}>
        <div
          className="animate-slow-pan absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url(${sageLogo})`,
            backgroundRepeat: 'repeat',
            backgroundSize: '120px',
            filter: 'brightness(0) invert(1)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <p className="text-xs uppercase tracking-widest text-white/60 mb-4 font-semibold">Who We Are</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3">
              Our <span style={{ color: '#7ED9A8' }}>Purpose</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {/* Mission */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 md:p-10">
              <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/30 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">Our Mission</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                To align strategy, marketing, sales, and execution into one measurable revenue system that delivers predictable, scalable growth for B2B organizations.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 md:p-10">
              <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/30 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">Our Vision</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                To become the most trusted revenue growth partner for technology and growth-focused businesses, known for delivering measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">
              What Drives Us
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-3">Core <span className="text-accent">Values</span></h2>

            <p className="text-lg text-muted-foreground">
              Principles that guide every client engagement
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-border">
            {values.map((value) => {
              const Icon = value.icon;
              return (
              <div key={value.title} className="group bg-white p-6 md:p-8 text-center hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl border-2 border-accent/20 flex items-center justify-center mx-auto mb-4 md:mb-5 transition-all duration-300 group-hover:bg-accent/10 group-hover:border-accent/50 group-hover:scale-105">
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-accent transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg md:text-xl font-black text-primary mb-2 md:mb-3 transition-colors duration-300 group-hover:text-accent">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            );})}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">
              Our Team
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-3">Leadership <span className="text-accent">Team</span></h2>

            <p className="text-lg text-muted-foreground">
              30+ years of enterprise revenue leadership
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            {leaders.map((leader, index) => (
              <div key={leader.name} className={`group bg-white p-6 md:p-8 lg:p-12 hover:shadow-md transition-all duration-300${index === leaders.length - 1 && leaders.length % 2 !== 0 ? ' md:col-span-2' : ''}`}>
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden mb-6 transition-transform duration-300 group-hover:scale-105">
                  <img src={leader.photo} alt={leader.name} className="w-full h-full object-cover object-top" loading="lazy" />
                </div>
                <h3 className="text-2xl font-black text-primary mb-1">{leader.name}</h3>
                <p className="text-accent font-semibold mb-4">{leader.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 text-justify">{leader.bio}</p>
                {leader.certifications.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    {leader.certifications.map((cert) => (
                      <span key={cert} className="px-3 py-1 bg-accent/10 rounded text-xs font-semibold text-accent">
                        {cert}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {leader.expertise.map((area) => (
                    <span key={area} className="px-3 py-1 bg-gray-100 rounded text-xs font-semibold text-foreground hover:bg-accent/20 hover:text-accent transition-colors duration-200">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Team */}
      <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">Extended Network</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-3">Our <span className="text-accent">Team</span></h2>
            <p className="text-lg text-muted-foreground">Specialists across every revenue discipline</p>
          </div>

          <div className="bg-white border border-border p-6 md:p-8">
            <p className="text-xs uppercase tracking-widest text-primary/50 mb-4 font-semibold">Also on the team</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Paul Sievers &middot; Corinne Wallace &middot; Robert Shroll &middot; Katrina Jumawid &middot; Ateeq Asif &middot; Shelly Barson
            </p>
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">Advisors</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-3">Advisory <span className="text-accent">Board</span></h2>
            <p className="text-lg text-muted-foreground">Enterprise expertise guiding every engagement</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { name: 'Ed Soohoo', role: 'CTO, Lenovo' },
              { name: 'David Sockolof', role: 'CEO, RQM+' },
              { name: 'James Harris', role: 'SVP, Snowflake' },
              { name: 'Marci Kahn Esq.', role: 'Sterling & Price LLP' },
              { name: 'Steve L. Bolden CPA', role: 'Meltzer & Assoc. LLP' },
            ].map((advisor) => (
              <div key={advisor.name} className="bg-white border border-border p-6 md:p-8 hover:shadow-sm transition-shadow duration-200">
                <h3 className="text-lg font-black text-primary mb-1">{advisor.name}</h3>
                <p className="text-sm text-accent font-semibold">{advisor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#E8F5EE]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { icon: CalendarClock, value: '30+',  label: 'Years of Trust',    custom: false },
              { icon: Building2,    value: '200+', label: 'Businesses Served', custom: false },
              { icon: TrendingUp,   value: '$1.2B+', label: 'TCV Delivered',   custom: false },
              { icon: Award,        value: '8X',   label: 'Avg ROI',           custom: false },
            ].map(({ icon: Icon, value, label, custom: _custom }) => (
              <div key={label} className="flex flex-col items-center group cursor-default">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-3">
                  {Icon && <Icon className="w-5 h-5 md:w-6 md:h-6 text-accent group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />}
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-accent mb-1">{value}</div>
                <div className="text-xs sm:text-sm text-primary/70 font-semibold uppercase tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <img src={aboutBg} alt="" className="absolute inset-0 w-full h-full object-cover object-center" aria-hidden="true" />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">
            Partner With Us
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3">
            Let's Build Your <span className="text-accent">Revenue Engine</span>
          </h2>

          <p className="text-lg text-white/70 mb-8 md:mb-10">
            Work with a team that has 30+ years of proven experience
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
