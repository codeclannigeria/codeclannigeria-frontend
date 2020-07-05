import React from 'react';
import DashboardSidebarStyled from './DashboardSidebarStyled';
import codeClanLogo from '../assets/image/codeClanLogoWhite.png';
import { Popconfirm } from 'antd';
import { QuestionCircleOutlined, LogoutOutlined } from '@ant-design/icons';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authLogoutApi } from '../../state/auth/authActionCreator';
import { useHistory } from 'react-router-dom';

function DashboardSidebar({ showSidebar, tabs, path, authLogoutApi }) {
  const history = useHistory();

  const logoutUser = () => {
    authLogoutApi();
    history.push('/login/');
    // window.localStorage.removeItem("basemailer_acccess_token");
    // <Redirect to="/login" />
  };
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
      </nav>
    </DashboardSidebarStyled>
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
