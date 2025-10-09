import React from 'react';
import NavbarLayout from "../layouts/NavbarLayout";
import HeroLayout from "../layouts/HeroLayout";
import AboutLayout from "../layouts/AboutLayout";
import SkillsLayout from "../layouts/SkillsLayout";
import ProjectsLayout from "../layouts/ProjectsLayout";
import ContactLayout from "../layouts/ContactLayout";
import FooterLayout from "../layouts/FooterLayout";

const HomeView: React.FC = () => {
  return (
    <>
      <NavbarLayout />
      <main className="container mx-auto px-4">
        <HeroLayout />
        <AboutLayout />
        <SkillsLayout />
        <ProjectsLayout />
        <ContactLayout />
      </main>
      <FooterLayout />
    </>
  );
};

export default HomeView;