import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import { Code, Star, Download, Search, ListMusic } from 'lucide-react'; // Menambahkan ikon baru
import ProjectInfoCard from '../fragments/ProjectInfoCard';

type YoutubeMusicDownloaderSuiteOverviewLayoutProps = {
  techStack: string[];
};

const scrollAnimation: MotionProps = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 }, // Diubah menjadi once: true
  transition: { duration: 0.8, ease: "easeInOut" }
};

const YoutubeMusicDownloaderSuiteOverviewLayout: React.FC<YoutubeMusicDownloaderSuiteOverviewLayoutProps> = ({ techStack }) => {
  return (
    <main className="max-w-5xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <motion.div {...scrollAnimation} className="lg:col-span-2 space-y-12">
          
          {/* --- BAGIAN DESKRIPSI DIPERBARUI --- */}
          <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <Code size={28}/>Deskripsi Proyek
            </h2>
            <div className="text-lg text-slate-600 space-y-4 leading-relaxed">
              <p>
                <strong>YT Music Downloader Suite</strong> adalah aplikasi desktop komprehensif yang dirancang untuk menyederhanakan dan mengotomatiskan proses pengunduhan musik dari YouTube secara massal. Dibangun dengan Python dan PyQt6, aplikasi ini menyediakan alur kerja yang mulus, mulai dari menemukan musik di Spotify hingga menyimpannya di perpustakaan lokal Anda.
              </p>
              <p>
                Aplikasi ini memecahkan masalah umum dalam mengunduh banyak lagu sekaligus dengan menyediakan antarmuka terstruktur yang memandu pengguna melalui empat tahap utama: menemukan daftar putar populer di Spotify, mencari video yang sesuai di YouTube secara efisien, mengelola dan memilih lagu yang akan diunduh, serta akhirnya mengunduh file dalam format audio atau video dengan folder yang terorganisir.
              </p>
            </div>
          </section>

          {/* --- BAGIAN FITUR BARU --- */}
          <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <Star size={28}/>Fitur Utama
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-600 p-2 rounded-full mt-1">
                  <ListMusic size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-700">Integrasi Spotify</h3>
                  <p className="text-slate-600">Memungkinkan pengguna mencari playlist dan lagu populer langsung dari Spotify untuk membuat daftar unduhan awal dengan mudah.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-600 p-2 rounded-full mt-1">
                  <Search size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-700">Pencarian Cepat (Multi-Thread)</h3>
                  <p className="text-slate-600">Menggunakan beberapa proses pencarian simultan (multi-threading) untuk menemukan video YouTube dari daftar lagu dengan cepat dan efisien.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-600 p-2 rounded-full mt-1">
                  <Download size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-700">Manajemen Unduhan Fleksibel</h3>
                  <p className="text-slate-600">Menyediakan antarmuka tabel untuk memilih lagu, filter cerdas berdasarkan ukuran file, dan pilihan format unduhan (MP3, video, atau keduanya).</p>
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

export default YoutubeMusicDownloaderSuiteOverviewLayout;