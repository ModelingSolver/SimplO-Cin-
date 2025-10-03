import React, { useMemo } from 'react';
import { useFetchData } from '../hooks/useFetchData';
import type { FilmOrSerie } from '../types/simploCineTypes';
import BanniereHero from '../Composants/Molecules/BanniereHero';
import CarrouselFilms from '../Composants/Organites/CarrouselFilms';
import Loader from '../Composants/Atoms/Loader';

const HomePage = () => {

  const { data: popularFilms, loading: loadingPopular, error: errorPopular } = 
    useFetchData<FilmOrSerie[]>('/movie/popular');

  const { data: topRatedFilms, loading: loadingTopRated, error: errorTopRated } = 
    useFetchData<FilmOrSerie[]>('/movie/top_rated');
    
  const { data: upcomingFilms, loading: loadingUpcoming, error: errorUpcoming } = 
    useFetchData<FilmOrSerie[]>('/movie/upcoming');

  
  //LOGIQUE D'AFFICHAGE DE LA BANNIÈRE ALÉATOIRE
  // !!! useMemo !!! s'assure que le film aléatoire ne change qu'au rechargement initial de la liste.
  const randomBannerFilm: FilmOrSerie | null = useMemo(() => {
    if (popularFilms && popularFilms.length > 0) {
      //Film au pif
      const randomIndex = Math.floor(Math.random() * popularFilms.length);
      return popularFilms[randomIndex];
    }
    return null;
  }, [popularFilms]);


  //GESTION DES ÉTATS DE CHARGEMENT ET ERREUR

  // Si au moins un élément est en cours de chargement
  if (loadingPopular || loadingTopRated || loadingUpcoming) {
    return <Loader />;
  }

  if (errorPopular || errorTopRated || errorUpcoming) {
    return (
      <div className="error-message">
        <h1>Erreur de chargement des données.</h1>
        <p>Vérifiez les endpoints de l'API Simplo'ciné.</p>
      </div>
    );
  }

  //AFFICHAGE FINAL DE LA PAGE
  return (
    <div className="homepage">
      
      {randomBannerFilm && <BanniereHero film={randomBannerFilm} />}
      
      <section className="carousels-section">
        
        {popularFilms && popularFilms.length > 0 && (
          <CarrouselFilms 
            title="Les plus populaires du moment" 
            films={popularFilms} 
          />
        )}
        
        {topRatedFilms && topRatedFilms.length > 0 && (
          <CarrouselFilms 
            title="Le Top 10 des Mieux Notés" 
            films={topRatedFilms} 
          />
        )}

        {upcomingFilms && upcomingFilms.length > 0 && (
          <CarrouselFilms 
            title="Prochainement sur Simplo'ciné" 
            films={upcomingFilms} 
          />
        )}
        
      </section>
    </div>
  );
};

export default HomePage;