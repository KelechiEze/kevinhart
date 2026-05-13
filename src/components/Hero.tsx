import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });

      tl.to(
        imageRef.current,
        {
          scale: 1.15,
          duration: 1,
        },
        0
      );

      tl.to(
        titleRef.current,
        {
          y: -80,
          opacity: 0,
          duration: 0.5,
        },
        0
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen h-[140vh] w-full flex items-center justify-center overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          ref={imageRef}
          src="/3im.png"
          alt="Hero background"
          className="w-full h-full object-cover brightness-[0.7] will-change-transform scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
      </div>

      {/* TITLE */}
      <div className="relative z-10 text-center px-4">
        <h1
          ref={titleRef}
          className="
            text-white
            font-display
            text-[9vw] md:text-[10vw]
            leading-[0.85]
            uppercase
            font-bold
            tracking-tighter
            will-change-transform
          "
        >
          Kevin Hart
        </h1>
      </div>
    </section>
  );
}