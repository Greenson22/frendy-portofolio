// src/components/layouts/ContactLayout.tsx

"use client";

import React from 'react';
import Heading from "../elements/Heading";
import { motion, Variants } from 'framer-motion';
import { Mail, Github, Linkedin, Facebook, Instagram, ArrowUpRight, Sparkles } from 'lucide-react';

// Varian animasi untuk container utama
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

// Varian animasi untuk setiap item di dalamnya
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const ContactLayout: React.FC = () => {
  return (
    <motion.section 
      id="contact" 
      className="py-20 bg-lime-50"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div variants={itemVariants}>
          <Heading level={2} className="mb-4">Mari Terhubung</Heading>
        </motion.div>
        <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-12">
          Saya selalu terbuka untuk diskusi, kolaborasi, atau peluang baru. Jangan ragu untuk menghubungi saya.
        </motion.p>

        {/* Grid untuk Kartu Kontak */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          
          {/* Kartu Email */}
          <motion.a 
            href="mailto:fredegerung634@gmail.com"
            variants={itemVariants}
            className="group block p-8 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-green-400"
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
                  <Mail className="text-green-600" size={28}/>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600 mt-1">fredegerung634@gmail.com</p>
              </div>
              <ArrowUpRight className="text-gray-400 group-hover:text-green-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </motion.a>

          {/* Kartu Sosial Media */}
          <motion.div 
            variants={itemVariants}
            className="p-8 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-slate-400"
          >
            <div className="bg-slate-100 p-3 rounded-lg inline-block mb-4">
              <Sparkles className="text-slate-600" size={28}/>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Media Sosial</h3>
            <div className="flex space-x-5">
              <a href="https://github.com/Greenson22" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors" aria-label="GitHub">
                <Github size={32} />
              </a>
              <a href="https://linkedin.com/in/frendy-rikal-gerung-bb450b38a" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-700 transition-colors" aria-label="LinkedIn">
                <Linkedin size={32} />
              </a>
              <a href="https://www.facebook.com/frendy.rikal.gerung" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-600 transition-colors" aria-label="Facebook">
                <Facebook size={32} />
              </a>
              <a href="https://www.instagram.com/fr_gerung?igsh=MXNjYms4dWdnbXE2NA==" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-500 transition-colors" aria-label="Instagram">
                <Instagram size={32} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default ContactLayout;