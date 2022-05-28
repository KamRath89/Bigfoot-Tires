import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Signin = () => {
  var LoginForm = document.getElementById("LoginForm");
  var RegForm = document.getElementById("RegForm");
  var Indicator = document.getElementById("Indicator");

  function register() {
    // RegForm.style.transform = "translateX(0px)";
    // LoginForm.style.transform = "translateX(0px)";
    // Indicator.style.transform = "translateX(100px)";
  }

  function login() {
    // RegForm.style.transform = "translateX(300px)";
    // LoginForm.style.transform = "translateX(300px)";
    // Indicator.style.transform = "translateX(0px)";
  }

  return (
    <div className="account-page">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img src="./assets/images/bigtires.png" width="100%" />
          </div>
          <div className="col-2">
            <div className="form-container">
              <div className="form-btn">
          {/*      <span onClick={login()}>Login</span>     */}
                <span onClick={register()}>Register</span>
                <hr id="Indicator" />
              </div>
          {/*              
              <form id="LoginForm">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit" className="btn">
                  Login
                </button>
                <a href="">Forgot Password</a>
              </form>
          */}
              <form id="RegForm" action="/action_page.php" method="get">
                <label for="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" />
                <label for="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" />
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" />
                <label for="email">Email:</label>
                <input type="text" id="email" name="email" />
                <label for="password">Password:</label>
                <input type="text" id="password" name="password" />
                <button type="submit" className="btn" value="Submit">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
