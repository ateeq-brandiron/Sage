import { Link, useParams, Navigate } from 'react-router';
import { Calendar, Clock, ArrowRight, ArrowLeft, ChevronRight } from 'lucide-react';
import { articles } from '../data/articles';
import { Button } from '../components/Button';
import wavePattern from '../../assets/brand/wave-bg.png';

export function InsightDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) return <Navigate to="/insights" replace />;

  const currentIndex = articles.findIndex((a) => a.slug === slug);
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  return (
    <div className="min-h-screen pt-16 sm:pt-20 bg-white">
      {/* Hero */}
      <section className="bg-white border-b border-border py-10 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/insights" className="hover:text-accent transition-colors">Insights</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground truncate">{article.category}</span>
          </div>

          <span className="inline-block text-xs font-bold text-accent uppercase tracking-wider mb-4">{article.category}</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-5 leading-[1.08]">
            {article.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {article.description}
          </p>
          <div className="flex items-center gap-5 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-accent" />
              {article.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent" />
              {article.readTime} read
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="w-12 h-1 bg-accent mb-8 md:mb-10" />
          <div className="space-y-6">
            {article.body.map((paragraph, i) => (
              <p key={i} className="text-lg text-foreground/80 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-px bg-border">
          {prevArticle ? (
            <Link
              to={`/insights/${prevArticle.slug}`}
              className="bg-white p-6 md:p-8 group hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Previous
              </div>
              <p className="font-black text-primary group-hover:text-accent transition-colors leading-snug">{prevArticle.title}</p>
            </Link>
          ) : <div className="bg-white" />}

          {nextArticle ? (
            <Link
              to={`/insights/${nextArticle.slug}`}
              className="bg-white p-6 md:p-8 group hover:bg-gray-50 transition-colors text-right"
            >
              <div className="flex items-center justify-end gap-2 text-xs text-muted-foreground mb-2">
                Next
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="font-black text-primary group-hover:text-accent transition-colors leading-snug">{nextArticle.title}</p>
            </Link>
          ) : <div className="bg-white" />}
        </div>
      </section>

      {/* Back to Insights */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to all insights
          </Link>
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
          <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">Take Action</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-3">
            Ready to <span className="text-accent">Transform Your Revenue?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 md:mb-10">
            Work with a team that has 30+ years of proven experience
          </p>
          <Button to="/contact">Get Free Assessment</Button>
        </div>
      </section>
    </div>
  );
}
