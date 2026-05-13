import { motion } from "motion/react";
import { PROJECTS } from "../constants";
import { ProjectCard } from "./ProjectCard";

export const ProjectsSection = () => {
  return (
    <section className="bg-brand-bg py-24 lg:py-40 px-6 lg:px-12 relative z-10 mt-[-1px]" id="projects-section">
      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row justify-between items-baseline mb-20 lg:mb-32 gap-8">
          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
              className="text-7xl lg:text-[120px] font-medium tracking-tighter leading-[0.9] font-tight text-brand-text-primary"
            >
              Projects.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-[11px] text-brand-text-secondary uppercase tracking-[0.2em] font-medium"
            >
              ©2025
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-[280px] lg:text-right"
          >
            <p className="text-brand-text-secondary text-sm leading-relaxed">
              We've helped businesses across industries achieve their goals. Here are some of our recent projects.
            </p>
          </motion.div>
        </div>

        {/* Project Grid - Reduced gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-3">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};