// import React from 'react';
import { Outlet } from 'react-router-dom';


import Header from '../Organites/Header';
// import Footer from '../Organites/Footer';


const MainLayout = () => {
  return (
    <div className="main-layout">
      {/* 1. La barre de navigation est toujours en haut */}
      <Header />
      
      {/* 2. Le contenu de la page s'affiche ici. 
          C'est le rôle du composant <Outlet /> de React Router 
          d'injecter la bonne page (HomePage, FilmsListe, etc.) */}
      <main className="main-content">
        <Outlet />
      </main>
      
      {/* 3. Le pied de page est toujours en bas */}
      {/* <Footer /> BON DANS UN MONDE OU YEN A UN A PRIORI YEN A UN MAIS JEN SAIS RIEN */}
      
    </div>
  );
};

export default MainLayout;