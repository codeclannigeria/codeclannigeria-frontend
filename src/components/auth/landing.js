import React from "react"
import { LandingStyled } from "./LandingStyled"
import building_blocks from "./assets/image/building_blocks.png"

function Landing() {
  return (
    <LandingStyled>
      <div class="wrapper">
        <nav class="">
          <header>
            <p>CodeClan</p>
          </header>
          <ul>
            <li>
              <i class="fas fa-search"></i>
            </li>
            <li>
              <a class="btn btn-outline-primary" href="/signin.html">
                Login
              </a>
            </li>
            <li>
              <a class="btn btn-primary" href="/signup.html">
                Sign up
              </a>
            </li>
          </ul>
        </nav>

        <section class="header__section container">
          <div class="header-about p-4">
            <div class="header__about__text">
              <h3>Tap into the Power of Community Learning.</h3>
              <p class="">
                Community learning is a great way to learn, especially ones with
                dedicated mentors. Code Clan Code Clan Nigeria is the perfect
                place for you.
              </p>
              <button class="btn btn-dark header__cta rounded-0">
                Get Started
              </button>
            </div>

            <div class="header__image">
              <img src={building_blocks} class="img-fluid" alt="Header" />
            </div>
          </div>
          <div class="clan_cards">
            <div class="description__cards">
              <div class="description__card">
                <img
                  src="./img/real_time_collaboration.png"
                  class="img-fluid"
                  alt=""
                  srcset=""
                />
                <p>Get assigned to a clan</p>
              </div>
              <div class="description__card">
                <img
                  src="./img/dev_productivity.png"
                  class="img-fluid"
                  alt=""
                  srcset=""
                />
                <p>Start your Journey</p>
              </div>
              <div class="description__card">
                <img
                  src="./img/assigned_mentor.png"
                  class="img-fluid"
                  alt=""
                  srcset=""
                />
                <p>Get Assigned to A mentor</p>
              </div>
              <div class="description__card">
                <img
                  src="./img/porfolio_wireframe.png"
                  class="img-fluid"
                  alt=""
                  srcset=""
                />
                <p>Work on projects/ Build a solid Portfolio</p>
              </div>
            </div>
          </div>
        </section>

        <div class="description__section py-5">
          <div class="container">
            <div class="description__goals">
              <img src="./img/goal_target.png" class="img-fluid" alt="" />
              <div class="goals__texts">
                <h3>Tap into the Power of Community Learning.</h3>
                <p class="my-3">
                  Community learning is a great way to learn, especially ones
                  with dedicated mentors. Code Clan Code Clan Nigeria is the
                  perfect place for you.
                </p>
                <a href="#">
                  Learn More <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <section class="section-three bg-blue">
          <h2 class="text-white container text-center">
            WHY CHOOSE CODECLAN NIGERIA ?
          </h2>

          <div class="container">
            <div>
              <img src="img/svgs/undraw_community_8nwl 1.svg" alt="" />
              <p class="text-white text-md">Tap into the power of community</p>
            </div>

            <div>
              <img src="img/svgs/undraw_sharing_articles_t5aa 1.svg" alt="" />
              <p class="text-white text-md">
                Dedicated mentors assigned to clans
              </p>
            </div>

            <div>
              <img src="img/svgs/undraw_project_completed_w0oq 1.svg" alt="" />
              <p class="text-white text-md">
                Earn badges for courses completed
              </p>
            </div>

            <div>
              <img src="img/svgs/undraw_status_update_jjgk 1.svg" alt="" />
              <p class="text-white text-md">Learn to work in a team</p>
            </div>

            <div>
              <img src="img/svgs/undraw_quiz_nlyh 1.svg" alt="" />
              <p class="text-white text-md">
                Chance to become a mentor upon the completion of your program
              </p>
            </div>

            <div>
              <img src="img/svgs/undraw_about_me_wa29 1.svg" alt="" />
              <p class="text-white text-md">
                Chance to boost your portfolio with projects and challenges
              </p>
            </div>
          </div>

          <p class="text-white container text-center">
            Resources and events to boost your skill in a matter of time
          </p>
        </section>
        <section class="section-four container">
          <div class="section-four-title">
            <h2>Courses available</h2>
            <a href="" class="text-black text-md">
              Browse by categories
            </a>
          </div>

          <div class="course-wrap">
            <div class="course course-1">
              <div></div>
              <p class="para-1"></p>
              <p class="para-2"></p>
              <p class="para-3"></p>
            </div>

            <div class="course course-2">
              <div></div>
              <p class="para-1"></p>
              <p class="para-2"></p>
              <p class="para-3"></p>
            </div>

            <div class="course course-3">
              <div></div>
              <p class="para-1"></p>
              <p class="para-2"></p>
              <p class="para-3"></p>
            </div>

            <div class="course course-4">
              <div></div>
              <p class="para-1"></p>
              <p class="para-2"></p>
              <p class="para-3"></p>
            </div>

            <div class="course course-5">
              <div></div>
              <p class="para-1"></p>
              <p class="para-2"></p>
              <p class="para-3"></p>
            </div>

            <div class="course course-6">
              <div></div>
              <p class="para-1"></p>
              <p class="para-2"></p>
              <p class="para-3"></p>
            </div>
          </div>
        </section>

        <section class="section-five">
          <div class="container">
            <h2>CLIENT TESTIMONIALS</h2>
            <p>Check out some students reviews and their experience</p>
            <p>Real Students, Real reviews</p>
          </div>

          <div class="container testimonies">
            <div class="testimony testimony-1">
              <div>
                <div class="student-image"></div>
                <h2 class="text-sm">Lorem ipsum</h2>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                quas molestias maxime earum
              </p>
            </div>

            <div class="testimony testimony-2">
              <div>
                <div class="student-image"></div>
                <h2 class="text-sm">Lorem ipsum</h2>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                quas molestias maxime earum
              </p>
            </div>

            <div class="testimony testimony-3">
              <div>
                <div class="student-image"></div>
                <h2 class="text-sm">Lorem ipsum</h2>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                quas molestias maxime earum
              </p>
            </div>
          </div>

          <div class="text-center d-flex flex-column justify-content-center">
            <h2>Still have more questions?</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem accusantium ea cupiditate architecto, quasi
              praesentium!
            </p>
            <a href="" class="btn btn-md text-white bg-blue">
              Get Started
            </a>
          </div>
        </section>

        <section class="section-six">
          <h2 class="container text-white footer-text-bold">CodeClanNigera</h2>
          <div class="container footer-links-wrap">
            <ul>
              <li class="footer-text-bold">SERVICES</li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
            </ul>

            <ul>
              <li class="footer-text-bold">ABOUT US</li>
              <li>
                <a href="#">Mentors</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
            </ul>

            <ul>
              <li class="footer-text-bold">CONNECT WITH US</li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Github</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
            </ul>
          </div>
        </section>

        <footer class="">
          <p class="container text-white">&copy; 2020, CodeClan.</p>
        </footer>
      </div>
    </LandingStyled>
  )
}

export default Landing
