
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, ExternalLink, Copy, Check } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { FB_MY, FB_SG } from '../constants';
import { useToast } from './Toast';

export const OfficialLinks: React.FC = () => {
  const { addToast } = useToast();

  const handleCopy = (link: string) => {
    navigator.clipboard.writeText(link);
    addToast("Link copied to clipboard!");
  };

  const linkCards = [
    {
      title: "i88 MY Official",
      market: "Malaysia",
      url: FB_MY,
      color: "blue",
      description: "Join our primary Malaysia community. Stay updated with local matches and events."
    },
    {
      title: "i88 SG Official",
      market: "Singapore",
      url: FB_SG,
      color: "indigo",
      description: "The official home for our Singapore users. Rapid support and exclusive SG promos."
    }
  ];

  return (
    <div className="relative py-32 px-6 flex flex-col items-center justify-center bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_70%)]" />

      <div className="max-w-6xl w-full relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black italic mb-6 tracking-tighter"
          >
            OFFICIAL PAGES
          </motion.h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">Choose your market. Use only these links to stay official and secure.</p>
          <p className="text-blue-500/60 font-bold mt-2 text-sm">If a page isn’t listed here, ignore it.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {linkCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2 }}
            >
              <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} perspective={1500} scale={1.02}>
                <div className="glass p-10 rounded-[3rem] h-full border-t border-white/20 flex flex-col transition-all duration-300 hover:shadow-[0_0_50px_-15px_rgba(59,130,246,0.5)]">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-16 h-16 bg-blue-600 rounded-[1.5rem] flex items-center justify-center text-white blue-glow">
                      <Facebook size={32} />
                    </div>
                    <span className="text-xs font-black px-3 py-1 bg-white/5 border border-white/10 rounded-full text-slate-400 uppercase tracking-widest">
                      {card.market}
                    </span>
                  </div>

                  <h3 className="text-3xl font-black mb-4">{card.title}</h3>
                  <p className="text-slate-400 mb-10 leading-relaxed">{card.description}</p>

                  <div className="mt-auto flex flex-col gap-4">
                    <motion.a
                      href={card.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 text-lg transition-colors group"
                    >
                      Visit Official Page
                      <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.a>
                    
                    <button 
                      onClick={() => handleCopy(card.url)}
                      className="flex items-center justify-center gap-2 text-slate-500 hover:text-white font-bold text-xs transition-colors"
                    >
                      <Copy size={14} />
                      Copy Link
                    </button>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex flex-col items-center gap-4 text-center"
        >
          <div className="px-6 py-2 bg-slate-900 border border-white/5 rounded-full text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase">
            Official links only. Avoid fake pages.
          </div>
        </motion.div>
      </div>
    </div>
  );
};
