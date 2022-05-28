import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import products from "../data/products.json";

const Products = () => {

  const productData = products.map((product, index) => (
    <div key={index} className="categories">
      <div className="small-container">
        <div className="row">
          <div className="col-6">
            <img src={product.image} />
          </div>
          <div className="col-6">
              <h3>{product.name}</h3>
            </div>
            <p className="col-6">
              <h5>Price:{product.price}</h5>
            </p>
            <button>Go to Product{product.link}</button>
          </div>
        </div>
      </div>
  ));

  return <div>{productData}</div>;
  
};

export default Products;
