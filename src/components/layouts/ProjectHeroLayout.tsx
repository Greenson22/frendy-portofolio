// src/components/layouts/ProjectHeroLayout.tsx
"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import CtaButtons from '../fragments/CtaButtons';
import { Project } from '@/lib/projectsData'; // Impor tipe Project jika belum

const headerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } }
};

type ProjectHeroLayoutProps = {
  title: string;
  description: string;
  iconSrc: string;
  githubUrl: string;
  githubUrlBackend?: string;
};

const ProjectHeroLayout: React.FC<ProjectHeroLayoutProps> = ({ title, description, iconSrc, githubUrl, githubUrlBackend }) => {
  return (
    <motion.header
      // --- PERUBAHAN: Latar diubah ke bg-lime-50, overflow-hidden dipindahkan ke sini ---
      className="bg-lime-50 text-slate-900 pt-20 pb-12 md:pt-24 md:pb-20 relative overflow-hidden" 
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* --- TAMBAHAN: Latar belakang "glow" radial untuk kedalaman --- */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '800px',
          height: '800px',
          // Ini adalah gradient radial hijau muda yang sangat transparan
          background: 'radial-gradient(circle, rgba(167, 243, 208, 0.4) 0%, rgba(240, 253, 244, 0) 70%)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      ></div>

      {/* --- PERUBAHAN: Konten tetap relative z-10 --- */}
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10 pb-20 md:pb-28">
        <motion.div variants={itemVariants}>
          <Link href="/" className="text-green-600 hover:text-green-800 mb-8 inline-block transition-colors font-medium">
            &larr; Kembali ke Portofolio
          </Link>
        </motion.div>
        <motion.div variants={itemVariants} className="flex justify-center items-center gap-4 mb-4">
          <Image src={iconSrc} alt={`Logo ${title}`} width={64} height={64} className="rounded-xl shadow-md" />
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">{title}</h1>
        </motion.div>
        <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600">
          {description}
        </motion.p>
        
        <CtaButtons
          githubUrl={githubUrl}
          githubUrlBackend={githubUrlBackend}
          itemVariants={itemVariants}
        />
      </div>

      {/* --- SVG Wave (Tidak Berubah) --- */}
      {/* Wave ini akan mentransisikan bg-lime-50 ke bg-white di section berikutnya */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ lineHeight: 0, transform: 'rotate(180deg)' }}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[150px]"
          style={{ filter: 'drop-shadow(0 -5px 5px rgba(0,0,0,0.03))' }}
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.3-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.84,34.25-11.88,70.17-24.2,106.1-35.66C1065.54,21.86,1132.46,11.82,1200,0V0Z"
            className="fill-white" 
          ></path>
        </svg>
      </div>
      
    </motion.header>
  );
};

export default ProjectHeroLayout;