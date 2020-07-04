import React from 'react';
import DashboardHeaderStyled from './DashboardHeaderStyled';

function DashboardHeader({ toggleSidebar, showSidebar }) {
  return (
    <DashboardHeaderStyled>
      <div className="top-bar mt-3 mb-4">
        <nav className="top-nav">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search dashboard"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary bg-blue"
                type="button"
                id="button-addon2"
              >
                <i className="fas fa-search text-white"></i>
                {/* <img src="img/search.png" alt="" /> */}
              </button>
            </div>
          </div>

          <div className="user__details">
            <div className="">
              <i className="far fa-bell fa-2x"></i>
            </div>

            <div className="display-profile">
              <div className="display-picture"></div>
              <p className="mt-2 ml-4">John Doe</p>
            </div>

            <div className="hamburger-menu" onClick={() => toggleSidebar()}>
              {!showSidebar ? (
                <i className="fas fa-bars fa-2x text-blue"></i>
              ) : (
                <i className="fas fa-times fa-2x text-blue"></i>
              )}
            </div>
          </div>
        </nav>
      </div>
    </DashboardHeaderStyled>
  );
}

export default DashboardHeader;
