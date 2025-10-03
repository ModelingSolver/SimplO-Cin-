import React, { type ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  to: string;
  children: ReactNode;
  alt?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ to, children, alt = 'Logo Simplo\'ciné', className = '' }) => {
  return (
    // On utilise directement Link de React Router ici car le logo est un lien fondamental
    <Link to={to} className={`logo-simplo ${className}`} aria-label={alt}>
      {/*<h1>ou image */}
      {children} 
    </Link>
  );
};

export default Logo;