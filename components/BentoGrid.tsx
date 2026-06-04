"use client";

import { motion } from "framer-motion";

export default function BentoGrid({ children }: { children: React.ReactNode }) {
  // Orchestrates staggered entrance animations for child server components
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]"
    >
      {children}
    </motion.section>
  );
}
