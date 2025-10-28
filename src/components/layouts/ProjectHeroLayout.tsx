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

// Ubah tipe props agar bisa menerima githubUrlBackend
type ProjectHeroLayoutProps = {
  title: string;
  description: string;
  iconSrc: string;
  githubUrl: string;
  githubUrlBackend?: string; // <-- Tambahkan properti opsional
};

const ProjectHeroLayout: React.FC<ProjectHeroLayoutProps> = ({ title, description, iconSrc, githubUrl, githubUrlBackend }) => {
  return (
    <motion.header
      className="bg-gray-800 text-white py-20 md:py-24"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div variants={itemVariants}>
          <Link href="/" className="text-slate-400 hover:text-white mb-8 inline-block transition-colors">
            &larr; Kembali ke Portofolio
          </Link>
        </motion.div>
        <motion.div variants={itemVariants} className="flex justify-center items-center gap-4 mb-4">
          <Image src={iconSrc} alt={`Logo ${title}`} width={64} height={64} className="rounded-xl shadow-md" />
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">{title}</h1>
        </motion.div>
        <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300">
          {description}
        </motion.p>
        {/* --- Teruskan githubUrlBackend ke CtaButtons --- */}
        <CtaButtons
          githubUrl={githubUrl}
          githubUrlBackend={githubUrlBackend} // <-- Teruskan properti ini
          itemVariants={itemVariants}
        />
      </div>
    </motion.header>
  );
};

export default ProjectHeroLayout;