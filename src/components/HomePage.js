import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>

        <div class="categories">
          <div class="small-container">
            <div class="row">
              <div class="col-3">
                <img src="./assets/images/category-1.jfif" />
                <a href="">All Terrain Tires</a>
              </div>
              <div class="col-3">
                <img src="./assets/images/category-2.jpg" />
                <a href="">All Season Tires</a>
              </div>
              <div class="col-3">
                <img src="./assets/images/category-3.jpg" />
                <a href="">Commercial Tires</a>
              </div>
            </div>
          </div>
        </div>
        <div class="small-contatiner">
          <h2 class="title">Featured Products</h2>
          <div class="row">
            <div class="col-4">
              <img src="./assets/images/allseasontire.webp" />
              <h4>All Season XR410</h4>
              <p>$100.00</p>
            </div>
            <div class="col-4">
              <img src="./assets/images/allterraintire.webp" />
              <h4>Off Road Super Beast 9000</h4>
              <p>$150.00</p>
            </div>
            <div class="col-4">
              <img src="./assets/images/commercialtire.png" />
              <h4>Heavy Duty Commercial Truck Tire</h4>
              <p>$200.00</p>
            </div>
          </div>
        </div>

        </div>
    )
}

export default HomePage;