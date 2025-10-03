import LienNav from '../Atoms/LienNav';

const NavigationPrincipale = () => {
  return (
    // La classe 'nav-principale' gérera l'alignement horizontal et la visibilité (A masquer en mobile tete de debile)
    <nav className="nav-principale">
      <ul>
        <li>
          {/* Lien vers HomePage */}
          <LienNav to="/">Accueil</LienNav>
        </li>
        <li>
          {/* Lien vers FilmsListe */}
          <LienNav to="/films">Films</LienNav>
        </li>
        <li>
          {/* Lien vers SeriesListe */}
          <LienNav to="/series">Séries</LienNav>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationPrincipale;