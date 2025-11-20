import { ArrowRight } from 'lucide-react';

function HeroYoge({ onGetStarted }) {
  const handleGetStarted = () => {
    if (onGetStarted) {
      onGetStarted();
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2070')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900/40 to-teal-700/30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20">
        <div className="max-w-2xl">
          {/* Practice Badge */}
          <div className="inline-flex items-center px-6 py-2 bg-white/90 backdrop-blur-sm rounded-full mb-8">
            <span className="text-sm font-medium text-gray-700 tracking-wide uppercase">Practice Positive Energy</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Heal yourself
            <br />
            through yoga
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-xl">
            We all need a little space to grow. Give yourself the space you need to find your inner you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={handleGetStarted}
              className="px-8 py-4 bg-golden-500 hover:bg-golden-600 text-white font-semibold rounded-sm transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator Dots */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3">
        <div className="w-2 h-2 rounded-full bg-white"></div>
        <div className="w-2 h-2 rounded-full bg-white/50"></div>
        <div className="w-2 h-2 rounded-full bg-white/50"></div>
      </div>
    </section>
  );
}

export default HeroYoge;
