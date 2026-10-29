import { Link } from 'react-router';
import { Mail, Phone, Linkedin } from 'lucide-react';
import sageLogo from '../../assets/brand/logo-dark-bg.png';
import footerBg from '../../assets/brand/footer-bg.jpg';
import mitchellImg from '../../assets/team/mitchell-chi.svg';

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
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
          {/* Brand — left */}
          <div className="shrink-0 lg:max-w-xs">
            <div className="mb-4">
              <img src={sageLogo} alt="1SagePros.AI" className="h-8 md:h-10" />
            </div>
            <p className="text-sm text-white/80">
              200+ businesses. 30 years of trust. $1.2B+ delivered. Your master Revenue Value Added Reseller focused solely on AI.
            </p>
          </div>

          {/* Nav columns — right-aligned group */}
          <div className="flex flex-wrap gap-x-10 gap-y-8 lg:flex-nowrap lg:gap-x-12">
            {/* Solutions */}
            <div>
              <h5 className="mb-4 text-white uppercase tracking-wider text-xs sm:text-sm font-semibold">Solutions</h5>
              <ul className="space-y-3">
                <li><Link to="/solutions" className="text-sm text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block whitespace-nowrap">Revenue Strategy</Link></li>
                <li><Link to="/solutions" className="text-sm text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block whitespace-nowrap">Demand Generation</Link></li>
                <li><Link to="/solutions" className="text-sm text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block whitespace-nowrap">Sales Enablement</Link></li>
                <li><Link to="/solutions" className="text-sm text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block whitespace-nowrap">AI RevGen Advisory</Link></li>
              </ul>
            </div>

            {/* Offerings */}
            <div>
              <h5 className="mb-4 text-white uppercase tracking-wider text-xs sm:text-sm font-semibold">Offerings</h5>
              <ul className="space-y-3">
                <li><Link to="/offerings" className="text-sm text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block whitespace-nowrap">Bellwether Intel</Link></li>
                <li><Link to="/offerings" className="text-sm text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block whitespace-nowrap">Empower AI 365</Link></li>
                <li><Link to="/offerings" className="text-sm text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block whitespace-nowrap">AIO Advisors</Link></li>
                <li><Link to="/offerings" className="text-sm text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block whitespace-nowrap">Boxsy</Link></li>
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h5 className="mb-4 text-white uppercase tracking-wider text-xs sm:text-sm font-semibold">Industries</h5>
              <ul className="space-y-3">
                <li><Link to="/industries" className="text-sm text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block whitespace-nowrap">Technology</Link></li>
                <li><Link to="/industries" className="text-sm text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block whitespace-nowrap">Manufacturing</Link></li>
                <li><Link to="/industries" className="text-sm text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block whitespace-nowrap">Professional Services</Link></li>
                <li><Link to="/industries" className="text-sm text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block whitespace-nowrap">Investors</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h5 className="mb-4 text-white uppercase tracking-wider text-xs sm:text-sm font-semibold">Company</h5>
              <ul className="space-y-3">
                <li><Link to="/case-studies" className="text-sm text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block whitespace-nowrap">Case Studies</Link></li>
                <li><Link to="/insights" className="text-sm text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block whitespace-nowrap">Insights</Link></li>
                <li><Link to="/about" className="text-sm text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block whitespace-nowrap">About</Link></li>
                <li><Link to="/contact" className="text-sm text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block whitespace-nowrap">Contact</Link></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h5 className="mb-4 text-white uppercase tracking-wider text-xs sm:text-sm font-semibold">Connect</h5>
              <div className="flex items-center gap-3 mb-4">
                <img src={mitchellImg} alt="Mitchell Chi" className="w-10 h-10 rounded-full object-cover object-top" />
                <div>
                  <p className="text-sm font-bold text-white leading-tight">Mitchell Chi</p>
                  <p className="text-xs text-white/60 leading-tight">CEO & Co-Founder</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:mitchell.chi@1SagePros.AI" className="flex items-center gap-2 text-sm text-white/70 hover:text-accent transition-colors duration-200">
                    <Mail className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                    <span>mitchell.chi@1SagePros.AI</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+14844592900" className="flex items-center gap-2 text-sm text-white/70 hover:text-accent transition-colors duration-200">
                    <Phone className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                    <span>+1 (484) 459 2900</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/mitchellchi/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/70 hover:text-accent transition-colors duration-200">
                    <Linkedin className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                    <span>LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
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
