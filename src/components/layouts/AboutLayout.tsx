"use client";

import React from 'react';
import Heading from "../elements/Heading";
import { motion } from 'framer-motion';
import { Briefcase, Calendar, GraduationCap, MapPin, Sparkles, Wand2 } from 'lucide-react'; // Menambahkan ikon baru

const AboutLayout: React.FC = () => {
  return (
    <motion.section 
        id="about" 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <Heading level={2} className="mb-12 text-center">Tentang Saya</Heading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Kolom Kiri: Narasi */}
          <motion.div 
            className="text-gray-700 leading-relaxed space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg">
              Halo! 👋 Nama saya <strong>Frendy Rikal Gerung</strong>. Kecintaan saya pada teknologi tidak hanya terbatas pada dunia programming. Saya adalah individu yang sangat ingin tahu dan tertarik pada berbagai hal.
            </p>
            <p>
              Bagi saya, inti dari rekayasa perangkat lunak adalah 💡 <strong>penyelesaian masalah</strong>, sebuah keahlian yang saya asah tidak hanya melalui kode, tetapi juga melalui minat saya yang beragam untuk menciptakan solusi yang kreatif dan relevan.
            </p>
             <p>
              Saya percaya bahwa perspektif yang luas membantu saya menciptakan solusi yang lebih <strong>kreatif dan relevan</strong> bagi pengguna. ✨
            </p>
          </motion.div>

          {/* Kolom Kanan: Poin-Poin Kunci dengan Visual yang Ditingkatkan */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Kartu Pendidikan */}
            <div className="p-4 border rounded-lg flex items-start bg-slate-50 hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <GraduationCap className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Pendidikan</h3>
                <p className="text-gray-600">Teknik Informatika, Universitas Negeri Manado (UNIMA).</p>
              </div>
            </div>

            {/* Kartu Info Pribadi dalam Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg flex items-start bg-slate-50 hover:shadow-md transition-shadow">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Calendar className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Lahir</h3>
                  <p className="text-gray-600">22 Feb 2002</p>
                </div>
              </div>
              <div className="p-4 border rounded-lg flex items-start bg-slate-50 hover:shadow-md transition-shadow">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <MapPin className="text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Lokasi</h3>
                  <p className="text-gray-600">Raanan Baru</p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default AboutLayout;