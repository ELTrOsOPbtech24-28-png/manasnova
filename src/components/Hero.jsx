import { ArrowRight, Sparkles, Brain, Heart, Target } from 'lucide-react'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToDemo = () => {
    const element = document.getElementById('features-demo')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="hero" 
      className="relative px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.75), rgba(31, 41, 55, 0.85)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="text-center pt-48 md:pt-56 lg:pt-64 pb-20 md:pb-24">
          {/* WELCOME Label with Lines */}
          <div className="flex items-center justify-center mb-6 md:mb-8 animate-fadeIn">
            <div className="h-px w-32 sm:w-48 md:w-64 bg-white/60"></div>
            <span className="px-6 sm:px-8 md:px-12 text-white/70 text-xs sm:text-sm md:text-base font-light tracking-[0.3em] uppercase whitespace-nowrap">WELCOME</span>
            <div className="h-px w-32 sm:w-48 md:w-64 bg-white/60"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight tracking-wide px-4 mb-6 md:mb-8 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            MANAS NOVA
          </h1>

          {/* Line below heading */}
          <div className="flex items-center justify-center mb-12 md:mb-16 animate-fadeIn" style={{ animationDelay: '0.15s' }}>
            <div className="h-px w-64 sm:w-80 md:w-[520px] bg-white/60"></div>
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-white/80 mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed animate-fadeIn font-light px-4 text-center" style={{ animationDelay: '0.2s' }}>
            Transform your wellness journey with AI-powered mindfulness and self-growth tools. Stay calm, focused, and positive through personalized meditation, journaling, and habit tracking designed to enhance your mental well-being.
          </p>

          {/* CTA Button */}
          <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <button 
              onClick={scrollToDemo}
              className="px-8 sm:px-10 py-3 border-2 border-pink-500 text-pink-500 text-xs sm:text-sm font-bold rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 uppercase tracking-wider"
            >
              Explore More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
