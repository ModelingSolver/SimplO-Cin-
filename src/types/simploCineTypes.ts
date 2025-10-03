// Vla lidee pourrie mais jai appris pas mal de bricoles ici!


export interface Genre {
  id: number;
  name: string;
}


export interface FilmOrSerie {
  id: number;
  title?: string; 
  name?: string; 
  // filmography: CastingMember[];
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  release_date?: string; 
  first_air_date?: string; 
  genre_ids: number[];
  popularity: number;
}


export interface DetailFilmOrSerie extends FilmOrSerie {
  runtime: number | null;
  episode_run_time?: number[]; 
  tagline: string | null;
  genres: Genre[]; 
  budget: number;
  revenue: number;
  status: string;
  
}


export interface CastingMember {
  id: number; 
  cast_id: number;
  credit_id: string;
  name: string;
  character: string;
  profile_path: string | null;
  known_for_department: string;
  popularity: number;
}


export interface CreditsList {
    id: number;
    cast: CastingMember[];
    crew: any[]; 
}


export interface PersonDetail {
  id: number;
  name: string;
  birthday: string | null;
  deathday: string | null;
  biography: string | null;
  place_of_birth: string | null;
  profile_path: string | null;
  homepage: string | null;
  known_for_department: string;
  popularity: number;
}


export interface FilmographyCredits {
    id: number;
    cast: FilmOrSerie[]; 
}