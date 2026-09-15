import { Link, useLocation } from 'react-router';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import sageLogo from '../../assets/brand/sage-logo.png';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Offerings', href: '/offerings' },
    { name: 'Industries', href: '/industries' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Insights', href: '/insights' },
    { name: 'About', href: '/about' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-border">
      <nav className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 sm:h-20 gap-4 sm:gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img src={sageLogo} alt="SAGE Professional Services" className="h-8 sm:h-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 ml-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-nav whitespace-nowrap transition-colors ${
                  isActive(item.href)
                    ? 'text-primary border-b-2 border-accent pb-1'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4 ml-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#1B6B3A] to-[#00A344] text-white font-semibold rounded-lg transition-all duration-300 hover:brightness-110 hover:shadow-lg group text-sm whitespace-nowrap"
            >
              Get AI ROI Assessment
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden ml-auto p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-secondary rounded-md transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-1 border-t border-border">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-medium min-h-[44px] flex items-center rounded-md transition-colors ${
                  isActive(item.href)
                    ? 'bg-secondary text-primary'
                    : 'text-muted-foreground hover:bg-secondary hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3 px-4">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-[#1B6B3A] to-[#00A344] text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:brightness-110 hover:shadow-lg"
              >
                Get AI ROI Assessment
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
