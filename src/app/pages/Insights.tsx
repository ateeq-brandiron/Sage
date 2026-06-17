import { Link } from 'react-router';
import { Calendar, ArrowRight, TrendingUp, Target, Users, Brain, Zap, BarChart3 } from 'lucide-react';
import wavePattern from '../../imports/sage-wavy-hill-green.png';
import { Button } from '../components/Button';

export function Insights() {
  const categories = [
    { name: 'Revenue Growth', icon: TrendingUp },
    { name: 'Sales Strategy', icon: Target },
    { name: 'Marketing', icon: Users },
    { name: 'AI & Automation', icon: Brain },
    { name: 'Leadership', icon: Zap },
    { name: 'Analytics', icon: BarChart3 },
  ];

  const articles = [
    {
      category: 'Revenue Growth',
      title: 'The Revenue System Problem: Why B2B Companies Struggle to Scale',
      description: 'Most B2B companies hit a growth wall not because of product issues, but because their revenue operations are fundamentally broken. Learn how to identify and fix the systemic problems holding your growth back.',
      date: 'March 15, 2026',
      readTime: '8 min',
      slug: 'revenue-system-problem-b2b-scale',
    },
    {
      category: 'Sales Strategy',
      title: 'Building Sales Playbooks That Actually Get Used',
      description: 'Sales playbooks gather dust because they\'re built wrong. Discover the framework for creating playbooks that sales teams actually use—and that drive measurable revenue growth.',
      date: 'March 10, 2026',
      readTime: '6 min',
      slug: 'building-sales-playbooks-that-get-used',
    },
    {
      category: 'Marketing',
      title: 'Account-Based Marketing for Complex B2B Sales',
      description: 'Generic marketing doesn\'t work for complex B2B sales. Learn how to implement account-based marketing strategies that align with your sales process and drive qualified pipeline.',
      date: 'March 5, 2026',
      readTime: '10 min',
      slug: 'account-based-marketing-complex-b2b',
    },
    {
      category: 'AI & Automation',
      title: 'AI in Revenue Operations: Hype vs Reality',
      description: 'Cutting through the AI hype to show you what actually works in revenue operations today. Real use cases, measurable ROI, and what to avoid.',
      date: 'February 28, 2026',
      readTime: '7 min',
      slug: 'ai-revenue-operations-hype-vs-reality',
    },
    {
      category: 'Leadership',
      title: 'The CRO\'s First 90 Days: A Strategic Framework',
      description: 'A new Chief Revenue Officer has a narrow window to make an impact. This proven framework shows you exactly what to assess, fix, and build in your first 90 days.',
      date: 'February 20, 2026',
      readTime: '12 min',
      slug: 'cro-first-90-days-framework',
    },
    {
      category: 'Analytics',
      title: 'Revenue Forecasting Beyond the Spreadsheet',
      description: 'Stop relying on gut feel and spreadsheet gymnastics. Learn how leading revenue teams are building predictive forecasting systems that actually work.',
      date: 'February 15, 2026',
      readTime: '9 min',
      slug: 'revenue-forecasting-beyond-spreadsheet',
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero */}
      <section
        className="relative py-32 min-h-[70vh] flex items-center border-b border-border"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/80" />
        <div className="w-full px-4 sm:px-6 lg:px-8 pl-[calc(1rem+45px)] sm:pl-[calc(1.5rem+45px)] lg:pl-[calc(2rem+45px)] relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-wider text-accent mb-6 font-semibold">Knowledge & Expertise</p>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Insights</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Strategic insights on revenue growth from 30+ years of experience
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto pl-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.name}
                  className="flex items-center gap-2 px-6 py-3 border-2 border-border hover:border-accent hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-md group"
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
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto pl-4">
          <div className="space-y-px bg-border">
            {articles.map((article) => (
              <article key={article.title} className="bg-white p-8 hover:bg-gray-50 transition-colors group">
                <div className="flex items-start justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs font-bold text-accent uppercase tracking-wider">{article.category}</span>
                      <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-black text-primary group-hover:text-accent transition-colors mb-3">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {article.date}
                      </div>
                      <Link
                        to="/insights"
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-border">
        <div className="max-w-7xl mx-auto pl-4 text-center">
          <p className="text-sm uppercase tracking-wider text-accent mb-4 font-semibold">
            Newsletter
          </p>
          <h2 className="text-4xl font-black text-primary mb-3">
            Get Weekly <span className="text-accent">Insights</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8">
            Revenue growth strategies delivered to your inbox
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 border-2 border-border focus:outline-none focus:border-accent transition-all duration-300"
            />
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00A344] to-[#00C853] text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 hover:from-[#00C853] hover:to-[#00A344] hover:brightness-110 group">
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
            Take Action
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-3">
            Need More Than <span className="text-accent">Insights?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10">
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
