import React from 'react'
import { useParams } from 'react-router-dom'
import Slideshow from '../../components/Slideshow'
import Collapse from '../../components/Collapse'
import Footer from '../../components/Footer'
// import '../../styles/Collapse.scss' // Importer le composant Slideshow
import Header from '../../components/Header'
// import cover from '../../Assets/cover.png'
import data from '../../backend/fichier.json'
import Tags from '../../components/Tags'
import Host from '../../components/Host'
import Rate from '../../components/Rate'
import Title from '../../components/Title'

import '../../styles/Logement.scss'
const App = () => {
  const { id } = useParams() // Permet de récupéré l'ID présent dans la barre d'adresse, dans l'URL.
  const infoLogement = data.find((item) => item.id === id) // je filtre les logements pour récupérer uniquement le logement qui correspond a mon ID.
  console.log(infoLogement)
  const images = infoLogement.pictures //infoLogement.pictures // Tableau d'URLs d'images
  const tags = infoLogement.tags // Tableau de tags

  return (
    <div>
      <div className="logement">
        <Header />
        <div className="container">
          <Slideshow images={images} />

          <div className="container_title">
            <Title />
            <Host>{infoLogement}</Host>
          </div>

          <div className="container_tags">
            <div className="tags">
              {tags.map((tag, index) => (
                <Tags key={index}>{tag}</Tags>
              ))}
            </div>
            <div>
              <Rate>{infoLogement.rating}</Rate>
            </div>
          </div>

          <div className="collapse-container">
            <Collapse title="Description">{infoLogement.description}</Collapse>
            <Collapse title="Equipment">
              <ul>
                {infoLogement.equipments.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Collapse>
          </div>
        </div>
      </div>
          <Footer />
    </div>
  )
}

export default App
