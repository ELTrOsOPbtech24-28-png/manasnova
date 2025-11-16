import { Users, Globe, Award, Zap } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: <Users className="h-6 w-6" />, value: "10K+", label: "Active Users" },
    { icon: <Globe className="h-6 w-6" />, value: "50+", label: "Countries" },
    { icon: <Award className="h-6 w-6" />, value: "95%", label: "Satisfaction" },
    { icon: <Zap className="h-6 w-6" />, value: "24/7", label: "AI Support" }
  ]

  return (
    <section 
      id="about" 
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(236, 72, 153, 0.15), rgba(219, 39, 119, 0.2)), url('https://images.unsplash.com/photo-1602192509154-0b900ee1f851?q=80&w=2070')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6 drop-shadow-lg">
              Your Sacred
              <span className="text-pink-600"> AI Spiritual Mentor</span>
            </h2>
            <p className="text-lg text-purple-900 mb-6 leading-relaxed drop-shadow-md font-medium">
              ManasNova combines the wisdom of ancient spiritual practices with cutting-edge AI technology to create a personalized enlightenment experience that adapts to your soul's unique journey.
            </p>
            <p className="text-lg text-purple-800 mb-6 leading-relaxed drop-shadow-md">
              Designed for students, professionals, and spiritual seekers, our platform helps you reduce stress, improve focus, and cultivate lasting inner peace and divine connection.
            </p>
            <p className="text-lg text-purple-800 mb-8 leading-relaxed drop-shadow-md">
              We believe that mindfulness should be sacred, accessible, and transformative. That's why we've created an AI Guru that understands your spiritual path, celebrates your awakening, and guides you toward enlightenment and self-realization.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg mb-2 shadow-lg">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-purple-900 drop-shadow">{stat.value}</div>
                  <div className="text-sm text-purple-700 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="bg-purple-900/40 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-purple-400/40">
              <div className="space-y-6">
                <div className="bg-gray-900/70 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition border border-purple-500/30 hover:border-purple-400/60">
                  <h4 className="font-semibold text-purple-100 mb-2">🧘‍♀️ Mindfulness & Sacred Meditation</h4>
                  <p className="text-purple-200 text-sm">Reduce stress and find divine inner peace</p>
                </div>
                <div className="bg-gray-900/70 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition ml-8 border border-purple-500/30 hover:border-purple-400/60">
                  <h4 className="font-semibold text-purple-100 mb-2">📝 Spiritual Journaling & Reflection</h4>
                  <p className="text-purple-200 text-sm">Express and understand your soul's journey</p>
                </div>
                <div className="bg-gray-900/70 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition border border-purple-500/30 hover:border-purple-400/60">
                  <h4 className="font-semibold text-purple-100 mb-2">🎯 Enlightenment Goal & Habit Tracking</h4>
                  <p className="text-purple-200 text-sm">Build lasting sacred positive habits</p>
                </div>
                <div className="bg-gray-900/70 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition ml-8 border border-purple-500/30 hover:border-purple-400/60">
                  <h4 className="font-semibold text-purple-100 mb-2">🤖 AI-Powered Spiritual Guidance ✨</h4>
                  <p className="text-purple-200 text-sm">Personalized divine support 24/7</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
