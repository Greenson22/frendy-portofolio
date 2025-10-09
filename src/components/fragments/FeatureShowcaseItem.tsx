import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type FeatureShowcaseItemProps = {
  feature: {
    imageSrc: string;
    title: string;
    description: string;
  };
  index: number;
};

const FeatureShowcaseItem: React.FC<FeatureShowcaseItemProps> = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{  }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
    >
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="relative mx-auto border-gray-800 bg-gray-800 border-[10px] rounded-[2.5rem] h-[550px] w-[270px] shadow-2xl">
          <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
            <Image
              src={feature.imageSrc}
              alt={`Screenshot ${feature.title}`}
              width={270}
              height={550}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h3 className="text-3xl font-bold text-slate-800 mb-4">{feature.title}</h3>
        <p className="text-lg text-slate-600 leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureShowcaseItem;