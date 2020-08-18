import React from 'react';
import DashboardSidebarStyled from './DashboardSidebarStyled';
import codeClanLogo from '../assets/image/codeClanLogoWhite.png';
import { Popconfirm } from 'antd';
import { QuestionCircleOutlined, LogoutOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authLogoutApi } from '../../state/auth/authActionCreator';
import { useHistory } from 'react-router-dom';
import MentorDashboardSidebarStyled from '../MentorDashbord/common/MentorDashboardSidebarStyled';
import { ReactComponent as DashboardStackLogo } from '../assets/svgs/dashboard/DashboardStack.svg';
import { ReactComponent as DashboardBulletLogo } from '../assets/svgs/dashboard/DashboardBullet.svg';

function DashboardSidebar({ showSidebar, tabs, path, authLogoutApi }) {
  const history = useHistory();

  const logoutUser = () => {
    authLogoutApi();
    history.push('/login/');
  };
  return (
    <MentorDashboardSidebarStyled showSidebar={showSidebar}>
      {/* <nav className="col-2 sidebar">
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
              <Link className="nav-link text-white" to={`${tab.link}`}>
                {tab.icon}
              </Link>
            </li>
          ))}
          <Popconfirm
            title="Are sure you want to log out？"
            okText="Yes"
            cancelText="Oppss"
            onConfirm={() => logoutUser()}
            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
          >
            <LogoutOutlined style={{ fontSize: '2rem', color: '#fff' }} />
          </Popconfirm>
          ,
        </ul>
      </nav> */}

      <img src={codeClanLogo} alt="code clan" className="img-fluid" />
      <ul>
        <li className="main-menu-link">
          <DashboardBulletLogo /> <Link to="/dashboard/"> Dashboard</Link>
        </li>

        {tabs.map(tab => (
          <li
            key={tab.id}
            className={` sub-menu ${path === tab.link ? 'active-icon ' : ''} `}
          >
            <DashboardStackLogo />

            <Link to={`${tab.link}`}> {tab.name}</Link>
          </li>
        ))}

        {/* <li className="sub-menu">
          <DashboardStackLogo />
          <Link to="/dashboard/mentor/mentees/"> Mentees</Link>
        </li>
        <li className="sub-menu">
          <DashboardStackLogo /> Courses
        </li>
        <li className="sub-menu">
          <DashboardStackLogo /> Tasks
        </li>

         */}
        <li className="logout__link">
          <Popconfirm
            title="Are sure you want to log out？"
            okText="Yes"
            placement="topLeft"
            cancelText="Oppss"
            onConfirm={() => logoutUser()}
            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
          >
            <button className="btn btn-lg btn-primary">
              <i class="fas fa-power-off"></i> Logout
            </button>
          </Popconfirm>
        </li>
      </ul>
    </MentorDashboardSidebarStyled>
  );
}

// const mapStateToProps = store => {
//   const { loading, data, error, errResponse } = store.auth;
//   return {
//     loading,
//     data,
//     error,
//     errResponse,
//   };
// };

const mapDispatchToProps = { authLogoutApi };

export default connect(null, mapDispatchToProps)(DashboardSidebar);
