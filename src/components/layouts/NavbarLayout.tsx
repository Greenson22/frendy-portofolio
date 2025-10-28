// src/components/layouts/NavbarLayout.tsx
"use client"; // Pastikan ini ada

import Link from 'next/link';
import React, { useState, useEffect, isValidElement } from 'react'; // Impor useState, useEffect, isValidElement
import { User, Sparkles, Briefcase, Mail, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#hero', label: 'Beranda', icon: <User size={18} /> }, // Ubah Tentang -> Beranda agar cocok dengan ID hero
  { href: '#about', label: 'Tentang', icon: <User size={18} /> },
  { href: '#skills', label: 'Keahlian', icon: <Sparkles size={18} /> },
  { href: '#projects', label: 'Proyek', icon: <Briefcase size={18} /> },
  { href: '#contact', label: 'Kontak', icon: <Mail size={18} /> },
];

const NavbarLayout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(''); // State untuk link aktif

  useEffect(() => {
    // Tentukan section ID yang mau diobservasi (tanpa #)
    const sectionIds = navLinks.map(link => link.href.substring(1));
    const sections = sectionIds.map(id => document.getElementById(id)).filter(el => el !== null) as HTMLElement[];

    if (sections.length === 0) return; // Jika tidak ada section, jangan lakukan apa-apa

    // Set link aktif awal saat load (biasanya hero)
    setActiveLink('#hero');

    const observerOptions = {
      root: null, // relatif terhadap viewport
      rootMargin: "-50% 0px -50% 0px", // Aktifkan ketika bagian tengah section ada di tengah viewport
      threshold: 0 // Cukup trigger saat sedikit saja bagian masuk/keluar dari rootMargin
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Ketika sebuah section masuk ke area tengah viewport, set link aktif
          setActiveLink(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });

    // Cleanup observer saat komponen unmount
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
      observer.disconnect();
    };
  }, []); // [] berarti efek ini hanya berjalan sekali saat mount dan cleanup saat unmount

  // --- Fungsi Helper untuk Merender Ikon dengan Aman ---
  const renderIcon = (icon: React.ReactNode, size: number) => {
    if (isValidElement(icon) && typeof icon.type !== 'string') {
      // Cek apakah icon adalah elemen React yang valid dan bukan elemen HTML biasa
      // dan coba kloning dengan properti size
      try {
        // Gunakan type assertion di dalam try-catch
        return React.cloneElement(icon as React.ReactElement<{ size?: number }>, { size });
      } catch (e) {
        // Jika cloneElement gagal, kembalikan ikon asli
        console.error("Gagal mengkloning ikon dengan size:", e);
        return icon;
      }
    }
    // Jika bukan elemen React yang valid atau elemen HTML biasa, kembalikan apa adanya
    return icon;
  };
  // --- Akhir Fungsi Helper ---

  return (
    <nav className="bg-white/80 shadow-md sticky top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Nama Anda (Link ke atas) */}
        <Link href="#hero" className="text-2xl font-bold text-gray-800" onClick={() => setActiveLink('#hero')}>
          Frendy R. Gerung
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => {
            const isActive = activeLink === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 transition-colors duration-200 ${
                  isActive
                    ? 'text-green-600 font-semibold' // Style Aktif
                    : 'text-gray-600 hover:text-green-600' // Style Normal/Hover
                }`}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
              >
                {renderIcon(link.icon, 18)} {/* Panggil fungsi renderIcon */}
                <span>{link.label}</span>
              </Link>
            );
          })}
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
        <div className="md:hidden bg-white pb-4 px-4 border-t border-gray-100">
          <div className="flex flex-col items-center space-y-4 pt-4">
            {navLinks.map((link) => {
               const isActive = activeLink === link.href;
               return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-3 text-lg py-2 transition-colors duration-200 ${
                       isActive
                         ? 'text-green-600 font-semibold' // Style Aktif
                         : 'text-gray-700 hover:text-green-600' // Style Normal/Hover
                    }`}
                    onClick={() => {
                       setActiveLink(link.href);
                       setIsMenuOpen(false);
                    }}
                  >
                    {renderIcon(link.icon, 20)} {/* Panggil fungsi renderIcon */}
                    <span>{link.label}</span>
                  </Link>
               );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarLayout;