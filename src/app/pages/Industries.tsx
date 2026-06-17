import { Link } from 'react-router';
import { Cpu, Factory, Briefcase, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import wavePattern from '../../imports/sage-wavy-hill-green.png';
import { Button } from '../components/Button';

export function Industries() {
  const industries = [
    {
      icon: Cpu,
      name: 'Technology',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
      sectors: ['Enterprise Software', 'SaaS', 'AI', 'Cybersecurity', 'Cloud Solutions'],
      challenge: 'Complex sales cycles with multiple stakeholders and difficulty articulating technical value to business buyers',
      solution: 'Enterprise messaging, multi-threaded sales strategies, and account-based marketing for target accounts',
    },
    {
      icon: Factory,
      name: 'Manufacturing',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
      sectors: ['Industrial Automation', 'RFID', 'Supply Chain', 'Equipment'],
      challenge: 'Long sales cycles, limited digital presence, and heavy dependence on trade shows',
      solution: 'Digital demand generation programs, technical content marketing, and sales enablement',
    },
    {
      icon: Briefcase,
      name: 'Professional Services',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
      sectors: ['Consulting', 'Engineering', 'Accounting', 'Legal'],
      challenge: 'Revenue dependent on individual relationships with inconsistent new business development',
      solution: 'Thought leadership programs, systematic business development, and partner enablement',
    },
    {
      icon: TrendingUp,
      name: 'Investors',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
      sectors: ['Private Equity', 'Venture Capital', 'Portfolio Companies'],
      challenge: 'Portfolio company underperformance and need for rapid growth post-acquisition',
      solution: 'Revenue assessment, interim leadership, and performance monitoring',
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero */}
      <section className="bg-white min-h-[60vh] flex items-center border-b border-border">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 items-stretch">
            {/* Left */}
            <div className="flex flex-col justify-center py-24 px-4 sm:px-6 lg:px-8 pl-[calc(1rem+45px)] sm:pl-[calc(1.5rem+45px)] lg:pl-[calc(2rem+45px)]">
              <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">Our Expertise</p>
              <h1 className="text-5xl md:text-6xl font-black text-primary mb-6 leading-tight">Industries We Serve</h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">Deep expertise in growth-focused B2B organizations across multiple sectors</p>
              <Button to="/contact">Schedule a Consultation</Button>
            </div>
            {/* Right */}
            <div className="hidden lg:flex items-center justify-center bg-[#E8F5EE] lg:min-h-[60vh]">
              <div className="flex flex-col items-center justify-center gap-8">
                {[{ value: '4', label: 'Industries' }, { value: '500+', label: 'Businesses' }, { value: '30+', label: 'Years' }].map(stat => (
                  <div key={stat.label} className="text-center">
                    <p className="text-5xl font-black text-accent">{stat.value}</p>
                    <p className="text-sm uppercase tracking-widest text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
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
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover"
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
        <div className="max-w-7xl mx-auto pl-4 text-center">
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
