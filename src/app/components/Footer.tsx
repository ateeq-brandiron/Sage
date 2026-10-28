import { Link } from 'react-router';
import { Mail, Phone } from 'lucide-react';
import sageLogo from '../../assets/brand/logo-dark-bg.png';
import footerBg from '../../assets/brand/footer-bg.jpg';

export function Footer() {
  return (
    <footer
      className="relative text-white border-t-4 border-accent overflow-hidden"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom center',
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-primary/40" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 md:gap-8 lg:gap-6">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="mb-4">
              <img src={sageLogo} alt="1SagePros.AI" className="h-8 md:h-10" />
            </div>
            <p className="text-sm text-white/80 max-w-md">
              200+ businesses. 30 years of trust. $1.2B+ delivered. Your master Revenue Value Added Reseller focused solely on AI.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h5 className="mb-4 text-white uppercase tracking-wider text-xs sm:text-sm">Solutions</h5>
            <ul className="space-y-3">
              <li><Link to="/solutions" className="text-sm text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block">Revenue Strategy</Link></li>
              <li><Link to="/solutions" className="text-sm text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block">Demand Generation</Link></li>
              <li><Link to="/solutions" className="text-sm text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block">Sales Enablement</Link></li>
              <li><Link to="/solutions" className="text-sm text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block">AI RevGen Advisory</Link></li>
            </ul>
          </div>

          {/* Offerings */}
          <div>
            <h5 className="mb-4 text-white uppercase tracking-wider text-xs sm:text-sm">Offerings</h5>
            <ul className="space-y-3">
              <li><Link to="/offerings" className="text-sm text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block">Bellwether Intel</Link></li>
              <li><Link to="/offerings" className="text-sm text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block">Empower AI 365</Link></li>
              <li><Link to="/offerings" className="text-sm text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block">AIO Advisors</Link></li>
              <li><Link to="/offerings" className="text-sm text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block">Boxsy</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h5 className="mb-4 text-white uppercase tracking-wider text-xs sm:text-sm">Industries</h5>
            <ul className="space-y-3">
              <li><Link to="/industries" className="text-sm text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block">Technology</Link></li>
              <li><Link to="/industries" className="text-sm text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block">Manufacturing</Link></li>
              <li><Link to="/industries" className="text-sm text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block">Professional Services</Link></li>
              <li><Link to="/industries" className="text-sm text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block">Investors</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="mb-4 text-white uppercase tracking-wider text-xs sm:text-sm">Company</h5>
            <ul className="space-y-3">
              <li><Link to="/case-studies" className="text-sm text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block">Case Studies</Link></li>
              <li><Link to="/insights" className="text-sm text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block">Insights</Link></li>
              <li><Link to="/about" className="text-sm text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block">About</Link></li>
              <li><Link to="/contact" className="text-sm text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h5 className="mb-4 text-white uppercase tracking-wider text-xs sm:text-sm">Connect</h5>
            <ul className="space-y-3">
              <li>
                <a href="mailto:mitchell.chi@1SagePros.AI" className="flex items-center gap-2 text-sm text-white/70 hover:text-accent transition-colors duration-200">
                  <Mail className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                  <span>mitchell.chi@1SagePros.AI</span>
                </a>
              </li>
              <li>
                <a href="tel:+14849991556" className="flex items-center gap-2 text-sm text-white/70 hover:text-accent transition-colors duration-200">
                  <Phone className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                  <span>(484) 999 1556</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-10 md:mt-12 pt-6 md:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <p className="text-sm text-white/60">
            © 2026 1SagePros.AI
          </p>
          <div className="flex items-center space-x-6">
            <Link to="/contact" className="text-sm text-white/60 hover:text-accent transition-colors">Privacy</Link>
            <Link to="/contact" className="text-sm text-white/60 hover:text-accent transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
