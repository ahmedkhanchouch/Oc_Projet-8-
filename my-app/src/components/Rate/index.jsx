import React from 'react'
import '../../styles/Rate.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Rate = (props) => {
  const rating = props.children
  const maxStars = 5 // Nombre maximum d'étoiles
  console.log(rating)

  return (
    <div className="rate">
      {[...Array(maxStars)].map((_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} className={`star ${index < rating ? 'filled' : 'empty'}`} />
      ))}
    </div>
  )
}

export default Rate
