
import PropTypes from 'prop-types';
import '../../styles/Card.scss';
function Card({  title, picture }) {

    return (
      
        <div className="card">
            <img src={picture} class="card-image" alt="cover" />
          
            <span className='card_Title'>{title}</span>
        </div>
      
 
    )
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }
  
  Card.defaultProps = {
    label: '',
    title: '',
    picture: '',
  }
 
export default Card