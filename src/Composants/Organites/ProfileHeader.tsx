import React from 'react';
import { type PersonDetail } from '../../types/simploCineTypes';
import Titre from '../Atoms/Titre';
import ImageFilm from '../Atoms/ImageFilm';

interface ProfileHeaderProps {
  person: PersonDetail;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ person }) => {
  
  const profilePath = person.profile_path;
  
  return (
    <header className="profile-header">
      
      <div className="profile-header__gauche">
        {/* 1. La Photo de Profil */}
        {profilePath ? (
          <ImageFilm 
            path={profilePath} 
            alt={`Photo de ${person.name}`} 
            type="profile" 
            className="profile-header__image"
          />
        ) : (
          <div className="profile-header__image-placeholder">
            {/* Fallback si aucune image n'est disponible */}
            {person.name}
          </div>
        )}
      </div>

      <div className="profile-header__droit">
        
        {/* 2. Nom/Titre H1 de la page) */}
        <Titre level={1} className="profile-header__name">{person.name}</Titre>
        
        {/* 3. Informations Clés /Date de naissance, Lieu, etc. */}
        <div className="profile-header__metadata">
          {person.birthday && (
            <p><strong>Né(e) le :</strong> {person.birthday}</p>
          )}
          {person.place_of_birth && (
            <p><strong>Lieu de naissance :</strong> {person.place_of_birth}</p>
          )}
        </div>
        
        {/* 4. Biographie */}
        <div className="profile-header__bio">
          <Titre level={2} className="bio__title">Biographie</Titre>
          {/* TMDB utilise 'biography' SI ELLE EST TROP LONGUE défilement */}
          <p className="bio__text">
            {person.biography || "Biographie non disponible."}
          </p>
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;