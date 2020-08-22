import React from 'react';
import StyledTeam from './TeamStyled';
import groupSession from './components/assets/image/homepage/groupSession.jpg';
import teamMember from './components/assets/image/team/teamMember.jpg';
import tayo from './components/assets/image/team/tayo.jfif';
import femi from './components/assets/image/team/femi.jfif';
import fortune from './components/assets/image/team/fortune.jfif';
import karen from './components/assets/image/team/karen.jfif';
import rammy from './components/assets/image/team/rammy.jfif';
import Navbar from './components/Navbar';

function Team() {
  return (
    <StyledTeam>
      <div className="team-container">
        <Navbar />
        <div className="main-team-section row container-fluid">
          <div className="col-md-6 col-sm-12">
            <h1 className="main-team-intro white">Meet the Team.</h1>
            <p className="main-team-details white">
              We are a clan of coders. The tight knit relationship that we have
              makes us family. Choose any of the teams you'd like to be a part
              of. There are different categories and different spheres just for
              you. Meet some of our core stakeholders below:
            </p>
          </div>
          <div className="col-md-6 col-sm-12">
            <img
              src={groupSession}
              alt="main-team-image"
              className="img-fluid main-img"
            />
          </div>
        </div>
        {/* Team Section 1*/}
        <div className="team container mt-5">
          {/* Row 1 */}
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <img src={tayo} alt="temi Ajiboye" className="img-fluid" />
              <h5 className="colored-link">CEO & CTO, Code Clan Nigeria</h5>
              <h6 className="muted-link">Lagos, Nigeria</h6>
            </div>

            <div className="col-md-3 col-sm-12">
              <img src={femi} alt="Femi Anjorin" className="img-fluid" />
              <h5 className="colored-link">
                Software Developer, Lambda School
              </h5>
              <h6 className="muted-link">United States</h6>
            </div>

            <div className="col-md-3 col-sm-12">
              <img src={fortune} alt="Fortune Ochi" className="img-fluid" />
              <h5 className="colored-link">
                Full Stack Developer, Access Bank
              </h5>
              <h6 className="muted-link">Lagos, Nigeria</h6>
            </div>

            <div className="col-md-3 col-sm-12">
              <img src={rammy} alt="Onasanya Tunde" className="img-fluid" />
              <h5 className="colored-link">
                Software Developer, Code Clan Nigeria
              </h5>
              <h6 className="muted-link">Lagos, Nigeria</h6>
            </div>
          </div>

          {/* Row 2 */}
          <div className="row container mt-5">
            <div className="col-md-3 col-sm-12">
              <img src={karen} alt="Karen Efereyan" className="img-fluid" />
              <h5 className="colored-link">
                Frontend Developer, Code Clan Nigeria
              </h5>
              <h6 className="muted-link">Kwara, Nigeria</h6>
            </div>

            <div className="col-md-3 col-sm-12">
              <img src={teamMember} alt="Femi Anjorin" className="img-fluid" />
              <h5 className="colored-link">
                Software Developer, Lambda School
              </h5>
              <h6 className="muted-link">United States</h6>
            </div>

            <div className="col-md-3 col-sm-12">
              <img src={teamMember} alt="Fortune Ochi" className="img-fluid" />
              <h5 className="colored-link">
                Full Stack Developer, Access Bank
              </h5>
              <h6 className="muted-link">Lagos, Nigeria</h6>
            </div>

            <div className="col-md-3 col-sm-12">
              <img
                src={teamMember}
                alt="Onasanya Tunde"
                className="img-fluid"
              />
              <h5 className="colored-link">
                Software Developer, Code Clan Nigeria
              </h5>
              <h6 className="muted-link">Lagos, Nigeria</h6>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <ul className="socials">
            <li>
              <a>
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a>
                <i class="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a>
                <i class="fa fa-twitter"></i>
              </a>
            </li>
          </ul>
          <p className="copyright">
            All rights reserved &copy;CodeClanNigeria2020
          </p>
        </div>
      </div>
    </StyledTeam>
  );
}

export default Team;
