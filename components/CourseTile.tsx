"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { CourseData } from "@/lib/supabase";

// Safely map dynamic database strings to Lucide components
const getIcon = (iconName: string) => {
  const Icon = (LucideIcons as unknown as Record<string, React.ElementType>)[iconName];
  if (!Icon) return <LucideIcons.Book className="w-6 h-6" />;
  return <Icon className="w-6 h-6" />;
};

export default function CourseTile({ course }: { course: CourseData }) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="col-span-1 row-span-1 bg-neutral-900 border border-neutral-800 rounded-2xl p-5 relative overflow-hidden group cursor-pointer"
    >
      {/* Base layer for Glassmorphism mesh overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/20 to-transparent z-0" />
      <div 
        className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
      
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-neutral-800 rounded-lg text-neutral-300 group-hover:text-white group-hover:bg-neutral-700 transition-colors">
            {getIcon(course.icon_name)}
          </div>
          <span className="text-xs font-medium text-neutral-500">{course.progress}%</span>
        </div>
        
        <div>
          <h3 className="font-semibold text-white mb-3 text-lg leading-tight">{course.title}</h3>
          
          <div className="w-full h-2 bg-neutral-950 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${course.progress}%` }}
              transition={{ duration: 1, delay: 0.2, type: "spring" }}
              className="h-full bg-blue-500 rounded-full"
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
