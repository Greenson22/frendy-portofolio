import React from 'react';
import Heading from "../elements/Heading";
import ProjectCard from "../fragments/ProjectCard";
// Tidak perlu lagi import dari lib

const ProjectsLayout: React.FC = () => {
  // Data proyek RSpace sekarang diletakkan langsung di sini
  const rspaceProject = {
    href: "/proyek/rspace", // Link langsung ke halaman statis baru
    title: "RSpace: Aplikasi Flutter Lintas Platform",
    summary: "Aplikasi serbaguna (Android & Desktop) untuk manajemen konten, produktivitas, dan pembelajaran dengan integrasi AI.",
    tags: ["Flutter", "Dart", "Provider", "Google Gemini"],
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <Heading level={2} className="mb-12">Proyek Pilihan</Heading>
        <div className="max-w-2xl mx-auto">
          <ProjectCard 
            href={rspaceProject.href}
            title={rspaceProject.title}
            summary={rspaceProject.summary}
            tags={rspaceProject.tags}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsLayout;