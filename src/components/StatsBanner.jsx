import { Users, PlayCircle } from 'lucide-react';

function StatsBanner() {
  return (
    <section className="py-8 bg-gradient-to-r from-golden-400 to-golden-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Members Count */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100" 
                alt="Member" 
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" 
                alt="Member" 
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" 
                alt="Member" 
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
              />
            </div>
            <div>
              <p className="text-white text-sm font-medium">More than <span className="font-bold">9.5k members</span></p>
              <p className="text-white/90 text-xs">are connected with us</p>
            </div>
          </div>

          {/* Center: Video Icon */}
          <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 cursor-pointer hover:bg-white/30 transition-all">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <PlayCircle className="w-6 h-6 text-teal-600" />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-white animate-ping opacity-20"></div>
            </div>
            <p className="text-white text-sm font-medium hidden sm:block">
              Click on this video to check how<br />work with our clients
            </p>
          </div>

          {/* Right: Additional Members */}
          <div className="flex items-center gap-2">
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100" 
              alt="Instructor" 
              className="w-16 h-16 rounded-lg object-cover border-2 border-white"
            />
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" 
              alt="Instructor" 
              className="w-16 h-16 rounded-lg object-cover border-2 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsBanner;
