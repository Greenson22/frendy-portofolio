// src/app/proyek/[slug]/page.tsx
import React from 'react';
import { getProjectBySlug, projectsData } from '@/lib/projectsData';
import { notFound } from 'next/navigation';
import ProjectHeroLayout from '@/components/layouts/ProjectHeroLayout';
import ProjectOverviewLayout from '@/components/layouts/ProjectOverviewLayout';
import ProjectFeaturesLayout from '@/components/layouts/ProjectFeaturesLayout';
import FooterLayout from '@/components/layouts/FooterLayout';

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

// (Opsional tapi direkomendasikan) Generate halaman statis saat build
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

// --- PERUBAHAN DI SINI ---
// 1. Hapus "React.FC" dan "const ProjectPage"
// 2. Tambahkan "async" dan ekspor sebagai "default function"
export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;
  const project = getProjectBySlug(slug);

  // Jika proyek tidak ditemukan, tampilkan halaman 404
  if (!project) {
    notFound();
  }

  return (
    <div className="bg-white">
      <ProjectHeroLayout
        title={project.title}
        description={project.description} // Deskripsi singkat untuk hero
        iconSrc={project.image}
        githubUrl={project.githubUrl}
      />
      <ProjectOverviewLayout project={project} />
      <ProjectFeaturesLayout
        features={project.featureShowcase}
        showcaseType={project.showcaseType}
      />
      <FooterLayout />
    </div>
  );
};