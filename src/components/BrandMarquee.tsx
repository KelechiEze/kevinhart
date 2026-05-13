'use client';

import { motion } from 'motion/react';

const brands = [
  { name: 'NIKE', logo: '/lack4.jpeg' },
  { name: 'HYUNDAI', logo: '/lack1.jpg' },
  { name: 'SAMSUNG', logo: '/lack2.jpeg' },
  { name: 'HULU', logo: '/lack3.jpeg' },
  { name: 'AMAZON', logo: '/zon.jpeg' },
  { name: 'peacock', logo: '/lack6.jpeg' },
];

export default function BrandMarquee() {
  return (
    <section className="bg-white py-8 relative overflow-hidden z-10">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-black/10" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black/10" />
      
      {/* "Ruler" Ticks */}
      <div className="absolute inset-0 pointer-events-none opacity-20 flex justify-between px-2">
        {Array.from({ length: 120 }).map((_, i) => (
          <div key={i} className={`w-[1px] bg-black ${i % 10 === 0 ? 'h-6' : i % 5 === 0 ? 'h-4' : 'h-2'}`} />
        ))}
      </div>

      {/* Left Fade */}
      <div className="absolute left-0 top-0 z-20 h-full w-40 bg-gradient-to-r from-white to-transparent" />

      {/* Right Fade */}
      <div className="absolute right-0 top-0 z-20 h-full w-40 bg-gradient-to-l from-white to-transparent" />

      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div 
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-16 px-12"
        >
          {[...brands, ...brands].map((brand, i) => (
            <img
              key={i}
              src={brand.logo}
              alt={brand.name}
              className="
                h-16 
                w-auto
                md:h-20 
                lg:h-24
                object-contain
                opacity-70
                hover:opacity-100
                transition-all
                duration-300
              "
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}