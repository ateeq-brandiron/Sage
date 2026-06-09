import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero */}
      <section
        className="relative py-32 min-h-[70vh] flex items-center border-b border-border"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/80" />

        <div className="w-full px-4 sm:px-6 lg:px-8 pl-[calc(1rem+45px)] sm:pl-[calc(1.5rem+45px)] lg:pl-[calc(2rem+45px)] relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-wider text-accent mb-6 font-semibold">
              Get Started
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Let's Build Your Revenue Engine
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Get a free RevenueStorm™ assessment—no commitment required
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto pl-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-black text-primary mb-8">
                Book Your Assessment
              </h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border-2 border-border focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border-2 border-border focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border-2 border-border focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border-2 border-border focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border-2 border-border focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    Annual Revenue
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-border focus:outline-none focus:border-accent transition-colors">
                    <option>Select range</option>
                    <option>Under $1M</option>
                    <option>$1M - $5M</option>
                    <option>$5M - $10M</option>
                    <option>$10M - $25M</option>
                    <option>$25M - $50M</option>
                    <option>$50M+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    What's your biggest revenue challenge?
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-border focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1B6B3A] to-[#00A344] text-white font-semibold rounded-lg transition-all duration-300 hover:brightness-110 hover:shadow-lg group"
                >
                  Get Free Assessment
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <p className="text-sm text-center text-muted-foreground">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-12">
              {/* What You Get */}
              <div>
                <p className="text-xs uppercase tracking-wider text-accent mb-3 font-semibold">
                  Your Assessment
                </p>
                <h3 className="text-2xl font-black text-primary mb-2">What You'll <span className="text-accent">Receive</span></h3>
                <div className="w-24 h-1 bg-accent mb-6"></div>
                <ul className="space-y-4">
                  {[
                    'Revenue Audit',
                    'Sales Process Assessment',
                    'Pipeline Health Analysis',
                    'Marketing Effectiveness Review',
                    'Custom Growth Roadmap',
                    'Honest Recommendations',
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-lg text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-muted-foreground">
                    Zero obligation. We'll tell you exactly what's wrong and how to fix it—whether you work with us or not.
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-6 pt-12 border-t border-border">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <div className="text-sm font-bold text-foreground mb-1">Email</div>
                    <a href="mailto:hello@sageprosrvs.com" className="text-muted-foreground hover:text-accent transition-colors">
                      hello@sageprosrvs.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <div className="text-sm font-bold text-foreground mb-1">Phone</div>
                    <a href="tel:+1-555-123-4567" className="text-muted-foreground hover:text-accent transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <div className="text-sm font-bold text-foreground mb-1">Location</div>
                    <p className="text-muted-foreground">
                      North America
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-border">
        <div className="max-w-7xl mx-auto pl-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Companies' },
              { value: '30+', label: 'Years' },
              { value: '37%', label: 'Avg Growth' },
              { value: '8X', label: 'Avg ROI' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-black text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
