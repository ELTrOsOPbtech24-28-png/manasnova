import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, LayoutDashboard } from 'lucide-react';

function NavbarExtreme({ onGetStarted, onViewDashboard }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Demo', href: '#features-demo' },
    { name: 'Meditations', href: '#meditation-types' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-sm'
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#hero"
              className="flex items-center space-x-2 group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-800">
                  ManasNova
                </span>
                <span className="text-xs text-gray-600 -mt-1">AI Wellness</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button 
                onClick={onViewDashboard}
                className="px-5 py-2 text-sm font-medium text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-all duration-200 flex items-center gap-2"
              >
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </button>
              <button className="px-5 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors duration-200">
                Sign In
              </button>
              <button 
                onClick={onGetStarted}
                className="px-5 py-2 text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-md transition-all duration-200"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Menu Content */}
        <div
          className={`absolute top-16 left-0 right-0 bg-white shadow-lg transition-transform duration-300 ${
            isOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 mt-4 border-t border-gray-200 space-y-2">
              <button 
                onClick={() => {
                  onViewDashboard();
                  setIsOpen(false);
                }}
                className="w-full px-4 py-3 text-base font-medium text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-colors duration-200 text-left flex items-center gap-2"
              >
                <LayoutDashboard className="w-5 h-5" />
                Dashboard
              </button>
              <button className="w-full px-4 py-3 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200 text-left">
                Sign In
              </button>
              <button 
                onClick={() => {
                  onGetStarted();
                  setIsOpen(false);
                }}
                className="w-full px-4 py-3 text-base font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-md transition-all duration-200"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarExtreme;
