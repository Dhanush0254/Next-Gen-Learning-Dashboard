"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";

export default function HeroCard() {
  return (
    <motion.section
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="col-span-1 md:col-span-2 lg:col-span-3 row-span-1 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 relative overflow-hidden group"
    >
      {/* Hardware-accelerated ambient background glow */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-colors duration-500" />
      
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center h-full gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome back, Dhanush! 👋</h1>
          <p className="text-neutral-400">You have 2 pending assignments and 1 quiz due today. Keep it up!</p>
        </div>
        
        <div className="flex items-center gap-3 bg-neutral-950/50 p-4 rounded-xl border border-neutral-800/50">
          <div className="p-2 bg-orange-500/20 rounded-lg text-orange-500">
            <Flame className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-neutral-400">Daily Streak</p>
            <p className="text-xl font-bold text-white">12 Days</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
