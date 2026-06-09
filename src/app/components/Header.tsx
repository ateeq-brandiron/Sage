import { Link, useLocation } from 'react-router';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import sageLogo from '../../imports/sage-logo.png';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Industries', href: '/industries' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Insights', href: '/insights' },
    { name: 'About', href: '/about' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-border">
      <nav className="w-full px-4 sm:px-6 lg:px-8 pl-[calc(1rem+30px)] sm:pl-[calc(1.5rem+30px)] lg:pl-[calc(2rem+30px)]">
        <div className="flex items-center h-20 gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img src={sageLogo} alt="SAGE Professional Services" className="h-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 ml-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-nav transition-colors ${
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
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1B6B3A] to-[#00A344] text-white font-semibold rounded-lg transition-all duration-300 hover:brightness-110 hover:shadow-lg group"
            >
              Get Free Assessment
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-secondary"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 text-sm font-medium ${
                  isActive(item.href)
                    ? 'bg-secondary text-primary'
                    : 'text-muted-foreground hover:bg-secondary'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block mx-4 mt-4 px-6 py-2.5 bg-gradient-to-r from-[#1B6B3A] to-[#00A344] text-white text-center text-sm font-semibold rounded-lg transition-all duration-300 hover:brightness-110 hover:shadow-lg"
            >
              Book Revenue Evaluation
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
