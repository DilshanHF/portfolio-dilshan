
import React from 'react';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const year = new Date().getFullYear();
  
  return (
    <footer className={cn(
      "py-12 px-6 bg-gray-100 relative overflow-hidden",
      className
    )}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#hero" className="text-2xl font-display font-bold tracking-tight hover:opacity-80 transition-opacity">
              <span className="text-gradient">Portfolio</span>
            </a>
            <p className="text-gray-600 mt-2 max-w-sm">
              Building beautiful, functional digital experiences with meticulous attention to detail.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="font-bold mb-4">Navigation</h4>
              <ul className="space-y-2">
                {[
                  { name: 'Home', id: 'hero' },
                  { name: 'About', id: 'about' },
                  { name: 'Projects', id: 'projects' },
                  { name: 'Skills', id: 'skills' },
                  { name: 'Contact', id: 'contact' },
                ].map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Social</h4>
              <ul className="space-y-2">
                {[
                  { name: 'Twitter', url: '#' },
                  { name: 'GitHub', url: '#' },
                  { name: 'LinkedIn', url: '#' },
                  { name: 'Dribbble', url: '#' },
                  { name: 'Instagram', url: '#' },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.url}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="mailto:hello@example.com"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    hello@example.com
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+1234567890"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="text-gray-600">
                  San Francisco, CA
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {year} Portfolio. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
