import React, { JSX } from 'react';

type HeadingProps = {
  level?: 1 | 2 | 3;
  children: React.ReactNode;
  className?: string;
};

const Heading: React.FC<HeadingProps> = ({ level = 2, children, className }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const baseStyle = "font-bold text-gray-800";

  const styles = {
    1: 'text-5xl md:text-7xl font-extrabold text-gray-900',
    2: 'text-4xl text-center',
    3: 'text-2xl',
  };

  return (
    <Tag className={`${baseStyle} ${styles[level]} ${className}`}>
      {children}
    </Tag>
  );
};

export default Heading;