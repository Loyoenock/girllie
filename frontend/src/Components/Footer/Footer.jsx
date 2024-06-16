import React from 'react';
import './Footer.css';
import logo from '../Assets/logo.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pinterest_icon from '../Assets/pinterest_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="footer-content">
                <div className='footer-logo'>
                    <img src={logo} alt='logo' height={200} />
                </div>
                <ul className="footer-nav">                
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className="footer-social">
                    <div className='social-icon-container'>
                        <img src={instagram_icon} alt='instagram' />
                    </div>
                    <div className='social-icon-container'>
                        <img src={pinterest_icon} alt='pinterest' />
                    </div>
                    <div className='social-icon-container'>
                        <img src={whatsapp_icon} alt='whatsapp' />
                    </div>        
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>© 2024, All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Footer;