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
              {/* <p style={{ fontSize: '0.9rem' }}>
                You are adviced to send an email or a WhatsApp message to your
                mentor requesting to be added to your respective track channel
                on Slack. You can see your mentor information on the portal when
                you click on the mentor Tab.{' '}
              </p>
              <p style={{ fontSize: '0.9rem' }}>
                It's important you do this so we don't drop you from the
                program. We have started to take measures on dropping inactive
                accounts to free up some space on our server. We are trying as
                much as possible to spend so little on server cost.
              </p> */}
              <small>
                *Start your journey with CodeClan by enrolling in a track
              </small>
            </div>

            <div className="d-flex w-100 justify-content-end mr-3">
              {/* <a
                className="btn slack__btn btn-primary mr-2"
                href="https://communityinviter.com/apps/codeclannigeria/codeclannigeria"
              >
                Join our Slack Channel
              </a> */}

              {tracks && tracks.length >= 1 ? (
                <span
                  id="close__user__info"
                  onClick={() => setShowMessage(false)}
                >
                  x
                </span>
              ) : (
                <div className="get__started">
                  <button
                    className="btn btn-small btn-warning"
                    onClick={() => enroll()}
                  >
                    Enroll Now
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </CSSTransition>
    </DashboardStyled>
  );
}

export default WelcomeAlert;
