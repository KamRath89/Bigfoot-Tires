import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Product1 = () => {
    return (
        <div class="small container">
            <div class="row">
                <div class="col-2">
                    <img src="./assets/images/allseasontire.webp" alt='' width="100%" />
                </div>
                <div class="col-2">
                    <h1>All Season XR410</h1>
                    <h4>$100.00</h4>
                    <a href="http://127.0.0.1:5500/cart.html" class="btn">Add To Cart</a>
                    <h3>Details</h3>
                    <p>A tire for your car that can be used throughout all seasons for everyday use.</p>
                </div>
            </div>
        </div>  
    )
}

export default Product1;