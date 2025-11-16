import { useState } from 'react'
import { Mail, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <section 
      id="contact" 
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(167, 139, 250, 0.2), rgba(192, 132, 252, 0.25)), url('https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2070')`,
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
              Ready to Begin Your
              <span className="text-pink-600"> Spiritual Awakening? ✨</span>
            </h2>
            <p className="text-lg text-purple-800 mb-8 leading-relaxed drop-shadow-md font-medium">
              Join ManasNova today and experience divine AI-powered guidance for enlightenment, sacred focus, and spiritual self-growth. Begin your journey for free and transform your soul. 🕉️
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-purple-100">Divine AI Spiritual Guidance 🙏</h4>
                  <p className="text-purple-200">Your AI Guru adapts to your soul's unique path and divine energy</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-purple-100">Sacred Ancient Techniques</h4>
                  <p className="text-purple-200">Time-honored meditation and sacred mindfulness practices</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-purple-100">Track Your Spiritual Growth 🧘</h4>
                  <p className="text-purple-200">Monitor your enlightenment with insightful divine analytics</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-purple-100">Available 24/7</h4>
                  <p className="text-purple-200">Your spiritual companion is always guiding your soul</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="bg-gray-900/60 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border-2 border-purple-500/30 hover:border-purple-400/60 transition-all">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-4 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-2xl shadow-xl shadow-purple-400/50">
                <Mail className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-purple-100">Begin Your Journey 🕉️</h3>
                <p className="text-purple-200 mt-1">We'll guide your path shortly</p>
              </div>
            </div>

            {submitted ? (
              <div className="py-16 text-center animate-scale-in">
                <div className="relative inline-block mb-6">
                  <CheckCircle className="h-20 w-20 text-purple-400 mx-auto" />
                  <div className="absolute inset-0 bg-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                </div>
                <h4 className="text-3xl font-bold text-purple-100 mb-3">Namaste! 🙏</h4>
                <p className="text-purple-200 text-lg">We've received your divine message and will connect with your soul soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-semibold text-purple-200 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border-2 border-purple-500/30 bg-gray-800/50 text-purple-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-400 outline-none transition-all group-hover:border-purple-400/60 placeholder-purple-300/50"
                    placeholder="Your Sacred Name"
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-sm font-semibold text-purple-200 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border-2 border-purple-500/30 bg-gray-800/50 text-purple-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-400 outline-none transition-all group-hover:border-purple-400/60 placeholder-purple-300/50"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-semibold text-purple-200 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-5 py-4 border-2 border-purple-500/30 bg-gray-800/50 text-purple-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-400 outline-none transition-all resize-none group-hover:border-purple-400/60 placeholder-purple-300/50"
                    placeholder="Share your spiritual intentions and divine goals... 🙏"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-400/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3 relative overflow-hidden group"
                >
                  <span className="relative z-10">Begin Spiritual Awakening ✨</span>
                  <Send className="h-6 w-6 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
