import data from '../../backend/fichier.json'
import { useParams } from 'react-router-dom'
import '../../styles/Title.scss'

function Title() {
  const { id } = useParams() // Permet de récupéré l'ID présent dans la barre d'adresse, dans l'URL.
  const infoLogement = data.find((item) => item.id === id) // je filtre les logements pour récupérer uniquement le logement qui correspond a mon ID.
  console.log(infoLogement)

  return (
    <div className="Title">
      <h1 className="Title_info">{infoLogement.title}</h1>
      <p className="Title_location">{infoLogement.location}</p>
    </div>
  )
}

export default Title
