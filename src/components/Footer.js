import React from 'react';
import FooterLogo from './assets/image/codeClanLogoWhite.png';
import { Link } from 'react-router-dom';
import FooterStyled from './FooterStyled';

function Footer() {
  return (
      <FooterStyled>
       <footer className="pry-padd-form">
        <div className="footer-link-groups">
          <div className="footer-link-group">
            <h6>Home</h6>
            <ul className="list-unstyled">
              <li><Link to="/">Overview</Link></li>
              <li>
                <Link to="/">Tracks <span className="nanum-font ft20 turquoise-clr">new</span></Link>
              </li>
              <li><Link to="/">Tutorials</Link></li>
              <li><Link to="/">Releases</Link></li>
            </ul>
          </div>
          <div className="footer-link-group">
            <ul className="list-unstyled">
              <h6>Community</h6>
              <li><Link to="/">About</Link></li>
              <li><Link to="/">Blog</Link></li>
              <li><Link to="/">Careers</Link></li>
              <li><Link to="/">Contact</Link></li>
              <li><Link to="/">Partners</Link></li>
            </ul>
          </div>
          <div className="footer-link-group">
            <ul className="list-unstyled">
              <h6>Legal</h6>
              <li><Link to="/">Cookies Policy</Link></li>
              <li><Link to="/">Privacy Policy</Link></li>
              <li><Link to="/">Terms of Service</Link></li>
              <li><Link to="/">Law Enforcement</Link></li>
              <li><Link to="/">Status</Link></li>
            </ul>
          </div>
          <div className="footer-link-group">
            <ul className="list-unstyled">
              <h6>Follow us</h6>
              <li><Link to="/">Facebook</Link></li>
              <li><Link to="/">Twitter</Link></li>
              <li><Link to="/">Dribbble</Link></li>
              <li><Link to="/">Instagram</Link></li>
              <li><Link to="/">LinkedIn</Link></li>
            </ul>
          </div>
        </div>
        <div>
          <div className="footer-logo-line">
            <span><img src={FooterLogo} alt="code clan logo" /></span>
          </div>
          <div className="text-center mb-5 mt-4"><small>© 2021 CodeClan Nigeria. All rights reserved.</small></div>
        </div>
      </footer>
      </FooterStyled>
    )
}


export default Footer

