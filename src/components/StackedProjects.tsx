'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'ROAST OF KEVIN HART',
    year: '2026',
    type: 'Netflix',
    media: '/2ndvid.mp4',
  },
  {
    id: 2,
    title: 'AFTER THE QUIET',
    year: '2023',
    type: 'Short Film',
    media: '/1im.png',
  },
  {
    id: 3,
    title: 'ECHOES OF US',
    year: '2023',
    type: 'Wedding Film',
    media: '/1stvid.mp4',
  },
  {
    id: 4,
    title: 'STILL BREATHING',
    year: '2025',
    type: 'Brand Film',
    media: '/2im.png',
  },
  {
    id: 5,
    title: 'SCENT & SILENCE',
    year: '2022',
    type: 'Commercial',
    media:
      'https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&q=80&w=2000',
  },
  {
    id: 6,
    title: 'THE LIGHT BETWEEN',
    year: '2025',
    type: 'Short Film',
    media:
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=2000',
  },
];

export default function StackedProjects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(
        '.project-panel'
      ) as HTMLElement[];

      panels.forEach((panel, i) => {
        const isLast = i === panels.length - 1;

        ScrollTrigger.create({
          trigger: panel,
          start: 'top top',
          pin: true,
          pinSpacing: false,
          snap: isLast ? undefined : 0,
        });

        const media = panel.querySelector('.project-media');
        const content = panel.querySelector('.project-content');

        gsap
          .timeline({
            scrollTrigger: {
              trigger: panel,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          })
          .to(
            media,
            {
              scale: 1.1,
              opacity: 0.5,
            },
            0
          )
          .to(
            content,
            {
              y: -100,
              opacity: 0,
            },
            0
          );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const isVideo = (src: string) => {
    return src.endsWith('.mp4') || src.endsWith('.webm');
  };

  return (
    <div ref={containerRef} className="relative z-20">
      {projects.map((project) => (
        <section
          key={project.id}
          className="project-panel relative h-screen w-full overflow-hidden"
        >
          {/* Background Media */}
          <div className="absolute inset-0">
            {isVideo(project.media) ? (
              <video
                src={project.media}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="
                  project-media
                  absolute inset-0
                  h-full w-full
                  object-cover
                  brightness-75
                  will-change-transform
                "
              />
            ) : (
              <img
                src={project.media}
                alt={project.title}
                className="
                  project-media
                  absolute inset-0
                  h-full w-full
                  object-cover
                  brightness-75
                  will-change-transform
                "
              />
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
          </div>

          {/* Content */}
          <div
            className="
              project-content
              relative z-10
              flex h-full flex-col
              items-center
              justify-center
              px-6
              text-center
              will-change-transform
            "
          >
            <span className="mb-4 text-[10px] uppercase tracking-[0.4em] opacity-80">
              View Project
            </span>

            <h2
              className="
                text-[10vw]
                font-black
                uppercase
                leading-none
                tracking-tighter
                text-white
                md:text-[8vw]
              "
            >
              {project.title}
            </h2>

            <div className="mt-8 flex items-center gap-4">
              <span className="text-[12px] tracking-[0.2em]">
                {project.year}
              </span>

              <div className="h-1 w-1 rounded-full bg-white/40" />

              <span className="text-[12px] uppercase tracking-[0.2em] opacity-70">
                {project.type}
              </span>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}