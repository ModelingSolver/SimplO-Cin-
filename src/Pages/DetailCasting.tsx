import { useParams, useNavigate } from 'react-router-dom';
import { useFetchData } from '../hooks/useFetchData';
import type {  PersonDetail,  CreditsList, CastingMember, FilmOrSerie } from '../types/simploCineTypes';
import Loader from '../Composants/Atoms/Loader';
import ProfileHeader from '../Composants/Organites/ProfileHeader'; 
import CarrouselFilms from '../Composants/Organites/CarrouselFilms'; 

const DetailCasting = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    if (!id) {
        navigate('/404');
        return null;
    }

    const { data: personDetail, loading: loadingDetail } = 
        useFetchData<PersonDetail>(`/person/${id}`);

    const { data: credits, loading: loadingCredits } = 
        useFetchData<CreditsList>(`/person/${id}/movie_credits`);

    if (loadingDetail || loadingCredits) {
        return <Loader />;
    }

    if (!personDetail) {
        return <div className="not-found">Membre du casting introuvable.</div>;
    }
    // filmography: CastingMember[];
    //RENDU DE LA PAGE
    // Putin d'import de pfffffffffffffffff ......
    // On combine les films et les séries joués par la personne, puis on les trie par popularité/date
    const filmography: FilmOrSerie[] = (credits?.cast || []).map((castingMember: CastingMember) => {
        return {
            id: castingMember.id,
            title: castingMember.name, // ici CastingMember.name → on l'utilise comme titre
            name: castingMember.name,
            overview: "", // pas dispo sur CastingMember
            poster_path: castingMember.profile_path,
            backdrop_path: null,
            vote_average: 0, // pas dispo sur CastingMember
            release_date: undefined,
            first_air_date: undefined,
            genre_ids: [],
            popularity: castingMember.popularity,
        } satisfies FilmOrSerie;
    }).sort((a, b) => (b.popularity || 0) - (a.popularity || 0));

    return (
        <article className="detail-casting-page">
            
            <ProfileHeader person={personDetail} />
            
            <section className="detail-body">
                
                {filmography.length > 0 && (
                    <CarrouselFilms 
                        title={`Filmographie de ${personDetail.name}`} 
                        films={filmography} 
                    />
                )}

            </section>
        </article>
    );
};

export default DetailCasting;
