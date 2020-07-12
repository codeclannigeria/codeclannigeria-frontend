import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Ellipse from '../assets/image/dashboard/Ellipse.png';

import './WelcomeAlert.css';
import { DashboardStyled } from '../MenteeDashboard/MenteeDashboardStyled';

function WelcomeAlert({ user }) {
  const [showMessage, setShowMessage] = useState(true);
  const { firstName, lastName } = user;
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
                Hi, {firstName} {lastName}
              </p>
              <p>
                Sinau Business className Student is a shared for className to
                collaborate, communicate, manage information. Powerful Features
                And Integrations.
              </p>
              <small>*Business className Start Early October 2019</small>
            </div>

            <div className="get__started col-lg-4 col-md-4 col-sm-8 d-flex align-items-end">
              <button className="btn btn-block btn-primary mr-5">
                Get Started
              </button>
            </div>
          </div>
          <span id="close__user__info" onClick={() => setShowMessage(false)}>
            x
          </span>
        </div>
      </CSSTransition>
    </DashboardStyled>
  );
}

export default WelcomeAlert;
