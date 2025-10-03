import React from 'react';
import Icone from '../Atoms/Icone';
import Bouton from '../Atoms/Bouton';

const RechercheProfil = () => {

  const handleSearch = () => {
 //ca cherche la merde
  };

  return (
    <div className="recherche-profil">
      {/* Bouton de recherche */}
      <Bouton onClick={handleSearch} variant="icone">
        <Icone name="search" />
      </Bouton>
      
      {/* Icone de profil */}
      <Bouton variant="icone" className="profile-icon">
        <Icone name="user" />
      </Bouton>
    </div>
  );
};

export default RechercheProfil;