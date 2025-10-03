import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetchData } from '../hooks/useFetchData';
import type { DetailFilmOrSerie, CastingMember, FilmOrSerie } from '../types/simploCineTypes';
import Loader from '../Composants/Atoms/Loader';
import DetailHeader from '../Composants/Organites/DetailHeader';
import SectionCasting from '../Composants/Organites/SectionCasting';
import CarrouselFilms from '../Composants/Organites/CarrouselFilms';


type RecommendationsResponse = { results: FilmOrSerie[] };
type CreditsResponse = { cast: CastingMember[] };

const DetailFilmSerie = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  if (!id) {
    navigate('/404');
    return null;
  }

  // Hooks API TMDB
  const { data: detail, loading: loadingDetail, error: errorDetail } =
    useFetchData<DetailFilmOrSerie>(`/movie/${id}`);

  const { data: credits, loading: loadingCredits, error: errorCredits } =
    useFetchData<CreditsResponse>(`/movie/${id}/credits`);

  const { data: recommendations, loading: loadingRecs, error: errorRecs } =
    useFetchData<RecommendationsResponse>(`/movie/${id}/recommendations`);

  // Gestion des états de chargement et d'erreur
  if (loadingDetail || loadingCredits || loadingRecs) return <Loader />;
  if (errorDetail || errorCredits || errorRecs)
    return <div className="error-message">Erreur de chargement des données.</div>;
  if (!detail) return <div className="not-found">Contenu introuvable.</div>;

  const castingList = credits?.cast.slice(0, 10) || [];
  const recommendationList = recommendations?.results || [];

  return (
    <article className="detail-page">
      {/* 1. Entête de détail */}
      <DetailHeader detail={detail} />

      <section className="detail-body">
        {/* 2. Section Casting */}
        {castingList.length > 0 && <SectionCasting casting={castingList} />}

        {/* 3. Section Recommandations */}
        {recommendationList.length > 0 && (
          <CarrouselFilms title="Plus de titres similaires" films={recommendationList} />
        )}

        {/* 4. Autres informations */}
        <div className="metadata">
          <p><strong>Durée :</strong> {detail.runtime} minutes</p>
          <p><strong>Genres :</strong> {detail.genres.map(g => g.name).join(', ')}</p>
        </div>
      </section>
    </article>
  );
};

export default DetailFilmSerie;
