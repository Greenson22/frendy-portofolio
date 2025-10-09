import React from 'react';
import Heading from "../elements/Heading";
import SkillCard from "../fragments/SkillCard";

// Import ikon yang akan kita gunakan dari lucide-react
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

// Mendefinisikan tipe data untuk skill, sekarang dengan ikon
type Skill = {
  name: string;
  level: string;
  icon: React.ReactNode; // Properti baru untuk ikon
};

// Data keahlian yang sudah diperbarui dengan ikon
const skillsData: Skill[] = [
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
    icon: <Server size={48} /> // Bisa menggunakan ikon yang sama jika relevan
  },
  { 
    name: 'Game Development', 
    level: 'Dasar', 
    icon: <Gamepad2 size={48} />
  },
];

const SkillsLayout: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <Heading level={2} className="mb-12">Keahlian Utama</Heading>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skillsData.map((skill) => (
            <SkillCard 
              key={skill.name} 
              name={skill.name} 
              level={skill.level}
              icon={skill.icon} // Mengirim properti ikon ke SkillCard
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsLayout;