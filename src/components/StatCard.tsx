import { motion } from "motion/react";

export interface StatItem {
  id: string;
  value: string;
  title: string;
  description: string;
  type: string;
}

export interface StatCardProps {
  stat: StatItem;
  index: number;
  key?: string | number;
}

export function StatCard({ stat, index }: StatCardProps) {
  const delayOffset = index * 0.1;
  
  return (
    <div className="flex flex-col gap-2 h-full">
      {/* Short Card (Value) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 + delayOffset, duration: 0.6 }}
        className="bg-brand-card rounded-2xl pt-2 pb-4 px-6 h-[130px] flex flex-col border border-brand-border hover:shadow-md transition-shadow"
      >
        <div className="flex justify-end">
          <span className="text-[10px] font-medium text-brand-text-secondary/60">{stat.id}</span>
        </div>
        <div className="flex-1 flex items-center">
          <div className="text-3xl lg:text-4xl font-tight font-semibold tracking-tight text-brand-text-primary">
            {stat.value}
          </div>
        </div>
      </motion.div>

      {/* Tall Card (Info) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + delayOffset, duration: 0.6 }}
        className="bg-brand-card rounded-2xl pt-3 pb-6 px-6 min-h-[330px] flex flex-col justify-between border border-brand-border hover:shadow-md transition-shadow"
      >
        <div className="flex justify-end">
          <h4 className="text-right text-xs lg:text-sm font-medium leading-tight max-w-[130px] text-brand-text-primary">
            {stat.title}
          </h4>
        </div>

        {stat.type === "projects" ? (
          <p className="text-[11px] lg:text-xs text-brand-text-secondary leading-relaxed max-w-[180px] pb-2">
            {stat.description}
          </p>
        ) : (
          <div className="flex flex-col gap-4 pb-2">
            <p className="text-[11px] lg:text-xs text-brand-text-secondary leading-relaxed">
              {stat.description || "Exceptional quality and service delivery that exceeds expectations"}
            </p>
            <div className="flex items-center gap-3 opacity-50">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-brand-text-primary rounded-sm" />
                <div className="w-1.5 h-1.5 bg-brand-text-primary rounded-sm" />
                <span className="text-[9px] font-bold text-brand-text-primary uppercase tracking-wide">logo</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] font-bold flex items-center gap-1 text-brand-text-primary uppercase tracking-wide">
                  <div className="w-1.5 h-1.5 border border-brand-text-primary rounded-full" />
                  logoipsum
                </span>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}