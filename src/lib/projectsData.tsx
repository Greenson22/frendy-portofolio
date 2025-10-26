// src/lib/projectsData.ts
import { BrainCircuit, Bot, Zap, Award, ListMusic, Search, Download } from 'lucide-react';
import React from 'react';

// Tipe data yang komprehensif
export type ProjectFeature = {
  imageSrc: string;
  title: string;
  description: string;
  icon?: React.ReactNode; // Untuk fitur unggulan di overview
};

export type Project = {
  slug: string; // <-- Kunci untuk routing dinamis
  title: string;
  description: string; // Deskripsi singkat (untuk ProjectCard)
  longDescription: React.ReactNode; // Deskripsi panjang (untuk Overview)
  image: string; // Icon/logo
  githubUrl: string;
  techStack: string[];
  mainFeatures: Omit<ProjectFeature, 'imageSrc'>[]; // Fitur unggulan (untuk Overview)
  featureShowcase: ProjectFeature[]; // Galeri/Visualisasi Fitur
  showcaseType: 'mobile' | 'desktop'; // Untuk membedakan layout galeri
};

// Data terpusat untuk semua proyek
export const projectsData: Project[] = [
  {
    slug: 'rspace',
    title: 'RSpace',
    description: 'Aplikasi Android & Desktop untuk manajemen konten, produktivitas, dan pembelajaran dengan integrasi AI (Google Gemini).',
    longDescription: (
      <>        <p>
          <strong>RSpace</strong> adalah ekosistem produktivitas lintas platform (Android & Desktop) yang dirancang sebagai "ruang kedua" digital untuk para pembelajar dan profesional. Aplikasi ini mengintegrasikan manajemen pengetahuan, pelacakan tugas, dan jurnal aktivitas ke dalam satu platform yang kohesif.
        </p>
        <p>
          Dengan arsitektur <em>offline-first</em>, RSpace memastikan semua data pengguna aman tersimpan di perangkat lokal, sambil menyediakan opsi sinkronisasi dan backup online. Inti dari RSpace adalah sistem <strong>Spaced Repetition</strong> cerdas yang terintegrasi dengan kecerdasan buatan dari <strong>Google Gemini</strong> untuk mengoptimalkan proses belajar dan retensi informasi.
        </p>
      </>
    ),
    image: '/images/rspace/icon.png',
    githubUrl: 'https://github.com/Greenson22/RSpace-Android',
    techStack: [
      "Flutter", "Dart", "Provider", "Google Gemini", "Google Mobile Ads", 
      "Spaced Repetition", "Gamification", "AI Assistant", "Offline First", 
      "Data Synchronization", "Secure Storage", "Webview"
    ],
    mainFeatures: [
      {
        icon: <BrainCircuit size={24} />,
        title: "Spaced Repetition System (SRS)",
        description: "Jadwalkan tinjauan materi secara otomatis berdasarkan kurva lupa untuk memaksimalkan retensi memori jangka panjang."
      },
      {
        icon: <Bot size={24} />,
        title: "Asisten AI \"Flo\" & Integrasi Gemini",
        description: "Flo memberikan saran proaktif berdasarkan data Anda, sementara Gemini membantu membuat kuis, konten HTML, dan menemukan tautan cerdas antar materi."
      },
      {
        icon: <Zap size={24} />,
        title: "Manajemen Terpusat",
        description: "Kelola semua aspek pembelajaran—mulai dari catatan, tugas, hingga pelacakan waktu—dalam satu dasbor terpadu tanpa perlu berganti aplikasi."
      },
      {
        icon: <Award size={24} />,
        title: "Gamifikasi dengan Sistem Neuron",
        description: "Kumpulkan poin \"Neuron\" setiap kali Anda menyelesaikan sesi belajar atau menghapus data, menambahkan elemen motivasi dalam proses belajar."
      }
    ],
    featureShowcase: [
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
    ],
    showcaseType: 'mobile',
  },
  {
    slug: 'youtubemusicdownloader',
    title: 'Youtube Music Downloader Suite',
    description: 'Aplikasi desktop untuk mengunduh musik dari YouTube secara massal berdasarkan daftar dari file.',
    longDescription: (
      <>
        <p>
          <strong>YT Music Downloader Suite</strong> adalah aplikasi desktop komprehensif yang dirancang untuk menyederhanakan dan mengotomatiskan proses pengunduhan musik dari YouTube secara massal. Dibangun dengan Python dan PyQt6, aplikasi ini menyediakan alur kerja yang mulus, mulai dari menemukan musik di Spotify hingga menyimpannya di perpustakaan lokal Anda.
        </p>
        <p>
          Aplikasi ini memecahkan masalah umum dalam mengunduh banyak lagu sekaligus dengan menyediakan antarmuka terstruktur yang memandu pengguna melalui empat tahap utama: menemukan daftar putar populer di Spotify, mencari video yang sesuai di YouTube secara efisien, mengelola dan memilih lagu yang akan diunduh, serta akhirnya mengunduh file dalam format audio atau video dengan folder yang terorganisir.
        </p>
      </>
    ),
    image: '/images/youtubemusicdownloader/icon.png',
    githubUrl: 'https://github.com/Greenson22/Music-Manager.git',
    techStack: ["Python", "PyQt6", "yt-dlp", "Spotipy", "Threading", "FFmpeg"],
    mainFeatures: [
      {
        icon: <ListMusic size={24} />,
        title: "Integrasi Spotify",
        description: "Memungkinkan pengguna mencari playlist dan lagu populer langsung dari Spotify untuk membuat daftar unduhan awal dengan mudah."
      },
      {
        icon: <Search size={24} />,
        title: "Pencarian Cepat (Multi-Thread)",
        description: "Menggunakan beberapa proses pencarian simultan (multi-threading) untuk menemukan video YouTube dari daftar lagu dengan cepat dan efisien."
      },
      {
        icon: <Download size={24} />,
        title: "Manajemen Unduhan Fleksibel",
        description: "Menyediakan antarmuka tabel untuk memilih lagu, filter cerdas berdasarkan ukuran file, dan pilihan format unduhan (MP3, video, atau keduanya)."
      }
    ],
    featureShowcase: [
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
    ],
    showcaseType: 'desktop',
  }
];

// Fungsi helper untuk mengambil data proyek berdasarkan slug
export const getProjectBySlug = (slug: string) => {
  return projectsData.find(project => project.slug === slug);
};