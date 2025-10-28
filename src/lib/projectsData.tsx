// src/lib/projectsData.tsx
import {
  BrainCircuit, Bot, Zap, Award, ListMusic, Search, Download,
  Database, FolderArchive, ShieldCheck,
  Archive, FileText, Users, Mail // <-- Ikon untuk Arsip Surat
} from 'lucide-react';
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
githubUrl: string; // URL GitHub utama, atau frontend jika terpisah
githubUrlBackend?: string; // URL GitHub backend (opsional)
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
    <>
      <p>
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
},
{
  slug: 'npwp-manager',
  title: 'Aplikasi Pendaftaran NPWP (Asisten Entri Data)',
  description: 'Aplikasi desktop (Python & PyQt6) untuk mengelola data pendaftaran, mengarsipkan dokumen, dan menyediakan bantuan entri data (AI Assist).',
  longDescription: (
    <>
      <p>
        Proyek ini berawal dari tantangan nyata yang saya hadapi di komunitas desa saya. Warga sering meminta bantuan saya untuk membuat akun NPWP karena mereka awam teknologi dan bingung mengisi formulir coretax online.
      </p>
      <p>
        Awalnya, proses ini manual, data tersebar di chat WhatsApp dan catatan, sehingga rentan kesalahan. Untuk mengatasinya, saya mengembangkan aplikasi desktop ini (Python, PyQt6, SQLite) sebagai <strong>alat bantu internal</strong> saya untuk mengelola data dan dokumen pemohon secara terstruktur sebelum saya melakukan entri data manual ke portal pajak.
      </p>
      <p>
        Penting untuk ditekankan bahwa aplikasi ini <strong>tidak terhubung</strong> dengan portal coretax resmi. Aplikasi ini berfungsi murni sebagai asisten pribadi untuk mengorganisir data mentah, mempercepat proses pengisian formulir manual, dan menghilangkan kekacauan administrasi.
      </p>
    </>
  ),
  image: '/images/npwp-manager/icon.png',
  githubUrl: 'https://github.com/Greenson22/Aplikasi-NPWP-Manager',
  techStack: ["Python", "PyQt6", "SQLite", "AI Assist (Prompting)", "Manajemen File", "Desktop App"],
  mainFeatures: [
    {
      icon: <Database size={24} />,
      title: "Manajemen Data Lengkap (CRUD)",
      description: "Menyediakan fungsionalitas penuh (Tambah, Lihat, Edit, Hapus) untuk mengelola data pemohon dalam tabel yang rapi dan dapat dicari."
    },
    {
      icon: <FolderArchive size={24} />,
      title: "Arsip Dokumen Cerdas",
      description: "Otomatis membuat folder khusus per-NIK untuk menyimpan scan KTP/KK, yang dapat dibuka langsung dari aplikasi."
    },
    {
      icon: <Bot size={24} />,
      title: "Bantuan Entri Data (AI Assist)",
      description: "Menyediakan prompt & skema JSON untuk mengekstrak data dari KTP/KK via AI eksternal, lalu mengimpor hasilnya untuk mengisi form."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Pencarian Instan dan Keamanan",
      description: "Dilengkapi fitur pencarian real-time (Nama/NIK) dan menyamarkan data sensitif seperti password di dalam tabel."
    }
  ],
  featureShowcase: [
    {
      imageSrc: "/images/npwp-manager/daftar_data.png",
      title: "Tampilan Utama & Pencarian",
      description: "Menampilkan semua data pendaftar dalam tabel. Dilengkapi fitur pencarian instan (Nama/NIK) dan checkbox 'Tampilkan Password' untuk keamanan data sensitif."
    },
    {
      imageSrc: "/images/npwp-manager/entri_data.png",
      title: "Formulir Entri Data",
      description: "Tab formulir utama untuk menambah atau mengedit data pemohon secara manual, mencakup data diri, akun, dan status pendaftaran."
    },
    {
      imageSrc: "/images/npwp-manager/bantuan_ai.png",
      title: "Bantuan Entri Data (AI Assist)",
      description: "Tab 'Bantuan AI' menyediakan prompt/skema JSON untuk diekstrak via AI eksternal (KTP/KK), dan fitur impor JSON untuk mengisi formulir secara otomatis."
    },
    {
      imageSrc: "/images/npwp-manager/management_document.png",
      title: "Detail Data & Manajemen Dokumen",
      description: "Halaman (read-only) yang menampilkan semua data pemohon, daftar dokumen tersimpan (KTP/KK), dan tombol untuk 'Buka Folder Dokumen' di file explorer."
    },
  ],
  showcaseType: 'desktop',
},

