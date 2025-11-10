import { UserPlus, MessageCircle, Target, TrendingUp } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserPlus className="h-8 w-8" />,
      title: "Sign Up & Set Sacred Intentions",
      description: "Create your account and share your spiritual goals and divine aspirations with us. 🙏",
      step: "01"
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Meet Your AI Spiritual Guru",
      description: "Connect with your personal AI mentor that understands your soul's journey and adapts to your unique spiritual path. ✨",
      step: "02"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Practice Daily Enlightenment",
      description: "Engage with personalized sacred meditations, spiritual journaling prompts, and consciousness-building exercises. 🧘",
      step: "03"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Track Your Spiritual Awakening",
      description: "Monitor your enlightenment progress, celebrate divine milestones, and continuously evolve your spiritual wellbeing. 🕉️",
      step: "04"
    }
  ]

  return (
    <section 
      id="how-it-works" 
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.73), rgba(31, 41, 55, 0.83)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your Path to
            <span className="text-purple-300"> Spiritual Enlightenment ✨</span>
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Begin your sacred spiritual journey in four divine steps 🕉️
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (hidden on mobile, shown on larger screens) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-blue-500/50 -z-10"></div>
              )}
              
              <div className="relative bg-gray-900/60 backdrop-blur-xl p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400/60 hover:shadow-2xl hover:shadow-purple-500/20 transition-all hover:-translate-y-2 cursor-pointer">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg shadow-purple-500/50">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="inline-flex p-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl mb-4 border border-purple-400/30">
                  <div className="text-purple-300">
                    {step.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-purple-100 mb-3">
                  {step.title}
                </h3>
                <p className="text-purple-200 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button 
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transform hover:-translate-y-1 transition"
          >
            Begin Your Spiritual Awakening Today 🙏
          </button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
