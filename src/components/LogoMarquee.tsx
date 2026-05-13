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
    <section className="bg-black py-12 relative overflow-hidden z-10">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20" />
      
      {/* "Ruler" Ticks */}
      <div className="absolute inset-0 pointer-events-none opacity-30 flex justify-between px-2">
        {Array.from({ length: 120 }).map((_, i) => (
          <div key={i} className={`w-[1px] bg-white ${i % 10 === 0 ? 'h-6' : i % 5 === 0 ? 'h-4' : 'h-2'}`} />
        ))}
      </div>

      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-24 px-12"
        >
          {brands.map((brand, i) => (
            <span key={i} className="text-white font-display text-4xl font-bold tracking-widest opacity-80">{brand}</span>
          ))}
          {brands.map((brand, i) => (
            <span key={`dup-${i}`} className="text-white font-display text-4xl font-bold tracking-widest opacity-80">{brand}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}