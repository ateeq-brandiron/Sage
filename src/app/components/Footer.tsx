import { Link } from 'react-router';
import { Linkedin, Mail } from 'lucide-react';
import sageLogo from '../../assets/brand/sage-logo.png';
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="mb-4">
              <img src={sageLogo} alt="SAGE Professional Services" className="h-8 md:h-10 brightness-0 invert" />
            </div>
            <p className="text-sm text-white/80 mb-6 max-w-md">
              200+ businesses. 30 years of trust. $1B+ delivered. Now we bring that same discipline to AI, as your fractional AI Officer.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="SAGE on LinkedIn" className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-200">
                <Linkedin className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a href="mailto:mitchell.chi@sageprosrvs.com" aria-label="Email SAGE" className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-200">
                <Mail className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
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
              <li><Link to="/offerings" className="text-sm text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block">Expower AI 365</Link></li>
              <li><Link to="/offerings" className="text-sm text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block">Aio</Link></li>
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
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-10 md:mt-12 pt-6 md:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <p className="text-sm text-white/60">
            © 2026 SAGE PRO.AI
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
