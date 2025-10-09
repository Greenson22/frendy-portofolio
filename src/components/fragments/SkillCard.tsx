import React from 'react';

type SkillCardProps = {
  name: string;
  level: string;
};

const SkillCard: React.FC<SkillCardProps> = ({ name, level }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
      <p className="text-blue-500 mt-2">{level}</p>
    </div>
  );
};

export default SkillCard;