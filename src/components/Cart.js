import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="small-container cart">
      <table>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
        <tr>
          <td>
            <div className="cart-info">
              <img src="./assets/images/allseasontire.webp" />
              <div>
                <p>All Season XR410</p>
                <small>Price: $100.00</small>
                <a href="">Remove</a>
              </div>
            </div>
          </td>
          <td>
            <input type="number" value="1" />
          </td>
          <td>$100.00</td>
        </tr>
      </table>
    </div>
  );
};

export default Cart;
