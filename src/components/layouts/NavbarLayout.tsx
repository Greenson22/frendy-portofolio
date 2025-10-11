"use client"; // Diperlukan untuk menggunakan state (useState) dan event listener (onClick)

import Link from 'next/link';
import React, { useState } from 'react';
import { User, Sparkles, Briefcase, Mail, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'Tentang', icon: <User size={18} /> },
  { href: '#skills', label: 'Keahlian', icon: <Sparkles size={18} /> },
  { href: '#projects', label: 'Proyek', icon: <Briefcase size={18} /> },
  { href: '#contact', label: 'Kontak', icon: <Mail size={18} /> },
];

const NavbarLayout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 shadow-md sticky top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Frendy R. Gerung
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
            >
              {link.icon}
              <span className="font-medium">{link.label}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-green-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-4 px-4">
          <div className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="flex items-center gap-3 text-lg text-gray-700 hover:text-green-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)} // Menutup menu setelah link diklik
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarLayout;