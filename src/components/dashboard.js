import React from 'react';
import { DashboardStyled } from './dashboardStyled';

function Dashboard() {
  return (
    <DashboardStyled>
      <div class="dashboard-wrap row">
        <nav class="col-2 sidebar">
          <ul class="nav flex-column">
            <li class="nav-item mb-5 mt-3">
              <a class="active" href="#">
                <img
                  class="img-fluid"
                  src="img/svgs/ccn-logo-white.svg"
                  alt="code clan logo"
                />
              </a>
            </li>
            <li class="nav-item mb-5 active-icon">
              <a class="nav-link" href="#">
                <img src="img/svgs/home-icon.svg" alt="home-icon" />
              </a>
            </li>
            <li class="nav-item mb-5">
              <a class="nav-link" href="#">
                <img src="img/svgs/group-icon.svg" alt="group-icon" />
              </a>
            </li>
            <li class="nav-item mb-5">
              <a class="nav-link" href="#">
                <img src="img/svgs/comment-icon.svg" alt="comment-icon" />
              </a>
            </li>
            <li class="nav-item mb-5">
              <a class="nav-link" href="#">
                <img src="img/svgs/Vector-2.svg" alt="icon" />
              </a>
            </li>
            <li class="nav-item mb-5">
              <a class="nav-link" href="#">
                <img src="img/svgs/Vector-1.svg" alt="icon" />
              </a>
            </li>
            <li class="nav-item mt-5 mb-5">
              <a class="nav-link" href="#">
                <img src="img/svgs/settings.svg" alt="settings-icon" />
              </a>
            </li>
          </ul>
        </nav>

        <div class="dashboard-content col-md-10 container">
          <div class="top-bar mt-3 mb-4">
            <nav class="top-nav">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search dashboard"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-outline-secondary bg-blue"
                    type="button"
                    id="button-addon2"
                  >
                    <img src="img/search.png" alt="" />
                  </button>
                </div>
              </div>

              <div class="user__details">
                <div class="">
                  <img src="img/notification.png" alt="notification-icon" />
                </div>

                <div class="display-profile">
                  <div class="display-picture"></div>
                  <p class="mt-2 ml-4">John Doe</p>
                </div>

                <div class="hamburger-menu">
                  <i class="fas fa-bars fa-2x text-blue"></i>
                </div>
              </div>
            </nav>
          </div>

          <div class="main-top">
            <img class="ellipse_top img-fluid" src="img/Ellipse.png" />

            <div class="row">
              <div class="user__welcome col-lg-8 col-md-8 col-sm-8">
                <p class="user__name">Hi, Barly Vallendito</p>
                <p>
                  Sinau Business Class Student is a shared for class to
                  collaborate, communicate, manage information. Powerful
                  Features And Integrations.
                </p>
                <small>*Business Class Start Early October 2019</small>
              </div>

              <div class="get__started col-lg-4 col-md-4 col-sm-8 d-flex align-items-end">
                <button class="btn btn-block btn-primary mr-5">
                  Get Started
                </button>
              </div>
            </div>
            {/* <!-- <img src="" class="background-vector img-fluid" alt="" srcset=""> --> */}
            <span id="close__user__info">x</span>
          </div>
          <div class="cards">
            <div class="card">
              <div class="card-body mentor-card">
                <div class=" card-image card-image-1">
                  <img class="img-fluid" src="img/Group.png" />
                </div>
                <h6 class="card-subtitle">
                  <span>1</span>
                  <p>Approved Mentor</p>
                </h6>
              </div>
            </div>

            <div class="card">
              <div class="card-body resource-card">
                <div class="card-image card-image-2">
                  <img class="img-fluid" src="img/newspaper.png" />
                </div>
                <h6 class="card-subtitle">
                  <span>2</span>
                  <p>New Resources</p>
                </h6>
              </div>
            </div>

            <div class="card">
              <div class="card-body task-card">
                <div class="card-image card-image-3">
                  <img class="img-fluid" src="img/newspaper2.png" />
                </div>
                <h6 class="card-subtitle">
                  <span>1</span>
                  <p>Pending Task</p>
                </h6>
              </div>
            </div>

            <div class="card">
              <div class="card-body progress-card">
                <img class="card-title" src="img/Progress Bar.png" />
                <p class="card-subtitle">HTML Fundamentals II</p>
              </div>
            </div>
          </div>

          <div class="pending-tasks-wrap mt-5">
            <div class="header">
              <p class="p-2 pl-5">Pending Tasks</p>
            </div>

            <div class="solid-bar"></div>

            <div class="pending-tasks pb-5">
              <div class="pending-task"></div>

              <div class="pending-task"></div>

              <div class="pending-task"></div>

              <div class="pending-task"></div>
            </div>

            <div class="pagination">
              <nav aria-label="...">
                <ul class="pagination pagination-sm">
                  <li class="page-item" aria-current="page">
                    <span class="page-link active-page">
                      1<span class="sr-only">(current)</span>
                    </span>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      ...
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      6
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </DashboardStyled>
  );
}

export default Dashboard;
