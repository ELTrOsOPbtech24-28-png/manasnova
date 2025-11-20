import { Users, Award, Heart, Target, ArrowRight } from 'lucide-react';

const features = [
  { icon: '🧘‍♀️', title: 'Changing rooms', description: 'Neque blandit consectetur viverra placerat ante are many variations of passages.' },
  { icon: '📚', title: 'Free lessons', description: 'Neque blandit consectetur viverra placerat ante are many variations of passages.' },
];

const benefits = [
  'Effective exercises',
  'Body condition improving',
  'Mood & feeling control',
  'Self-actualization increase',
  'Attention improves',
  'Learning efficiency improves',
];

function AboutYoge() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold text-teal-600 tracking-widest uppercase px-4 py-1 border border-teal-200 rounded-full">
                About Us
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
              Outstanding life about for through yoga
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-golden-100 flex items-center justify-center text-2xl">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image & Benefits */}
          <div>
            <div className="relative mb-8">
              <img 
                src="https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=800" 
                alt="Yoga Group" 
                className="w-full rounded-sm shadow-xl"
              />
            </div>

            {/* Meditation Practice Box */}
            <div className="bg-white rounded-sm shadow-lg p-8">
              <h4 className="text-sm font-semibold text-teal-600 tracking-widest uppercase mb-3">
                Meditation Practice
              </h4>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore.
              </p>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <button className="flex items-center gap-2 text-gray-900 font-semibold hover:text-teal-600 transition-colors group">
                READ MORE
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutYoge;
