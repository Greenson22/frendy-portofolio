import Link from "next/link";
import React from 'react';
import Image from "next/image";
import { Github, Download, Smartphone, Server, Code, Palette, Target, Lightbulb } from "lucide-react";

// Data untuk galeri screenshot, sekarang dengan deskripsi lengkap
const featuresShowcase = [
  {
    imageSrc: "/images/rspace/dashboard.jpg",
    title: "Dashboard Intuitif",
    description: "Berfungsi sebagai pusat kendali, dashboard memberikan ringkasan visual dari tugas, progres, dan akses cepat ke semua fitur utama. Desain yang bersih memastikan pengguna dapat langsung memahami informasi penting tanpa merasa kewalahan."
  },
  {
    imageSrc: "/images/rspace/topics.jpg",
    title: "Organisasi Konten Berbasis Topik",
    description: "Pengguna dapat mengelompokkan catatan, tugas, dan materi pembelajaran ke dalam 'Topics'. Sistem ini menciptakan struktur yang terorganisir, memudahkan pencarian kembali informasi dan menjaga fokus pada subjek tertentu."
  },
  {
    imageSrc: "/images/rspace/mytasks.jpg",
    title: "Manajemen Tugas Terintegrasi",
    description: "Fitur 'My Tasks' memungkinkan pengguna untuk membuat, melacak, dan mengelola pekerjaan mereka secara efisien. Fungsionalitas ini dirancang untuk meningkatkan produktivitas dan memastikan tidak ada tenggat waktu yang terlewat."
  },
  {
    imageSrc: "/images/rspace/progress.jpg",
    title: "Visualisasi Progres",
    description: "Memberikan motivasi melalui data. Halaman 'Progress' menyajikan pencapaian pengguna dalam bentuk grafik dan statistik yang mudah dipahami, membantu mereka melihat pertumbuhan dan tetap termotivasi."
  },
  {
    imageSrc: "/images/rspace/jurnal.jpg",
    title: "Editor Cerdas untuk Jurnal & Kode",
    description: "Dilengkapi editor teks kaya fitur dengan syntax highlighting. Pengguna dapat menulis jurnal harian, catatan teknis, atau menyimpan potongan kode, menjadikannya alat serbaguna untuk belajar dan bekerja."
  }
];

const techStack = [
  "Flutter", "Dart", "Provider", "Google Gemini", "Google Mobile Ads", 
  "Shared Preferences", "Secure Storage", "Webview", "File Picker"
];

export default function RSpaceProjectPage() {
  const githubUrl = "https://github.com/Greenson22/RSpace-Android";

  return (
    <div className="bg-white">

      {/* ====== Hero Section Baru (Fokus pada Judul & CTA) ====== */}
      <header className="bg-slate-900 text-white py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <Link href="/" className="text-slate-400 hover:text-white mb-8 inline-block transition-colors">
              &larr; Kembali ke Portofolio
            </Link>
            
            <div className="flex justify-center items-center gap-4 mb-4">
              <Image 
                src="/images/rspace/icon.png"
                alt="Logo Aplikasi RSpace"
                width={64}
                height={64}
                className="rounded-xl shadow-md"
              />
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                RSpace
              </h1>
            </div>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300">
              Aplikasi Lintas Platform (Android & Desktop) untuk manajemen konten, produktivitas, dan pembelajaran.
            </p>
            <div className="mt-10 flex justify-center items-center gap-4">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white font-bold rounded-lg hover:bg-slate-600 transition-colors">
                  <Github size={20} /> Lihat di GitHub
                </a>
                <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
                  <Download size={20} /> Download App
                </a>
            </div>
        </div>
      </header>

      {/* ====== Sesi Utama: Deskripsi & Info Kunci ====== */}
      <main className="max-w-5xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3"><Code size={28}/>Deskripsi Proyek</h2>
              <div className="text-lg text-slate-600 space-y-4 leading-relaxed">
                <p>RSpace adalah aplikasi serbaguna yang dikembangkan menggunakan Flutter untuk berjalan mulus di Android dan desktop. Dibuat oleh Frendy Rikal Gerung, aplikasi ini adalah platform kuat untuk manajemen konten, produktivitas, dan pembelajaran, yang mengintegrasikan AI dari Google Gemini.</p>
              </div>
            </section>
          </div>
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 bg-slate-50 border border-slate-200 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-3">Teknologi</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map(tech => (
                    <span key={tech} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
            </div>
          </aside>
        </div>
      </main>

      {/* ====== Sesi Showcase Fitur (Galeri Satu per Satu) ====== */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold text-slate-800 tracking-tight">Visualisasi Fitur Utama</h2>
                <p className="mt-4 text-lg text-slate-600">Setiap layar dirancang untuk fungsionalitas dan kemudahan penggunaan.</p>
            </div>
            
            <div className="flex flex-col gap-20 md:gap-28">
              {featuresShowcase.map((feature, index) => (
                <div 
                  key={feature.title}
                  className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Kolom Mockup Smartphone */}
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

                  {/* Kolom Teks Penjelasan */}
                  <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <h3 className="text-3xl font-bold text-slate-800 mb-4">{feature.title}</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>
      
    </div>
  );
}