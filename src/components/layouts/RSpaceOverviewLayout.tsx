import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import { Code } from 'lucide-react';
import ProjectInfoCard from '../fragments/ProjectInfoCard';

type RSpaceOverviewLayoutProps = {
  techStack: string[];
};

const scrollAnimation: MotionProps = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { },
  transition: { duration: 0.8, ease: "easeInOut" }
};

const RSpaceOverviewLayout: React.FC<RSpaceOverviewLayoutProps> = ({ techStack }) => {
  return (
    <main className="max-w-5xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <motion.div {...scrollAnimation} className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3"><Code size={28}/>Deskripsi Proyek</h2>
            <div className="text-lg text-slate-600 space-y-4 leading-relaxed">
              <p>RSpace adalah aplikasi serbaguna yang dikembangkan menggunakan Flutter untuk berjalan mulus di Android dan desktop. Dibuat oleh Frendy Rikal Gerung, aplikasi ini adalah platform kuat untuk manajemen konten, produktivitas, dan pembelajaran, yang mengintegrasikan AI dari Google Gemini.</p>
            </div>
          </section>
        </motion.div>
        <motion.aside {...scrollAnimation} transition={{ ...scrollAnimation.transition, delay: 0.2 }} className="lg:col-span-1">
          <ProjectInfoCard techStack={techStack} />
        </motion.aside>
      </div>
    </main>
  );
};

export default RSpaceOverviewLayout;