import React from 'react';

interface LoaderProps {
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({ className = '' }) => {
 
  return (
    <div className={`loader-container ${className}`} role="status" aria-live="polite" aria-label="Chargement en cours">
      {/* Loader style Turfu!! */}
      <div className="spinner">ᯓ ✈︎</div>
      
      <span className="sr-only">Chargement...</span> 
    </div>
  );
};

export default Loader;