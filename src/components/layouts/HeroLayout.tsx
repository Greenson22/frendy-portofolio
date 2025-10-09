import React from 'react';
import Image from 'next/image'; // <-- Import komponen Image
import Heading from "../elements/Heading";
import Button from "../elements/Button";

const HeroLayout: React.FC = () => {
  return (
    <section 
      id="hero" 
      // Mengubah layout menjadi flex, vertikal di mobile (flex-col), horizontal di desktop (md:flex-row)
      className="flex flex-col md:flex-row items-center justify-center min-h-screen text-center md:text-left py-20"
    >
      {/* Kolom untuk Foto Profil */}
      <div className="md:w-1/3 mb-8 md:mb-0 md:mr-12 flex-shrink-0">
        <div className="relative w-64 h-64 mx-auto">
          <Image
            src="/images/profile.jpg" // <-- Path ke foto Anda di folder public
            alt="Foto Profil Frendy Rikal Gerung"
            width={300}
            height={300}
            className="rounded-full object-cover border-4 border-gray-300 shadow-lg"
            priority // Membuat gambar ini diprioritaskan untuk loading cepat (LCP)
          />
        </div>
      </div>

      {/* Kolom untuk Teks */}
      <div className="md:w-2/3">
        <p className="text-xl text-blue-600 font-semibold">
          Halo, saya
        </p>
        <Heading level={1} className="text-center md:text-left">Frendy Rikal Gerung</Heading>
        <p className="mt-4 text-xl md:text-2xl text-gray-700">
          Full-Stack Developer & Problem Solver
        </p>
        <p className="mt-6 max-w-xl text-lg text-gray-600 mx-auto md:mx-0">
          Mahasiswa lulusan Teknik Informatika dengan hasrat untuk menciptakan solusi teknologi yang inovatif dan efisien, mulai dari aplikasi web hingga game.
        </p>
        <div className="mt-8 flex space-x-4 justify-center md:justify-start">
          <Button href="#projects" variant="primary">Lihat Proyek Saya</Button>
          <Button href="#contact" variant="secondary">Hubungi Saya</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroLayout;