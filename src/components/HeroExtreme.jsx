import { Brain, Heart, Target, ArrowRight } from 'lucide-react';

function HeroExtreme({ onGetStarted }) {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDemo = () => {
    const element = document.getElementById('features-demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetStarted = () => {
    if (onGetStarted) {
      onGetStarted();
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4"
      style={{
        backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.75), rgba(31, 41, 55, 0.85)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            Mindful. Focused.
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Enlightened.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-purple-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Your AI companion for mindfulness, meditation, and spiritual growth. 
            Discover inner peace and awaken your highest potential.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={handleGetStarted}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center gap-2 justify-center"
            >
              Begin Your Journey
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollToDemo}
              className="px-8 py-4 bg-white text-gray-700 border-2 border-gray-200 rounded-lg font-semibold hover:border-purple-300 hover:text-purple-600 transition-all duration-200"
            >
              Explore Features
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div 
            className="backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/60 hover:shadow-xl transition-all duration-200 relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.85), rgba(31, 41, 55, 0.9)), url('https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?q=80&w=800')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 mb-4">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-purple-100 mb-2">AI Wisdom</h3>
            <p className="text-purple-200 text-sm">Personalized guidance powered by advanced AI</p>
          </div>
          <div 
            className="backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/60 hover:shadow-xl transition-all duration-200 relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.85), rgba(31, 41, 55, 0.9)), url('https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=800')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 mb-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-purple-100 mb-2">Meditation</h3>
            <p className="text-purple-200 text-sm">Guided sessions for peace and clarity</p>
          </div>
          <div 
            className="backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/60 hover:shadow-xl transition-all duration-200 relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.85), rgba(31, 41, 55, 0.9)), url('https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=800')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-purple-100 mb-2">Growth Tracking</h3>
            <p className="text-purple-200 text-sm">Monitor your spiritual journey progress</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroExtreme;
