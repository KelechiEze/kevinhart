import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function BottomBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  return (
    <div 
      className="fixed bottom-0 left-0 w-full z-50 flex justify-between items-center px-6 py-8 md:px-12 pointer-events-none"
    >
      <div className="flex gap-12 pointer-events-auto">
        <span className="font-display uppercase text-[10px] tracking-[0.2em] opacity-60">Creative Production Studio</span>
      </div>
      
      <div className="flex flex-col items-center pointer-events-auto">
        <span className="font-display uppercase text-[10px] tracking-[0.2em] opacity-60">Los Angeles, California</span>
      </div>

      <div className="flex gap-12 pointer-events-auto">
        <span className="font-display uppercase text-[10px] tracking-[0.2em] opacity-60">{formatTime(time)} PST</span>
      </div>
    </div>
  );
}
