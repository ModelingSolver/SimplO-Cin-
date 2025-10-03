import React from 'react';

interface ImageFilmProps {
  path: string;           
  alt: string;            
  type: 'poster' | 'backdrop' | 'profile'; 
  className?: string;
}

//cheminouminou construit toi!!
const getImageUrl = (path: string, type: 'poster' | 'backdrop' | 'profile'): string => {
  const BASE_URL = "https://image.tmdb.org/t/p/";
  let size = '';

  switch (type) {
    case 'poster':
      size = 'w342';
      break;
    case 'backdrop':
      size = 'w1280';
      break;
    case 'profile':
      size = 'w185';
      break;
    default:
      size = 'original';
  }
  
  return `${BASE_URL}${size}${path}`;
};


const ImageFilm: React.FC<ImageFilmProps> = ({ path, alt, type, className = '' }) => {
  if (!path) {
    return <div className={`image-placeholder ${className}`}>{alt} (Image manquante)</div>;
  }
  
  const src = getImageUrl(path, type);
  
  return (
    <img 
      src={src} 
      alt={alt} 
      className={`image-film image-film--${type} ${className}`}
      loading="lazy"
    />
  );
};

export default ImageFilm;