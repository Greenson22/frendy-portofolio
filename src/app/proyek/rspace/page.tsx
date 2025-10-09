import Heading from "@/components/elements/Heading";
import Link from "next/link";
import React from 'react';
import Image from "next/image";
import { Github, Download } from "lucide-react";

// Data untuk galeri screenshot dengan ekstensi .jpg
const screenshots = [
  {
    imageSrc: "/images/rspace/dashboard.jpg",
    title: "Halaman Dashboard",
    description: "Ini adalah pusat kendali aplikasi. Pengguna dapat melihat ringkasan tugas, progres terbaru, dan mendapatkan akses cepat ke semua fitur utama RSpace dengan antarmuka yang bersih dan informatif."
  },
  {
    imageSrc: "/images/rspace/topics.jpg",
    title: "Halaman Topics",
    description: "Fitur ini memungkinkan pengguna untuk mengorganisir konten dan catatan ke dalam topik-topik spesifik. Setiap topik berfungsi sebagai wadah untuk jurnal, tugas, dan materi pembelajaran terkait."
  },
  {
    imageSrc: "/images/rspace/mytasks.jpg",
    title: "Halaman My Tasks",
    description: "Manajemen tugas yang terintegrasi di mana pengguna dapat membuat, mengedit, dan melacak semua tugas mereka. Fitur ini membantu meningkatkan produktivitas dan memastikan tidak ada pekerjaan yang terlewat."
  },
  {
    imageSrc: "/images/rspace/progress.jpg",
    title: "Halaman Progress",
    description: "Visualisasi data progres pengguna disajikan di sini. Melalui grafik dan statistik, pengguna dapat memantau kemajuan mereka dalam menyelesaikan tugas atau mempelajari topik baru, memberikan motivasi tambahan."
  },
  {
    imageSrc: "/images/rspace/jurnal.jpg",
    title: "Halaman Jurnal",
    description: "Sebuah editor teks dan kode yang kaya fitur memungkinkan pengguna untuk menulis jurnal, catatan, atau bahkan potongan kode. Dilengkapi dengan syntax highlighting untuk pengalaman menulis yang lebih baik."
  }
];

// Komponen helper untuk seksi konten
const ContentSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="mb-12">
    <h2 className="text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-200">{title}</h2>
    <div className="text-gray-700 leading-relaxed space-y-4">
      {children}
    </div>
  </div>
);

