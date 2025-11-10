import { Brain, Heart, BookOpen, Target, Smile, TrendingUp } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Guru",
      description: "Your personal AI mentor that adapts to your moods and provides tailored guidance for mindfulness and growth.",
      color: "from-zen-500 to-zen-600",
      bgColor: "from-zen-50 to-zen-100"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Guided Meditation",
      description: "Personalized meditation sessions designed to help you find peace, reduce stress, and enhance focus.",
      color: "from-accent-500 to-accent-600",
      bgColor: "from-accent-50 to-accent-100"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Mindful Journaling",
      description: "Express your thoughts and emotions with AI-powered journaling prompts that encourage self-reflection.",
      color: "from-primary-600 to-zen-500",
      bgColor: "from-primary-50 to-zen-100"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Habit Tracking",
      description: "Build positive habits and track your progress toward a more balanced and productive lifestyle.",
      color: "from-calm-600 to-calm-500",
      bgColor: "from-calm-50 to-calm-100"
    },
    {
      icon: <Smile className="h-8 w-8" />,
      title: "Daily Motivation",
      description: "Start each day with personalized motivational messages that inspire positivity and resilience.",
      color: "from-primary-500 to-accent-600",
      bgColor: "from-primary-50 to-accent-100"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Progress Insights",
      description: "Visualize your wellness journey with insights and analytics that celebrate your growth.",
      color: "from-zen-500 to-primary-600",
      bgColor: "from-zen-50 to-primary-100"
    }
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for Your
            <span className="text-gradient"> Wellness Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover tools designed to help you cultivate mindfulness, boost productivity, and achieve self-growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border-2 border-gray-100 hover:border-zen-300 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Decorative corner */}
              <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${feature.color} rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
