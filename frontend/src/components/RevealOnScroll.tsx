import { useEffect, useRef, useState, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const RevealOnScroll = ({
  children,
  className = '',
  delay = 0,
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return true;
    return !('IntersectionObserver' in window);
  });

  useEffect(() => {
    if (isVisible) return;

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setIsVisible(true), delay);
          } else {
            setIsVisible(true);
          }
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [delay, isVisible]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
