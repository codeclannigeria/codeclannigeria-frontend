import React, { useState } from 'react';
import StyledNav from './NavbarStyled';
import { Link } from 'react-router-dom';
import CodeClanLogo from './assets/image/codeClanLogoWhite.png';
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
            <img className="logo" src={CodeClanLogo} alt="code clan" />
          </div>
          <div className="menu">
            <ul>
              <li>
                <Link to="/team">Team</Link>
              </li>

              <a href="#">
                <li>Events</li>
              </a>
              <a href="#">
                <li>About</li>
              </a>
              <a href="#">
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
              <i className="fas fa-bars fa-2x text-white"></i>
            ) : null}
          </div>
          <Fade right>
            <div className="mobile-menu">
              <div
                className="toggle-btn close"
                onClick={() => handleOpenMobileNav()}
              >
                <i className="fas fa-times  text-white"></i>
              </div>
              <div>
                <ul>
                  <Link to="/team">
                    <li>Team</li>
                  </Link>

                  <a href="#">
                    <li>Events</li>
                  </a>
                  <a href="#">
                    <li>About</li>
                  </a>
                  <a href="#">
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
              <p className="header-copyright"> &copy; 2020 CodeClan Nigeria</p>
            </div>
          </Fade>
        </div>
      </header>
    </StyledNav>
  );
}

export default Navbar;
