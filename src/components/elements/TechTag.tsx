import React from 'react';

type TechTagProps = {
  children: React.ReactNode;
};

const TechTag: React.FC<TechTagProps> = ({ children }) => {
  return (
    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
      {children}
    </span>
  );
};

export default TechTag;