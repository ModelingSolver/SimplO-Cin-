import React from 'react';
import { useFetchData } from '../hooks/useFetchData';
import type {  FilmOrSerie } from '../types/simploCineTypes'; 
import CarrouselFilms from '../Composants/Organites/CarrouselFilms';
import Titre from '../Composants/Atoms/Titre';
import Loader from '../Composants/Atoms/Loader';


const SELECTED_SERIES_GENRES = [
    { name: 'Drame', id: 18 },
    { name: 'Action & Aventure', id: 10759 },
    { name: 'Comédie', id: 35 },
    { name: 'Documentaire', id: 99 },
    { name: 'Sci-Fi & Fantastique', id: 10765 }, 
];

interface GenreCarrouselProps {
    genreId: number;
    genreName: string;
}

const GenreCarrousel: React.FC<GenreCarrouselProps> = ({ genreId, genreName }) => {
    //  ADAPTATION CLÉ: Utilisation de l'endpoint '/discover/tv'
    const endpoint = `/discover/tv?with_genres=${genreId}`;
    
    const { data: series, loading, error } = useFetchData<FilmOrSerie[]>(endpoint);

    if (loading) return <Loader />; 
    if (error) return <p className="error-genre">Erreur de chargement pour le genre {genreName}.</p>;
    
    const seriesList = series && Array.isArray(series) ? series : []; 

    if (seriesList.length === 0) return null;

    return (
        <CarrouselFilms title={genreName} films={seriesList} />
    );
};



const SeriesListe = () => {
    return (
        <div className="series-list-page">
            <Titre level={1} className="series-list-page__header">Séries par Catégorie</Titre>
            
            <section className="carousels-container">
                {SELECTED_SERIES_GENRES.map((genre) => (
                    <GenreCarrousel 
                        key={genre.id} 
                        genreId={genre.id} 
                        genreName={genre.name} 
                    />
                ))}
            </section>
        </div>
    );
};

export default SeriesListe;