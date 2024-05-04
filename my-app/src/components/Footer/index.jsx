import '../../styles/Footer.scss'
import LOGO from "../../Assets/LOGO.png";
function Footer() {
    return (
        <div className="footer">
            <img src={LOGO} alt="logo" className="footer_image" />
            <p className='footer_text'>Copyright © 2022 - Kasa. All rights reserved</p>
        </div>
    );
}
export default Footer;