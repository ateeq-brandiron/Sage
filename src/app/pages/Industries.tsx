import { Link } from 'react-router';
import { Cpu, Factory, Briefcase, TrendingUp, CheckCircle2, ArrowRight, Building2, CalendarClock, CircleDollarSign, BarChart3 } from 'lucide-react';
import wavePattern from '../../assets/brand/wave-bg.png';
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
      <section className="bg-white min-h-[50vh] flex items-center border-b border-border">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 items-stretch">
            {/* Left — text */}
            <div className="flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 pl-[calc(1rem+45px)] sm:pl-[calc(1.5rem+45px)] lg:pl-[calc(2rem+45px)]">
              <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">Industry Expertise</p>
              <h1 className="text-5xl md:text-6xl font-black text-primary mb-6 leading-tight">Industries We Serve</h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">Deep expertise in growth-focused B2B organizations across multiple sectors</p>
            </div>
            {/* Right — horizontal bar chart */}
            <div className="hidden lg:flex items-center justify-center bg-white lg:min-h-[60vh] px-8 py-8">
              <div className="w-full">
                <p className="text-[11px] font-bold uppercase tracking-widest text-primary/50 mb-5">Client Mix by Industry</p>
                <svg viewBox="0 0 420 280" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {[
                    { label: 'Technology',            pct: 85, y: 16  },
                    { label: 'Manufacturing',         pct: 60, y: 88  },
                    { label: 'Professional Services', pct: 75, y: 160 },
                    { label: 'Investors',             pct: 50, y: 232 },
                  ].map(({ label, pct, y }) => (
                    <g key={label}>
                      <text x="0" y={y} fontSize="14" fill="#0B1F35" fillOpacity="0.65" fontWeight="700">{label}</text>
                      <rect x="0" y={y + 10} width="420" height="22" rx="4" fill="#0B1F35" fillOpacity="0.07"/>
                      <rect x="0" y={y + 10} width={420 * pct / 100} height="22" rx="4" fill="#00C853" fillOpacity="0.7"/>
                      <text x={420 * pct / 100 + 8} y={y + 26} fontSize="13" fill="#0B1F35" fillOpacity="0.55" fontWeight="700">{pct}%</text>
                    </g>
                  ))}
                </svg>
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
                      <span key={sector} className="px-4 py-2 bg-gray-100 text-sm font-semibold text-foreground hover:bg-accent/20 hover:text-accent transition-colors duration-200">
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
              { icon: Building2,        value: '200+', label: 'Businesses' },
              { icon: CalendarClock,    value: '30+',  label: 'Years' },
              { icon: CircleDollarSign, value: '$1B+', label: 'Delivered' },
              { icon: BarChart3,        value: '8X',   label: 'Avg ROI' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                </div>
                <div className="text-5xl font-black text-accent mb-2 group-hover:text-accent transition-colors duration-300">{value}</div>
                <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">{label}</div>
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
