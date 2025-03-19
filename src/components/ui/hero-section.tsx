
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Facebook } from 'lucide-react';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  const spotlightRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current) return;
      
      const { clientX, clientY } = e;
      const x = clientX / window.innerWidth;
      const y = clientY / window.innerHeight;
      
      spotlightRef.current.style.background = `radial-gradient(600px circle at ${x * 100}% ${y * 100}%, rgba(191, 218, 254, 0.15), transparent 40%)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="hero" 
      className={cn(
        "relative min-h-screen flex flex-col items-center justify-center overflow-hidden",
        className
      )}
    >
      {/* Background overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-0"></div>
      
      <div ref={spotlightRef} className="pointer-events-none absolute inset-0 z-10 opacity-60" />

      <div className="container relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 py-20">
        {/* Left side content */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="inline-block animate-fade-in opacity-0">
            <span
                className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium tracking-wider">
              DILSHAN
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight animate-fade-in opacity-0 delay-100 text-white">
            <span className="text-gradient">I'm Dilshan Fonseka</span>
            <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Professional Software Developer </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 animate-fade-in opacity-0 delay-200 text-balance">
            Crafting digital experiences with elegant code and intuitive design,I specialize in modern,
            high-performance web development focused on user experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0 delay-300">
            <Button
                onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}
                className="px-6 py-6 rounded-full bg-white text-black font-medium transition-all hover:shadow-lg hover:scale-105 active:scale-95"
            >
              View My Work
            </Button>

            <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                className="px-6 py-6 rounded-full bg-transparent border border-white text-white font-medium transition-all hover:bg-white/10 hover:shadow-md active:scale-95"
                variant="outline"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-4 animate-fade-in opacity-0 delay-400">
            <a
                href="https://github.com/DilshanHF"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all hover:bg-white/20 hover:scale-110 hover:rotate-6 hover:shadow-lg"
                aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-white transition-all group-hover:text-blue-300"/>
            </a>

            <a
                href="https://www.linkedin.com/in/dilshanfonseka/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all hover:bg-white/20 hover:scale-110 hover:-rotate-6 hover:shadow-lg"
                aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white transition-all group-hover:text-blue-300"/>
            </a>

            <a
                href="https://www.facebook.com/share/1BDhhS9TZ7/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all hover:bg-white/20 hover:scale-110 hover:rotate-6 hover:shadow-lg"
                aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-white transition-all group-hover:text-blue-300"/>
            </a>
          </div>
        </div>

        {/* Right side image with animations */}
        <div className="relative hidden lg:flex items-center justify-center">
          <div className="absolute w-[80%] h-[80%] bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>

          <div
              className="relative w-full h-[90%] max-w-md animate-float overflow-hidden rounded-2xl border-2 border-white/10">
            <div
                className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent z-10"></div>

            <div
                className="group relative overflow-hidden w-full h-full rounded-xl transform transition-all duration-500 hover:scale-105">
              <img
                  src="/assests/5.JPG"
                  alt="Developer portrait"
                  className="w-full h-full object-cover object-top transition-all duration-1000 scale-105 group-hover:scale-110"
              />

              <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-white/20 rounded-tr-xl"></div>
            <div
                className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-white/20 rounded-bl-xl"></div>
          </div>
        </div>
      </div>

      {/* Mobile image (visible only on small screens) */}
      <div className="relative lg:hidden w-full px-6 mt-8 mb-16 animate-fade-in opacity-0 delay-400">
        <div className="relative w-full max-w-xs mx-auto overflow-hidden rounded-xl border border-white/10">
          <img
              src="/assests/5.JPG"
              alt="Developer portrait"
              className="w-full aspect-[3/4] object-cover object-top"
          />
        </div>

        {/* Mobile Social Media Links */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <a
              href="https://github.com/DilshanHF"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all hover:bg-white/20"
              aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-white transition-all group-hover:text-blue-300"/>
          </a>

          <a
              href="https://www.linkedin.com/in/dilshanfonseka/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all hover:bg-white/20"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-white transition-all group-hover:text-blue-300" />
          </a>
          
          <a
              href="https://www.facebook.com/share/1BDhhS9TZ7/?mibextid=wwXIfr"
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all hover:bg-white/20"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 text-white transition-all group-hover:text-blue-300" />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          aria-label="Scroll down"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-lg border border-white/30 transition-all hover:bg-white/30"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
    </section>
  );
};

export default HeroSection;
