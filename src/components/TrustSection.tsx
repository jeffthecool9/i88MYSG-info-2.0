
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ShieldCheck, CheckCircle2, AlertTriangle, X, Info, ArrowDown } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

export const TrustSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const checklistRef = React.useRef(null);
  const isInView = useInView(checklistRef, { amount: 0.5, once: false });
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  useEffect(() => {
    if (isInView) {
      checklistItems.forEach((_, idx) => {
        setTimeout(() => {
          setCheckedItems(prev => [...new Set([...prev, idx])]);
        }, idx * 400);
      });
    } else {
      setCheckedItems([]);
    }
  }, [isInView]);

  const checklistItems = [
    "Verify official domains listed here.",
    "Official agents never ask for OTP.",
    "No password sharing requested.",
    "Secure withdrawal protocol active."
  ];

  return (
    <div className="relative min-h-screen py-24 px-6 flex flex-col items-center bg-slate-950 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-blue-500/50 to-transparent" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl w-full"
      >
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase"
          >
            Before you click anything...
          </motion.h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Your safety is our priority. Fake pages are everywhere. Follow our official links to stay secure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000}>
            <div className="glass p-10 rounded-[3rem] border-l-[6px] border-l-blue-600 shadow-2xl relative overflow-hidden group" ref={checklistRef}>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all duration-700" />
              
              <div className="flex items-center gap-5 mb-10">
                <div className="w-16 h-16 bg-blue-600 rounded-[1.25rem] flex items-center justify-center text-white shadow-xl shadow-blue-900/40">
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black">Safety Checklist</h3>
                  <p className="text-blue-500 text-xs font-bold uppercase tracking-widest">Auto-Verification</p>
                </div>
              </div>
              
              <div className="space-y-6">
                {checklistItems.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    className="flex items-center gap-4 group/item"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={checkedItems.includes(idx) ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0.2 }}
                      className="flex-shrink-0"
                    >
                      <CheckCircle2 className={checkedItems.includes(idx) ? "text-blue-500" : "text-slate-600"} size={24} />
                    </motion.div>
                    <p className={`font-bold transition-all duration-500 ${checkedItems.includes(idx) ? "text-slate-200" : "text-slate-600"}`}>
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsModalOpen(true)}
                className="w-full mt-10 bg-white/5 border border-white/10 hover:border-blue-500 hover:bg-blue-500/10 py-5 rounded-2xl flex items-center justify-center gap-3 font-black transition-all group"
              >
                <Info size={18} className="text-blue-400" />
                <span>Security Guidelines</span>
              </motion.button>
            </div>
          </Tilt>

          <div className="flex flex-col gap-6">
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="p-8 bg-red-500/5 border border-red-500/20 rounded-[2.5rem] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10"><AlertTriangle size={60} /></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center text-white">
                  <AlertTriangle size={20} />
                </div>
                <h4 className="text-red-400 font-black text-xl">Scam Alert</h4>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Fake pages exist. They look just like us but are designed to steal your info. 
                <span className="block mt-2 font-bold text-slate-300">If the link isn't on this page, it is not official.</span>
              </p>
            </motion.div>

            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="p-8 bg-blue-500/5 border border-blue-500/20 rounded-[2.5rem] relative"
            >
              <h4 className="text-blue-400 font-black text-xl mb-4">The One Rule</h4>
              <p className="text-slate-300 text-lg italic font-medium leading-relaxed">
                "Official links only. Avoid fake pages."
              </p>
              <div className="mt-4 flex gap-1">
                <div className="w-8 h-1 bg-blue-500 rounded-full" />
                <div className="w-2 h-1 bg-blue-500/30 rounded-full" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-3 text-slate-500 font-black text-xs justify-center lg:justify-start mt-4 group cursor-pointer"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="tracking-[0.2em] group-hover:text-blue-400 transition-colors uppercase">See how it works</span>
              <ArrowDown size={16} className="group-hover:text-blue-400" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Security Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.9 }}
              className="relative glass w-full max-w-xl p-10 rounded-[3rem] border border-white/10 shadow-2xl"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-8 right-8 p-3 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="text-3xl font-black">Official Safety</h3>
              </div>

              <div className="space-y-6 mb-10">
                <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-slate-300 font-medium">We only contact you through the Facebook pages listed on this hub.</p>
                </div>
                <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-slate-300 font-medium italic underline">NEVER share your OTP or Login Password with anyone claiming to be staff.</p>
                </div>
                <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-slate-300 font-medium">Verify the domain URL in your browser before entering any sensitive info.</p>
                </div>
              </div>
              
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full bg-blue-600 hover:bg-blue-500 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-900/40"
              >
                I Understand, Stay Safe
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
