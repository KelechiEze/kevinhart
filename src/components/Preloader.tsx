import { motion } from "motion/react";
import { useEffect, useState, FC } from "react";

const letters = ["K", "E", "V", "I", "N", " ", "H", "A", "R", "T"];

export const Preloader: FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [showFull, setShowFull] = useState(false);

  useEffect(() => {
    // Stage 1: Staggered letters
    const timer1 = setTimeout(() => setShowFull(true), 2000);
    // Stage 2: Final transition out
    const timer2 = setTimeout(onComplete, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] } }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
    >
      <div className="relative flex flex-col items-center">
        {!showFull ? (
          <div className="flex flex-row items-center gap-1 flex-wrap justify-center px-4">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.5,
                  ease: [0.33, 1, 0.68, 1],
                }}
                className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold font-tight tracking-tighter"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white text-4xl sm:text-6xl lg:text-7xl font-bold font-tight tracking-tighter text-center px-4"
          >
            KEVIN HART
          </motion.div>
        )}
      </div>

      {/* Subtle background glow */}
      <motion.div 
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none"
      />
    </motion.div>
  );
};