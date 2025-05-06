
import React from 'react';

interface RundownLogoProps {
  className?: string;
}

const RundownLogo: React.FC<RundownLogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center justify-center bg-black rounded-full h-12 w-12 ${className}`}>
      <span className="text-white font-bold text-xl">RR</span>
    </div>
  );
};

export default RundownLogo;
