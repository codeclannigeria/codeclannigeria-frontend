import React from 'react';
import DashboardSidebarStyled from './DashboardSidebarStyled';
import codeClanLogo from '../assets/image/codeClanLogoWhite.png';
import { ReactComponent as HomeIcon } from '../assets/svgs/dashboard/cli_home.svg';
import { ReactComponent as UserGroup } from '../assets/svgs/dashboard/cli_group.svg';
import { ReactComponent as Settings } from '../assets/svgs/dashboard/cli_settings.svg';
import { ReactComponent as Bookmark } from '../assets/svgs/dashboard/cli_bookmark.svg';
import { ReactComponent as Message } from '../assets/svgs/dashboard/cli_message.svg';
import { ReactComponent as Avatar } from '../assets/svgs/dashboard/cli_avatar.svg';

function DashboardSidebar({ showSidebar }) {
  console.log(showSidebar);

  return (
    <DashboardSidebarStyled showSidebar={showSidebar}>
      <nav class="col-2 sidebar">
        <ul class="nav flex-column">
          <li class="nav-item mb-5 mt-3">
            <a class="active" href="#">
              <img class="img-fluid" src={codeClanLogo} alt="code clan" />
            </a>
          </li>
          <li class="nav-item mb-5 active-icon">
            <a class="nav-link" href="#">
              <HomeIcon />
            </a>
          </li>
          <li class="nav-item mb-5">
            <a class="nav-link" href="#">
              <UserGroup />
            </a>
          </li>
          <li class="nav-item mb-5">
            <a class="nav-link" href="#">
              <Message />
            </a>
          </li>
          <li class="nav-item mb-5">
            <a class="nav-link" href="#">
              <Bookmark />
            </a>
          </li>
          <li class="nav-item mb-5">
            <a class="nav-link" href="#">
              <Avatar />
            </a>
          </li>
          <li class="nav-item mt-5 mb-5">
            <a class="nav-link" href="#">
              <Settings />
            </a>
          </li>
        </ul>
      </nav>
    </DashboardSidebarStyled>
  );
}

export default DashboardSidebar;
