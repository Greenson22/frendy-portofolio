"use client";

import React from 'react';
import Heading from "../elements/Heading";
import SkillCard from "../fragments/SkillCard";
import { motion, Variants } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Server, 
  Database, 
  BrainCircuit, 
  CodeXml, 
  Braces, 
  Gamepad2 
} from 'lucide-react';

// Data lengkap untuk keahlian
const skillsData = [
  { 
    name: 'Web Development', 
    level: 'Mahir', 
    icon: <Globe size={48} /> 
  },
  { 
    name: 'Android Development', 
    level: 'Mahir', 
    icon: <Smartphone size={48} />
  },
  { 
    name: 'Next.js', 
    level: 'Mahir', 
    icon: <Server size={48} />
  },
  { 
    name: 'Express.js', 
    level: 'Mahir', 
    icon: <Database size={48} />
  },
  { 
    name: 'Problem Solving', 
    level: 'Mahir', 
    icon: <BrainCircuit size={48} /> 
  },
  { 
    name: 'Python', 
    level: 'Mahir', 
    icon: <CodeXml size={48} /> 
  },
  { 
    name: 'JavaScript', 
    level: 'Mahir', 
    icon: <Braces size={48} /> 
  },
  { 
    name: 'Laravel', 
    level: 'Menengah', 
    icon: <Server size={48} />
  },
  { 
    name: 'Game Development', 
    level: 'Dasar', 
    icon: <Gamepad2 size={48} />
  },
];

// Varian untuk container grid
const gridContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1 // Memberi jeda antar setiap item
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
        viewport={{ once: false, amount: 0.2 }} // amount: 0.2 berarti animasi terpicu saat 20% elemen terlihat
    >
      <div className="max-w-4xl mx-auto">
        <Heading level={2} className="mb-12">Keahlian Utama</Heading>
        <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-8"
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