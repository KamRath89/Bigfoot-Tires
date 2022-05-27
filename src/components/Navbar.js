import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="header">
            <div class="container">
                <div class="navbar">
                    <div class="logo">
                        <img src="./assets/images/Tire_Logo.png" width="125px" alt='' />
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/product1">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact">
                                    Contact
                                </Link>
                            </li>

                            <li>
                                <Link to="/signin">
                                    Signin
                                </Link>
                            </li>

                        </ul>
                    </nav>
                    <img src="./assets/images/shoppingcart.png" width="30px" height="30px" alt='' />
                </div>
            </div>
        </div>

    )

}

export default Navbar;