/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactUsStyled from './ContactUsStyled';

function ContactUs() {
  return (
    <div>
      <ContactUsStyled>
        
      <div className="container-fluid pry-padd-form">
        <div className="row">
          <Navbar/>
        </div>
        <div className="row my-5 py-5">
          <h1 className="title text-center">
            Contact Us
            </h1>
            <h3 className="text-center">
              Get in Touch with us through any channel
            </h3>
            <ul className="social">
                <li>
                  <a href="mailto:info@codeclan.com" className="fa fa-envelope" target="_blank" rel="noopener noreferrer"></a>
                </li>
                <li>
                  <a href="https://twitter.com/codeclannigeria" className="fa fa-twitter" target="_blank" rel="noopener noreferrer"></a>
                </li>
                
            </ul>
        </div>
        
      
      </div>
      <Footer/>
      </ContactUsStyled>
    </div>
  );
}

export default ContactUs;
