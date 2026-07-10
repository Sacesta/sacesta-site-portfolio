import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ReviewsGlobe from '../components/ReviewsGlobe';
import { ChevronRight, Star, Quote } from 'lucide-react';
import { ClientReview } from '../data/reviews';
import { cn } from '../lib/utils';
import useIsMobile from '../hooks/useIsMobile';
import logoBlackOriginal from '../assets/logo-black-original.png';

export default function GlobeReviewsPage() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [hoveredReview, setHoveredReview] = useState<ClientReview | null>(null);
  const [selectedReview, setSelectedReview] = useState<ClientReview | null>(null);

  const activeReview = selectedReview || hoveredReview;

  const reviewLocationDisplay = (location: string) => {
    if (location.includes('(')) {
        return location.split('(')[1].replace(')', '');
    }
    return location;
  };

  return (
    <div className="h-screen w-full bg-slate-50 text-slate-800 overflow-hidden relative" onClick={() => setSelectedReview(null)}>
      {/* Top Left - Sacesta Logo */}
      <div className="absolute top-8 left-8 md:top-12 md:left-12 z-50">
        <a href="https://www.sacesta.com/" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
          <img src={logoBlackOriginal} alt="Sacesta Logo" className="h-6 md:h-8 w-auto object-contain" />
        </a>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none scale-150">
        <div className="absolute top-[10%] left-[10%] w-[30%] h-[30%] bg-indigo-500/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-purple-500/10 blur-[130px] rounded-full" />
      </div>

      {/* HEADER SECTION */}
      <div className="absolute top-8 md:top-12 left-0 w-full z-20 px-6 pointer-events-none">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
            <h1 className="text-3xl md:text-7xl font-black tracking-tighter mb-4 text-slate-900 pointer-events-auto">
                Trusted <span className="text-slate-800">Worldwide</span>
            </h1>
            <p className="text-slate-600 text-[10px] md:text-base max-w-2xl mx-auto leading-relaxed pointer-events-auto font-light">
                Exceptional technical solutions, trusted on every continent.
            </p>
        </motion.div>
      </div>

      {/* GLOBE SECTION - Maximized Size & Responsive Shift */}
      <div className={cn(
        "absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-1000",
        isMobile ? "translate-y-[45px]" : "translate-y-[80px]"
      )}>
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full aspect-square max-w-[min(98vh,100vw)] relative pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="absolute inset-0 bg-sky-500/5 blur-[150px] rounded-full -z-10" />
            <ReviewsGlobe 
              onHoverReview={setHoveredReview} 
              onClickReview={setSelectedReview}
              scale={isMobile ? 300 : 400} 
            />
        </motion.div>
      </div>

      {/* BOTTOM RIGHT - OUR WORKS BUTTON */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-50">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center"
        >
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    navigate('/portfolio');
                }}
                className="group relative flex items-center gap-4 px-8 py-4 bg-slate-900 text-white font-extrabold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(15,23,42,0.12)]"
            >
                <span className="relative z-10 text-base tracking-tight uppercase">Our Works</span>
                <div className="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-colors duration-300">
                    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                </div>
            </button>
            <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-slate-500 font-bold text-center">
                View Projects
            </p>
        </motion.div>
      </div>

      {/* BOTTOM LEFT - REVIEW CARD */}
      <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-50 pointer-events-none w-[320px] md:w-[420px]">
        <AnimatePresence mode="wait">
          {activeReview && (
            <motion.div
              key={activeReview.id}
              initial={{ opacity: 0, x: -30, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: -30, y: 30, filter: 'blur(10px)' }}
              transition={{ type: "spring", stiffness: 400, damping: 35 }}
              className={cn(
                "bg-white/80 backdrop-blur-3xl border p-7 rounded-[2.5rem] shadow-[0_30px_70px_rgba(15,23,42,0.06)] overflow-hidden relative pointer-events-auto",
                selectedReview ? "border-sky-500/50" : "border-slate-200"
              )}
              onClick={(e) => e.stopPropagation()}
            >
               {/* Decorative Gradient Glow */}
              <div className="absolute -top-15 -left-15 w-40 h-40 bg-sky-500/10 blur-[60px] rounded-full" />
              
              <div className="relative z-10">
                  <div className="flex items-center gap-5 mb-5">
                    <div className="p-4 bg-sky-50/80 rounded-2xl border border-sky-100">
                        <Quote className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                        <span className="text-[11px] font-black uppercase tracking-[0.3em] text-sky-600 block mb-1.5">
                            {reviewLocationDisplay(activeReview.location)}
                        </span>
                        <h4 className="text-slate-900 font-bold text-lg leading-none tracking-tighter">
                            {activeReview.clientName}
                        </h4>
                    </div>
                    {selectedReview && (
                        <button 
                            onClick={() => setSelectedReview(null)}
                            className="ml-auto text-gray-500 hover:text-slate-900 transition-colors"
                        >
                            <span className="text-xs uppercase tracking-widest font-black">Close</span>
                        </button>
                    )}
                  </div>
                  
                  <p className="text-slate-700 text-sm leading-relaxed mb-8 font-normal italic line-clamp-5">
                  "{activeReview.review}"
                  </p>
                  
                  <div className="flex flex-col gap-5 pt-5 border-t border-slate-200">
                      <div className="flex items-center justify-between">
                          <div className="flex flex-col">
                              <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-black mb-1.5">Project</span>
                              <span className="text-slate-800 text-xs font-semibold tracking-tight leading-tight">{activeReview.projectName}</span>
                          </div>
                          <div className="flex gap-0.5">
                              {[...Array(5)].map((_, i) => (
                              <Star
                                  key={i}
                                  className={cn(
                                  "w-3.5 h-3.5 text-sky-600 fill-sky-600 [filter:drop-shadow(0_0_5px_rgba(2,132,199,0.3))]"
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
