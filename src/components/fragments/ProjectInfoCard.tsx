import React from 'react';
import TechTag from '../elements/TechTag';

type ProjectInfoCardProps = {
  techStack: string[];
};

const ProjectInfoCard: React.FC<ProjectInfoCardProps> = ({ techStack }) => {
  return (
    <div className="lg:sticky lg:top-24 bg-slate-50 border border-slate-200 p-6 rounded-lg">
      <h3 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-3">Teknologi</h3>
      <div className="flex flex-wrap gap-2">
        {techStack.map(tech => (
          <TechTag key={tech}>{tech}</TechTag>
        ))}
      </div>
    </div>
  );
};

export default ProjectInfoCard;