// Halaman statis dan lengkap untuk proyek RSpace
export default function RSpaceProjectPage() {
  const githubUrl = "https://github.com/Greenson22/RSpace-Android";

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/#projects" className="text-blue-600 hover:underline mb-8 inline-block">
          &larr; Kembali ke Halaman Utama
        </Link>
        
        {/* Header dengan Logo, Judul, dan Tombol CTA */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-4">
            <Image 
              src="/images/rspace/icon.png"
              alt="Logo Aplikasi RSpace"
              width={64}
              height={64}
              className="rounded-xl shadow-md"
            />
            <Heading level={1} className="text-gray-900 text-center !text-4xl md:!text-5xl">
              RSpace: Aplikasi Flutter
            </Heading>
          </div>
          <p className="text-center text-xl text-gray-500 mt-2">
            Studi Kasus Detail
          </p>
          <div className="mt-8 flex justify-center items-center gap-4">
            <a 
              href={githubUrl}
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-900 transition-colors"
            >
              <Github size={20} />
              Lihat di GitHub
            </a>
            <a 
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download size={20} />
              Download App
            </a>
          </div>
        </div>

        {/* --- KONTEN STUDI KASUS --- */}
        <ContentSection title="Deskripsi Proyek">
          <p>RSpace adalah aplikasi serbaguna yang dikembangkan menggunakan Flutter, dirancang untuk berjalan mulus di platform Android dan desktop. Aplikasi ini dibuat oleh Frendy Rikal Gerung dan berfungsi sebagai platform yang kuat untuk manajemen konten, produktivitas, dan pembelajaran.</p>
          <p>Dengan fokus pada pengalaman pengguna yang kaya dan fungsionalitas yang luas, RSpace memanfaatkan berbagai teknologi modern untuk memberikan solusi yang komprehensif, mulai dari editor kode terintegrasi hingga fitur berbasis AI dengan Google Gemini.</p>
        </ContentSection>

        <ContentSection title="Tujuan Proyek (Dummy Data)">
            <ul className="list-disc list-inside">
              <li>Membangun aplikasi lintas platform yang fungsional penuh dari awal menggunakan Flutter untuk menguji kemampuannya di Android dan Desktop.</li>
              <li>Mengimplementasikan state management yang efisien dan scalable menggunakan Provider.</li>
              <li>Mengintegrasikan API pihak ketiga, termasuk layanan AI (Google Gemini) dan monetisasi (Google Mobile Ads), untuk memahami siklus hidup pengembangan aplikasi secara lengkap.</li>
            </ul>
        </ContentSection>

        <ContentSection title="Fitur Utama">
          <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Manajemen Konten & Produktivitas</h3>
              <ul className="list-disc list-inside pl-4">
                <li>Penyimpanan Lokal & Preferensi (shared_preferences, path_provider)</li>
                <li>Manajemen File (file_picker, file_saver)</li>
                <li>Tampilan Web Terintegrasi (webview_flutter)</li>
                <li>Editor Teks & Kode dengan Syntax Highlighting (code_text_field, flutter_highlight)</li>
                <li>Renderer Konten HTML & Markdown (html, flutter_markdown)</li>
              </ul>
          </div>
          <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Interaksi & Pengalaman Pengguna (UX)</h3>
              <ul className="list-disc list-inside pl-4">
                  <li>UI Dinamis & Interaktif dengan Provider State Management</li>
                  <li>Aksi Cepat (Quick Actions) dari Home Screen</li>
                  <li>Tampilan Grid yang Dapat Diatur Ulang (reorderable_grid_view)</li>
                  <li>Menu Floating Action Button yang Dapat Diperluas (flutter_speed_dial)</li>
              </ul>
          </div>
          <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Integrasi & Fungsionalitas Lanjutan</h3>
              <ul className="list-disc list-inside pl-4">
                <li>Kecerdasan Buatan (AI) terintegrasi dengan Google Gemini</li>
                <li>Integrasi Iklan (Google Mobile Ads) untuk monetisasi</li>
                <li>Enkripsi Data dan Penyimpanan Aman (encrypt, flutter_secure_storage)</li>
                <li>Berbagi Konten ke Aplikasi Lain (share_plus)</li>
                <li>Interaksi dengan Aplikasi Eksternal (open_file, url_launcher)</li>
              </ul>
          </div>
        </ContentSection>

        <ContentSection title="Teknologi yang Digunakan">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg"><p className="font-bold text-gray-800">Framework:</p><p>Flutter</p></div>
            <div className="bg-gray-50 p-4 rounded-lg"><p className="font-bold text-gray-800">Bahasa Pemrograman:</p><p>Dart</p></div>
            <div className="bg-gray-50 p-4 rounded-lg"><p className="font-bold text-gray-800">State Management:</p><p>Provider</p></div>
            <div className="bg-gray-50 p-4 rounded-lg"><p className="font-bold text-gray-800">API & Integrasi:</p><p>Google Mobile Ads, Google Gemini</p></div>
          </div>
        </ContentSection>

        <ContentSection title="Galeri Screenshot">
          <div className="flex flex-col gap-16 md:gap-24">
            {screenshots.map((screenshot, index) => (
              <div 
                key={screenshot.title}
                className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="w-full lg:w-1/3 flex-shrink-0">
                  <div className="relative mx-auto border-gray-800 bg-gray-800 border-[10px] rounded-[2.5rem] h-[550px] w-[270px] shadow-xl">
                    <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                      <Image
                        src={screenshot.imageSrc}
                        alt={`Screenshot ${screenshot.title}`}
                        width={250}
                        height={530}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-2/3 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{screenshot.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{screenshot.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ContentSection>

      </div>
    </div>
  );
}