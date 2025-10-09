"use client";
import React from 'react';
import YoutubeMusicDownloaderSuiteHeroLayout from '../layouts/YoutubeMusicDownloaderSuiteHeroLayout';
import YoutubeMusicDownloaderSuiteOverviewLayout from '../layouts/YoutubeMusicDownloaderSuiteOverviewLayout';

// Data spesifik untuk halaman Youtube Music Downloader Suite
const techStack = [
  "Python", "Tkinter", "yt-dlp", "Threading", "FFmpeg"
];

const YoutubeMusicDownloaderSuiteView: React.FC = () => {
  return (
    <div className="bg-white">
      <YoutubeMusicDownloaderSuiteHeroLayout />
      <YoutubeMusicDownloaderSuiteOverviewLayout techStack={techStack} />
    </div>
  );
};

export default YoutubeMusicDownloaderSuiteView;