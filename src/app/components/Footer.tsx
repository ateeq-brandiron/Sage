import { Link } from 'react-router';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img src={sageLogo} alt="SAGE Professional Services" className="h-10 brightness-0 invert" />
            </div>
            <p className="text-small text-white/80 mb-6 max-w-md">
              200+ businesses. 30 years of trust. $1B+ delivered. Now we bring that same discipline to AI, as your fractional AI Officer.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:hello@sageprosrvs.com" className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h5 className="mb-4 text-white uppercase tracking-wider text-sm">Solutions</h5>
            <ul className="space-y-3">
              <li><Link to="/solutions" className="text-small text-white/70 hover:text-accent transition-colors">Revenue Strategy</Link></li>
              <li><Link to="/solutions" className="text-small text-white/70 hover:text-accent transition-colors">Demand Generation</Link></li>
              <li><Link to="/solutions" className="text-small text-white/70 hover:text-accent transition-colors">Sales Enablement</Link></li>
              <li><Link to="/solutions" className="text-small text-white/70 hover:text-accent transition-colors">AI RevGen Advisory</Link></li>
            </ul>
          </div>

          {/* Offerings */}
          <div>
            <h5 className="mb-4 text-white uppercase tracking-wider text-sm">Offerings</h5>
            <ul className="space-y-3">
              <li><Link to="/offerings" className="text-small text-white/70 hover:text-accent transition-colors">Bellwether Intel</Link></li>
              <li><Link to="/offerings" className="text-small text-white/70 hover:text-accent transition-colors">Expower AI 365</Link></li>
              <li><Link to="/offerings" className="text-small text-white/70 hover:text-accent transition-colors">Aio</Link></li>
              <li><Link to="/offerings" className="text-small text-white/70 hover:text-accent transition-colors">Boxsy</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h5 className="mb-4 text-white uppercase tracking-wider text-sm">Industries</h5>
            <ul className="space-y-3">
              <li><Link to="/industries" className="text-small text-white/70 hover:text-accent transition-colors">Technology</Link></li>
              <li><Link to="/industries" className="text-small text-white/70 hover:text-accent transition-colors">Manufacturing</Link></li>
              <li><Link to="/industries" className="text-small text-white/70 hover:text-accent transition-colors">Professional Services</Link></li>
              <li><Link to="/industries" className="text-small text-white/70 hover:text-accent transition-colors">Investors</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="mb-4 text-white uppercase tracking-wider text-sm">Company</h5>
            <ul className="space-y-3">
              <li><Link to="/case-studies" className="text-small text-white/70 hover:text-accent transition-colors">Case Studies</Link></li>
              <li><Link to="/insights" className="text-small text-white/70 hover:text-accent transition-colors">Insights</Link></li>
              <li><Link to="/about" className="text-small text-white/70 hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-small text-white/70 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-small text-white/60">
            © 2026 SAGE PRO.AI
          </p>
          <div className="flex items-center space-x-6">
            <Link to="/contact" className="text-small text-white/60 hover:text-accent transition-colors">Privacy</Link>
            <Link to="/contact" className="text-small text-white/60 hover:text-accent transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
