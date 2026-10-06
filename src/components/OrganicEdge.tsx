import React from 'react';

interface OrganicEdgeProps {
  color?: string;
  position?: 'top' | 'bottom';
  className?: string;
}

export default function OrganicEdge({
  color = '#FBF7F4',
  position = 'top',
  className = ''
}: OrganicEdgeProps) {
  // Height scales elegantly across breakpoints
  const heightClasses = "h-[15px] sm:h-[20px] md:h-[30px] lg:h-[40px]";
  
  // Anchored inside the container, slightly overshooting the edge to prevent sub-pixel gaps
  const positionClasses = position === 'top' 
    ? 'absolute top-[-1px] left-0 w-full z-20'
    : 'absolute bottom-[-1px] left-0 w-full z-20';

  // EXACT SVG path reused directly from the Mungphai Experiences section
  const pathD = "M0,40 L1200,40 L1200,15 C1180,18 1160,28 1140,25 C1120,22 1100,12 1080,15 C1060,18 1040,28 1020,25 C1000,22 980,12 960,15 C940,18 920,28 900,25 C880,22 860,12 840,15 C820,18 800,28 780,25 C760,22 740,12 720,15 C700,18 680,28 660,25 C640,22 620,12 600,15 C580,18 560,28 540,25 C520,22 500,12 480,15 C460,18 440,28 420,25 C400,22 380,12 360,15 C340,18 320,28 300,25 C280,22 260,12 240,15 C220,18 200,28 180,25 C160,22 140,12 120,15 C100,18 80,28 60,25 C40,22 20,12 0,15 Z";

  return (
    <div className={`pointer-events-none ${positionClasses} ${heightClasses} ${className} overflow-hidden`}>
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 40" 
        preserveAspectRatio="none" 
        className={`w-full h-full block ${position === 'top' ? 'scale-y-[-1]' : ''}`}
        style={{ color: color }}
      >
        <path d={pathD} fill="currentColor" />
      </svg>
    </div>
  );
}
