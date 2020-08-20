import React, { useState, useEffect } from 'react';
import { DashboardStyled } from './MenteeDashboardStyled';

// Images
import newspaper from '../assets/image/dashboard/newspaper.png';
// import { ReactComponent as Avatar } from '../assets/svgs/dashboard/user_avatar.svg';
import DashboardLayout from '../common/DashboardLayout';
import PendingTasks from './pendingTask/pendingTasks';
import WelcomeAlert from './WelcomeAlert';
import { Progress } from 'antd';
import TrackEnroll from './tracks/TrackEnroll';

import { connect } from 'react-redux';
import { getAllTasksAction } from '../../state/tasks/tasksActionCreator';
import CustomLoader from '../common/Spinner/CustomLoader';

function Dashboard({
  userLoading,
  userData,
  error,
  errResponse,
  getAllTasksAction,
  tasksData,
  history,
}) {
  const [showTracksEnrollModal, setshowTracksEnrollModal] = useState();

  useEffect(() => {
    if (userData && userData.tracks.length >= 1) {
      setshowTracksEnrollModal(true);
    }
  }, []);

  // useEffect(() => {
  //   if (userData) {
  //     const { city, country, phoneNumber } = userData;
  //     if (!city || !country || !phoneNumber) {
  //       // return
  //       history.push({
  //         pathname: '/dashboard/mentee/profile',
  //         state: { editProfile: true },
  //       });
  //     }
  //   }
  // }, [userData]);

  useEffect(() => {
    if (userData) {
      const { tracks } = userData;
      if (tracks.length >= 1) {
        getAllTasksAction(tracks[0].id);
      }
    }
  }, [getAllTasksAction, userData]);

  const handleShowTracksEnrollModal = () => {
    setshowTracksEnrollModal(true);
  };

  return (
    <DashboardStyled>
      <TrackEnroll
        visible={showTracksEnrollModal}
        onCreate={() => setshowTracksEnrollModal(false)}
        // initialData={userData}
        onCancel={() => {
          setshowTracksEnrollModal(false);
        }}
      />
      <WelcomeAlert
        user={userData}
        enroll={handleShowTracksEnrollModal}
        visible={showTracksEnrollModal}
        looading={userLoading}
      />
      <div className="cards">
        <div className="card">
          <div className="card-body mentor-card">
            <div className=" card-image card-image-1">
              {/* <Avatar /> */}
              <i class="text-blue fas fa-user-check"></i>
            </div>
            <h6 className="card-subtitle">
              <span>1</span>
              <p>Approved Mentor</p>
            </h6>
          </div>
        </div>

        <div className="card">
          <div className="card-body resource-card">
            <div className="card-image card-image-2">
              <i class="fa fa-code" aria-hidden="true"></i>
            </div>
            <h6 className="card-subtitle">
              {/* <span>2</span> */}
              <p>
                {userData && userData.tracks.length > 0
                  ? `${userData.tracks[0].title || 'No Track'} Enrolled`
                  : 'No Track enrolled'}
              </p>
            </h6>
          </div>
        </div>

        <div className="card">
          <div className="card-body task-card">
            <div className="card-image card-image-3">
              <img className="img-fluid" alt="contents" src={newspaper} />
            </div>
            <h6 className="card-subtitle">
              <span>{tasksData ? tasksData.totalCount : 0}</span>
              <p>Pending Task</p>
            </h6>
          </div>
        </div>

        <div className="card">
          <div className="card-body progress-card">
            <Progress
              type="circle"
              width={80}
              strokeColor="#1f59bb"
              percent={75}
            />
            <p className="card-subtitle" style={{ marginTop: '0' }}>
              Stage I
            </p>
          </div>
        </div>
      </div>

      <div className="pending-tasks-wrap mt-5">
        {userData && userData.tracks.length > 0 ? (
          <PendingTasks
            tasksData={tasksData}
            track={userData.tracks[0].title}
          />
        ) : null}{' '}
      </div>
    </DashboardStyled>
  );
}

const mapStateToProps = store => {
  const {
    loading: userLoading,
    data: userData,
    error,
    errResponse,
  } = store.user;

  const { data: tasksData } = store.tasks;
  return {
    userLoading,
    userData,
    error,
    errResponse,
    tasksData,
  };
};

const mapDispatchToProps = { getAllTasksAction };

export default DashboardLayout(
  connect(mapStateToProps, mapDispatchToProps)(Dashboard)
);
