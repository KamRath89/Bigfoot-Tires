import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Contact = () => {
    return (
       <div>

       <div className="contact">
      <div className="contact-info">
        <h3 className="contact-info__header">Talk to us</h3>
        <br></br>
        <div className="contact-info__info-line">
          <a href="mailto:Bigfoottires.com">Bigfoottires@gmail.com</a>
        </div>
        <br></br>
        <div className="contact-info__info-line contact-info__phone">
          <span>833-Bigfoottires</span>
        </div>
      </div>
      </div>
      </div>
      )
    }


export default Contact;
