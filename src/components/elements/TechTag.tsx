import React from 'react';

type TechTagProps = {
  children: React.ReactNode;
};

const TechTag: React.FC<TechTagProps> = ({ children }) => {
  return (
    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
      {children}
    </span>
  );
};

export default TechTag;