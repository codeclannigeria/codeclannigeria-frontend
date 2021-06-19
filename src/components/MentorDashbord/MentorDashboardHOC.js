import React, { useState, useEffect } from 'react';
import MentorDashboardSidebar from './common/MentorDashboardSidebar';
import DashboardHeader from '../common/DashboardHeader';
import MentorDashboardStyled from './MentorDashboardStyled';
import { useDispatch, useStore, useSelector } from 'react-redux';
import { getUserProfileApi } from '../../state/user/userActionCreator';
import { message } from 'antd';

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
    const APIerror = useSelector(state => state.API.error);

    useEffect(() => {
      if (APIerror) {
        message.error(APIerror);
      }
    }, [APIerror]);

    useEffect(() => {
      if (!userState) {
        setUserLoading(true);
        dispatch(getUserProfileApi());
      }
      setUserLoading(false);
    }, [userState, dispatch, userLoading]);
    const { url } = props.match;

    return (
      <div>
        <MentorDashboardStyled>
          <MentorDashboardSidebar path={url} showSidebar={showSidebar} />
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
