import { Link } from 'react-router';
import wavePattern from '../../imports/sage-wavy-hill.png';
import { Target, CheckCircle2, TrendingUp, Users, Award, ArrowRight } from 'lucide-react';
import revenueSystemImg from '../../imports/sage-2.png';
import vectorPattern from '../../imports/Vector-1.png';
import { Button } from '../components/Button';

export function About() {
  const values = [
    { title: 'Results', description: 'We measure success by revenue impact, not deliverables' },
    { title: 'Accountability', description: 'Shared accountability through performance-based models' },
    { title: 'Partnership', description: 'We work as an extension of your team' },
    { title: 'Innovation', description: 'Continuous evolution based on what drives growth' },
    { title: 'Integrity', description: 'We tell you what you need to hear' },
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
      <section
        className="relative py-32 min-h-[70vh] flex items-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/80" />

        <div className="w-full px-4 sm:px-6 lg:px-8 pl-[calc(1rem+45px)] sm:pl-[calc(1.5rem+45px)] lg:pl-[calc(2rem+45px)] relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-wider text-accent mb-6 font-semibold">
              Our Story
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              About SAGE
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              We Build Revenue Systems That Turn Strategy Into Predictable Growth
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Founded in 1995, we've spent three decades helping B2B organizations transform their revenue operations. We're revenue growth partners who build complete, integrated systems.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
          <img src={vectorPattern} alt="" className="w-full h-full object-contain" />
        </div>

        <div className="max-w-7xl mx-auto pl-4 relative z-10">
          <div className="grid lg:grid-cols-3 gap-16 items-center">
            {/* Mission & Vision */}
            <div className="lg:col-span-2 space-y-12">
              <div className="border-l-4 border-accent pl-8">
                <h2 className="text-3xl font-black text-primary mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To align strategy, marketing, sales, and execution into one measurable revenue system that delivers predictable, scalable growth for B2B organizations.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-8">
                <h2 className="text-3xl font-black text-primary mb-6">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become the most trusted revenue growth partner for technology and growth-focused businesses, known for delivering measurable results.
                </p>
              </div>
            </div>

            {/* Revenue System Image */}
            <div className="flex justify-center">
              <img src={revenueSystemImg} alt="Revenue System" className="w-full max-w-sm" />
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
            <div className="w-32 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-xl text-muted-foreground">
              Principles that guide every client engagement
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-px bg-border">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-8 text-center">
                <h3 className="text-xl font-black text-primary mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
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
            <div className="w-32 h-1 bg-accent mx-auto mb-4"></div>
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
          backgroundImage: `linear-gradient(rgba(0, 120, 50, 0.18), rgba(0, 120, 50, 0.18)), url(${wavePattern})`,
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
          <div className="w-32 h-1 bg-accent mx-auto mb-6"></div>
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
