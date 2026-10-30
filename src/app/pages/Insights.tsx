import { useState } from 'react';
import { Link } from 'react-router';
import { Calendar, ArrowRight, TrendingUp, Target, Users, Brain, Zap, BarChart3 } from 'lucide-react';
import { Button } from '../components/Button';
import { articles } from '../data/articles';

export function Insights() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

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
      <section className="relative flex items-center min-h-[500px] md:min-h-[580px] overflow-hidden">
        <img src="/images/pages/insights/hero-bg.webp" alt="" className="absolute inset-0 w-full h-full object-cover object-center" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/30" />
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-[calc(2rem+45px)] py-16 md:py-20">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">Knowledge & Expertise</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 sm:mb-6 leading-[1.05] sm:leading-[1.0]">Insights</h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-lg">Strategic insights on revenue growth from 30+ years of experience</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.name;
              return (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(isActive ? null : category.name)}
                  className={`flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 border-2 transition-all duration-300 hover:scale-105 hover:shadow-md group ${isActive ? 'border-accent bg-accent/10' : 'border-border hover:border-accent hover:bg-gray-50'}`}
                >
                  <Icon className="w-4 h-4 text-accent group-hover:scale-110 transition-transform duration-300" />
                  <span className={`text-sm font-bold ${isActive ? 'text-accent' : 'text-foreground'}`}>{category.name}</span>
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
            {(activeCategory ? articles.filter(a => a.category === activeCategory) : articles).map((article) => (
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
          backgroundImage: "url('/images/brand/wave-bg.webp')",
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
