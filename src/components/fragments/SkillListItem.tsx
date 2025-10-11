// src/components/fragments/SkillListItem.tsx

"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

type SkillListItemProps = {
  icon: React.ReactNode;
  name: string;
  level: number; // Level sekarang berupa angka (0-100)
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeInOut" }
  }
};

const SkillListItem: React.FC<SkillListItemProps> = ({ icon, name, level }) => {
  return (
    <motion.div variants={itemVariants} className="mb-6">
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 flex-shrink-0 mr-4">{icon}</div>
        <span className="font-semibold text-lg text-slate-800">{name}</span>
      </div>
      <div className="flex items-center">
        <div className="w-full bg-slate-200 rounded-full h-2.5 mr-4">
          <motion.div
            className="bg-green-600 h-2.5 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
        <span className="font-medium text-slate-600">{level}%</span>
      </div>
    </motion.div>
  );
};

export default SkillListItem;