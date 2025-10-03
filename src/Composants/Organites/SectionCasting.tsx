import React from 'react';
import { type CastingMember } from '../../types/simploCineTypes';
import CarteCasting from '../Molecules/CarteCasting';
import Titre from '../Atoms/Titre';

interface SectionCastingProps {
  casting: CastingMember[];
}

const SectionCasting: React.FC<SectionCastingProps> = ({ casting }) => {
  
  if (casting.length === 0) {
    return null;
  }

  return (
    <section className="section-casting">
      {/* Titre de section (H2) */}
      <Titre level={2} className="section-casting__title">Casting Principal</Titre>
      
      {/* Conteneur pour les cartes de casting */}
      <div className="section-casting__list">
        {casting.map((member) => (
         
          <CarteCasting key={member.credit_id} member={member} /> 
        
        ))}
      </div>
    </section>
  );
};

export default SectionCasting;