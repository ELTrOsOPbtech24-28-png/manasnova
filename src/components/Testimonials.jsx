import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Spiritual Seeker",
      image: "👩‍💻",
      rating: 5,
      text: "ManasNova has awakened my soul. The AI Spiritual Guru understands my divine path, whether I need sacred meditation or enlightenment guidance. I feel more connected to the universe! 🕉️"
    },
    {
      name: "Raj Patel",
      role: "Meditation Student",
      image: "👨‍🎓",
      rating: 5,
      text: "As a student on my spiritual journey, this app has been divine. The journaling feature helps me explore my consciousness, and the sacred habit tracker keeps my soul accountable. ✨"
    },
    {
      name: "Emily Chen",
      role: "Enlightenment Practitioner",
      image: "👩‍💼",
      rating: 5,
      text: "I've tried many spiritual apps, but ManasNova transcends them all. The divine personalization is incredible, adapting to my soul's energy. It's like having a spiritual master in my pocket! 🙏"
    },
    {
      name: "Michael Torres",
      role: "Mindful Entrepreneur",
      image: "👨‍💼",
      rating: 5,
      text: "The fusion of AI and sacred spirituality is enlightening. ManasNova helps me stay balanced in body and spirit while manifesting abundance. The divine guidance sets the perfect intention for my path. 🧘"
    },
    {
      name: "Priya Sharma",
      role: "Spiritual Guide",
      image: "👩‍🏫",
      rating: 5,
      text: "This divine platform has elevated my consciousness beautifully. The sacred meditation sessions are transcendent, and tracking my spiritual awakening keeps me motivated on my enlightenment journey. ✨"
    },
    {
      name: "David Kim",
      role: "Holistic Wellness Coach",
      image: "🏋️‍♂️",
      rating: 5,
      text: "ManasNova complements my physical practice with divine spiritual wisdom. Mental and spiritual wellness unite perfectly here, delivering a truly holistic path to enlightenment. 🕉️"
    }
  ]

  return (
    <section 
      id="testimonials" 
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Enlightened Souls
            <span className="text-purple-300"> Share Their Journey ✨</span>
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Join thousands of awakened souls who have transformed their spiritual path with ManasNova 🕉️
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-gray-900/60 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 border-2 border-purple-500/30 hover:border-purple-400/60 relative overflow-hidden transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-white p-4 rounded-2xl shadow-lg shadow-purple-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Quote className="h-7 w-7" />
              </div>

              <div className="relative z-10">
                {/* Rating */}
                <div className="flex space-x-1 mb-5 mt-8">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 transform group-hover:scale-110 transition-transform" style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-purple-100 mb-6 leading-relaxed text-base">
                  "{testimonial.text}"
                </p>

                {/* User Info */}
                <div className="flex items-center space-x-4 pt-4 border-t border-purple-500/30 group-hover:border-purple-400/60 transition-colors">
                  <div className="text-5xl transform group-hover:scale-110 transition-transform">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-purple-100 text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-purple-200">{testimonial.role}</p>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-3 bg-purple-900/50 backdrop-blur-xl px-8 py-4 rounded-full border border-purple-400/40 hover:border-purple-300/60 transition-all group cursor-pointer shadow-lg shadow-purple-500/20 hover:shadow-xl">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 border-3 border-purple-200 shadow-md transform group-hover:scale-110 transition-transform"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 border-3 border-blue-200 shadow-md transform group-hover:scale-110 transition-transform"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 border-3 border-indigo-200 shadow-md transform group-hover:scale-110 transition-transform"></div>
            </div>
            <span className="text-base text-purple-100 font-semibold">Join 10,000+ enlightened souls on their spiritual journey ✨</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
