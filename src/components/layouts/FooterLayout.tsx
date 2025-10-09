import React from 'react';

const FooterLayout: React.FC = () => {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Frendy Rikal Gerung. Dibuat dengan Next.js.</p>
      </div>
    </footer>
  );
};

export default FooterLayout;