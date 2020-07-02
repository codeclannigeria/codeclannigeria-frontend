import React from 'react';
import { DashboardStyled } from './dashboardStyled';

// Images
import newspaper from './assets/image/dashboard/newspaper.png';
import resource from './assets/image/dashboard/resources.png';
import { ReactComponent as Avatar } from './assets/svgs/dashboard/user_avatar.svg';
import DashboardLayout from './common/DashboardLayout';
import PendingTasks from './dashboard/pendingTask/pendingTasks';
import WelcomeAlert from './dashboard/WelcomeAlert';

function Dashboard() {
  return (
    <DashboardStyled>
      <WelcomeAlert />
      <div className="cards">
        <div className="card">
          <div className="card-body mentor-card">
            <div className=" card-image card-image-1">
              <Avatar />
            </div>
            <h6 className="card-subtitle">
              <span>1</span>
              <p>Approved Mentor</p>
            </h6>
          </div>
        </div>

        <div className="card">
          <div className="card-body resource-card">
            <div className="card-image card-image-2">
              <img className="img-fluid" alt="Resource" src={resource} />
            </div>
            <h6 className="card-subtitle">
              <span>2</span>
              <p>New Resources</p>
            </h6>
          </div>
        </div>

        <div className="card">
          <div className="card-body task-card">
            <div className="card-image card-image-3">
              <img className="img-fluid" alt="contents" src={newspaper} />
            </div>
            <h6 className="card-subtitle">
              <span>1</span>
              <p>Pending Task</p>
            </h6>
          </div>
        </div>

        <div className="card">
          <div className="card-body progress-card">
            <img className="card-title" src="img/Progress Bar.png" />
            <p className="card-subtitle">HTML Fundamentals II</p>
          </div>
        </div>
      </div>

      <div className="pending-tasks-wrap mt-5">
        <PendingTasks />
      </div>
    </DashboardStyled>
  );
}

export default DashboardLayout(Dashboard);
