"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Home, BookOpen, BarChart2, Settings, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Dashboard", icon: Home },
  { name: "Courses", icon: BookOpen },
  { name: "Analytics", icon: BarChart2 },
  { name: "Profile", icon: User },
  { name: "Settings", icon: Settings },
];

export default function SideNav() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <nav className="h-full w-full flex md:flex-col items-center md:items-stretch gap-2 p-2 md:p-4 border-t md:border-t-0 md:border-r border-neutral-800 bg-neutral-950 justify-around md:justify-start">
      <div className="hidden md:flex mb-8 px-2 items-center gap-3 text-white font-bold text-xl">
        {/* Brand identifier */}
        <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center">
          N
        </div>
        <span className="hidden lg:block">NextGen</span>
      </div>

      <div className="flex md:flex-col gap-1 md:gap-2 flex-1 items-center md:items-stretch justify-around md:justify-start w-full">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.name;

          return (
            <button
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={cn(
                "relative flex items-center justify-center md:justify-start gap-3 px-3 py-3 rounded-lg text-sm transition-colors duration-200",
                isActive ? "text-white" : "text-neutral-400 hover:text-white hover:bg-neutral-900/50"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute inset-0 bg-neutral-800 rounded-lg -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
              <Icon className="w-5 h-5 z-10 relative" />
              <span className="hidden lg:block z-10 relative">{item.name}</span>
            </button>
          );
        })}
      </div>

      <div className="hidden md:block mt-auto px-2">
        {/* User context module */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700"></div>
          <div className="hidden lg:block text-left">
            <p className="text-sm font-medium text-white">Student User</p>
            <p className="text-xs text-neutral-500">Pro Plan</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
