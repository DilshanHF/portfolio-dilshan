
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className }) => {
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
      id="about"
      ref={sectionRef}
      className={cn(
        "py-20 px-6 relative overflow-hidden",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="animate-on-scroll opacity-0 relative z-10">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 animate-glow" />
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')]  bg-cover bg-center" />
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-72 h-72 rounded-full bg-blue-100 filter blur-3xl opacity-20 animate-float" />
              <div className="absolute -top-6 -left-6 w-72 h-72 rounded-full bg-cyan-100 filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="max-w-lg">
              <span className="animate-on-scroll opacity-0 inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium tracking-wider mb-6">
                ABOUT ME
              </span>
              
              <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-display font-bold mb-6">
                Passionate about creating <span className="text-gradient">beautiful experiences</span>
              </h2>
              
              <div className="animate-on-scroll opacity-0 space-y-4 text-gray-600">
                <p>
                  I'm a dedicated developer with a passion for creating elegant, user-focused digital experiences. 
                  I believe in the power of thoughtful design and clean code to solve complex problems.
                </p>
                
                <p>
                  With expertise in modern frontend technologies like React, Tailwind CSS, and more, 
                  I create responsive, accessible, and performant applications that deliver real value.
                </p>
                
                <p>
                  Beyond coding, I'm constantly exploring new technologies and design concepts to expand my 
                  capabilities and bring fresh perspectives to my work.
                </p>
              </div>
              
              <div className="animate-on-scroll opacity-0 mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10">
                  <div className="font-display text-2xl font-bold text-blue-600">4+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                
                <div className="p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10">
                  <div className="font-display text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                
                <div className="p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10">
                  <div className="font-display text-2xl font-bold text-blue-600">30+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                
                <div className="p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10">
                  <div className="font-display text-2xl font-bold text-blue-600">12+</div>
                  <div className="text-sm text-gray-600">Awards Received</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
