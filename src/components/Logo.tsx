import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 24 }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Logo Icon - Nested Rhombuses */}
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Outermost Rhombus - 4 separate segments */}
        <path 
          d="M12 2L20 12L12 22L4 12L12 2" 
          stroke="url(#redGradient)" 
          strokeWidth="2" 
          fill="none"
          strokeDasharray="8 4"
          strokeDashoffset="0"
        />
        
        {/* Middle Rhombus - 4 separate segments */}
        <path 
          d="M12 6L18 12L12 18L6 12L12 6" 
          stroke="url(#redGradient)" 
          strokeWidth="2" 
          fill="none"
          strokeDasharray="6 3"
          strokeDashoffset="2"
        />
        
        {/* Innermost Rhombus - solid */}
        <path 
          d="M12 9L15 12L12 15L9 12L12 9" 
          fill="url(#redGradient)"
        />
        
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="50%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Text */}
      <span className="text-xl font-bold text-red-600">Anymus Vergo™</span>
    </div>
  );
};

export default Logo; 