import React from 'react';
import Headers from '../../components/Header';
import Collapse from '../../components/Collapse'; // Chemin vers votre composant Collapse
import Cover from '../../components/Cover';
import Footer from '../../components/Footer';
import '../../styles/Collapse.scss';


function Details() {

  return (
    <div>
      <div className="Home">
      <Headers />
      <Cover />
        <div className='collapse-container'>
          <Collapse title="Fiabilité" > 
           Les annonces poster sur Kasa garantissant une Fiabilité totale. Les photos sont conformees aux logements , et toutes les informations sont regulierement verifées par nos equipes
          </Collapse>
          <Collapse title="Resepct">
            La bienveillance fait partie de nos valeurs fondatrices de Kasa . Tout comportement discriminatoire ou de perturbation  du voisinage entrainera une exclusion de notre plateforme.
          </Collapse>
          <Collapse title="Service">
            La bienveillance fait partie de nos valeurs fondatrices de Kasa . Tout comportement discriminatoire ou de perturbation  du voisinage entrainera une exclusion de notre plateforme.
          </Collapse>
          <Collapse title="Sécurité">
            La sécurité est la priorite de Kasa . Aussi bien pour nos hotes que pour les voyageurs , chaque logement correspond aux critères de securité etablies par nos services. En laissant une note aussi bien a l'hote qu'au locataire , cela permet a nos equipes de verifier que les standards sont bien respectés . nous organisons egalement des ateliers sur la securité domestique pour nos clients .
          </Collapse>
        </div>
      </div>
      <Footer />
    </div>
  );

    
}

export default Details