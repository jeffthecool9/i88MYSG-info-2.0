
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flame, Timer, TrendingUp, Sparkles } from 'lucide-react';

export const PromoSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ h: 12, m: 45, s: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 };
        if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 };
        if (prev.h > 0) return { ...prev, h: prev.h - 1, m: 59, s: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const promos = [
    { title: "Limited-time missions", tag: "NEW" },
    { title: "Weekend match rewards", tag: "HOT" },
    { title: "New season events incoming", tag: "SOON" }
  ];

  return (
    <div className="relative py-24 px-6 bg-slate-950 overflow-hidden">
      {/* Decorative Particles */}
      <div className="absolute top-1/4 left-10 text-yellow-500 opacity-20 animate-pulse"><Sparkles size={48} /></div>
      <div className="absolute bottom-1/4 right-10 text-blue-500 opacity-20 animate-bounce"><TrendingUp size={48} /></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 px-4 py-1.5 rounded-full font-bold text-sm mb-4">
            <Flame size={16} fill="currentColor" />
            HOT RIGHT NOW
          </div>
          <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase mb-4">Event Spotlight</h2>
          <p className="text-slate-400">Promos change fast. Follow official pages for the latest.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass p-10 rounded-[2.5rem] border-t-2 border-orange-500/50 relative overflow-hidden group"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all duration-500" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="space-y-6 w-full md:w-auto">
              {promos.map((p, i) => (
                <div key={i} className="flex items-center gap-4 group/item">
                  <div className="w-2 h-2 rounded-full bg-orange-500 group-hover/item:scale-150 transition-transform" />
                  <span className="text-lg font-bold text-white">{p.title}</span>
                  <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-md text-slate-400 font-black">{p.tag}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-4 bg-slate-900/50 p-8 rounded-3xl border border-white/5">
              <div className="flex items-center gap-2 text-orange-400 font-black text-sm uppercase">
                <Timer size={16} />
                Ending In
              </div>
              <div className="flex gap-4">
                {[timeLeft.h, timeLeft.m, timeLeft.s].map((unit, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="text-4xl font-black text-white w-14 h-14 bg-slate-950 rounded-xl flex items-center justify-center border border-white/10">
                      {unit.toString().padStart(2, '0')}
                    </div>
                    <span className="text-[10px] text-slate-500 mt-2 font-bold uppercase tracking-widest">
                      {['Hrs', 'Min', 'Sec'][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-10 pt-8 border-t border-white/5 text-center">
             <p className="text-xs text-slate-500 font-medium">Official links only. Avoid fake pages.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
