import React from 'react';
import { type FilmOrSerie } from '../../types/simploCineTypes';
import Titre from '../Atoms/Titre';
import Bouton from '../Atoms/Bouton';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';

interface BanniereHeroProps {
  film: FilmOrSerie; 
}

const BanniereHero: React.FC<BanniereHeroProps> = ({ film }) => {
  
  const handlePlay = () => {
    console.log(`Lancement de ${film.title} (Redirection vers détails)`);
  };

  const handleMoreInfo = () => {
    console.log(`Détails sur ${film.title} (Redirection vers détails)`);
  };

  const imagePath = film.backdrop_path; 
  
  if (!imagePath) {
    return <div className="banniere-hero banniere-hero--fallback" />;
  }

  
  const backdropUrl = `https://image.tmdb.org/t/p/original${imagePath}`;

  return (
    <header 
      className="banniere-hero"
      style={{ backgroundImage: `url(${backdropUrl})` }}
    >
      
      {/* L'overlay pour le dégradé (gestion de l'opacité CSS) */}
      <div className="banniere-hero__overlay" />

      <div className="banniere-hero__contenu">
        
        {/* Titre Atoms */}
        <Titre level={1} className="banniere-hero__titre">{film.title || film.name}</Titre>
        
        {/* Description (simple <p>) */}
        <p className="banniere-hero__description">
          {film.overview.length > 150 ? film.overview.substring(0, 150) + '...' : film.overview}
        </p>

        <div className="banniere-hero__actions">
          {/* Bouton Primaire Atoms btn */}
          <Bouton onClick={handlePlay} variant="primaire">
            <FaPlay size={18} /> &nbsp; Lecture
          </Bouton>
          
          {/* Bouton Secondaire Atoms btn */}
          <Bouton onClick={handleMoreInfo} variant="secondaire">
            <FaInfoCircle size={18} /> &nbsp; Plus d'infos
          </Bouton>
        </div>
      </div>
    </header>
  );
};

export default BanniereHero;