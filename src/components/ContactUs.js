/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './ContactUsStyled.css';

function ContactUs() {
  return (
    <div>
      <div className="container-fluid pry-padd-form">
        <div className="row">
          <Navbar />
        </div>
        <div className="row my-5 py-5">
          <h1 className="title text-center">Contact Us</h1>
          <div className="icons-container">
            <h4>Get in touch with us on</h4>
            <ul>
              <li>
                <a
                  href="https://discord.com/codeclannigeria"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-discord"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/codeclannigeria"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@codeclan.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/codeclannigeria"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/codeclannigeria"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
