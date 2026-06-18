import { Link } from 'react-router';
import { Cpu, Factory, Briefcase, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import wavePattern from '../../imports/Sage wavy background more solid.png';
import { Button } from '../components/Button';

export function Industries() {
  const industries = [
    {
      icon: Cpu,
      name: 'Technology',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
      sectors: ['Enterprise Software', 'SaaS', 'AI', 'Cybersecurity', 'Cloud Solutions'],
      challenge: 'Complex sales cycles with multiple stakeholders and difficulty articulating technical value to business buyers',
      solution: 'Enterprise messaging, multi-threaded sales strategies, and account-based marketing for target accounts',
    },
    {
      icon: Factory,
      name: 'Manufacturing',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      sectors: ['Industrial Automation', 'RFID', 'Supply Chain', 'Equipment'],
      challenge: 'Long sales cycles, limited digital presence, and heavy dependence on trade shows',
      solution: 'Digital demand generation programs, technical content marketing, and sales enablement',
    },
    {
      icon: Briefcase,
      name: 'Professional Services',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
      sectors: ['Consulting', 'Engineering', 'Accounting', 'Legal'],
      challenge: 'Revenue dependent on individual relationships with inconsistent new business development',
      solution: 'Thought leadership programs, systematic business development, and partner enablement',
    },
    {
      icon: TrendingUp,
      name: 'Investors',
      image: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=800&q=80',
      sectors: ['Private Equity', 'Venture Capital', 'Portfolio Companies'],
      challenge: 'Portfolio company underperformance and need for rapid growth post-acquisition',
      solution: 'Revenue assessment, interim leadership, and performance monitoring',
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero */}
      <section
        className="relative py-32 min-h-[70vh] flex items-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/80" />
        <div className="w-full px-4 sm:px-6 lg:px-8 pl-[calc(1rem+45px)] sm:pl-[calc(1.5rem+45px)] lg:pl-[calc(2rem+45px)] relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-wider text-accent mb-6 font-semibold">Industry Expertise</p>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Industries We Serve</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Deep expertise in growth-focused B2B organizations across multiple sectors
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto pl-4 space-y-24">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={industry.name} className={`grid lg:grid-cols-2 gap-16 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                <div className={isEven ? '' : 'lg:col-start-2'}>
                  <Icon className="w-16 h-16 text-accent mb-6" />
                  <h2 className="text-4xl font-black text-primary mb-6">{industry.name}</h2>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {industry.sectors.map((sector) => (
                      <span key={sector} className="px-4 py-2 bg-gray-100 text-sm font-semibold text-foreground">
                        {sector}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">Challenge</h3>
                      <p className="text-muted-foreground leading-relaxed">{industry.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">Solution</h3>
                      <p className="text-foreground leading-relaxed">{industry.solution}</p>
                    </div>
                  </div>
                </div>

                <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                  <div className="rounded-2xl border-2 border-accent overflow-hidden shadow-lg">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-border">
        <div className="max-w-7xl mx-auto pl-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Businesses' },
              { value: '30+', label: 'Years' },
              { value: '$100M+', label: 'Revenue' },
              { value: '37%', label: 'Avg Growth' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-5xl font-black text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">{stat.label}</div>
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
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm uppercase tracking-wider text-accent mb-4 font-semibold">
            Get Started
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-3">
            Ready to <span className="text-accent">Accelerate Growth?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10">
            Schedule a Revenue Evaluation for your industry
          </p>
          <Button to="/contact">
            Get Free Assessment
          </Button>
        </div>
      </section>
    </div>
  );
}
