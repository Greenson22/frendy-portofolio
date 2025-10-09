import React from 'react';

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
};

const ProjectCard: React.FC<Project> = ({ title, description, tags, link }) => {
  return (
    <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-blue-600 font-semibold hover:underline">
          Lihat Detail →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;