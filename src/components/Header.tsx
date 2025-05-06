
import React from 'react';
import RundownLogo from './RundownLogo';

const Header: React.FC = () => {
  return (
    <header className="py-4 border-b border-gray-100">
      <div className="container mx-auto flex justify-center">
        <RundownLogo />
      </div>
    </header>
  );
};

export default Header;
