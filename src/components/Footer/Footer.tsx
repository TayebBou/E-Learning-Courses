import Logo from '../Logo/Logo';
import './Footer.css';

const Footer = () => (
    <footer className="footer-class">
        <Logo style={{ marginTop: '0.7em' }} imageStyle="white" />
        <p className="footer-text">Copyright © 2021 - Tous Droits Réservés - <strong><span>E-Learning Courses</span></strong></p>
    </footer>
)

export default Footer;