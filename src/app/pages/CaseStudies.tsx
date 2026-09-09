import { Link } from 'react-router';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import wavePattern from '../../assets/brand/wave-bg.png';
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
      <section className="bg-white min-h-[50vh] flex items-center border-b border-border">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 items-stretch">
            {/* Left — text */}
            <div className="flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 pl-[calc(1rem+45px)] sm:pl-[calc(1.5rem+45px)] lg:pl-[calc(2rem+45px)]">
              <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">Client Success</p>
              <h1 className="text-5xl md:text-6xl font-black text-primary mb-6 leading-tight">Success Stories</h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">Real revenue transformation results from B2B companies</p>
            </div>
            {/* Right — results bar chart */}
            <div className="hidden lg:flex items-center justify-center bg-white lg:min-h-[60vh] px-8 py-8">
              <div className="w-full">
                <p className="text-[11px] font-bold uppercase tracking-widest text-primary/50 mb-3">Average Client Results</p>
                <svg viewBox="0 0 420 280" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="barGrad1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00C853" stopOpacity="0.9"/>
                      <stop offset="100%" stopColor="#00C853" stopOpacity="0.4"/>
                    </linearGradient>
                    <linearGradient id="barGrad2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2D7A4F" stopOpacity="0.9"/>
                      <stop offset="100%" stopColor="#2D7A4F" stopOpacity="0.4"/>
                    </linearGradient>
                  </defs>
                  {/* Grid */}
                  {[{ y: 10 }, { y: 65 }, { y: 120 }, { y: 175 }].map(({ y }) => (
                    <line key={y} x1="0" y1={y} x2="420" y2={y} stroke="#0B1F35" strokeOpacity="0.06" strokeWidth="1"/>
                  ))}
                  {/* Bars — ascending left to right */}
                  {[
                    { label: 'Shorter\nCycles',  metric: '22%', barH: 70,  x: 10,  grad: 'url(#barGrad2)' },
                    { label: 'More\nOpps',        metric: '37%', barH: 112, x: 115, grad: 'url(#barGrad2)' },
                    { label: 'Pipeline\nGrowth',  metric: '59%', barH: 158, x: 220, grad: 'url(#barGrad1)' },
                    { label: 'Avg\nROI',          metric: '8X',  barH: 200, x: 325, grad: 'url(#barGrad1)' },
                  ].map(({ label, metric, barH, x, grad }) => {
                    const baseY = 225;
                    const topY = baseY - barH;
                    return (
                      <g key={label}>
                        <rect x={x} y={topY} width="80" height={barH} rx="5" fill={grad}/>
                        <text x={x + 40} y={topY - 10} textAnchor="middle" fontSize="16" fontWeight="800" fill="#0B1F35" fillOpacity="0.75">{metric}</text>
                        {label.split('\n').map((line, li) => (
                          <text key={li} x={x + 40} y={baseY + 18 + li * 16} textAnchor="middle" fontSize="12" fill="#0B1F35" fillOpacity="0.5">{line}</text>
                        ))}
                      </g>
                    );
                  })}
                  <line x1="0" y1="225" x2="420" y2="225" stroke="#0B1F35" strokeOpacity="0.15" strokeWidth="1.5"/>
                </svg>
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
              <div key={stat.label} className="group cursor-default">
                <div className="text-5xl font-black text-accent mb-2 group-hover:text-accent transition-colors duration-300">{stat.value}</div>
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
            <div key={study.title} className="border-l-4 border-accent pl-12 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h2 className="text-3xl font-black text-primary mb-2 group-hover:text-accent transition-colors duration-300">{study.title}</h2>
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
                    <div key={result.label} className="bg-gray-50 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
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
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="text-sm uppercase tracking-wider text-accent mb-4 font-semibold">
            Get Started
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-3">
            Ready to Write Your <span className="text-accent">Success Story?</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-10">
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
