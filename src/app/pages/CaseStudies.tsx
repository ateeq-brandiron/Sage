import { TrendingUp, BarChart3, Users, Award } from 'lucide-react';
import wavePattern from '../../assets/brand/wave-bg.webp';
import caseStudiesBg from '../../assets/brand/cta-wave-horizon.webp';
import { Button } from '../components/Button';

export function CaseStudies() {
  const studies = [
    {
      badge: 'Co-Sell with AEs',
      title: 'Launched North America from Zero',
      headline: { metric: '15+', label: 'Net-New Clients' },
      client: 'Global supply chain consultancy, Middle East-based — a 20-year-old VAR strong across EMEA, APAC and Australia, with no U.S. revenue, brand, or sales team.',
      challenge: 'No U.S. presence, no brand recognition, no sales team — entering the most competitive ERP market in the world from scratch.',
      solution: [
        { step: 'Brand positioning', detail: 'A RevenueStorm™ aligned messaging and co-branded assets to establish a U.S. presence.' },
        { step: 'Demand engine', detail: 'A multi-channel marketing platform to drive awareness and pipeline.' },
        { step: 'Sales activation', detail: 'Fractional sales executives with deep ERP and WMS expertise, co-selling with enterprise technology partner Infor.' },
      ],
      results: [
        { metric: '15+', label: 'Net-New Clients' },
        { metric: '62%', label: 'MQL-to-SQL' },
        { metric: '37%', label: 'Pipeline Velocity' },
        { metric: '38%', label: 'P4-to-Win Ratio' },
      ],
      award: '#1 WMS Implementer in the Infor Ecosystem',
      testimonial: 'The numbers speak for themselves.',
      author: 'VP Sales, North America',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1400&q=80',
      clients: 'GM USA · Clarins · Timex · DHL · First Supply',
    },
    {
      badge: 'Brand & Demand',
      title: 'Revenue Up 55% in One Quarter',
      headline: { metric: '55%', label: 'Revenue Growth' },
      client: 'Classic car dealer, U.S. market. Worldwide Vintage Autos, one of the country\'s foremost sources for classic cars and trucks, needed VIP Program sign-ups, social growth and consignment leads.',
      challenge: 'A beloved classic car brand with a large VIP list but no structured digital demand engine — no repeatable funnel to drive registrations, consignment leads, or revenue at scale.',
      solution: [
        { step: 'Search & social ads', detail: 'Targeted paid campaigns to drive VIP Program registrations and social audience growth.' },
        { step: 'VIP email engine', detail: '200,000+ weekly emails to the VIP list, driving repeat engagement and consignment inquiries.' },
        { step: 'Consignment funnel', detail: 'Full creative plus landing pages built to convert high-intent classic car sellers.' },
      ],
      results: [
        { metric: '55%', label: 'Revenue Growth YoY' },
        { metric: '180%', label: 'VIP Registrations' },
        { metric: '47%', label: 'Email Open Rate' },
        { metric: '34%', label: 'Email Click-Through' },
      ],
      award: '200,000+ emails sent to the VIP list, Q4 2020 to Q1 2021',
      testimonial: 'The demand engine 1SagePros built transformed our VIP program into a revenue machine unlike anything we\'d seen.',
      author: 'Owner, Worldwide Vintage Autos',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80',
      clients: null,
    },
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-20 bg-white">
      {/* Hero */}
      <section className="relative flex items-center min-h-[500px] md:min-h-[580px] overflow-hidden">
        <img src={caseStudiesBg} alt="" className="absolute inset-0 w-full h-full object-cover object-center" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/30" />
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-[calc(2rem+45px)] py-16 md:py-20">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">Client Success</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 sm:mb-6 leading-[1.05] sm:leading-[1.0]">Success Stories</h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-lg">Real revenue transformation results from B2B companies that chose execution over strategy decks.</p>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { icon: TrendingUp, value: '3X',   label: 'Avg Pipeline Growth' },
              { icon: BarChart3,  value: '62%',  label: 'MQL-to-SQL Rate' },
              { icon: Users,      value: '37%',  label: 'Pipeline Velocity' },
              { icon: Award,      value: '8X',   label: 'Average ROI' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center group cursor-default">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-accent group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-accent mb-2">{value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-semibold uppercase tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12 md:space-y-20">
          {studies.map((study, idx) => (
            <article key={study.title} className="overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow duration-300">
              {/* Image banner */}
              <div className="relative h-52 sm:h-64 md:h-72 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
                <div className="absolute inset-0 flex items-end p-6 sm:p-8 md:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between w-full gap-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-bold uppercase tracking-wider mb-3">
                        {study.badge}
                      </span>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight max-w-lg">
                        {study.title}
                      </h2>
                    </div>
                    <div className="sm:text-right shrink-0">
                      <div className="text-5xl sm:text-6xl font-black text-accent leading-none">{study.headline.metric}</div>
                      <div className="text-sm text-white/80 font-semibold mt-1">{study.headline.label}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 md:p-10">
                <p className="text-sm text-muted-foreground mb-6 md:mb-8 max-w-2xl italic">{study.client}</p>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-10">
                  {/* Challenge */}
                  <div>
                    <h3 className="text-xs font-bold text-foreground uppercase tracking-widest mb-3 flex items-center gap-2">
                      <span className="w-4 h-px bg-accent inline-block" />
                      The Challenge
                    </h3>
                    <p className="text-foreground leading-relaxed">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="text-xs font-bold text-foreground uppercase tracking-widest mb-3 flex items-center gap-2">
                      <span className="w-4 h-px bg-accent inline-block" />
                      The Approach
                    </h3>
                    <ol className="space-y-2">
                      {study.solution.map((s, i) => (
                        <li key={i} className="flex gap-3 text-sm">
                          <span className="text-accent font-black shrink-0 w-4">{i + 1}</span>
                          <span><span className="font-bold text-foreground">{s.step}</span> — <span className="text-muted-foreground">{s.detail}</span></span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                {/* Results */}
                <div className="border-t border-border pt-6 md:pt-8">
                  <h3 className="text-xs font-bold text-foreground uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-4 h-px bg-accent inline-block" />
                    Results
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mb-6">
                    {study.results.map((r) => (
                      <div key={r.label} className="bg-[#E8F5EE] p-4 md:p-5 text-center">
                        <div className="text-2xl sm:text-3xl md:text-4xl font-black text-accent mb-1">{r.metric}</div>
                        <div className="text-xs text-foreground font-semibold leading-tight">{r.label}</div>
                      </div>
                    ))}
                  </div>
                  {study.clients && (
                    <p className="text-xs text-muted-foreground mb-4">
                      <span className="font-bold text-foreground">Clients won: </span>{study.clients}
                    </p>
                  )}
                  <div className="flex items-start gap-3">
                    <span className="text-accent text-2xl leading-none mt-0.5 font-serif">"</span>
                    <div>
                      <p className="text-base text-foreground italic">{study.testimonial}</p>
                      <p className="text-sm text-muted-foreground font-semibold mt-1">— {study.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 relative border-t border-border"
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
          <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">Get Started</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-3">
            Ready to Write Your <span className="text-accent">Success Story?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 md:mb-10">
            Let's build a revenue system that delivers results
          </p>
          <Button to="/contact">Get Started</Button>
        </div>
      </section>
    </div>
  );
}
