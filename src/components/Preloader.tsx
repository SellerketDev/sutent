import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Faster preloading simulation
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Variable speed for realism
        const increment = Math.random() * 10 + 2;
        return Math.min(prev + Math.round(increment), 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (count === 100) {
      // Slight delay before finishing
      const timer = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [count, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }} // Cinematic ease
    >
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
            SUT <span className="text-accent">Ent.</span>
          </h1>
          <p className="mt-2 text-sm tracking-[0.5em] text-gray-400 uppercase">
            Premium Influencer & KOL Agency
          </p>
        </motion.div>

        <div className="w-64 h-[1px] bg-gray-800 mx-auto overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-accent"
            initial={{ width: "0%" }}
            animate={{ width: `${count}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
        
        <div className="mt-4 font-mono text-accent text-sm">
          {count}%
        </div>
      </div>

      {/* Background subtle effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900/20 via-black to-black opacity-50" />
    </motion.div>
  );
}

