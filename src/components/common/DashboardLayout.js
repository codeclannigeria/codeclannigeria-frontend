import React, { useState } from 'react';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';
import DashboardLayoutStyled from './DashboardLayoutStyled';
import { ReactComponent as HomeIcon } from '../assets/svgs/dashboard/cli_home.svg';
import { ReactComponent as UserGroup } from '../assets/svgs/dashboard/cli_group.svg';
import { ReactComponent as Settings } from '../assets/svgs/dashboard/cli_settings.svg';
import { ReactComponent as Bookmark } from '../assets/svgs/dashboard/cli_bookmark.svg';
import { ReactComponent as Message } from '../assets/svgs/dashboard/cli_message.svg';
import { ReactComponent as Avatar } from '../assets/svgs/dashboard/cli_avatar.svg';

const DashboardLayout = Component => {
  return function DashboardPage(props) {
    const [showSidebar, setshowSidebar] = useState(false);
    const toggleSidebar = () => {
      setshowSidebar(!showSidebar);
    };
    const tabs = [
      { id: 1, icon: <HomeIcon />, link: '/dashboard' },
      { id: 2, icon: <UserGroup />, link: '#' },
      { id: 3, icon: <Message />, link: '#' },
      { id: 4, icon: <Bookmark />, link: '/dashboard/pending-task' },
      { id: 5, icon: <Avatar />, link: '#' },
      { id: 6, icon: <Settings />, link: '#' },
    ];
    const { url } = props.match;
    return (
      <DashboardLayoutStyled>
        <DashboardSidebar tabs={tabs} path={url} showSidebar={showSidebar} />
        <DashboardHeader
          toggleSidebar={toggleSidebar}
          showSidebar={showSidebar}
        />
        <div class="dashboard-wrap row">
          <div class="dashboard-content col-md-10 container">
            <Component {...props} />
          </div>
        </div>
      </DashboardLayoutStyled>
    );
  };
};

export default DashboardLayout;
