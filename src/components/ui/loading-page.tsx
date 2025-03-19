
import React, { useEffect, useState } from 'react';
import { Loader } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoadingPageProps {
  minLoadingTime?: number;
  onLoadingComplete?: () => void;
}

const LoadingPage: React.FC<LoadingPageProps> = ({
  minLoadingTime = 2000,
  onLoadingComplete,
}) => {
  const [progress, setProgress] = useState(0);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    let animationFrame: number;
    let timeoutId: NodeJS.Timeout;

    const animate = () => {
      const elapsedTime = Date.now() - startTime;
      const newProgress = Math.min((elapsedTime / minLoadingTime) * 100, 100);
      setProgress(newProgress);

      if (newProgress < 100) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        // Add a small delay before hiding the loader
        timeoutId = setTimeout(() => {
          setShowLoader(false);
          if (onLoadingComplete) {
            onLoadingComplete();
          }
        }, 300);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(timeoutId);
    };
  }, [minLoadingTime, onLoadingComplete]);

  if (!showLoader) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background dark:bg-[#121212] transition-all duration-500">
      <div className="relative flex flex-col items-center">
        <div className="absolute -inset-40 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 animate-float">
          <span className="text-4xl md:text-5xl font-display font-bold text-gradient mb-8">
            Portfolio
          </span>
          <div className="flex items-center justify-center mt-4">
            <Loader className="animate-spin w-8 h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="w-64 h-1 mt-10 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden z-10">
          <div 
            className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full transition-all" 
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="mt-3 text-sm text-muted-foreground z-10">
          Loading your experience...
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
