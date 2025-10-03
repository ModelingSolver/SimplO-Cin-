import React from 'react';
import type { ReactNode, MouseEventHandler } from 'react';


interface BoutonProps {
  children: ReactNode;                  
  onClick?: MouseEventHandler<HTMLButtonElement>; 
  variant?: 'primaire' | 'secondaire' | 'icone';
  className?: string;
  disabled?: boolean;
}

const Bouton: React.FC<BoutonProps> = ({ 
  children, 
  onClick, 
  variant = 'primaire', 
  className = '', 
  disabled = false 
}) => {
  return (
    <button
      onClick={onClick}
      className={`bouton bouton--${variant} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Bouton;