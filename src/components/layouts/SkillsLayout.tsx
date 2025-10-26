// src/components/layouts/SkillsLayout.tsx

"use client";

import React from 'react';
import Heading from "../elements/Heading";
import SkillListItem from '../fragments/SkillListItem';
import { motion, Variants } from 'framer-motion';
import { skillsData } from '@/lib/skillsData'; // <-- 1. IMPOR DATA DINAMIS

// 2. SEMUA IMPOR IKON DAN DATA HARDCODED DIHAPUS DARI SINI

// Animasi untuk container
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const SkillsLayout: React.FC = () => {
  // 3. Logika ini sekarang bekerja dengan data yang diimpor
  const techSkills = skillsData.filter(s => s.category === 'tech');
  const professionalSkills = skillsData.filter(s => s.category === 'professional');

  return (
    <motion.section 
        id="skills" 
        className="py-20 bg-lime-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto px-4">
        <Heading level={2} className="mb-12">Keahlian Utama</Heading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          
          {/* Kolom Kiri: Keahlian Profesional */}
          <motion.div variants={containerVariants}>
            <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-amber-500 pb-2">Keahlian Profesional</h3>
            {professionalSkills.map((skill) => (
              <SkillListItem 
                key={skill.name} 
                name={skill.name} 
                level={skill.level}
                icon={skill.icon}
              />
            ))}
          </motion.div>

          {/* Kolom Kanan: Teknologi */}
          <motion.div variants={containerVariants}>
            <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-green-500 pb-2">Teknologi & Bahasa Pemrograman</h3>
            {techSkills.map((skill) => (
              <SkillListItem 
                key={skill.name} 
                name={skill.name} 
                level={skill.level}
                icon={skill.icon}
              />
            ))}
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default SkillsLayout;