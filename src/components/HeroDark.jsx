import { useState, useEffect } from 'react';
import { MapPin, Code, Award, Rocket, ChevronDown } from 'lucide-react';

function HeroDark() {
  const [text, setText] = useState('');
  const fullText = "I'm a Web Developer |";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const scrollToDemo = () => {
    const element = document.getElementById('features-demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-800"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 14, 20, 0.85), rgba(26, 35, 50, 0.9)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/60 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full bg-gradient-to-br from-primary-500/20 to-tech-500/20 backdrop-blur-sm flex items-center justify-center animate-float border border-primary-500/30">
          <span className="text-3xl">🌿</span>
        </div>
        <div className="absolute top-1/3 left-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-accent-500/20 to-calm-500/20 backdrop-blur-sm flex items-center justify-center animate-float border border-accent-500/30" style={{animationDelay: '1s'}}>
          <span className="text-3xl">🌊</span>
        </div>
        <div className="absolute bottom-1/3 right-1/3 w-16 h-16 rounded-full bg-gradient-to-br from-zen-500/20 to-primary-500/20 backdrop-blur-sm flex items-center justify-center animate-float border border-zen-500/30" style={{animationDelay: '2s'}}>
          <span className="text-2xl">⚛️</span>
        </div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-gradient-to-br from-tech-500/20 to-accent-500/20 backdrop-blur-sm flex items-center justify-center animate-float border border-tech-500/30" style={{animationDelay: '1.5s'}}>
          <span className="text-3xl">🔥</span>
        </div>
        <div className="absolute bottom-1/4 left-1/2 w-18 h-18 rounded-full bg-gradient-to-br from-primary-500/20 to-zen-500/20 backdrop-blur-sm flex items-center justify-center animate-float border border-primary-500/30" style={{animationDelay: '0.5s'}}>
          <span className="text-2xl">🐍</span>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="text-left space-y-8 animate-fade-in">
            {/* Greeting */}
            <div className="flex items-center gap-3 text-primary-400 animate-slide-right">
              <MapPin className="w-5 h-5" />
              <span className="font-mono text-lg">Hi There, I'm</span>
            </div>

            {/* Name */}
            <div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
                <span className="text-white">Manas</span>
                <span className="text-primary-400">Nova</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-white/90 mb-6 font-mono">
                {text}
                <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity text-primary-400`}>|</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Aspiring Wellness Platform powered by AI for mindfulness, meditation, and personal growth. 
              Strong foundation in mental health support, habit tracking, and guided meditation. 
              Analytical approach with background in wellness psychology. 
              Skilled in personalized coaching and emotional well-being. 
              Creative, adaptable, and eager to help users achieve balance through real-world wellness solutions.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl">
              <div className="bg-dark-700/50 backdrop-blur-xl border border-primary-500/30 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 hover:border-primary-500/60 group">
                <div className="flex flex-col items-center gap-2">
                  <Code className="w-8 h-8 text-primary-400 group-hover:animate-bounce" />
                  <div className="text-3xl font-bold text-primary-400">AI</div>
                  <div className="text-sm text-gray-400">Powered</div>
                  <div className="text-xs text-gray-500">(Wellness Coach)</div>
                </div>
              </div>

              <div className="bg-dark-700/50 backdrop-blur-xl border border-accent-500/30 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 hover:border-accent-500/60 group">
                <div className="flex flex-col items-center gap-2">
                  <Award className="w-8 h-8 text-accent-400 group-hover:animate-tada" />
                  <div className="text-3xl font-bold text-accent-400">5+</div>
                  <div className="text-sm text-gray-400">Features</div>
                </div>
              </div>

              <div className="bg-dark-700/50 backdrop-blur-xl border border-tech-500/30 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 hover:border-tech-500/60 group">
                <div className="flex flex-col items-center gap-2">
                  <Rocket className="w-8 h-8 text-tech-400 group-hover:animate-bounce" />
                  <div className="text-3xl font-bold text-tech-400">24/7</div>
                  <div className="text-sm text-gray-400">Available</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-6 pt-4">
              <button 
                onClick={scrollToDemo}
                className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-dark-900 font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/50 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Try Demo
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button 
                onClick={() => window.open('#', '_blank')}
                className="px-8 py-4 bg-transparent border-2 border-primary-500 text-primary-400 font-bold rounded-xl hover:bg-primary-500/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/30"
              >
                View Features
              </button>
            </div>
          </div>

          {/* Right Content - Orbital Animation */}
          <div className="relative hidden lg:flex items-center justify-center h-[600px] animate-zoom-in">
            {/* Center Avatar */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-3xl bg-gradient-to-br from-primary-500 to-accent-500 p-1 z-10 animate-float">
              <div className="w-full h-full rounded-3xl bg-dark-700 flex items-center justify-center text-6xl">
                🧘
              </div>
            </div>

            {/* Orbital Ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-2 border-primary-500/30 rounded-full animate-spin-slow"></div>

            {/* Orbiting Icons */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] animate-spin-slow">
              {[
                { icon: '🌿', color: 'from-primary-500 to-primary-600', angle: 0 },
                { icon: '🌊', color: 'from-tech-500 to-tech-600', angle: 72 },
                { icon: '⚛️', color: 'from-zen-500 to-zen-600', angle: 144 },
                { icon: '🔥', color: 'from-accent-500 to-accent-600', angle: 216 },
                { icon: '🐍', color: 'from-calm-500 to-calm-600', angle: 288 },
              ].map((item, index) => (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `rotate(${item.angle}deg) translateX(250px) rotate(-${item.angle}deg)`,
                  }}
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-2xl animate-float border-2 border-white/20`} style={{animationDelay: `${index * 0.5}s`}}>
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-gentle cursor-pointer" onClick={scrollToDemo}>
        <div className="flex flex-col items-center gap-2 text-primary-400">
          <ChevronDown className="w-8 h-8 animate-bounce" />
          <div className="w-1 h-12 bg-gradient-to-b from-primary-400 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

export default HeroDark;
