import React from 'react';

type SkillCardProps = {
  icon: React.ReactNode; // Tipe untuk menerima komponen React sebagai ikon
  name: string;
  level: string;
};

const SkillCard: React.FC<SkillCardProps> = ({ icon, name, level }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300">
      {/* Container untuk Ikon */}
      <div className="text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
      <p className="text-gray-500 mt-2">{level}</p>
    </div>
  );
};

export default SkillCard;