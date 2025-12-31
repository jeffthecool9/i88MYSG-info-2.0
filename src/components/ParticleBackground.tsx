
import React from 'react';
import { motion } from 'framer-motion';
// Fixed icon names: Clubs -> Club, Spades -> Spade
import { Coins, Dices, Club, Spade, Trophy } from 'lucide-react';

const icons = [
  { icon: Coins, color: "text-blue-500/10" },
  { icon: Dices, color: "text-blue-900/10" },
  { icon: Club, color: "text-slate-800/10" },
  { icon: Spade, color: "text-slate-700/10" },
  { icon: Trophy, color: "text-blue-400/10" }
];

export const ParticleBackground: React.FC = () => {
  const particles = Array.from({ length: 20 });

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
      {particles.map((_, i) => {
        const Icon = icons[i % icons.length].icon;
        const color = icons[i % icons.length].color;
        
        return (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              y: ["-10%", "110%"],
              x: [null, (Math.random() > 0.5 ? "10%" : "-10%")],
              opacity: [0, 1, 0],
              rotate: 360
            }}
            transition={{ 
              duration: Math.random() * 20 + 30, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * -20
            }}
            className={`absolute ${color}`}
          >
            <Icon size={Math.random() * 30 + 20} />
          </motion.div>
        );
      })}
    </div>
  );
};
