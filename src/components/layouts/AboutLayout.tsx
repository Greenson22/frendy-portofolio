"use client";

import React from 'react';
import Heading from "../elements/Heading";
import { motion } from 'framer-motion';

const AboutLayout: React.FC = () => {
  return (
    <motion.section 
        id="about" 
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto">
        <Heading level={2} className="mb-8">Tentang Saya</Heading>
        <div className="text-center text-gray-700 leading-relaxed space-y-4">
          <p>
            Halo! Nama saya <strong>Frendy Rikal Gerung</strong>, lahir di desa Raanan Baru pada 22 Februari 2002. Saya akan lulus dari program studi <strong>Teknik Informatika</strong> di <strong>Universitas Negeri Manado (UNIMA)</strong> pada 18 Juni 2025.
          </p>
          <p>
            Kecintaan saya pada teknologi tidak hanya terbatas pada dunia programming. Saya adalah individu yang sangat ingin tahu dan tertarik pada berbagai hal, bahkan yang berada di luar lingkup IT. Bagi saya, inti dari rekayasa perangkat lunak adalah <strong>penyelesaian masalah</strong>, sebuah keahlian yang saya asah tidak hanya melalui kode, tetapi juga melalui minat saya yang beragam.
          </p>
          <p>
            Saya percaya bahwa perspektif yang luas membantu saya menciptakan solusi yang lebih kreatif dan relevan bagi pengguna.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutLayout;