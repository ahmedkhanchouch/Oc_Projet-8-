import React from 'react'
import { useParams } from 'react-router-dom'
import Slideshow from '../../components/Slideshow'
import Collapse from '../../components/Collapse'
// import '../../styles/Collapse.scss' // Importer le composant Slideshow
import Header from '../../components/Header'
// import cover from '../../Assets/cover.png'
import data from '../../backend/fichier.json'
import Tags from '../../components/Tags'
import Host from '../../components/Host'
import Rate from '../../components/Rate'
import Title from '../../components/Title'
import '../../styles/Home.scss'
const App = () => {
  const { id } = useParams() // Permet de récupéré l'ID présent dans la barre d'adresse, dans l'URL.
  const infoLogement = data.find((item) => item.id === id) // je filtre les logements pour récupérer uniquement le logement qui correspond a mon ID.
  console.log(infoLogement)
  const images = [] //infoLogement.pictures // Tableau d'URLs d'images
  const tags = infoLogement.tags // Tableau de tags

  return (
    <div>
      <div className="Home">
        <Header />
        <Slideshow images={images} />
        <div className="container">
          <div>
            <Title />
            {tags.map((tag, index) => (
              <Tags key={index}>{tag}</Tags>
            ))}
          </div>
          <Host>
            <img src={infoLogement.host.picture} alt={infoLogement.host.name} />
            <p>{infoLogement.host.name}</p>
          </Host>
          <Rate>{infoLogement.rating}</Rate>

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
    </div>
  )
}

export default App
