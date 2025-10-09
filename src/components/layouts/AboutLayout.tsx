import React from 'react';
import Heading from "../elements/Heading";

const AboutLayout: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <Heading level={2} className="mb-8">Tentang Saya</Heading>
        <div className="text-center text-gray-700 leading-relaxed space-y-4">
          <p>
            Halo! Nama saya <strong>Frendy Rikal Gerung</strong>, lahir di desa Raanan Baru pada 22 Februari 2002. Saya akan lulus dari program studi <strong>Teknik Informatika</strong> di <strong>Universitas Negeri Manado (UNIMA)</strong> pada 18 Juni 2025.
          </p>
          <p>
            Kecintaan saya pada teknologi tidak hanya terbatas pada dunia programming. Saya adalah individu yang sangat ingin tahu dan tertarik pada berbagai hal, bahkan yang berada di luar lingkup IT. Bagi saya, inti dari rekayasa perangkat lunak adalah <strong>penyelesaian masalah</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutLayout;