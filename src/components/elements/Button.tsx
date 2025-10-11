import Link from 'next/link';
import React from 'react';

// Mendefinisikan tipe untuk props
type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary'; // variant adalah opsional dan hanya bisa 'primary' atau 'secondary'
};

const Button: React.FC<ButtonProps> = ({ children, href, variant = 'primary' }) => {
  const baseStyle = 'px-8 py-3 font-bold rounded-full hover:opacity-90 transition duration-300';

  const styles = {
    primary: 'bg-green-600 text-white',
    secondary: 'bg-green-100 text-green-800',
  };

  return (
    <Link href={href} className={`${baseStyle} ${styles[variant]}`}>
      {children}
    </Link>
  );
};

export default Button;