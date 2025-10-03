import React from 'react';
import type { ReactNode } from 'react'
interface TitreProps {
  children: ReactNode;      // Le texte du titre
  level: 1 | 2 | 3 | 4;     // Le niveau sémantique du titre (h1, h2, h3, h4)
  className?: string;
}

const Titre: React.FC<TitreProps> = ({ children, level, className = '' }) => {
  // Choisir la balise HTML en fonction du niveau spécifié (plus haut... sea level )
  const Tag: React.ElementType = `h${level}` 

  return (
    <Tag className={`titre titre--h${level} ${className}`}>
      {children}
    </Tag>
  );
};

export default Titre;