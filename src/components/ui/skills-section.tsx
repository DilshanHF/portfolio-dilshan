
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface SkillsSectionProps {
  className?: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  icon: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ],
  },
  {
    title: "Design Tools",
    skills: [
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Adobe XD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" },
      { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
      { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
    ],
  },
];

const SkillsSection: React.FC<SkillsSectionProps> = ({ className }) => {
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
      id="skills"
      ref={sectionRef}
      className={cn(
        "py-20 px-6 relative overflow-hidden",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="animate-on-scroll opacity-0 inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium tracking-wider mb-6">
            MY SKILLS
          </span>
          
          <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-display font-bold mb-6">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          
          <p className="animate-on-scroll opacity-0 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I've developed expertise in a range of technologies through years of practice, 
            continuous learning, and real-world project implementations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="animate-on-scroll opacity-0 glass-card h-full"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="text-xl font-display font-bold mb-6">{category.title}</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name} 
                    className="flex flex-col items-center justify-center p-4 rounded-lg bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="w-16 h-16 flex items-center justify-center mb-3 relative">
                      <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 rounded-full filter blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <img
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        className="w-10 h-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                        style={{ animationDelay: `${skillIndex * 100}ms` }}
                      />
                    </div>
                    <span className="font-medium text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="animate-on-scroll opacity-0">
          <div className="relative p-8 rounded-2xl overflow-hidden backdrop-blur-lg bg-white/5 dark:bg-white/5 border border-white/20">
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-blue-500/10 filter blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-cyan-500/10 filter blur-3xl" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-display font-bold mb-2">
                  Looking for a developer for your next project?
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mb-6 md:mb-0">
                  I'm currently available for freelance work. Let's build something amazing together!
                </p>
              </div>
              
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium transition-all hover:shadow-lg hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                Let's Work Together
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
