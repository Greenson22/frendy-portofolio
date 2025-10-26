# Portofolio Pribadi - Frendy Rikal Gerung

Ini adalah kode sumber untuk situs portofolio pribadi saya, yang dirancang untuk menampilkan proyek-proyek, keahlian, dan informasi kontak saya. Proyek ini dibangun dengan tumpukan teknologi modern, berfokus pada kinerja, desain responsif, dan animasi yang halus.

## 🚀 Tumpukan Teknologi (Tech Stack)

Proyek ini dibangun menggunakan teknologi modern berbasis TypeScript dan React:

* **Next.js (App Router):** Digunakan sebagai framework React utama, memanfaatkan App Router untuk routing berbasis file (seperti `/` dan `/proyek/[slug]`).
* **React & TypeScript:** Menulis komponen UI yang terstruktur dan aman secara tipe.
* **Tailwind CSS:** Digunakan untuk styling utilitas cepat dan desain responsif.
* **Framer Motion:** Menganimasikan komponen di seluruh situs untuk pengalaman pengguna yang dinamis.
* **Lucide React:** Menyediakan pustaka ikon yang bersih dan konsisten.

## ✨ Fitur Utama

* **Desain Responsif Penuh:** Dibangun dengan Tailwind CSS, situs ini beradaptasi dengan mulus dari perangkat seluler hingga desktop.
* **Halaman Proyek Dinamis:** Menggunakan *dynamic routing* Next.js (`/proyek/[slug]`) untuk secara otomatis membuat halaman detail untuk setiap proyek yang didefinisikan dalam `projectsData.tsx`.
* **Animasi Halus:** Transisi halaman dan animasi komponen ditenagai oleh `framer-motion` untuk memberikan nuansa yang hidup.
* **Data Terpusat:** Semua data untuk proyek dan keahlian dikelola secara terpusat di `src/lib/` untuk kemudahan pemeliharaan dan pembaruan.
* **Arsitektur Komponen:** Kode diatur secara logis ke dalam:

  * `src/app/`: Rute aplikasi (halaman).
  * `src/components/`: Komponen React yang dapat digunakan kembali, dibagi lagi menjadi:

    * `elements`: Komponen UI atomik (misalnya, `Button.tsx`, `Heading.tsx`).
    * `fragments`: Komponen yang lebih kompleks (misalnya, `ProjectCard.tsx`, `SkillListItem.tsx`).
    * `layouts`: Bagian halaman utama (misalnya, `HeroLayout.tsx`, `ProjectsLayout.tsx`, `ContactLayout.tsx`).
    * `views`: Perakitan layout menjadi halaman lengkap (misalnya, `HomeView.tsx`).

## 📦 Instalasi & Menjalankan Secara Lokal

Untuk menjalankan salinan lokal dari proyek ini:

### 1. Clone Repositori

```bash
git clone https://github.com/username/nama-repositori.git
cd nama-repositori
```

### 2. Install Dependensi

Pilih manajer paket pilihan Anda:

```bash
# Menggunakan npm
npm install

# Menggunakan yarn
yarn install

# Menggunakan pnpm
pnpm install
```

### 3. Jalankan Server Pengembangan

Ini akan memulai aplikasi dalam mode pengembangan di `http://localhost:3000`.

```bash
npm run dev
```

### 4. Buat Build Produksi

Untuk membuat build produksi yang dioptimalkan:

```bash
# Membuat build
npm run build

# Menjalankan server produksi
npm run start
```

## 📂 Struktur Folder (Disederhanakan)

```
/
├── public/
│   └── images/         # (Diasumsikan, untuk aset seperti profile.jpg)
├── src/
│   ├── app/
│   │   ├── proyek/
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Template halaman detail proyek
│   │   ├── globals.css           # Stylesheet global Tailwind
│   │   ├── layout.tsx            # Layout root
│   │   └── page.tsx              # Halaman utama (homepage)
│   │
│   ├── components/
│   │   ├── elements/             # Komponen UI dasar (Button, Heading, dll)
│   │   ├── fragments/            # Komponen gabungan (ProjectCard, SkillListItem, dll)
│   │   ├── layouts/              # Bagian halaman (HeroLayout, SkillsLayout, dll)
│   │   └── views/                # Perakitan halaman (HomeView)
│   │
│   └── lib/
│       ├── projectsData.tsx      # Data terpusat untuk proyek
│       └── skillsData.tsx        # Data terpusat untuk keahlian
│
└── package.json
```
