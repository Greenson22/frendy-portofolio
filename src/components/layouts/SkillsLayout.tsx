import React from 'react';
import Heading from "../elements/Heading";
import SkillCard from "../fragments/SkillCard";

// Mendefinisikan tipe data untuk skill
type Skill = {
  name: string;
  level: string;
};

// Data keahlian yang sudah diperbarui
const skillsData: Skill[] = [
  { name: 'Web Development', level: 'Mahir' },
  { name: 'Android Development', level: 'Mahir' },
  { name: 'Next.js', level: 'Mahir' },
  { name: 'Express.js', level: 'Mahir' },
  { name: 'Problem Solving', level: 'Mahir' },
  { name: 'Python', level: 'Mahir' },
  { name: 'JavaScript', level: 'Mahir' },
  { name: 'Laravel', level: 'Menengah' },
  { name: 'Game Development', level: 'Dasar' },
];

const SkillsLayout: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <Heading level={2} className="mb-12">Keahlian Utama</Heading>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skillsData.map((skill) => (
            <SkillCard key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsLayout;