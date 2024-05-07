import React from 'react';
import Slideshow from '../../components/Slideshow'; // Importer le composant Slideshow
import Header from '../../components/Header';
import cover from '../../Assets/cover.png';
const App = () => {
  const images = ['logo', {cover}, 'image3.jpg']; // Tableau d'URLs d'images

  return (
    <div>
      <Header/>
      <Slideshow images={images} />
    </div>
  );
};

export default App;
 