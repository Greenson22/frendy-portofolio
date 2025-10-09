import React from 'react';
import { Github, Download } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

type CtaButtonsProps = {
  githubUrl: string;
  itemVariants: Variants;
};

const CtaButtons: React.FC<CtaButtonsProps> = ({ githubUrl, itemVariants }) => {
  return (
    <motion.div variants={itemVariants} className="mt-10 flex justify-center items-center gap-4">
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white font-bold rounded-lg hover:bg-slate-600 transition-colors">
        <Github size={20} /> Lihat di GitHub
      </a>
      <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
        <Download size={20} /> Download App
      </a>
    </motion.div>
  );
};

export default CtaButtons;