import React, { useState, useEffect } from 'react';
import MentorDashboardSidebar from './common/MentorDashboardSidebar';
import DashboardHeader from '../common/DashboardHeader';
import MentorDashboardStyled from './MentorDashboardStyled';
import { useDispatch, useStore } from 'react-redux';
import { getUserProfileApi } from '../../state/user/userActionCreator';

function MentorDashboardLayout(Component) {
  return function DashboardPage(props) {
    const [showSidebar, setshowSidebar] = useState(false);
    const [userLoading, setUserLoading] = useState(false);

    const toggleSidebar = () => {
      setshowSidebar(!showSidebar);
    };
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
