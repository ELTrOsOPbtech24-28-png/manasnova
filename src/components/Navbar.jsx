import { useState, useEffect } from 'react'
import { Menu, X, Sparkles, ChevronDown, LayoutDashboard } from 'lucide-react'

const Navbar = ({ onRegisterClick, onDashboardClick, hasUserData }) => {
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
          {/* Logo - Left Side */}
          <div className="flex items-center">
            <Sparkles className="h-7 w-7 text-pink-500 mr-2" />
            <span className="text-xl font-bold text-white tracking-wider">MANAS NOVA</span>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-2 absolute left-1/2 transform -translate-x-1/2">
            <button onClick={() => scrollToSection('features-demo')} className="px-5 py-2 text-white font-semibold text-lg hover:text-pink-500 transition-all rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 whitespace-nowrap">Try Demo</button>
            <button onClick={() => scrollToSection('features')} className="px-5 py-2 text-white font-semibold text-lg hover:text-pink-500 transition-all rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400">Features</button>
            <button onClick={() => scrollToSection('about')} className="px-5 py-2 text-white font-semibold text-lg hover:text-pink-500 transition-all rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400">About</button>
            <button onClick={() => scrollToSection('how-it-works')} className="px-5 py-2 text-white font-semibold text-lg hover:text-pink-500 transition-all rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 whitespace-nowrap">How It Works</button>
            <button onClick={() => scrollToSection('testimonials')} className="px-5 py-2 text-white font-semibold text-lg hover:text-pink-500 transition-all rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400">Testimonials</button>
            {hasUserData && <button onClick={onDashboardClick} className="px-5 py-2 text-white font-semibold text-lg hover:text-pink-500 transition-all rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400">Dashboard</button>}
          </div>

          {/* Register Button - Right Side */}
          <div className="hidden md:block">
            <button 
              onClick={onRegisterClick}
              className="px-8 py-3 border-2 border-pink-500 text-pink-500 font-bold rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 uppercase tracking-wide"
            >
              {hasUserData ? 'My Account' : 'Register Now'}
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-white hover:text-pink-500 transition-all"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-2xl bg-gray-900/95 border-t border-pink-500/30 shadow-2xl shadow-pink-500/20 animate-slide-down">
          <div className="px-6 pt-6 pb-6 space-y-3">
            {/* Menu Items */}
            <button 
              onClick={() => scrollToSection('features-demo')} 
              className="block w-full text-left py-4 px-5 text-white text-lg font-semibold hover:text-pink-400 bg-white/5 hover:bg-pink-500/20 rounded-xl transition-all duration-300 border border-white/10 hover:border-pink-500/50"
            >
              🎯 Try Demo
            </button>
            <button 
              onClick={() => scrollToSection('features')} 
              className="block w-full text-left py-4 px-5 text-white text-lg font-semibold hover:text-pink-400 bg-white/5 hover:bg-pink-500/20 rounded-xl transition-all duration-300 border border-white/10 hover:border-pink-500/50"
            >
              ✨ Features
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left py-4 px-5 text-white text-lg font-semibold hover:text-pink-400 bg-white/5 hover:bg-pink-500/20 rounded-xl transition-all duration-300 border border-white/10 hover:border-pink-500/50"
            >
              📖 About
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="block w-full text-left py-4 px-5 text-white text-lg font-semibold hover:text-pink-400 bg-white/5 hover:bg-pink-500/20 rounded-xl transition-all duration-300 border border-white/10 hover:border-pink-500/50"
            >
              🔮 How It Works
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="block w-full text-left py-4 px-5 text-white text-lg font-semibold hover:text-pink-400 bg-white/5 hover:bg-pink-500/20 rounded-xl transition-all duration-300 border border-white/10 hover:border-pink-500/50"
            >
              💬 Testimonials
            </button>
            {hasUserData && (
              <button 
                onClick={onDashboardClick} 
                className="block w-full text-left py-4 px-5 text-white text-lg font-semibold hover:text-pink-400 bg-white/5 hover:bg-pink-500/20 rounded-xl transition-all duration-300 border border-white/10 hover:border-pink-500/50"
              >
                📊 Dashboard
              </button>
            )}
            
            {/* Divider */}
            <div className="border-t border-white/20 my-4"></div>
            
            {/* Register Button */}
            <button 
              onClick={onRegisterClick}
              className="w-full px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-lg font-bold rounded-xl hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 uppercase tracking-wide"
            >
              {hasUserData ? '👤 My Account' : '🚀 Register Now'}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
