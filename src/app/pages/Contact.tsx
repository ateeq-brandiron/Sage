import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';

export function Contact() {
  return (
    <div className="min-h-screen pt-16 sm:pt-20 bg-white">
      {/* Hero */}
      <section className="bg-white flex items-center border-b border-border">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 items-stretch">
            {/* Left */}
            <div className="flex flex-col justify-center py-12 md:py-20 lg:py-24 px-4 sm:px-6 lg:pl-[calc(2rem+45px)]">
              <p className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">Get in Touch</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-5 sm:mb-6 leading-[1.05] sm:leading-[1.0]">Let's Build Your Revenue Engine</h1>
              <p className="text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-lg">Get a free RevenueStorm™ assessment, no commitment required</p>
            </div>
            {/* Right */}
            <div className="hidden lg:flex items-center justify-center bg-[#E8F5EE] lg:min-h-[60vh]">
              <div className="flex flex-col items-center justify-center gap-6">
                {[
                  { Icon: Mail, text: 'email@sage.com' },
                  { Icon: Phone, text: '+1 (555) 000-0000' },
                  { Icon: MapPin, text: 'North America' },
                ].map(({ Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-accent" />
                    <span className="text-muted-foreground">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-primary mb-6 md:mb-8">
                Book Your Assessment
              </h2>

              <form className="space-y-5 md:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-bold text-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      id="first-name"
                      type="text"
                      required
                      className="w-full px-4 py-3 border-2 border-border focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-bold text-foreground mb-2">
                      Last Name *
                    </label>
                    <input
                      id="last-name"
                      type="text"
                      required
                      className="w-full px-4 py-3 border-2 border-border focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="work-email" className="block text-sm font-bold text-foreground mb-2">
                    Work Email *
                  </label>
                  <input
                    id="work-email"
                    type="email"
                    required
                    className="w-full px-4 py-3 border-2 border-border focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-foreground mb-2">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full px-4 py-3 border-2 border-border focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-foreground mb-2">
                    Company *
                  </label>
                  <input
                    id="company"
                    type="text"
                    required
                    className="w-full px-4 py-3 border-2 border-border focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="annual-revenue" className="block text-sm font-bold text-foreground mb-2">
                    Annual Revenue
                  </label>
                  <select id="annual-revenue" className="w-full px-4 py-3 border-2 border-border focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors">
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
                  <label htmlFor="challenge" className="block text-sm font-bold text-foreground mb-2">
                    What's your biggest revenue challenge?
                  </label>
                  <textarea
                    id="challenge"
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-border focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors resize-none"
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
            <div className="space-y-10 md:space-y-12">
              {/* What You Get */}
              <div>
                <p className="text-xs uppercase tracking-widest text-accent mb-3 font-semibold">
                  Your Assessment
                </p>
                <h3 className="text-2xl font-black text-primary mb-2">What You'll <span className="text-accent">Receive</span></h3>
                <div className="w-24 h-1 bg-accent mb-6"></div>
                <ul className="space-y-3 md:space-y-4">
                  {[
                    'Revenue Audit',
                    'Sales Process Assessment',
                    'Pipeline Health Analysis',
                    'Marketing Effectiveness Review',
                    'Custom Growth Roadmap',
                    'Honest Recommendations',
                  ].map((item) => (
                    <li key={item} className="flex items-start group/item">
                      <CheckCircle2 className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300" />
                      <span className="text-lg text-foreground group-hover/item:text-accent transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-muted-foreground">
                    Zero obligation. We'll tell you exactly what's wrong and how to fix it. Whether you work with us or not.
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-6 pt-8 md:pt-12 border-t border-border">
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
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { value: '200+', label: 'Companies' },
              { value: '30+', label: 'Years' },
              { value: '37%', label: 'Avg Growth' },
              { value: '8X', label: 'Avg ROI' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-black text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
