import React, { useRef } from 'react';
import { type FilmOrSerie } from '../../types/simploCineTypes';
import CarteFilm from '../Molecules/CarteFilm';
import Titre from '../Atoms/Titre';
import Bouton from '../Atoms/Bouton';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface CarrouselFilmsProps {
  title: string;              
  films: FilmOrSerie[] | null;
}

const CarrouselFilms: React.FC<CarrouselFilmsProps> = ({ title, films }) => {

  const rowRef = useRef<HTMLDivElement>(null);
  
  if (!films || films.length === 0) {
    return null;
  }

  // ScrollinG
 const handleClick = (direction: 'left' | 'right') => {
  if (!rowRef.current) return;
  const row = rowRef.current;
 
  const cardWidth = window.innerWidth * 0.4; // Jai tout test tout!,
  //  de screen width a window dieu sat quoi et css pareil.. et des
  //  fois le comportement change au zoom bref un ane codant dsl..
  // const gap = 8; CETAIT UN CONFLIT CSS
  // const scrollAmount = (cardWidth + gap) * 2.5;
     const scrollAmount = cardWidth * 2.5;
  const scrollTo = direction === 'left'
    ? row.scrollLeft - scrollAmount
    : row.scrollLeft + scrollAmount;
 
  row.scrollTo({ left: scrollTo, behavior: 'smooth' });
};

  return (
    <section className="carrousel-films">
      {/* Utilisation de l'Atome Titre pour la sémantique de section */}
      <Titre level={2} className="carrousel-films__title">{title}</Titre>
      
      <div className="carrousel-films__wrapper">
        
        {/* FAflèche Gauche */}
        <Bouton 
          onClick={() => handleClick('left')} 
          variant="icone" 
          className="carrousel-films__arrow carrousel-films__arrow--left"
        >
          <FaChevronLeft size={24} />
        </Bouton>

        {/* 1. Conteneur des Cartes de Film (référencé par useRef) */}
        <div ref={rowRef} className="carrousel-films__row">
          {films.map((film) => (
            // On mappe la liste pour afficher chaque Molécule CarteFilm
            <CarteFilm key={film.id} film={film} />
          ))}
        </div>
        
        {/* FAflèche Droite */}
        <Bouton 
          onClick={() => handleClick('right')} 
          variant="icone" 
          className="carrousel-films__arrow carrousel-films__arrow--right"
        >
          <FaChevronRight size={24} />
        </Bouton>
        
      </div>
    </section>
  );
};

export default CarrouselFilms;