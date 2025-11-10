import { useState, useEffect } from 'react'
import { Menu, X, Sparkles, ChevronDown } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass shadow-lg border-b border-white/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => scrollToSection('hero')}>
            <div className="relative">
              <div className="p-2 bg-gradient-to-r from-zen-600 via-primary-600 to-accent-600 rounded-xl group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-zen-500/50">
                <Sparkles className="h-6 w-6 text-white animate-pulse" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-zen-600 to-accent-600 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <span className="text-2xl font-bold text-gradient group-hover:scale-105 transition-transform">ManasNova</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <button onClick={() => scrollToSection('features-demo')} className="px-4 py-2 text-gray-700 hover:text-zen-600 transition-all font-medium rounded-lg hover:bg-zen-50 relative group">
              <span className="relative z-10">Try Demo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-zen-600 to-primary-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </button>
            <button onClick={() => scrollToSection('features')} className="px-4 py-2 text-gray-700 hover:text-zen-600 transition-all rounded-lg hover:bg-zen-50">
              Features
            </button>
            <button onClick={() => scrollToSection('about')} className="px-4 py-2 text-gray-700 hover:text-zen-600 transition-all rounded-lg hover:bg-zen-50">
              About
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="px-4 py-2 text-gray-700 hover:text-zen-600 transition-all rounded-lg hover:bg-zen-50">
              How It Works
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="px-4 py-2 text-gray-700 hover:text-zen-600 transition-all rounded-lg hover:bg-zen-50">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="ml-4 px-6 py-3 bg-gradient-to-r from-zen-600 via-primary-600 to-accent-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-zen-500/30 transform hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-600 via-zen-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-gray-700 hover:text-zen-600 hover:bg-zen-50 rounded-lg transition-all"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/20 animate-slide-down">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <button onClick={() => scrollToSection('features-demo')} className="block w-full text-left py-3 px-4 text-gray-700 hover:text-zen-600 font-medium hover:bg-zen-50 rounded-lg transition-all">
              Try Demo
            </button>
            <button onClick={() => scrollToSection('features')} className="block w-full text-left py-3 px-4 text-gray-700 hover:text-zen-600 hover:bg-zen-50 rounded-lg transition-all">
              Features
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-3 px-4 text-gray-700 hover:text-zen-600 hover:bg-zen-50 rounded-lg transition-all">
              About
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left py-3 px-4 text-gray-700 hover:text-zen-600 hover:bg-zen-50 rounded-lg transition-all">
              How It Works
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left py-3 px-4 text-gray-700 hover:text-zen-600 hover:bg-zen-50 rounded-lg transition-all">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="w-full mt-2 px-6 py-3 bg-gradient-to-r from-zen-600 via-primary-600 to-accent-600 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
