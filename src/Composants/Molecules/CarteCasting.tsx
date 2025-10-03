import React from 'react';
import type { CastingMember } from '../../types/simploCineTypes'; 
import ImageFilm from '../Atoms/ImageFilm';
import LienNav from '../Atoms/LienNav';

interface CarteCastingProps {
  member: CastingMember;
}

const CarteCasting: React.FC<CarteCastingProps> = ({ member }) => {

  const destinationUrl = `/casting/${member.id}`;
  
  const imagePath = member.profile_path;
  const imageAlt = member.name;
  
  if (!imagePath) {
    return null; 
  }

  return (
    
    <LienNav to={destinationUrl} className="carte-casting">
      
      {/* 1. L'image de profil Atoms ImageFilm */}
      <div className="carte-casting__photo-container">
        <ImageFilm 
          path={imagePath} 
          alt={imageAlt} 
          type="profile" 
        />
      </div>

      {/* 2. Les informations textuelles */}
      <div className="carte-casting__details">
        {/* Nom de l'acteur/actrice */}
        <p className="carte-casting__name">{member.name}</p>
        
        {/* Nom du rôle personnage joué */}
        <span className="carte-casting__character">{member.character}</span>
      </div>

    </LienNav>
  );
};

export default CarteCasting;