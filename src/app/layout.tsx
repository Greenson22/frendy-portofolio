import './globals.css';
import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Frendy Rikal Gerung | Portfolio',
  description: 'Portfolio Frendy Rikal Gerung, seorang Web, Android, dan Game Developer.',
};

// Menambahkan tipe untuk props 'children'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  );
}