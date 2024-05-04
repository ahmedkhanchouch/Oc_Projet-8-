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

// function Header ({ screen, active, LOGO = "LOGO-3.png" }) {
//     return (
//       <div className={`header ${screen}`}>
//         <img
//           className="LOGO"
//           alt="Logo"
//           src={
//             screen === "desktop" && active === "a-propos"
//               ? "image.png"
//               : screen === "desktop" && active === "none"
//               ? LOGO
//               : screen === "mobile" && active === "accueil"
//               ? "LOGO.png"
//               : active === "a-propos" && screen === "mobile"
//               ? "LOGO-2.png"
//               : active === "none" && screen === "mobile"
//               ? "LOGO-4.png"
//               : "LOGO-5.png"
//           }
//         />
//         <div className="nav">
//           <div className={`div screen-1-${screen} ${active}`}>
//             {screen === "desktop" && <>Accueil</>}
  
//             {screen === "mobile" && <>ACCUEIL</>}
//           </div>
//           <div className={`a-propos-2 screen-2-${screen} ${active}`}>
//             {screen === "desktop" && <>A Propos</>}
  
//             {screen === "mobile" && <>A PROPOS</>}
//           </div>
//         </div>
//       </div>
//     );
//   };
  
  
export default Header