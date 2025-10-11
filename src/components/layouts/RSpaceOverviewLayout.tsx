import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import { Code, Star, Zap, BrainCircuit, Bot, Award } from 'lucide-react'; // Ikon baru
import ProjectInfoCard from '../fragments/ProjectInfoCard';

type RSpaceOverviewLayoutProps = {
  techStack: string[];
};

const scrollAnimation: MotionProps = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: "easeInOut" }
};

const RSpaceOverviewLayout: React.FC<RSpaceOverviewLayoutProps> = ({ techStack }) => {
  return (
    <main className="max-w-5xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <motion.div {...scrollAnimation} className="lg:col-span-2 space-y-12">

          {/* --- BAGIAN DESKRIPSI UTAMA (DIPERBARUI) --- */}
          <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <Code size={28}/>Deskripsi Proyek
            </h2>
            <div className="text-lg text-slate-600 space-y-4 leading-relaxed">
              <p>
                <strong>RSpace</strong> adalah ekosistem produktivitas lintas platform (Android & Desktop) yang dirancang sebagai "ruang kedua" digital untuk para pembelajar dan profesional. Aplikasi ini mengintegrasikan manajemen pengetahuan, pelacakan tugas, dan jurnal aktivitas ke dalam satu platform yang kohesif.
              </p>
              <p>
                Dengan arsitektur <em>offline-first</em>, RSpace memastikan semua data pengguna aman tersimpan di perangkat lokal, sambil menyediakan opsi sinkronisasi dan backup online. Inti dari RSpace adalah sistem <strong>Spaced Repetition</strong> cerdas yang terintegrasi dengan kecerdasan buatan dari <strong>Google Gemini</strong> untuk mengoptimalkan proses belajar dan retensi informasi.
              </p>
            </div>
          </section>

          {/* --- BAGIAN FITUR UNGGULAN (BARU) --- */}
          <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <Star size={28}/>Fitur Unggulan
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 text-green-600 p-2 rounded-full mt-1"><BrainCircuit size={24} /></div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-700">Spaced Repetition System (SRS)</h3>
                  <p className="text-slate-600">Jadwalkan tinjauan materi secara otomatis berdasarkan kurva lupa untuk memaksimalkan retensi memori jangka panjang.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-100 text-green-600 p-2 rounded-full mt-1"><Bot size={24} /></div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-700">Asisten AI "Flo" & Integrasi Gemini</h3>
                  <p className="text-slate-600">Flo memberikan saran proaktif berdasarkan data Anda, sementara Gemini membantu membuat kuis, konten HTML, dan menemukan tautan cerdas antar materi.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-100 text-green-600 p-2 rounded-full mt-1"><Zap size={24} /></div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-700">Manajemen Terpusat</h3>
                  <p className="text-slate-600">Kelola semua aspek pembelajaran—mulai dari catatan, tugas, hingga pelacakan waktu—dalam satu dasbor terpadu tanpa perlu berganti aplikasi.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-100 text-green-600 p-2 rounded-full mt-1"><Award size={24} /></div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-700">Gamifikasi dengan Sistem Neuron</h3>
                  <p className="text-slate-600">Kumpulkan poin "Neuron" setiap kali Anda menyelesaikan sesi belajar atau menghapus data, menambahkan elemen motivasi dalam proses belajar.</p>
                </div>
              </div>
            </div>
          </section>

        </motion.div>
        <motion.aside
          {...scrollAnimation}
          transition={{ ...scrollAnimation.transition, delay: 0.2 }}
          className="lg:col-span-1"
        >
          <ProjectInfoCard techStack={techStack} />
        </motion.aside>
      </div>
    </main>
  );
};

export default RSpaceOverviewLayout;