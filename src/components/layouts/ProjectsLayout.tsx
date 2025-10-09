import React from 'react';
import Heading from "../elements/Heading";
import ProjectCard, { Project } from "../fragments/ProjectCard"; // Impor tipe Project

const projectsData: Project[] = [
  {
    title: "Sistem E-Commerce (Dummy)",
    description: "Platform e-commerce fungsional yang dibangun dengan Next.js untuk frontend dan Express.js untuk backend API.",
    tags: ["Next.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Aplikasi Manajemen Tugas (Dummy)",
    description: "Aplikasi web berbasis Laravel untuk membantu tim mengelola tugas, proyek, dan tenggat waktu secara efisien.",
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    link: "#",
  },
  {
    title: "Game 2D Platformer (Dummy)",
    description: "Prototipe game platformer 2D yang dikembangkan untuk platform Android menggunakan Unity Engine.",
    tags: ["Unity", "C#", "Android", "Game Dev"],
    link: "#",
  },
];

const ProjectsLayout: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <Heading level={2} className="mb-12">Proyek Pilihan</Heading>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsLayout;