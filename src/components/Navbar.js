import React, { useState } from 'react';
import StyledNav from './NavbarStyled';
import { Link } from 'react-router-dom';
import CodeClanLogo from './assets/image/codeClanLogo.png';
import Fade from 'react-reveal/Fade';

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
            <Link to="/">
              <img className="logo" src={CodeClanLogo} alt="code clan" />
            </Link>
          </div>
          <div className="menu">
            <nav className="navbar">
              <ul className="topnav-links">
                <li className="nav-item">
                  <Link className="nav-link" to="/team">Our Team</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contactus">Contact Us</Link>
                </li>
                <li className="nav-item btn btn-success mx-2">
                  <Link className="nav-link text-light" to="/login">Login</Link>
                </li>
                <li className="nav-item btn btn-warning">
                  <Link className="nav-link text-dark" to="/register">Register</Link>
                </li>
                
              </ul>
            
            </nav>
          </div>
    
          <div className="toggle-btn" onClick={() => handleOpenMobileNav()}>
            {!openMobileNav ? (
              <i className="fas fa-bars fa-2x text-dark"></i>
            ) : null}
          </div>
          <Fade right>
            <div className="mobile-menu">
              <div
                className="toggle-btn close"
                onClick={() => handleOpenMobileNav()}
              >
                <i className="fas fa-times text-light"></i>
              </div>
              <div>
                <ul>
                  <li className="nav-item">
                    <Link className="nav-link" to="/team">Our Team</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contactus">Contact Us</Link>
                  </li>
                  <li className="nav-item btn btn-success mx-2">
                    <Link className="nav-link text-light" to="/login">Login</Link>
                  </li>
                  <li className="nav-item btn btn-warning">
                    <Link className="nav-link text-dark" to="/register">Register</Link>
                  </li>
                </ul>
              </div>
             
              
            </div>
          </Fade>
        </div>
      </header>
    </StyledNav>
  );
}

export default Navbar;
