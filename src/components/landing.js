import React from 'react';
import { LandingStyled } from './LandingStyled';
import building_blocks from './assets/image/building_blocks.png';
import real_time_collaboration from './assets/image/real_time_collaboration.png';
import assigned_mentor from './assets/image/assigned_mentor.png';
import dev_productivity from './assets/image/dev_productivity.png';
import porfolio_wireframe from './assets/image/porfolio_wireframe.png';
import goal_target from './assets/image/goal_target.png';
import { ReactComponent as CommunitySVG } from './assets/svgs/community.svg';
import { ReactComponent as SharingArticlesSVG } from './assets/svgs/sharing_articles.svg';
import { ReactComponent as ProjectCompletedSVG } from './assets/svgs/project_completed.svg';
import { ReactComponent as StatusUpdateSVG } from './assets/svgs/status_update.svg';
import { ReactComponent as QuizSVG } from './assets/svgs/quiz.svg';
import { ReactComponent as AboutSVG } from './assets/svgs/about_me.svg';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Landing() {
  return (
    <LandingStyled>
      <div className="wrapper">
        <Navbar />
        <section className="header__section container">
          <div className="header-about p-4">
            <div className="header__about__text">
              <h3>Tap into the Power of Community Learning.</h3>
              <p className="">
                Community learning is a great way to learn, especially ones with
                dedicated mentors. Code Clan Code Clan Nigeria is the perfect
                place for you.
              </p>
              <button className="btn btn-dark header__cta rounded-0">
                Get Started
              </button>
            </div>

            <div className="header__image">
              <img src={building_blocks} className="img-fluid" alt="Header" />
            </div>
          </div>
          <div className="clan_cards">
            <div className="description__cards">
              <div className="description__card">
                <img
                  src={real_time_collaboration}
                  className="img-fluid"
                  alt="Collaboration"
                />
                <p>Get assigned to a clan</p>
              </div>
              <div className="description__card">
                <img
                  src={dev_productivity}
                  className="img-fluid"
                  alt="Get assigned to a clan"
                />
                <p>Start your Journey</p>
              </div>
              <div className="description__card">
                <img
                  src={assigned_mentor}
                  className="img-fluid"
                  alt="Start your journey"
                />
                <p>Get Assigned to A mentor</p>
              </div>
              <div className="description__card">
                <img
                  src={porfolio_wireframe}
                  className="img-fluid"
                  alt="Get assigned a mentor"
                />
                <p>Work on projects/ Build a solid Portfolio</p>
              </div>
            </div>
          </div>
        </section>

        <div className="description__section py-5">
          <div className="container">
            <div className="description__goals">
              <img
                src={goal_target}
                className="img-fluid"
                alt="Learning Community"
              />
              <div className="goals__texts">
                <h3>Tap into the Power of Community Learning.</h3>
                <p className="my-3">
                  Community learning is a great way to learn, especially ones
                  with dedicated mentors. Code Clan Code Clan Nigeria is the
                  perfect place for you.
                </p>

                <Link to="/">
                  Learn More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <section className="section-three bg-blue">
          <h2 className="text-white container text-center">
            WHY CHOOSE CODECLAN NIGERIA ?
          </h2>

          <div className="container">
            <div>
              <CommunitySVG />
              <p className="text-white text-md">
                Tap into the power of community
              </p>
            </div>

            <div>
              <SharingArticlesSVG />
              <p className="text-white text-md">
                Dedicated mentors assigned to clans
              </p>
            </div>

            <div>
              <ProjectCompletedSVG />
              <p className="text-white text-md">
                Earn badges for courses completed
              </p>
            </div>

            <div>
              <StatusUpdateSVG />
              <p className="text-white text-md">Learn to work in a team</p>
            </div>

            <div>
              <QuizSVG />
              <p className="text-white text-md">
                Chance to become a mentor upon the completion of your program
              </p>
            </div>

            <div>
              <AboutSVG />
              <p className="text-white text-md">
                Chance to boost your portfolio with projects and challenges
              </p>
            </div>
          </div>

          <p className="text-white container text-center">
            Resources and events to boost your skill in a matter of time
          </p>
        </section>
        <section className="section-four container">
          <div className="section-four-title">
            <h2>Courses available</h2>
            <Link to="/" className="text-black text-md">
              Browse by categories
            </Link>
          </div>

          <div className="course-wrap">
            <div className="course course-1">
              <div></div>
              <p className="para-1"></p>
              <p className="para-2"></p>
              <p className="para-3"></p>
            </div>

            <div className="course course-2">
              <div></div>
              <p className="para-1"></p>
              <p className="para-2"></p>
              <p className="para-3"></p>
            </div>

            <div className="course course-3">
              <div></div>
              <p className="para-1"></p>
              <p className="para-2"></p>
              <p className="para-3"></p>
            </div>

            <div className="course course-4">
              <div></div>
              <p className="para-1"></p>
              <p className="para-2"></p>
              <p className="para-3"></p>
            </div>

            <div className="course course-5">
              <div></div>
              <p className="para-1"></p>
              <p className="para-2"></p>
              <p className="para-3"></p>
            </div>

            <div className="course course-6">
              <div></div>
              <p className="para-1"></p>
              <p className="para-2"></p>
              <p className="para-3"></p>
            </div>
          </div>
        </section>

        <section className="section-five">
          <div className="container">
            <h2>CLIENT TESTIMONIALS</h2>
            <p>Check out some students reviews and their experience</p>
            <p>Real Students, Real reviews</p>
          </div>

          <div className="container testimonies">
            <div className="testimony testimony-1">
              <div>
                <div className="student-image"></div>
                <h2 className="text-sm">Lorem ipsum</h2>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                quas molestias maxime earum
              </p>
            </div>

            <div className="testimony testimony-2">
              <div>
                <div className="student-image"></div>
                <h2 className="text-sm">Lorem ipsum</h2>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                quas molestias maxime earum
              </p>
            </div>

            <div className="testimony testimony-3">
              <div>
                <div className="student-image"></div>
                <h2 className="text-sm">Lorem ipsum</h2>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                quas molestias maxime earum
              </p>
            </div>
          </div>

          <div className="text-center d-flex flex-column justify-content-center">
            <h2>Still have more questions?</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem accusantium ea cupiditate architecto, quasi
              praesentium!
            </p>
            <Link to="/" className="btn btn-md text-white bg-blue mx-auto">
              Get Started
            </Link>
          </div>
        </section>

        <section className="section-six">
          <h2 className="container text-white footer-text-bold">
            CodeClanNigera
          </h2>
          <div className="container footer-links-wrap">
            <ul>
              <li className="footer-text-bold">SERVICES</li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Community</Link>
              </li>
              <li>
                <Link to="/">Resources</Link>
              </li>
            </ul>

            <ul>
              <li className="footer-text-bold">ABOUT US</li>
              <li>
                <Link to="/">Mentors</Link>
              </li>
              <li>
                <Link to="/">Partners</Link>
              </li>
              <li>
                <Link to="/">Newsletter</Link>
              </li>
            </ul>

            <ul>
              <li className="footer-text-bold">CONNECT WITH US</li>
              <li>
                <Link to="/">Facebook</Link>
              </li>
              <li>
                <Link to="/">Github</Link>
              </li>
              <li>
                <Link to="/">Twitter</Link>
              </li>
            </ul>
          </div>
        </section>

        <footer className="">
          <p className="container text-white">&copy; 2020, CodeClan.</p>
        </footer>
      </div>
    </LandingStyled>
  );
}

export default Landing;
