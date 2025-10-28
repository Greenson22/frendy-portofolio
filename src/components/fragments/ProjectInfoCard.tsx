// src/components/fragments/ProjectInfoCard.tsx
import React from 'react';
import TechTag from '../elements/TechTag';

type ProjectInfoCardProps = {
  techStack: string[];
};

const ProjectInfoCard: React.FC<ProjectInfoCardProps> = ({ techStack }) => {
  return (
    // --- PERUBAHAN: Desain kartu diubah total ---
    <div className="lg:sticky lg:top-24 bg-white shadow-xl rounded-lg border-t-4 border-green-500 p-6">
      {/* --- PERUBAHAN: Menghapus border-b, menyesuaikan margin --- */}
      <h3 className="text-2xl font-bold text-slate-800 mb-5">Teknologi</h3>
      <div className="flex flex-wrap gap-2">
        {techStack.map(tech => (
          <TechTag key={tech}>{tech}</TechTag>
        ))}
      </div>
    </div>
  );
};

export default ProjectInfoCard;