import React from 'react';
import type { FilmOrSerie } from '../../types/simploCineTypes'; 
import ImageFilm from '../Atoms/ImageFilm';
import LienNav from '../Atoms/LienNav';

interface CarteFilmProps {
  film: FilmOrSerie; // L'objet film complet
}

const CarteFilm: React.FC<CarteFilmProps> = ({ film }) => {

  const destinationUrl = `/contenu/${film.id}`;

  const imagePath = film.poster_path;
  const imageAlt = film.title || film.name || 'Contenu';
  
  if (!imagePath) {
    return null;
  }

  return (
    
    <LienNav to={destinationUrl} className="carte-film">
      
      {/* 1. L'image du film Atoms ImageFilm */}
      <div className="carte-film__image-container">
        <ImageFilm 
          path={imagePath} 
          alt={imageAlt} 
          type="poster"
        />
      </div>

      {/* 2. L'info-bulle au survol*/}
      <div className="carte-film__details">
        {/* Pour le Titre un <span> suffit ici */}
        <p className="carte-film__title">{film.title}</p>
        
        {/* Affichage de la note si disponible */}
        {film.vote_average > 0 && (
          <span className="carte-film__rating">⭐ {film.vote_average.toFixed(1)}</span>
        )}
      </div>

    </LienNav>
  );
};

export default CarteFilm;