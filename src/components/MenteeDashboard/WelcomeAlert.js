import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Ellipse from '../assets/image/dashboard/Ellipse.png';

import './WelcomeAlert.css';
import { DashboardStyled } from '../MenteeDashboard/MenteeDashboardStyled';
import { Spin } from 'antd';
// import { Skeleton } from 'antd';

function WelcomeAlert({ user, enroll, visible, loading }) {
  const [showMessage, setShowMessage] = useState(true);
  const { firstName, lastName, tracks } = user;

  return (
    <DashboardStyled>
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="alert"
        unmountOnExit
      >
        <div className="main-top">
          <img
            className="ellipse_top img-fluid"
            src={Ellipse}
            alt="Background Ellipse"
          />

          <div className="row">
            <div className="user__welcome col-lg-8 col-md-8 col-sm-8">
              <p className="user__name">
                Hi,
                {!loading && (lastName || firstName) ? (
                  ` ${firstName} ${lastName}`
                ) : (
                  <Spin />
                )}
              </p>
              <p>
                Welcome to CodeClan Nigeria, Our goal is to turn 500+ people
                into developers every 3 months. To achieve this, we are creating
                clans in each of Nigeria city.
              </p>
              <small>
                *Start your journey with CodeClan by enrolling in a track
              </small>
            </div>

            {tracks && tracks.length >= 1 ? (
              <span
                id="close__user__info"
                onClick={() => setShowMessage(false)}
              >
                x
              </span>
            ) : (
              <div className="get__started col-lg-4 col-md-4 col-sm-8 d-flex align-items-end">
                <button
                  className="btn btn-block btn-primary mr-5"
                  onClick={() => enroll()}
                >
                  Enroll Now
                </button>
              </div>
            )}
          </div>
        </div>
      </CSSTransition>
    </DashboardStyled>
  );
}

export default WelcomeAlert;
