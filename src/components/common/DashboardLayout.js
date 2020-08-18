import React, { useState, useEffect } from 'react';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';
import DashboardLayoutStyled from './DashboardLayoutStyled';
import { ReactComponent as HomeIcon } from '../assets/svgs/dashboard/cli_home.svg';
import { ReactComponent as UserGroup } from '../assets/svgs/dashboard/cli_group.svg';
import { ReactComponent as Settings } from '../assets/svgs/dashboard/cli_settings.svg';
import { ReactComponent as Bookmark } from '../assets/svgs/dashboard/cli_bookmark.svg';
import { ReactComponent as Message } from '../assets/svgs/dashboard/cli_message.svg';
import { ReactComponent as Avatar } from '../assets/svgs/dashboard/cli_avatar.svg';
import { motion } from 'framer-motion';
import { useStore, useDispatch } from 'react-redux';
import { getUserProfileApi } from '../../state/user/userActionCreator';
import CustomLoader from './Spinner/CustomLoader';
import MentorDashboardStyled from '../MentorDashbord/MentorDashboardStyled';

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
        icon: <i class="fas fa-user-friends fa-2x"></i>,
        link: '/dashboard/mentee/mentor',
        name: 'Mentor',
      },
      {
        id: 2,
        icon: <i class="fas fa-code fa-2x"></i>,
        link: '/dashboard/track',
        name: 'Tracks',
      },
      {
        id: 3,
        icon: <i class="fas fa-tasks fa-2x"></i>,
        link: '/dashboard/pending-task',
        name: 'Tasks',
      },
      {
        id: 4,
        icon: <i class="fas fa-user-ninja fa-2x"></i>,
        link: '/dashboard/mentee/profile',
        name: 'Profile',
      },

      { id: 5, icon: <Settings />, link: '#', name: 'Settings' },
    ];
    const { url } = props.match;

    const store = useStore();
    const userState = store.getState().user.data;
    const dispatch = useDispatch();

    useEffect(() => {
      console.log('mounted');
      if (!userState) {
        setUserLoading(true);
        dispatch(getUserProfileApi());
      }
      setUserLoading(false);
    }, [userState, dispatch, userLoading]);

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
              <div className="dashboard-content col-md-10 container">
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
