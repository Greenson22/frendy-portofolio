"use client";
import React from 'react';
import RSpaceHeroLayout from '../layouts/RSpaceHeroLayout';
import RSpaceOverviewLayout from '../layouts/RSpaceOverviewLayout';
import RSpaceFeaturesLayout from '../layouts/RSpaceFeaturesLayout';
import FooterLayout from '../layouts/FooterLayout';

// Data deskripsi fitur yang telah disempurnakan
const featuresShowcase = [
  {
    imageSrc: "/images/rspace/dashboard.jpg",
    title: "Dashboard Intuitif & Terpusat",
    description: "Berfungsi sebagai pusat kendali, menampilkan statistik kunci seperti tugas yang belum selesai, item yang perlu ditinjau ulang, kutipan motivasi harian, dan ringkasan aktivitas."
  },
  {
    imageSrc: "/images/rspace/topics.jpg",
    title: "Manajemen Konten Hirarkis",
    description: "Organisir pengetahuan secara terstruktur dengan sistem Topik > Subjek > Diskusi > Poin, memungkinkan penataan materi yang fleksibel dan mendalam."
  },
  {
    imageSrc: "/images/rspace/mytasks.jpg",
    title: "Manajemen Tugas Terintegrasi",
    description: "Kelola semua tugas dalam satu tempat dengan sistem kategori, tanggal jatuh tempo, dan penghitung progres. Tugas dapat ditautkan ke Jurnal Aktivitas untuk pelacakan waktu otomatis."
  },
  {
    imageSrc: "/images/rspace/progress.jpg",
    title: "Visualisasi Progres Belajar",
    description: "Pantau kemajuan belajar Anda melalui kartu-kartu visual yang dapat disesuaikan. Setiap materi dapat dipecah menjadi sub-materi untuk pelacakan yang lebih detail."
  },
  {
    imageSrc: "/images/rspace/jurnal.jpg",
    title: "Jurnal Aktivitas Cerdas",
    description: "Catat semua aktivitas harian Anda. Sistem secara otomatis dapat membuat log untuk hari baru berdasarkan aktivitas hari sebelumnya untuk konsistensi pelacakan."
  }
];

// Daftar teknologi yang lebih akurat dan lengkap
const techStack = [
  "Flutter", "Dart", "Provider", "Google Gemini", "Google Mobile Ads", 
  "Spaced Repetition", "Gamification", "AI Assistant", "Offline First", 
  "Data Synchronization", "Secure Storage", "Webview"
];

const RSpaceView: React.FC = () => {
  return (
    <div className="bg-white">
      <RSpaceHeroLayout />
      <RSpaceOverviewLayout techStack={techStack} />
      <RSpaceFeaturesLayout features={featuresShowcase} />
      <FooterLayout />
    </div>
  );
};

export default RSpaceView;