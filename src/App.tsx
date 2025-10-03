
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import FilmsListe from './Pages/FilmsListe';
import SeriesListe from './Pages/SeriesListe';
import DetailFilmSerie from './Pages/DetailFilmSerie';
import DetailCasting from './Pages/DetailCasting'; 

import MainLayout from './Composants/Templates/MainLayout'; 

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<MainLayout />}>
          
          <Route index element={<HomePage />} /> 
          
          <Route path="films" element={<FilmsListe />} />
          
          <Route path="series" element={<SeriesListe />} />
          
          <Route path="contenu/:id" element={<DetailFilmSerie />} />
          
          <Route path="casting/:id" element={<DetailCasting />} />
          
          <Route path="*" element={
            <div className="not-found">
              <h1>404</h1>
              <p>Oups! Ce contenu n'est pas sur Simplo'ciné.</p>
            </div>
          } />
        
        </Route>


      </Routes>
    </Router>
  );
}

export default App;
