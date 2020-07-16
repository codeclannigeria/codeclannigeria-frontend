import React from 'react';
import MentorDashboardSidebarStyled from './MentorDashboardSidebarStyled';
import codeClanLogo from '../../assets/image/codeClanLogoWhite.png';
import { ReactComponent as DashboardStackLogo } from '../../assets/svgs/dashboard/DashboardStack.svg';
import { ReactComponent as DashboardBulletLogo } from '../../assets/svgs/dashboard/DashboardBullet.svg';
import { Link, useHistory } from 'react-router-dom';
import { Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { authLogoutApi } from '../../../state/auth/authActionCreator';

function MentorDashboardSidebar({ showSidebar, authLogoutApi }) {
  const history = useHistory();

  const logoutUser = () => {
    authLogoutApi();
    history.push('/login/');
  };
  return (
    <MentorDashboardSidebarStyled showSidebar={showSidebar}>
      <img src={codeClanLogo} alt="code clan" className="img-fluid" />
      <ul>
        <li className="main-menu-link">
          <DashboardBulletLogo />{' '}
          <Link to="/dashboard/mentor/mentees/"> Dashboard</Link>
        </li>

        <li className="sub-menu">
          <DashboardStackLogo />
          <Link to="/dashboard/mentor/mentees/"> Mentees</Link>
        </li>
        <li className="sub-menu">
          <DashboardStackLogo /> Courses
        </li>
        <li className="sub-menu">
          <DashboardStackLogo /> Tasks
        </li>

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

const mapDispatchToProps = { authLogoutApi };

export default connect(null, mapDispatchToProps)(MentorDashboardSidebar);
