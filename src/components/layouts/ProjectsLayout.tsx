"use client"; // <-- Pastikan ini ada di baris paling atas

import React from 'react';
import Heading from "../elements/Heading";
import ProjectCard from "../fragments/ProjectCard";
import { motion, MotionProps } from 'framer-motion';

const projectsData = [
  {
    title: 'RSpace',
    description: 'Aplikasi Android & Desktop untuk manajemen konten, produktivitas, dan pembelajaran dengan integrasi AI (Google Gemini).',
    image: '/images/rspace/icon.png',
    link: '/proyek/rspace',
    techStack: ['Flutter', 'Dart', 'Google Gemini', 'Provider'],
  },
  {
    title: 'Youtube Music Downloader Suite',
    description: 'Aplikasi desktop untuk mengunduh musik dari YouTube secara massal berdasarkan daftar dari file.',
    // --- ICON DIPERBARUI DI SINI ---
    image: '/images/youtubemusicdownloader/icon.png',
    link: '/proyek/youtubemusicdownloader',
    techStack: ['Python', 'Tkinter', 'yt-dlp', 'Threading'],
  },
  // ... (tambahan proyek lain jika ada)
];

// Animasi untuk bagian section keseluruhan (opsional, tapi bagus untuk konsistensi)
const sectionAnimation: MotionProps = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeInOut" }
};

const ProjectsLayout: React.FC = () => {
  return (
    <motion.section
      id="projects"
      className="py-20 bg-gray-50"
      {...sectionAnimation} // Terapkan animasi untuk section
    >
      <div className="max-w-4xl mx-auto">
        <Heading level={2} className="mb-12">Proyek Pilihan</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsLayout;