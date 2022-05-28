import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="header">
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <img src="./assets/images/Tire_Logo.png" width="125px" alt="" />
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>

              <li>
                <Link to="/signin">Signin</Link>
              </li>
            </ul>
          </nav>
          <img
            src="./assets/images/shoppingcart.png"
            width="30px"
            height="30px"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
