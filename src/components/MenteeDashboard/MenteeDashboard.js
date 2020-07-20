import React, { useState, useEffect } from 'react';
import { DashboardStyled } from './MenteeDashboardStyled';
import { Skeleton } from 'antd';

// Images
import newspaper from '../assets/image/dashboard/newspaper.png';
import resource from '../assets/image/dashboard/resources.png';
// import { ReactComponent as Avatar } from '../assets/svgs/dashboard/user_avatar.svg';
import DashboardLayout from '../common/DashboardLayout';
import PendingTasks from './pendingTask/pendingTasks';
import WelcomeAlert from './WelcomeAlert';
import { connect } from 'react-redux';
import { Progress } from 'antd';
import TrackEnroll from './tracks/TrackEnroll';

function Dashboard({ loading, data, error, errResponse }) {
  const [showTracksEnrollModal, setshowTracksEnrollModal] = useState(null);

  useEffect(() => {
    if (data && data.tracks.length >= 1) {
      setshowTracksEnrollModal(false);
    }
  }, []);

  const handleShowTracksEnrollModal = () => {
    setshowTracksEnrollModal(true);
  };

  return (
    <DashboardStyled>
      <TrackEnroll
        visible={showTracksEnrollModal}
        onCreate={() => setshowTracksEnrollModal(false)}
        // initialData={data}
        onCancel={() => {
          setshowTracksEnrollModal(false);
        }}
      />
      <WelcomeAlert
        user={data}
        enroll={handleShowTracksEnrollModal}
        visible={showTracksEnrollModal}
        loading={loading}
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
                {data && data.tracks.length > 0
                  ? `${data.tracks[0].title} Enrolled`
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
              <span>1</span>
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
        <PendingTasks />
      </div>
    </DashboardStyled>
  );
}

const mapStateToProps = store => {
  const { loading, data, error, errResponse } = store.user;
  return {
    loading,
    data,
    error,
    errResponse,
  };
};

// const mapDispatchToProps = { getTracksAction };

export default DashboardLayout(connect(mapStateToProps)(Dashboard));
