import React from 'react';
import { useNavigate } from 'react-router-dom';
import type {  DetailFilmOrSerie } from '../../types/simploCineTypes';
import Titre from '../Atoms/Titre';
import Bouton from '../Atoms/Bouton';
import { FaPlay, FaPlus } from 'react-icons/fa';

type Props = {
  detail: DetailFilmOrSerie;
};

const DetailHeader: React.FC<Props> = ({ detail }) => {
  const navigate = useNavigate();

  const backdropUrl = detail.backdrop_path
    ? `https://image.tmdb.org/t/p/original${detail.backdrop_path}`
    : '/placeholder-banner.jpg';

  const posterUrl = detail.poster_path
    ? `https://image.tmdb.org/t/p/w500${detail.poster_path}`
    : '/placeholder-poster.jpg';

  return (
    <header
      className="detail-header"
      style={{ backgroundImage: `url(${backdropUrl})` }}
    >
      {/* Dégradé sombre pour la lisibilité */}
      <div className="detail-header__overlay" />

      <div className="detail-header__content">
        {/* Poster du film */}
        <img
          src={posterUrl}
          alt={detail.title || detail.name}
          className="detail-header__poster"
        />

        {/* Infos principales */}
        <div className="detail-header__info">
          <Titre level={1} className="detail-header__title">
            {detail.title || detail.name}
          </Titre>

          {detail.tagline && (
            <p className="detail-header__tagline">{detail.tagline}</p>
          )}

          <p className="detail-header__overview">{detail.overview}</p>

          <div className="detail-header__actions">
            <Bouton
              onClick={() => navigate(`/watch/${detail.id}`)}
              variant="primaire"
            >
              <FaPlay size={16} /> Lecture
            </Bouton>
            <Bouton variant="secondaire">
              <FaPlus size={16} /> Ma liste
            </Bouton>
          </div>

          {/* Métadonnées */}
          <div className="detail-header__metadata">
            {detail.release_date && (
              <span>📅 {new Date(detail.release_date).getFullYear()}</span>
            )}
            {detail.vote_average && (
              <span>⭐ {detail.vote_average.toFixed(1)}/10</span>
            )}
            {detail.runtime && <span>⏱ {detail.runtime} min</span>}
          </div>
        </div>
      </div>
    </header>
  );
};

export default DetailHeader;