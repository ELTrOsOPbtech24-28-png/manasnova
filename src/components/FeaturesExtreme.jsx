import { useEffect, useRef, useState } from 'react';
import { Brain, Heart, Target, Calendar, BookOpen, MessageCircle, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Guidance',
    description: 'Get personalized recommendations and insights powered by advanced AI to support your wellness journey.',
    color: 'from-primary-500 to-primary-600',
    gradient: 'from-primary-500/20 to-primary-600/20',
  },
  {
    icon: Heart,
    title: 'Guided Meditation',
    description: 'Access a library of calming meditations designed to reduce stress and enhance mindfulness.',
    color: 'from-zen-500 to-zen-600',
    gradient: 'from-zen-500/20 to-zen-600/20',
  },
  {
    icon: BookOpen,
    title: 'Daily Journaling',
    description: 'Reflect on your thoughts and emotions with guided prompts and track your personal growth.',
    color: 'from-accent-500 to-accent-600',
    gradient: 'from-accent-500/20 to-accent-600/20',
  },
  {
    icon: Target,
    title: 'Goal Setting',
    description: 'Set meaningful goals and track your progress with intelligent reminders and insights.',
    color: 'from-calm-500 to-calm-600',
    gradient: 'from-calm-500/20 to-calm-600/20',
  },
  {
    icon: Calendar,
    title: 'Habit Tracking',
    description: 'Build positive habits and break negative ones with our intuitive tracking system.',
    color: 'from-primary-500 to-zen-600',
    gradient: 'from-primary-500/20 to-zen-600/20',
  },
  {
    icon: MessageCircle,
    title: '24/7 AI Support',
    description: 'Chat with our AI wellness companion anytime you need guidance or support.',
    color: 'from-zen-500 to-accent-600',
    gradient: 'from-zen-500/20 to-accent-600/20',
  },
  {
    icon: Zap,
    title: 'Quick Relief',
    description: 'Access instant stress-relief techniques and breathing exercises when you need them most.',
    color: 'from-accent-500 to-calm-600',
    gradient: 'from-accent-500/20 to-calm-600/20',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your data is encrypted and private. We never share your personal information.',
    color: 'from-calm-500 to-primary-600',
    gradient: 'from-calm-500/20 to-primary-600/20',
  },
];

function FeaturesExtreme() {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const cardRef = useRef([]);

  useEffect(() => {
    cardRef.current.forEach((card) => {
      if (card && observerRef.current) {
        observerRef.current.observe(card);
      }
    });
  }, []);

  return (
    <section 
      id="features" 
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.15)), url('https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=2070')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-pink-300/30 to-purple-300/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-bl from-blue-300/30 to-indigo-300/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-purple-300/25 to-pink-300/25 rounded-full blur-3xl animate-tilt"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/90 backdrop-blur-xl rounded-full mb-4 animate-bounce-in border border-purple-300 shadow-lg">
            <Zap className="w-5 h-5 text-purple-600 animate-flicker" />
            <span className="text-sm font-semibold text-purple-700">✨ Sacred Features</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-purple-900">
            <span className="drop-shadow-lg">Everything You Need</span>
            <br />
            <span className="text-pink-700 drop-shadow-lg">For Your Spiritual Journey</span>
          </h2>
          
          <p className="text-xl text-purple-800 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Comprehensive tools and AI-powered wisdom designed to help you achieve inner peace, 
            reduce stress, and awaken your highest consciousness.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleCards.has(String(index));
            
            return (
              <div
                key={index}
                ref={(el) => (cardRef.current[index] = el)}
                data-index={index}
                className={`group relative perspective-1000 ${
                  isVisible ? 'animate-zoom-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow`}></div>
                
                {/* Main Card */}
                <div className="relative bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 hover-3d transform transition-all duration-500 border border-purple-500/30 group-hover:border-purple-400/60 hover:shadow-2xl overflow-hidden">
                  
                  {/* Animated Corner Accent */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${feature.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500 rounded-bl-full`}></div>
                  
                  {/* Icon Container */}
                  <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 animate-float`}>
                    <Icon className="w-8 h-8 text-white group-hover:scale-125 transition-transform duration-300" />
                    
                    {/* Icon Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-200 transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-purple-100 leading-relaxed group-hover:text-white transition-colors">
                    {feature.description}
                  </p>

                  {/* Hover Line Effect */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color} w-0 group-hover:w-full transition-all duration-500`}></div>

                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 animate-slide-up">
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-purple-900/40 backdrop-blur-xl rounded-3xl border border-purple-400/40 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-indigo-500 flex items-center justify-center shadow-xl group-hover:animate-heartbeat">
              <span className="text-5xl">🕉️</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Ready to Awaken Your Spirit?</h3>
            <p className="text-purple-100 max-w-md">Begin your sacred journey today with our comprehensive AI-powered spiritual platform.</p>
            <button className="group/btn mt-4 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-bold shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
              <span className="flex items-center gap-2">
                🙏 Begin Journey
                <Zap className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesExtreme;
