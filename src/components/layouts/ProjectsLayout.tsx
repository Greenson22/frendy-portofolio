import React from 'react';
import Heading from "../elements/Heading";
import ProjectCard from "../fragments/ProjectCard";
import { getAllProjects } from '@/lib/projects'; // Impor data proyek

const ProjectsLayout: React.FC = () => {
  const projects = getAllProjects(); // Ambil semua data proyek

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <Heading level={2} className="mb-12">Proyek Pilihan</Heading>
        {/* Pastikan hanya ada 1 proyek, jadi kita tidak perlu grid yang rumit */}
        <div className="max-w-2xl mx-auto">
          {projects.map((project) => (
            <ProjectCard 
              key={project.slug} 
              slug={project.slug}
              title={project.title}
              summary={project.summary}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsLayout;