import { Link } from 'react-router';
import { Calendar, ArrowRight, TrendingUp, Target, Users, Brain, Zap, BarChart3 } from 'lucide-react';
import wavePattern from '../../assets/brand/wave-bg.png';
import { Button } from '../components/Button';
import { articles } from '../data/articles';

export function Insights() {
  const categories = [
    { name: 'Revenue Growth', icon: TrendingUp },
    { name: 'Sales Strategy', icon: Target },
    { name: 'Marketing', icon: Users },
    { name: 'AI & Automation', icon: Brain },
    { name: 'Leadership', icon: Zap },
    { name: 'Analytics', icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-20 bg-white">
      {/* Hero */}
      <section className="bg-white flex items-center border-b border-border">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 items-stretch">
            {/* Left — text */}
            <div className="flex flex-col justify-center py-10 md:py-12 px-4 sm:px-6 lg:pl-[calc(2rem+45px)]">
              <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">Knowledge & Expertise</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-5 sm:mb-6 leading-[1.05] sm:leading-[1.0]">Insights</h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">Strategic insights on revenue growth from 30+ years of experience</p>
            </div>
            {/* Right — multi-line trend chart */}
            <div className="hidden lg:flex items-center justify-center bg-white lg:min-h-[60vh] px-8 py-8">
              <div className="w-full">
                <p className="text-[11px] font-bold uppercase tracking-widest text-primary/50 mb-3">Trending Topics: Readership Growth</p>
                <svg viewBox="0 0 420 270" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="trendGrad1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00C853" stopOpacity="0.2"/>
                      <stop offset="100%" stopColor="#00C853" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  {[{ y: 20 }, { y: 75 }, { y: 130 }, { y: 185 }].map(({ y }) => (
                    <line key={y} x1="0" y1={y} x2="415" y2={y} stroke="#0B1F35" strokeOpacity="0.07" strokeWidth="1"/>
                  ))}
                  {[
                    { label: 'Jan', x: 14  },
                    { label: 'Mar', x: 97  },
                    { label: 'May', x: 180 },
                    { label: 'Jul', x: 263 },
                    { label: 'Sep', x: 332 },
                    { label: 'Now', x: 408 },
                  ].map(({ label, x }) => (
                    <text key={label} x={x} y="255" textAnchor="middle" fontSize="12" fill="#0B1F35" fillOpacity="0.38">{label}</text>
                  ))}
                  <path d="M14,200 L97,182 L180,152 L263,118 L332,90 L408,50 L408,215 L14,215 Z" fill="url(#trendGrad1)"/>
                  <polyline points="14,200 97,182 180,152 263,118 332,90 408,50" stroke="#00C853" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <polyline points="14,192 97,176 180,160 263,144 332,130 408,112" stroke="#2D7A4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="7 4" fill="none"/>
                  <polyline points="14,210 97,202 180,186 263,148 332,102 408,38" stroke="#0B1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" fill="none"/>
                  <circle cx="408" cy="50"  r="5.5" fill="#00C853" stroke="white" strokeWidth="2.5"/>
                  <circle cx="408" cy="112" r="5"   fill="#2D7A4F" stroke="white" strokeWidth="2.5"/>
                  <circle cx="408" cy="38"  r="5"   fill="#0B1F35" fillOpacity="0.4" stroke="white" strokeWidth="2.5"/>
                </svg>
                <div className="flex gap-6 mt-3">
                  {[
                    { color: 'bg-accent',    label: 'Revenue Growth'  },
                    { color: 'bg-[#2D7A4F]', label: 'Sales Strategy'  },
                    { color: 'bg-primary/30', label: 'AI & Automation' },
                  ].map(({ color, label }) => (
                    <div key={label} className="flex items-center gap-2">
                      <span className={`w-4 h-2 rounded-full ${color}`}/>
                      <span className="text-[10px] text-primary/50 font-semibold uppercase tracking-wide">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.name}
                  className="flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 border-2 border-border hover:border-accent hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-md group"
                >
                  <Icon className="w-4 h-4 text-accent group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-bold text-foreground">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-px bg-border">
            {articles.map((article) => (
              <article key={article.title} className="bg-white p-6 md:p-8 hover:bg-gray-50 transition-colors group">
                <div className="flex items-start justify-between gap-6 md:gap-8">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 md:gap-4 mb-3">
                      <span className="text-xs font-bold text-accent uppercase tracking-wider">{article.category}</span>
                      <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    </div>
                    <Link to={`/insights/${article.slug}`}>
                      <h3 className="text-xl md:text-2xl font-black text-primary group-hover:text-accent transition-colors mb-3">
                        {article.title}
                      </h3>
                    </Link>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                        {article.date}
                      </div>
                      <Link
                        to={`/insights/${article.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all duration-300 group"
                      >
                        Read more
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">
            Newsletter
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-3">
            Get Weekly <span className="text-accent">Insights</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-6 md:mb-8">
            Revenue growth strategies delivered to your inbox
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 md:px-6 py-4 border-2 border-border focus:outline-none focus:border-accent transition-all duration-300"
            />
            <button className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-4 bg-gradient-to-r from-[#1B6B3A] to-[#00A344] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:brightness-110 group whitespace-nowrap">
              Subscribe
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </form>

          <p className="text-sm text-muted-foreground mt-4">
            Join 5,000+ revenue leaders. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 relative"
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
          <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">
            Take Action
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-3">
            Need More Than <span className="text-accent">Insights?</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8 md:mb-10">
            Work directly with our team to transform your revenue
          </p>
          <Button to="/contact">
            Get Free Assessment
          </Button>
        </div>
      </section>
    </div>
  );
}
