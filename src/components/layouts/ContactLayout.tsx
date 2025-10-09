import React from 'react';
import Heading from "../elements/Heading";

const ContactLayout: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <Heading level={2} className="mb-4">Hubungi Saya</Heading>
        <p className="text-lg text-gray-600 mb-8">
          Saya selalu terbuka untuk diskusi, kolaborasi, atau peluang baru. Jangan ragu untuk menghubungi saya.
        </p>
        <div className="flex justify-center items-center space-x-6">
          <a href="mailto:frendy.rikal.gerung@dummy.com" className="text-xl font-semibold text-blue-600 hover:underline">
            frendy.rikal.gerung@dummy.com
          </a>
        </div>
        <div className="mt-8 flex justify-center space-x-6">
          {/* Ganti dengan link profil Anda yang sebenarnya */}
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">GitHub</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default ContactLayout;