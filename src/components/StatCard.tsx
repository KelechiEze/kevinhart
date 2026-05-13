import React from "react";
import { motion, useSpring, useTransform, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Stat } from "../constants";

interface StatCardProps {
  stat: Stat;
  index: number;
  key?: string | number;
}

const CountUp = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, ""));
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return <span ref={ref}>{count}{value.includes("+") ? "+" : value.includes("%") ? "%" : ""}</span>;
};

export const StatCard = ({ stat, index }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 + (index * 0.1), duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
      className="bg-brand-card rounded-[24px] border border-brand-border p-8 flex flex-col justify-between h-full min-h-[200px]"
      id={`stat-card-${stat.id}`}
    >
      <div className="flex justify-between items-start">
        <span className="text-[10px] text-brand-text-secondary font-medium tracking-[0.2em] font-tight">
          {stat.label}
        </span>
        <div className="w-1.5 h-1.5 rounded-full bg-brand-text-primary/10" />
      </div>
      <div>
        <h4 className="text-5xl font-medium tracking-tight font-tight text-brand-text-primary mb-2">
          <CountUp value={stat.value} />
        </h4>
        <p className="text-sm text-brand-text-secondary leading-snug max-w-[140px]">
          {stat.description}
        </p>
      </div>
    </motion.div>
  );
};
