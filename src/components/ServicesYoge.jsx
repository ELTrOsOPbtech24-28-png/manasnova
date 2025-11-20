import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

function ServicesYoge() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      category: 'DJ YOGA TRAINER',
      title: 'Ardha Chakrasana',
      description: 'Experience the transformative power of yoga through personalized guidance.',
      icon: '🧘‍♀️',
    },
    {
      category: 'MANTRA YOGA TRAINER',
      title: 'Baddha Konasana',
      description: 'Connect mind, body and spirit through ancient mantra practices.',
      icon: '🧘',
    },
    {
      category: 'DJ YOGA TRAINER',
      title: 'Ashtanga Namaskara',
      description: 'Build strength and flexibility with dynamic yoga sequences.',
      icon: '🙏',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-sm font-semibold text-teal-600 tracking-widest uppercase px-4 py-1 border border-teal-200 rounded-full">
              Service
            </span>
          </div>
          <div className="flex items-center justify-center gap-4 mt-8">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900">
              Our main services
            </h2>
            <div className="flex gap-2">
              <button 
                onClick={prevSlide}
                className="p-2 border border-gray-300 rounded hover:bg-teal-500 hover:border-teal-500 hover:text-white transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="p-2 border border-gray-300 rounded hover:bg-teal-500 hover:border-teal-500 hover:text-white transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Icon Background */}
              <div className="p-8 pb-0">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-semibold text-gray-600 tracking-widest uppercase">
                    {service.category}
                  </span>
                  <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-golden-500 hover:border-golden-500 hover:text-white transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Yoga Pose Illustration */}
                <div className="flex justify-center mb-6">
                  <div className="text-6xl">{service.icon}</div>
                </div>
              </div>

              <div className="p-8 pt-0">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-teal-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="px-6 py-3 bg-golden-500 text-white font-semibold rounded-sm hover:bg-golden-600 transition-all flex items-center gap-2">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesYoge;
