import React from 'react';
import { FaSearch, FaUser } from 'react-icons/fa'; 

interface IconeProps {
  name: 'search' | 'user'; //les icônes nécessaires
  size?: number;
  className?: string;
}

const Icone: React.FC<IconeProps> = ({ name, size = 20, className = '' }) => {
  //icône en fonction du nom
  let IconComponent;
  switch (name) {
    case 'search':
      IconComponent = FaSearch;
      break;
    case 'user':
      IconComponent = FaUser;
      break;
    default:
      return null;
  }

  return (
    <span className={`icone icone--${name} ${className}`}>
      <IconComponent size={size} />
    </span>
  );
};

export default Icone;