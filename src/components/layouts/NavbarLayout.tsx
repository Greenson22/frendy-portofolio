import Link from 'next/link';
import React from 'react';

const NavbarLayout: React.FC = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Frendy R. Gerung
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="#about" className="text-gray-600 hover:text-blue-600">Tentang</Link>
          <Link href="#skills" className="text-gray-600 hover:text-blue-600">Keahlian</Link>
          <Link href="#projects" className="text-gray-600 hover:text-blue-600">Proyek</Link>
          <Link href="#contact" className="text-gray-600 hover:text-blue-600">Kontak</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLayout;