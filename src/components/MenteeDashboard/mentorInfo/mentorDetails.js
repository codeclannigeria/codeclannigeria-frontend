import React from 'react';
import { MentorDetailsStyled } from './mentorDetailsStyled';
import DashboardLayout from '../../common/DashboardLayout';
import dummy_image from '../../assets/image/dummy_mentor.png';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import ContactMentor from './ContactMentor';
function MentorDetails() {
  return (
    <>
      <MentorDetailsStyled>
        <div className="profile-container">
          <div className="image-container">
            <img className="image" src={dummy_image} alt="" />
          </div>

          <div className="details__container">
            <div className="summary">
              <p className="name">John Doe</p>
              <div className="info">
                <p>Hi, I’m John Doe, your mentor for this program.</p>
                <p>
                  Over the next couple of weeks, I’d be offering one on one
                  training with you on your Front-End development journey.
                </p>

                <p>
                  Don’t forget to put to practice all you learn from me and
                  CodeClan Nigeria , as it is only through practice we grow.
                </p>

                <p>Feel free to contact me if you encounter any issues.</p>
              </div>
              <div className="goodluck">Best of Luck</div>
            </div>
            <div>
              <Tab.Container id="left-tabs-example" defaultActiveKey="about">
                <div className="buttonContainer">
                  <Nav className="">
                    <Nav.Item>
                      <Nav.Link className="tab-button" eventKey="about">
                        About
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="contact" className="tab-button">
                        Contact
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
                <div className="contact">
                  <Tab.Content>
                    <Tab.Pane eventKey="about">
                      <p className="mentor__about">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Id bibendum magnis magna mor bi feugiat tempus faucibus
                        at. Donec lectus eu, enim dolor eget enim. <br />
                        <br />
                        Risus scelerisque a c amet vitae lorem sed tortor nulla
                        nisi. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Diam in in cursus vestibulum, velit, <br />
                        <br />
                        mattis ultricies et eu. Ullamcorper mattis fermentum
                        maecenas fermentum ultrices nibh maecenas. Sed cum
                        porttitor id sapien, tristique libero consequat. Current
                        technologies and Programming Languages I’m Proficient in
                        include
                        <br /> <br />
                        HTMl
                        <br /> CSS
                        <br /> JS
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="contact">
                      <ContactMentor />
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Tab.Container>
            </div>
          </div>
        </div>
      </MentorDetailsStyled>
    </>
  );
}

export default DashboardLayout(MentorDetails);
