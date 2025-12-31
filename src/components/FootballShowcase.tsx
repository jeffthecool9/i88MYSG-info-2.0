
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Tilt from 'react-parallax-tilt';
import { MousePointer2, ShieldCheck, Zap, Users } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const FootballShowcase: React.FC = () => {
  const [showDragHint, setShowDragHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowDragHint(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    { 
      title: "Since 2016", 
      desc: "Built for long term. Reliable since the beginning.",
      icon: <ShieldCheck className="text-blue-400" size={24} />
    },
    { 
      title: "500k+ Users", 
      desc: "Largest community in MY & SG. Everyone's here.",
      icon: <Users className="text-blue-400" size={24} />
    },
    { 
      title: "Smooth Flow", 
      desc: "Simple and fast. Deposits and withdrawals in seconds.",
      icon: <Zap className="text-blue-400" size={24} />
    }
  ];

  return (
    <div className="relative min-h-[90vh] py-24 flex flex-col items-center justify-center overflow-hidden bg-slate-950">
      {/* Cinematic Football Animation Loop Background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-b from-blue-900/20 to-slate-950">
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        
        {/* Animated Stadium Grass / Perspective Lines */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-600/10 to-transparent skew-y-[-2deg] origin-bottom-left" />

        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          {/* Football Player Silhouette A */}
          <motion.path
            d="M150 450 Q170 420 190 450 T210 420"
            stroke="#3b82f6"
            strokeWidth="4"
            fill="none"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: [0, 50, 0], opacity: 0.4 }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Football Kick Loop Animation */}
          <g className="football-loop">
            {/* The Ball */}
            <motion.circle
              cx="400"
              cy="350"
              r="12"
              fill="white"
              filter="drop-shadow(0 0 10px rgba(255,255,255,0.8))"
              animate={{
                x: [0, 100, 0],
                y: [0, -40, 0],
                scale: [1, 1.2, 1],
                rotate: 720
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: [0.45, 0.05, 0.55, 0.95]
              }}
            />
            {/* Impact Pulse */}
            <motion.circle
              cx="400"
              cy="350"
              r="30"
              stroke="#3b82f6"
              strokeWidth="2"
              fill="none"
              animate={{
                scale: [0.5, 2],
                opacity: [0.8, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
            {/* Motion Blur Streaks */}
            <motion.path
              d="M380 350 L340 350"
              stroke="white"
              strokeWidth="1"
              opacity="0.2"
              animate={{
                x: [0, 100, 0],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </g>

          {/* Opponent B */}
          <motion.path
            d="M650 450 Q630 420 610 450 T590 420"
            stroke="#1e40af"
            strokeWidth="4"
            fill="none"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: [0, -30, 0], opacity: 0.3 }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-2 block">Premium Experience</span>
          <h2 className="text-4xl md:text-6xl font-black mb-4 italic uppercase tracking-tighter">
            Two Teams. <span className="text-blue-500">One Winner.</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">Official links only. Avoid fake pages.</p>
        </motion.div>

        <div className="relative">
          <AnimatePresence>
            {showDragHint && (
              <motion.div 
                exit={{ opacity: 0 }}
                className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/50 text-xs font-bold pointer-events-none z-20"
              >
                <MousePointer2 size={14} className="animate-bounce" />
                DRAG TO EXPLORE
              </motion.div>
            )}
          </AnimatePresence>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="!pb-16"
          >
            {features.map((feature, idx) => (
              <SwiperSlide key={idx}>
                <Tilt 
                  tiltMaxAngleX={15} 
                  tiltMaxAngleY={15} 
                  perspective={1200} 
                  scale={1.05}
                  className="h-full py-4"
                >
                  <div className="glass h-full p-10 rounded-[2.5rem] border-t-2 border-white/10 flex flex-col gap-6 group transition-all duration-500 hover:border-blue-500 hover:bg-white/5">
                    <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-500">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-black mb-2 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                      <p className="text-slate-400 leading-relaxed text-sm">{feature.desc}</p>
                    </div>
                    <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Verified Hub</span>
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/30" />
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/10" />
                      </div>
                    </div>
                  </div>
                </Tilt>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </div>
  );
};
