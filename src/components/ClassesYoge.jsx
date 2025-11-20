import { Clock, Calendar, DollarSign, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

function ClassesYoge() {
  const classes = [
    {
      id: 1,
      title: 'Yoga Nidra Teacher Training',
      category: 'SKIN QUALITY',
      duration: '50 min / Session',
      date: '31-05-2025',
      price: '$240 / Month',
      image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=800',
      color: 'bg-teal-600'
    },
    {
      id: 2,
      title: 'Holistic Yoga Training',
      category: 'CONCENTRATION',
      duration: '55 min / Session',
      date: '22-11-2023',
      price: '$300 / Month',
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800',
      color: 'bg-teal-700'
    },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#5d9089' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-white/80 tracking-widest uppercase px-4 py-1 border border-white/30 rounded-full">
                OUR UPCOMING
              </span>
            </div>
            <div className="flex items-center gap-4">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
                Classes & Workshop
              </h2>
            </div>
          </div>

          <div className="hidden md:flex gap-2">
            <button className="p-2 border border-white/30 rounded text-white hover:bg-white hover:text-teal-600 transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-2 border border-white/30 rounded text-white hover:bg-white hover:text-teal-600 transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {classes.map((cls) => (
            <div 
              key={cls.id}
              className="group bg-white rounded-sm overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={cls.image} 
                  alt={cls.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1 bg-gray-900/80 backdrop-blur-sm text-white text-xs font-semibold tracking-wider rounded-full border border-white/20">
                    {cls.category}
                  </span>
                </div>
                {/* Arrow Button */}
                <button className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-golden-500 hover:text-white">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                  {cls.title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-teal-600" />
                    <span>{cls.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-teal-600" />
                    <span>{cls.date}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <span className="text-2xl font-bold text-golden-500">{cls.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClassesYoge;
