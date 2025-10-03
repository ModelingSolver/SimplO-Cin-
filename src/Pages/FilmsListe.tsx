import React from 'react';
import { useFetchData } from '../hooks/useFetchData';
import type {  FilmOrSerie } from '../types/simploCineTypes';
import CarrouselFilms from '../Composants/Organites/CarrouselFilms';

const SELECTED_GENRES = [
    { name: 'Action', id: 28 },
    { name: 'Science-Fiction', id: 878 },
    { name: 'Horreur', id: 27 },
    { name: 'Drame', id: 18 },
    { name: 'Comédie', id: 35 },
];

const FilmsListe = () => {
    
    return (
        <div className="films-list-page">
            <h1>Tous les Films par Catégorie</h1>
            
            {SELECTED_GENRES.map((genre) => (
                <GenreCarrousel key={genre.id} genreId={genre.id} genreName={genre.name} />
            ))}
        </div>
    );
};

interface GenreCarrouselProps {
    genreId: number;
    genreName: string;
}

const GenreCarrousel: React.FC<GenreCarrouselProps> = ({ genreId, genreName }) => {

    const endpoint = `/discover/movie?with_genres=${genreId}`;
    
    const { data: films, loading, error } = useFetchData<FilmOrSerie[]>(endpoint);

    if (loading) return <p>Chargement du carrousel {genreName}...</p>;
    if (error) return <p>Erreur de chargement pour {genreName}.</p>;
    if (!films || films.length === 0) return null;

    return (
        <CarrouselFilms title={genreName} films={films} />
    );
};

export default FilmsListe;