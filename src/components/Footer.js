import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div class="footer">
            <div class="row">
                <div class="footer-col-1">
                    <h3>Download The App</h3>
                    <p>Download App for Apple and Android Devices.</p>
                    <div class="app-logo">
                        <img src="./assets/images/googlestore.png" />
                        <img src="./assets/images/appstore.png" />
                    </div>
                </div>
                <div class="footer-col-2">
                    <h3>Return Policy</h3>
                </div>
                <div class="footer-col-3">
                    <h3>Follow Us At</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;