import React, { useRef, useState } from 'react';
import HomepageStyled from './HomepageStyled';
import CodeClanLogo from './assets/image/codeClanLogoWhite.png';
import HeaderImage from './assets/image/homepage/Header.png';
import GroupCircle from './assets/image/homepage/group-circle.png';
import GirlSmiling from './assets/image/homepage/girl.png';
import BoySmiling from './assets/image/homepage/boy.png';
import Code from './assets/image/homepage/code.jpg';
import groupSession from './assets/image/homepage/groupSession.jpg';
import hpLaptop from './assets/image/homepage/hpLaptop.jpg';
import LaptopOnTable from './assets/image/homepage/laptopOnTable.jpg';
import laptopWithBook from './assets/image/homepage/laptopWithBook.jpg';
import { ReactComponent as ChevronLeft } from './assets/svgs/homepage/chevron-left.svg';
import { ReactComponent as ChevronRight } from './assets/svgs/homepage/chevron-right.svg';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Homepage() {
  const row = useRef();
  const animateScroll = (el, scrollLength, speed, where) => {
    var start = 0;
    const scrol = setInterval(function () {
      start += 5;
      where === 'right' ? (el.scrollLeft += 5) : (el.scrollLeft -= 5);

      if (start >= 130) {
        start += 5;
        where === 'right' ? (el.scrollLeft += 5) : (el.scrollLeft -= 5);
      }

      if (start >= scrollLength) {
        clearInterval(scrol);
      }
    }, speed);
  };

  function goRight() {
    // console.log(row);
    animateScroll(row.current, 800, 1, 'right');
  }

  function goLeft() {
    animateScroll(row.current, 800, 1, 'left');
  }

  return (
    <HomepageStyled>
      <Navbar />
      <div className="back">
        <div className="body">
          <div className="sorround">
            <div className="title">
              Tap into the <br />
              Power of <br />
              Community <br />
              Learning
            </div>
            <div>
              Start your journey to becoming a world class developer or designer
            </div>
            <div>
              <Link to="/register/">
                <button className="get-started">Get Started</button>
              </Link>
            </div>
          </div>
          <div className="pic-hold">
            <img src={HeaderImage} alt="Header" />
          </div>
        </div>
      </div>
      {/* second section */}
      <div className="section-2">
        <div className="section-2-title">Making Learning Easy &amp; Fun</div>
        <div className="collaboration">
          <div className="text-title">
            <div style={{ marginLeft: '6em', marginTop: '6em' }}>
              Leverage the power of collaboration
            </div>
          </div>
          <div className="collab-image">
            <img src={GroupCircle} alt="collaboration image" />
          </div>
        </div>
      </div>
      {/* third section */}
      <div className="section-3">
        <div className="p-70-30">
          <div className="section-3-title">
            Why should you join the CodeClan Community?
          </div>
        </div>
        <div className="section-3-inner">
          <div className="common">
            <div className="small-text">Mentorship.</div>
            <div className="tiny-text">
              When you join Code Clan, you get assigned a mentor who will be
              responsible for your learning and be there with you every step of
              the way.
            </div>
            <div className="small-text">Track Variety.</div>
            <div className="tiny-text">
              Choose from a wide variety of tracks to follow, whether frontend
              or backend or mobile or even design, we’ve got you covered.
            </div>
            <div className="small-text">Certificate.</div>
            <div className="tiny-text">
              By the end of the program, you would have worked on projects you
              can showcase on your portfolio and even get a certificate of
              completion.
            </div>
          </div>
          <div
            style={{ textAlign: 'center', width: '64%', position: 'relative' }}
          >
            <div style={{ width: '70%' }}>
              <img
                style={{ height: '80%' }}
                src={GirlSmiling}
                alt="lady smiling"
              />
            </div>
            <div className="absolute-pic">
              <img src={BoySmiling} />
            </div>
          </div>
        </div>
      </div>
      {/* fourth section */}
      <div className="section-4">
        <div
          className="section-4-title"
          style={{ textAlign: 'center', marginBottom: '1em' }}
        >
          Tracks
        </div>
        <div style={{ position: 'relative' }}>
          <div ref={row} id="row" className="row">
            <div className="inner">
              <div className="pic">
                <img src={LaptopOnTable} />
              </div>
              <div className="full-padding">
                <p className="straight">Mobile Development</p>
                <p style={{ textAlign: 'center', marginTop: '.5em' }}>
                  Learn how to build amazing apps using Flutter
                </p>
              </div>
            </div>
            <div className="inner">
              <div className="pic">
                <img src={hpLaptop} />
              </div>
              <div className="full-padding">
                <p className="straight">FrontEnd Development</p>
                <p style={{ textAlign: 'center', marginTop: '.5em' }}>
                  Learn how to build amazing apps using Flutter
                </p>
              </div>
            </div>
            <div className="inner">
              <div className="pic">
                <img src={laptopWithBook} />
              </div>
              <div className="full-padding">
                <p className="straight">Backend Development</p>
                <p style={{ textAlign: 'center', marginTop: '.5em' }}>
                  Learn how to build amazing apps using Flutter
                </p>
              </div>
            </div>
            <div className="inner">
              <div className="pic">
                <img src={Code} />
              </div>
              <div className="full-padding">
                <p className="straight">Full Stack Development</p>
                <p style={{ textAlign: 'center', marginTop: '.5em' }}>
                  Learn how to build amazing apps using Flutter
                </p>
              </div>
            </div>
          </div>
          <button className="go go-right" onClick={() => goRight()}>
            <ChevronRight height="20px" width="20px" />
          </button>
          <button className="go go-left" onClick={() => goLeft()}>
            <ChevronLeft height="20px" width="20px" />
          </button>
        </div>
      </div>
      {/* footer */}
      <div className="footer">
        <div className style={{ textAlign: 'center' }}>
          <div
            style={{
              height: '40px',
              width: '40px',
              display: 'inline-block',
              margin: '24px',
            }}
          >
            <a href="https://www.facebook.com/groups/codeclannigeria/" target="_blank">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 64 64"
                style={{ enableBackground: 'new 0 0 64 64' }}
                xmlSpace="preserve"
              >
                <g>
                  <path
                    style={{ fill: '#fff' }}
                    d="M37.2,64H28c-2.5,0-4.5-2-4.5-4.5V37H17c-2.5,0-4.5-2-4.5-4.5v-6.9c0-2.5,2-4.6,4.5-4.6h6.5v-5.5c0-9.1,6.2-15.5,15-15.5
                    H47c1.4,0,2.5,1.1,2.5,2.5v13c0,1.4-1.1,2.5-2.5,2.5h-5.5v3h5.4c0,0,0.1,0,0.1,0c1.4,0.1,2.7,0.7,3.5,1.8c0.8,1.1,1.2,2.4,0.9,3.8
                        l-1.3,6.7C49.8,35.4,48,37,45.7,37h-4.3v22.5C41.5,62,39.5,64,37.2,64z M28.5,59h8V34.5c0-1.4,1.1-2.5,2.5-2.5h6.3l1.2-6H39
                        c-1.4,0-2.5-1.1-2.5-2.5v-8c0-1.4,1.1-2.5,2.5-2.5h5.5V5h-6c-6.1,0-10,4.1-10,10.5v8c0,1.4-1.1,2.5-2.5,2.5h-8.5v6H26
                        c1.4,0,2.5,1.1,2.5,2.5V59z"
                />
              </g>
              </svg>
            </a>
          </div>
 
          <div
            style={{
              height: '40px',
              width: '40px',
              display: 'inline-block',
              margin: '24px',
            }}
          >
            <a href="https://github.com/codeclannigeria" target="_blank">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24"
            >
              <path 
                style={{ fill: "fff" }} 
                d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" 
              />
            </svg>
            </a>
          </div>

          <div
            style={{
              height: '40px',
              width: '40px',
              display: 'inline-block',
              margin: '24px',
            }}
          >
            <a href="https://twitter.com/codeclannigeria" target="_blank">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 64 64"
                style={{ enableBackground: 'new 0 0 64 64' }}
                xmlSpace="preserve"
              >
                <style
                  type="text/css"
                  dangerouslySetInnerHTML={{
                    __html:
                      '\n                    .st0{fill:none;stroke:#000000;stroke-miterlimit:10;}\n                ',
                  }}
                />
                <g>
                  <path
                    style={{ fill: '#fff' }}
                    d="M22.2,58c-5.4,0-13.3-1-20-5.8c-2-1.4-2.8-4.1-1.8-6.4c0.9-2.3,3.4-3.6,5.9-3.1l0,0c0,0,1,0.2,2.5,0.1
                    c-1-1.4-1.9-3-2.5-4.7c-0.2-0.6-0.3-1.1-0.3-1.7c-2.5-2.9-3.8-6.5-3.8-10.5c0-0.9,0.2-1.8,0.7-2.5C2,20,1.7,15.5,4.6,10.7
                    C5.5,9.3,7,8.3,8.7,8.1c0.1,0,0.1,0,0.2,0c1.8-0.1,3.4,0.6,4.5,1.8l0,0c0.7,0.7,6.1,6.4,13,8.3C28,11.2,34.4,6,42.1,6
                    c3.4,0,6.7,1,9.3,2.9c0.7-0.2,1.6-0.5,2.4-1.1c1.6-1.1,3.7-1.3,5.4-0.4c1.7,0.8,2.9,2.4,3.1,4.3c0,0.1,0,0.2,0,0.3
                    c0,0.1,0,0.3,0,0.6c1.4,1.4,1.9,3.4,1.3,5.2c-0.5,1.7-2.1,3.8-5.4,6.8C58,32,54.5,51.8,29.6,57.4C29.4,57.4,26.4,58,22.2,58z
                    M5.4,47.6c-0.2,0-0.3,0.1-0.3,0.1c0,0,0,0.1,0,0.1C5,47.9,5,48,5.1,48.1c5.6,4.1,12.4,4.9,17.1,4.9c3.7,0,6.3-0.5,6.4-0.5
                    c22.6-5.1,24.8-23.6,24.9-29.2c0-0.7,0.3-1.4,0.8-1.8c4.2-3.7,4.7-5,4.7-5.1c0.1-0.2-0.1-0.4-0.2-0.4c0,0-0.1-0.1-0.1-0.1
                    c-1.1-0.5-1.7-1.8-1.3-3c0.1-0.3,0.1-0.5,0.1-0.7c0-0.1-0.1-0.2-0.2-0.3c-0.1,0-0.1-0.1-0.2-0.1c-0.1,0-0.2,0-0.4,0.1
                    c-2.2,1.5-4.5,2-5.6,2.1c-0.7,0.1-1.3-0.1-1.8-0.5c-1.9-1.6-4.5-2.4-7.1-2.4c-6.1,0-11,4.5-11.2,10.4c0,0.7-0.3,1.4-0.9,1.8
                    c-0.5,0.5-1.2,0.7-1.9,0.6c-9.5-1.3-17-8.9-18.5-10.4c0,0-0.1-0.1-0.1-0.1c-0.1-0.1-0.3-0.1-0.4-0.1c-0.2,0-0.3,0.2-0.4,0.3
                    c-1.8,3-2,6.2-0.7,9.4c0.4,1,0.2,2.2-0.7,2.9c-0.1,0.1-0.2,0.2-0.2,0.2c0,3.2,1,5.8,3.2,7.8c0.7,0.7,0.9,1.6,0.7,2.5
                    c0,0.1,0,0.2,0,0.3c0.8,2.5,2.4,4.5,4.6,5.8c0.8,0.5,1.3,1.4,1.2,2.4c-0.1,1-0.8,1.8-1.7,2.1c-4.6,1.5-9.5,0.8-9.7,0.7
                    C5.5,47.6,5.4,47.6,5.4,47.6z M58.5,15.7C58.5,15.7,58.5,15.7,58.5,15.7C58.5,15.7,58.5,15.7,58.5,15.7z"
                />
              </g>
                <path
                  style={{ fill: '#fff' }}
                  className="st0"
                  d="M-5.7,0.9L-5.7,0.9L-5.7,0.9z"
                />
                <path
                  style={{ fill: '#fff' }}
                  className="st0"
                  d="M32,32L32,32L32,32z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div
          className="footer-under"
          style={{ textAlign: 'center', marginTop: '2em' }}
        >
          <p style={{ fontWeight: 'bold', lineHeight: '40px' }}>
            CODE CLAN NIGERIA
          </p>
          <p>Copyright © 2020</p>
        </div>
      </div>
    </HomepageStyled>
  );
}

export default Homepage;
