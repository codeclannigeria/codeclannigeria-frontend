import React, { useRef } from 'react';
import HomepageStyled from './HomepageStyled';
import HeaderImage from './assets/image/homepage/Header.png';
import GroupCircle from './assets/image/homepage/group-circle.png';
import GirlSmiling from './assets/image/homepage/girl.png';
import BoySmiling from './assets/image/homepage/boy.png';
import Code from './assets/image/homepage/code.jpg';

import hpLaptop from './assets/image/homepage/hpLaptop.jpg';
import LaptopOnTable from './assets/image/homepage/laptopOnTable.jpg';
import laptopWithBook from './assets/image/homepage/laptopWithBook.jpg';
import { ReactComponent as ChevronLeft } from './assets/svgs/homepage/chevron-left.svg';
import { ReactComponent as ChevronRight } from './assets/svgs/homepage/chevron-right.svg';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import Jump from 'react-reveal/Jump';

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
              <Slide top>Tap into the Power of Community Learning</Slide>
            </div>
            <p className="subtitle">
              <Flip right cascade>
                Start your journey to becoming a world class developer or
                designer
              </Flip>
            </p>
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
            <p className="text-title collab-text">
              Leverage the power of collaboration
            </p>
          </div>
          <div className="collab-image">
            <Jump duration={5000}>
              <img src={GroupCircle} alt="collaboration" />
            </Jump>
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
            <Fade left>
              <div className="small-text">Mentorship.</div>
              <div className="tiny-text">
                When you join Code Clan, you get assigned a mentor who will be
                responsible for your learning and be there with you every step
                of the way.
              </div>
            </Fade>
            <Fade right>
              <div className="small-text">Track Variety.</div>
              <div className="tiny-text">
                Choose from a wide variety of tracks to follow, whether frontend
                or backend or mobile or even design, we’ve got you covered.
              </div>
            </Fade>
            <Fade left>
              <div className="small-text">Certificate.</div>
              <div className="tiny-text">
                By the end of the program, you would have worked on projects you
                can showcase on your portfolio and even get a certificate of
                completion.
              </div>
            </Fade>
          </div>
          <div
            style={{ textAlign: 'center', width: '64%', position: 'relative' }}
          >
            <Slide left>
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
            </Slide>
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
              display: 'inline-block',
              margin: '0.8rem',
            }}
          >
            <a
              href="https://www.facebook.com/groups/codeclannigeria/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-facebook fa-2x"></i>
            </a>
          </div>

          <div
            style={{
              display: 'inline-block',
              margin: '0.8rem',
            }}
          >
            <a
              href="https://github.com/codeclannigeria"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i class="fab fa-github fa-2x"></i>
            </a>
          </div>

          <div
            style={{
              display: 'inline-block',
              margin: '0.8rem',
            }}
          >
            <a
              href="https://twitter.com/codeclannigeria"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i class="fab fa-twitter fa-2x"></i>
            </a>
          </div>
        </div>
        <div
          className="footer-under"
          style={{ textAlign: 'center', marginTop: '1rem' }}
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
