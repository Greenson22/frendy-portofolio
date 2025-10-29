// src/components/fragments/CtaButtons.tsx
import React from 'react';
import { Github, Server } from 'lucide-react'; // <-- 'Download' removed
import { motion, Variants } from 'framer-motion';

type CtaButtonsProps = {
  githubUrl: string;
  githubUrlBackend?: string; // Properti opsional ini adalah kuncinya
  itemVariants: Variants;
};

const CtaButtons: React.FC<CtaButtonsProps> = ({ githubUrl, githubUrlBackend, itemVariants }) => {
  return (
    <motion.div variants={itemVariants} className="mt-10 flex flex-wrap justify-center items-center gap-4">
      {/* Tombol GitHub Utama */}
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white font-bold rounded-lg hover:bg-slate-600 transition-colors"
      >
        <Github size={20} />
        {/* --- PERUBAHAN DI SINI --- */}
        {/* Tampilkan 'Lihat Frontend' HANYA JIKA ada link backend, jika tidak, tampilkan 'Lihat di GitHub' */}
        {githubUrlBackend ? 'Lihat Frontend' : 'Lihat di GitHub'}
        {/* --- AKHIR PERUBAHAN --- */}
      </a>

      {/* Tombol GitHub Backend (Kondisional - Logika ini sudah benar) */}
      {githubUrlBackend && (
        <a
          href={githubUrlBackend}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-700 text-white font-bold rounded-lg hover:bg-indigo-600 transition-colors"
        >
          <Server size={20} /> Lihat Backend
        </a>
      )}
    </motion.div>
  );
};

export default CtaButtons;