import React, { useState } from 'react';
import '../../styles/Collapse.scss'; // Importer le fichier CSS pour les styles de l'animation

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleCollapse} style={{ cursor: 'pointer' }}>
        <h2>{title}</h2>
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default Collapse;


