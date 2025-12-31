
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Wallet, Play, BadgeCheck, ArrowRight } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

export const FlowSection: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  const steps = [
    { icon: <Wallet size={32} />, title: "Deposit", desc: "Just a few taps to get started." },
    { icon: <Play size={32} />, title: "Enjoy", desc: "Experience premium sports & fun." },
    { icon: <BadgeCheck size={32} />, title: "Withdraw", desc: "Clear steps, fast processing." }
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen py-24 px-6 flex flex-col items-center justify-center">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-4">See how smooth it feels</h2>
          <p className="text-slate-400">Our process is designed for speed and simplicity.</p>
        </div>

        <div className="relative flex flex-col md:flex-row gap-8 items-start">
          {/* Animated connector line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2">
            <motion.div 
              style={{ scaleX: pathLength, transformOrigin: "left" }}
              className="w-full h-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.8)]" 
            />
          </div>

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="flex-1 w-full relative z-10"
            >
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
                <div className="glass p-8 rounded-[2rem] border-t border-white/20 hover:border-blue-500/50 transition-colors group">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/40">
                    {step.icon}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-blue-500 font-black text-sm">STEP 0{idx + 1}</span>
                    <ArrowRight size={14} className="text-slate-700" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 text-sm font-medium">Official links only. Avoid fake pages.</p>
        </motion.div>
      </div>
    </div>
  );
};
