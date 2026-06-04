"use client";

import { motion } from "framer-motion";

export default function ActivityChart() {
  // temp dummy data for chart
  const data1 = [20, 45, 30, 80, 55, 90, 40];

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 relative group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <h2 className="text-lg font-bold text-white mb-6 relative z-10">Learning Activity</h2>
      
      <div className="flex items-end gap-2 h-48 w-full relative z-10">
        {data1.map((val, idx) => (
          <div key={idx} className="flex-1 flex flex-col justify-end items-center gap-2 group/bar cursor-pointer">
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: `${val}%` }}
              transition={{ duration: 1, delay: idx * 0.1, type: "spring" }}
              className="w-full bg-neutral-800 rounded-t-md group-hover/bar:bg-blue-500 transition-colors"
            />
            <span className="text-xs text-neutral-500">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'][idx]}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
