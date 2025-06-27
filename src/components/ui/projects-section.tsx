
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ProjectsSectionProps {
  className?: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Chanikma Interior - WebApp",
    description: "A fully responsive e-commerce platform with user authentication, product filtering, and secure payment processing.",
    tags: ["React", "Node.js", "Redux", "MongoDB"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
    link: "#",
  },
  {
    id: 2,
    title: "Crop Monoitoring System",
    description: "This project is a Crop Monitoring System developed for Green Shadow (Pvt) Ltd., a mid-scale farm specializing in root crops and cereals. The system aims to manage the company’s fields, crops, staff, vehicles, and equipment while supporting monitoring logs and data analysis.",
    tags: ["SpringBoot", "JWT", "Html", "JavaScript"],
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
    link: "#",
  },
  {
    id: 3,
    title: "Chanikma Interior MobileApp",
    description: "Chanikma Interior is a React Native application designed for  on the go. Whether you're a professional tradesperson or a DIY enthusiast, you can easily browse, rent, and manage tool rentals right from your mobile device",
    tags: ["React Native", "Firebase", "Redux", "Machine Learning"],
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
    link: "#",
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "An analytics dashboard for monitoring and managing social media performance across multiple platforms.",
    tags: ["Vue.js", "Express", "D3.js", "MySQL"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
    link: "#",
  },
  {
    id: 5,
    title: "AI Code Assistant",
    description: "A machine learning-powered code assistant that provides intelligent suggestions and autocompletion.",
    tags: ["Python", "TensorFlow", "NLP", "WebAssembly"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
    link: "#",
  },
  {
    id: 6,
    title: "Remote Team Collaboration",
    description: "A suite of tools for remote teams including video conferencing, document collaboration, and task management.",
    tags: ["React", "WebRTC", "Socket.io", "GraphQL"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
    link: "#",
  },
];

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ className }) => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const children = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    children?.forEach((child) => {
      observer.observe(child);
    });
    
    return () => {
      children?.forEach((child) => {
        observer.unobserve(child);
      });
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={cn(
        "py-20 px-6 bg-gradient-to-b from-white to-gray-50 relative",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="animate-on-scroll opacity-0 inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium tracking-wider mb-6">
            MY WORK
          </span>
          
          <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-display font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          
          <p className="animate-on-scroll opacity-0 text-gray-600 max-w-2xl mx-auto">
            Here's a selection of my recent work. Each project represents a unique challenge 
            that I've tackled with creativity and technical expertise.
          </p>
        </div>
        
        <div className="animate-on-scroll opacity-0">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project) => (
                <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
                      <div className="relative w-full aspect-video overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <CardHeader className="p-4 pb-0">
                        <CardTitle className="text-xl font-display">{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-2">
                        <CardDescription className="text-gray-600 mb-4">{project.description}</CardDescription>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {project.tags.map((tag) => (
                            <span 
                              key={tag} 
                              className="inline-block px-2 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button variant="link" className="p-0 h-auto text-blue-600 flex items-center gap-1 hover:gap-2 transition-all" asChild>
                          <a href={project.link}>
                            View Project
                            <ArrowRight className="h-4 w-4" />
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center mt-8 gap-4">
              <CarouselPrevious className="static translate-y-0 left-auto" />
              <CarouselNext className="static translate-y-0 right-auto" />
            </div>
          </Carousel>
        </div>
        
        <div className="animate-on-scroll opacity-0 text-center mt-12">
          <Button 
            asChild
            variant="outline" 
            className="rounded-full px-6 hover:bg-gray-50 hover:shadow-md"
          >
            <a href="https://github.com/DilshanHF">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
