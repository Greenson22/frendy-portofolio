// src/components/layouts/ProjectFeaturesLayout.tsx
"use client";
import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import ProjectFeatureItem from '../fragments/ProjectFeatureItem'; // Untuk desktop
import FeatureShowcaseItem from '../fragments/FeatureShowcaseItem'; // Untuk mobile
import { Camera } from 'lucide-react';
import { Project } from '@/lib/projectsData'; // Impor tipe

type ProjectFeaturesLayoutProps = {
  features: Project['featureShowcase'];
  showcaseType: Project['showcaseType'];
};

const scrollAnimation: MotionProps = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: "easeInOut" }
};

const ProjectFeaturesLayout: React.FC<ProjectFeaturesLayoutProps> = ({ features, showcaseType }) => {
  const title = showcaseType === 'mobile' ? "Visualisasi Fitur Utama" : "Galeri Aplikasi";
  const subtitle = showcaseType === 'mobile' 
    ? "Setiap layar dirancang untuk fungsionalitas dan kemudahan penggunaan."
    : "Tampilan antarmuka utama dari aplikasi.";

  return (
    // --- PERUBAHAN: Latar diubah ke putih, 'relative' dan 'overflow-hidden' ditambah ---
    <section className="bg-white py-20 relative overflow-hidden">
      
      {/* --- TAMBAHAN: Pola titik sebagai latar belakang --- */}
      <div 
        className="absolute inset-0 opacity-40" 
        style={{
          backgroundImage: 'radial-gradient(circle, #e2e8f0 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          zIndex: 0
        }}
      ></div>

      {/* --- PERUBAHAN: Konten dibuat 'relative' agar di atas pola titik --- */}
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div {...scrollAnimation} className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-800 tracking-tight flex items-center justify-center gap-3">
            <Camera size={36}/> {title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{subtitle}</p>
        </motion.div>
        <div className="flex flex-col gap-20 md:gap-28">
          {features.map((feature, index) => (
            // Pilih komponen berdasarkan tipe showcase
            showcaseType === 'mobile' ? (
              <FeatureShowcaseItem key={feature.title} feature={feature} index={index} />
            ) : (
              <ProjectFeatureItem key={feature.title} feature={feature} index={index} />
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectFeaturesLayout;