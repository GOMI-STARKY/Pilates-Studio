"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedSection({
  children,
  className,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
