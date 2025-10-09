// lib/projects.ts

// Definisikan tipe data yang lebih detail untuk setiap proyek
export type Project = {
    slug: string; // Untuk URL, contoh: "rspace"
    title: string; // Judul Proyek
    summary: string; // Deskripsi singkat untuk kartu di halaman utama
    tags: string[]; // Tag teknologi utama
    
    // Konten detail untuk halaman proyek
    content: {
      description: {
        title: string;
        text: string[]; // Deskripsi dalam bentuk paragraf
      };
      goals?: { // Bagian ini opsional
        title: string;
        text: string[];
      };
      keyFeatures: {
        title: string;
        features: {
          category: string;
          points: string[];
        }[];
      };
      techStack: {
        title: string;
        stacks: {
          category: string;
          items: string;
        }[];
      };
      challenges?: { // Bagian ini opsional
        title: string;
        text: string[];
      };
    };
  };
  
  // Array yang berisi semua data proyek Anda
  export const projects: Project[] = [
    {
      slug: "rspace-app",
      title: "RSpace: Aplikasi Flutter Lintas Platform",
      summary: "Aplikasi serbaguna (Android & Desktop) untuk manajemen konten, produktivitas, dan pembelajaran dengan integrasi AI.",
      tags: ["Flutter", "Dart", "Provider", "Google Gemini"],
      content: {
        description: {
          title: "Deskripsi Proyek",
          text: [
            "RSpace adalah aplikasi serbaguna yang dikembangkan menggunakan Flutter, dirancang untuk berjalan mulus di platform Android dan desktop. Aplikasi ini dibuat oleh Frendy Rikal Gerung dan berfungsi sebagai platform yang kuat untuk manajemen konten, produktivitas, dan pembelajaran.",
            "Dengan fokus pada pengalaman pengguna yang kaya dan fungsionalitas yang luas, RSpace memanfaatkan berbagai teknologi modern untuk memberikan solusi yang komprehensif, mulai dari editor kode terintegrasi hingga fitur berbasis AI dengan Google Gemini."
          ],
        },
        goals: {
          title: "Tujuan Proyek (Dummy Data)",
          text: [
            "Membangun aplikasi lintas platform yang fungsional penuh dari awal menggunakan Flutter untuk menguji kemampuannya di Android dan Desktop.",
            "Mengimplementasikan state management yang efisien dan scalable menggunakan Provider.",
            "Mengintegrasikan API pihak ketiga, termasuk layanan AI (Google Gemini) dan monetisasi (Google Mobile Ads), untuk memahami siklus hidup pengembangan aplikasi secara lengkap."
          ]
        },
        keyFeatures: {
          title: "Fitur Utama",
          features: [
            {
              category: "Manajemen Konten & Produktivitas",
              points: [
                "Penyimpanan Lokal & Preferensi (shared_preferences, path_provider)",
                "Manajemen File (file_picker, file_saver)",
                "Tampilan Web Terintegrasi (webview_flutter)",
                "Editor Teks & Kode dengan Syntax Highlighting (code_text_field, flutter_highlight)",
                "Renderer Konten HTML & Markdown (html, flutter_markdown)",
              ],
            },
            {
              category: "Interaksi & Pengalaman Pengguna (UX)",
              points: [
                "UI Dinamis & Interaktif dengan Provider State Management",
                "Aksi Cepat (Quick Actions) dari Home Screen",
                "Tampilan Grid yang Dapat Diatur Ulang (reorderable_grid_view)",
                "Menu Floating Action Button yang Dapat Diperluas (flutter_speed_dial)",
              ],
            },
            {
              category: "Integrasi & Fungsionalitas Lanjutan",
              points: [
                "Kecerdasan Buatan (AI) terintegrasi dengan Google Gemini",
                "Integrasi Iklan (Google Mobile Ads) untuk monetisasi",
                "Enkripsi Data dan Penyimpanan Aman (encrypt, flutter_secure_storage)",
                "Berbagi Konten ke Aplikasi Lain (share_plus)",
                "Interaksi dengan Aplikasi Eksternal (open_file, url_launcher)",
              ],
            },
          ],
        },
        techStack: {
          title: "Teknologi yang Digunakan",
          stacks: [
            { category: "Framework", items: "Flutter" },
            { category: "Bahasa Pemrograman", items: "Dart" },
            { category: "State Management", items: "Provider" },
            { category: "Penyimpanan", items: "Shared Preferences, Secure Storage, Path Provider" },
            { category: "API & Integrasi", items: "Google Mobile Ads, Google Gemini" },
            { category: "UI/UX", items: "Material Design, Cupertino Icons, Reorderable Grid View" },
          ],
        },
        challenges: {
          title: "Tantangan & Pembelajaran (Dummy Data)",
          text: [
            "Salah satu tantangan utama adalah memastikan performa tetap optimal di kedua platform (Android dan Desktop) dengan basis kode yang sama, terutama pada fitur yang intensif seperti editor kode dan renderer web.",
            "Mengelola berbagai izin perangkat (permission_handler) secara konsisten di lintas platform memerlukan penanganan kasus khusus untuk setiap OS.",
            "Proyek ini memberikan pembelajaran mendalam tentang pentingnya arsitektur yang solid dan state management yang terorganisir, terutama saat aplikasi tumbuh semakin kompleks dengan banyak fitur."
          ]
        }
      },
    },
    // Anda bisa menambahkan proyek lain di sini di masa depan
  ];
  
  // Fungsi helper untuk mendapatkan semua proyek
  export const getAllProjects = (): Project[] => {
    return projects;
  };
  
  // Fungsi helper untuk mendapatkan satu proyek berdasarkan slug-nya
  export const getProjectBySlug = (slug: string): Project | undefined => {
    return projects.find((project) => project.slug === slug);
  };