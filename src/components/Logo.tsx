import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-32 h-12',
    md: 'w-48 h-16',
    lg: 'w-64 h-20'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 200 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="frost-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
          <linearGradient id="ice-highlight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#F8FAFC" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.4" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Background frost effect */}
        <rect x="0" y="0" width="200" height="60" rx="12" fill="url(#frost-gradient)" opacity="0.1" />
        
        {/* Main text */}
        <text
          x="20"
          y="42"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="28"
          fontWeight="700"
          fill="url(#frost-gradient)"
          filter="url(#glow)"
        >
          Bara
        </text>
        
        <text
          x="100"
          y="42"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="28"
          fontWeight="300"
          fill="url(#frost-gradient)"
        >
          APK
        </text>
        
        {/* Ice crystal accent */}
        <polygon
          points="165,15 175,25 165,35 155,25"
          fill="url(#ice-highlight)"
          opacity="0.8"
        />
        <polygon
          points="170,10 180,20 170,30 160,20"
          fill="url(#frost-gradient)"
          opacity="0.6"
        />
        
        {/* Highlight overlay */}
        <rect x="0" y="0" width="200" height="20" rx="12" fill="url(#ice-highlight)" opacity="0.3" />
      </svg>
    </div>
  );
};

export default Logo;