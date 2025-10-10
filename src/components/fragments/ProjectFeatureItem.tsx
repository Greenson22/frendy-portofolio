import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type ProjectFeatureItemProps = {
  feature: {
    imageSrc: string;
    title: string;
    description: string;
  };
  index: number;
};

const ProjectFeatureItem: React.FC<ProjectFeatureItemProps> = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
    >
      {/* Image Wrapper */}
      <div className="w-full lg:w-3/5">
        <Image
          src={feature.imageSrc}
          alt={`Screenshot ${feature.title}`}
          width={1200}
          height={800}
          className="rounded-lg shadow-2xl border"
        />
      </div>
      {/* Text Content */}
      <div className="w-full lg:w-2/5 text-center lg:text-left">
        <h3 className="text-3xl font-bold text-slate-800 mb-4">{feature.title}</h3>
        <p className="text-lg text-slate-600 leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectFeatureItem;