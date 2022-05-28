import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Product1 = () => {
    return (
        <div className="small container">
            <div className="row">
                <div className="col-2">
                    <img src="./assets/images/allseasontire.webp" alt='' width="100%" />
                </div>
                <div className="col-2">
                    <h1>All Season XR410</h1>
                    <h4>$100.00</h4>
                    <a href="http://localhost:3000/cart" className="btn">Add To Cart</a>
                    <h3>Details</h3>
                    <p>A tire for your car that can be used throughout all seasons for everyday use.</p>
                </div>
            </div>
        </div>  
    )
}

export default Product1;