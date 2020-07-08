import React from 'react';
import MentorDashboardSidebarStyled from './MentorDashboardSidebarStyled';
import codeClanLogo from '../../assets/image/codeClanLogoWhite.png';

function MentorDashboardSidebar() {
  return (
    <MentorDashboardSidebarStyled>
      <img src={codeClanLogo} alt="code clan" className="img-fluid" />
      <ul>
        <li>Mentees</li>
        <li>Courses</li>
        <li>Tasks</li>
      </ul>
    </MentorDashboardSidebarStyled>
  );
}

export default MentorDashboardSidebar;