// --- PROYEK SKRIPSI ARSIP SURAT ---
{
  slug: 'arsip-surat-kecamatan',
  title: 'Sistem Arsip Surat Digital Kec. Motoling Barat',
  description: 'Aplikasi web (React & Django) untuk digitalisasi, pengelolaan, dan klasifikasi otomatis arsip surat masuk/keluar menggunakan Text Mining dan Naïve Bayes.',
  longDescription: (
    <>
      <p>
        Proyek ini merupakan <strong>Skripsi S1</strong> saya yang berfokus pada modernisasi pengelolaan arsip di Kantor Kecamatan Motoling Barat. Sebelumnya, kantor kecamatan masih menggunakan sistem manual dengan buku catatan dan lemari fisik, yang menyebabkan kesulitan pencarian, risiko kerusakan/kehilangan dokumen, dan inefisiensi.
      </p>
      <p>
        Aplikasi web ini dirancang untuk mengatasi masalah tersebut dengan menyediakan platform digital terpusat untuk arsip surat masuk dan keluar. Tujuan utamanya adalah meningkatkan efisiensi administrasi, memenuhi regulasi pemerintah terkait Sistem Pemerintahan Berbasis Elektronik (SPBE), dan meningkatkan kualitas pelayanan publik.
      </p>
      <p>
        Salah satu fitur unggulan adalah <strong>klasifikasi otomatis surat masuk</strong> menggunakan algoritma Naïve Bayes yang dilatih dengan data teks surat. Pengembangan dilakukan dengan metode Extreme Programming, menggunakan React JS untuk frontend dan Django untuk backend.
      </p>
    </>
  ),
  image: '/images/arsip-surat/icon.png', // <-- GANTI DENGAN PATH ICON/LOGO PROYEK INI
  githubUrl: 'https://github.com/Greenson22/frontend-arsip-surat-digital-kecmobar', // <-- Frontend
  githubUrlBackend: 'https://github.com/Greenson22/backend-arsip-surat-digital-kecmobar', // <-- Backend
  techStack: [
    "React", "Redux", "Bootstrap", "MDBReact", "Axios", // Frontend
    "Django", "Django REST Framework", "Simple JWT", // Backend
    "MySQL", "Python", "Scikit-learn", // Database & ML
    "Naive Bayes", "Text Mining", "TF-IDF", // Konsep/Algoritma
    "Google Generative AI", // AI Tambahan
    "Extreme Programming" // Metodologi
  ],
  mainFeatures: [
    {
      icon: <Archive size={24} />,
      title: "Digitalisasi & CRUD Arsip",
      description: "Mengelola arsip surat masuk dan keluar secara digital dengan fungsi Tambah, Lihat, Ubah, Hapus (CRUD)."
    },
    {
      icon: <Bot size={24} />,
      title: "Klasifikasi Otomatis (Naïve Bayes)",
      description: "Mengklasifikasikan surat masuk ke dalam kategori (Edaran, Keputusan, Permohonan, Tugas, Undangan) secara otomatis dengan akurasi 74.4%."
    },
     {
      icon: <FileText size={24} />,
      title: "Ekstraksi Entitas Surat (AI)",
      description: "Fitur 'Analisa' menggunakan AI (Google Generative AI) untuk mengekstrak otomatis informasi penting (nomor, tanggal, perihal, dll.) dari PDF surat saat menambah data."
    },
    {
      icon: <Users size={24} />,
      title: "Manajemen Pengguna & Hak Akses",
      description: "Admin dapat mengelola pengguna (CRUD) dan hak akses, sementara pengguna biasa dapat mengelola profil dan password mereka."
    },
    {
      icon: <Search size={24} />,
      title: "Pencarian & Pratinjau Dokumen",
      description: "Memudahkan pencarian arsip berdasarkan kata kunci dan menampilkan pratinjau dokumen PDF langsung di aplikasi."
    }
  ],
  featureShowcase: [
    {
      imageSrc: "/images/arsip-surat/login.png", // <-- GANTI DENGAN PATH SCREENSHOT
      title: "Halaman Login",
      description: "Antarmuka masuk yang aman menggunakan username dan password dengan autentikasi JWT."
    },
    {
      imageSrc: "/images/arsip-surat/surat-masuk.png", // <-- GANTI DENGAN PATH SCREENSHOT
      title: "Manajemen Surat Masuk",
      description: "Menampilkan daftar surat masuk dalam tabel, dilengkapi fitur pencarian, filter, paginasi, serta aksi CRUD dan pratinjau dokumen."
    },
    {
      imageSrc: "/images/arsip-surat/tambah-analisa.png", // <-- GANTI DENGAN PATH SCREENSHOT
      title: "Tambah Surat dengan Analisa AI",
      description: "Formulir penambahan surat dengan fitur unggah PDF dan tombol 'Analisa' untuk ekstraksi data otomatis menggunakan AI sebelum disimpan."
    },
     {
      imageSrc: "/images/arsip-surat/klasifikasi.png", // <-- GANTI DENGAN PATH SCREENSHOT
      title: "Klasifikasi Surat Otomatis",
      description: "Menampilkan hasil klasifikasi otomatis kategori surat masuk yang dilakukan oleh model Naïve Bayes pada tabel data."
    },
    {
      imageSrc: "/images/arsip-surat/user-config.png", // <-- GANTI DENGAN PATH SCREENSHOT
      title: "Pengaturan Pengguna (Admin)",
      description: "Halaman khusus admin untuk menambah, melihat, mengubah (termasuk status aktif/superuser), dan menghapus akun pengguna sistem."
    },
  ],
  showcaseType: 'desktop', // Tampilan web, cocok untuk desktop
}
// ... (Tambahkan proyek lain di sini jika ada)
];

// Fungsi helper untuk mengambil data proyek berdasarkan slug
export const getProjectBySlug = (slug: string): Project | undefined => {
return projectsData.find(project => project.slug === slug);
};