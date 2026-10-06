import React from 'react';

interface ScallopedEdgeProps {
  color?: string; // HEX code or tailwind color value, e.g. '#FBF7F4'
  position?: 'top' | 'bottom';
  className?: string; // allow overrides if needed
}

export default function ScallopedEdge({
  color = '#FBF7F4',
  position = 'top',
  className = ''
}: ScallopedEdgeProps) {
  // Desktop: ~20px depth, Mobile: ~12px depth
  const heightClasses = "h-[12px] sm:h-[16px] lg:h-[20px]";
  
  // Upward pointing semicircle
  const scallopUpSVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 50' preserveAspectRatio='none'%3E%3Cpath d='M0,50 C0,22.38 22.38,0 50,0 C77.62,0 100,22.38 100,50 Z' fill='black'/%3E%3C/svg%3E`;
  
  // Downward pointing semicircle
  const scallopDownSVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 50' preserveAspectRatio='none'%3E%3Cpath d='M0,0 C0,27.62 22.38,50 50,50 C77.62,50 100,27.62 100,0 Z' fill='black'/%3E%3C/svg%3E`;

  const maskSVG = position === 'top' ? scallopUpSVG : scallopDownSVG;
  
  // Position the edge so it slightly overlaps the parent boundary to prevent a 1px hairline gap
  const positionClasses = position === 'top' 
    ? 'absolute top-[1px] left-0 w-full -translate-y-full z-20' 
    : 'absolute bottom-[1px] left-0 w-full translate-y-full z-20';

  return (
    <div 
      className={`pointer-events-none ${positionClasses} ${heightClasses} ${className}`}
      style={{
        backgroundColor: color,
        WebkitMaskImage: `url("${maskSVG}")`,
        maskImage: `url("${maskSVG}")`,
        // Desktop: ~60-70px width, Mobile: ~40px width
        WebkitMaskSize: 'clamp(40px, 6vw, 70px) 100%',
        maskSize: 'clamp(40px, 6vw, 70px) 100%',
        WebkitMaskRepeat: 'repeat-x',
        maskRepeat: 'repeat-x',
        WebkitMaskPosition: position === 'top' ? 'bottom' : 'top',
        maskPosition: position === 'top' ? 'bottom' : 'top',
      }}
    />
  );
}
