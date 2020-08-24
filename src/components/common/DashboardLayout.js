import React, { useState, useEffect } from 'react';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';
import DashboardLayoutStyled from './DashboardLayoutStyled';

import { useStore, useDispatch, useSelector } from 'react-redux';
import {
  getUserProfileApi,
  getUserMentorProfileApi,
} from '../../state/user/userActionCreator';
import CustomLoader from './Spinner/CustomLoader';
import MentorDashboardStyled from '../MentorDashbord/MentorDashboardStyled';
import { message } from 'antd';

// const pageStyle = {
//   position: 'absolute',
// };

const DashboardLayout = Component => {
  return function DashboardPage(props) {
    const [showSidebar, setshowSidebar] = useState(false);
    const [userLoading, setUserLoading] = useState(false);
    const toggleSidebar = () => {
      setshowSidebar(!showSidebar);
    };
    const tabs = [
      // {
      //   id: 1,
      //   icon: <i class="fas fa-home fa-2x"></i>,
      //   link: '/dashboard',
      //   name: '',
      // },
      {
        id: 1,
        icon: <i class="fas fa-user-friends"></i>,
        link: '/dashboard/mentee/mentor',
        name: 'Mentor',
      },
      {
        id: 2,
        icon: <i class="fas fa-code"></i>,
        link: '/dashboard/track',
        name: 'Tracks',
      },
      {
        id: 3,
        icon: <i class="fas fa-tasks"></i>,
        link: '/dashboard/pending-task',
        name: 'Tasks',
      },
      {
        id: 4,
        icon: <i class="fas fa-user-ninja"></i>,
        link: '/dashboard/mentee/profile',
        name: 'Profile',
      },

      {
        id: 5,
        icon: <i class="fas fa-sliders-h"></i>,
        link: '#',
        name: 'Settings',
      },
    ];
    const { url } = props.match;

    const store = useStore();
    const userState = store.getState().user.data;
    const dispatch = useDispatch();
    const APIerror = useSelector(state => state.API.error);

    useEffect(() => {
      if (!userState) {
        setUserLoading(true);
        dispatch(getUserProfileApi());
        dispatch(getUserMentorProfileApi());
      }
      setUserLoading(false);
    }, [userState, dispatch, userLoading]);

    useEffect(() => {
      if (APIerror) {
        message.error(APIerror);
      }
    }, [APIerror]);
    return (
      <MentorDashboardStyled>
        <DashboardSidebar tabs={tabs} path={url} showSidebar={showSidebar} />

        {!userLoading ? (
          <>
            <DashboardHeader
              toggleSidebar={toggleSidebar}
              showSidebar={showSidebar}
            />
            <div className="dashboard-wrap row">
              <div className="dashboard-content col-md-9 container">
                <Component {...props} />
              </div>
            </div>
          </>
        ) : (
          <CustomLoader />
        )}
      </MentorDashboardStyled>
    );
  };
};

export default DashboardLayout;
