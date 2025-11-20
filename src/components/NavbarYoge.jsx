import { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react';

function NavbarYoge() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-center">
                <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                  <path d="M20 5 L20 15 M20 15 C15 15 12 18 12 22 M20 15 C25 15 28 18 28 22" 
                    stroke={scrolled ? "#14b8a6" : "#ffffff"} strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="20" cy="30" r="3" fill={scrolled ? "#14b8a6" : "#ffffff"}/>
                  <path d="M15 25 Q20 20 25 25" stroke={scrolled ? "#14b8a6" : "#ffffff"} 
                    strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
              <span className={`text-2xl font-heading font-bold tracking-wide ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Yoge
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className={`font-medium hover:text-teal-500 transition-colors ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`font-medium hover:text-teal-500 transition-colors ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('meditation-types')}
              className={`font-medium hover:text-teal-500 transition-colors ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className={`font-medium hover:text-teal-500 transition-colors ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Classes
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`font-medium hover:text-teal-500 transition-colors ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Right Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className={`p-2 rounded-full transition-colors ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}>
              <Search className="w-5 h-5" />
            </button>
            <button className={`p-2 rounded-full transition-colors relative ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}>
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-4 h-4 bg-golden-500 rounded-full text-white text-xs flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-teal-500 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-teal-500 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('meditation-types')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-teal-500 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-teal-500 font-medium"
            >
              Classes
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-teal-500 font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavbarYoge;
