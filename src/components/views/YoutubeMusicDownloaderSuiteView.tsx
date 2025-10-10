"use client";
import React from 'react';
import YoutubeMusicDownloaderSuiteHeroLayout from '../layouts/YoutubeMusicDownloaderSuiteHeroLayout';
import YoutubeMusicDownloaderSuiteOverviewLayout from '../layouts/YoutubeMusicDownloaderSuiteOverviewLayout';
import YoutubeMusicDownloaderSuiteFeaturesLayout from '../layouts/YoutubeMusicDownloaderSuiteFeaturesLayout'; // <-- Impor baru

// Data untuk galeri screenshot
const featuresShowcase = [
  { 
    imageSrc: "/images/youtubemusicdownloader/spotify-populer.png", 
    title: "Tab Spotify Populer", 
    description: "Memungkinkan pengguna untuk mencari playlist atau lagu dari Spotify dan menyimpannya sebagai daftar teks (.txt) untuk digunakan dalam proses pencarian video." 
  },
  { 
    imageSrc: "/images/youtubemusicdownloader/pencarian-musik.png", 
    title: "Tab Pencarian Musik", 
    description: "Mengambil daftar lagu dari file teks, kemudian secara otomatis dan simultan mencari video yang relevan di YouTube untuk setiap judul lagu." 
  },
  { 
    imageSrc: "/images/youtubemusicdownloader/pengunduh.png", 
    title: "Tab Pengunduh", 
    description: "Menampilkan hasil pencarian dalam tabel, memungkinkan pengguna untuk memilih, memfilter, dan mengunduh lagu yang diinginkan sebagai file audio (MP3) atau video." 
  },
];

const techStack = [
  "Python", "PyQt6", "yt-dlp", "Spotipy", "Threading", "FFmpeg"
];

const YoutubeMusicDownloaderSuiteView: React.FC = () => {
  return (
    <div className="bg-white">
      <YoutubeMusicDownloaderSuiteHeroLayout />
      <YoutubeMusicDownloaderSuiteOverviewLayout techStack={techStack} />
      {/* --- BAGIAN BARU DITAMBAHKAN DI SINI --- */}
      <YoutubeMusicDownloaderSuiteFeaturesLayout features={featuresShowcase} />
    </div>
  );
};

export default YoutubeMusicDownloaderSuiteView;