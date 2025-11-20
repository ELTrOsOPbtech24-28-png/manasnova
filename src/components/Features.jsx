import { Brain, Heart, BookOpen, Target, Smile, TrendingUp } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <Brain className="h-12 w-12" />,
      title: "AI Guru",
      description: "Your personal AI mentor that adapts to your moods and provides tailored guidance for mindfulness and growth.",
      image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=800",
      gradient: "from-purple-500/80 to-blue-500/80"
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Guided Meditation",
      description: "Personalized meditation sessions designed to help you find peace, reduce stress, and enhance focus.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800",
      gradient: "from-pink-500/80 to-rose-500/80"
    },
    {
      icon: <BookOpen className="h-12 w-12" />,
      title: "Mindful Journaling",
      description: "Express your thoughts and emotions with AI-powered journaling prompts that encourage self-reflection.",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800",
      gradient: "from-indigo-500/80 to-purple-500/80"
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: "Habit Tracking",
      description: "Build positive habits and track your progress toward a more balanced and productive lifestyle.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800",
      gradient: "from-teal-500/80 to-cyan-500/80"
    },
    {
      icon: <Smile className="h-12 w-12" />,
      title: "Daily Motivation",
      description: "Start each day with personalized motivational messages that inspire positivity and resilience.",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=800",
      gradient: "from-yellow-500/80 to-orange-500/80"
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Progress Insights",
      description: "Visualize your wellness journey with insights and analytics that celebrate your growth.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
      gradient: "from-green-500/80 to-emerald-500/80"
    }
  ]

  return (
    <section 
      id="features" 
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.75), rgba(31, 41, 55, 0.85)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Poseify Style */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/40"></div>
            <span className="section-title">SERVICES</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/40"></div>
          </div>
          <h2 className="heading-secondary mb-6">
            HOW WE HELP YOU
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Discover powerful tools designed to help you cultivate mindfulness, boost productivity, and achieve self-growth.
          </p>
        </div>

        {/* Features Grid - Compact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden group hover:shadow-[0_20px_50px_rgba(255,255,255,0.2)] hover:-translate-y-2 hover:border-white/40 transition-all duration-300"
            >
              {/* Image Section - Top */}
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>
                {/* Icon Overlay on Image */}
                <div className="absolute top-3 left-3 p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <div className="text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {feature.icon}
                  </div>
                </div>
              </div>

              {/* Content Section - Bottom */}
              <div className="p-5">
                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide group-hover:text-pink-400 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 leading-relaxed text-sm mb-3 group-hover:text-white/90 transition-colors duration-300 line-clamp-3">
                  {feature.description}
                </p>

                {/* Read More Button */}
                <button className="text-pink-400 hover:text-pink-300 font-semibold uppercase tracking-wider text-xs flex items-center space-x-1.5 group-hover:translate-x-1 transition-all duration-300">
                  <span>Learn More</span>
                  <span className="text-sm">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
