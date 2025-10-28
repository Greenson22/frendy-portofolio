// src/components/fragments/CtaButtons.tsx
import React from 'react';
import { Github, Download, Server } from 'lucide-react'; // Tambahkan ikon Server
import { motion, Variants } from 'framer-motion';

type CtaButtonsProps = {
  githubUrl: string;
  githubUrlBackend?: string; // <-- Tambahkan properti opsional ini
  itemVariants: Variants;
};

const CtaButtons: React.FC<CtaButtonsProps> = ({ githubUrl, githubUrlBackend, itemVariants }) => {
  return (
    <motion.div variants={itemVariants} className="mt-10 flex flex-wrap justify-center items-center gap-4">
      {/* Tombol GitHub Frontend (Utama) */}
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white font-bold rounded-lg hover:bg-slate-600 transition-colors"
      >
        <Github size={20} /> Lihat Frontend
      </a>

      {/* --- Tombol GitHub Backend (Kondisional) --- */}
      {githubUrlBackend && (
        <a
          href={githubUrlBackend}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-700 text-white font-bold rounded-lg hover:bg-indigo-600 transition-colors" // Warna berbeda
        >
          <Server size={20} /> Lihat Backend
        </a>
      )}
      {/* --- Akhir Tombol Backend --- */}

      {/* Tombol Download (jika diperlukan di masa mendatang) */}
      {/* <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
        <Download size={20} /> Download App
      </a> */}
    </motion.div>
  );
};

export default CtaButtons;