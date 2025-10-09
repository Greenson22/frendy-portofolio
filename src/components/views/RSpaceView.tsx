"use client";
import React from 'react';
import RSpaceHeroLayout from '../layouts/RSpaceHeroLayout';
import RSpaceOverviewLayout from '../layouts/RSpaceOverviewLayout';
import RSpaceFeaturesLayout from '../layouts/RSpaceFeaturesLayout';

// Data spesifik untuk halaman RSpace
const featuresShowcase = [
  { imageSrc: "/images/rspace/dashboard.jpg", title: "Dashboard Intuitif", description: "Berfungsi sebagai pusat kendali..." },
  { imageSrc: "/images/rspace/topics.jpg", title: "Organisasi Konten Berbasis Topik", description: "Pengguna dapat mengelompokkan catatan..." },
  { imageSrc: "/images/rspace/mytasks.jpg", title: "Manajemen Tugas Terintegrasi", description: "Fitur 'My Tasks' memungkinkan pengguna..." },
  { imageSrc: "/images/rspace/progress.jpg", title: "Visualisasi Progres", description: "Memberikan motivasi melalui data..." },
  { imageSrc: "/images/rspace/jurnal.jpg", title: "Editor Cerdas untuk Jurnal & Kode", description: "Dilengkapi editor teks kaya fitur..." }
];
const techStack = [
  "Flutter", "Dart", "Provider", "Google Gemini", "Google Mobile Ads", 
  "Shared Preferences", "Secure Storage", "Webview", "File Picker"
];

const RSpaceView: React.FC = () => {
  return (
    <div className="bg-white">
      <RSpaceHeroLayout />
      <RSpaceOverviewLayout techStack={techStack} />
      <RSpaceFeaturesLayout features={featuresShowcase} />
    </div>
  );
};

export default RSpaceView;