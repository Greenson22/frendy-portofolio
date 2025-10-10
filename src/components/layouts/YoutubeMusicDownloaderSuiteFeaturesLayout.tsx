import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import ProjectFeatureItem from '../fragments/ProjectFeatureItem';
import { Camera } from 'lucide-react';

type Feature = {
  imageSrc: string;
  title: string;
  description: string;
};

type YoutubeMusicDownloaderSuiteFeaturesLayoutProps = {
  features: Feature[];
};

const scrollAnimation: MotionProps = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: "easeInOut" }
};

const YoutubeMusicDownloaderSuiteFeaturesLayout: React.FC<YoutubeMusicDownloaderSuiteFeaturesLayoutProps> = ({ features }) => {
  return (
    <section className="bg-slate-50 py-16 overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div {...scrollAnimation} className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-800 tracking-tight flex items-center justify-center gap-3">
            <Camera size={36}/> Galeri Aplikasi
          </h2>
          <p className="mt-4 text-lg text-slate-600">Tampilan antarmuka utama dari aplikasi.</p>
        </motion.div>
        <div className="flex flex-col gap-20 md:gap-28">
          {features.map((feature, index) => (
            <ProjectFeatureItem key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default YoutubeMusicDownloaderSuiteFeaturesLayout;