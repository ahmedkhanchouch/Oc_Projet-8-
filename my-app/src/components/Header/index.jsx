import { Link } from 'react-router-dom'
 import logo_banner from '../../Assets/logo_banner.png'
 import PropTypes from 'prop-types'
 import '../../styles/Header.scss'

function Header() {
    return (
        <div className='Header'>
            <img className='Header_image' src={logo_banner} alt="logo" />
            <nav className="Header_navBar">
            <Link to="/">
            </Link>
            <Link to="/">Accueil</Link>
            <Link to="/details ">à propos</Link>
        </nav>
        </div>
    )
}

Header.propTypes = {
    screen: PropTypes.oneOf(["desktop", "mobile"]),
    active: PropTypes.oneOf(["a-propos", "accueil", "none"]),
    LOGO: PropTypes.string,
  };


  
export default Header