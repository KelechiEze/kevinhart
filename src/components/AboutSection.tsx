import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const services = [
  "Comedy Specials Production",
  "Netflix & Streaming Films",
  "Brand Campaign Films",
  "Live Event Cinematography",
  "Documentary Storytelling",
  "Editorial & Celebrity Features",
  "Music & Tour Visuals",
  "Behind-the-Scenes Content",
  "Social Media Campaign Films",
  "Creative Direction for Talent"
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
      });

      gsap.fromTo(
        textRef.current,
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
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-white text-black min-h-screen flex flex-col justify-center px-6 md:px-24"
    >
      <div className="max-w-5xl">
        <p
          ref={textRef}
          className="font-display text-[6vw] md:text-[3.5vw] leading-[1.1] font-medium tracking-tight will-change-transform"
        >
          We are a cinematic production studio crafting visual stories for
          some of the world’s most recognized talent — from high-impact
          comedy specials and Netflix originals like <span className="font-semibold">Kevin Hart</span> projects,
          to branded films, documentaries, and live entertainment experiences.
          Every frame is built with intention, scale, and storytelling precision.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8 mt-24 border-t border-black/10 pt-12">
        {services.map((service, i) => (
          <div key={i} className="flex flex-col gap-2">
            <span className="font-display text-[11px] tracking-[0.1em] opacity-40 uppercase">
              Service {i + 1}
            </span>
            <span className="font-display text-[15px] font-semibold">
              {service}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}