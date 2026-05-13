import { motion } from "motion/react";
import { STATS } from "../constants";
import { StatCard } from "./StatCard";

export const WhyChooseUsSection = () => {
  return (
    <section className="bg-brand-bg py-24 lg:py-48 px-6 lg:px-12 overflow-hidden" id="why-choose-us">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          
          {/* Left Side: Portrait Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
            className="relative rounded-[40px] overflow-hidden aspect-[4/5] shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2000&auto=format&fit=crop" 
              alt="Editorial portrait" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>

          {/* Right Side: Content */}
          <div className="flex flex-col h-full py-4">
            <div className="flex items-center gap-3 mb-8 text-[11px] text-brand-text-secondary font-medium uppercase tracking-[0.2em]">
              <div className="w-2 h-2 rounded-full border border-brand-border" />
              <span>Why Choose Us</span>
            </div>

            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
              className="text-4xl lg:text-7xl font-medium tracking-tight font-tight text-brand-text-primary mb-12 leading-[1.1]"
            >
              Proven results for every project, with a focus on design and functionality.
            </motion.h3>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
              className="grid grid-cols-2 gap-4 mb-16"
            >
              {STATS.map((stat, index) => (
                <StatCard key={stat.id} stat={stat} index={index} />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 1 }}
              className="bg-brand-card/50 backdrop-blur-sm rounded-[32px] p-10 border border-brand-border mt-auto"
            >
              <p className="text-brand-text-secondary text-sm lg:text-base leading-relaxed max-w-[400px]">
                No fluff, just results. Thoughtful design and tools that make your work easier. We focus on smart design and useful features, project after project.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
