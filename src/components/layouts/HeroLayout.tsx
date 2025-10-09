import React from 'react';
import Heading from "../elements/Heading";
import Button from "../elements/Button";

const HeroLayout: React.FC = () => {
  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-50 py-20">
      <Heading level={1}>Frendy Rikal Gerung</Heading>
      <p className="mt-4 text-xl md:text-2xl text-blue-600 font-semibold">
        Full-Stack Developer & Problem Solver
      </p>
      <p className="mt-6 max-w-2xl text-lg text-gray-600">
        Mahasiswa lulusan Teknik Informatika dengan hasrat untuk menciptakan solusi teknologi yang inovatif dan efisien, mulai dari aplikasi web hingga game.
      </p>
      <div className="mt-8 flex space-x-4">
        <Button href="#projects" variant="primary">Lihat Proyek Saya</Button>
        <Button href="#contact" variant="secondary">Hubungi Saya</Button>
      </div>
    </section>
  );
};

export default HeroLayout;