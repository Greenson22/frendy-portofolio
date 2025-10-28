// src/app/proyek/[slug]/page.tsx
import React from 'react';
import { getProjectBySlug, projectsData } from '@/lib/projectsData';
import { notFound } from 'next/navigation';
import ProjectHeroLayout from '@/components/layouts/ProjectHeroLayout';
import ProjectOverviewLayout from '@/components/layouts/ProjectOverviewLayout';
import ProjectFeaturesLayout from '@/components/layouts/ProjectFeaturesLayout';
import FooterLayout from '@/components/layouts/FooterLayout';

// (Opsional tapi direkomendasikan) Generate halaman statis saat build
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-white">
      <ProjectHeroLayout
        title={project.title}
        description={project.description}
        iconSrc={project.image}
        githubUrl={project.githubUrl}
        githubUrlBackend={project.githubUrlBackend} // <-- Teruskan properti ini
      />
      <ProjectOverviewLayout project={project} />
      <ProjectFeaturesLayout
        features={project.featureShowcase}
        showcaseType={project.showcaseType}
      />
      <FooterLayout />
    </div>
  );
}