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
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Jobs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
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
                    <Link to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/services">Services</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/jobs">Jobs</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/"> Contact</Link>
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
