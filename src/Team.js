import React, { Component } from 'react';
import teamMember from './components/assets/image/teamMember.jpg';
import karen from './components/assets/image/karen.jfif';
import Navbar from './components/Navbar';
import StyledTeam from './TeamStyled';

class Team extends Component {
  render() {
    return (
      <StyledTeam>
        {/* <Navbar /> */}
        <div className="team-div">
          <div className="team-intro">
            <h1 className="team-intro-heading">Meet the Team.</h1>
            <p className="team-intro-subheading">
              We are a clan of coders. The tight knit relationship that we have
              makes us family. Meet some of our core stakeholders below:
            </p>
          </div>
          <div className="container">
            {/* Row 1 */}
            <div className="row mt-5">
              {/*Team Member 1 */}
              <div className="col-md-3">
                <img src={teamMember} alt="team member" className="img-fluid" />
                <h3 className="colored-link pt-3">Ajiboye Olutayormi</h3>
                <h4 className="colored-link">Director of Human Engineering</h4>
                <h5 className="muted-link">Lagos, Nigeria</h5>
              </div>

              {/*Team Member 2 */}
              <div className="col-md-3">
                <img src={teamMember} alt="team member" className="img-fluid" />
                <h3 className="colored-link pt3">Anjorin Oluwafemi</h3>
                <h4 className="colored-link">Director, Human Engineering</h4>
                <h5 className="muted-link">Lagos, Nigeria</h5>
              </div>

              {/*Team Member 3 */}
              <div className="col-md-3">
                <img src={teamMember} alt="team member" className="img-fluid" />
                <h3 className="colored-link pt-3">Ochi Fortune</h3>
                <h4 className="colored-link">CTO, Code Clan Nigeria</h4>
                <h5 className="muted-link">Lagos, Nigeria</h5>
              </div>

              {/*Team Member 4 */}
              <div className="col-md-3">
                <img className="img-fluid" src={teamMember} alt="team member" />
                <h3 className="colored-link pt-3">Ngozi Uche</h3>
                <h4 className="colored-link">Director of Backend Logistics</h4>
                <h5 className="muted-link">Lagos, Nigeria</h5>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="container">
            <div className="row mt-5">
              {/*Team Member 1 */}
              <div className="col-md-3">
                <img src={teamMember} alt="team member" className="img-fluid" />
                <h3 className="colored-link pt-3">Onasanya Tunde</h3>
                <h4 className="colored-link">Director, Fronten Design</h4>
                <h5 className="muted-link">Lagos, Nigeria</h5>
              </div>

              {/*Team Member 2 */}
              <div className="col-md-3">
                <img src={teamMember} alt="team member" className="img-fluid" />
                <h3 className="colored-link pt3">Ofordile Jennifer</h3>
                <h4 className="colored-link">Social Media Director</h4>
                <h5 className="muted-link">Enugu, Nigeria</h5>
              </div>

              {/*Team Member 3 */}
              <div className="col-md-3">
                <img src={teamMember} alt="team member" className="img-fluid" />
                <h3 className="colored-link pt-3">Debbs Debbs</h3>
                <h4 className="colored-link">Lead, UI/UX Design</h4>
                <h5 className="muted-link">Lagos, Nigeria</h5>
              </div>

              {/*Team Member 4 */}
              <div className="col-md-3">
                <img className="img-fluid" src={karen} alt="team member" />
                <h3 className="colored-link pt-3">Efereyan Karen</h3>
                <h4 className="colored-link">Program Manager, CodeClan</h4>
                <h5 className="muted-link">Kwara, Nigeria</h5>
              </div>
            </div>
          </div>
        </div>

        {/* End of Row 2 */}
        <div></div>
      </StyledTeam>
    );
  }
}

export default Team;
