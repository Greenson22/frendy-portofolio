// src/lib/skillsData.tsx
import React from 'react';

// Impor ikon-ikon yang kita pindahkan dari SkillsLayout
import { BrainCircuit, Gamepad2 } from 'lucide-react';
import { 
    SiPython, SiJavascript, SiNextdotjs, SiExpress, SiLaravel, 
    SiAndroid, SiCplusplus, SiFlutter 
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

// Tipe data untuk skill
export type Skill = {
  name: string;
  level: number;
  icon: React.ReactNode;
  category: 'tech' | 'professional';
};

// Data keahlian yang sekarang diekspor
export const skillsData: Skill[] = [
  // Kategori Teknologi & Bahasa Pemrograman
  { name: 'Next.js', level: 90, icon: <SiNextdotjs size={36} className="text-black dark:text-white" />, category: 'tech' },
  { name: 'Flutter', level: 85, icon: <SiFlutter size={36} className="text-[#02569B]" />, category: 'tech' },
  { name: 'Python', level: 85, icon: <SiPython size={36} className="text-[#3776AB]" />, category: 'tech' },
  { name: 'JavaScript', level: 85, icon: <SiJavascript size={36} className="text-[#F7DF1E]" />, category: 'tech' },
  { name: 'Express.js', level: 80, icon: <SiExpress size={36} className="text-black dark:text-white" />, category: 'tech' },
  { name: 'Java', level: 75, icon: <FaJava size={36} className="text-[#007396]" />, category: 'tech' },
  { name: 'C++', level: 70, icon: <SiCplusplus size={36} className="text-[#00599C]" />, category: 'tech' },
  { name: 'Laravel', level: 65, icon: <SiLaravel size={36} className="text-[#FF2D20]" />, category: 'tech' },
  
  // Kategori Keahlian Profesional
  { name: 'Web Development', level: 95, icon: <TbWorldWww size={36} className="text-teal-500" />, category: 'professional' },
  { name: 'Android Development', level: 90, icon: <SiAndroid size={36} className="text-[#3DDC84]" />, category: 'professional' },
  { name: 'Game Development', level: 70, icon: <Gamepad2 size={36} className="text-indigo-500" />, category: 'professional' },
  { name: 'Problem Solving', level: 95, icon: <BrainCircuit size={36} className="text-amber-500" />, category: 'professional' },
];