import { motion } from "motion/react";
import { Plus, Trophy, Users, DollarSign, Globe, Star } from "lucide-react";
import { STATS } from "../constants";
import { StatCard } from "./StatCard";

export const WhyChooseUsSection = () => {
  return (
    <section className="light-section py-24 lg:py-40 px-6 lg:px-12" id="why-choose-us">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-32">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.15em] text-brand-text-primary">
              <div className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0">
                <Plus className="w-3 h-3" strokeWidth={3} />
              </div>
              <span className="opacity-80">Why Kevin Hart</span>
            </div>
          </div>
          
          <div className="lg:col-span-9">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
              className="text-4xl sm:text-5xl lg:text-[68px] font-bold font-tight leading-[1.1] lg:leading-[1.05] tracking-tight text-brand-text-primary"
            >
              From comedy clubs <br />
              to global icon<br />
              <span className="text-brand-text-secondary">the Kevin Hart blueprint.</span>
            </motion.h2>
          </div>
        </div>

        {/* Content Area - Changed to items-end for bottom alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-end">
          
          {/* Left: Tall Portrait Image */}
          <div className="lg:col-span-3 xl:col-span-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
              className="relative rounded-[32px] overflow-hidden aspect-[1/2] lg:max-w-[340px] shadow-sm bg-[#F0F0F0] mx-auto lg:mx-0 group cursor-pointer"
            >
              <div className="absolute top-6 right-6 z-10">
                 <div className="w-8 h-8 bg-black/80 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-black transition-colors group-hover:scale-110 transition-transform duration-300">
                   <Plus className="w-4 h-4" strokeWidth={2.5} />
                 </div>
              </div>

              {/* Bottom Content Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 z-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-white text-[13px] lg:text-[14px] leading-relaxed mb-4 max-w-[200px] font-medium"
                >
                  From stand-up to stadiums<br />
                  the ultimate success story.
                </motion.p>
                <motion.button 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full py-2 px-5 text-white text-[13px] font-medium hover:bg-white/20 transition-all hover:gap-3"
                >
                  Watch his journey
                  <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                </motion.button>
              </div>

              <img 
                src="/RE7.png" 
                alt="Kevin Hart portrait" 
                className="w-full h-full object-cover grayscale-[0.1] contrast-[1.05] brightness-[0.95] group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Right: Content & Cards - Adjusted to take remaining space */}
          <div className="lg:col-span-9 xl:col-span-9 flex flex-col gap-12 lg:gap-16">
            <div className="flex justify-center lg:justify-end">
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-brand-text-primary text-[15px] lg:text-[17px] leading-relaxed max-w-[460px] text-center lg:text-left"
              >
                <span className="font-bold">From humble beginnings to global phenomenon.</span>{' '}
                <span className="text-brand-text-secondary">Kevin Hart's journey proves that authenticity, relentless work ethic, and smart partnerships create lasting impact across comedy, film, and business.</span>
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:max-w-[700px] ml-auto w-full">
              {STATS.map((stat, index) => (
                <StatCard key={stat.id} stat={stat} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};