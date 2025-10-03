import React from 'react';
import Logo from '../Atoms/Logo';
import NavigationPrincipale from '../Molecules/NavigationPrincipale';

const Header = () => {

  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
    
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-gauche">
        
        {/* Atome Logo SimploChemsO*/}
        <Logo to="/" alt="Simplo'ciné Logo">ChemsO'ciné</Logo>
        
        {/* Molecule de navigation */}
        <NavigationPrincipale />
      </div>
      
      <div className="header-droit">
        {/* Molecule Recherche et Profil */}
       {/* <RechercheProfil />*/}
      </div>
    </header>
  );
};

export default Header;