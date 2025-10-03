import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';




interface LienNavProps {
  to: string;             
  children: ReactNode;    
  className?: string;     }

const LienNav: React.FC<LienNavProps> = ({ to, children, className = '' }) => {
  return (
    <Link to={to} className={`lien-nav ${className}`}>
      {children}
    </Link>
  );
};

export default LienNav;