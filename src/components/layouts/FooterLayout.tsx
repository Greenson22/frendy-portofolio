import React from 'react';
import { Github, Linkedin, Facebook, Instagram } from 'lucide-react';

const FooterLayout: React.FC = () => {
  return (
    <div className="bg-lime-50 mt-20">
      {/* -- BENTUK PEMISAH MELENGKUNG -- */}
      <div style={{ height: '100px', overflow: 'hidden' }}>
        <svg 
          viewBox="0 0 500 150" 
          preserveAspectRatio="none" 
          style={{ height: '100%', width: '100%' }}
        >
          <path 
            d="M0.00,49.98 C150.00,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" 
            style={{ stroke: 'none', fill: '#ffffff' }}>
          </path>
        </svg>
      </div>

      <footer className="bg-white pt-12 pb-8">
        <div className="container mx-auto px-4 text-center text-gray-700">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Frendy R. Gerung</h3>
              <p className="text-sm">
                Full-Stack Developer dengan hasrat untuk menciptakan solusi teknologi yang inovatif dan efisien.
              </p>
            </div>

            <div className="text-left md:text-right">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Terhubung dengan Saya</h3>
              <div className="flex justify-start md:justify-end space-x-4">
                <a href="https://github.com/Greenson22" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                  <Github size={24} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                  <Linkedin size={24} />
                </a>
                <a href="https://www.facebook.com/frendy.rikal.gerung" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-600">
                  <Facebook size={24} />
                </a>
                <a href="https://www.instagram.com/fr_gerung?igsh=MXNjYms4dWdnbXE2NA==" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-500">
                  <Instagram size={24} />
                </a>
              </div>
            </div>

          </div>

          {/* -- GARIS PEMISAH DIPERHALUS -- */}
          <div className="border-t border-green-100 pt-6 mt-8">
            <p className="text-sm">&copy; {new Date().getFullYear()} Frendy Rikal Gerung. Dibuat dengan Next.js.</p>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default FooterLayout;