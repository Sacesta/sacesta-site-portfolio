import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ReviewsGlobe from '../components/ReviewsGlobe';
import { ChevronRight, Globe2, Star, Quote } from 'lucide-react';
import { ClientReview } from '../data/reviews';
import { cn } from '../lib/utils';

export default function GlobeReviewsPage() {
  const navigate = useNavigate();
  const [hoveredReview, setHoveredReview] = useState<ClientReview | null>(null);

  const reviewLocationDisplay = (location: string) => {
    if (location.includes('(')) {
        return location.split('(')[1].replace(')', '');
    }
    return location;
  };

  return (
    <div className="h-screen w-full bg-[#050505] text-white overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none scale-150">
        <div className="absolute top-[10%] left-[10%] w-[30%] h-[30%] bg-indigo-600/20 blur-[130px] rounded-full" />
        <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-purple-600/20 blur-[130px] rounded-full" />
      </div>

      {/* HEADER SECTION */}
      <div className="absolute top-8 md:top-12 left-0 w-full z-20 px-6 pointer-events-none">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-xl pointer-events-auto">
                <Globe2 className="w-3.5 h-3.5 text-indigo-400" />
                <span className="text-[9px] uppercase tracking-[0.4em] text-gray-300 font-bold">Global Presence</span>
            </div>
            <h1 className="text-3xl md:text-6xl font-black tracking-tighter mb-4 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent pointer-events-auto">
                Trusted <span className="text-white">Around the World</span>
            </h1>
            <p className="text-gray-400 text-[10px] md:text-sm max-w-lg mx-auto leading-relaxed pointer-events-auto font-light opacity-60">
                Partnering with visionaries across every continent to deliver exceptional technical solutions.
            </p>
        </motion.div>
      </div>

      {/* GLOBE SECTION - Maximized Size */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full aspect-square max-w-[min(85vh,95vw)] relative pointer-events-auto"
        >
            <div className="absolute inset-0 bg-indigo-500/5 blur-[150px] rounded-full -z-10" />
            <ReviewsGlobe onHoverReview={setHoveredReview} />
        </motion.div>
      </div>

      {/* BOTTOM RIGHT - OUR WORKS BUTTON */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-50">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-end"
        >
            <button
                onClick={() => navigate('/portfolio')}
                className="group relative flex items-center gap-4 px-8 py-4 bg-white text-black font-extrabold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(255,255,255,0.15)]"
            >
                <span className="relative z-10 text-base tracking-tight uppercase">Our Works</span>
                <div className="w-8 h-8 rounded-xl bg-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                </div>
            </button>
            <p className="mt-4 text-[9px] uppercase tracking-[0.4em] text-gray-500 font-black text-right mr-2 opacity-50">
                View Projects
            </p>
        </motion.div>
      </div>

      {/* BOTTOM LEFT - REVIEW CARD */}
      <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-50 pointer-events-none w-[320px] md:w-[420px]">
        <AnimatePresence mode="wait">
          {hoveredReview && (
            <motion.div
              key={hoveredReview.id}
              initial={{ opacity: 0, x: -30, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: -30, y: 30, filter: 'blur(10px)' }}
              transition={{ type: "spring", stiffness: 400, damping: 35 }}
              className="bg-[#0a0a0a]/60 backdrop-blur-3xl border border-white/10 p-7 rounded-[2.5rem] shadow-[0_30px_70px_rgba(0,0,0,0.7)] overflow-hidden relative"
            >
               {/* Decorative Gradient Glow */}
              <div className="absolute -top-15 -left-15 w-40 h-40 bg-indigo-500/15 blur-[60px] rounded-full" />
              
              <div className="relative z-10">
                  <div className="flex items-center gap-5 mb-5">
                    <div className="p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
                        <Quote className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                        <span className="text-[11px] font-black uppercase tracking-[0.3em] text-indigo-400 block mb-1.5">
                            {reviewLocationDisplay(hoveredReview.location)}
                        </span>
                        <h4 className="text-white font-bold text-lg leading-none tracking-tighter">
                            {hoveredReview.clientName}
                        </h4>
                    </div>
                  </div>
                  
                  <p className="text-gray-200 text-sm leading-relaxed mb-8 font-normal italic opacity-95 line-clamp-5">
                  "{hoveredReview.review}"
                  </p>
                  
                  <div className="flex flex-col gap-5 pt-5 border-t border-white/10">
                      <div className="flex items-center justify-between">
                          <div className="flex flex-col">
                              <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-black mb-1.5">Project</span>
                              <span className="text-white text-xs font-semibold tracking-tight leading-tight">{hoveredReview.projectName}</span>
                          </div>
                          <div className="flex gap-0.5">
                              {[...Array(5)].map((_, i) => (
                              <Star
                                  key={i}
                                  className={cn(
                                  "w-3.5 h-3.5 text-indigo-500 fill-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                                  )}
                              />
                              ))}
                          </div>
                      </div>
                  </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Scroll indicator for style */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 hidden lg:block">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-indigo-500 to-transparent" />
      </div>
    </div>
  );
}
