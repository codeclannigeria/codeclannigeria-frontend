import React from 'react';
import MentorDashboardSidebar from './common/MentorDashboardSidebar';
import DashboardHeader from '../common/DashboardHeader';
import MentorDashboardStyled from './MentorDashboardStyled';

function MentorDashboardLayout(Component) {
  return function DashboardPage(props) {
    return (
      <div>
        <MentorDashboardStyled>
          <MentorDashboardSidebar />
          <DashboardHeader />
          <div className="dashboard-wrap row">
            <div className="dashboard-content col-md-10 container ">
              <Component {...props} />
            </div>
          </div>
        </MentorDashboardStyled>
      </div>
    );
  };
}

export default MentorDashboardLayout;
