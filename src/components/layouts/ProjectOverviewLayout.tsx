// src/components/layouts/ProjectOverviewLayout.tsx
"use client";
import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import { Code, Star } from 'lucide-react';
import ProjectInfoCard from '../fragments/ProjectInfoCard';
import { Project } from '@/lib/projectsData'; // Impor tipe data

type ProjectOverviewLayoutProps = {
  project: Project; // Terima seluruh objek proyek
};

const scrollAnimation: MotionProps = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: "easeInOut" }
};

const ProjectOverviewLayout: React.FC<ProjectOverviewLayoutProps> = ({ project }) => {
  return (
    // --- PERUBAHAN: Latar belakang diubah ke putih ---
    <main className="max-w-5xl mx-auto py-16 px-4 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <motion.div {...scrollAnimation} className="lg:col-span-2 space-y-12">

          {/* Bagian Deskripsi Utama */}
          <section>
            {/* --- PERUBAHAN: Menambahkan border-b dan padding-b --- */}
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3 pb-4 border-b border-slate-200">
              <Code size={28}/>Deskripsi Proyek
            </h2>
            <div className="text-lg text-slate-600 space-y-4 leading-relaxed">
              {project.longDescription}
            </div>
          </section>

          {/* Bagian Fitur Unggulan */}
          <section>
            {/* --- PERUBAHAN: Menambahkan border-b dan padding-b --- */}
            <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center gap-3 pb-4 border-b border-slate-200">
              <Star size={28}/>Fitur Unggulan
            </h2>
            <div className="space-y-6">
              {project.mainFeatures.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="bg-green-100 text-green-600 p-2 rounded-full mt-1 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-700">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </motion.div>
        <motion.aside
          {...scrollAnimation}
          transition={{ ...scrollAnimation.transition, delay: 0.2 }}
          className="lg:col-span-1"
        >
          <ProjectInfoCard techStack={project.techStack} />
        </motion.aside>
      </div>
    </main>
  );
};

export default ProjectOverviewLayout;