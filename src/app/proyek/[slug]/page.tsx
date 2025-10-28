// src/app/proyek/[slug]/page.tsx
import React from 'react';
import { getProjectBySlug, projectsData } from '@/lib/projectsData';
import { notFound } from 'next/navigation';
import ProjectHeroLayout from '@/components/layouts/ProjectHeroLayout';
import ProjectOverviewLayout from '@/components/layouts/ProjectOverviewLayout';
import ProjectFeaturesLayout from '@/components/layouts/ProjectFeaturesLayout';
import FooterLayout from '@/components/layouts/FooterLayout';
import ProjectNavigation from '@/components/fragments/ProjectNavigation';

// (GenerateStaticParams tetap sama)
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

  const currentIndex = projectsData.findIndex(p => p.slug === slug);
  const prevProjectData = currentIndex > 0 ? projectsData[currentIndex - 1] : undefined;
  const nextProjectData = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : undefined;

  // --- Ambil slug, title, DAN image ---
  const prevProject = prevProjectData
    ? { slug: prevProjectData.slug, title: prevProjectData.title, image: prevProjectData.image }
    : undefined;
  const nextProject = nextProjectData
    ? { slug: nextProjectData.slug, title: nextProjectData.title, image: nextProjectData.image }
    : undefined;
  // --- Akhir perubahan ---

  return (
    <div className="bg-white">
      <ProjectHeroLayout
        title={project.title}
        description={project.description}
        iconSrc={project.image}
        githubUrl={project.githubUrl}
        githubUrlBackend={project.githubUrlBackend}
      />
      <ProjectOverviewLayout project={project} />
      <ProjectFeaturesLayout
        features={project.featureShowcase}
        showcaseType={project.showcaseType}
      />

      {/* Teruskan prevProject dan nextProject yang sudah ada image-nya */}
      <ProjectNavigation prevProject={prevProject} nextProject={nextProject} />

      <FooterLayout />
    </div>
  );
}