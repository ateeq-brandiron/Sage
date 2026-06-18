import { Link } from 'react-router';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import wavePattern from '../../imports/Sage wavy background more solid.png';
import { Button } from '../components/Button';

export function CaseStudies() {
  const studies = [
    {
      title: 'Supply Chain Technology Expansion',
      client: 'Global RFID Solutions Provider',
      challenge: 'Expanding into North America with zero brand awareness and no sales infrastructure',
      solution: 'Full revenue system including positioning, demand generation, and sales team buildout',
      results: [
        { metric: '300%', label: 'Pipeline Growth' },
        { metric: '42%', label: 'Revenue Increase' },
        { metric: '$4.2M', label: 'New Pipeline' },
        { metric: '8X', label: 'ROI' },
      ],
      testimonial: 'Sage built our entire North American revenue engine. Their expertise was invaluable.',
      author: 'VP Sales, North America',
    },
    {
      title: 'ERP Solutions Growth Breakthrough',
      client: 'Mid-Market ERP Provider',
      challenge: 'Three-year revenue plateau despite strong product-market fit',
      solution: 'Sales acceleration and revenue intelligence with targeted demand generation',
      results: [
        { metric: '2X', label: 'Sales Efficiency' },
        { metric: '22%', label: 'Shorter Cycles' },
        { metric: '45%', label: 'Higher Win Rate' },
        { metric: '$2.1M', label: 'Incremental Revenue' },
      ],
      testimonial: 'For the first time in years, we can accurately forecast revenue.',
      author: 'Chief Revenue Officer',
    },
    {
      title: 'Cybersecurity Startup Scaling',
      client: 'Threat Detection Platform',
      challenge: 'Rapid hiring without consistent processes, unable to forecast accurately',
      solution: 'Revenue operations infrastructure with standardized processes and systems',
      results: [
        { metric: '60%', label: 'Faster Ramp' },
        { metric: '85%', label: 'Conversion Rate' },
        { metric: '4X', label: 'Pipeline Velocity' },
        { metric: '3X', label: 'Revenue Growth' },
      ],
      testimonial: 'Sage gave us the revenue infrastructure we needed to scale.',
      author: 'CEO & Founder',
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero */}
      <section className="bg-white min-h-[60vh] flex items-center border-b border-border">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 items-stretch">
            {/* Left — text */}
            <div className="flex flex-col justify-center py-24 px-4 sm:px-6 lg:px-8 pl-[calc(1rem+45px)] sm:pl-[calc(1.5rem+45px)] lg:pl-[calc(2rem+45px)]">
              <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">Client Success</p>
              <h1 className="text-5xl md:text-6xl font-black text-primary mb-6 leading-tight">Success Stories</h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">Real revenue transformation results from B2B companies</p>
            </div>
            {/* Right — light green panel with result stats */}
            <div className="hidden lg:flex items-center justify-center bg-[#E8F5EE] lg:min-h-[60vh]">
              <div className="flex flex-col gap-10 px-16">
                <div>
                  <p className="text-5xl font-black text-primary">37%</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">More Qualified Opportunities</p>
                </div>
                <div>
                  <p className="text-5xl font-black text-primary">22%</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">Decrease in Sales Cycle</p>
                </div>
                <div>
                  <p className="text-5xl font-black text-primary">59%</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">Pipeline Velocity Increase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-border">
        <div className="max-w-7xl mx-auto pl-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '300%', label: 'Avg Pipeline Growth' },
              { value: '42%', label: 'Revenue Increase' },
              { value: '2X', label: 'Sales Efficiency' },
              { value: '8X', label: 'Average ROI' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-5xl font-black text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto pl-4 space-y-24">
          {studies.map((study) => (
            <div key={study.title} className="border-l-4 border-accent pl-12">
              <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h2 className="text-3xl font-black text-primary mb-2">{study.title}</h2>
                    <p className="text-lg text-muted-foreground">{study.client}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">Challenge</h3>
                    <p className="text-foreground leading-relaxed">{study.challenge}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">Solution</h3>
                    <p className="text-foreground leading-relaxed">{study.solution}</p>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <p className="text-lg text-foreground italic mb-2">"{study.testimonial}"</p>
                    <p className="text-sm text-muted-foreground font-semibold">— {study.author}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6">Results</h3>
                  {study.results.map((result) => (
                    <div key={result.label} className="bg-gray-50 p-6">
                      <div className="text-4xl font-black text-accent mb-2">{result.metric}</div>
                      <div className="text-sm text-foreground font-semibold">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-border"
        style={{
          backgroundImage: `url(${wavePattern})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#ffffff',
        }}
      >
        <div className="absolute inset-0 bg-white/80" />
        <div className="max-w-7xl mx-auto pl-[calc(1rem+45px)] sm:pl-[calc(1.5rem+45px)] lg:pl-[calc(2rem+45px)] relative z-10">
          <p className="text-sm uppercase tracking-wider text-accent mb-4 font-semibold">
            Get Started
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-3">
            Ready to Write Your <span className="text-accent">Success Story?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-xl">
            Let's build a revenue system that delivers results
          </p>
          <Button to="/contact">
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
}
