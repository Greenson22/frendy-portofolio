"use client"; // <-- Pastikan ini ada di baris paling atas

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, MotionProps } from 'framer-motion'; // Import motion dan MotionProps

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  techStack: string[];
};

// Kita bisa mendefinisikan varian animasi di sini atau langsung di motion.div
const cardAnimation: MotionProps = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 }, // Animasi akan berjalan setiap kali 20% kartu terlihat
  transition: { duration: 0.6, ease: "easeInOut" }
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link, techStack }) => {
  return (
    <motion.div
      {...cardAnimation} // Terapkan animasi di sini
      className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col transform transition-transform duration-300 hover:scale-[1.02]"
    >
      <div className="relative w-full h-48 bg-gray-200">
        <Image
          src={image}
          alt={`Thumbnail proyek ${title}`}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {techStack.map((tech) => (
            <span key={tech} className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <Link href={link} className="mt-6 inline-block text-green-600 hover:underline font-medium self-start">
          Lihat Detail &rarr;
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;