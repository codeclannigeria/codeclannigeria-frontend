import React from 'react';
import StyledNav from './NavbarStyled';
import { Link } from 'react-router-dom';
import codeClanLogo from './assets/image/codeClanLogo.png';

function Navbar() {
  return (
    <StyledNav>
      <nav className="">
        <header>
          <Link to="/">
            <img src={codeClanLogo} className="img-fluid" alt="code clan" />
          </Link>
        </header>
        <ul>
          <li>
            <i className="fas fa-search"></i>
          </li>
          <li>
            <Link className="btn btn-outline-primary" to="/login/">
              Login
            </Link>
          </li>

          <li>
            <Link className="btn btn-primary" to="/register/">
              Sign up
            </Link>
          </li>
        </ul>
      </nav>
    </StyledNav>
  );
}

export default Navbar;
