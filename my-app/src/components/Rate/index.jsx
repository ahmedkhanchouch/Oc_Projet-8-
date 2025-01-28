import React from 'react';
// import './Rate.css';

const Rate = ({ rating }) => {
  const maxStars = 5; // Nombre maximum d'étoiles

  return (
    <div className="rate">
      {[...Array(maxStars)].map((_, index) => (
        <span
          key={index}
          className={`star ${index < rating ? 'filled' : 'empty'}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rate;
