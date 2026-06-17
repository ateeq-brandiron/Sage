import { Link } from 'react-router';
import wavePattern from '../../imports/sage-wavy-hill-green.png';
import leavesBackground from '../../imports/Sage all leaves background copy.jpg';
import { Target, CheckCircle2, TrendingUp, Users, Award, ArrowRight, BarChart3, Handshake, Lightbulb, ShieldCheck } from 'lucide-react';
import revenueSystemImg from '../../imports/sage-2.png';
import vectorPattern from '../../imports/Vector-1.png';
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
    { name: 'Mitchell Chi', role: 'CEO & Co-Founder', expertise: ['Revenue Strategy', 'Market Positioning', 'Enterprise Sales'] },
    { name: 'Michael Doyle', role: 'CRO & Co-Founder', expertise: ['Sales Leadership', 'Pipeline Management', 'Revenue Operations'] },
    { name: 'Paul Sievers', role: 'VP Sales Enablement', expertise: ['Sales Coaching', 'Playbook Development', 'Performance Optimization'] },
    { name: 'Valeria Rodriguez', role: 'VP Revenue Intelligence', expertise: ['Revenue Analytics', 'Forecasting', 'Business Intelligence'] },
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero */}
      <section className="bg-white min-h-[60vh] flex items-center border-b border-border">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 items-stretch">
            {/* Left */}
            <div className="flex flex-col justify-center py-24 px-4 sm:px-6 lg:px-8 pl-[calc(1rem+45px)] sm:pl-[calc(1.5rem+45px)] lg:pl-[calc(2rem+45px)]">
              <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">About Us</p>
              <h1 className="text-5xl md:text-6xl font-black text-primary mb-6 leading-tight">About SAGE</h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">We Build Revenue Systems That Turn Strategy Into Predictable Growth</p>
            </div>
            {/* Right */}
            <div className="hidden lg:flex items-center justify-center lg:min-h-[60vh]">
              <img src={revenueSystemImg} alt="SAGE Revenue System" className="w-full h-full object-contain" style={{ padding: '40px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        className="animate-slow-pan relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ backgroundImage: `url(${leavesBackground})` }}
      >
        {/* Dark green overlay */}
        <div className="absolute inset-0 bg-primary/80" />

        <div className="max-w-7xl mx-auto pl-4 relative z-10">
          <div className="grid lg:grid-cols-3 gap-16 items-center">
            {/* Mission & Vision */}
            <div className="lg:col-span-2 space-y-12">
              <div className="border-l-4 border-accent pl-8">
                <h2 className="text-3xl font-black text-white mb-6">Our Mission</h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  To align strategy, marketing, sales, and execution into one measurable revenue system that delivers predictable, scalable growth for B2B organizations.
                </p>
              </div>
              <div className="border-l-4 border-white/40 pl-8">
                <h2 className="text-3xl font-black text-white mb-6">Our Vision</h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  To become the most trusted revenue growth partner for technology and growth-focused businesses, known for delivering measurable results.
                </p>
              </div>
            </div>

            {/* Revenue System Image */}
            <div className="flex justify-center">
              <img src={revenueSystemImg} alt="Revenue System" className="w-full max-w-sm opacity-90" />
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
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                  <Users className="w-10 h-10 text-accent" />
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
              { value: '30+', label: 'Years' },
              { value: '500+', label: 'Clients' },
              { value: '$100M+', label: 'Revenue' },
              { value: '8X', label: 'Avg ROI' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-5xl font-black text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-primary/70 font-semibold uppercase tracking-wide">{stat.label}</div>
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
        <div className="max-w-7xl mx-auto pl-4 text-center relative z-10">
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
