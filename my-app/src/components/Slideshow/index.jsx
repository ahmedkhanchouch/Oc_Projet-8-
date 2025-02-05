// import React, { useState, useEffect } from 'react';
// import './Slideshow.css'; // Importer le fichier CSS pour les styles du diaporama

// const Slideshow = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000); // Changement d'image toutes les 3 secondes

//     return () => clearInterval(interval);
//   }, [currentIndex, images.length]);

//   return (
//     <div className="slideshow-container">
//       {images.map((image, index) => (
//         <div
//           key={index}
//           className={`slide ${index === currentIndex ? 'active' : ''}`}
//         >
//           <img src={image} alt={`Slide ${index}`} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Slideshow;


import React, { useState } from 'react';
import '../../styles/SlideShow.scss'; // Importez le fichier Sass

const SlideShow = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="slideshow">
      <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="slide" style={{ backgroundImage: `url(${image})` }}></div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default SlideShow;