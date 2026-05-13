import { useLayoutEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';

const services = [
  "Brand Films", "Commercials & Ad Spots", "Event Cinematography", 
  "Editorial & Fashion Films", "Wedding Films", "Product Films",
  "Music Videos", "Documentary Shorts", "Social Media Visuals", "Creative Direction"
];

export default function ServicesDark() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the heading while the list scrolls?
      // Or pin the whole section for a reveal.
      // Let's pin the whole section and animate heading and list.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          scrub: true,
          pin: true,
          pinSpacing: true,
        }
      });

      tl.fromTo(headingRef.current,
        { opacity: 0, scale: 0.8, y: 100 },
        { opacity: 1, scale: 1, y: 0, duration: 1 },
        0
      );

      tl.fromTo(listRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.5 },
        0.5
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-[#0a0a0a] h-screen py-24 px-6 md:px-24 overflow-hidden flex flex-col justify-center">
      {/* Cinematic Grain/Noise Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")`,
          filter: 'contrast(150%) brightness(1000%)'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full overflow-hidden">
        <div className="flex justify-between items-start mb-12">
          <motion.span 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="font-display text-[10px] tracking-widest text-[#777] uppercase font-bold"
          >
            What we do
          </motion.span>
          <motion.span 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="font-display text-[10px] tracking-widest text-[#777] uppercase font-bold px-4 py-1 border border-[#333] rounded-full"
          >
            (10)
          </motion.span>
        </div>

        <h2 
           ref={headingRef}
           className="font-display text-white text-[15vw] md:text-[10vw] leading-[0.8] font-black uppercase tracking-tighter mb-12 will-change-transform"
        >
          Services.
        </h2>

        <div ref={listRef} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 will-change-transform max-h-[40vh] overflow-y-auto no-scrollbar">
          {services.map((service, i) => (
            <div 
              key={i}
              className="group border-b border-[#222] pb-4 flex justify-between items-end hover:border-white/40 transition-colors cursor-default"
            >
              <div className="flex flex-col gap-1">
                <span className="font-display text-[9px] tracking-widest text-[#444] uppercase group-hover:text-[#777] transition-colors">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-display text-white text-xl md:text-2xl font-medium tracking-tight group-hover:italic transition-all">{service}</h3>
              </div>
              <div 
                className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all"
              >
                <div className="w-3 h-px bg-white group-hover:bg-black rotate-45" />
                <div className="w-3 h-px bg-white group-hover:bg-black -rotate-45 absolute" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
