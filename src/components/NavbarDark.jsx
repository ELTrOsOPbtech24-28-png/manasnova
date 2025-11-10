import { useState, useEffect } from 'react';
import { Menu, X, Code, FileText } from 'lucide-react';

function NavbarDark() {
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
    { name: 'Home', href: '#hero' },
    { name: 'Features', href: '#features' },
    { name: 'Demo', href: '#features-demo' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark-800/95 backdrop-blur-xl shadow-2xl border-b border-primary-500/20'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <a
              href="#hero"
              className="flex items-center space-x-3 group cursor-pointer"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg blur-md opacity-50 group-hover:opacity-75 animate-pulse-slow"></div>
                <div className="relative font-mono text-2xl font-bold">
                  <span className="text-primary-400">&lt;</span>
                  <span className="text-white">ManasNova</span>
                  <span className="text-primary-400">/&gt;</span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="px-5 py-2.5 text-gray-300 hover:text-primary-400 font-medium rounded-lg hover:bg-dark-700/50 transition-all duration-300 relative group"
                >
                  <span className="relative z-10">{link.name}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="px-6 py-2.5 text-gray-300 font-semibold hover:text-primary-400 transition-colors duration-300">
                Sign In
              </button>
              <button className="px-6 py-2.5 bg-gradient-to-r from-primary-500 to-accent-500 text-dark-900 font-bold rounded-lg hover:shadow-xl hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105 border-2 border-primary-400/0 hover:border-primary-400/50">
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Get Started
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-dark-700/50 transition-all duration-300 group"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-primary-400 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="w-6 h-6 text-primary-400 group-hover:scale-110 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-dark-900/95 backdrop-blur-xl"
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Menu Content */}
        <div
          className={`absolute top-20 left-4 right-4 bg-dark-800/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-primary-500/30 transform transition-all duration-500 ${
            isOpen ? 'translate-y-0 scale-100' : '-translate-y-10 scale-95'
          }`}
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-6 py-4 text-lg font-semibold text-gray-300 hover:text-primary-400 rounded-xl hover:bg-dark-700/50 transition-all duration-300 hover:translate-x-2 group animate-slide-right border border-transparent hover:border-primary-500/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="flex items-center justify-between">
                  {link.name}
                  <Code className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-primary-400" />
                </span>
              </a>
            ))}

            <div className="pt-6 mt-6 border-t border-gray-700/50 space-y-3">
              <button className="w-full px-6 py-4 text-lg font-semibold text-gray-300 hover:text-primary-400 rounded-xl hover:bg-dark-700/50 transition-all duration-300">
                Sign In
              </button>
              <button className="w-full px-6 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-dark-900 font-bold rounded-xl hover:shadow-xl hover:shadow-primary-500/50 transition-all duration-300">
                <span className="flex items-center justify-center gap-2 text-lg">
                  <FileText className="w-5 h-5" />
                  Get Started
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarDark;
