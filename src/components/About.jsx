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
        backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.75), rgba(31, 41, 55, 0.85)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Section Label */}
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/40"></div>
              <span className="section-title">HISTORY</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/40"></div>
            </div>

            <h2 className="heading-secondary mb-8">
              ABOUT OUR
              <span className="block mt-2">WELLNESS PLATFORM</span>
            </h2>

            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              ManasNova combines ancient mindfulness wisdom with cutting-edge AI technology to create a personalized wellness experience that adapts to your unique journey.
            </p>

            <p className="text-lg text-white/70 mb-6 leading-relaxed">
              Designed for students, professionals, and seekers, our platform helps you reduce stress, improve focus, and cultivate lasting inner peace.
            </p>

            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              We believe mindfulness should be accessible and transformative. That's why we've created an AI companion that understands your path and guides you toward self-realization.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Become A Member
              </button>
              <button className="btn-outline">
                Schedule Consultation
              </button>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="card p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-white/70 uppercase tracking-wider font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
