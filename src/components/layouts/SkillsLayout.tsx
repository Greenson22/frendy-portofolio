// src/components/layouts/SkillsLayout.tsx

"use client";

import React from 'react';
import Heading from "../elements/Heading";
import SkillListItem from '../fragments/SkillListItem';
import { motion, Variants } from 'framer-motion';

// Impor ikon
import { BrainCircuit, Gamepad2 } from 'lucide-react';
import { 
    SiPython, SiJavascript, SiNextdotjs, SiExpress, SiLaravel, 
    SiAndroid, SiCplusplus, SiFlutter // <-- Ikon Flutter ditambahkan
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

// Tipe data baru untuk skill
type Skill = {
  name: string;
  level: number;
  icon: React.ReactNode;
  category: 'tech' | 'professional';
};

// Data keahlian diperbarui sesuai permintaan
const skillsData: Skill[] = [
  // Kategori Teknologi & Bahasa Pemrograman
  { name: 'Next.js', level: 90, icon: <SiNextdotjs size={36} className="text-black dark:text-white" />, category: 'tech' },
  { name: 'Flutter', level: 85, icon: <SiFlutter size={36} className="text-[#02569B]" />, category: 'tech' }, // <-- Flutter ditambahkan
  { name: 'Python', level: 85, icon: <SiPython size={36} className="text-[#3776AB]" />, category: 'tech' },
  { name: 'JavaScript', level: 85, icon: <SiJavascript size={36} className="text-[#F7DF1E]" />, category: 'tech' },
  { name: 'Express.js', level: 80, icon: <SiExpress size={36} className="text-black dark:text-white" />, category: 'tech' },
  { name: 'Java', level: 75, icon: <FaJava size={36} className="text-[#007396]" />, category: 'tech' },
  { name: 'C++', level: 70, icon: <SiCplusplus size={36} className="text-[#00599C]" />, category: 'tech' },
  { name: 'Laravel', level: 65, icon: <SiLaravel size={36} className="text-[#FF2D20]" />, category: 'tech' },
  
  // Kategori Keahlian Profesional
  { name: 'Web Development', level: 95, icon: <TbWorldWww size={36} className="text-teal-500" />, category: 'professional' }, // <-- Dipindahkan & di atas
  { name: 'Android Development', level: 90, icon: <SiAndroid size={36} className="text-[#3DDC84]" />, category: 'professional' }, // <-- Dipindahkan & urutan kedua
  { name: 'Game Development', level: 70, icon: <Gamepad2 size={36} className="text-indigo-500" />, category: 'professional' },
  { name: 'Problem Solving', level: 95, icon: <BrainCircuit size={36} className="text-amber-500" />, category: 'professional' },
];

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