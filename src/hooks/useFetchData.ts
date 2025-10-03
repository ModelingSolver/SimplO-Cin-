import { useState, useEffect } from 'react';
import { TMDB_BASE_URL, TMDB_API_KEY } from '../config/api';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export const useFetchData = <T>(endpoint: string): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setData(null);
    
    if (!endpoint) {
        setLoading(false);
        return;
    }

    // Construction de l'URL sans api_key !?! (car on utilise Bearer token dans les headers!!!)
    const url = `${TMDB_BASE_URL}${endpoint}?language=fr-FR`;

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Authorization': TMDB_API_KEY,
            'Content-Type': 'application/json'
          }
        });
        
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }
        
        const json = await response.json(); 
        
        // Si 'results' est présent, c'est une liste
        if (json && json.results) {
            setData(json.results as T);
        } else {
            // Sinon c'est un objet de détail
            setData(json as T);
        }
        
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur inconnue est survenue.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, [endpoint]);

  return { data, loading, error };
};