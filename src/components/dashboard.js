import React, { useState } from 'react';
import { DashboardStyled } from './dashboardStyled';
import DashboardSidebar from './common/DashboardSidebar';
import DashboardHeader from './common/DashboardHeader';

// Images
import newspaper from './assets/image/dashboard/newspaper.png';
import resource from './assets/image/dashboard/resources.png';
import { ReactComponent as Avatar } from './assets/svgs/dashboard/user_avatar.svg';
import DashboardLayout from './common/DashboardLayout';

function Dashboard() {
  return (
    <DashboardStyled>
      <div class="main-top">
        <img class="ellipse_top img-fluid" src="img/Ellipse.png" />

        <div class="row">
          <div class="user__welcome col-lg-8 col-md-8 col-sm-8">
            <p class="user__name">Hi, Barly Vallendito</p>
            <p>
              Sinau Business Class Student is a shared for class to collaborate,
              communicate, manage information. Powerful Features And
              Integrations.
            </p>
            <small>*Business Class Start Early October 2019</small>
          </div>

          <div class="get__started col-lg-4 col-md-4 col-sm-8 d-flex align-items-end">
            <button class="btn btn-block btn-primary mr-5">Get Started</button>
          </div>
        </div>
        {/* <!-- <img src="" class="background-vector img-fluid" alt="" srcset=""> --> */}
        <span id="close__user__info">x</span>
      </div>
      <div class="cards">
        <div class="card">
          <div class="card-body mentor-card">
            <div class=" card-image card-image-1">
              <Avatar />
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
              <img class="img-fluid" alt="Resource" src={resource} />
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
              <img class="img-fluid" alt="contents" src={newspaper} />
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
    </DashboardStyled>
  );
}

export default DashboardLayout(Dashboard);
