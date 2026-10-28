import { TrendingUp, BarChart3, Users, Award } from 'lucide-react';
import wavePattern from '../../assets/brand/wave-bg.png';
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
    {
      badge: 'New Logo Attainment',
      title: 'New Logo Engine for an Established ERP Reseller',
      headline: { metric: '3X', label: 'License Revenue' },
      client: 'U.S.-based Infor ERP reseller since 1988, expert in manufacturing and distribution. Relying on referrals with no repeatable outbound motion to land new logos.',
      challenge: 'An established reseller with deep technical expertise but no structured outbound motion — no repeatable engine to land new logos.',
      solution: [
        { step: 'Sales activation', detail: 'A fractional sales executive co-selling with the ERP provider\'s representatives.' },
        { step: 'Deal acceleration', detail: 'Multiple new opportunities secured under a partner model.' },
        { step: 'GTM optimization', detail: 'Executive guidance to sharpen go-to-market, plus fractional content marketing.' },
      ],
      results: [
        { metric: '3X', label: 'License Revenue' },
        { metric: '3 Yrs', label: 'ARR Secured Forward' },
        { metric: '#1', label: 'Reseller of the Quarter' },
      ],
      award: 'Awarded Reseller of the Quarter',
      testimonial: 'The combination of fractional sales execution and GTM discipline opened doors we couldn\'t open alone.',
      author: 'VP Sales, Infor ERP Reseller',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80',
      clients: null,
    },
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-20 bg-white">
      {/* Hero */}
      <section className="bg-white flex items-center border-b border-border">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 items-stretch">
            <div className="flex flex-col justify-center py-10 md:py-12 px-4 sm:px-6 lg:pl-[calc(2rem+45px)]">
              <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">Client Success</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-5 sm:mb-6 leading-[1.05] sm:leading-[1.0]">Success Stories</h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">Real revenue transformation results from B2B companies that chose execution over strategy decks.</p>
            </div>
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
                  {[{ y: 10 }, { y: 65 }, { y: 120 }, { y: 175 }].map(({ y }) => (
                    <line key={y} x1="0" y1={y} x2="420" y2={y} stroke="#0B1F35" strokeOpacity="0.06" strokeWidth="1"/>
                  ))}
                  {[
                    { label: 'Shorter\nCycles',  metric: '22%', barH: 70,  x: 10,  grad: 'url(#barGrad2)' },
                    { label: 'More\nOpps',        metric: '37%', barH: 112, x: 115, grad: 'url(#barGrad2)' },
                    { label: 'Pipeline\nGrowth',  metric: '3X',  barH: 158, x: 220, grad: 'url(#barGrad1)' },
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
