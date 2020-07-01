import React from 'react';
import DashboardSidebarStyled from './DashboardSidebarStyled';
import codeClanLogo from '../assets/image/codeClanLogoWhite.png';

import { Link } from 'react-router-dom';

function DashboardSidebar({ showSidebar, tabs, path }) {
  return (
    <DashboardSidebarStyled showSidebar={showSidebar}>
      <nav className="col-2 sidebar">
        <ul className="nav flex-column">
          <li className="nav-item mb-5 mt-3">
            <Link className="active" to="/dashboard">
              <img className="img-fluid" src={codeClanLogo} alt="code clan" />
            </Link>
          </li>

          {tabs.map(tab => (
            <li
              key={tab.id}
              className={` nav-item mb-5 ${
                path === tab.link ? 'active-icon ' : ''
              } `}
            >
              <Link className="nav-link" to={`${tab.link}`}>
                {tab.icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </DashboardSidebarStyled>
  );
}

export default DashboardSidebar;
