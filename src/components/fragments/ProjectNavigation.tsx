// src/components/fragments/ProjectNavigation.tsx
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Project } from '@/lib/projectsData';

type NavProjectInfo = Pick<Project, 'slug' | 'title' | 'image'>;

type ProjectNavigationProps = {
  prevProject?: NavProjectInfo;
  nextProject?: NavProjectInfo;
};

const ProjectNavigation: React.FC<ProjectNavigationProps> = ({ prevProject, nextProject }) => {
  return (
    // --- PERUBAHAN: Latar section dikembalikan ke bg-white ---
    <nav className="bg-white mt-16 py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Tombol Sebelumnya */}
        <div className="flex-1 text-left w-full">
          {prevProject ? (
            <Link
              href={`/proyek/${prevProject.slug}`}
              // --- PERUBAHAN: Latar kartu diubah ke bg-lime-50 agar kontras ---
              className="flex items-center gap-4 p-6 bg-lime-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:bg-lime-100 group w-full"
            >
              <ArrowLeft size={24} className="text-slate-400 group-hover:text-green-600 transition-all duration-300 group-hover:-translate-x-1 flex-shrink-0" />
              <Image
                  src={prevProject.image}
                  alt={`Ikon ${prevProject.title}`}
                  width={40} 
                  height={40}
                  className="rounded-md flex-shrink-0"
              />
              <div className="overflow-hidden">
                <span className="text-sm text-slate-500 block">Sebelumnya</span>
                <span className="font-semibold text-slate-800 truncate block group-hover:text-green-700">{prevProject.title}</span>
              </div>
            </Link>
          ) : (
            // --- PERUBAHAN: Latar placeholder diubah ke bg-slate-100 ---
            <div className="flex items-center gap-4 p-6 bg-slate-100 rounded-lg text-slate-500 cursor-not-allowed w-full">
              <ArrowLeft size={24} />
              <div className="w-10 h-10 bg-slate-200 rounded-md"></div>
               <div className="overflow-hidden">
                 <span className="text-sm">Sebelumnya</span>
                 <span className="font-semibold">Awal Proyek</span>
               </div>
            </div>
          )}
        </div>

        {/* Tombol Berikutnya */}
        <div className="flex-1 text-right w-full">
          {nextProject ? (
            <Link
              href={`/proyek/${nextProject.slug}`}
              // --- PERUBAHAN: Latar kartu diubah ke bg-lime-50 agar kontras ---
              className="flex items-center justify-end text-right gap-4 p-6 bg-lime-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:bg-lime-100 group w-full"
            >
               <div className="overflow-hidden">
                 <span className="text-sm text-slate-500 block">Berikutnya</span>
                 <span className="font-semibold text-slate-800 truncate block group-hover:text-green-700">{nextProject.title}</span>
               </div>
              <Image
                  src={nextProject.image}
                  alt={`Ikon ${nextProject.title}`}
                  width={40}
                  height={40}
                  className="rounded-md flex-shrink-0"
              />
              <ArrowRight size={24} className="text-slate-400 group-hover:text-green-600 transition-all duration-300 group-hover:translate-x-1 flex-shrink-0" />
            </Link>
          ) : (
             // --- PERUBAHAN: Latar placeholder diubah ke bg-slate-100 ---
             <div className="flex items-center justify-end text-right gap-4 p-6 bg-slate-100 rounded-lg text-slate-500 cursor-not-allowed w-full">
                <div className="overflow-hidden">
                  <span className="text-sm">Berikutnya</span>
                  <span className="font-semibold">Akhir Proyek</span>
                </div>
               <div className="w-10 h-10 bg-slate-200 rounded-md"></div>
               <ArrowRight size={24} />
             </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default ProjectNavigation;