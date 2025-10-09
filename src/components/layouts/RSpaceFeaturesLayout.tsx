import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import FeatureShowcaseItem from '../fragments/FeatureShowcaseItem';

type Feature = {
  imageSrc: string;
  title: string;
  description: string;
};

type RSpaceFeaturesLayoutProps = {
  features: Feature[];
};

const scrollAnimation: MotionProps = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { },
  transition: { duration: 0.8, ease: "easeInOut" }
};

const RSpaceFeaturesLayout: React.FC<RSpaceFeaturesLayoutProps> = ({ features }) => {
  return (
    <section className="bg-slate-50 py-16 overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div {...scrollAnimation} className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-800 tracking-tight">Visualisasi Fitur Utama</h2>
          <p className="mt-4 text-lg text-slate-600">Setiap layar dirancang untuk fungsionalitas dan kemudahan penggunaan.</p>
        </motion.div>
        <div className="flex flex-col gap-20 md:gap-28">
          {features.map((feature, index) => (
            <FeatureShowcaseItem key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RSpaceFeaturesLayout;