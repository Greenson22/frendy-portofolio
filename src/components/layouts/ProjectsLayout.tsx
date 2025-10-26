// src/components/layouts/ProjectsLayout.tsx
"use client"; 

import React from 'react';
import Heading from "../elements/Heading";
import ProjectCard from "../fragments/ProjectCard";
import { motion, MotionProps } from 'framer-motion';
import { projectsData } from '@/lib/projectsData'; // <-- Impor dari file baru

// (Data proyek lokal dihapus)

const sectionAnimation: MotionProps = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeInOut" }
};

const ProjectsLayout: React.FC = () => {
  return (
    <motion.section
      id="projects"
      className="py-20 bg-gray-50"
      {...sectionAnimation} 
    >
      <div className="max-w-4xl mx-auto">
        <Heading level={2} className="mb-12">Proyek Pilihan</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard 
              key={project.title} 
              title={project.title}
              description={project.description}
              image={project.image}
              link={`/proyek/${project.slug}`} // <-- Link dinamis
              techStack={project.techStack.slice(0, 4)} // Ambil 4 tech pertama untuk card
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsLayout;