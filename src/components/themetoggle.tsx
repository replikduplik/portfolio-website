import React from 'react'
import { SunMoon } from 'lucide-react';
export default function ThemeToggle() {
  return (
    <div>
      <button className="fixed top-3 lg:top-4 lg:right-4 w-10 h-10 lg:w-10 flex justify-center items-center rounded-full right-3 z-50 cursor-pointer backdrop-blur-2xl bg-white/10 hover:bg-white/20">
        <SunMoon className="text-white hover:scale-110 transition-transform duration-200" />
      </button>
    </div>
  );
}
