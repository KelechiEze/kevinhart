import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Project } from "../constants";
import { MoreHorizontal } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
  key?: string | number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        ease: [0.65, 0, 0.35, 1],
      }}
      className="group relative flex flex-col bg-brand-card rounded-[32px] border border-brand-border p-3 lg:p-4 overflow-hidden"
      id={`project-card-${project.id}`}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-3 py-4 mb-2">
        <div className="flex items-baseline gap-1">
          <span className="text-sm font-medium tracking-tight font-tight text-brand-text-primary">
            {project.title}
          </span>
          <span className="text-[10px] text-brand-text-secondary font-tight">
            /{project.year}
          </span>
        </div>
        <button 
          className="text-brand-text-secondary hover:text-brand-text-primary transition-colors"
          aria-label="More options"
        >
          <MoreHorizontal size={16} strokeWidth={1.5} />
        </button>
      </div>

      {/* Main Image Container */}
      <div 
        className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px]"
        ref={containerRef}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          className="h-full w-full"
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Center Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-3 backdrop-blur-md bg-white/10 px-6 py-3 rounded-full border border-white/20 shadow-2xl"
          >
            {/* Minimal Logo Icon Placeholder */}
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
              <div className="w-3 h-3 bg-black flex items-center justify-center rounded-[2px]" />
            </div>
            <span className="text-white font-medium tracking-tight font-tight text-lg">
              {project.logoText}
            </span>
          </motion.div>
        </div>

        {/* Subtle Hover Darkening Overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
};
