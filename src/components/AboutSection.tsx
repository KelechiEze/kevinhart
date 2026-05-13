import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const services = [
  "Brand Films", "Commercials & Ad Spots", "Event Cinematography", 
  "Editorial & Fashion Films", "Wedding Films", "Product Films",
  "Music Videos", "Documentary Shorts", "Social Media Visuals", "Creative Direction"
];

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
      });

      gsap.fromTo(textRef.current, 
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-white text-black min-h-screen flex flex-col justify-center px-6 md:px-24">
      <div className="max-w-5xl">
        <p 
          ref={textRef}
          className="font-display text-[6vw] md:text-[3.5vw] leading-[1.1] font-medium tracking-tight will-change-transform"
        >
          We're a videography studio driven by a love for cinematic storytelling and intentional filmmaking. 
          From brand films and commercials to weddings and editorial pieces, we bring a crafted, artful approach to every frame.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8 mt-24 border-t border-black/10 pt-12">
        {services.map((service, i) => (
          <div 
            key={i}
            className="flex flex-col gap-2 opacity-100"
          >
            <span className="font-display text-[11px] tracking-[0.1em] opacity-40 uppercase">Service {i + 1}</span>
            <span className="font-display text-[15px] font-semibold">{service}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
