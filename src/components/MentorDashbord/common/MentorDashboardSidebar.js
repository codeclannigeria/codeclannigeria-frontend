import React from 'react';
import MentorDashboardSidebarStyled from './MentorDashboardSidebarStyled';
import codeClanLogo from '../../assets/image/codeClanLogoWhite.png';
import { ReactComponent as DashboardStackLogo } from '../../assets/svgs/dashboard/DashboardStack.svg';
import { ReactComponent as DashboardBulletLogo } from '../../assets/svgs/dashboard/DashboardBullet.svg';
import { Link } from 'react-router-dom';

function MentorDashboardSidebar({ showSidebar }) {
  return (
    <MentorDashboardSidebarStyled showSidebar={showSidebar}>
      <img src={codeClanLogo} alt="code clan" className="img-fluid" />
      <ul>
        <li className="main-menu-link">
          <DashboardBulletLogo />{' '}
          <Link to="/dashboard/mentor/mentees"> Dashboard</Link>
        </li>

        <li className="sub-menu">
          <DashboardStackLogo />
          <Link to="/dashboard/mentor/mentees"> Mentees</Link>
        </li>
        <li className="sub-menu">
          <DashboardStackLogo /> Courses
        </li>
        <li className="sub-menu">
          <DashboardStackLogo /> Tasks
        </li>

        <li className="logout__link">
          <button className="btn btn-lg btn-primary">
            <i class="fas fa-power-off"></i> Logout
          </button>
        </li>
      </ul>
    </MentorDashboardSidebarStyled>
  );
}

export default MentorDashboardSidebar;
