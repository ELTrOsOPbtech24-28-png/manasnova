import { ArrowRight, Sparkles, Brain, Heart, Target } from 'lucide-react'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToDemo = () => {
    const element = document.getElementById('features-demo')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-mesh min-h-screen flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-zen-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
      
      {/* Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-zen-400 to-primary-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full mb-8 animate-slide-down border border-white/30 hover:border-zen-300 transition-all group cursor-pointer">
            <Sparkles className="h-5 w-5 text-zen-600 animate-pulse group-hover:animate-spin" />
            <span className="text-sm font-semibold bg-gradient-to-r from-zen-600 via-primary-600 to-accent-600 bg-clip-text text-transparent">
              AI-Powered Wellness Platform
            </span>
            <div className="w-2 h-2 bg-calm-500 rounded-full animate-pulse"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 animate-fade-in leading-tight">
            <span className="block mb-2">AI for Mindfulness,</span>
            <span className="text-gradient animate-gradient block transform hover:scale-105 transition-transform duration-300">
              Focus, and Self-Growth
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up font-light">
            Stay <span className="font-semibold text-zen-600">calm</span>, <span className="font-semibold text-primary-600">focused</span>, and <span className="font-semibold text-accent-600">positive</span> with personalized guidance, meditation, journaling, and habit tracking powered by your AI Guru.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <button 
              onClick={scrollToDemo}
              className="group px-10 py-5 bg-gradient-to-r from-zen-600 via-primary-600 to-accent-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-zen-500/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-3 relative overflow-hidden"
            >
              <span className="relative z-10 text-lg">Try Interactive Demo</span>
              <ArrowRight className="h-6 w-6 ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent-600 via-zen-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button 
              onClick={scrollToContact}
              className="group px-10 py-5 glass border-2 border-gray-300 hover:border-zen-500 text-gray-700 hover:text-zen-700 rounded-full font-semibold hover:shadow-xl transition-all duration-300 text-lg"
            >
              Get Started Free
            </button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            <div className="glass px-5 py-3 rounded-full flex items-center space-x-2 border border-white/30 hover:border-zen-400 hover:shadow-lg transition-all group cursor-pointer">
              <div className="p-1.5 bg-gradient-to-r from-zen-500 to-zen-600 rounded-lg group-hover:scale-110 transition-transform">
                <Brain className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-zen-700">AI Guru</span>
            </div>
            <div className="glass px-5 py-3 rounded-full flex items-center space-x-2 border border-white/30 hover:border-accent-400 hover:shadow-lg transition-all group cursor-pointer">
              <div className="p-1.5 bg-gradient-to-r from-accent-500 to-accent-600 rounded-lg group-hover:scale-110 transition-transform">
                <Heart className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-accent-700">Mood Tracking</span>
            </div>
            <div className="glass px-5 py-3 rounded-full flex items-center space-x-2 border border-white/30 hover:border-primary-400 hover:shadow-lg transition-all group cursor-pointer">
              <div className="p-1.5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg group-hover:scale-110 transition-transform">
                <Target className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-primary-700">Habit Building</span>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="mt-20 relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative w-full max-w-6xl mx-auto">
              {/* Main Card */}
              <div className="glass rounded-3xl shadow-2xl p-10 md:p-14 border border-white/30 hover:border-white/50 transition-all duration-500">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Card 1 */}
                  <div className="group relative bg-gradient-to-br from-zen-500 to-zen-600 rounded-3xl p-8 text-white transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-zen-400 to-zen-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <Brain className="h-14 w-14 opacity-90" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">Meditation</h3>
                      <p className="text-sm text-white/90 leading-relaxed">Guided sessions for inner peace and clarity</p>
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  </div>
                  
                  {/* Card 2 */}
                  <div className="group relative bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-8 text-white transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <Heart className="h-14 w-14 opacity-90" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">Mood Tracker</h3>
                      <p className="text-sm text-white/90 leading-relaxed">Understand and nurture your emotions</p>
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  </div>
                  
                  {/* Card 3 */}
                  <div className="group relative bg-gradient-to-br from-accent-500 to-accent-600 rounded-3xl p-8 text-white transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-400 to-accent-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <Target className="h-14 w-14 opacity-90" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">Habit Tracker</h3>
                      <p className="text-sm text-white/90 leading-relaxed">Build lasting positive habits</p>
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Orbs - Enhanced */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-zen-400 to-zen-500 rounded-full blur-2xl opacity-60 animate-float shadow-2xl"></div>
              <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full blur-2xl opacity-60 animate-float shadow-2xl" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -left-12 w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full blur-2xl opacity-60 animate-float shadow-2xl" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/4 -right-10 w-16 h-16 bg-gradient-to-br from-calm-400 to-calm-500 rounded-full blur-2xl opacity-60 animate-float shadow-2xl" style={{ animationDelay: '3s' }}></div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-20 flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-12 text-gray-600">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zen-400 to-zen-600 border-3 border-white shadow-lg transform group-hover:scale-110 transition-transform"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-3 border-white shadow-lg transform group-hover:scale-110 transition-transform"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 border-3 border-white shadow-lg transform group-hover:scale-110 transition-transform"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-calm-400 to-calm-600 border-3 border-white shadow-lg transform group-hover:scale-110 transition-transform"></div>
              </div>
              <div className="text-left">
                <span className="block text-sm font-semibold text-gray-900">10,000+</span>
                <span className="block text-xs text-gray-600">Active Users</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 glass px-4 py-2 rounded-full border border-white/30">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              <span className="text-sm font-semibold text-gray-900">4.9/5</span>
            </div>
            <div className="flex items-center space-x-2 glass px-4 py-2 rounded-full border border-white/30">
              <span className="text-2xl">🌍</span>
              <span className="text-sm font-semibold text-gray-900">50+ Countries</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
