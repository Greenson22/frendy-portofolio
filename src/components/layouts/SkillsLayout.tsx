"use client";

import React from 'react';
import Heading from "../elements/Heading";
import SkillCard from "../fragments/SkillCard";
import { motion, Variants } from 'framer-motion';

// Impor ikon dari Lucide (untuk yang non-brand)
import { BrainCircuit, Gamepad2 } from 'lucide-react';

// Impor LOGO ASLI dari React Icons
import { 
    SiPython, 
    SiJavascript, 
    SiNextdotjs, 
    SiExpress, 
    SiLaravel, 
    SiAndroid,
    SiCplusplus // <-- Ikon baru
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa'; // <-- Ikon baru
import { TbWorldWww } from 'react-icons/tb';

// Tipe data untuk skill
type Skill = {
  name: string;
  level: string;
  icon: React.ReactNode;
};

// Data keahlian yang sudah diperbarui dengan Java, C++, dan level baru
const skillsData: Skill[] = [
  { 
    name: 'Python', 
    level: 'Mahir', 
    icon: <SiPython size={48} className="text-[#3776AB]" /> 
  },
  { 
    name: 'Web Development', 
    level: 'Mahir', 
    icon: <TbWorldWww size={48} className="text-sky-500" /> 
  },
  { 
    name: 'Android Development', 
    level: 'Mahir', 
    icon: <SiAndroid size={48} className="text-[#3DDC84]" />
  },
  { 
    name: 'Next.js', 
    level: 'Mahir', 
    icon: <SiNextdotjs size={48} className="text-black dark:text-white" />
  },
  { 
    name: 'Express.js', 
    level: 'Mahir', 
    icon: <SiExpress size={48} className="text-black dark:text-white" />
  },
  { 
    name: 'Problem Solving', 
    level: 'Mahir', 
    icon: <BrainCircuit size={48} className="text-amber-500" /> 
  },
  { 
    name: 'JavaScript', 
    level: 'Mahir', 
    icon: <SiJavascript size={48} className="text-[#F7DF1E]" /> 
  },
  { 
    name: 'Java', 
    level: 'Menengah', // <-- Keahlian baru
    icon: <FaJava size={48} className="text-[#007396]" />
  },
  { 
    name: 'C++', 
    level: 'Menengah', // <-- Keahlian baru
    icon: <SiCplusplus size={48} className="text-[#00599C]" />
  },
  { 
    name: 'Laravel', 
    level: 'Menengah', 
    icon: <SiLaravel size={48} className="text-[#FF2D20]" />
  },
  { 
    name: 'Game Development', 
    level: 'Menengah', // <-- Level diperbarui
    icon: <Gamepad2 size={48} className="text-indigo-500" />
  },
];

// Varian untuk container grid
const gridContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

// Varian untuk setiap item di dalam grid
const gridItemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const SkillsLayout: React.FC = () => {
  return (
    <motion.section 
        id="skills" 
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-4xl mx-auto">
        <Heading level={2} className="mb-12">Keahlian Utama</Heading>
        {/* Mengubah md:grid-cols-3 menjadi md:grid-cols-4 agar lebih pas */}
        <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={gridContainerVariants}
        >
          {skillsData.map((skill) => (
            <motion.div key={skill.name} variants={gridItemVariants}>
              <SkillCard 
                name={skill.name} 
                level={skill.level}
                icon={skill.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SkillsLayout;