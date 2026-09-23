import { Link } from 'react-router';
import wavePattern from '../../assets/brand/wave-bg.png';
import sageLogo from '../../assets/brand/sage-logo.png';
import { Target, CheckCircle2, TrendingUp, Users, Award, ArrowRight, BarChart3, Handshake, Lightbulb, ShieldCheck, CalendarClock, Building2 } from 'lucide-react';
import vectorPattern from '../../assets/brand/vector-pattern.png';
import mitchellImg from '../../assets/team/mitchell-chi.svg';
import michaelImg from '../../assets/team/michael-doyle.png';
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
      bio: 'For 31 years Mitchell has engineered high-velocity revenue machines for Fortune 500 giants and high-growth AI/ML disruptors, amassing $1.2B+ in lifetime TCV/SOWs sold across ERP, SaaS, and Cloud. His career began founding the first Apple Federal VAR in 1984. Since 2018 he has translated enterprise-grade sales methodology into high-growth frameworks for agile SMBs ready to scale — consistently ranking in the top 1% of global sales organizations.',
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
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-20 bg-white">
      {/* Hero */}
      <section className="bg-white flex items-center border-b border-border">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 items-stretch">
            {/* Left — text */}
            <div className="flex flex-col justify-center py-10 md:py-12 px-4 sm:px-6 lg:pl-[calc(2rem+45px)]">
              <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">Our Story</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-5 sm:mb-6 leading-[1.05] sm:leading-[1.0]">About SAGE</h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">200+ businesses. 30 years of trust. $1B+ delivered. Now we bring that same discipline to AI.</p>
            </div>
            {/* Right — growth chart */}
            <div className="hidden lg:flex items-center justify-center bg-white px-4 py-4">
              <div className="w-full">
                <p className="text-[11px] font-bold uppercase tracking-widest text-primary/50 mb-3">Revenue Influenced: 30 Year Journey</p>
                <svg viewBox="0 0 460 260" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="aboutAreaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00C853" stopOpacity="0.22"/>
                      <stop offset="100%" stopColor="#00C853" stopOpacity="0.01"/>
                    </linearGradient>
                  </defs>
                  {[{ y: 20 }, { y: 75 }, { y: 130 }, { y: 185 }].map(({ y }) => (
                    <line key={y} x1="60" y1={y} x2="440" y2={y} stroke="#0B1F35" strokeOpacity="0.07" strokeWidth="1"/>
                  ))}
                  {[
                    { label: '$100M+', y: 20  },
                    { label: '$75M',   y: 75  },
                    { label: '$50M',   y: 130 },
                    { label: '$25M',   y: 185 },
                  ].map(({ label, y }) => (
                    <text key={label} x="56" y={y} textAnchor="end" fontSize="11" fill="#0B1F35" fillOpacity="0.42" dominantBaseline="middle">{label}</text>
                  ))}
                  <polygon points="60,215 190,195 315,130 440,20 440,215" fill="url(#aboutAreaGrad)"/>
                  <polyline points="60,215 190,195 315,130 440,20" stroke="#00C853" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  {[
                    { cx: 60,  cy: 215 },
                    { cx: 190, cy: 195 },
                    { cx: 315, cy: 130 },
                    { cx: 440, cy: 20  },
                  ].map(({ cx, cy }) => (
                    <circle key={cx} cx={cx} cy={cy} r="5.5" fill="#00C853" stroke="white" strokeWidth="2.5"/>
                  ))}
                  {[
                    { label: '1995', x: 60  },
                    { label: '2005', x: 190 },
                    { label: '2015', x: 315 },
                    { label: '2025', x: 440 },
                  ].map(({ label, x }) => (
                    <text key={label} x={x} y="240" textAnchor="middle" fontSize="12" fill="#0B1F35" fillOpacity="0.42">{label}</text>
                  ))}
                </svg>
              </div>
            </div>
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-border">
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
            {leaders.map((leader) => (
              <div key={leader.name} className="group bg-white p-6 md:p-8 lg:p-12 hover:shadow-md transition-all duration-300">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden mb-6 transition-transform duration-300 group-hover:scale-105">
                  <img src={leader.photo} alt={leader.name} className="w-full h-full object-cover object-top" loading="lazy" />
                </div>
                <h3 className="text-2xl font-black text-primary mb-1">{leader.name}</h3>
                <p className="text-accent font-semibold mb-4">{leader.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{leader.bio}</p>
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

      {/* Stats */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#E8F5EE]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { icon: CalendarClock, value: '30+',  label: 'Years of Trust',    custom: false },
              { icon: Building2,    value: '200+', label: 'Businesses Served', custom: false },
              { icon: TrendingUp,   value: '$1B+', label: 'Delivered',         custom: false },
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
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">
            Partner With Us
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-3">
            Let's Build Your <span className="text-accent">Revenue Engine</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8 md:mb-10">
            Work with a team that has 30+ years of proven experience
          </p>
          <Button to="/contact">
            Get Free Assessment
          </Button>
        </div>
      </section>
    </div>
  );
}
