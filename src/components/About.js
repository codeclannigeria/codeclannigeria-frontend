import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AboutStyled from './AboutStyled';

function About() {
  return (
    <React.Fragment>
      <AboutStyled>
        <Navbar />
        <div style={{ marginTop: '6em' }}>
          <div className="teams half-grey grey">
            <div className="head">
              About us
              <div
                className=""
                style={{ fontSize: '18px', color: 'rgb(218, 21, 119)' }}
              >
                Full Info!
              </div>
            </div>
          </div>
        </div>

        <div className="major">
          Nulla aliqua deserunt nostrud consectetur voluptate consequat aliquip
          et et ipsum commodo. Proident exercitation exercitation cupidatat
          adipisicing labore officia labore exercitation ut commodo fugiat. Et
          voluptate tempor consectetur aliqua duis et qui elit proident culpa
          nostrud ex. Sunt quis minim est mollit sunt voluptate est ad elit
          occaecat mollit dolore. Velit exercitation proident non amet occaecat
          exercitation. Esse non ut aliquip veniam ad nulla et pariatur laboris
          duis.
        </div>

        <div>
          <div className="teams half-grey grey">
            <div className="head">Our mission</div>
          </div>
        </div>

        <div
          className="major"
          style={{
            padding: '1em',
            borderRight: '.5em solid rgb(218, 21, 119)',
          }}
        >
          Nulla aliqua deserunt nostrud consectetur voluptate consequat aliquip
          et et ipsum commodo. Proident exercitation exercitation cupidatat
          adipisicing labore officia labore exercitation ut commodo fugiat. Et
          voluptate tempor consectetur aliqua duis et qui elit proident culpa
          nostrud ex. Sunt quis minim est mollit sunt voluptate est ad elit
          occaecat mollit dolore. Velit exercitation proident non amet occaecat
          exercitation. Esse non ut aliquip veniam ad nulla et pariatur laboris
          duis.
        </div>

        <div>
          <div className="teams half-grey grey">
            <div className="head">
              How we work
              <div
                className=""
                style={{ fontSize: '18px', color: 'rgb(218, 21, 119)' }}
              >
                To serve you!
              </div>
            </div>
          </div>
        </div>

        <div
          className="major"
          style={{ padding: '1em', borderLeft: '.5em solid rgb(218, 21, 119)' }}
        >
          Nulla aliqua deserunt nostrud consectetur voluptate consequat aliquip
          et et ipsum commodo. Proident exercitation exercitation cupidatat
          adipisicing labore officia labore exercitation ut commodo fugiat. Et
          voluptate tempor consectetur aliqua duis et qui elit proident culpa
          nostrud ex. Sunt quis minim est mollit sunt voluptate est ad elit
          occaecat mollit dolore. Velit exercitation proident non amet occaecat
          exercitation. Esse non ut aliquip veniam ad nulla et pariatur laboris
          duis.
        </div>

        <Footer />
      </AboutStyled>
    </React.Fragment>
  );
}

export default About;
