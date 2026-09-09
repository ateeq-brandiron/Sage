import { Link } from 'react-router';
import wavePattern from '../../assets/brand/wave-bg.png';
import sageLogo from '../../assets/brand/sage-logo.png';
import { Target, CheckCircle2, TrendingUp, Users, Award, ArrowRight, BarChart3, Handshake, Lightbulb, ShieldCheck, CalendarClock, Building2, CircleDollarSign } from 'lucide-react';
import revenueSystemImg from '../../assets/pages/home/revenue-system.png';
import vectorPattern from '../../assets/brand/vector-pattern.png';
import mitchellImg from '../../assets/team/mitchell-chi.svg';
import paulImg from '../../assets/team/paul-sievers.svg';
import michaelImg from '../../assets/team/michael-doyle.png';
import valeriaImg from '../../assets/team/valeria-rodriguez.png';
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
    { name: 'Mitchell Chi',      photo: mitchellImg, role: 'CEO & Co-Founder',        expertise: ['Revenue Strategy', 'Market Positioning', 'Enterprise Sales'] },
    { name: 'Michael Doyle',     photo: michaelImg,  role: 'CRO & Co-Founder',        expertise: ['Sales Leadership', 'Pipeline Management', 'Revenue Operations'] },
    { name: 'Paul Sievers',      photo: paulImg,     role: 'VP Sales Enablement',     expertise: ['Sales Coaching', 'Playbook Development', 'Performance Optimization'] },
    { name: 'Valeria Rodriguez', photo: valeriaImg,  role: 'VP Revenue Intelligence', expertise: ['Revenue Analytics', 'Forecasting', 'Business Intelligence'] },
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero */}
      <section className="bg-white min-h-[50vh] flex items-center border-b border-border">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 items-stretch">
            {/* Left — text */}
            <div className="flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 pl-[calc(1rem+45px)] sm:pl-[calc(1.5rem+45px)] lg:pl-[calc(2rem+45px)]">
              <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">Our Story</p>
              <h1 className="text-5xl md:text-6xl font-black text-primary mb-6 leading-tight">About SAGE</h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">200+ businesses. 30 years of trust. $1B+ delivered. Now we bring that same discipline to AI.</p>
            </div>
            {/* Right — growth chart */}
            <div className="hidden lg:flex items-center justify-center bg-white lg:min-h-[60vh] px-8 py-8">
              <div className="w-full">
                <p className="text-[11px] font-bold uppercase tracking-widest text-primary/50 mb-3">Revenue Influenced: 30 Year Journey</p>
                <svg viewBox="0 0 460 260" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="aboutAreaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00C853" stopOpacity="0.22"/>
                      <stop offset="100%" stopColor="#00C853" stopOpacity="0.01"/>
                    </linearGradient>
                  </defs>
                  {/* Grid lines */}
                  {[{ y: 20 }, { y: 75 }, { y: 130 }, { y: 185 }].map(({ y }) => (
                    <line key={y} x1="60" y1={y} x2="440" y2={y} stroke="#0B1F35" strokeOpacity="0.07" strokeWidth="1"/>
                  ))}
                  {/* Y-axis labels */}
                  {[
                    { label: '$100M+', y: 20  },
                    { label: '$75M',   y: 75  },
                    { label: '$50M',   y: 130 },
                    { label: '$25M',   y: 185 },
                  ].map(({ label, y }) => (
                    <text key={label} x="56" y={y} textAnchor="end" fontSize="11" fill="#0B1F35" fillOpacity="0.42" dominantBaseline="middle">{label}</text>
                  ))}
                  {/* Area fill — matches polyline exactly */}
                  <polygon points="60,215 190,195 315,130 440,20 440,215" fill="url(#aboutAreaGrad)"/>
                  {/* Line through all 4 points */}
                  <polyline points="60,215 190,195 315,130 440,20" stroke="#00C853" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  {/* Data points — all on the line */}
                  {[
                    { cx: 60,  cy: 215 },
                    { cx: 190, cy: 195 },
                    { cx: 315, cy: 130 },
                    { cx: 440, cy: 20  },
                  ].map(({ cx, cy }) => (
                    <circle key={cx} cx={cx} cy={cy} r="5.5" fill="#00C853" stroke="white" strokeWidth="2.5"/>
                  ))}
                  {/* X-axis labels */}
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
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: '#2D7A4F' }}>
        {/* Animated logo watermark */}
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
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-white/60 mb-4 font-semibold">Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
              Our <span style={{ color: '#7ED9A8' }}>Purpose</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-10">
              <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/30 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">Our Mission</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                To align strategy, marketing, sales, and execution into one measurable revenue system that delivers predictable, scalable growth for B2B organizations.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-10">
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-border">
        <div className="max-w-7xl mx-auto pl-4">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-accent mb-4 font-semibold">
              What Drives Us
            </p>
            <h2 className="text-4xl font-black text-primary mb-3">Core <span className="text-accent">Values</span></h2>
            
            <p className="text-xl text-muted-foreground">
              Principles that guide every client engagement
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-px bg-border">
            {values.map((value) => {
              const Icon = value.icon;
              return (
              <div key={value.title} className="bg-white p-8 text-center">
                <div className="w-16 h-16 rounded-2xl border-2 border-accent/20 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-black text-primary mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            );})}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto pl-4">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-accent mb-4 font-semibold">
              Our Team
            </p>
            <h2 className="text-4xl font-black text-primary mb-3">Leadership <span className="text-accent">Team</span></h2>
            
            <p className="text-xl text-muted-foreground">
              30+ years of enterprise revenue leadership
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            {leaders.map((leader) => (
              <div key={leader.name} className="bg-white p-12">
                <div className="w-28 h-28 overflow-hidden mb-6">
                  <img src={leader.photo} alt={leader.name} className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="text-2xl font-black text-primary mb-1">{leader.name}</h3>
                <p className="text-accent font-semibold mb-6">{leader.role}</p>
                <div className="flex flex-wrap gap-2">
                  {leader.expertise.map((area) => (
                    <span key={area} className="px-3 py-1 bg-gray-100 text-xs font-semibold text-foreground">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#E8F5EE]">
        <div className="max-w-7xl mx-auto pl-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: CalendarClock,    value: '30+',  label: 'Years of Trust' },
              { icon: Building2,        value: '200+', label: 'Businesses Served' },
              { icon: CircleDollarSign, value: '$1B+', label: 'Delivered' },
              { icon: Award,            value: '8X',   label: 'Avg ROI' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                </div>
                <div className="text-5xl font-black text-accent mb-1">{value}</div>
                <div className="text-sm text-primary/70 font-semibold uppercase tracking-wide">{label}</div>
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
            Partner With Us
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-3">
            Let's Build Your <span className="text-accent">Revenue Engine</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10">
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
