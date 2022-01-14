import React from 'react';
import './TeamStyled.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Team = () => {
  const TeamMemberTayomi = () => {
    return (
      <div className="col-md-4 col-sm-6 mb-4">
        <div className="our-team">
          <div className="image-container">
            <img
              src="https://res.cloudinary.com/codeclannigeria/image/upload/q_auto/v1598648073/CCN/Teams%20Page%20Photos/tayormi_eisz58.jpg"
              alt="tayormi "
            />
          </div>
          <div className="team-content">
            <h3 className="title">Ajiboye Temitope Tayomi</h3>
            <span className="post">Founder, Code Clan Nigeria</span>
            <p className="description">
              Tayomi is the founder of Code Clan Nigeria, a community dedicated
              to turning beginners into pro developers. He is also a Developer
              with experience building enterprise mobile and web apps.
            </p>
            <p className="tech-stack">
              Tech Stack: .Net, Node.js, Angular, Flutter
            </p>
            <p className="tech-stack">
              Phone: +2349065266070
            </p>
            <p className="tech-stack">
              Email: mrtayormi@gmail.com
            </p>

            <p className="tech-stack">
            This site is owned and operated by Ajiboye Temitope.
            </p>
            <ul className="social">
              <li>
                <a
                  className="fab fa-twitter"
                  href="https://twitter.com/olu_tayormi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                </a>
              </li>
              <li>
                <a
                  className="fab fa-github"
                  href="https://github.com/tayormi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                </a>
              </li>
              <li>
                <a
                  className="fab fa-linkedin"
                  href="https://www.linkedin.com/in/tayormi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  // Other Team Members e.g
  // const TeamMemberVictor: () => JSX.Element
  // const TeamMemberJack: () => JSX.Element
  // and so on...

  return (
    <div>
      <div className="container-fluid pry-padd-form">
        <div className="row">
          <Navbar />
        </div>
        <div className="row my-5 py-5">
          <h1 className="title text-center qa">Meet our team</h1>
        </div>

        <div className="row">
          <TeamMemberTayomi />
          {/* <TeamMemberVictor /> */}
          {/* <TeamMemberJack /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
