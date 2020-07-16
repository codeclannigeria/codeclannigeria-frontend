import React, { useState } from 'react';
import MentorDashboardSidebar from './common/MentorDashboardSidebar';
import DashboardHeader from '../common/DashboardHeader';
import MentorDashboardStyled from './MentorDashboardStyled';

function MentorDashboardLayout(Component) {
  return function DashboardPage(props) {
    const [showSidebar, setshowSidebar] = useState(false);
    const toggleSidebar = () => {
      setshowSidebar(!showSidebar);
    };
    return (
      <div>
        <MentorDashboardStyled>
          <MentorDashboardSidebar showSidebar={showSidebar} />
          <DashboardHeader
            toggleSidebar={toggleSidebar}
            showSidebar={showSidebar}
          />
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
