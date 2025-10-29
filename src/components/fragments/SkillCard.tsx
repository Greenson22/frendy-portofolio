"use client";

import React from 'react';
import { Variants } from 'framer-motion'; // <-- 'motion' removed

// Varian untuk item individu di dalam grid
export const skillItemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

type SkillCardProps = {
  icon: React.ReactNode;
  name: string;
  level: string;
};

const SkillCard: React.FC<SkillCardProps> = ({ icon, name, level }) => {
  return (
    // Kita tidak perlu menambahkan varian di sini karena akan diatur oleh parent
    <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300 h-full">
      <div className="text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
      <p className="text-gray-500 mt-2">{level}</p>
    </div>
  );
};

export default SkillCard;