
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, Facebook, Twitter, Instagram, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="font-bold text-lg">i</span>
              </div>
              <span className="font-black text-2xl tracking-tighter">88</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
              Official trust hub for i88 users in Malaysia and Singapore. 
              Always verify your links through this portal.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5, color: '#3b82f6' }}
                  className="p-2 bg-slate-900 rounded-lg text-slate-500 cursor-not-allowed"
                >
                  <Icon size={20} />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Resources</h4>
              <ul className="space-y-2 text-slate-500 text-sm">
                <li className="hover:text-blue-500 transition-colors cursor-pointer" onClick={() => document.getElementById('safety')?.scrollIntoView()}>Safety Guide</li>
                <li className="hover:text-blue-500 transition-colors cursor-pointer" onClick={() => document.getElementById('official')?.scrollIntoView()}>Official Links</li>
                <li className="hover:text-blue-500 transition-colors cursor-pointer" onClick={() => document.getElementById('showcase')?.scrollIntoView()}>Why i88?</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Trust</h4>
              <ul className="space-y-2 text-slate-500 text-sm">
                <li className="flex items-center gap-2"><ShieldCheck size={14} className="text-blue-500" /> Verified 2024</li>
                <li>MY & SG Region</li>
                <li>Official Hub</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end justify-center">
             <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white mb-4 blue-glow transition-all"
            >
              <ChevronUp size={24} />
            </motion.button>
            <span className="text-[10px] font-black tracking-widest text-slate-600 uppercase">Back to top</span>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">Play Responsibly. 18+ Only.</p>
            <p className="text-slate-700 text-[10px]">© 2024 i88 Official. All rights reserved.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="px-4 py-1.5 rounded-full bg-slate-900/50 border border-white/5 text-slate-600 text-[10px] font-black uppercase tracking-widest">
              Official pages only
            </div>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
};
