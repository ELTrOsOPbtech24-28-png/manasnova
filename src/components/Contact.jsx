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
        backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.75), rgba(31, 41, 55, 0.85)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/40"></div>
            <span className="section-title">CONTACT</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/40"></div>
          </div>
          <h2 className="heading-secondary mb-6">
            GET IN TOUCH
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your wellness journey? Contact us today and start your path to mindfulness.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          {/* Left Content - Info */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Begin Your
              <span className="block mt-2 text-white/80">Wellness Journey?</span>
            </h3>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Join ManasNova today and experience AI-powered guidance for mindfulness, focus, and self-growth. Begin your journey for free.
            </p>

            {/* Benefits List */}
            <div className="space-y-5">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg">Personalized AI Guidance</h4>
                  <p className="text-white/60">Your AI companion adapts to your unique wellness path</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg">Proven Techniques</h4>
                  <p className="text-white/60">Time-honored meditation and mindfulness practices</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg">Track Your Growth</h4>
                  <p className="text-white/60">Monitor progress with insightful analytics</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-lg">Available 24/7</h4>
                  <p className="text-white/60">Your wellness companion is always here to guide you</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="card p-10">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide">Send Message</h3>
                <p className="text-white/60 mt-1">We'll respond shortly</p>
              </div>
            </div>

            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">Thank You!</h4>
                <p className="text-white/70">We've received your message and will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white/80 mb-2 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border border-white/20 bg-white/5 text-white rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all placeholder-white/40 hover:bg-white/10"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
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
                    className="w-full px-5 py-4 border border-white/20 bg-white/5 text-white rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all placeholder-white/40 hover:bg-white/10"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white/80 mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-5 py-4 border border-white/20 bg-white/5 text-white rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all resize-none placeholder-white/40 hover:bg-white/10"
                    placeholder="Tell us about your wellness goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center space-x-3"
                >
                  <span>Send Message</span>
                  <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
