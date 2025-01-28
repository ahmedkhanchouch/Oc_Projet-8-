import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import '../../styles/Collapse.scss'; // Importer le fichier CSS pour les styles de l'animation

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    
      <div className='collapse'>
        <div onClick={toggleCollapse} className='collapse-header' style={{ cursor: 'pointer' }}>
          <h2 className='collapse-title'>{title}</h2>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        {isOpen && <div className='collapse-content'>{children}</div>}
      </div>
  
  );
};

export default Collapse;


