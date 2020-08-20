import React, { useState } from 'react';
import StyledNav from './NavbarStyled';
import { Link } from 'react-router-dom';
import CodeClanLogo from './assets/image/codeClanLogoWhite.png';

function Navbar() {
  const [openMobileNav, setopenMobileNav] = useState(false);
  const handleOpenMobileNav = () => {
    setopenMobileNav(!openMobileNav);
  };
  return (
    <StyledNav openNav={openMobileNav}>
      <header>
        <div className="inner-header">
          <div>
            <img className="logo" src={CodeClanLogo} alt="code clan" />
          </div>
          <div className="menu">
            <ul>
              <a href="teams.html">
                <li>Team</li>
              </a>
              <a href="events.html">
                <li>Events</li>
              </a>
              <a href="about.html">
                <li>About</li>
              </a>
              <a href="contact-us.html">
                <li>Contact Us</li>
              </a>
            </ul>
          </div>
          <div className="menu sign desktop-sign">
            <ul>
              <li>
                <Link to="/login/">Login</Link>
              </li>
              <li className="button">
                <Link to="/register/">Sign Up</Link>
              </li>
            </ul>
          </div>

          <div className="toggle-btn" onClick={() => handleOpenMobileNav()}>
            {!openMobileNav ? (
              <i className="fas fa-bars text-white"></i>
            ) : (
              <i className="fas fa-times  text-white"></i>
            )}
          </div>
          <div className="mobile-menu">
            <div>
              <ul>
                <a href="teams.html">
                  <li>Team</li>
                </a>
                <a href="events.html">
                  <li>Events</li>
                </a>
                <a href="about.html">
                  <li>About</li>
                </a>
                <a href="contact-us.html">
                  <li>Contact Us</li>
                </a>
              </ul>
            </div>
            <div className="menu sign mobile-sign">
              <ul>
                <li>
                  <Link to="/login/">Login</Link>
                </li>
                <li className="mobile-button">
                  <Link to="/register/">Sign Up</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </StyledNav>
  );
}

export default Navbar;
