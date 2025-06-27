
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

interface EducationSectionProps {
  className?: string;
}

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  logo: string;
}

const educationList: Education[] = [
  {
    degree: "GDSE of Software Engineering",
    institution: "Institute of Software Engineering",
    location: "Panadura",
    period: "2022 - 2025",
    description: "Specialized in Full-stack Development and Machine Learning. Graduated with honors and completed a thesis on neural network optimization techniques.",
    logo: "../assests/Ijse logo.jpg",
  },
  {
    degree: "Diploma in Information Technoology",
    institution: "Esoft Metro Campus",
    location: "Panadura",
    period: "2020-2021",
    description: "Earned a Diploma in Information Technology with a strong foundation in software development, databases, and networking.",
    logo: "../assests/Esoft Logo.jpg",
  },
  {
    degree: "Award for GCE A/L's",
    institution: " Royal Collage Panadura",
    location: "Panadura",
    period: "2019",
    description: "Completed school education in the Maths stream, successfully following A/Ls with a focus on problem-solving and analytical skills.",
    logo: "../assests/royal logo.jpeg",
  }
];

const EducationSection: React.FC<EducationSectionProps> = ({ className }) => {
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
      id="education"
      ref={sectionRef}
      className={cn(
        "py-20 px-6 relative overflow-hidden bg-gradient-to-b from-transparent to-blue-50/30",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="animate-on-scroll opacity-0 inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium tracking-wider mb-6">
            EDUCATION
          </span>
          
          <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-display font-bold mb-6">
            Academic <span className="text-gradient">Background</span>
          </h2>
          
          <p className="animate-on-scroll opacity-0 text-gray-600 max-w-2xl mx-auto">
            My educational journey has equipped me with a strong foundation in both theoretical knowledge
            and practical skills necessary for the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationList.map((education, index) => (
            <div 
              key={index}
              className="animate-on-scroll opacity-0"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-white/70 backdrop-blur-sm border border-white/50">
                <div className="relative h-32 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent z-10"></div>
                  <img 
                    src={education.logo} 
                    alt={education.institution} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-4 z-20">
                    <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-blue-800 text-xs font-medium rounded">
                      {education.period}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-display font-bold">{education.degree}</h3>
                    <div className="flex flex-col">
                      <span className="text-gray-800">{education.institution}</span>
                      <span className="text-gray-600 text-sm">{education.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm">
                    {education.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <div className="animate-on-scroll opacity-0 inline-flex items-center text-sm text-blue-700 font-medium hover:text-blue-800 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            View Full Curriculum Vitae
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-blue-500/5 filter blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-cyan-500/5 filter blur-3xl" />
    </section>
  );
};

export default EducationSection;
