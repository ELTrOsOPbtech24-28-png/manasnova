import { useState } from 'react'
import { Brain, BookOpen, Target, Heart, X } from 'lucide-react'
import MeditationTimer from './MeditationTimer'
import MoodTracker from './MoodTracker'
import AIGuru from './AIGuru'
import HabitTracker from './HabitTracker'
import Journal from './Journal'

const FeaturesDemo = () => {
  const [activeDemo, setActiveDemo] = useState(null)

  const demos = [
    {
      id: 'meditation',
      icon: Brain,
      title: 'Sacred Meditation Timer 🧘',
      description: 'Divine guided meditation sessions with customizable durations',
      color: 'from-purple-500 to-purple-600',
      component: MeditationTimer,
      image: 'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?q=80&w=800'
    },
    {
      id: 'mood',
      icon: Heart,
      title: 'Spiritual Energy Tracker ✨',
      description: 'Track your divine emotional wellbeing and identify sacred patterns',
      color: 'from-blue-500 to-blue-600',
      component: MoodTracker,
      image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=800'
    },
    {
      id: 'aiguru',
      icon: Brain,
      title: 'AI Spiritual Guru Chat 🕉️',
      description: 'Get personalized divine guidance and enlightenment support 24/7',
      color: 'from-indigo-500 to-indigo-600',
      component: AIGuru,
      image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=800'
    },
    {
      id: 'habits',
      icon: Target,
      title: 'Sacred Habit Tracker 🙏',
      description: 'Build divine positive habits and track your spiritual progress',
      color: 'from-purple-500 to-blue-600',
      component: HabitTracker,
      image: 'https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?q=80&w=800'
    },
    {
      id: 'journal',
      icon: BookOpen,
      title: 'Spiritual Journal ✍️',
      description: 'Reflect and awaken with AI-powered divine prompts',
      color: 'from-purple-500 to-indigo-600',
      component: Journal,
      image: 'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?q=80&w=800'
    }
  ]

  const openDemo = (demo) => {
    setActiveDemo(demo)
  }

  const closeDemo = () => {
    setActiveDemo(null)
  }

  return (
    <section 
      id="features-demo" 
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.75), rgba(31, 41, 55, 0.85)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-2">
            Experience the
            <span className="text-purple-300"> Divine Power of ManasNova ✨</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-purple-100 max-w-2xl mx-auto px-4">
            Try our interactive sacred features and see how AI can transform your spiritual enlightenment journey 🕉️
          </p>
        </div>

        {/* Demo Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {demos.map((demo) => {
            const Icon = demo.icon
            return (
              <div
                key={demo.id}
                className="group bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden cursor-pointer hover:border-purple-400 hover:shadow-purple-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              >
                {/* Image Section - Top Half */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={demo.image} 
                    alt={demo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 left-4">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${demo.color} text-white shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>

                  {/* Decorative blur orb */}
                  <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${demo.color} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                </div>

                {/* Content Section - Bottom Half */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
                    {demo.title}
                  </h3>
                  <p className="text-base text-purple-200 mb-6 leading-relaxed">
                    {demo.description}
                  </p>

                  {/* Try it Now Button */}
                  <button 
                    onClick={() => openDemo(demo)}
                    className={`w-full py-4 bg-gradient-to-r ${demo.color} text-white text-base font-bold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105`}
                  >
                    Try it Now
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Modal for Demo */}
        {activeDemo && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in" onClick={closeDemo}>
            <div 
              className="bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden animate-scale-in shadow-2xl border border-white/50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 glass border-b border-white/30 px-8 py-5 flex items-center justify-between z-10 rounded-t-3xl">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${activeDemo.color} shadow-lg`}>
                    <activeDemo.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{activeDemo.title}</h3>
                    <p className="text-sm text-gray-600 mt-0.5">{activeDemo.description}</p>
                  </div>
                </div>
                <button
                  onClick={closeDemo}
                  className="p-3 hover:bg-gray-100 rounded-xl transition-all group"
                >
                  <X className="h-6 w-6 text-gray-600 group-hover:text-gray-900 group-hover:rotate-90 transition-all" />
                </button>
              </div>
              <div className="p-8 overflow-y-auto max-h-[calc(90vh-100px)]">
                <activeDemo.component />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default FeaturesDemo