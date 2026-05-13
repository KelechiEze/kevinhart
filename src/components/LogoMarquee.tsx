'use client';

import { motion } from 'motion/react';

const brands = [
  'NETFLIX',
  'PEACOCK',
  'NIKE',
  'FANDUEL',
  'CHASE',
  'SAMSUNG',
  'HYUNDAI',
  "MCDONALD'S",
  'DRAFTKINGS',
  'MOUNTAIN DEW',
  'HARTBEAT',
  'AUDIBLE',
  'JPMORGAN',
  'AT&T',
  'HULU',
  'AMAZON',
];

export default function LogoMarquee() {
  return (
    <section className="relative z-10 overflow-hidden bg-black py-24">
      {/* Top Border */}
      <div className="absolute left-0 top-0 h-[1px] w-full bg-white/10" />

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-white/10" />

      {/* Ruler Tick Lines */}
      <div className="pointer-events-none absolute inset-0 flex justify-between px-2 opacity-20">
        {Array.from({ length: 120 }).map((_, i) => (
          <div
            key={i}
            className={`w-[1px] bg-white ${
              i % 10 === 0
                ? 'h-6'
                : i % 5 === 0
                ? 'h-4'
                : 'h-2'
            }`}
          />
        ))}
      </div>

      {/* Left Fade */}
      <div className="absolute left-0 top-0 z-20 h-full w-40 bg-gradient-to-r from-black to-transparent" />

      {/* Right Fade */}
      <div className="absolute right-0 top-0 z-20 h-full w-40 bg-gradient-to-l from-black to-transparent" />

      {/* Marquee Wrapper */}
      <div className="flex overflow-hidden whitespace-nowrap">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 75,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex min-w-max items-center gap-24 px-12"
        >
          {[...brands, ...brands].map((brand, index) => (
            <span
              key={index}
              className="
                text-4xl 
                md:text-5xl 
                lg:text-6xl
                font-black 
                uppercase 
                tracking-[0.35em] 
                text-white/80
              "
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}