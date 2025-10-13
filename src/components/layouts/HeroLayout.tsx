// src/components/layouts/HeroLayout.tsx

"use client";

import React from 'react';
import Image from 'next/image';
import Heading from "../elements/Heading";
import Button from "../elements/Button";
import { motion, Variants } from 'framer-motion';
import { Github, Linkedin, Facebook, Instagram } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const textItemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const HeroLayout: React.FC = () => {
  return (
    <motion.section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-lime-50 py-20 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Kolom Kiri: Konten Teks */}
        <motion.div
          className="text-center md:text-left"
          variants={containerVariants}
        >
          <motion.p variants={textItemVariants} className="text-xl text-green-600 font-semibold">
            Halo, saya
          </motion.p>

          <motion.div variants={textItemVariants}>
            <Heading level={1} className="text-5xl md:text-7xl !text-left">Frendy Rikal Gerung</Heading>
          </motion.div>

          <motion.p variants={textItemVariants} className="mt-4 text-xl md:text-2xl text-gray-700">
            Full-Stack Developer & Problem Solver
          </motion.p>

          <motion.p variants={textItemVariants} className="mt-6 max-w-lg text-lg text-gray-600">
            Mahasiswa lulusan Teknik Informatika dengan hasrat untuk menciptakan solusi teknologi yang inovatif, efisien, dan memberikan pengalaman pengguna yang luar biasa.
          </motion.p>

          <motion.div variants={textItemVariants} className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <Button href="#projects" variant="primary">Lihat Proyek Saya</Button>
            <Button href="#contact" variant="secondary">Hubungi Saya</Button>
          </motion.div>

          <motion.div variants={textItemVariants} className="mt-8 flex space-x-6 justify-center md:justify-start">
            <a href="https://github.com/Greenson22" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com/in/frendy-rikal-gerung-bb450b38a" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
              <Linkedin size={28} />
            </a>
            <a href="https://www.facebook.com/frendy.rikal.gerung" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-600 transition-colors">
              <Facebook size={28} />
            </a>
            <a href="https://www.instagram.com/fr_gerung?igsh=MXNjYms4dWdnbXE2NA==" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-500 transition-colors">
              <Instagram size={28} />
            </a>
          </motion.div>
        </motion.div>

        {/* Kolom Kanan: Gambar */}
        <motion.div
          variants={imageVariants}
          className="flex justify-center items-center"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Bentuk Latar Belakang */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-teal-300 rounded-3xl transform -rotate-12"></div>

            {/* Gambar Profil */}
            <div className="absolute inset-5">
              <Image
                src="/images/profile.jpg"
                alt="Foto Profil Frendy Rikal Gerung"
                width={384}
                height={384}
                className="rounded-2xl object-cover shadow-2xl w-full h-full"
                priority
              />
            </div>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default HeroLayout;