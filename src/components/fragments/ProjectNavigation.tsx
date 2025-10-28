// src/components/fragments/ProjectNavigation.tsx
import Link from 'next/link';
import React from 'react';
import Image from 'next/image'; // <-- Impor Image
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Project } from '@/lib/projectsData';

// Perbarui tipe untuk menyertakan 'image'
type NavProjectInfo = Pick<Project, 'slug' | 'title' | 'image'>;

type ProjectNavigationProps = {
  prevProject?: NavProjectInfo;
  nextProject?: NavProjectInfo;
};

const ProjectNavigation: React.FC<ProjectNavigationProps> = ({ prevProject, nextProject }) => {
  return (
    <nav className="border-t border-slate-200 mt-16 pt-8">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center gap-4">
        {/* Tombol Sebelumnya */}
        <div className="flex-1 text-left">
          {prevProject ? (
            <Link
              href={`/proyek/${prevProject.slug}`}
              className="inline-flex items-center gap-3 text-slate-600 hover:text-green-700 transition-colors group" // Tambah gap
            >
              <ArrowLeft size={20} className="text-slate-400 group-hover:text-green-600 transition-transform group-hover:-translate-x-1 flex-shrink-0" />
              {/* --- Tambahkan Gambar Ikon --- */}
              <Image
                  src={prevProject.image}
                  alt={`Ikon ${prevProject.title}`}
                  width={32} // Ukuran ikon
                  height={32}
                  className="rounded flex-shrink-0"
              />
              {/* --- Akhir Gambar Ikon --- */}
              <div className="overflow-hidden"> {/* Bantu wrap text jika judul panjang */}
                <span className="text-sm text-slate-500 block">Sebelumnya</span>
                <span className="font-semibold truncate block">{prevProject.title}</span> {/* Tambah truncate */}
              </div>
            </Link>
          ) : (
            <div className="opacity-50 inline-flex items-center gap-3 text-slate-400 cursor-not-allowed">
              <ArrowLeft size={20} />
              <div className="w-8 h-8 bg-slate-200 rounded"></div> {/* Placeholder ikon */}
               <div className="overflow-hidden">
                 <span className="text-sm text-slate-500 block">Sebelumnya</span>
                 <span className="font-semibold">Awal Proyek</span>
               </div>
            </div>
          )}
        </div>

        {/* Tombol Berikutnya */}
        <div className="flex-1 text-right">
          {nextProject ? (
            <Link
              href={`/proyek/${nextProject.slug}`}
              className="inline-flex items-center gap-3 text-slate-600 hover:text-green-700 transition-colors group" // Tambah gap
            >
               <div className="overflow-hidden"> {/* Bantu wrap text */}
                 <span className="text-sm text-slate-500 block">Berikutnya</span>
                 <span className="font-semibold truncate block">{nextProject.title}</span> {/* Tambah truncate */}
               </div>
              {/* --- Tambahkan Gambar Ikon --- */}
              <Image
                  src={nextProject.image}
                  alt={`Ikon ${nextProject.title}`}
                  width={32}
                  height={32}
                  className="rounded flex-shrink-0"
              />
              {/* --- Akhir Gambar Ikon --- */}
              <ArrowRight size={20} className="text-slate-400 group-hover:text-green-600 transition-transform group-hover:translate-x-1 flex-shrink-0" />
            </Link>
          ) : (
             <div className="opacity-50 inline-flex items-center gap-3 text-slate-400 cursor-not-allowed">
                <div className="overflow-hidden">
                  <span className="text-sm text-slate-500 block">Berikutnya</span>
                  <span className="font-semibold">Akhir Proyek</span>
                </div>
               <div className="w-8 h-8 bg-slate-200 rounded"></div> {/* Placeholder ikon */}
               <ArrowRight size={20} />
             </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default ProjectNavigation;