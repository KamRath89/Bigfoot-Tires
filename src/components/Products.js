import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="categories">
      <div className="small-container">
        <div className="row">
          <div className="col-6">
            <a href="http://localhost:3000/product1">
              <img src="./assets/images/allseasontire.webp" />
            </a>
            <a href="http://localhost:3000/product1">
              <h4>All Season XR410</h4>
            </a>
            <p>$100.00</p>
          </div>
          <div className="col-6">
            <a href="">
              <img src="./assets/images/allterraintire.webp" />
            </a>
            <a href="">
              <h4>Off Road Super Beast 9000</h4>
            </a>
            <p>$160.00</p>
          </div>
          <div className="col-6">
            <a href="">
              <img src="./assets/images/commercialtire.png" />
            </a>
            <a href="">
              <h4>Heavy Duty Commercial Truck Tire</h4>
            </a>
            <p>$200.00</p>
          </div>
          <div className="col-6">
            <a href="">
              <img src="./assets/images/streettire.jpg" />
            </a>
            <a href="">
              <h4>All Season Street Tire F410</h4>
            </a>
            <p>$129.00</p>
          </div>
          <div className="col-6">
            <a href="">
              <img src="./assets/images/jeeptire.jpg" />
            </a>
            <a href="">
              <h4>All Terrain Super 4x4 Jeep Tire</h4>
            </a>
            <p>$155.00</p>
          </div>
          <div className="col-6">
            <a href="">
              <img src="./assets/images/offroadtire.jpg" />
            </a>
            <a href="">
              <h4>Off Road KO21 All Terrain Tire</h4>
            </a>
            <p>$178.00</p>
          </div>
        </div>
      </div>
      <div className="page-btn">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>&#10137;</span>
      </div>
    </div>
  );
};

export default Products;
