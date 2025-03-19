
import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout';
import LoadingPage from '@/components/ui/loading-page';
import HeroSection from '@/components/ui/hero-section';
import AboutSection from '@/components/ui/about-section';
import EducationSection from '@/components/ui/education-section';
import ProjectsSection from '@/components/ui/projects-section';
import SkillsSection from '@/components/ui/skills-section';
import ContactSection from '@/components/ui/contact-section';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Preload images for better performance
  useEffect(() => {
    const preloadImages = [
      '/lovable-uploads/4fcd0b14-628f-4b1f-8db8-970d2128d72a.png',
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80',
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80',
      'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80',
    ];
    
    preloadImages.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  return (
    <>
      {isLoading && <LoadingPage onLoadingComplete={() => setIsLoading(false)} />}
      <Layout>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </Layout>
    </>
  );
};

export default Index;
