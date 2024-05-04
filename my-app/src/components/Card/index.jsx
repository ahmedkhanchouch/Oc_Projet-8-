
import PropTypes from 'prop-types';
import '../../styles/Card.scss';
function Card({ label, title, picture }) {

    return (
      
        <div className="card">
            {/* <img src={''} alt="cover" height={80} width={80} /> */}
            <span>{title}</span>
            <span className='card_Title'>{label}</span>
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