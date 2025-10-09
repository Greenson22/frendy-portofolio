import Heading from "@/components/elements/Heading";
import Link from "next/link";
import React from 'react';

// Komponen helper bisa kita letakkan di sini karena hanya dipakai di halaman ini
const ContentSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="mb-12">
    <h2 className="text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-200">{title}</h2>
    <div className="text-gray-700 leading-relaxed space-y-4">
      {children}
    </div>
  </div>
);

// Ini adalah halaman statis untuk proyek RSpace
export default function RSpaceProjectPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <Link href="/#projects" className="text-blue-600 hover:underline mb-8 inline-block">
          &larr; Kembali ke Halaman Utama
        </Link>
        
        <Heading level={1} className="text-gray-900 text-center">RSpace: Aplikasi Flutter Lintas Platform</Heading>
        <p className="text-center text-xl text-gray-500 mt-2 mb-12">Studi Kasus Detail</p>

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
        
      </div>
    </div>
  );
}