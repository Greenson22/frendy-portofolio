"use client";

import React from 'react';
import Image from 'next/image';
import Heading from "../elements/Heading";
import Button from "../elements/Button";
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } }
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const HeroLayout: React.FC = () => {
  return (
    <motion.section
      id="hero" 
      className="flex flex-col md:flex-row items-center justify-center min-h-screen text-center md:text-left py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={imageVariants} className="md:w-1/3 mb-8 md:mb-0 md:mr-12 flex-shrink-0">
        <div className="relative w-64 h-64 mx-auto">
          <Image
            src="/images/profile.jpg"
            alt="Foto Profil Frendy Rikal Gerung"
            width={300}
            height={300}
            className="rounded-full object-cover border-4 border-gray-300 shadow-lg"
            priority
          />
        </div>
      </motion.div>

      <div className="md:w-2/3">
        <motion.p variants={itemVariants} className="text-xl text-blue-600 font-semibold">
          Halo, saya
        </motion.p>
        <motion.div variants={itemVariants}>
          <Heading level={1} className="text-center md:text-left">Frendy Rikal Gerung</Heading>
        </motion.div>
        <motion.p variants={itemVariants} className="mt-4 text-xl md:text-2xl text-gray-700">
          Full-Stack Developer & Problem Solver
        </motion.p>
        <motion.p variants={itemVariants} className="mt-6 max-w-xl text-lg text-gray-600 mx-auto md:mx-0">
          Mahasiswa lulusan Teknik Informatika dengan hasrat untuk menciptakan solusi teknologi yang inovatif dan efisien.
        </motion.p>
        <motion.div variants={itemVariants} className="mt-8 flex space-x-4 justify-center md:justify-start">
          <Button href="#projects" variant="primary">Lihat Proyek Saya</Button>
          <Button href="#contact" variant="secondary">Hubungi Saya</Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroLayout;